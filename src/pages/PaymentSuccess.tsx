import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { setUserPaidByTransaction } from "@/lib/supabase";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const PaymentSuccess: React.FC = () => {
  const query = useQuery();
  const navigate = useNavigate();
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [errorText, setErrorText] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const transactionId = query.get("transactionId") || query.get("id");
      if (!transactionId) {
        setStatus("error");
        setErrorText("Не найден transactionId в URL.");
        return;
      }
      try {
        await setUserPaidByTransaction(transactionId);
        setStatus("success");
      } catch (err: unknown) {
        setStatus("error");
        if (err instanceof Error) {
          setErrorText(err.message);
        } else {
          setErrorText("Не удалось обновить статус оплаты.");
        }
      }
    })();
  }, [query, navigate]);

  if (status === "loading") {
    return <div className="flex items-center justify-center h-screen"><p>Проверяем статус оплаты...</p></div>;
  }

  if (status === "error") {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-semibold text-red-600">Ошибка</h2>
        <p className="mt-4 text-red-700">{errorText}</p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-blue-600 text-white px-4 py-2 rounded"
        >
          На главную
        </button>
      </div>
    );
  }

  return (
    <div className="p-8 text-center">
      <h2 className="text-3xl font-semibold text-green-600">Оплата прошла успешно!</h2>
      <p className="mt-4">Спасибо за оплату. Мы обновили ваш статус.</p>
      <button
        onClick={() => navigate("/")}
        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded"
      >
        На главную
      </button>
    </div>
  );
};

export default PaymentSuccess;
