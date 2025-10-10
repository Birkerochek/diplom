export const formatPrice = (price: number | undefined): string => {
  if (price === undefined) return "0.00";
  return new Intl.NumberFormat("en-US", {
   
  })
    .format(price)
    .replace(/,/g, " ");
};
