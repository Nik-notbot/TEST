export type Locale = "ru" | "en";

export interface Translations {
  [key: string]: any;
}

export const translations: Record<Locale, Translations> = {
  ru: {
    header: {
      home: "Главная",
      services: "Сервисы",
      features: "Услуги",
      faq: "FAQ",
      catalog: "Каталог",
    },
    hero: {
      title: "Проходим KYC в финансовых сервисах за вас",
      description:
        "Наша сеть локальных партнеров гарантирует безопасную и законную верификацию в ведущих банковских и платежных системах через доверенных представителей в соответствующих странах",
      button: "Каталог",
    },
    bankServices: {
      title: "Мы поможем пройти KYC в популярных сервисах",
      description:
        "Полное сопровождение процесса верификации от начала до успешного завершения через наших доверенных представителей",
      buyButton: "Купить KYC от",
      customRequest: {
        title: "Индивидуальный запрос",
        description:
          "Нужен особый финансовый сервис или специальные условия? Мы подберем персональное решение под ваши требования.",
        button: "Обсудить в Telegram",
      },
      banks: [
        {
          id: 1,
          name: "ByBit Виртуальная карта",
          description:
            "Помощь в прохождении всех уровней верификации на криптобирже ByBit",
          price: "2 999 ₽",
        },
        {
          id: 2,
          name: "Wise",
          description:
            "Помощь в прохождении верификации и открытии счета в Wise для международных переводов",
          price: "5 999 ₽",
        },
        {
          id: 3,
          name: "RedotPay",
          description:
            "Сопровождение процесса KYC для получения доступа к платёжной системе RedotPay",
          price: "2 999 ₽",
        },
        {
          id: 4,
          name: "Binance",
          description:
            "Сопровождение процесса верификации KYC на криптовалютной бирже Binance",
          price: "2 499 ₽",
        },
        {
          id: 5,
          name: "Revolut",
          description:
            "Консультации по прохождению верификации и получению полного доступа к функциям Revolut",
          price: "11 999 ₽",
        },
        {
          id: 6,
          name: "Bitget",
          description:
            "Полная поддержка в оформлении и верификации аккаунта на платформе Bitget",
          price: "2 499 ₽",
        },
        {
          id: 7,
          name: "Coinbase",
          description:
            "Консультации и помощь в прохождении верификации на платформе Coinbase",
          price: "2 499 ₽",
        },
        {
          id: 8,
          name: "OKX",
          description:
            "Содействие в успешном прохождении KYC-процедур на бирже OKX",
          price: "2 499 ₽",
        },
        {
          id: 9,
          name: "BingX",
          description:
            "Сопровождение регистрации и верификации аккаунта BingX с соблюдением всех требований",
          price: "2 499 ₽",
        },
      ],
    },
    features: {
      title: "Наши услуги",
      description:
        "Полный спектр консультационных услуг по прохождению KYC и верификации",
      approach: {
        title: "Наш подход к сопровождению",
        description:
          "Мы предлагаем полный комплекс услуг по консультированию и сопровождению прохождения KYC-процедур",
        individual: {
          title: "Индивидуальный подход",
          description:
            "Персональная консультация для каждого клиента с учетом его потребностей и конкретной ситуации.",
        },
        fullSupport: {
          title: "Полное сопровождение",
          description:
            "Мы проведем вас через все этапы KYC и поможем избежать распространенных ошибок и отказов.",
        },
        timeSaving: {
          title: "Экономия времени",
          description:
            "Наши клиенты проходят верификацию в разы быстрее, чем при самостоятельных попытках.",
        },
      },
      services: [
        {
          title: "Консультация по KYC",
          description:
            "Детальное объяснение процесса и требований KYC в выбранном вами сервисе.",
        },
        {
          title: "Подготовка документов",
          description:
            "Помощь в подготовке всех необходимых документов в соответствии с требованиями сервиса.",
        },
        {
          title: "Сопровождение процедуры",
          description:
            "Пошаговое руководство и поддержка на всех этапах прохождения верификации.",
        },
        {
          title: "Исправление ошибок",
          description:
            "Помощь в случае отказа и консультация по исправлению ошибок для успешного прохождения KYC.",
        },
        {
          title: "Корпоративная верификация",
          description:
            "Сопровождение прохождения KYC для юридических лиц и бизнес-аккаунтов.",
        },
        {
          title: "Консультация по выбору сервиса",
          description:
            "Помощь в выборе оптимального финансового сервиса под ваши потребности.",
        },
      ],
    },
    contact: {
      title: "Получите консультацию",
      description:
        "Наши специалисты помогут вам успешно пройти KYC верификацию",
      telegramTitle: "Напишите нам в Telegram",
      telegramDescription:
        "Быстрый и удобный способ получить консультацию по прохождению KYC",
      telegramButton: "Написать в Telegram",
      responseTime: "Обычно отвечаем в течение часа",
    },
    faq: {
      title: "Часто задаваемые вопросы",
      description: "Ответы на популярные вопросы о наших услугах",
      items: [
        {
          question: "Почему стоит обратиться к вам за помощью с KYC?",
          answer:
            "Процесс KYC-верификации может быть сложным и запутанным, особенно если вы сталкиваетесь с ним впервые. Мы имеем большой опыт в сопровождении клиентов и знаем все нюансы и требования популярных сервисов. Наша помощь существенно увеличивает шансы на быстрое и успешное прохождение верификации.",
        },
        {
          question:
            "Сколько времени занимает процесс верификации с вашей помощью?",
          answer:
            "С нашей помощью подготовка документов и прохождение всех этапов верификации обычно занимает от 1 до 3 дней, в зависимости от сервиса и его текущей загрузки. Самостоятельное прохождение может занять гораздо больше времени из-за возможных ошибок и отказов.",
        },
        {
          question: "Как происходит процесс консультации и сопровождения?",
          answer:
            "После обращения к нам мы проводим первичную консультацию, оцениваем вашу ситуацию, подбираем необходимые документы, помогаем правильно их подготовить, и затем сопровождаем через все этапы верификации. При необходимости мы помогаем исправить ошибки и пройти верификацию повторно.",
        },
        {
          question: "Можете ли вы гарантировать успешное прохождение KYC?",
          answer:
            "Мы не можем дать 100% гарантии, так как окончательное решение принимает сам сервис. Однако наш опыт и знание требований значительно повышают шансы на успех. В случае отказа мы всегда готовы помочь с анализом причин и повторным прохождением верификации.",
        },
      ],
    },
    footer: {
      slogan:
        "Профессиональное сопровождение верификации для финансовых сервисов",
      privacyPolicy: "Политика обработки персональных данных",
      termsOfService: "Условия использования",
      copyright: "© 2024-2025 HEY, KYC! Все права защищены.",
    },
  },
  en: {
    header: {
      home: "Home",
      services: "Services",
      features: "Features",
      faq: "FAQ",
      catalog: "Catalog",
    },
    hero: {
      title: "Professional KYC Assistance for Your Financial Services",
      description:
        "Our network of local partners ensures safe and legal verification in leading banking and payment systems through trusted representatives in the respective countries",
      button: "Catalog",
    },
    bankServices: {
      title: "We Help Pass KYC in Popular Services",
      description:
        "Complete support for the verification process from start to successful completion through our trusted representatives",
      buyButton: "Buy KYC from",
      customRequest: {
        title: "Custom Request",
        description:
          "Need a special financial service or custom conditions? We'll create a personalized solution for your requirements.",
        button: "Discuss on Telegram",
      },
      banks: [
        {
          id: 1,
          name: "ByBit Virtual Card",
          description:
            "Assistance in passing all verification levels on the ByBit crypto exchange",
          price: "30 USDT",
        },
        {
          id: 2,
          name: "Wise",
          description:
            "Assistance in passing verification and opening an account in Wise for international transfers",
          price: "60 USDT",
        },
        {
          id: 3,
          name: "RedotPay",
          description:
            "Support for the KYC process to gain access to the RedotPay payment system",
          price: "30 USDT",
        },
        {
          id: 4,
          name: "Binance",
          description:
            "Support through the KYC verification process on the Binance cryptocurrency exchange",
          price: "25 USDT",
        },
        {
          id: 5,
          name: "Revolut",
          description:
            "Consultation on verification and gaining full access to Revolut features",
          price: "120 USDT",
        },
        {
          id: 6,
          name: "Bitget",
          description:
            "Full support in setting up and verifying your account on the Bitget platform",
          price: "20 USDT",
        },
        {
          id: 7,
          name: "Coinbase",
          description:
            "Consultations and assistance in passing verification on the Coinbase platform",
          price: "20 USDT",
        },
        {
          id: 8,
          name: "OKX",
          description:
            "Assistance in successfully completing KYC procedures on the OKX exchange",
          price: "20 USDT",
        },
        {
          id: 9,
          name: "BingX",
          description:
            "Support for registration and verification of your BingX account in compliance with all requirements",
          price: "20 USDT",
        },
      ],
    },
    features: {
      title: "Our Services",
      description:
        "A full range of consulting services for KYC and verification",
      approach: {
        title: "Our Approach to Support",
        description:
          "We offer a full range of consulting services to guide you through KYC procedures",
        individual: {
          title: "Individual Approach",
          description:
            "Personal consultation for each client considering their specific needs and situation.",
        },
        fullSupport: {
          title: "Full Support",
          description:
            "We'll guide you through all stages of KYC and help avoid common mistakes and rejections.",
        },
        timeSaving: {
          title: "Time Saving",
          description:
            "Our clients pass verification much faster than with independent attempts.",
        },
      },
      services: [
        {
          title: "KYC Consultation",
          description:
            "Detailed explanation of the process and KYC requirements in your chosen service.",
        },
        {
          title: "Document Preparation",
          description:
            "Assistance in preparing all necessary documents in accordance with service requirements.",
        },
        {
          title: "Procedure Support",
          description:
            "Step-by-step guidance and support at all stages of the verification process.",
        },
        {
          title: "Error Correction",
          description:
            "Assistance in case of rejection and consultation on correcting errors for successful KYC completion.",
        },
        {
          title: "Corporate Verification",
          description:
            "Support for completing KYC for legal entities and business accounts.",
        },
        {
          title: "Service Selection Consultation",
          description:
            "Help in choosing the optimal financial service for your needs.",
        },
      ],
    },
    contact: {
      title: "Get a Consultation",
      description:
        "Our specialists will help you successfully pass KYC verification",
      telegramTitle: "Write to us on Telegram",
      telegramDescription:
        "A quick and convenient way to get advice on passing KYC",
      telegramButton: "Write on Telegram",
      responseTime: "We usually respond within an hour",
    },
    faq: {
      title: "Frequently Asked Questions",
      description: "Answers to popular questions about our services",
      items: [
        {
          question: "Why should I contact you for help with KYC?",
          answer:
            "The KYC verification process can be complex and confusing, especially if you are encountering it for the first time. We have extensive experience in supporting clients and know all the nuances and requirements of popular services. Our assistance significantly increases the chances of rapid and successful verification.",
        },
        {
          question: "What documents will be needed to pass KYC?",
          answer:
            "For basic verification, you usually need proof of identity (passport, ID card) and proof of address (utility bill, bank statement). Some services may require additional documents. We will provide an exact list of required documents for a specific service during the consultation.",
        },
        {
          question:
            "How long does the verification process take with your help?",
          answer:
            "With our help, preparing documents and completing all stages of verification usually takes from 1 to 3 days, depending on the service and its current workload. Self-completion can take much longer due to possible errors and rejections.",
        },
        {
          question: "How does the consultation and support process work?",
          answer:
            "After contacting us, we conduct an initial consultation, assess your situation, select the necessary documents, help prepare them correctly, and then accompany you through all stages of verification. If necessary, we help correct errors and pass verification again.",
        },
        {
          question: "Can you guarantee successful KYC completion?",
          answer:
            "We cannot give a 100% guarantee, as the final decision is made by the service itself. However, our experience and knowledge of requirements significantly increase the chances of success. In case of rejection, we are always ready to help with analyzing the reasons and re-passing verification.",
        },
      ],
    },
    footer: {
      slogan: "Professional verification support for financial services",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      copyright: "© 2024-2025 HEY, KYC! All rights reserved.",
    },
  },
};
