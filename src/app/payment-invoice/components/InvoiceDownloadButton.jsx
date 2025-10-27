'use client';

import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { useEffect, useRef } from 'react';


export default function InvoiceDownloadButton({
  invoiceData,
}) {
  const hiddenDivRef = useRef(null);

  const handleDownload = async () => {
  if (!hiddenDivRef.current) return;

  // Show the hidden div for rendering
  hiddenDivRef.current.style.display = 'block';

  try {
    // Render the invoice content to canvas
    const canvas = await html2canvas(hiddenDivRef.current, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
    });

    // A4 size in pixels at 96 DPI (portrait)
    const a4WidthPx = 794;
    const a4HeightPx = 1123;

    // Create a new jsPDF in A4
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: [a4WidthPx, a4HeightPx],
    });

    // Calculate centered position
    const imgWidth = Math.min(canvas.width, a4WidthPx - 40); // Add small margin
    const imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect ratio

    const x = (a4WidthPx - imgWidth) / 2;
    const y = (a4HeightPx - imgHeight) / 2;

    // Convert canvas to image
    const imgData = canvas.toDataURL('image/png');

    // Add image centered on A4
    pdf.addImage(imgData, 'PNG', x, 0, imgWidth, imgHeight);

    // Save PDF
    pdf.save(`invoice-${invoiceData.invoice?.number || invoiceData.invoiceId || 'download'}.pdf`);
  } catch (error) {
    console.error('PDF generation failed:', error);
  } finally {
    // Hide the div again
    if (hiddenDivRef.current) {
      hiddenDivRef.current.style.display = 'none';
    }
  }
};

  // const handleDownload = async () => {
  //   if (!hiddenDivRef.current) return;

  //   // Temporarily show the hidden div (for accurate rendering)
  //   hiddenDivRef.current.style.display = 'block';

  //   try {
  //     const canvas = await html2canvas(hiddenDivRef.current, {
  //       scale: 2, // Higher quality
  //       useCORS: true,
  //       allowTaint: true,
  //     });

  //     const imgData = canvas.toDataURL('image/png');
  //     const pdf = new jsPDF({
  //       orientation: 'portrait',
  //       unit: 'px',
  //       format: [canvas.width, canvas.height],
  //     });

  //     pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
  //     pdf.save(`invoice-${invoiceData.invoice?.number || invoiceData.invoiceId || 'download'}.pdf`);
  //   } catch (error) {
  //     console.error('PDF generation failed:', error);
  //   } finally {
  //     // Hide it again
  //     if (hiddenDivRef.current) {
  //       hiddenDivRef.current.style.display = 'none';
  //     }
  //   }
  // };

  // Generate the inner HTML content as a React element (not string)
  // This ensures proper image loading and avoids XSS issues
  return (
    <>
      <button
        onClick={handleDownload}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Download PDF
      </button>

      {/* Hidden printable invoice */}
      <div
        ref={hiddenDivRef}
        style={{
          position: 'absolute',
          left: '-9999px',
          top: 0,
          width: '660px',
          backgroundColor: '#fff',
          padding: '20px',
          fontFamily: '"Poppins", sans-serif',
          fontSize: '16px',
          lineHeight: 1.4,
        }}
      >
        <div className="invoice-header" style={{ backgroundColor: '#023c3b', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h4 style={{ color: '#fff', margin: 0, fontSize: '30px' }}>
            {invoiceData.invoice?.title || 'TAX INVOICE / ﻓﺎﺗﻮرة ﺿﺮﻳﺒﻴﺔ'}
          </h4>
          {invoiceData.company?.logo && (
            <img
              src={invoiceData.company.logo}
              alt="Logo"
              className="header_logo"
              style={{ width: '170px' }}
            />
          )}
        </div>

        <div className="invoice-content" style={{ padding: '20px', backgroundColor: '#fdffff' }}>
          <h4 style={{ fontSize: '23px', margin: '10px 0',textAlign:"center" }}>Bill To / فاتورة إلى</h4>
          <div className="invoice-details" style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '20px' }}>
            <div style={{ width: '40%', fontSize: '16px', textAlign: 'left' }}>
              <div style={{ margin: '5px 0' }}>{invoiceData.bill_to?.name}</div>
              <div style={{ margin: '5px 0' }}>{invoiceData.bill_to?.phone}</div>
              <div style={{ margin: '5px 0' }}>{invoiceData.bill_to?.email}</div>
            </div>
            <div style={{ width: '60%', fontSize: '16px', textAlign: 'right' }}>
              <div style={{ margin: '5px 0' }}>
                <strong>Invoice# / رقم الفاتورة:</strong> {invoiceData.invoice?.number}
              </div>
              <div style={{ margin: '5px 0' }}>
                <strong>Invoice Date / تاريخ الفاتورة:</strong> {invoiceData.invoice?.date}
              </div>
              <div style={{ margin: '5px 0' }}>
                <strong>Ticket ID / رقم التذكرة:</strong> {invoiceData.invoice?.ticket_id}
              </div>
              <div style={{ margin: '5px 0' }}>
                <strong>Transaction ID / مرجع السداد:</strong> 
              </div>
            </div>
          </div>
              <div style={{ margin: '5px 0',textAlign:"end" }}>
                   {invoiceData.invoice?.transaction_id}
              </div>

          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '30px', tableLayout: 'fixed' }}>
            <thead>
              <tr>
                <th style={{ width: '50px', textAlign: 'center', backgroundColor: '#023c3b', color: '#fff', padding: '8px', border: '1px solid #ddd' }}>
                  رﻗﻢ<br />Sr <br />#
                </th>
                <th style={{ textAlign: 'left', backgroundColor: '#023c3b', color: '#fff', padding: '8px', border: '1px solid #ddd' }}>
                  الوصف<br />Description
                </th>
                <th style={{ width: '70px', textAlign: 'center', backgroundColor: '#023c3b', color: '#fff', padding: '8px', border: '1px solid #ddd' }}>
                  اﻟﻜﻤﻴﺔ<br />Qty
                </th>
                <th style={{ width: '180px', textAlign: 'left', backgroundColor: '#023c3b', color: '#fff', padding: '8px', border: '1px solid #ddd' }}>
                  السعر الإجمالي<br />Total Price
                </th>
              </tr>
            </thead>
            <tbody>
             {invoiceData.items?.map((item, i) => {
  const price = parseFloat(item.price) || 0;
  return (
    <tr
      key={i}
      style={{
        backgroundColor: item.isHeading ? '#F0F0F0' : 'transparent',
        fontWeight: item.isHeading ? 'bold' : 'normal',
        fontSize: item.isHeading ? '18px' : '16px',
        textTransform: item.isHeading ? 'none' : 'uppercase',
      }}
    >
      <td style={{ textAlign: 'center', padding: '8px', border: '1px solid #ddd' }}>
        {item.id}
      </td>
      <td style={{ textAlign: 'left', padding: '8px', border: '1px solid #ddd' }}>
        <div style={{ paddingLeft: item.isHeading ? '0' : '16px' }}>
          {item.description}
        </div>
      </td>
      <td style={{ textAlign: 'center', padding: '8px', border: '1px solid #ddd' }}>
        {item.qty}
      </td>
      <td style={{ textAlign: 'left', padding: '8px', border: '1px solid #ddd' }}>
        {item.isHeading ? '' : `${price.toFixed(2)} ${invoiceData.totals?.currency}`}
      </td>
    </tr>
  );
})}
            </tbody>
          </table>

          <div className="invoice-footer" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            {invoiceData.qr_code && (
              <div style={{ width: '30%' }}>
                <img
                  src={invoiceData.qr_code}
                  alt="QR Code"
                  style={{ width: '100px' }}
                />
              </div>
            )}
            <div style={{ width: invoiceData.qr_code ? '70%' : '100%', textAlign: 'right' }}>
              <div style={{ margin: '8px 0', fontWeight: 600 }}>
                <strong>Subtotal / الاجمالي قبل الضريبة :</strong>
                <span style={{ display: 'inline-block', minWidth: '120px', textAlign: 'right', float: 'right' }}>
                  {invoiceData.totals?.subtotal?.toFixed(2)} {invoiceData.totals?.currency}
                </span>
                <div style={{ clear: 'both' }}></div>
              </div>
              <div style={{ margin: '8px 0', fontWeight: 600 }}>
                <strong>15% VAT Amount / مبلغ الضريبة :</strong>
                <span style={{ display: 'inline-block', minWidth: '120px', textAlign: 'right', float: 'right' }}>
                  {invoiceData.totals?.vat_amount?.toFixed(2)} {invoiceData.totals?.currency}
                </span>
                <div style={{ clear: 'both' }}></div>
              </div>
              <div style={{ margin: '8px 0', fontWeight: 600 }}>
                <strong>Total Payable / الاجمالي المستحق :</strong>
                <span style={{ display: 'inline-block', minWidth: '120px', textAlign: 'right', float: 'right' }}>
                  {invoiceData.totals?.total?.toFixed(2)} {invoiceData.totals?.currency}
                </span>
                <div style={{ clear: 'both' }}></div>
              </div>
              <div style={{ margin: '8px 0', fontWeight: 600 }}>
                <strong>Paid / المدفوع :</strong>
                <span style={{ display: 'inline-block', minWidth: '120px', textAlign: 'right', float: 'right' }}>
                  {invoiceData.totals?.paid?.toFixed(2)} {invoiceData.totals?.currency}
                </span>
                <div style={{ clear: 'both' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}