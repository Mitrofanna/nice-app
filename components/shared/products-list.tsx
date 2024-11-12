import React from 'react';
import { Title, ProductCard } from '.';
import { cn } from '@/lib/utils';

interface Props {
  title: string;
  products: any[];
  categoryId: number;
  classname?: string;
  listClassName?: string;
}

export const ProductsList: React.FC<Props> = ({
  title,
  products,
  categoryId,
  classname,
  listClassName,
}) => {
  return (
    <div className={classname}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.items[0].price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};
