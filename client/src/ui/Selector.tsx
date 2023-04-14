import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { nanoid } from "nanoid";
import Link from "next/link";

interface SelectorProps {
  value?: string | number;
  onchange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  items: any[];
  itemValue: string | number;
  itemLabel: string | number;
}

export const Selector: FC<SelectorProps> = ({
  value,
  onchange,
  className,
  items,
  itemLabel,
  itemValue,
}) => {
  const baseline = "py-2 divide-y divide-dashed";
  return (
    <>
      <div className="px-2 ">
        {items.map((item) => (
          <div
            className="flex text-center
          group justify-between"
            key={nanoid()}
          >
            <Link
              className="group-hover:text-sky-300 transition-colors"
              href={""}
              value={items[itemValue]}
              onChange={onchange}
              className={twMerge(baseline)}
            >
              {item.value}
            </Link>
            <div className="flex text-center">1</div>
          </div>
        ))}
      </div>
    </>
  );
};
