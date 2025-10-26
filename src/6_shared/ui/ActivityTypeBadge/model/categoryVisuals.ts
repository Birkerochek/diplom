export type CategoryVisual = {
  key: string;
  label: string;
  className: string;
  matches: string[];
};

export const CATEGORY_VISUALS: CategoryVisual[] = [
  {
    key: "social-assistance",
    label: "Социальная помощь",
    className: "badgeSocialAssistance",
    matches: ["social-assistance", "социальная помощь"],
  },
  {
    key: "ecology",
    label: "Экология",
    className: "badgeEcology",
    matches: ["ecology", "экология"],
  },
  {
    key: "education",
    label: "Образование",
    className: "badgeEducation",
    matches: ["education", "образование"],
  },
  {
    key: "healthcare",
    label: "Здравоохранение",
    className: "badgeHealthcare",
    matches: ["healthcare", "здравоохранение"],
  },
  {
    key: "culture-art",
    label: "Культура и искусство",
    className: "badgeCultureArt",
    matches: ["culture-art", "культура", "искусство", "культура и искусство"],
  },
  {
    key: "sport",
    label: "Спорт",
    className: "badgeSport",
    matches: ["sport", "спорт"],
  },
  {
    key: "other",
    label: "Другое",
    className: "badgeDefault",
    matches: ["other", "другое"],
  },
] as const;

export const getActivityTypeVisual = (value: string) => {
  const normalized = value.trim().toLowerCase();

  return (
    CATEGORY_VISUALS.find((item) =>
      item.matches.some((match) => match.toLowerCase() === normalized)
    ) ?? null
  );
};
