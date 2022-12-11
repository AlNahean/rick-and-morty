export const getSquareColNum = (size) => {
  if (size < 768) return 2.4;
  if (size < 992) return 3.4;
  if (size < 1200) return 4.4;
  if (size < 1400) return 5.4;
  if (size >= 1400) return 5.4;
};
export const getRectColNum = (size) => {
  if (size < 768) return 1.2;
  if (size < 992) return 1.6;
  if (size < 1200) return 2.4;
  if (size < 1400) return 3;
  if (size >= 1400) return 3.4;
};
