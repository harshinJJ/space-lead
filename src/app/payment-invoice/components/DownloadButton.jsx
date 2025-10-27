"use client";

import React, { useEffect, useState } from "react";
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
    paddingHorizontal: 15,
  },
  billToLabelContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 0,
    width: "100%",
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
  transactionId: {
    marginBottom: 10,
    paddingHorizontal: 15,
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
  tableRowHeading: {
    fontWeight: "bold",
    backgroundColor: "#F0F0F0",
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

  // useEffect(() => {
  //   handleDownload();
  // }, []);

  const handleDownload = async () => {
    if (!invoice?.invoice_id && !invoiceId) return;
    setLoading(true);


    const MyDoc = (
      <Document>
        <PDFPage size="A4" style={styles.page}>
          {/* Header */}
          <View style={styles.header}>
            <View>
              <Text style={styles.headerTitle}>{invoice?.invoice?.title}</Text>
            </View>
            <View style={styles.logoContainer}>
              {/* Replace with your logo if available */}
              <Image src={invoice?.company?.logo} style={styles.logo} />
            </View>
          </View>

          {/* Bill To Section */}
          <View style={styles.billToLabelContainer}>
            <Text style={styles.billToLabel}>Bill To /</Text>
            <Text style={[styles.billToLabel, styles.arabic]}>فاتورة إلى</Text>
          </View>
          <View style={styles.billToSection}>
            <View>
              <Text style={styles.text}>{invoice?.bill_to?.name}</Text>
              <Text style={styles.text}>{invoice?.bill_to?.phone}</Text>
              <Text style={styles.text}>{invoice?.bill_to?.email}</Text>
            </View>

            <View style={styles.invoiceInfo}>
              <View style={styles.infoRow}>
                <Text style={styles.label}>Invoice# /</Text>
                <Text style={[styles.label, styles.arabic]}>
                  {" "}
                  رقم الفاتورة:{" "}
                </Text>
                <Text style={styles.value}>{invoice?.invoice?.number}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.label}>Invoice Date /</Text>
                <Text style={styles.value}>{invoice?.invoice?.date} : </Text>
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
                <Text style={styles.value}>{invoice?.invoice?.ticket_id}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.label}>Transaction ID /</Text>
                <Text style={[styles.label, styles.arabic]}> مرجع السداد:</Text>
              </View>
            </View>
          </View>
          <View style={[styles.infoRow, styles.transactionId]}>
            <Text style={styles.value}>{invoice?.invoice?.transaction_id}</Text>
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
              <View style={[styles.tableRow,item?.isHeading&&styles.tableRowHeading]} key={item.id}>
                <View style={[styles.td, styles.colSr]}>
                  <Text>{item.id}</Text>
                </View>
                <View style={[styles.td, styles.colDescription, item?.isHeading?{}:{paddingLeft: 10}]}>
                  <Text>{item.description}</Text>
                </View>
                <View style={[styles.td, styles.rowQty]}>
                  <Text>{item.qty}</Text>
                </View>
                {(item.price||item?.price=="0")&&<View style={[styles.td, styles.colTotal]}>
                  <Text>
                    {item.price?.toFixed(2)} {invoice?.totals?.currency}
                  </Text>
                </View>}
              </View>
            ))}

            {/* QR + Totals */}
            <View style={styles.bottomSection}>
              <View style={styles.qrContainer}>
                {invoice?.qr_code && (
                  <Image src={invoice.qr_code} style={styles.qrCode} />
                )}
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

    setTimeout(() => {
      window.close();
    }, 100);
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

export const Preview = ({ invoice = {} }) => {
  return (
    <PDFViewer width="100%" height={600}>
      <Document>
        <PDFPage size="A4" style={styles.page}>
          {/* Header */}
          <View style={styles.header}>
            <View>
              <Text style={styles.headerTitle}>{invoice.invoice.title}</Text>
            </View>
            <View style={styles.logoContainer}>
              {/* Replace with your logo if available */}
              <Image src={invoice.company.logo} style={styles.logo} />
            </View>
          </View>

          {/* Bill To Section */}
          <View style={styles.billToLabelContainer}>
            <Text style={styles.billToLabel}>Bill To /فاتورة إلى</Text>
          </View>
          <View style={styles.billToSection}>
            <View>
              <Text style={styles.text}>{invoice.bill_to.name}</Text>
              <Text style={styles.text}>{invoice.bill_to.phone}</Text>
              <Text style={styles.text}>{invoice.bill_to.email}</Text>
            </View>

            <View style={styles.invoiceInfo}>
              <View style={styles.infoRow}>
                <Text style={styles.label}>Invoice# /</Text>
                <Text style={[styles.label, styles.arabic]}>
                  {" "}
                  رقم الفاتورة:{" "}
                </Text>
                <Text style={styles.value}>{invoice.invoice.number}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.label}>Invoice Date /</Text>
                <Text style={styles.value}>{invoice.invoice.date} : </Text>
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
                <Text style={styles.value}>{invoice.invoice.ticket_id}</Text>
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
                    {item.price.toFixed(2)} {invoice.totals.currency}
                  </Text>
                </View>
              </View>
            ))}

            {/* QR + Totals */}
            <View style={styles.bottomSection}>
              <View style={styles.qrContainer}>
                <Image src={invoice.qr_code} style={styles.qrCode} />
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
                    {invoice.totals.total.toFixed(2)} {invoice.totals.currency}
                  </Text>
                </View>
                <View style={styles.totalRow}>
                  <Text style={styles.totalLabel}>Paid /</Text>
                  <Text style={[styles.totalLabel, styles.arabic]}>
                    المدفوع :
                  </Text>
                  <Text style={styles.totalValueBold}>
                    {invoice.totals.paid.toFixed(2)} {invoice.totals.currency}
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
