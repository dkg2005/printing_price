import React from "react";

export default function PriceCalculator({
  quantity, setQuantity,
  size,     setSize,
  customW,  setCustomW,
  customH,  setCustomH,
  rate,     setRate,
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Print Settings</h2>

      <label className="block">
        <span>Quantity</span>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={e => setQuantity(+e.target.value || 0)}
          className="mt-1 w-full border rounded p-2"
        />
      </label>

      <label className="block">
        <span>Size</span>
        <select
          value={size}
          onChange={e => setSize(e.target.value)}
          className="mt-1 w-full border rounded p-2"
        >
          <option>A4</option>
          <option>A3</option>
          <option>Letter</option>
          <option>Custom</option>
        </select>
      </label>

      {size === "Custom" && (
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Width (cm)"
            value={customW}
            onChange={e => setCustomW(e.target.value)}
            className="w-1/2 border rounded p-2"
          />
          <input
            type="number"
            placeholder="Height (cm)"
            value={customH}
            onChange={e => setCustomH(e.target.value)}
            className="w-1/2 border rounded p-2"
          />
        </div>
      )}

      <label className="block">
        <span>Rate per Page (₹)</span>
        <input
          type="number"
          min="0"
          value={rate}
          onChange={e => setRate(+e.target.value || 0)}
          className="mt-1 w-full border rounded p-2"
        />
      </label>
    </div>
  );
}
