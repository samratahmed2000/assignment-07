export interface Category {
  id: number;
  nameBn: string;
  slug: string;
  icon: string;
}

export interface Product {
  id: string;
  nameBn: string;
  image: string;
  today: number;
  category?: string;
  categoryNameBn?: string;
  slug: string;
  unit?: "kg" | "gm" | "litre" | "ml" | "dozen" | "piece";
  change: {
    dir: "up" | "down";
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
