import { cn } from '@/lib/utils';
import React from 'react';
import { Title } from '.';
import { Button } from '../ui';

interface Props {
  name: string;
  imageUrl: string;
  onClickAdd?: () => void;
  className?: string;
}

export const ProductForm: React.FC<Props> = ({
  name,
  imageUrl,
  onClickAdd,
  className,
}) => {
  return (
    <div className={cn('flex flex-1', className)}>
      <div className="flex items-center justify-center flex-1 relative w-full">
        <img
          src={imageUrl}
          alt={name}
          className="relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]"
        />
      </div>
      <div className="w-[490px] p-7 bg-[#F7F6F5]">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <p className="text-gray-400">{'Цыпленок, моцарелла, томаты.'}</p>
        <Button className="h-[55px] w-full px-10 text-base rounded-[18px] mt-10">
          Добавить в корзину за {'350p'}
        </Button>
      </div>
    </div>
  );
};
