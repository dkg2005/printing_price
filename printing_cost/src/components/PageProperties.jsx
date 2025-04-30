import React from "react";

export default function PageProperties({
  colorMode, setColorMode,
  paperType, setPaperType,
  printSide, setPrintSide,
  binding,   setBinding,
}) {
  const options = {
    "Color Mode": ["Color", "Black & White"],
    "Paper Type": ["Glossy", "Matte", "Recycled"],
    "Print Side": ["Single Side", "Double Side"],
    "Binding":    ["None", "Spiral", "Stapled", "Pinned"],
  };

  const handlers = {
    "Color Mode": [colorMode, setColorMode],
    "Paper Type": [paperType, setPaperType],
    "Print Side": [printSide, setPrintSide],
    "Binding":    [binding, setBinding],
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Page Properties</h2>
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(options).map(([label, vals]) => {
          const [val, setter] = handlers[label];
          return (
            <label key={label} className="block">
              <span>{label}</span>
              <select
                value={val}
                onChange={e => setter(e.target.value)}
                className="mt-1 w-full border rounded p-2"
              >
                {vals.map(v => <option key={v}>{v}</option>)}
              </select>
            </label>
          );
        })}
      </div>
    </div>
  );
}
