import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/lib/i18n/context";

export function FAQ() {
  const { t } = useLanguage();
  
  return (
    <section id="faq" className="w-full py-16 md:py-24 lg:py-28 bg-gray-50">
      <div className="container px-4 md:px-6 max-w-3xl">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            {t("faq.title")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("faq.description")}
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {t("faq.items").map((faq: any, index: number) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-gray-200">
              <AccordionTrigger className="text-left text-gray-800 hover:text-gray-900">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
