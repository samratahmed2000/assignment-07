export interface NavLink {
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
  unit?: "kg" | "gm" | "litre" | "ml" | "dozen" | "piece";
  change: {
    dir: "up" | "down";
    pct: number;
  };
}

export type Unit = "kg" | "gm" | "litre" | "ml" | "dozen" | "piece" | undefined;
