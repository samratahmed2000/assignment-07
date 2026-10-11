export function toBengaliNumber(num: number | string): string {
  const bengaliDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return String(num).replace(/[0-9]/g, (d) => bengaliDigits[parseInt(d)]);
}

export function toEnglishNumber(str: string): number {
  const englishDigits: Record<string, string> = {
    "০": "0",
    "১": "1",
    "২": "2",
    "৩": "3",
    "৪": "4",
    "৫": "5",
    "৬": "6",
    "৭": "7",
    "৮": "8",
    "৯": "9",
  };

  const converted = str.replace(/[০-৯]/g, (d) => englishDigits[d] || d);
  return parseFloat(converted);
}

export function formatPrice(price: number): string {
  const formatted = price.toLocaleString("en-IN");
  return toBengaliNumber(formatted);
}

export function getUnitBn(unit: string): string {
  const unitMap: Record<string, string> = {
    kg: "কেজি",
    litre: "লিটার",
    dozen: "ডজন",
    piece: "পিস",
  };
  return unitMap[unit] || unit;
}
