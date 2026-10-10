export interface Category {
  id: number;
  slug: string;
  nameBn: string;
  icon: string;
}

export interface Product {
  id: string;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  image: string;
  today: number;
  unit: string;
  change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };
  markets: {
    market: string;
    division: string;
    min: number;
    max: number;
    avgPrice: number;
  }[];
}

export type Unit = "kg" | "gm" | "litre" | "ml" | "dozen" | "piece" | undefined;
