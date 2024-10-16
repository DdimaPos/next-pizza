import React from "react";
import { cn } from "@/lib/utils";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui";
import { RangeSlider } from "./range-slider";
interface Props {
  className?: string;
}
export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <Title text="Фильтрация" className="mb-5 font-bold" />
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold">Цена от и до</p>
        <div className="flex gap-3 mb-5">
          <Input type="number" placeholder="0" min={0} max={10} defaultValue={0}/>
          <Input type="number" placeholder="1000" min={100} max={1000}/>
        </div>
        <RangeSlider min={0} max={5000} step={10} value={[300, 4000]} />
      </div>
    </div>
  );
};
