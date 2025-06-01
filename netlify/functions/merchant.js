const fetch = require("node-fetch");

exports.handler = async function(event) {
  try {
    const body = JSON.parse(event.body);

    // Приведение ключей body к нужным платежке именам (могут приходить с фронта иначе)
    const clientId = body.clientId || (body.customer ? body.customer.email : undefined);
    const invoiceId = body.invoiceId || body.description || undefined;
    const callbackUrl = body.callbackUrl || body.callback_url || undefined;
    const redirectUrl = body.redirectUrl || body.success_url || undefined;
    const cancelUrl = body.cancelUrl || body.fail_url || undefined;

    // Вытаскиваем переменные окружения
    const API_TOKEN = process.env.MERCHANT_API_TOKEN;
    const API_URL = process.env.MERCHANT_API_URL;

    // Собираем payload
    const payload = {
      pricing: {
        local: {
          amount: body.amount,
          currency: body.currency,
        }
      },
      selectedProvider: { method: "ALL" },
      clientId,
      invoiceId,
      callbackUrl,
      redirectUrl,
      cancelUrl
    };

    // Логируем payload для отладки (можно убрать)
    console.log("PAYLOAD:", payload);

    // Запрос в API платежки
    const response = await fetch(`${API_URL}/transaction/merchant`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload)
    });

    // Парсим ответ
    const text = await response.text();
    let data;
    try { data = JSON.parse(text); } catch { data = { raw: text }; }

    if (response.ok && data.paymentUrl) {
      return { statusCode: 200, body: JSON.stringify({ paymentUrl: data.paymentUrl }) };
    } else {
      return { statusCode: 400, body: JSON.stringify({ error: data }) };
    }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) };
  }
};




