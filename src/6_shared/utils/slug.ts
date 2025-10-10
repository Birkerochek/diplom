const CYRILLIC_TO_LATIN_MAP: Record<string, string> = {
  а: "a",
  б: "b",
  в: "v",
  г: "g",
  д: "d",
  е: "e",
  ё: "e",
  ж: "zh",
  з: "z",
  и: "i",
  й: "j",
  к: "k",
  л: "l",
  м: "m",
  н: "n",
  о: "o",
  п: "p",
  р: "r",
  с: "s",
  т: "t",
  у: "u",
  ф: "f",
  х: "h",
  ц: "ts",
  ч: "ch",
  ш: "sh",
  щ: "shch",
  ы: "y",
  э: "e",
  ю: "yu",
  я: "ya",
  ь: "",
  ъ: "",
};

export const transliterate = (value: string): string =>
  value
    .split("")
    .map((char) => CYRILLIC_TO_LATIN_MAP[char] ?? char)
    .join("");

const sanitize = (value: string): string =>
  value
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()
    .replace(/^-+|-+$/g, "");

export const generateSlug = (title: string): string => {
  const base = sanitize(transliterate(title.toLowerCase()));
  const limitedBase = base
    .split("-")
    .filter(Boolean)
    .slice(0, 3)
    .join("-");
  const safeBase = limitedBase.length > 0 ? limitedBase : "item";
  const timestamp = Date.now().toString().slice(-6);
  return `${safeBase}-${timestamp}`;
};
