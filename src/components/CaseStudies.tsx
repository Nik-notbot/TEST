import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export function CaseStudies() {
  const cases = [
    {
      id: 1,
      title: "Wise",
      description: "Оптимизация процесса верификации пользователей для международных переводов",
      image: "/placeholder.svg",
      result: "Сокращение времени верификации на 73%"
    },
    {
      id: 2,
      title: "Revolut",
      description: "Интеграция биометрической верификации для открытия счетов",
      image: "/placeholder.svg",
      result: "Повышение уровня безопасности при 99.8% точности"
    },
    {
      id: 3,
      title: "Binance",
      description: "Масштабируемое KYC-решение для обработки миллионов верификаций",
      image: "/placeholder.svg",
      result: "Успешное прохождение соответствия нормативам в 180+ странах"
    }
  ];

  return (
    <section id="case-studies" className="w-full py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Примеры внедрения
          </h2>
          <p className="text-muted-foreground text-lg max-w-[700px]">
            Мы гордимся сотрудничеством с ведущими финансовыми платформами
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((caseStudy) => (
            <Card key={caseStudy.id} className="overflow-hidden">
              <div className="relative">
                <AspectRatio ratio={16 / 9}>
                  <img 
                    src={caseStudy.image} 
                    alt={caseStudy.title} 
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
              </div>
              <CardHeader>
                <CardTitle>{caseStudy.title}</CardTitle>
                <CardDescription>{caseStudy.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{caseStudy.result}</p>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <p className="text-sm text-blue-600 font-medium">Подробнее</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
