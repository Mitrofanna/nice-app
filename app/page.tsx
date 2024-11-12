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
                title={'Пиццы'}
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
                    id: 1,
                    name: 'Пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D6150D498419E133DF19945A00D.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D6150D498419E133DF19945A00D.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D6150D498419E133DF19945A00D.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D6150D498419E133DF19945A00D.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={1}></ProductsList>

              <ProductsList
                title={'завтрак'}
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
                    id: 1,
                    name: 'Пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D6150D498419E133DF19945A00D.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D6150D498419E133DF19945A00D.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Пицца',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7D6150D498419E133DF19945A00D.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
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
