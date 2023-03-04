export interface FilterType {
  name: string;
  value: string;
}
export interface sortType {
  name: string;
  value: string;
}

export const filterData: FilterType[] = [
  { name: "All", value: "all" },
  { name: "Completed", value: "completed" },
  { name: "Pending", value: "pending" },
];

export const sortData: FilterType[] = [
  { name: "Default", value: "all" },
  { name: "Newest", value: "-1" },
  { name: "Pending", value: "pending" },
];
