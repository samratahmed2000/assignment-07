const unitToBengali = ({ unit }: { unit: string | undefined }): string => {
  return !unit
    ? "কেজি"
    : unit === "kg"
      ? "কেজি"
      : unit === "gm"
        ? "গ্রাম"
        : unit === "litre"
          ? "লিটার"
          : unit === "ml"
            ? "মিলিলিটার"
            : unit === "dozen"
              ? "ডজন"
              : unit === "piece"
                ? "টুকরো"
                : unit;
};

export default unitToBengali;
