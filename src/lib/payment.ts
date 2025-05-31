const MERCHANT_API_URL = '/.netlify/functions/merchant';

export interface PaymentRequest {
  amount: number;
  currency: string;
  description: string;
  customer_email: string;
  customer_phone?: string;
  return_url?: string;
  callback_url?: string;
}

export async function createPaymentSession(data: PaymentRequest) {
  const transactionData = {
    amount: data.amount,
    currency: data.currency,
    description: data.description,
    success_url: data.return_url || `${window.location.origin}/payment-success`,
    fail_url: `${window.location.origin}/payment-failed`,
    callback_url: data.callback_url || `${window.location.origin}/api/payment-callback`,
    customer: {
      email: data.customer_email,
      phone: data.customer_phone || "",
    },
  };

  const response = await fetch(MERCHANT_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(transactionData),
  });

  if (!response.ok) {
    const errorText = await response.text();
    let errorData;
    try {
      errorData = JSON.parse(errorText);
    } catch {
      errorData = { message: errorText };
    }
    throw new Error(
      `Ошибка создания транзакции: ${response.status} - ${errorData.message || "Неизвестная ошибка"}`
    );
  }

  const result = await response.json();
  const paymentUrl = result.url || result.payment_url || result.redirect_url;
  const transactionId = result.id || result.transaction_id;

  if (!paymentUrl || !transactionId) {
    throw new Error("Ошибка: не получен URL оплаты или transactionId");
  }

  return {
    ...result,
    payment_url: paymentUrl,
    transaction_id: transactionId,
  };
}

export function redirectToPayment(paymentUrl: string) {
  if (!paymentUrl) throw new Error("URL для оплаты не указан");
  try {
    const url = new URL(paymentUrl);
    setTimeout(() => {
      window.location.href = paymentUrl;
    }, 100);
  } catch {
    throw new Error("Некорректный URL для оплаты");
  }
}
