'use client';

import React from 'react';
import { FilterCheckbox, Title, RangeSlider, CheckboxGroup } from '.';
import { Input } from '../ui';
import { useFilterIngredients } from '@/hooks/useFilterIngredients';

interface Props {
  className?: string;
}

interface PriceProps {
  priceFrom: number;
  priceTo: number;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading, selectedIds, onAddId } = useFilterIngredients();
  const items = ingredients.map((item) => ({ value: String(item.id), text: item.name }));
  const [price, setPrice] = React.useState<PriceProps>({
    priceFrom: 0,
    priceTo: 1000,
  });

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrice({
      ...price,
      [name]: value,
    });
  };

  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Собрать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            value={String(price.priceFrom)}
            onChange={(e) => updatePrice('priceFrom', Number(e.target.value))}
            step={10}
          />
          <Input
            type="number"
            placeholder="1000"
            min={0}
            max={1000}
            value={String(price.priceTo)}
            onChange={(e) => updatePrice('priceTo', Number(e.target.value))}
            step={10}
          />
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[price.priceFrom, price.priceTo]}
          onValueChange={([priceFrom, priceTo]) => setPrice({ priceFrom, priceTo })}
        />
      </div>
      <CheckboxGroup
        title={'Ингредиенты'}
        items={items}
        defaultItems={items.slice(0, 5)}
        searchInputPlaceholder="Поиск..."
        className="mt-5"
        limit={6}
        loading={loading}
        onClickCheckbox={onAddId}
        selectedIds={selectedIds}
        name={'ingredients'}
      />
    </div>
  );
};
