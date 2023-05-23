import { FC,ChangeEvent } from "react";
import { twMerge } from "tailwind-merge";
import { nanoid } from "nanoid";
import Link from "next/link";

interface SelectorProps {
  value?: string | number;
  onchange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  classname?: string;
  items: any[];
  itemValue: string | number;
  itemLabel: string | number;
}

export const Selector: FC<SelectorProps> = ({
  value,
  onchange,
  classname,
  items,
  itemValue,
  itemLabel,
  
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
                href={""}
                onClick={(e) => {
                  e.preventDefault(); 
                  if (onchange) {
                    const selectChangeEvent = {
                      target: {
                        value: items[itemValue as number] 
                      }
                    } as ChangeEvent<HTMLSelectElement>;
                    onchange(selectChangeEvent);
                  }
                }}
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
