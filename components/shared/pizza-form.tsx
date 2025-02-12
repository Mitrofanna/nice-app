import { cn } from '@/lib/utils';
import { ProductImage } from './product-image';
import { Button } from '../ui';
import { Title } from '.';

interface Props {
  name: string;
  imageUrl: string;
  ingredients: any[];
  items?: any[];
  onClickAdd?: () => void;
  className?: string;
}

export const PizzaForm: React.FC<Props> = ({
  name,
  imageUrl,
  ingredients,
  items,
  onClickAdd,
  className,
}) => {
  return (
    <div className={cn('flex flex-1', className)}>
      <div className="flex items-center justify-center flex-1 relative w-full">
        <ProductImage imageUrl={imageUrl} size={30} />
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
