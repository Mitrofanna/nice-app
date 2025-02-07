import { useRouter } from 'next/navigation';
import qs from 'qs';
import React from 'react';
import { Filters } from './use-filters';

export const useQueryFilters = (filters: Filters) => {
  const router = useRouter();

  React.useEffect(() => {
    const params = {
      ...filters.selectedPrices,
      selectedSizes: Array.from(filters.selectedSizes),
      selectedTypes: Array.from(filters.selectedTypes),
      selected: Array.from(filters.selectedIngredients),
    };

    const query = qs.stringify(params, { arrayFormat: 'comma' });

    router.push(`?${query}`, { scroll: false });
  }, [filters, router]);
};
