export const cities = [
  { id: "douala", region: "littoral" },
  { id: "yaounde", region: "centre" },
  { id: "bafoussam", region: "ouest" },
  { id: "bamenda", region: "nordOuest" },
  { id: "garoua", region: "nord" },
  { id: "buea", region: "sudOuest" },
  { id: "limbe", region: "sudOuest" },
  { id: "ngaoundere", region: "adamaoua" },
] as const;

export type CityId = (typeof cities)[number]["id"];
export type RegionId = (typeof cities)[number]["region"];
