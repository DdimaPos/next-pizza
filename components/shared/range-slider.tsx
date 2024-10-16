"use client";
import React, { useState, useEffect, Fragment } from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

type SliderProps = {
  className?: string;
  min: number;
  max: number;
  step: number;
  formatLabel?: (value: number) => string;
  value?: number[] | readonly number[];
  onValueChange?: (values: number[]) => void;
};
const RangeSlider = React.forwardRef(
  (
    {
      className,
      min,
      max,
      step,
      formatLabel,
      value,
      onValueChange,
      ...props
    }: SliderProps,
    ref,
  ) => {
    const initialValue = Array.isArray(value) ? value : [min, max];
    const [localValues, setLocalValues] = useState(initialValue);

    useEffect(() => {
      setLocalValues(Array.isArray(value) ? value : [min, max]);
    }, [min, max, value]);

    const valueChange = (newValues: number[]) => {
      setLocalValues(newValues);
      if (onValueChange) onValueChange(newValues);
    };
    return (
      <SliderPrimitive.Root
        ref={ref as React.RefObject<HTMLDivElement>}
        min={min}
        max={max}
        step={step}
        value={localValues}
        onValueChange={valueChange}
        className={cn(
          "relative flex w-full touch-none select-none mb-6 items-center",
          className,
        )}
        {...props}
      >
        <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-primary/20">
          <SliderPrimitive.Range className="absolute h-full bg-primary" />
        </SliderPrimitive.Track>
        {localValues.map((val, i) => (
          <Fragment key={i}>
            <div 
                className="absolute text-center"
                style={{
                    left:`calc(${( (val - min)/(max - min)) * 100}% + 0px)`,
                    top:`10px`,
                }}        
            >
              <span className="text-sm">{formatLabel ? formatLabel(val) : val}</span>
            </div>
            <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full border border-primary/50 bg-white shadow transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
          </Fragment>
        ))}
      </SliderPrimitive.Root>
    );
  },
);
RangeSlider.displayName = SliderPrimitive.Root.displayName;
export {RangeSlider};
