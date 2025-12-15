import { useCallback, useState } from "react";

import type { EventSummaryByActivityType } from "@shared/types/event";
import type { SelectOption } from "@shared/ui/Select/Select";
import { getActivityTypeVisual } from "@shared/ui";
import { CATEGORY_OPTIONS } from "@pages/OrganizerPage";

type UseVolunteerEventsFilterParams = {
  initialValue?: string;
  initialSummary?: EventSummaryByActivityType[];
};

const DEFAULT_OPTION: SelectOption = { value: "", label: "Все категории" };

const CATEGORY_LABELS = new Map<string, string>(
  CATEGORY_OPTIONS.map((option) => [option.value, option.label])
);

export const useVolunteerEventsFilter = ({
  initialValue = "",
  initialSummary = [],
}: UseVolunteerEventsFilterParams = {}) => {
  const [activityType, setActivityType] = useState(initialValue);
  const [summary, setSummary] = useState<EventSummaryByActivityType[]>(initialSummary);

  const options = buildOptions(summary, activityType);

  const handleFilterChange = useCallback((value: string) => {
    setActivityType(value);
  }, []);

  const handleSummaryChange = useCallback(
    (nextSummary: EventSummaryByActivityType[] | undefined) => {
      setSummary(nextSummary ?? []);
    },
    []
  );

  return {
    activityType,
    options,
    onActivityChange: handleFilterChange,
    setAvailableActivities: handleSummaryChange,
  };
};

const buildOptions = (summary: EventSummaryByActivityType[], currentValue: string): SelectOption[] => {
  const result: SelectOption[] = [DEFAULT_OPTION];
  const seen = new Set<string>();

  const addKey = (key: string | null) => {
    if (!key || seen.has(key) || !CATEGORY_LABELS.has(key)) {
      return;
    }

    seen.add(key);
    result.push({
      value: key,
      label: CATEGORY_LABELS.get(key) ?? key,
    });
  };

  summary.forEach((item) => {
    addKey(normalizeActivityType(item.activityType ?? ""));
  });

  CATEGORY_OPTIONS.forEach((option) => {
    addKey(option.value);
  });

  addKey(normalizeActivityType(currentValue));

  return result;
};

const normalizeActivityType = (value: string): string | null => {
  const trimmed = value.trim();

  if (!trimmed) {
    return null;
  }

  const visual = getActivityTypeVisual(trimmed);
  const key = visual?.key ?? trimmed;

  return CATEGORY_LABELS.has(key) ? key : null;
};
