interface FormFieldProps {
  label: string;
  name: string;
  type?: "text" | "email" | "tel" | "textarea" | "select";
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
  error?: string;
}

export function FormField({
  label,
  name,
  type = "text",
  required,
  placeholder,
  options,
  error,
}: FormFieldProps) {
  const id = `field-${name}`;
  const errorId = `${id}-error`;

  const inputClass =
    "w-full rounded-xl border border-line bg-bone px-4 py-3 text-sm text-ink placeholder:text-ink-muted/60 focus:outline-none focus:ring-2 focus:ring-moss-600 focus:border-transparent transition-shadow";

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-ink">
        {label}
        {required && <span className="text-terra-500 ml-0.5" aria-hidden="true">*</span>}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          required={required}
          placeholder={placeholder}
          rows={4}
          className={`${inputClass} resize-none`}
          aria-describedby={error ? errorId : undefined}
          aria-invalid={error ? "true" : undefined}
        />
      ) : type === "select" ? (
        <select
          id={id}
          name={name}
          required={required}
          className={inputClass}
          aria-describedby={error ? errorId : undefined}
          aria-invalid={error ? "true" : undefined}
        >
          <option value="">Velg tjeneste…</option>
          {options?.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={inputClass}
          aria-describedby={error ? errorId : undefined}
          aria-invalid={error ? "true" : undefined}
        />
      )}
      {error && (
        <p id={errorId} className="text-xs text-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
