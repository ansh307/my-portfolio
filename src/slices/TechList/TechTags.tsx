
import React from "react";
import clsx from "clsx";
import { KeyTextField } from "@prismicio/client";

type TechTagsProps = {
  label: KeyTextField;
  className?: string;
};

export default function TechTags({
  label,
  className,
}: TechTagsProps) {
  return (
    <div
    //   field={linkField}
      className={clsx(
        "group relative flex w-fit text-slate-800 items-center justify-center overflow-hidden border-2 border-slate-900 bg-slate-100 rounded-full px-4 py-2 font-bold transition-transform ease-out  hover:scale-105",
        className,
      )}
    >
      <span
        className={clsx(
          "absolute inset-0 z-0 h-full translate-y-9 bg-yellow-300 transition-transform  duration-300 ease-in-out group-hover:translate-y-0",
        )}
      />
      <span className="relative flex items-center justify-center gap-2">
        {label} 
      </span>
    </div>
  );
}