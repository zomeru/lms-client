export const keyGenerator = (num: number) => {
  return Math.trunc(
    Number(`${num}${Date.now() + Math.random() * 100000}`)
  ).toString();
};

/**
 *
 * @name strongRegex
 * @description A regular expression to match strong passwords
 * @description The string must contain at least 1 lowercase alphabetical character
 * @description The string must contain at least 1 uppercase alphabetical character
 * @description The string must contain at least 1 numeric character
 * @description The string must contain at least one special character ,.><;:/?!@#$%^&*
 * @description The string must contain at least 8 characters
 */
export const strongRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[,.><;:/?!@#$%^&*])(?=.{8,})/;
