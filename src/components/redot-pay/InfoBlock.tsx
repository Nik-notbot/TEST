import Icon from "@/components/ui/icon";

export default function InfoBlock() {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Важная информация
      </h3>
      <ul className="space-y-3 text-gray-700">
        <li className="flex items-start gap-3">
          <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
          <span className="text-base leading-relaxed">
            Инструкция и данные для входа будут направлены на Вашу почту
          </span>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
          <span className="text-base leading-relaxed">
            Для использования карты VPN не обязателен
          </span>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
          <span className="text-base leading-relaxed">
            По любым возникающим вопросам связанных с аккаунтом обращайтесь к
            @forbidden_john
          </span>
        </li>
      </ul>
    </div>
  );
}
