import PublicServices from "@/services/publicServices";
import React from "react";
import DownloadButton, { Preview } from "../components/DownloadButton";
import EVENT_INFO from "@/data/eventInfo";
import { LogoBg, LogoIcon } from "@/data/icons";
import { format } from "date-fns";
import { PrimaryLink } from "@/components/buttons/PrimaryButton";

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

const TicketIcon = ({ size = 20, className = "" }) => (
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
  const invoiceRes = await PublicServices.gerInvoice(invoiceId).then(
    (res) => res?.data || {}
  );

  // const invoiceRes = {
  //   uid: "dee8421b-c8d4-4707-b3d8-085fb0fa9b30",
  //   invoice_id: "INV-20250911-00018",
  //   payment_mode: "free",
  //   payment_id: null,
  //   transaction_id: null,
  //   paid_status: true,
  //   refund_status: false,
  //   payment_receive_timestamp: "2025-09-11T09:51:15.044941",
  //   refund_receive_timestamp: null,
  //   name: "Sharon Sebastian",
  //   email: "sharon@veuz.in",
  //   phone: "8589914973",
  //   notes: null,
  //   booking_type: 0,
  //   source: "microsite",
  //   ticket_state: 0,
  //   ticket_amount: 0.0,
  //   tax_amount: 0.0,
  //   sub_total: 0.0,
  //   original_amount: 2625.0,
  //   discount_amount: 2625.0,
  //   total_amount: 0.0,
  //   currency: "AED",
  //   global_ticket_amount: 0.0,
  //   global_tax_amount: 0.0,
  //   global_sub_total: 0.0,
  //   global_original_amount: 2625.0,
  //   global_discount_amount: 2625.0,
  //   global_currency: "AED",
  //   billing_details: {
  //     full_name: null,
  //     job_title: null,
  //     company_country: null,
  //     company_name: null,
  //     vat_number: null,
  //     po_box: null,
  //     address: null,
  //     email: "sharon@veuz.in",
  //     ticket_id: "12499",
  //   },
  //   promocode: {
  //     id: 55,
  //     code: "RSEEARLYD",
  //     discountType: "0",
  //     discountValue: 100,
  //     active_status: true,
  //   },
  //   purchase_history: [
  //     {
  //       id: 79,
  //       quantity: 1,
  //       created_at: "2025-09-11T09:51:15.061214",
  //       updated_at: "2025-09-11T09:51:15.061233",
  //       ticket_amount: 0.0,
  //       sub_total: 0.0,
  //       tax_amount: 0.0,
  //       original_amount: 2625.0,
  //       discount_amount: 2625.0,
  //       currency: "AED",
  //       global_ticket_amount: 0.0,
  //       global_sub_total: 0.0,
  //       global_tax_amount: 0.0,
  //       global_original_amount: 2625.0,
  //       global_discount_amount: 2625.0,
  //       global_currency: "AED",
  //       ticket_details: {
  //         id: 31,
  //         ticket_name: "DELEGATE",
  //         ticket_type: "0",
  //         ticket_price: 0.0,
  //         description: "<p><br></p>",
  //         ticket_status: "1",
  //         ar_ticket_name: "",
  //         display_ticket_name: "DELEGATE",
  //       },
  //       old_ticket_details: null,
  //     },
  //   ],
  //   card_brand: null,
  //   cardNumber: null,
  //   cardType: null,
  //   is_primary_user: true,
  //   ticket_state_display: "Unknown",
  //   event_name: "RISE",
  //   event_start_date: "2026-01-13",
  //   event_end_date: "2026-01-15",
  // };
  const invoiceData = {
    company: {
      name: EVENT_INFO.title,
      logo: "/logo.png",
    },
    invoiceId: invoiceRes?.invoice_id,
    invoice: {
      title: "TAX INVOICE / فاتورة ضريبية",
      number: invoiceRes?.invoice_id || "--",
      date:
        (invoiceRes?.transaction_date &&
          format(new Date(invoiceRes.transaction_date), "dd/MM/yyyy")) ||
        "--/--/----",
      ticket_id: invoiceRes?.billing_details?.ticket_id || "--",
      transaction_id: invoiceRes?.transaction_id || "#######",
    },
    bill_to: {
      name: invoiceRes?.name || "--",
      phone: invoiceRes?.phone || "--",
      email: invoiceRes?.email || "--",
    },
    items: invoiceRes?.purchase_history?.map((item, i) => ({
      id: i + 1,
      description:
        item?.ticket_details?.display_ticket_name ||
        item?.ticket_details?.ticket_name,
      qty: 1,
      price: item?.ticket_details?.ticket_price,
    })),
    totals: {
      subtotal: invoiceRes?.sub_total || 0,
      vat_percent: invoiceRes?.tax_percentage || 0, //not available
      vat_amount: invoiceRes?.tax_amount || 0,
      total: invoiceRes?.total_amount,
      paid: invoiceRes?.ticket_amount,
      currency: invoiceRes?.currency,
    },
    qr_code: invoiceRes?.zatca_qr,
  };

  if (!invoiceData?.invoiceId) {
    return (
      <main>
        <section className="relative  text-white py-20 2xl:py-36  bg-indigo bg-cover bg-[center_top] bg-no-repeat">
          <LogoBg className="absolute w-full h-auto left-0 right-0 top-25" />
          <div className="relative flex flex-col items-center justify-center bg-white rounded-xl shadow-lg p-8 py-14.5 w-full max-w-[44rem] mx-auto mt-12">
            {/* Error Icon */}
            <div className="bg-[#E84C4C1F] rounded-full p-3 mb-4">
              <svg
                width="89"
                height="90"
                viewBox="0 0 89 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.15625 45C0.15625 20.5096 20.0096 0.65625 44.5 0.65625C68.9905 0.65625 88.8438 20.5096 88.8438 45C88.8438 69.4905 68.9905 89.3438 44.5 89.3438C20.0096 89.3438 0.15625 69.4905 0.15625 45ZM29.9374 30.4374C31.1456 29.2292 33.1044 29.2292 34.3126 30.4374L44.5 40.6246L54.6875 30.4374C55.8957 29.2292 57.8543 29.2292 59.0625 30.4374C60.2707 31.6456 60.2707 33.6044 59.0625 34.8126L48.875 45L59.0625 55.1875C60.2707 56.3957 60.2707 58.3543 59.0625 59.5625C57.8543 60.7707 55.8953 60.7707 54.6871 59.5625L44.5 49.3754L34.3126 59.5625C33.1044 60.7707 31.1456 60.7707 29.9374 59.5625C28.7292 58.3543 28.7292 56.3953 29.9374 55.1871L40.1246 45L29.9374 34.8126C28.7292 33.6044 28.7292 31.6456 29.9374 30.4374Z"
                  fill="#F82D2D"
                />
              </svg>
            </div>

            {/* Error Text */}
            <h2 className="text-[2rem] text-[#E84C4C] mb-2">
              Something went wrong
            </h2>
            <p className="text-[#22222280] tracking-[-2%] mb-4">
              Please try again or go back
            </p>

            {/* Action Button */}
            <PrimaryLink
              href="/"
              className="uppercase py-2.5 px-10 mt-4 font-semibold bg-[#E84C4C] hover:bg-[#d23c3c]"
            >
              Go back
            </PrimaryLink>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="relative overflow-hidden  text-black py-10  bg-indigo bg-cover bg-[center_top] bg-no-repeat">
        <LogoBg className="absolute w-full h-auto left-0 right-0 top-25" />
          <div className="container-fluid mx-auto max-w-5xl">
            {/* Download Button */}
            <div className="mb-6 flex justify-end">
              <DownloadButton
                invoice={invoiceData}
                invoiceId={invoiceRes?.invoice_id}
              />
            </div>

            {/* <Preview/> */}
            {/* Invoice Container */}
            <div className="bg-white w-full max-w-6xl mx-auto shadow-xl overflow-hidden text-sm xs:text-base md:text-lg">
              {/* Header */}
              <div className="flex justify-between items-center bg-[#023c3b] text-white px-6 py-4">
                <h1 className="md:text-2xl xl:text-3xl text-lg font-bold">
                  {invoiceData?.invoice?.title}
                </h1>
                <div className="w-32 sm:w-40">
                  <img
                    src={invoiceData?.company?.logo}
                    alt="Logo"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* Bill To Section */}
              <h2 className="font-bold mb-2 text-center mt-10 text-base font-droid-bold">
                Bill To / <span className="font-normal">فاتورة إلى</span>
              </h2>
              <div className="px-6 sm:px-10">
                <div className=" py-6 flex flex-col lg:flex-row justify-between">
                  <div className="space-y-2">
                    <p className="">{invoiceData?.bill_to?.name}</p>
                    <p className="">{invoiceData?.bill_to?.phone}</p>
                    <p className="">{invoiceData?.bill_to?.email}</p>
                  </div>

                  {/* Invoice Info */}
                  <div className="mt-6 lg:mt-0 w-full lg:w-1/2 space-y-2">
                    <div className="flex justify-between lg:justify-end">
                      <div>
                        <span className="font-bold font-droid-bold">
                          Invoice# /
                        </span>
                        <span className="font-normal arabic">
                          رقم الفاتورة:
                        </span>
                      </div>
                      <span>{invoiceData?.invoice?.number}</span>
                    </div>
                    <div className="flex justify-between lg:justify-end">
                      <div>
                        <span className="font-bold font-droid-bold">
                          Invoice Date /
                        </span>
                        <span className="font-normal arabic">
                          تاريخ الفاتورة:{" "}
                        </span>
                      </div>
                      <span>{invoiceData?.invoice?.date}</span>
                    </div>
                    <div className="flex justify-between lg:justify-end">
                      <div>
                        <span className="font-bold font-droid-bold">
                          Ticket ID /
                        </span>
                        <span className="font-normal arabic">رقم التذكرة:</span>
                      </div>
                      <span>{invoiceData?.invoice?.ticket_id}</span>
                    </div>
                    <div className="flex justify-between lg:justify-end">
                      <div>
                        <span className="font-bold font-droid-bold">
                          Transaction ID /
                        </span>
                        <span className="font-normal arabic">مرجع السداد:</span>
                      </div>
                      <span className="lg:hidden">
                        {invoiceData?.invoice?.transaction_id}
                      </span>
                    </div>
                    <div className="hidden lg:flex justify-between lg:justify-end">
                      <span>{invoiceData?.invoice?.transaction_id}</span>
                    </div>
                  </div>
                </div>

                {/* Table */}
                <div className=" overflow-auto">
                  <table className="px-6 sm:px-10 py-4 w-full">
                    <thead className=" bg-[#023c3b] text-white py-2 font-bold">
                      <tr className=" [&>th]:py-5 [&>th]:px-2">
                        <th className=" text-center">
                          <span className="block font-light">رﻗﻢ</span>
                          <span>Sr</span>
                          <span>#</span>
                        </th>
                        <th className="!text-start">
                          <span className="block font-light">الوصف</span>
                          <span>Description</span>
                        </th>
                        <th className=" text-center">
                          <span className="block font-light">الكمية</span>
                          <span>Qty</span>
                        </th>
                        <th className=" !text-start text-nowrap">
                          <span className="block font-light">
                            السعر الإجمالي
                          </span>
                          <span>Total Price</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {invoiceData?.items?.map((item) => (
                        <tr
                          key={item.id}
                          className=" border-b border-gray-300 py-2 [&>td]:py-2 [&>td]:px-2"
                        >
                          <td className=" text-center">{item.id}</td>
                          <td className="">{item.description}</td>
                          <td className=" text-center">{item.qty}</td>
                          <td className=" text-start">
                            {item.price.toFixed(2)}{" "}
                            {invoiceData?.totals?.currency}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Bottom Section: QR + Totals */}
                <div className="md:ps-10 md:py-6 py-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
                  {/* QR Code */}
                  {invoiceData?.qr_code && (
                    <div className="aspect-square lg:max-w-30 md:max-w-20 max-w-2/5 bg-[#e3e3e3] p-1 flex">
                      <img
                        src={invoiceData.qr_code}
                        alt="QR Code"
                        className="w-full h-auto aspect-square object-contain"
                      />
                    </div>
                  )}

                  {/* Totals */}
                  <div className="flex-1 flex flex-col gap-2 w-full lg:text-lg md:text-base">
                    <div className="flex justify-between md:justify-end">
                      <div className="">
                        <span className="font-bold font-droid-bold">
                          Subtotal /
                        </span>
                        <span className="font-normal arabic">
                          الإجمالي قبل الضريبة:
                        </span>
                      </div>
                      <span className="font-bold md:w-1/5 w-2/5 text-end">
                        {invoiceData?.totals?.subtotal?.toFixed(2)}{" "}
                        {invoiceData?.totals?.currency}
                      </span>
                    </div>
                    <div className="flex justify-between md:justify-end">
                      <div className="">
                        <span className="font-bold font-droid-bold">
                          15% VAT Amount /
                        </span>
                        <span className="font-normal arabic">
                          ضريبة القيمة المضافة:
                        </span>
                      </div>
                      <span className="font-bold md:w-1/5 w-2/5 text-end">
                        {invoiceData?.totals?.vat_amount?.toFixed(2)}{" "}
                        {invoiceData?.totals?.currency}
                      </span>
                    </div>
                    <div className="flex justify-between md:justify-end">
                      <div className="">
                        <span className="font-bold font-droid-bold">
                          Total Payable /
                        </span>
                        <span className="font-normal arabic">
                          الإجمالي المستحق:
                        </span>
                      </div>
                      <span className="font-bold md:w-1/5 w-2/5 text-end">
                        {invoiceData?.totals?.total?.toFixed(2)}{" "}
                        {invoiceData?.totals?.currency}
                      </span>
                    </div>
                    <div className="flex justify-between md:justify-end">
                      <div className="">
                        <span className="font-bold font-droid-bold">
                          Paid /
                        </span>
                        <span className="font-normal arabic">المدفوع:</span>
                      </div>
                      <span className="font-bold md:w-1/5 w-2/5 text-end">
                        {invoiceData?.totals?.paid?.toFixed(2)}{" "}
                        {invoiceData?.totals?.currency}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
    </main>
  );
};

export default Page;
