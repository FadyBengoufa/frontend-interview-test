import React from "react";
import { Button } from "@/components/ui/button";
import FilterSelect from "./FilterSelect";
import DatePicker from "./DateFilter";
import InputFilter from "./InputFilter";
import { areaOptions, shiftOptions, statusOptions } from "@/constants/constants";

interface ReservationFiltersProps {
  filters: any;
  setFilters: (filter: any) => void;
  resetFilters: () => void;
  isFilteredFilled: boolean;
}

const ReservationFilters = ({
  filters,
  setFilters,
  resetFilters,
  isFilteredFilled,
}: ReservationFiltersProps) => {
  return (
    <div className="flex gap-6 flex-wrap">
      <InputFilter
        value={filters.search}
        onChange={(e) => setFilters({ ...filters, search: e.target.value })}
        placeholder="Search by name or surname"
        clearFilter={() => setFilters({ ...filters, search: "" })}
      />
      <DatePicker
        selectedDate={filters.date}
        onDateChange={(value) => setFilters({ ...filters, date: value })}
        placeholder="Pick a business date"
        clearFilter={() => setFilters({ ...filters, date: "" })}
      />
      <FilterSelect
        value={filters.status}
        onValueChange={(value) => setFilters({ ...filters, status: value })}
        options={statusOptions}
        placeholder="Status"
        clearFilter={() => setFilters({ ...filters, status: "" })}
      />
      <FilterSelect
        value={filters.shift}
        onValueChange={(value) => setFilters({ ...filters, shift: value })}
        options={shiftOptions}
        placeholder="Shift"
        clearFilter={() => setFilters({ ...filters, shift: "" })}
      />
      <FilterSelect
        value={filters.area}
        onValueChange={(value) => setFilters({ ...filters, area: value })}
        options={areaOptions}
        placeholder="Area"
        clearFilter={() => setFilters({ ...filters, area: "" })}
      />
      <Button onClick={resetFilters} disabled={isFilteredFilled}>
        Reset Filters
      </Button>
    </div>
  );
};

export default ReservationFilters;
