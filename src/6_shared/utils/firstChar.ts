
export const firstChar = (
  str: string,
  options: {
    toUpperCase?: boolean;
    returnEmptyString?: boolean;
  } = {}
): string => {
  const { toUpperCase = true, returnEmptyString = true } = options;

  if (!str || typeof str !== "string") {
    return returnEmptyString ? "" : "";
  }

  const trimmedStr = str.trim();

  if (!trimmedStr) {
    return returnEmptyString ? "" : "";
  }

  const firstCharacter = trimmedStr.charAt(0);

  if (!/[а-яёa-z0-9]/i.test(firstCharacter)) {
    return returnEmptyString ? "" : "";
  }

  if (/\d/.test(firstCharacter)) {
    return firstCharacter;
  }

  return toUpperCase ? firstCharacter.toUpperCase() : firstCharacter;
};

export const getFirstChar = (str: string): string => {
  return firstChar(str, { toUpperCase: true, returnEmptyString: true });
};
