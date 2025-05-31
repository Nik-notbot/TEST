import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import FormField from "./FormField";
import InfoBlock from "./InfoBlock";
import { RedotPayFormData } from "@/types/redot-pay";
import {
  saveUserInfo,
  bindTransactionToUser,
} from "@/lib/supabase";
import {
  createPaymentSession,
  redirectToPayment,
} from "@/lib/payment";

export default function OrderForm() {
  const [formData, setFormData] = useState<RedotPayFormData>({
    gmail: "",
    telegram: "",
    comment: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Сохраняем пользователя
      const inserted = await saveUserInfo({
        gmail: formData.gmail,
        telegram: formData.telegram,
      });
      const userId = inserted[0].id;

      // 2. Создаём чек на 2400 RUB
      const paymentRequest = {
        amount: 2400,
        currency: "RUB",
        description: formData.comment || `Оплата заявки #${userId}`,
        customer_email: formData.gmail,
        customer_phone: "",
        return_url: `${window.location.origin}/payment-success`,
        callback_url: `${window.location.origin}/api/payment-callback`,
      };

      const paymentResult = await createPaymentSession(paymentRequest);
      const transactionId = paymentResult.transaction_id;
      const paymentUrl = paymentResult.payment_url;

      // 3. Привязываем транзакцию к пользователю
      await bindTransactionToUser(userId, transactionId);

      // 4. Редиректим пользователя на страницу оплаты
      redirectToPayment(paymentUrl);
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(`Ошибка: ${error.message}`);
      } else {
        alert("Неизвестная ошибка. Попробуйте снова.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    field: keyof RedotPayFormData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <FormField
        id="email"
        label="Email адрес"
        placeholder="ваш@email.com"
        type="email"
        value={formData.gmail}
        onChange={(value) => handleInputChange("gmail", value)}
        required
      />

      <FormField
        id="telegramNick"
        label="Ник в телеграм"
        placeholder="@ваш_ник"
        value={formData.telegram}
        onChange={(value) => handleInputChange("telegram", value)}
        required
      />

      <InfoBlock />

      <FormField
        id="comment"
        label="Комментарий (отображается в чеке)"
        placeholder="Ваш комментарий к заказу..."
        value={formData.comment}
        onChange={(value) => handleInputChange("comment", value)}
        optional
        multiline
      />

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Icon name="Loader2" className="mr-2 h-4 w-4 animate-spin" />
            Отправка...
          </>
        ) : (
          <>
            <Icon name="Send" className="mr-2 h-4 w-4" />
            Отправить заявку и оплатить 2400 ₽
          </>
        )}
      </Button>
    </form>
  );
}







