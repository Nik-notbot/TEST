import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import OrderForm from "@/components/redot-pay/OrderForm";
import { RedotPayFormData } from "@/types/redot-pay";

export default function RedotPayPurchase() {
  const navigate = useNavigate();

  const handleOrderSubmit = (formData: RedotPayFormData) => {
    console.log("Заказ отправлен:", formData);
    alert("Заказ принят! Мы свяжемся с вами в ближайшее время.");
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6 text-gray-600 hover:text-gray-800 transition-colors"
        >
          <Icon name="ArrowLeft" size={20} />
          Вернуться на главную
        </Button>

        <Card className="shadow-xl border border-gray-200 bg-white">
          <CardHeader className="text-center pb-8 pt-10">
            <CardTitle className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
              Заказ карты RedotPay
            </CardTitle>
            <p className="text-gray-600 text-lg leading-relaxed max-w-md mx-auto">
              Заполните форму для оформления виртуальной карты RedotPay
            </p>
          </CardHeader>
          <CardContent className="px-10 pb-10">
            <OrderForm onSubmit={handleOrderSubmit} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
