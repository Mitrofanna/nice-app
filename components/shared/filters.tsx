import React from 'react';
import { FilterCheckbox, Title, RangeSlider, CheckboxGroup } from '.';
import { Input } from '../ui';

const filtersItems = [
  {
    text: 'сырный соус',
    value: '1',
  },
  {
    text: 'томаты',
    value: '2',
  },
  {
    text: 'моцарелла',
    value: '3',
  },
  {
    text: 'грибы',
    value: '4',
  },
  {
    text: 'ветчина',
    value: '5',
  },
  {
    text: 'соленые огурцы',
    value: '6',
  },
  {
    text: 'грибы',
    value: '4',
  },
  {
    text: 'ветчина',
    value: '5',
  },
  {
    text: 'соленые огурцы',
    value: '6',
  },
  {
    text: 'грибы',
    value: '4',
  },
  {
    text: 'ветчина',
    value: '5',
  },
  {
    text: 'соленые огурцы',
    value: '6',
  },
];

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
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
          <Input type="number" placeholder="0" min={0} max={1000} defaultValue={0} />
          <Input type="number" placeholder="1000" min={0} max={1000} defaultValue={1000} />
        </div>
        <RangeSlider min={0} max={1000} step={10} value={[0, 1000]} />
      </div>
      <CheckboxGroup
        title={'Ингридиенты'}
        items={filtersItems}
        defaultItems={filtersItems}
        searchInputPlaceholder="Поиск..."
        className="mt-5"
        limit={6}
      />
    </div>
  );
};
