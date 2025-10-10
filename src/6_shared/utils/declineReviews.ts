export const declineReviews = (count: number): string => {
  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return "отзывов";
  }

  switch (lastDigit) {
    case 1:
      return "отзыв";
    case 2:
    case 3:
    case 4:
      return "отзыва";
    default:
      return "отзывов";
  }
};
