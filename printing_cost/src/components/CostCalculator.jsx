import React, { useMemo } from "react";
import { jsPDF } from "jspdf";

// multipliers
const sizeMul = { A4: 1, A3: 1.5, Letter: 1.2, Custom: 1.3 };
const propMul = {
  Color: 1.2, "Black & White": 1.0,
  Glossy: 1.3, Matte: 1.1, Recycled: 0.9,
  "Single Side": 1.0, "Double Side": 1.8,
  None: 1.0, Spiral: 1.05, Stapled: 1.02, Pinned: 1.01,
};

export default function CostCalculator({
  quantity, size, customW, customH, rate,
  colorMode, paperType, printSide, binding,
}) {
  const total = useMemo(() => {
    const s = sizeMul[size] ?? 1;
    const p = propMul[colorMode]
            * propMul[paperType]
            * propMul[printSide]
            * propMul[binding];
    return quantity * rate * s * p;
  }, [quantity, rate, size, colorMode, paperType, printSide, binding]);

  const buildPDF = () => {
    const doc = new jsPDF();
    let y = 20;
    doc.setFontSize(16);
    doc.text("Print Cost Quote", 105, y, { align: "center" });
    doc.setFontSize(12);
    y += 10;

    const lines = [
      `Quantity:          ${quantity}`,
      `Size:              ${size}${size==="Custom" ? ` (${customW}×${customH})` : ""}`,
      `Rate/page:         ${rate}`,
      `Color Mode:        ${colorMode}`,
      `Paper Type:        ${paperType}`,
      `Print Side:        ${printSide}`,
      `Binding:           ${binding}`,
      `-------------------------------`,
      `TOTAL PRICE:       ${total.toFixed(2)}`,
    ];

    lines.forEach(line => {
      doc.text(line, 20, y);
      y += 8;
    });

    return doc;
  };

  const downloadPDF = () => {
    buildPDF().save("print-quote.pdf");
  };

  const sharePDF = async () => {
    const doc  = buildPDF();
    const blob = doc.output("blob");
    const file = new File([blob], "print-quote.pdf", { type: "application/pdf" });
    if (navigator.canShare?.({ files: [file] })) {
      navigator.share({ files: [file], title: "Print Quote" }).catch(console.error);
    } else {
      alert("Sharing not supported on this device.");
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-center">Total: ₹{total.toFixed(2)}</h2>
      <div className="flex justify-center gap-4">
        <button
          onClick={downloadPDF}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Download PDF
        </button>
        <button
          onClick={sharePDF}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Share PDF
        </button>
      </div>
    </div>
  );
}
