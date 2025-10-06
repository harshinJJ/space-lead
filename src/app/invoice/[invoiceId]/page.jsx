import PublicServices from "@/services/publicServices";
import React from "react";
import DownloadButton from "../components/DownloadButton";
import EVENT_INFO from "@/data/eventInfo";


const CheckIcon = ({ size = 20, className = "" }) => (
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
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const TicketIcon = ({ size = 20, className = '' }) => (
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
    <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
    <path d="M13 5v2" />
    <path d="M13 17v2" />
    <path d="M13 11v2" />
  </svg>
);
const Page = async ({ params }) => {
    const { invoiceId } = await params;
  //   const invoice = await PublicServices.gerInvoice(invoiceId).then(
  //     (res) => res?.data || {}
  //   );

  const invoice = {
    id: "INV-2025-001",
    date: "2025-10-06",
    status: "paid",
    event: {
      name: EVENT_INFO.title,
      date: EVENT_INFO.startDate,
      time: EVENT_INFO.eventTimeLabel,
      venue: EVENT_INFO.venueName,
      address: EVENT_INFO.venueLocation,
    },
    organizer: {
      name: EVENT_INFO.organizer,
      email: EVENT_INFO.email,
      phone: EVENT_INFO.phone,
    },
    customer: {
      name: "John Doe",
      email: "john.doe@email.com",
      phone: "+1 (555) 987-6543",
    },
    tickets: [
      {
        description: "General Admission Ticket",
        quantity: 2,
        price: 150,
        amount: 300,
      },
      { description: "VIP Access Pass", quantity: 1, price: 250, amount: 250 },
    ],
    fees: [
      { description: "Processing Fee", amount: 15 },
      { description: "Platform Fee", amount: 10 },
    ],
    notes:
      "Please bring this invoice and a valid ID to the event. Tickets are non-refundable. For event inquiries, contact the organizer.",
    taxRate: 0.08,
  };

  const subtotal = invoice.tickets.reduce((sum, item) => sum + item.amount, 0);
  const feesTotal = invoice.fees.reduce((sum, fee) => sum + fee.amount, 0);
  const tax = (subtotal + feesTotal) * invoice.taxRate;
  const total = subtotal + feesTotal + tax;
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-cyan-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="container-fluid mx-auto max-w-5xl">
        {/* Download Button */}
        <div className="mb-6 flex justify-end">
          <DownloadButton invoice={invoice} invoiceId={invoiceId} />
        </div>

        {/* Invoice Container */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header Section */}
          <div
            className="px-6 sm:px-10 py-8 text-white"
            style={{
              background: "linear-gradient(135deg, #7f529f 0%, #131f54 100%)",
            }}
          >
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                  TICKET INVOICE
                </h1>
                <p className="text-purple-200 text-sm">#{invoice.id}</p>
              </div>
              <div
                className="px-4 py-2 rounded-full text-sm font-semibold text-white flex items-center gap-2"
                style={{ backgroundColor: "#5ac0be" }}
              >
                <CheckIcon size={16} />
                PAID
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="px-6 sm:px-10 py-8">
            {/* Event Information */}
            <div
              className="mb-10 p-6 rounded-xl border-2"
              style={{ backgroundColor: "#f0fffe", borderColor: "#5ac0be" }}
            >
              <div className="flex items-start gap-3 mb-4">
                <TicketIcon
                  size={24}
                  className="text-cyan-600 flex-shrink-0 mt-1"
                />
                <div className="flex-1">
                  <h2
                    className="text-xl font-bold mb-3"
                    style={{ color: "#131f54" }}
                  >
                    {invoice.event.name}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex gap-2">
                      <span
                        className="font-semibold text-sm"
                        style={{ color: "#7f529f" }}
                      >
                        Date:
                      </span>
                      <span className="text-sm" style={{ color: "#131f54" }}>
                        {invoice.event.date}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <span
                        className="font-semibold text-sm"
                        style={{ color: "#7f529f" }}
                      >
                        Time:
                      </span>
                      <span className="text-sm" style={{ color: "#131f54" }}>
                        {invoice.event.time}
                      </span>
                    </div>
                    <div className="flex gap-2 sm:col-span-2">
                      <span
                        className="font-semibold text-sm"
                        style={{ color: "#7f529f" }}
                      >
                        Venue:
                      </span>
                      <span className="text-sm" style={{ color: "#131f54" }}>
                        {invoice.event.venue}
                      </span>
                    </div>
                    <div className="flex gap-2 sm:col-span-2">
                      <span
                        className="font-semibold text-sm"
                        style={{ color: "#7f529f" }}
                      >
                        Location:
                      </span>
                      <span className="text-sm" style={{ color: "#131f54" }}>
                        {invoice.event.address}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer & Organizer Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div>
                <h3
                  className="text-xs font-semibold uppercase tracking-wide mb-3"
                  style={{ color: "#7f529f" }}
                >
                  Customer Details
                </h3>
                <div className="space-y-1">
                  <p className="font-bold text-lg" style={{ color: "#131f54" }}>
                    {invoice.customer.name}
                  </p>
                  <p className="text-sm mt-2" style={{ color: "#5ac0be" }}>
                    {invoice.customer.email}
                  </p>
                  <p className="text-slate-600 text-sm">
                    {invoice.customer.phone}
                  </p>
                </div>
              </div>

              <div>
                <h3
                  className="text-xs font-semibold uppercase tracking-wide mb-3"
                  style={{ color: "#7f529f" }}
                >
                  Organizer
                </h3>
                <div className="space-y-1">
                  <p className="font-bold text-lg uppercase" style={{ color: "#131f54" }}>
                    {invoice.organizer.name}
                  </p>
                  <p className="text-sm mt-2" style={{ color: "#5ac0be" }}>
                    {invoice.organizer.email}
                  </p>
                  <p className="text-slate-600 text-sm">
                    {invoice.organizer.phone}
                  </p>
                </div>
              </div>
            </div>

            {/* Invoice Details */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 p-6 bg-gradient-to-r from-purple-50 to-cyan-50 rounded-xl border border-purple-100">
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-wide mb-1"
                  style={{ color: "#7f529f" }}
                >
                  Invoice Date
                </p>
                <p className="font-medium" style={{ color: "#131f54" }}>
                  {invoice.date}
                </p>
              </div>
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-wide mb-1"
                  style={{ color: "#7f529f" }}
                >
                  Invoice Number
                </p>
                <p className="font-medium" style={{ color: "#131f54" }}>
                  {invoice.id}
                </p>
              </div>
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-wide mb-1"
                  style={{ color: "#7f529f" }}
                >
                  Payment Status
                </p>
                <p className="font-medium" style={{ color: "#5ac0be" }}>
                  PAID
                </p>
              </div>
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-wide mb-1"
                  style={{ color: "#7f529f" }}
                >
                  Total Amount
                </p>
                <p className="font-bold" style={{ color: "#5ac0be" }}>
                  SAR {total.toFixed(2)}
                </p>
              </div>
            </div>

            {/* Tickets Table */}
            <div className="mb-8 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2" style={{ borderColor: "#7f529f" }}>
                    <th
                      className="text-left py-4 px-2 text-xs font-semibold uppercase tracking-wide"
                      style={{ color: "#7f529f" }}
                    >
                      Ticket Type
                    </th>
                    <th
                      className="text-center py-4 px-2 text-xs font-semibold uppercase tracking-wide"
                      style={{ color: "#7f529f" }}
                    >
                      Qty
                    </th>
                    <th
                      className="text-right py-4 px-2 text-xs font-semibold uppercase tracking-wide"
                      style={{ color: "#7f529f" }}
                    >
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {invoice.tickets.map((ticket, index) => (
                    <tr
                      key={index}
                      className="border-b border-slate-100 hover:bg-purple-50 transition-colors"
                    >
                      <td className="py-4 px-2" style={{ color: "#131f54" }}>
                        {ticket.description}
                      </td>
                      <td className="py-4 px-2 text-center text-slate-600">
                        {ticket.quantity}
                      </td>
                      <td
                        className="py-4 px-2 text-right font-medium"
                        style={{ color: "#131f54" }}
                      >
                        SAR {ticket.amount.toFixed(2)}
                      </td>
                    </tr>
                  ))}
                  {invoice.fees.map((fee, index) => (
                    <tr
                      key={`fee-${index}`}
                      className="border-b border-slate-100"
                    >
                      <td className="py-4 px-2 text-slate-600 text-sm">
                        {fee.description}
                      </td>
                      <td className="py-4 px-2 text-center text-slate-400">
                        -
                      </td>
                      <td className="py-4 px-2 text-right text-slate-600">
                        SAR {fee.amount.toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Totals Section */}
            <div className="flex justify-end mb-8">
              <div className="w-full sm:w-80 space-y-3">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span className="font-medium">SAR {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Fees</span>
                  <span className="font-medium">SAR {feesTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Tax ({(invoice.taxRate * 100).toFixed(0)}%)</span>
                  <span className="font-medium">SAR {tax.toFixed(2)}</span>
                </div>
                <div
                  className="border-t-2 pt-3 flex justify-between text-lg font-bold"
                  style={{ borderColor: "#7f529f" }}
                >
                  <span style={{ color: "#131f54" }}>Total Paid</span>
                  <span style={{ color: "#5ac0be" }}>SAR {total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Notes Section */}
            <div className="p-6 bg-gradient-to-r from-purple-50 to-cyan-50 rounded-xl border border-purple-100">
              <h3
                className="text-sm font-semibold mb-2"
                style={{ color: "#131f54" }}
              >
                Important Information
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {invoice.notes}
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-slate-50 px-6 sm:px-10 py-6 border-t border-slate-200">
            <p className="text-center text-slate-500 text-sm">
              Thank you for your purchase! For support, contact{" "}
              {invoice.organizer.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
