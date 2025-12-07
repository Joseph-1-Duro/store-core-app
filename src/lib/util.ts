export const formatToNaira = (amount: number): string => {
    return new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        maximumFractionDigits: 0,
        minimumFractionDigits: 0
    }).format(amount)
};

// add SKU generate function