import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function InputFilter({
  value,
  onChange,
  placeholder,
  clearFilter,
}) {
  return (
    <div className="relative max-w-sm">
      <Input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-[240px] p-2 border border-gray-300 rounded"
      />
      {value && (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          onClick={clearFilter}
        >
          <XIcon className="h-4 w-4" />
          <span className="sr-only">Clear</span>
        </Button>
      )}
    </div>
  );
}
