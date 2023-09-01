export const toCurrency = (
    amount,
    useCurrency,
    useComma
  ) => {
    return amount > 0
      ? `${useCurrency ? '$ ' : ''}${parseInt(amount, 10)
          .toString()
          .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, useComma ? '$1,' : '$1.')}`
      : `${useCurrency ? '$ ' : ''}0`;
  };