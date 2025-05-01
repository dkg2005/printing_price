# Printing Cost Calculator 🖨️

A single-page web application that calculates the total cost of printing based on user inputs. It allows users to download the result as a PDF or share it via WhatsApp or other social media platforms.

---

## Features ✨

- **Dynamic Cost Calculation**: Automatically updates the total price based on user inputs.
- **Customizable Options**:
  - Quantity of pages.
  - Page size (A4, A3, Letter, or custom dimensions).
  - Rate per page.
  - Page properties like color mode, paper type, print side, and binding.
- **PDF Generation**: Generates a detailed receipt in PDF format.
- **Share Functionality**: Share the receipt via WhatsApp or other platforms (if supported by the device).
- **Responsive Design**: Clean and user-friendly layout, optimized for all devices.

---

## How It Works 🛠️

1. **Input Details**:
   - Enter the quantity of pages and rate per page.
   - Select the page size (A4, A3, Letter, or Custom with width × height).
   - Choose additional properties like color mode, paper type, print side, and binding.

2. **View Total Cost**:
   - The total price is calculated dynamically using the formula:
     ```
     Total Price = Quantity × Rate per Page × Size Multiplier × Property Multipliers
     ```

3. **Download or Share Receipt**:
   - Click "Download PDF" to save the receipt.
   - Click "Share PDF" to share it via WhatsApp or other platforms (if supported).
---


## 🧰 Technologies Used

- **React** – For building the user interface  
- **Tailwind CSS** – For styling the application  
- **Vite** – For fast development and build tooling  
- **jsPDF** – For generating PDF receipts  
- **jspdf-autotable** – For adding tables to PDF  
- **navigator.share API** – For sharing the receipt via supported platforms  
---

## ✅ Functional Requirements

### 🔢 Dynamic Price Calculation
- Updates the total price in real-time based on user inputs  
- Includes logic for size and property multipliers  

### 📄 PDF Generation
- Captures the form and price summary in a professional-looking PDF  
- Uses **jsPDF** and **jspdf-autotable** for PDF creation  

### 📤 Share Functionality
- Allows sharing the PDF via WhatsApp or other platforms using the **navigator.share API**
