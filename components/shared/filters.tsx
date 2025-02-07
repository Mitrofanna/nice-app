'use client';

import React from 'react';
import { Title, RangeSlider, CheckboxGroup } from '.';
import { Input } from '../ui';
import { useFilterIngredients } from '@/hooks/useFilterIngredients';
import { useSet } from 'react-use';
import qs from 'qs';
import { comma } from 'postcss/lib/list';
import { useRouter, useSearchParams } from 'next/navigation';
import QueryString from 'qs';

interface Props {
  className?: string;
}

interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

interface QueryFilters extends PriceProps {
  selectedSizes: string;
  selectedTypes: string;
  selected: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>;
  const router = useRouter();
  const { ingredients, loading, selected, onAddId } = useFilterIngredients(
    searchParams.get('selected')?.split(','),
  );

  const items = ingredients.map((item) => ({ value: String(item.id), text: item.name }));

  const [price, setPrice] = React.useState<PriceProps>({
    priceFrom: Number(searchParams.get('priceFrom')) || undefined,
    priceTo: Number(searchParams.get('priceTo')) || undefined,
  });

  const [selectedSizes, { toggle: toggleSize }] = useSet(
    new Set<string>(searchParams.get('selectedSizes')?.split(',') || []),
  );

  const [selectedTypes, { toggle: toggleType }] = useSet(
    new Set<string>(searchParams.get('selectedTypes')?.split(',') || []),
  );

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrice({
      ...price,
      [name]: value,
    });
  };

  React.useEffect(() => {
    const filters = {
      ...price,
      selectedSizes: Array.from(selectedSizes),
      selectedTypes: Array.from(selectedTypes),
      selected: Array.from(selected),
    };
    const query = qs.stringify(filters, { arrayFormat: 'comma' });
    router.push(`?${query}`, { scroll: false });
  }, [selectedSizes, selectedTypes, price, selected, router]);

  console.log(searchParams);

  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />
      <div className="flex flex-col gap-4">
        <CheckboxGroup
          title={'Тип теста'}
          name={'types'}
          className="mb-5"
          items={[
            { value: '1', text: 'тонкое' },
            { value: '2', text: 'традиционное' },
          ]}
          limit={2}
          loading={loading}
          onClickCheckbox={toggleType}
          selected={selectedTypes}
        />
        <CheckboxGroup
          title={'Размеры'}
          name={'sizes'}
          className="mb-5"
          items={[
            { value: '20', text: '20см' },
            { value: '30', text: '30см' },
            { value: '40', text: '40см' },
          ]}
          limit={3}
          loading={loading}
          onClickCheckbox={toggleSize}
          selected={selectedSizes}
        />
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
          value={[price.priceFrom || 0, price.priceTo || 1000]}
          onValueChange={([priceFrom, priceTo]) => setPrice({ priceFrom, priceTo })}
        />
      </div>
      <CheckboxGroup
        title={'Ингредиенты'}
        name={'ingredients'}
        className="mt-5"
        items={items}
        defaultItems={items.slice(0, 5)}
        searchInputPlaceholder="Поиск..."
        limit={6}
        loading={loading}
        onClickCheckbox={onAddId}
        selected={selected}
      />
    </div>
  );
};
