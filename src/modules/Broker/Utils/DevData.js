const mainInfo = [
  {
    header: 'Год основания',
    description: '1998 год',
  },
  {
    header: 'Минимальный депозит',
    description: '0 $',
  },
  {
    header: 'Адрес сайта',
    description: 'www.alpari.com',
    isLink: true,
  },
  {
    header: 'Ценообразование',
    description: 'ECN ',
  },
  {
    header: 'Валюта депозита',
    description: 'USD, EUR, RUB ',
  },
  {
    header: 'Регулирование ',
    description: 'IFSC (Белиз) ',
  },
  {
    header: 'Мобильная Торговля',
    description: 'iOS, Android',
  },
  {
    header: 'Дов. управление',
    description: 'PAMM',
  },
  {
    header: 'Партнерские программы',
    description: 'Есть',
  },
  {
    header: 'Программа лояльности',
    description: 'Есть',
  },
  {
    header: 'Бонус на депозит',
    description: '100%',
  },
];

const tabs = [
  {
    alias: 'Standard.mt4',
    content: [
      {
        header: 'Валюта депозита',
        description: 'USD, EUR',
      },
      {
        header: 'Торговая платформа',
        description: 'MetaTrader 4',
      },
      {
        header: 'Мин. депозит',
        description: '20$',
      },
      {
        header: 'Кредитное плечо',
        description: '1:1000 — 1:10',
      },
      {
        header: 'Инструменты',
        description: '33',
      },
      {
        header: 'Залог на перекрытые позиции ',
        description: '50% залога локированных позиций',
      },
      {
        header: 'Метод исполнения ',
        description: 'Instant Execution',
      },
      {
        header: 'Макс. объем ордера, лоты ',
        description: '0 $',
      },
      {
        header: 'Макс. количество ордеров ',
        description: '500',
      },
      {
        header: 'Stop Out ',
        description: '20%',
      },
      {
        header: 'Тип спреда',
        description: 'Плавающий',
      },
    ],
  },
  {
    alias: 'Ecn.mt4',
    content: [
      {
        header: 'Валюта депозита',
        description: 'USD, EUR',
      },
      {
        header: 'Торговая платформа',
        description: 'MetaTrader 4',
      },
      {
        header: 'Мин. депозит',
        description: '20$',
      },
      {
        header: 'Кредитное плечо',
        description: '1:1000 — 1:10',
      },
      {
        header: 'Метод исполнения ',
        description: 'Instant Execution',
      },
      {
        header: 'Макс. объем ордера, лоты ',
        description: '0 $',
      },
      {
        header: 'Макс. количество ордеров ',
        description: '500',
      },
      {
        header: 'Stop Out ',
        description: '20%',
      },
      {
        header: 'Тип спреда',
        description: 'Плавающий',
      },
    ],
  },
  {
    alias: 'Pro-ecn.mt4',
    content: [
      {
        header: 'Инструменты',
        description: '33',
      },
      {
        header: 'Залог на перекрытые позиции ',
        description: '50% залога локированных позиций',
      },
      {
        header: 'Метод исполнения ',
        description: 'Instant Execution',
      },
      {
        header: 'Макс. объем ордера, лоты ',
        description: '0 $',
      },
      {
        header: 'Макс. количество ордеров ',
        description: '500',
      },
      {
        header: 'Stop Out ',
        description: '20%',
      },
      {
        header: 'Тип спреда',
        description: 'Плавающий',
      },
    ],
  },
  {
    alias: 'Nano.mt4',
    content: [
      {
        header: 'Валюта депозита',
        description: 'USD, EUR',
      },
      {
        header: 'Торговая платформа',
        description: 'MetaTrader 4',
      },
      {
        header: 'Мин. депозит',
        description: '20$',
      },
      {
        header: 'Кредитное плечо',
        description: '1:1000 — 1:10',
      },
      {
        header: 'Инструменты',
        description: '33',
      },
      {
        header: 'Залог на перекрытые позиции ',
        description: '50% залога локированных позиций',
      },
    ],
  },
  {
    alias: 'Standard.mt5',
    content: [
      {
        header: 'Валюта депозита',
        description: 'USD, EUR',
      },
      {
        header: 'Торговая платформа',
        description: 'MetaTrader 4',
      },
      {
        header: 'Мин. депозит',
        description: '20$',
      },
      {
        header: 'Кредитное плечо',
        description: '1:1000 — 1:10',
      },
      {
        header: 'Макс. количество ордеров ',
        description: '500',
      },
      {
        header: 'Stop Out ',
        description: '20%',
      },
      {
        header: 'Тип спреда',
        description: 'Плавающий',
      },
    ],
  },
  {
    alias: 'Ecn.mt5',
    content: [
      {
        header: 'Мин. депозит',
        description: '20$',
      },
      {
        header: 'Кредитное плечо',
        description: '1:1000 — 1:10',
      },
      {
        header: 'Инструменты',
        description: '33',
      },
      {
        header: 'Залог на перекрытые позиции ',
        description: '50% залога локированных позиций',
      },
      {
        header: 'Метод исполнения ',
        description: 'Instant Execution',
      },
      {
        header: 'Макс. объем ордера, лоты ',
        description: '0 $',
      },
      {
        header: 'Макс. количество ордеров ',
        description: '500',
      },
      {
        header: 'Stop Out ',
        description: '20%',
      },
      {
        header: 'Тип спреда',
        description: 'Плавающий',
      },
    ],
  },
];

const specials = [
  {
    description: 'Торговые сигналы',
  },
  {
    description: 'Поддержка системы Autochartist',
  },
  {
    description: 'Наличие браузерной платформы',
  },
  {
    description: 'Возврат части спреда',
  },
];

const imgPath = './assets/img/';

const payments = [
  {
    src: `${imgPath}visa.png`,
  },
  {
    src: `${imgPath}mc.png`,
  },
  {
    src: `${imgPath}neteller.png`,
  },
  {
    src: `${imgPath}apay.png`,
  },
  {
    src: `${imgPath}skrill.png`,
  },
  {
    src: `${imgPath}tinkoff.png`,
  },
  {
    src: `${imgPath}qiwi.png`,
  },
  {
    src: `${imgPath}wm.png`,
  },
  {
    src: `${imgPath}btc.png`,
  },
  {
    src: `${imgPath}vtb.png`,
  },
  {
    src: `${imgPath}psb.png`,
  },
  {
    src: `${imgPath}sber.png`,
  },
  {
    src: `${imgPath}pskb.png`,
  },
  {
    src: `${imgPath}wallet1.png`,
  },
  {
    src: `${imgPath}oxxo.png`,
  },
];

const banner = [
  {
    src: `${imgPath}banner-big.jpg`,
    media: '(min-width: 1680px)',
  },
  {
    src: `${imgPath}banner-medium.jpg`,
    media: '(min-width: 1366px) and (max-width: 1679px)',
  },
  {
    src: `${imgPath}banner-small.jpg`,
    media: '(min-width: 767px) and (max-width: 1365px)',
  },
  {
    src: `${imgPath}banner-medium.jpg`,
    media: '(max-width: 767px)',
  },
];

export { banner, specials, payments, mainInfo, tabs };
