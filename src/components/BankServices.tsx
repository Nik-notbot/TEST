import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/lib/i18n/context";

export function BankServices() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const openTelegram = () => {
    window.open("https://t.me/forbidden_john", "_blank");
  };

  // Функция для получения чистого ключа логотипа
  const getCleanLogoKey = (name: string) => {
    const cleanName = name.toLowerCase().replace(/[^a-z0-9]/g, "");
    const specialCases: Record<string, string> = {
      bybitvirtualcard: "bybit",
      bybitвиртуальнаякарта: "bybit",
      bybit: "bybit",
    };
    return specialCases[cleanName] || cleanName;
  };

  // Fallback-изображения для всех банков
  const logoFallbacks: Record<string, string> = {
    bybit: "https://crypto-central.io/library/uploads/bybit_logo-min.png",
    binance:
      "https://public.bnbstatic.com/20190405/eb2349c3-b2f8-4a93-a286-8f86a62ea9d8.png",
    revolut:
      "https://play-lh.googleusercontent.com/9Agn2TZHIyOR4GGB4LcOU4VXwE2OcK47qwGY8XPZXz4u55ehNfpGuEBeNq_cbvH0z5A",
    redotpay:
      "https://play-lh.googleusercontent.com/kvP-BmU-swM_AqJSTgCFZEc44L2qgC32LWF2xctra2Px8FkSriGv9D7aqMp5FU2u2Q",
    bitget: "https://s2.coinmarketcap.com/static/img/coins/200x200/11092.png",
    coinbase:
      "https://seeklogo.com/images/C/coinbase-coin-logo-C86F46D7B8-seeklogo.com.png",
    okx: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/OKX_Logo.svg/2048px-OKX_Logo.svg.png",
    bingx: "https://www.cryptunit.com/exchangeicons/176.png",
  };

  return (
    <section id="banks" className="w-full py-12 md:py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            {t("bankServices.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-[700px] mb-6">
            {t("bankServices.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {t("bankServices.banks").map((bank: any) => {
            const logoKey = getCleanLogoKey(bank.name);
            const isRedotPay = logoKey === "redotpay";

            const handleBuyClick = () => {
              if (isRedotPay) {
                navigate("/redotpay-purchase");
              } else {
                openTelegram();
              }
            };
            return (
              <Card
                key={bank.id}
                className="overflow-hidden border-none shadow-lg transition-all duration-300 hover:shadow-xl flex flex-col h-full"
              >
                <CardContent className="p-6 flex flex-col items-center h-full">
                  <div className="h-20 w-20 mb-6 flex items-center justify-center bg-white rounded-full overflow-hidden shadow-sm border border-gray-100">
                    <img
                      src={`https://s3-symbol-logo.tradingview.com/${logoKey}--600.png`}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          logoFallbacks[logoKey] || "/placeholder.svg";
                      }}
                      alt={bank.name}
                      className="max-h-14 max-w-14 object-contain rounded-full"
                      onLoad={() =>
                        console.log(`Успешно загружено: ${bank.name}`)
                      }
                      onErrorCapture={() =>
                        console.log(`Ошибка загрузки: ${bank.name}`)
                      }
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{bank.name}</h3>
                  <p className="text-center text-muted-foreground mb-auto">
                    {bank.description}
                  </p>
                  <div className="w-full mt-6">
                    <Button
                      variant="outline"
                      className="w-full border-gray-300 text-gray-700 hover:bg-gray-100"
                      onClick={
                        bank.name === "RedotPay" ? handleBuyClick : openTelegram
                      }
                    >
                      {t("bankServices.buyButton")} {bank.price}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Блок индивидуального запроса */}
        <div className="flex justify-center mb-10">
          <Card className="overflow-hidden border-none shadow-lg transition-all duration-300 hover:shadow-xl flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 max-w-3xl w-full">
            <CardContent className="p-8 flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/4 flex justify-center">
                <div className="h-24 w-24 flex items-center justify-center bg-gray-900 rounded-full overflow-hidden shadow-md">
                  <Star className="h-12 w-12 text-white" />
                </div>
              </div>
              <div className="md:w-3/4 space-y-4 text-center md:text-left">
                <h3 className="text-2xl font-bold">
                  {t("bankServices.customRequest.title")}
                </h3>
                <p className="text-muted-foreground">
                  {t("bankServices.customRequest.description")}
                </p>
                <Button
                  className="bg-gray-900 hover:bg-gray-800 text-white px-8 rounded-full"
                  onClick={openTelegram}
                >
                  <MessageSquare className="mr-2 h-4 w-4" />{" "}
                  {t("bankServices.customRequest.button")}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
