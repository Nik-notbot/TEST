const fetch = require("node-fetch");

exports.handler = async function(event) {
  try {
    const body = JSON.parse(event.body);

    // Приведение ключей body к нужным платежке именам
    const clientId = body.clientId || (body.customer ? body.customer.email : undefined);
    const invoiceId = body.invoiceId || body.description || undefined;
    const callbackUrl = body.callbackUrl || body.callback_url || undefined;
    const redirectUrl = body.redirectUrl || body.success_url || undefined;
    const cancelUrl = body.cancelUrl || body.fail_url || undefined;

    // Вытаскиваем переменные окружения
    const API_TOKEN = process.env.MERCHANT_API_TOKEN;
    const API_URL = process.env.MERCHANT_API_URL;

    // Логируем переменные (для отладки, потом убери)
    console.log("API_URL:", API_URL);
    console.log("API_TOKEN exists:", !!API_TOKEN);

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

    // Логируем payload для отладки
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

    // Получаем текст ответа и пытаемся распарсить как JSON
    const text = await response.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = { raw: text };
    }

    // Логируем ответ (важно для диагностики!)
    console.log("RAW RESPONSE:", text);

    if (response.ok && data.paymentUrl) {
      return { statusCode: 200, body: JSON.stringify({ paymentUrl: data.paymentUrl }) };
    } else {
      return { statusCode: 400, body: JSON.stringify({ error: data }) };
    }
  } catch (e) {
    console.error("ERROR:", e);
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) };
  }
};





