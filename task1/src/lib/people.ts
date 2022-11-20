import people from "../data.json";
import { TPerson, TSortOptions } from "../types";

const getAge = (base: Date, birthday: Date): number => {
  const baseYears = base.getFullYear() - birthday.getFullYear() - 1;
  const birthdayPassedThisYear =
    birthday.getMonth() < base.getMonth() ||
    (birthday.getMonth() === base.getMonth() &&
      birthday.getDate() <= base.getDate());
  return birthdayPassedThisYear ? baseYears + 1 : baseYears;
};

export const getPeople = () =>
  people.map((person) => ({
    ...person,
    birthday: new Date(person.birthday),
    age: getAge(new Date(), new Date(person.birthday)),
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

type PeopleLike = Pick<TPerson, "firstName" | "lastName" | "age">;

export const sortPeople = <T extends PeopleLike>(
  people: Array<T>,
  field: TSortOptions["field"]
): Array<T> => {
  if (!field) {
    return people;
  }

  return [...people].sort((a, b) => {
    if (a[field] < b[field]) {
      return -1;
    }
    if (a[field] > b[field]) {
      return 1;
    }
    return 0;
  });
};

export const orderPeople = <T>(
  array: Array<T>,
  order: TSortOptions["order"]
): Array<T> => {
  if (order === "asc") {
    return array;
  }
  return [...array].reverse();
};
