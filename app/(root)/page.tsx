import { Container, Filters, ProductsList, Title, TopBar } from '@/components/shared';
import { prisma } from '@/prisma/prisma-client';

export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          items: true,
          ingredients: true,
        },
      },
    },
  });

  const fullCategories = categories.filter((category) => category.products.length > 0);

  return (
    <>
      <Container className="mt-10">
        <Title text="Меню" size="lg" className="font-extrabold" />
      </Container>
      <TopBar categories={fullCategories} />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[65px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {categories.map(
                (category) =>
                  category.products.length > 0 && (
                    <ProductsList
                      key={category.id}
                      title={category.name}
                      categoryId={category.id}
                      items={category.products}
                    />
                  ),
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
