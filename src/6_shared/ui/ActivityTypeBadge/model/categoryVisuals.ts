import {
  ACTIVITY_TYPE_DEFINITIONS,
  getActivityTypeDefinition,
} from "@shared/constants/activityTypes";

export type CategoryVisual = {
  key: string;
  label: string;
  className: string;
  matches: string[];
};

const toMatches = (definition: { key: string; label: string; aliases: string[] }) =>
  Array.from(new Set([definition.key, definition.label, ...definition.aliases]));

export const CATEGORY_VISUALS: CategoryVisual[] = ACTIVITY_TYPE_DEFINITIONS.map(
  (definition) => ({
    key: definition.key,
    label: definition.label,
    className: definition.className,
    matches: toMatches(definition),
  })
);

export const getActivityTypeVisual = (value: string) => {
  const definition = getActivityTypeDefinition(value);

  if (!definition) {
    return null;
  }

  return {
    key: definition.key,
    label: definition.label,
    className: definition.className,
    matches: toMatches(definition),
  } as CategoryVisual;
};
