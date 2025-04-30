import React, { useMemo } from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable"; 

// cost multipliers
const sizeMul = { A4: 1, A3: 1.5, Letter: 1.2, Custom: 1.3 };
const propMul = {   // Can be adjusted
  Color: 1.2, "Black & White": 1.0,
  Glossy: 1.3, Matte: 1.1, Recycled: 0.9,
  "Single Side": 1.0, "Double Side": 1.8,
  None: 1.0, Spiral: 1.05, Stapled: 1.02, Pinned: 1.01,
};


export default function CostCalculator({
  quantity, size, customW, customH, rate,
  colorMode, paperType, printSide, binding,
}) 

{
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
    doc.setFontSize(18);
    doc.text("Print Cost Receipt", 105, 15, { align: "center" });

    autoTable(doc, {
      startY: 30,
      head: [["Item", "Value"]],
      body: [
        ["Quantity", quantity],
        ["Size", size === "Custom" ? `${size} (${customW}×${customH})` : size],
        ["Rate per page", `Rs.${rate}`],
        ["Color Mode", colorMode],
        ["Paper Type", paperType],
        ["Print Side", printSide],
        ["Binding", binding],
        ["TOTAL PRICE", `Rs.${total.toFixed(2)}`],
      ],
      theme: "grid",
      headStyles: { fillColor: [41, 128, 185], textColor: 255 },
      bodyStyles: { fontSize: 12 },
      columnStyles: {
        0: { cellWidth: 70 },
        1: { cellWidth: 100 },
      },
    });

    return doc;
  };
  const downloadPDF = () => {
    buildPDF().save("print-reciept.pdf");
  };

  const sharePDF = async () => {
    const doc  = buildPDF();
    const blob = doc.output("blob");
    const file = new File([blob], "print-reciept.pdf", { type: "application/pdf" });
    if (navigator.canShare?.({ files: [file] })) {
      navigator.share({ files: [file], title: "Print Reciept" }).catch(console.error);
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
