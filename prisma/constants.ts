export const categories = [
  {
    name: 'Завтрак',
  },
  {
    name: 'Пицца',
  },
  {
    name: 'Бургеры',
  },
  {
    name: 'Коктейли',
  },
  {
    name: 'Напитки',
  },
  {
    name: 'Десерты',
  },
];

export const ingredients = [
  {
    name: 'Моцарелла',
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png',
    price: 79,
  },
  {
    name: 'Шампиньоны',
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324',
    price: 59,
  },
  {
    name: 'Острый перец халапеньо',
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png',
    price: 69,
  },
  {
    name: 'Пряная говядина',
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/11ef5ed5f8f64595a6d6a99c1fe6f7f0.png',
    price: 120,
  },
  {
    name: 'Сыр чеддер и пармезан',
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796',
    price: 87,
  },
  {
    name: 'Томаты',
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67',
    price: 65,
  },
  {
    name: 'Сочные ананасы',
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6795BA2A0',
    price: 80,
  },
  {
    name: 'Бекон',
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA637AAB68F',
    price: 94,
  },
  {
    name: 'Цыпленок',
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A',
    price: 76,
  },
].map((item, index) => ({ ...item, id: index + 1 }));

export const products = [
  {
    categoryId: 1,
    name: 'Омлет с томатами',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/0193bb2e6e3976508d9f73dc7d211c73.avif',
  },
  {
    categoryId: 1,
    name: 'Омлет с беконом и шампиньонами',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/0193bb2bfe2a716597c66396669cf5c4.avif',
  },
  {
    categoryId: 2,
    name: 'Сырники с малиновым вареньем',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ef9060f35d7c26bf41590b9079febe.avif',
  },
  {
    categoryId: 6,
    name: 'Сырники',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ef9060dd723610942e8f368b03540a.avif',
  },
  {
    categoryId: 4,
    name: 'Ореховый латте',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61b12220ab911ff4fa42ef585d.avif',
  },
  {
    categoryId: 6,
    name: 'Маффин с арахисом',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee79700c2ea0539d556ccf3da1feb7.avif',
  },
  {
    categoryId: 6,
    name: 'Макарон с манго',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ef8c97600099aabe2eab81a37c62d1.avif',
  },
  {
    categoryId: 5,
    name: 'Морс',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11eecf75072bd81390b9c29dd01666c3.avif',
  },
  {
    categoryId: 3,
    name: 'Бургер',
    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee796ff041fe1f94c903576dcfd01e.avif',
  },
];
