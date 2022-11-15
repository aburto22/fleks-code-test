import { formatDate, getName } from "../lib/people";
import type { TPerson } from "../types";

type PersonProps = {
  person: TPerson;
};

function Person({ person }: PersonProps) {
  return (
    <tr data-testid="person">
      <td className="py-1 text-center">{getName(person)}</td>
      <td className="py-1 text-center">{formatDate(person.birthday)}</td>
      <td className="py-1 text-center">{person.age}</td>
    </tr>
  );
}

export default Person;
