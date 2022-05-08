export const keyGenerator = (num: number | string) => {
  return `${num}_${Date.now() + Math.random() * 100000}`;
};
