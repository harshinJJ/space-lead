'use client';

import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { useEffect, useRef, useState } from 'react';
import PrimaryButton from '@/components/buttons/PrimaryButton';
import { DownloadIcon } from '@/data/icons';


export default function InvoiceDownloadButton({
  invoiceData,
}) {
  const hiddenDivRef = useRef(null);
  const [loading,setLoading]=useState(false)

  useEffect(()=>{handleDownload()},[])

  const handleDownload = async () => {
  if (!hiddenDivRef.current) return;
      setLoading(true);

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
    pdf.save(`Space-Lead-${invoiceData.invoiceId || 'download'}.pdf`);
  } catch (error) {
    console.error('PDF generation failed:', error);
    
  } finally {
    // Hide the div again
    
    if (hiddenDivRef.current) {
      hiddenDivRef.current.style.display = 'none';
    }
    setLoading(false);

    setTimeout(() => {
      window.close();
    }, 100);  }
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
    <PrimaryButton
      onClick={handleDownload}
      disabled={loading}
      className={`flex items-center gap-2 px-6 py-3 text-white rounded-lg transition-all shadow-md hover:shadow-lg ${
        loading ? "bg-gray-400 cursor-not-allowed" : ""
      }`}
      //   style={
      //     !loading
      //       ? {
      //           background: "linear-gradient(135deg, #7f529f 0%, #5ac0be 100%)",
      //         }
      //       : {}
      //   }
    >
      <DownloadIcon size={18} />
      <span>{loading ? "Preparing your PDF..." : "Download Invoice"}</span>
    </PrimaryButton>


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
            TAX INVOICE / <span style={{top:"8px"}}>ﻓﺎﺗﻮرة ﺿﺮﻳﺒﻴﺔ</span>
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
          <h4 style={{ fontSize: '23px', margin: '10px 0',textAlign:"center",lineHeight:"1" }}>Bill To /<span style={{top:"5px"}}>فاتورة إلى</span> </h4>
          <div className="invoice-details" style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '20px' }}>
            <div style={{ width: '40%', fontSize: '16px', textAlign: 'left' }}>
              <div style={{ margin: '5px 0' }}>{invoiceData.bill_to?.name}</div>
              <div style={{ margin: '5px 0' }}>{invoiceData.bill_to?.phone}</div>
              <div style={{ margin: '5px 0' }}>{invoiceData.bill_to?.email}</div>
            </div>
            <div style={{ width: '60%', fontSize: '16px', textAlign: 'right' }}>
              <div style={{ margin: '5px 0' }}>
                <strong>Invoice# / <span style={{top:"5px"}}>رقم الفاتورة</span>:</strong> {invoiceData.invoice?.number}
              </div>
              <div style={{ margin: '5px 0',display:"flex",justifyContent:"end" }}>
                <strong>Invoice Date / <span style={{top:"5px"}}>تاريخ الفاتورة</span>:</strong> {invoiceData.invoice?.date}
              </div>
              <div style={{ margin: '5px 0',display:"flex",justifyContent:"end" }}>
                <strong>Ticket ID / <span style={{top:"5px"}}> رقم التذكرة</span>:</strong> {invoiceData.invoice?.ticket_id}
              </div>
              <div style={{ margin: '5px 0' }}>
                <strong>Transaction ID / <span style={{top:"5px"}}>مرجع السداد</span>:</strong> 
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
                <strong>Subtotal / <span style={{top:"5px"}}>الاجمالي قبل الضريبة </span>:</strong>
                <span style={{ display: 'inline-block', minWidth: '120px', textAlign: 'right', float: 'right' }}>
                  {invoiceData.totals?.subtotal?.toFixed(2)} {invoiceData.totals?.currency}
                </span>
                <div style={{ clear: 'both' }}></div>
              </div>
              <div style={{ margin: '8px 0', fontWeight: 600 }}>
                <strong>15% VAT Amount / <span style={{top:"5px"}}>مبلغ الضريبة </span>:</strong>
                <span style={{ display: 'inline-block', minWidth: '120px', textAlign: 'right', float: 'right' }}>
                  {invoiceData.totals?.vat_amount?.toFixed(2)} {invoiceData.totals?.currency}
                </span>
                <div style={{ clear: 'both' }}></div>
              </div>
              <div style={{ margin: '8px 0', fontWeight: 600 }}>
                <strong>Total Payable / <span style={{top:"5px"}}>الاجمالي المستحق </span>:</strong>
                <span style={{ display: 'inline-block', minWidth: '120px', textAlign: 'right', float: 'right' }}>
                  {invoiceData.totals?.total?.toFixed(2)} {invoiceData.totals?.currency}
                </span>
                <div style={{ clear: 'both' }}></div>
              </div>
              <div style={{ margin: '8px 0', fontWeight: 600 }}>
                <strong>Paid / <span style={{top:"5px"}}>المدفوع </span>:</strong>
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