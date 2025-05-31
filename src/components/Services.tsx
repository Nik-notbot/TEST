import { ServiceCard } from "@/components/ServiceCard";
import { UserCheck, Building, FileCheck, CheckCircle2, Users, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";

export function Services() {
  const { t } = useLanguage();
  
  const serviceIcons = [
    <UserCheck className="w-5 h-5 text-gray-700" key="usercheck" />,
    <FileCheck className="w-5 h-5 text-gray-700" key="filecheck" />,
    <CheckCircle2 className="w-5 h-5 text-gray-700" key="checkcircle" />,
    <ShieldCheck className="w-5 h-5 text-gray-700" key="shieldcheck" />,
    <Users className="w-5 h-5 text-gray-700" key="users" />,
    <Building className="w-5 h-5 text-gray-700" key="building" />
  ];

  return (
    <section id="services" className="w-full py-16 md:py-24 lg:py-28 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            {t("features.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-[700px]">
            {t("features.description")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t("features.services").map((service: any, index: number) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={serviceIcons[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
