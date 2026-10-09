const unitToBengali = (
  unit: "kg" | "gm" | "litre" | "ml" | "dozen" | "piece" | undefined,
): string => {
  if (!unit) return "কেজি";

  switch (unit) {
    case "kg":
      return "কেজি";
    case "gm":
      return "গ্রাম";
    case "litre":
      return "লিটার";
    case "ml":
      return "মিলিলিটার";
    case "dozen":
      return "ডজন";
    case "piece":
      return "টুকরো";
    default:
      return unit;
  }
};

export default unitToBengali;
