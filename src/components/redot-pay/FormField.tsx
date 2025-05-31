import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormFieldProps } from "@/types/redot-pay";

interface ExtendedFormFieldProps extends FormFieldProps {
  multiline?: boolean;
}

export default function FormField({
  id,
  label,
  placeholder,
  value,
  onChange,
  required = false,
  type = "text",
  optional = false,
  multiline = false,
}: ExtendedFormFieldProps) {
  const inputClasses = multiline
    ? "min-h-32 text-lg border-2 border-gray-200 focus:border-gray-400 focus:ring-gray-400/20 rounded-xl resize-none"
    : "h-14 text-lg border-2 border-gray-200 focus:border-gray-400 focus:ring-gray-400/20 rounded-xl";

  return (
    <div className="space-y-3">
      <Label htmlFor={id} className="text-lg font-semibold text-gray-700">
        {label}
        {optional && (
          <span className="text-gray-400 font-normal"> (необязательно)</span>
        )}
      </Label>
      {multiline ? (
        <Textarea
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          className={inputClasses}
        />
      ) : (
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          className={inputClasses}
        />
      )}
    </div>
  );
}
