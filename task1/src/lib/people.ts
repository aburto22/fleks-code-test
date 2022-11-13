import people from "../data.json";
import { TPerson, TSortOptions } from "../types";

const getAge = (date: Date): number => {
  const now = new Date();
  const baseYears = now.getFullYear() - date.getFullYear() - 1;
  const birthdayPassedThisYear =
    date.getMonth() < now.getMonth() ||
    (date.getMonth() === now.getMonth() && date.getDate() <= now.getDate());
  return birthdayPassedThisYear ? baseYears + 1 : baseYears;
};

export const getPeople = () =>
  people.map((person) => ({
    ...person,
    birthday: new Date(person.birthday),
    age: getAge(new Date(person.birthday)),
  }));

type NameLike = {
  firstName: string;
  lastName: string;
};

export const getName = <T extends NameLike>(person: T): string =>
  `${person.firstName} ${person.lastName}`;

export const formatDate = (date: Date): string =>
  date.toLocaleDateString("en-uk", {
    day: "numeric",
    month: "long",
  });

export const sortPeople = (
  people: TPerson[],
  { field, order }: TSortOptions
): TPerson[] => {
  if (!field) {
    return getPeople();
  }

  return people.slice(0).sort((a, b) => {
    if (order === "asc") {
      return a[field] < b[field] ? -1 : a[field] > b[field] ? 1 : 0;
    }
    return a[field] < b[field] ? 1 : a[field] > b[field] ? -1 : 0;
  });
};
