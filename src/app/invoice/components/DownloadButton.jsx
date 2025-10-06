"use client";

import React, { useState } from "react";
import {
  pdf,
  Document,
  Page as PDFPage,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
import PrimaryButton from "@/components/buttons/PrimaryButton";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 11,
    fontFamily: "Helvetica",
    backgroundColor: "#ffffff",
  },
  header: {
    marginBottom: 30,
    paddingBottom: 20,
    borderBottomWidth: 3,
    borderBottomColor: "#7f529f",
  },
  invoiceTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#7f529f",
    marginBottom: 5,
  },
  invoiceNumber: {
    fontSize: 11,
    color: "#666666",
  },
  statusBadge: {
    backgroundColor: "#5ac0be",
    color: "#ffffff",
    padding: "6 12",
    borderRadius: 12,
    fontSize: 9,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginTop: 10,
  },
  infoSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  infoBlock: {
    width: "48%",
  },
  infoTitle: {
    fontSize: 9,
    color: "#7f529f",
    fontWeight: "bold",
    marginBottom: 8,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  companyName: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#131f54",
    marginBottom: 4,
  },
  infoText: {
    fontSize: 10,
    color: "#4a5568",
    marginBottom: 2,
  },
  emailText: {
    fontSize: 10,
    color: "#5ac0be",
    marginBottom: 2,
    marginTop: 3,
  },
  detailsBox: {
    backgroundColor: "#f8f5fb",
    padding: 15,
    borderRadius: 8,
    marginBottom: 25,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailItem: {
    width: "24%",
  },
  detailLabel: {
    fontSize: 8,
    color: "#7f529f",
    fontWeight: "bold",
    marginBottom: 4,
    textTransform: "uppercase",
  },
  detailValue: {
    fontSize: 11,
    color: "#131f54",
    fontWeight: "bold",
  },
  eventSection: {
    backgroundColor: "#f0fffe",
    padding: 20,
    borderRadius: 8,
    marginBottom: 25,
    borderWidth: 2,
    borderColor: "#5ac0be",
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#131f54",
    marginBottom: 10,
  },
  eventDetail: {
    flexDirection: "row",
    marginBottom: 6,
  },
  eventLabel: {
    fontSize: 10,
    color: "#7f529f",
    fontWeight: "bold",
    width: 80,
  },
  eventValue: {
    fontSize: 10,
    color: "#131f54",
    flex: 1,
  },
  table: {
    marginBottom: 20,
  },
  tableHeader: {
    flexDirection: "row",
    borderBottomWidth: 2,
    borderBottomColor: "#7f529f",
    paddingBottom: 8,
    marginBottom: 8,
  },
  tableRow: {
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e2e8f0",
  },
  colDescription: {
    width: "60%",
    paddingRight: 10,
  },
  colQty: {
    width: "15%",
    textAlign: "center",
  },
  colAmount: {
    width: "25%",
    textAlign: "right",
  },
  tableHeaderText: {
    fontSize: 9,
    fontWeight: "bold",
    color: "#7f529f",
    textTransform: "uppercase",
  },
  tableText: {
    fontSize: 10,
    color: "#131f54",
  },
  tableTextGray: {
    fontSize: 10,
    color: "#4a5568",
  },
  totalsSection: {
    marginTop: 20,
    alignSelf: "flex-end",
    width: "45%",
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  totalLabel: {
    fontSize: 10,
    color: "#4a5568",
  },
  totalValue: {
    fontSize: 10,
    color: "#131f54",
    fontWeight: "bold",
  },
  grandTotalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    borderTopWidth: 2,
    borderTopColor: "#7f529f",
    marginTop: 5,
  },
  grandTotalLabel: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#131f54",
  },
  grandTotalValue: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#5ac0be",
  },
  notesBox: {
    backgroundColor: "#f8f5fb",
    padding: 15,
    borderRadius: 8,
    marginTop: 25,
    borderWidth: 1,
    borderColor: "#e9d5f5",
  },
  notesTitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#131f54",
    marginBottom: 6,
  },
  notesText: {
    fontSize: 9,
    color: "#4a5568",
    lineHeight: 1.5,
  },
  footer: {
    marginTop: 30,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: "#e2e8f0",
    textAlign: "center",
  },
  footerText: {
    fontSize: 9,
    color: "#718096",
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

  const subtotal = invoice.tickets.reduce((sum, item) => sum + item.amount, 0);
  const feesTotal = invoice.fees.reduce((sum, fee) => sum + fee.amount, 0);
  const tax = (subtotal + feesTotal) * invoice.taxRate;
  const total = subtotal + feesTotal + tax;

  const handleDownload = async () => {
    if (!invoice?.id && !invoiceId) return;
    setLoading(true);

    // const MyDoc = (
    //   <Document>
    //     <PDFPage size="A4" style={styles.page}>
    //       <Text style={styles.title}>Invoice #{invoice.id}</Text>
    //       <View style={styles.section}>
    //         <Text>Date: {invoice.date}</Text>
    //         <Text>Customer: {invoice.customer}</Text>
    //       </View>
    //       <View style={styles.section}>
    //         {invoice.items?.map((item, idx) => (
    //           <View key={idx} style={styles.tableRow}>
    //             <Text>{item.name}</Text>
    //             <Text>${item.price}</Text>
    //           </View>
    //         ))}
    //       </View>
    //       <View style={styles.section}>
    //         <Text>Total: ${invoice.total}</Text>
    //       </View>
    //     </PDFPage>
    //   </Document>
    // );

    const MyDoc = (
      <Document>
        <PDFPage size="A4" style={styles.page}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.invoiceTitle}>TICKET INVOICE</Text>
            <Text style={styles.invoiceNumber}>#{invoice.id}</Text>
            {invoice.status === "paid" && (
              <View style={styles.statusBadge}>
                <Text>✓ PAID</Text>
              </View>
            )}
          </View>

          {/* Event Information */}
          <View style={styles.eventSection}>
            <Text style={styles.eventTitle}>{invoice.event.name}</Text>
            <View style={styles.eventDetail}>
              <Text style={styles.eventLabel}>Date:</Text>
              <Text style={styles.eventValue}>{invoice.event.date}</Text>
            </View>
            <View style={styles.eventDetail}>
              <Text style={styles.eventLabel}>Time:</Text>
              <Text style={styles.eventValue}>{invoice.event.time}</Text>
            </View>
            <View style={styles.eventDetail}>
              <Text style={styles.eventLabel}>Venue:</Text>
              <Text style={styles.eventValue}>{invoice.event.venue}</Text>
            </View>
            <View style={styles.eventDetail}>
              <Text style={styles.eventLabel}>Location:</Text>
              <Text style={styles.eventValue}>{invoice.event.address}</Text>
            </View>
          </View>

          {/* Customer & Organizer Info */}
          <View style={styles.infoSection}>
            <View style={styles.infoBlock}>
              <Text style={styles.infoTitle}>Customer Details</Text>
              <Text style={styles.companyName}>{invoice.customer.name}</Text>
              <Text style={styles.emailText}>{invoice.customer.email}</Text>
              <Text style={styles.infoText}>{invoice.customer.phone}</Text>
            </View>

            <View style={styles.infoBlock}>
              <Text style={styles.infoTitle}>Organizer</Text>
              <Text style={styles.companyName}>{invoice.organizer.name}</Text>
              <Text style={styles.emailText}>{invoice.organizer.email}</Text>
              <Text style={styles.infoText}>{invoice.organizer.phone}</Text>
            </View>
          </View>

          {/* Invoice Details */}
          <View style={styles.detailsBox}>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Invoice Date</Text>
              <Text style={styles.detailValue}>{invoice.date}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Invoice Number</Text>
              <Text style={styles.detailValue}>{invoice.id}</Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Payment Status</Text>
              <Text style={[styles.detailValue, { color: "#5ac0be" }]}>
                PAID
              </Text>
            </View>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Total Amount</Text>
              <Text style={[styles.detailValue, { color: "#5ac0be" }]}>
                ${total.toFixed(2)}
              </Text>
            </View>
          </View>

          {/* Tickets Table */}
          <View style={styles.table}>
            <View style={styles.tableHeader}>
              <Text style={[styles.tableHeaderText, styles.colDescription]}>
                Ticket Type
              </Text>
              <Text style={[styles.tableHeaderText, styles.colQty]}>Qty</Text>
              <Text style={[styles.tableHeaderText, styles.colAmount]}>
                Amount
              </Text>
            </View>

            {invoice.tickets.map((ticket, idx) => (
              <View key={idx} style={styles.tableRow}>
                <Text style={[styles.tableText, styles.colDescription]}>
                  {ticket.description}
                </Text>
                <Text style={[styles.tableTextGray, styles.colQty]}>
                  {ticket.quantity}
                </Text>
                <Text style={[styles.tableText, styles.colAmount]}>
                  ${ticket.amount.toFixed(2)}
                </Text>
              </View>
            ))}

            {invoice.fees.map((fee, idx) => (
              <View key={`fee-${idx}`} style={styles.tableRow}>
                <Text style={[styles.tableTextGray, styles.colDescription]}>
                  {fee.description}
                </Text>
                <Text style={[styles.tableTextGray, styles.colQty]}>-</Text>
                <Text style={[styles.tableTextGray, styles.colAmount]}>
                  ${fee.amount.toFixed(2)}
                </Text>
              </View>
            ))}
          </View>

          {/* Totals */}
          <View style={styles.totalsSection}>
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Subtotal</Text>
              <Text style={styles.totalValue}>${subtotal.toFixed(2)}</Text>
            </View>
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Fees</Text>
              <Text style={styles.totalValue}>${feesTotal.toFixed(2)}</Text>
            </View>
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>
                Tax ({(invoice.taxRate * 100).toFixed(0)}%)
              </Text>
              <Text style={styles.totalValue}>${tax.toFixed(2)}</Text>
            </View>
            <View style={styles.grandTotalRow}>
              <Text style={styles.grandTotalLabel}>Total Paid</Text>
              <Text style={styles.grandTotalValue}>${total.toFixed(2)}</Text>
            </View>
          </View>

          {/* Notes */}
          <View style={styles.notesBox}>
            <Text style={styles.notesTitle}>Important Information</Text>
            <Text style={styles.notesText}>{invoice.notes}</Text>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Thank you for your purchase! For support, contact{" "}
              {invoice.organizer.email}
            </Text>
          </View>
        </PDFPage>
      </Document>
    );

    const blob = await pdf(MyDoc).toBlob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `invoice_${invoice.id}.pdf`;
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
