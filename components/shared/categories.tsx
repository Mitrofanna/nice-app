'use client';

import { useCategoryStore } from '@/app/store/category';
import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
}

const categoryItems = [
  { id: 1, name: 'Завтрак' },
  { id: 2, name: 'Пиццы' },
  { id: 3, name: 'Бургеры' },
  { id: 4, name: 'Коктейли' },
  { id: 5, name: 'Напитки' },
  { id: 6, name: 'Десерты' },
];

export const Categories: React.FC<React.PropsWithChildren<Props>> = ({ className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);
  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {categoryItems.map((item) => (
        <a
          href={'#' + item.name}
          className={cn(
            'flex items-center font-bold h-11  rounded-2xl px-5',
            categoryActiveId === item.id && 'bg-white shadow-md shadow-gray-200 text-primary',
          )}
          key={item.id}>
          <button>{item.name}</button>
        </a>
      ))}
    </div>
  );
};
