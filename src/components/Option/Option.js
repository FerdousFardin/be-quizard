import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export const Option = ({ option }) => {
  return (
    <div className="border-2 border-accent p-4 rounded text-lg lg:text-xl flex items-center gap-2">
      <CheckCircleIcon className="w-6 h-6" />
      {option}
    </div>
  );
};
