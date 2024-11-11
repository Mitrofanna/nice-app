'use client';

import React from 'react';
import { FilterCheckbox, FilterCheckboxProps } from './filter-checkbox';
import { Input } from '../ui';

type Item = FilterCheckboxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItems: Item[];
  limit: number;
  searchInputPlaceholder: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string;
  className?: string;
}

export const CheckboxGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit,
  searchInputPlaceholder = 'Поиск...',
  onChange,
  defaultValue,
  className,
}) => {
  const [showAll, setShowAll] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const ingredients = showAll
    ? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase()))
    : defaultItems.slice(0, limit);

  return (
    <div className={className}>
      <p className="mb-3 font-bold">{title}</p>
      {showAll && (
        <div className="mb-5">
          <Input
            onChange={onChangeSearchInput}
            placeholder={searchInputPlaceholder}
            className="bg-gray-50 border-none"
          />
        </div>
      )}
      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {ingredients.map((item, index) => (
          <FilterCheckbox
            key={index}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            checked={false}
            onCheckedChange={(id) => console.log(id)}
          />
        ))}
      </div>
      {items.length > limit && (
        <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
          <button onClick={() => setShowAll(!showAll)} className="text-primary mt-3">
            {showAll ? 'Скрыть' : 'Показать все'}
          </button>
        </div>
      )}
    </div>
  );
};
