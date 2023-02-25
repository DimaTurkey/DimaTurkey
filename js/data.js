const user = {
  name: "Dima",
  surname: "Kyrylenko",
  userPhoto: "myphoto.jpg",
  qrQode: "qr-code.svg",
  dreams: [
    { src: "car.jpg", alt: "Машина часу моєї мрії" },
    { src: "home.jpg", alt: "Політ на Плутоніум" },
    { src: "voyage.jpg", alt: "Подорож до Моркворса" },
  ],
};

// arr це середня місячна платня індикам грамм корму
const arr = [
  500,
  700,
  800,
  1000,
  1200,
  1500,
  1800,
  2100,
  2400,
  2700,
  3000,
  3300,
];

const necessaryExpenses = 800;

const todo = [
  { month: "Червень", skill: "Збираю квіти" },
  { month: "Липень", skill: "Догляд тварин" },
  { month: "Серпень", skill: "Готуюсь до наступного класу" },
  { month: "Вересень", skill: "Самостійність в навчанні" },
  { month: "Жовтень", skill: "Креативність" },
  { month: "Листопад", skill: "Емоційна палітра" },
  { month: "Грудень", skill: "Креативність 2" },
  { month: "Січень", skill: "Лідерство в сніжках" },
  { month: "Лютий", skill: "Заводжу друзів" },
  { month: "Березень", skill: "Особистий бренд декорацій" },
  { month: "Квітень", skill: "Управління емоціями" },
  { month: "Травень", skill: "Мій місяць народження" },
];

export { user, arr, necessaryExpenses, todo };
