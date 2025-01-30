import { Prisma } from '@prisma/client';
import { categories, ingredients, products } from './constants';
import { prisma } from './prisma-client';
import { hashSync } from 'bcrypt';

const randomDecimalNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

const generateProductItem = ({
  productId,
  productType,
  size,
}: {
  productId: number;
  productType?: 1 | 2;
  size?: 20 | 30 | 40;
}) => {
  return {
    productId,
    price: randomDecimalNumber(200, 600),
    productType,
    size,
  } as Prisma.ProductItemUncheckedCreateInput;
};

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullname: 'User Test',
        email: 'usertest.com',
        password: hashSync('123456', 10),
        verified: new Date(),
        role: 'USER',
      },
      {
        fullname: 'Admin Test',
        email: 'admintest.com',
        password: hashSync('123456', 10),
        verified: new Date(),
        role: 'ADMIN',
      },
    ],
  });

  await prisma.category.createMany({
    data: categories,
  });
  await prisma.ingredient.createMany({
    data: ingredients,
  });
  await prisma.product.createMany({
    data: products,
  });

  const pizza1 = await prisma.product.create({
    data: {
      name: 'Пепперони',
      categoryId: 2,
      imageUrl:
        'https://media.dodostatic.net/image/r:584x584/11ee7d612fc7b7fca5be822752bee1e5.avif',
      ingredients: {
        connect: ingredients.slice(0, 3),
      },
    },
  });

  const pizza2 = await prisma.product.create({
    data: {
      name: 'Сырная',
      categoryId: 2,
      imageUrl:
        'https://media.dodostatic.net/image/r:584x584/11ee7d610d2925109ab2e1c92cc5383c.avif',
      ingredients: {
        connect: ingredients.slice(4, 5),
      },
    },
  });

  const pizza3 = await prisma.product.create({
    data: {
      name: 'Барбекю',
      categoryId: 2,
      imageUrl:
        'https://media.dodostatic.net/image/r:584x584/11ee7d6110059795842d40396bcf1e73.avif',
      ingredients: {
        connect: ingredients.slice(3, 7),
      },
    },
  });

  await prisma.productItem.createMany({
    data: [
      // Пицца "Пепперони"
      generateProductItem({ productId: pizza1.id, productType: 1, size: 20 }),
      generateProductItem({ productId: pizza1.id, productType: 2, size: 30 }),
      generateProductItem({ productId: pizza1.id, productType: 2, size: 40 }),

      // Пицца "Сырная"
      generateProductItem({ productId: pizza2.id, productType: 1, size: 20 }),
      generateProductItem({ productId: pizza2.id, productType: 1, size: 30 }),
      generateProductItem({ productId: pizza2.id, productType: 1, size: 40 }),
      generateProductItem({ productId: pizza2.id, productType: 2, size: 20 }),
      generateProductItem({ productId: pizza2.id, productType: 2, size: 30 }),
      generateProductItem({ productId: pizza2.id, productType: 2, size: 40 }),

      // Пицца "Барбекю"
      generateProductItem({ productId: pizza3.id, productType: 1, size: 20 }),
      generateProductItem({ productId: pizza3.id, productType: 2, size: 30 }),
      generateProductItem({ productId: pizza3.id, productType: 2, size: 40 }),

      // Остальные продукты
      generateProductItem({ productId: 1 }),
      generateProductItem({ productId: 2 }),
      generateProductItem({ productId: 3 }),
      generateProductItem({ productId: 4 }),
      generateProductItem({ productId: 5 }),
      generateProductItem({ productId: 6 }),
      generateProductItem({ productId: 7 }),
      generateProductItem({ productId: 8 }),
      generateProductItem({ productId: 9 }),
    ],
  });

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        token: '1111',
        totalAmount: 0,
      },
      {
        userId: 2,
        token: '2222',
        totalAmount: 0,
      },
    ],
  });

  await prisma.cartItem.create({
    data: {
      cartId: 1,
      quantity: 2,
      productItemId: 1,
      ingredients: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
      },
    },
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (error) {
    console.log(error);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
