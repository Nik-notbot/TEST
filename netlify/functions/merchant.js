const fetch = require("node-fetch");

exports.handler = async function(event) {
  try {
    // Получаем данные из POST-запроса от фронта
    const body = JSON.parse(event.body);

    // ВАШ Bearer токен (лучше брать из переменных окружения!)
    const API_TOKEN = process.env.MERCHANT_API_TOKEN;

    // Собираем payload для создания транзакции
    const payload = {
      pricing: {
        local: {
          amount: body.amount,         // сумма, например: 500
          currency: body.currency,     // валюта, например: "RUB"
        }
      },
      selectedProvider: {
        method: "ALL"
      },
      clientId: body.clientId,          // например, Telegram-ник
      invoiceId: body.invoiceId,        // уникальный идентификатор заказа
      callbackUrl: body.callbackUrl,    // URL для webhook'а (ваш backend)
      redirectUrl: body.redirectUrl,    // успешная оплата
      cancelUrl: body.cancelUrl         // отмена/ошибка
      // clientIp: body.clientIp,       // можно добавить, если есть
    };

    // Запрос к API платежки
    const response = await fetch("https://api.merchant001.io/v1/transaction/merchant", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    // Если успешно, возвращаем paymentUrl
    if (response.ok && data.paymentUrl) {
      return {
        statusCode: 200,
        body: JSON.stringify({ paymentUrl: data.paymentUrl }),
      };
    } else {
      // Ошибка платежки
      return {
        statusCode: 400,
        body: JSON.stringify({ error: data }),
      };
    }
  } catch (e) {
    // Любая другая ошибка
    return {
      statusCode: 500,
      body: JSON.stringify({ error: e.message }),
    };
  }
};


