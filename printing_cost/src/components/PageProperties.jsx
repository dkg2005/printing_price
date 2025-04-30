import React from "react";

export default function PageProperties({
  colorMode, setColorMode,
  paperType, setPaperType,
  printSide, setPrintSide,
  binding, setBinding,
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Page Properties</h2>

      <div className="grid grid-cols-2 gap-4">
        <label className="block">
          <span>Color Mode</span>
          <select
            value={colorMode}
            onChange={e => setColorMode(e.target.value)}
            className="mt-1 w-full border rounded p-2"
          >
            <option>Color</option>
            <option>Black & White</option>
          </select>
        </label>

        <label className="block">
          <span>Paper Type</span>
          <select
            value={paperType}
            onChange={e => setPaperType(e.target.value)}
            className="mt-1 w-full border rounded p-2"
          >
            <option>Glossy</option>
            <option>Matte</option>
            <option>Recycled</option>
          </select>
        </label>

        <label className="block">
          <span>Print Side</span>
          <select
            value={printSide}
            onChange={e => setPrintSide(e.target.value)}
            className="mt-1 w-full border rounded p-2"
          >
            <option>Single Side</option>
            <option>Double Side</option>
          </select>
        </label>

        <label className="block">
          <span>Binding</span>
          <select
            value={binding}
            onChange={e => setBinding(e.target.value)}
            className="mt-1 w-full border rounded p-2"
          >
            <option>None</option>
            <option>Spiral</option>
            <option>Stapled</option>
            <option>Pinned</option>
          </select>
        </label>
      </div>
    </div>
  );
}
