import { useSearchParams } from 'next/navigation';
import React from 'react';
import { useSet } from 'react-use';

interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

interface QueryFilters extends PriceProps {
  selectedSizes: string;
  selectedTypes: string;
  selectedIngredients: string;
}

export interface Filters {
  selectedIngredients: Set<string>;
  selectedSizes: Set<string>;
  selectedTypes: Set<string>;
  selectedPrices: PriceProps;
}

interface ReturnProps extends Filters {
  setSelectedIngredients: (value: string) => void;
  setSelectedSizes: (value: string) => void;
  setSelectedTypes: (value: string) => void;
  setSelectedPrices: (name: keyof PriceProps, value: number) => void;
}

export const useFilters = (): ReturnProps => {
  const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>;

  const [selectedIngredients, { toggle: setSelectedIngredients }] = useSet(
    new Set<string>(searchParams.get('selectedIngredients')?.split(',')),
  );

  const [selectedPrices, setSelectedPrices] = React.useState<PriceProps>({
    priceFrom: Number(searchParams.get('priceFrom')) || undefined,
    priceTo: Number(searchParams.get('priceTo')) || undefined,
  });

  const [selectedSizes, { toggle: setSelectedSizes }] = useSet(
    new Set<string>(searchParams.get('selectedSizes')?.split(',') || []),
  );

  const [selectedTypes, { toggle: setSelectedTypes }] = useSet(
    new Set<string>(searchParams.get('selectedTypes')?.split(',') || []),
  );

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setSelectedPrices((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    selectedIngredients,
    setSelectedIngredients,
    selectedSizes,
    setSelectedSizes,
    selectedTypes,
    setSelectedTypes,
    selectedPrices,
    setSelectedPrices: updatePrice,
  };
};
