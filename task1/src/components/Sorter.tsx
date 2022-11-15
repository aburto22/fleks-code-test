import React from "react";
import { TSortOptions } from "../types";

type SorterProps = {
  sortOptions: TSortOptions;
  setSortOptions: React.Dispatch<React.SetStateAction<TSortOptions>>;
};

function Sorter({ sortOptions, setSortOptions }: SorterProps) {
  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value === "age" || value === "firstName" || value === "lastName") {
      setSortOptions((so) => ({ ...so, field: value }));
    }

    if (value === "none") {
      setSortOptions((so) => ({ ...so, field: undefined }));
    }
  };

  const handleOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    if (value === "asc" || value === "dsc") {
      setSortOptions((so) => ({ ...so, order: value }));
    }
  };

  return (
    <form className="flex flex-col items-center justify-center max-w-md py-8 mx-auto mt-4 mb-8 rounded-lg shadow-lg">
      <p className="mr-2 font-bold text-center">Sort By:</p>
      <div className="flex flex-col flex-wrap justify-center gap-1 mb-2 sm:flex-row sm:gap-3">
        <label className="flex items-center gap-1">
          <input
            type="radio"
            name="field"
            value="none"
            data-testid="none-field"
            checked={!sortOptions.field}
            onChange={handleFieldChange}
          />
          None
        </label>
        <label className="flex items-center gap-1">
          <input
            type="radio"
            name="field"
            value="firstName"
            data-testid="firstName-field"
            checked={sortOptions.field === "firstName"}
            onChange={handleFieldChange}
          />
          First name
        </label>
        <label className="flex items-center gap-1">
          <input
            type="radio"
            name="field"
            value="lastName"
            data-testid="lastName-field"
            checked={sortOptions.field === "lastName"}
            onChange={handleFieldChange}
          />
          Last Name
        </label>
        <label className="flex items-center gap-1">
          <input
            type="radio"
            name="field"
            value="age"
            data-testid="age-field"
            checked={sortOptions.field === "age"}
            onChange={handleFieldChange}
          />
          Age
        </label>
      </div>
      <p className="mt-2 mr-2 font-bold text-center">Order By:</p>
      <select
        value={sortOptions.order}
        onChange={handleOrderChange}
        data-testid="order"
      >
        <option value="asc" data-testid="asc-order">
          Ascending
        </option>
        <option value="dsc" data-testid="dsc-order">
          Descending
        </option>
      </select>
    </form>
  );
}

export default Sorter;
