const BASE_URL = "/api";

export interface DollarAverage {
  results: {
    average: {
      buying: string;
      selling: string;
    };
    current_date: string;
  };
}

export const getDollar = async (): Promise<DollarAverage> => {
  const res = await fetch(`${BASE_URL}/home?cur=usd`);
  return await res.json();
};

export interface ExchangeDollar {
  buying: {
    banks: {
      name: string;
      id: number;
      slug: string;
    }[];
    price: string;
  };
  selling: {
    banks: {
      name: string;
      id: number;
      slug: string;
    }[];
    price: string;
  };
}
export const getExchangedollar = async (): Promise<ExchangeDollar> => {
  const response = await fetch(`${BASE_URL}/best-rates?lang=ru&cur=usd`);
  const data = await response.json();
  return data;
};
export interface AllBanks {
  banks: {
    full_title: string;
    buying: string;
    selling: string;
  }[];
}

export const getAllbanks = async (): Promise<AllBanks> => {
  const response = await fetch(
    `${BASE_URL}/banks?cur=usd&take=all`
  );
  const data = await response.json();
  return data;
};
