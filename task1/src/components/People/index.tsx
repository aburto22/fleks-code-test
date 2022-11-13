import { useRef, useState } from "react";
import Sorter from "../Sorter";
import { getName, getPeople, sortPeople } from "../../lib/people";
import { TSortOptions } from "../../types";
import Person from "../Person";

function Table() {
  const [sortOptions, setSortOptions] = useState<TSortOptions>({
    order: "asc",
  });
  const { current: people } = useRef(getPeople());

  const sortedPeople = sortPeople(people, sortOptions);

  return (
    <main className="max-w-xl p-4 pb-8 mx-auto">
      <Sorter sortOptions={sortOptions} setSortOptions={setSortOptions} />
      <table className="w-full">
        <thead className="border-b border-fleks-dark">
          <tr>
            <th className="py-2 text-sm font-bold uppercase">Name</th>
            <th className="py-2 text-sm font-bold uppercase">Birthday</th>
            <th className="py-2 text-sm font-bold uppercase">Age</th>
          </tr>
        </thead>
        <tbody>
          {sortedPeople.map((person) => (
            <Person key={getName(person)} person={person} />
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default Table;
