'use client';

import React from 'react';
import { Title, RangeSlider, CheckboxGroup } from '.';
import { Input } from '../ui';
import { useFilters, useIngredients, useQueryFilters } from '@/hooks';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading } = useIngredients();
  const filters = useFilters();
  useQueryFilters(filters);

  const updatePrice = (prices: number[]) => {
    filters.setSelectedPrices('priceFrom', prices[0]);
    filters.setSelectedPrices('priceTo', prices[1]);
  };

  const items = ingredients.map((item) => ({ value: String(item.id), text: item.name }));

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
          onClickCheckbox={filters.setSelectedTypes}
          selected={filters.selectedTypes}
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
          onClickCheckbox={filters.setSelectedSizes}
          selected={filters.selectedSizes}
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
            value={String(filters.selectedPrices.priceFrom)}
            onChange={(e) => filters.setSelectedPrices('priceFrom', Number(e.target.value))}
            step={10}
          />
          <Input
            type="number"
            placeholder="1000"
            min={0}
            max={1000}
            value={String(filters.selectedPrices.priceTo)}
            onChange={(e) => filters.setSelectedPrices('priceTo', Number(e.target.value))}
            step={10}
          />
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[filters.selectedPrices.priceFrom || 0, filters.selectedPrices.priceTo || 1000]}
          onValueChange={updatePrice}
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
        onClickCheckbox={filters.setSelectedIngredients}
        selected={filters.selectedIngredients}
      />
    </div>
  );
};
