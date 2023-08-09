
export const ALL_Country = 'https://restcountries.com/v3.1/all';

export const NAME_Country = (name) =>
  `https://restcountries.com/v3.1/name/${name}`;

export const REGION_Country = (region) =>
  `https://restcountries.com/v3.1/region/${region}`;

export const CODE_Country = (borders) =>
  `https://restcountries.com/v3.1/alpha?codes=${borders.join(',')}`;