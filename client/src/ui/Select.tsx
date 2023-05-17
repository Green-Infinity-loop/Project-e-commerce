import { nanoid } from "nanoid";
import { ChangeEvent, FC } from "react";
import { twMerge } from "tailwind-merge";

interface SelectProps {
  value?: string | number;
  onchange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  items: any[];
  itemValue: string;
  itemLabel: string;
}

export const Select: FC<SelectProps> = ({
  value,
  onchange,
  className,
  items,
  itemValue,
  itemLabel,
}) => {
  const baseClass = `bg-[#F9F9F9] rounded-none px-8 py-2 text-sm focus:ring-white-500 focus:border-white-500 `;
  return (
    <select
      value={value}
      onChange={onchange}
      className={twMerge(baseClass, className)}
    >
      {items.map((item) => (
        <option key={nanoid()} value={item[itemValue]}>
          {item[itemLabel]}
        </option>
      ))}
    </select>
  );
};
