import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, ExternalLink, Send } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";

export function Contact() {
  const { t } = useLanguage();
  
  return (
    <section className="w-full py-16 md:py-24 lg:py-28 bg-white" id="contact">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            {t("contact.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-[700px]">
            {t("contact.description")}
          </p>
        </div>
        <div className="flex justify-center">
          <Card className="p-6 max-w-md w-full border-gray-200">
            <CardContent className="p-0 flex flex-col items-center space-y-6">
              <div className="mt-6 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-xl font-semibold mt-4">{t("contact.telegramTitle")}</h3>
              <p className="text-muted-foreground text-center">
                {t("contact.telegramDescription")}
              </p>
              <Button className="flex items-center gap-2 rounded-full px-8 w-full md:w-auto bg-gray-900 hover:bg-gray-800" 
                onClick={() => window.open("https://t.me/forbidden_john", "_blank")}>
                <Send className="w-5 h-5" />
                {t("contact.telegramButton")}
                <ExternalLink className="w-4 h-4 ml-1" />
              </Button>
              <p className="text-sm text-muted-foreground">
                {t("contact.responseTime")}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}