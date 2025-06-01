const fetch = require("node-fetch");

exports.handler = async function(event) {
  try {
    const body = JSON.parse(event.body);

    const API_TOKEN = process.env.MERCHANT_API_TOKEN;
    const API_URL = process.env.MERCHANT_API_URL || "https://api.merchant001.io/v1";

    const payload = {
      pricing: {
        local: {
          amount: body.amount,
          currency: body.currency,
        }
      },
      selectedProvider: {
        method: "ALL"
      },
      clientId: body.clientId,
      invoiceId: body.invoiceId,
      callbackUrl: body.callbackUrl,
      redirectUrl: body.redirectUrl,
      cancelUrl: body.cancelUrl
    };

    const response = await fetch(`${API_URL}/transaction/merchant`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (response.ok && data.paymentUrl) {
      return {
        statusCode: 200,
        body: JSON.stringify({ paymentUrl: data.paymentUrl }),
      };
    } else {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: data }),
      };
    }
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: e.message }),
    };
  }
};



