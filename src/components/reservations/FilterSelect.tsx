import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";// Close icon
import { XIcon } from "lucide-react";

// Reusable FilterSelect Component
export default function FilterSelect({
  value,
  onValueChange,
  options,
  placeholder,
  clearFilter,
}) {
  return (
    <div className="relative max-w-sm">
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="w-[240px]">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {value && (
        <Button
          type="button"
          variant="ghost"
          size="small"
          className="absolute right-8 top-1/2 -translate-y-1/2 h-7 w-7 text-gray-500 hover:text-gray-900"
          onClick={clearFilter}
        >
          <XIcon className="h-4 w-4" />
          <span className="sr-only">Clear</span>
        </Button>
      )}
    </div>
  );
}
