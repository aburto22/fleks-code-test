import { getPeople } from "../lib/people";

export type TPerson = ReturnType<typeof getPeople>[number];

export type TSortOptions = {
  field?: "firstName" | "lastName" | "age";
  order: "asc" | "dsc";
};
