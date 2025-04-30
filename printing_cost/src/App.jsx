import React, { useState } from "react";
import PriceCalculator from "./components/PriceCalculator";
import PageProperties  from "./components/PageProperties";
import CostCalculator  from "./components/CostCalculator";
import "./index.css";

export default function App() {
  // 1) Print settings
  const [quantity, setQuantity] = useState(1);
  const [size,     setSize]     = useState("A4");
  const [customW,  setCustomW]  = useState("");
  const [customH,  setCustomH]  = useState("");
  const [rate,     setRate]     = useState(1);

  // 2) Page properties
  const [colorMode, setColorMode] = useState("Color");
  const [paperType, setPaperType] = useState("Glossy");
  const [printSide, setPrintSide] = useState("Single Side");
  const [binding,   setBinding]   = useState("None");

  return (
    <div className="min-h-screen bg-sky-200 flex items-start justify-center py-10">
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg space-y-6">
        {/* 1) Print settings */}
        <PriceCalculator
          quantity={quantity} setQuantity={setQuantity}
          size={size}         setSize={setSize}
          customW={customW}   setCustomW={setCustomW}
          customH={customH}   setCustomH={setCustomH}
          rate={rate}         setRate={setRate}
        />

        {/* 2) Page properties */}
        <PageProperties
          colorMode={colorMode} setColorMode={setColorMode}
          paperType={paperType} setPaperType={setPaperType}
          printSide={printSide} setPrintSide={setPrintSide}
          binding={binding}     setBinding={setBinding}
        />

        {/* 3) Total + PDF actions */}
        <CostCalculator
          quantity={quantity}
          size={size}
          customW={customW}
          customH={customH}
          rate={rate}
          colorMode={colorMode}
          paperType={paperType}
          printSide={printSide}
          binding={binding}
        />
      </div>
    </div>
  );
}
