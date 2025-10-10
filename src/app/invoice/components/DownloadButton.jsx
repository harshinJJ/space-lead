"use client";

import React, { useState } from "react";
import {
  pdf,
  Document,
  Page as PDFPage,
  Text,
  View,
  StyleSheet,
  Image,
  Font,
  PDFViewer,
} from "@react-pdf/renderer";
import PrimaryButton from "@/components/buttons/PrimaryButton";

Font.register({
  family: "Noto Sans Arabic",
  src: "/fonts/NotoSansArabic.ttf", // local .ttf font
  fontWeight: "normal",
});

Font.register({
  family: "Noto Sans Arabic",
  src: "/fonts/NotoSansArabic-Bold.ttf", // local .ttf font
  fontWeight: "normal",
});



const styles = StyleSheet.create({
  page: {
    // fontFamily: "Helvetica",
    fontFamily: "Noto Sans Arabic", // ✅ Use registered Arabic font
    fontSize: 10,
    backgroundColor: "#fff",
    paddingHorizontal: 50,
    paddingVertical: 15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#023c3b",
    color: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    // fontFamily: "Noto Sans Arabic",
  },
  logoContainer: {
    textAlign: "right",
  },
  subContainer: {
    paddingHorizontal: 15,
  },
  logo: {
    textAlign: "right",
    width: 125,
    height: "auto",
  },
  logoText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  logoSub: {
    fontSize: 10,
  },
  billToSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  billToLabelContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"center",
    marginBottom: 0,
    width:"100%",
    marginTop: 30,
  },
  billToLabel: {
    fontWeight: "bold",
    fontSize: 12,
  },
  text: {
    fontSize: 12,
  },
  invoiceInfo: {
    width: "50%",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    fontSize: 12,
  },
  label: {
    fontWeight: "bold",
  },
  value: {},
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#023c3b",
    color: "#fff",
    paddingVertical: 6,
    paddingHorizontal: 5,
    marginTop: 15,
  },
  th: {
    fontWeight: "bold",
    fontSize: 12,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  colSr: { width: "8%", textAlign: "center" },
  colDescription: { width: "52%", textAlign: "left" },
  colQty: { width: "15%", textAlign: "left" },
  rowQty: { width: "15%", textAlign: "center" },
  colTotal: { width: "25%", textAlign: "left" },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingVertical: 6,
    paddingHorizontal: 5,
  },
  td: {
    fontSize: 12,
  },
  bottomSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    marginLeft: "10%",
  },
  qrContainer: {
    width: "20%",
  },
  qrCode: {
    width: 70,
    height: 70,
  },
  totals: {
    width: "75%",
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  totalLabel: {
    fontWeight: "bold",
    fontSize: 12,
    color: "#000",
    textAlign: "right",
  },
  totalValue: {
    fontSize: 9,
  },
  totalValueBold: {
    fontSize: 12,
    fontWeight: "bold",
    width: "30%",
    textAlign: "right",
  },
  totalValueBoldGreen: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#023c3b",
  },
  arabic: {
    fontFamily: "Noto Sans Arabic",
    fontWeight: "normal",
  },
});
const DownloadIcon = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const DownloadButton = ({ invoice, invoiceId }) => {
  const [loading, setLoading] = useState(false);


  const handleDownload = async () => {
    if (!invoice?.invoice_id && !invoiceId) return;
    setLoading(true);

    // old doc
    // const MyDoc = (
    //   <Document>
    //     <PDFPage size="A4" style={styles.page}>
    //       {/* Header */}
    //       <View style={styles.header}>
    //         <Text style={styles.invoiceTitle}>TICKET INVOICE</Text>
    //         <Text style={styles.invoiceNumber}>#{invoice.id}</Text>
    //         {invoice.status === "paid" && (
    //           <View style={styles.statusBadge}>
    //             <Text>✓ PAID</Text>
    //           </View>
    //         )}
    //       </View>

    //       {/* Event Information */}
    //       <View style={styles.eventSection}>
    //         <Text style={styles.eventTitle}>{invoice.event.name}</Text>
    //         <View style={styles.eventDetail}>
    //           <Text style={styles.eventLabel}>Date:</Text>
    //           <Text style={styles.eventValue}>{invoice.event.date}</Text>
    //         </View>
    //         <View style={styles.eventDetail}>
    //           <Text style={styles.eventLabel}>Time:</Text>
    //           <Text style={styles.eventValue}>{invoice.event.time}</Text>
    //         </View>
    //         <View style={styles.eventDetail}>
    //           <Text style={styles.eventLabel}>Venue:</Text>
    //           <Text style={styles.eventValue}>{invoice.event.venue}</Text>
    //         </View>
    //         <View style={styles.eventDetail}>
    //           <Text style={styles.eventLabel}>Location:</Text>
    //           <Text style={styles.eventValue}>{invoice.event.address}</Text>
    //         </View>
    //       </View>

    //       {/* Customer & Organizer Info */}
    //       <View style={styles.infoSection}>
    //         <View style={styles.infoBlock}>
    //           <Text style={styles.infoTitle}>Customer Details</Text>
    //           <Text style={styles.companyName}>{invoice.customer.name}</Text>
    //           <Text style={styles.emailText}>{invoice.customer.email}</Text>
    //           <Text style={styles.infoText}>{invoice.customer.phone}</Text>
    //         </View>

    //         <View style={styles.infoBlock}>
    //           <Text style={styles.infoTitle}>Organizer</Text>
    //           <Text style={styles.companyName}>{invoice.organizer.name}</Text>
    //           <Text style={styles.emailText}>{invoice.organizer.email}</Text>
    //           <Text style={styles.infoText}>{invoice.organizer.phone}</Text>
    //         </View>
    //       </View>

    //       {/* Invoice Details */}
    //       <View style={styles.detailsBox}>
    //         <View style={styles.detailItem}>
    //           <Text style={styles.detailLabel}>Invoice Date</Text>
    //           <Text style={styles.detailValue}>{invoice.date}</Text>
    //         </View>
    //         <View style={styles.detailItem}>
    //           <Text style={styles.detailLabel}>Invoice Number</Text>
    //           <Text style={styles.detailValue}>{invoice.id}</Text>
    //         </View>
    //         <View style={styles.detailItem}>
    //           <Text style={styles.detailLabel}>Payment Status</Text>
    //           <Text style={[styles.detailValue, { color: "#5ac0be" }]}>
    //             PAID
    //           </Text>
    //         </View>
    //         <View style={styles.detailItem}>
    //           <Text style={styles.detailLabel}>Total Amount</Text>
    //           <Text style={[styles.detailValue, { color: "#5ac0be" }]}>
    //             ${total.toFixed(2)}
    //           </Text>
    //         </View>
    //       </View>

    //       {/* Tickets Table */}
    //       <View style={styles.table}>
    //         <View style={styles.tableHeader}>
    //           <Text style={[styles.tableHeaderText, styles.colDescription]}>
    //             Ticket Type
    //           </Text>
    //           <Text style={[styles.tableHeaderText, styles.colQty]}>Qty</Text>
    //           <Text style={[styles.tableHeaderText, styles.colAmount]}>
    //             Amount
    //           </Text>
    //         </View>

    //         {invoice.tickets.map((ticket, idx) => (
    //           <View key={idx} style={styles.tableRow}>
    //             <Text style={[styles.tableText, styles.colDescription]}>
    //               {ticket.description}
    //             </Text>
    //             <Text style={[styles.tableTextGray, styles.colQty]}>
    //               {ticket.quantity}
    //             </Text>
    //             <Text style={[styles.tableText, styles.colAmount]}>
    //               ${ticket.amount.toFixed(2)}
    //             </Text>
    //           </View>
    //         ))}

    //         {invoice.fees.map((fee, idx) => (
    //           <View key={`fee-${idx}`} style={styles.tableRow}>
    //             <Text style={[styles.tableTextGray, styles.colDescription]}>
    //               {fee.description}
    //             </Text>
    //             <Text style={[styles.tableTextGray, styles.colQty]}>-</Text>
    //             <Text style={[styles.tableTextGray, styles.colAmount]}>
    //               ${fee.amount.toFixed(2)}
    //             </Text>
    //           </View>
    //         ))}
    //       </View>

    //       {/* Totals */}
    //       <View style={styles.totalsSection}>
    //         <View style={styles.totalRow}>
    //           <Text style={styles.totalLabel}>Subtotal</Text>
    //           <Text style={styles.totalValue}>${subtotal.toFixed(2)}</Text>
    //         </View>
    //         <View style={styles.totalRow}>
    //           <Text style={styles.totalLabel}>Fees</Text>
    //           <Text style={styles.totalValue}>${feesTotal.toFixed(2)}</Text>
    //         </View>
    //         <View style={styles.totalRow}>
    //           <Text style={styles.totalLabel}>
    //             Tax ({(invoice.taxRate * 100).toFixed(0)}%)
    //           </Text>
    //           <Text style={styles.totalValue}>${tax.toFixed(2)}</Text>
    //         </View>
    //         <View style={styles.grandTotalRow}>
    //           <Text style={styles.grandTotalLabel}>Total Paid</Text>
    //           <Text style={styles.grandTotalValue}>${total.toFixed(2)}</Text>
    //         </View>
    //       </View>

    //       {/* Notes */}
    //       <View style={styles.notesBox}>
    //         <Text style={styles.notesTitle}>Important Information</Text>
    //         <Text style={styles.notesText}>{invoice.notes}</Text>
    //       </View>

    //       {/* Footer */}
    //       <View style={styles.footer}>
    //         <Text style={styles.footerText}>
    //           Thank you for your purchase! For support, contact{" "}
    //           {invoice.organizer.email}
    //         </Text>
    //       </View>
    //     </PDFPage>
    //   </Document>
    // );

    const MyDoc = (
      <Document>
        <PDFPage size="A4" style={styles.page}>
          {/* Header */}
          <View style={styles.header}>  
            <View>
              <Text style={styles.headerTitle}>
                {invoice?.invoice?.title}
              </Text>
            </View>
            <View style={styles.logoContainer}>
              {/* Replace with your logo if available */}
              <Image
                src={invoice?.company?.logo}
                style={styles.logo}
              />
            </View>
          </View>

          {/* Bill To Section */}
          <View style={styles.billToLabelContainer}>
            <Text style={styles.billToLabel}>Bill To /</Text>
            <Text style={[styles.billToLabel,styles.arabic]}>فاتورة إلى</Text>
          </View>
          <View style={styles.billToSection}>
            <View>
              <Text style={styles.text}>
                {invoice?.bill_to?.name}
              </Text>
              <Text style={styles.text}>
                {invoice?.bill_to?.phone}
              </Text>
              <Text style={styles.text}>
                {invoice?.bill_to?.email}
              </Text>
            </View>

            <View style={styles.invoiceInfo}>
              <View style={styles.infoRow}>
                <Text style={styles.label}>Invoice# /</Text>
                <Text style={[styles.label, styles.arabic]}>
                  {" "}
                  رقم الفاتورة:{" "}
                </Text>
                <Text style={styles.value}>
                  {invoice?.invoice?.number}
                </Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.label}>Invoice Date /</Text>
                <Text style={styles.value}>
                  {invoice?.invoice?.date} :{" "}
                </Text>
                <Text style={[styles.label, styles.arabic]}>
                  {" "}
                  تاريخ الفاتورة
                </Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.label}>Ticket ID /</Text>
                <Text style={[styles.label, styles.arabic]}>
                  رقم التذكرة :{" "}
                </Text>
                <Text style={styles.value}>
                  {invoice?.invoice?.ticket_id}
                </Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.label}>Transaction ID /</Text>
                <Text style={[styles.label, styles.arabic]}> مرجع السداد:</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.value}>
                  {invoice?.invoice?.transaction_id}
                </Text>
              </View>
            </View>
          </View>

          {/* Table Header */}
          <View style={styles.subContainer}>
            <View style={styles.tableHeader}>
              <View style={[styles.th, styles.colSr]}>
                <Text style={styles.arabic}>رﻗﻢ</Text>
                <Text>Sr</Text>
                <Text>#</Text>
              </View>
              <View style={[styles.th, styles.colDescription]}>
                <Text style={styles.arabic}>الوصف</Text>
                <Text>Description</Text>
              </View>
              <View style={[styles.th, styles.colQty]}>
                <Text style={styles.arabic}>الكمية</Text>
                <Text>Qty</Text>
              </View>
              <View style={[styles.th, styles.colTotal]}>
                <Text style={styles.arabic}>السعر الإجمالي</Text>
                <Text>Total Price</Text>
              </View>
            </View>

            {/* Table Rows */}
            {invoice?.items?.map((item) => (
              <View style={styles.tableRow} key={item.id}>
                <View style={[styles.td, styles.colSr]}>
                  <Text>{item.id}</Text>
                </View>
                <View style={[styles.td, styles.colDescription]}>
                  <Text>{item.description}</Text>
                </View>
                <View style={[styles.td, styles.rowQty]}>
                  <Text>{item.qty}</Text>
                </View>
                <View style={[styles.td, styles.colTotal]}>
                  <Text>
                    {item.price.toFixed(2)}{" "}
                    {invoice?.totals?.currency}
                  </Text>
                </View>
              </View>
            ))}

            {/* QR + Totals */}
            <View style={styles.bottomSection}>
              <View style={styles.qrContainer}>
                {invoice?.qr_code&&<Image
                  src={invoice.qr_code}
                  style={styles.qrCode}
                />}
              </View>

              <View style={styles.totals}>
                <View style={styles.totalRow}>
                  <Text style={styles.totalLabel}>Subtotal /</Text>
                  <Text style={[styles.totalLabel, styles.arabic]}>
                    الإجمالي قبل الضريبة :
                  </Text>
                  <Text style={styles.totalValueBold}>
                    {invoice?.totals?.subtotal?.toFixed(2)}{" "}
                    {invoice?.totals?.currency}
                  </Text>
                </View>
                <View style={styles.totalRow}>
                  <Text style={styles.totalLabel}>15% VAT Amount /</Text>
                  <Text style={[styles.totalLabel, styles.arabic]}>
                    ضريبة القيمة المضافة :
                  </Text>
                  <Text style={styles.totalValueBold}>
                    {invoice?.totals?.vat_amount?.toFixed(2)}{" "}
                    {invoice?.totals?.currency}
                  </Text>
                </View>
                <View style={styles.totalRow}>
                  <Text style={styles.totalLabel}>Total Payable /</Text>
                  <Text style={[styles.totalLabel, styles.arabic]}>
                    الإجمالي المستحق :
                  </Text>
                  <Text style={styles.totalValueBold}>
                    {invoice?.totals?.total?.toFixed(2)}{" "}
                    {invoice?.totals?.currency}
                  </Text>
                </View>
                <View style={styles.totalRow}>
                  <Text style={styles.totalLabel}>Paid /</Text>
                  <Text style={[styles.totalLabel, styles.arabic]}>
                    المدفوع :
                  </Text>
                  <Text style={styles.totalValueBold}>
                    {invoice?.totals?.paid?.toFixed(2)}{" "}
                    {invoice?.totals?.currency}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </PDFPage>
      </Document>
    );

    const blob = await pdf(MyDoc).toBlob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `Spacelead_25_invoice_${invoice.id}.pdf`;
    link.click();

    setLoading(false);
  };

  return (
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
  );
};

export default DownloadButton;

export const Preview = ({invoice={}}) => {
  return (
    <PDFViewer width="100%" height={600}>
      <Document>
        <PDFPage size="A4" style={styles.page}>
          {/* Header */}
          <View style={styles.header}>
            <View>
              <Text style={styles.headerTitle}>
                {invoice.invoice.title}
              </Text>
            </View>
            <View style={styles.logoContainer}>
              {/* Replace with your logo if available */}
              <Image
                src={invoice.company.logo}
                style={styles.logo}
              />
            </View>
          </View>

          {/* Bill To Section */}
          <View style={styles.billToLabelContainer}>
            <Text style={styles.billToLabel}>Bill To /فاتورة إلى</Text>
          </View>
          <View style={styles.billToSection}>
            <View>
              <Text style={styles.text}>
                {invoice.bill_to.name}
              </Text>
              <Text style={styles.text}>
                {invoice.bill_to.phone}
              </Text>
              <Text style={styles.text}>
                {invoice.bill_to.email}
              </Text>
            </View>

            <View style={styles.invoiceInfo}>
              <View style={styles.infoRow}>
                <Text style={styles.label}>Invoice# /</Text>
                <Text style={[styles.label, styles.arabic]}>
                  {" "}
                  رقم الفاتورة:{" "}
                </Text>
                <Text style={styles.value}>
                  {invoice.invoice.number}
                </Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.label}>Invoice Date /</Text>
                <Text style={styles.value}>
                  {invoice.invoice.date} :{" "}
                </Text>
                <Text style={[styles.label, styles.arabic]}>
                  {" "}
                  تاريخ الفاتورة
                </Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.label}>Ticket ID /</Text>
                <Text style={[styles.label, styles.arabic]}>
                  رقم التذكرة :{" "}
                </Text>
                <Text style={styles.value}>
                  {invoice.invoice.ticket_id}
                </Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.label}>Transaction ID /</Text>
                <Text style={[styles.label, styles.arabic]}> مرجع السداد:</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.value}>
                  {invoice.invoice.transaction_id}
                </Text>
              </View>
            </View>
          </View>

          {/* Table Header */}
          <View style={styles.subContainer}>
            <View style={styles.tableHeader}>
              <View style={[styles.th, styles.colSr]}>
                <Text style={styles.arabic}>رﻗﻢ</Text>
                <Text>Sr</Text>
                <Text>#</Text>
              </View>
              <View style={[styles.th, styles.colDescription]}>
                <Text style={styles.arabic}>الوصف</Text>
                <Text>Description</Text>
              </View>
              <View style={[styles.th, styles.colQty]}>
                <Text style={styles.arabic}>الكمية</Text>
                <Text>Qty</Text>
              </View>
              <View style={[styles.th, styles.colTotal]}>
                <Text style={styles.arabic}>السعر الإجمالي</Text>
                <Text>Total Price</Text>
              </View>
            </View>

            {/* Table Rows */}
            {invoice.items.map((item) => (
              <View style={styles.tableRow} key={item.id}>
                <View style={[styles.td, styles.colSr]}>
                  <Text>{item.id}</Text>
                </View>
                <View style={[styles.td, styles.colDescription]}>
                  <Text>{item.description}</Text>
                </View>
                <View style={[styles.td, styles.rowQty]}>
                  <Text>{item.qty}</Text>
                </View>
                <View style={[styles.td, styles.colTotal]}>
                  <Text>
                    {item.price.toFixed(2)}{" "}
                    {invoice.totals.currency}
                  </Text>
                </View>
              </View>
            ))}

            {/* QR + Totals */}
            <View style={styles.bottomSection}>
              <View style={styles.qrContainer}>
                <Image
                  src={invoice.qr_code}
                  style={styles.qrCode}
                />
              </View>

              <View style={styles.totals}>
                <View style={styles.totalRow}>
                  <Text style={styles.totalLabel}>Subtotal /</Text>
                  <Text style={[styles.totalLabel, styles.arabic]}>
                    الإجمالي قبل الضريبة :
                  </Text>
                  <Text style={styles.totalValueBold}>
                    {invoice.totals.subtotal.toFixed(2)}{" "}
                    {invoice.totals.currency}
                  </Text>
                </View>
                <View style={styles.totalRow}>
                  <Text style={styles.totalLabel}>15% VAT Amount /</Text>
                  <Text style={[styles.totalLabel, styles.arabic]}>
                    ضريبة القيمة المضافة :
                  </Text>
                  <Text style={styles.totalValueBold}>
                    {invoice.totals.vat_amount.toFixed(2)}{" "}
                    {invoice.totals.currency}
                  </Text>
                </View>
                <View style={styles.totalRow}>
                  <Text style={styles.totalLabel}>Total Payable /</Text>
                  <Text style={[styles.totalLabel, styles.arabic]}>
                    الإجمالي المستحق :
                  </Text>
                  <Text style={styles.totalValueBold}>
                    {invoice.totals.total.toFixed(2)}{" "}
                    {invoice.totals.currency}
                  </Text>
                </View>
                <View style={styles.totalRow}>
                  <Text style={styles.totalLabel}>Paid /</Text>
                  <Text style={[styles.totalLabel, styles.arabic]}>
                    المدفوع :
                  </Text>
                  <Text style={styles.totalValueBold}>
                    {invoice.totals.paid.toFixed(2)}{" "}
                    {invoice.totals.currency}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </PDFPage>
      </Document>
    </PDFViewer>
  );
};
