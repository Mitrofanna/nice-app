import { Container, Filters, ProductsList, Title, TopBar } from '@/components/shared';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Меню" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[65px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsList
                title={'Завтрак'}
                products={[
                  {
                    id: 1,
                    name: 'Пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D6150D498419E133DF19945A00D.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: 'Пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D6150D498419E133DF19945A00D.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: 'Пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D6150D498419E133DF19945A00D.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: 'Пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D6150D498419E133DF19945A00D.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: 'Пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D6150D498419E133DF19945A00D.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={1}></ProductsList>

              <ProductsList
                title={'Пиццы'}
                products={[
                  {
                    id: 6,
                    name: 'Пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D6150D498419E133DF19945A00D.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 7,
                    name: 'Пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D6150D498419E133DF19945A00D.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 8,
                    name: 'Пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D6150D498419E133DF19945A00D.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 9,
                    name: 'Пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D6150D498419E133DF19945A00D.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 10,
                    name: 'Пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D6150D498419E133DF19945A00D.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={2}></ProductsList>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
