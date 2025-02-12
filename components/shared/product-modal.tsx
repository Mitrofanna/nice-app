'use client';

import React from 'react';
import { DialogContent, Dialog } from '../ui/dialog';
import { ProductForm, PizzaForm } from '.';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { Ingredient, ProductItem, Product } from '@prisma/client';

export type ProductWithRelations = Product & { items: ProductItem[]; ingredients: Ingredient[] };

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();
  const isPizzaForm = Boolean(product.items[0].productType);

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          className,
          'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden',
        )}>
        {isPizzaForm ? (
          <PizzaForm name={product.name} imageUrl={product.imageUrl} ingredients={[]} />
        ) : (
          <ProductForm name={product.name} imageUrl={product.imageUrl} />
        )}
      </DialogContent>
    </Dialog>
  );
};
