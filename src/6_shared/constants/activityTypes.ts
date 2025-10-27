export type ActivityTypeDefinition = {
  key: string;
  label: string;
  className: string;
  aliases: string[];
};

const createDefinition = (
  key: string,
  label: string,
  className: string,
  aliases: string[]
): ActivityTypeDefinition => ({
  key,
  label,
  className,
  aliases,
});

export const ACTIVITY_TYPE_DEFINITIONS: ActivityTypeDefinition[] = [
  createDefinition("social-assistance", "Социальная помощь", "badgeSocialAssistance", [
    "socialAssistance",
    "социальная помощь",
  ]),
  createDefinition("ecology", "Экология", "badgeEcology", ["экология"]),
  createDefinition("education", "Образование", "badgeEducation", ["образование"]),
  createDefinition("healthcare", "Здравоохранение", "badgeHealthcare", ["здравоохранение"]),
  createDefinition("culture-art", "Культура и искусство", "badgeCultureArt", [
    "cultureArt",
    "культура",
    "искусство",
    "культура и искусство",
  ]),
  createDefinition("sport", "Спорт", "badgeSport", ["спорт"]),
  createDefinition("other", "Другое", "badgeDefault", ["другое"]),
];

const definitionsByKey = new Map(
  ACTIVITY_TYPE_DEFINITIONS.map((definition) => [definition.key, definition])
);

const aliasToKey = (() => {
  const map = new Map<string, string>();

  for (const definition of ACTIVITY_TYPE_DEFINITIONS) {
    const aliases = new Set<string>([
      definition.key,
      definition.label,
      ...definition.aliases,
    ]);

    for (const alias of aliases) {
      map.set(alias.trim().toLowerCase(), definition.key);
    }
  }

  return map;
})();

const normalize = (value: string) => value.trim().toLowerCase();

export const resolveActivityTypeKey = (value: string | null | undefined) => {
  if (!value) {
    return null;
  }

  return aliasToKey.get(normalize(value)) ?? null;
};

export const getActivityTypeDefinition = (value: string | null | undefined) => {
  const key = resolveActivityTypeKey(value);

  if (!key) {
    return null;
  }

  return definitionsByKey.get(key) ?? null;
};

export const getActivityTypeLabel = (value: string | null | undefined) => {
  const definition = getActivityTypeDefinition(value);

  return definition?.label ?? value ?? "";
};

export const expandActivityTypeAliases = (value: string | null | undefined) => {
  const definition = getActivityTypeDefinition(value);

  if (!definition) {
    return [];
  }

  return Array.from(
    new Set<string>([definition.key, definition.label, ...definition.aliases])
  );
};

export const ACTIVITY_TYPE_OPTIONS = ACTIVITY_TYPE_DEFINITIONS.map((definition) => ({
  value: definition.key,
  label: definition.label,
}));
