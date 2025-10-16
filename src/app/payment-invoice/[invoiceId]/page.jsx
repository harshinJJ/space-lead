import PublicServices from "@/services/publicServices";
import React from "react";
import DownloadButton, { Preview } from "../components/DownloadButton";
import EVENT_INFO from "@/data/eventInfo";
import { LogoBg, LogoIcon } from "@/data/icons";
import { format } from "date-fns";
import { PrimaryLink } from "@/components/buttons/PrimaryButton";
import SomethingWentWrong from "@/components/common/SomethingWentWrong";

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

const toRoman = (num) => {
  const romanMap = [
    { value: 1000, numeral: "m" },
    { value: 900, numeral: "cm" },
    { value: 500, numeral: "d" },
    { value: 400, numeral: "cd" },
    { value: 100, numeral: "c" },
    { value: 90, numeral: "xc" },
    { value: 50, numeral: "l" },
    { value: 40, numeral: "xl" },
    { value: 10, numeral: "x" },
    { value: 9, numeral: "ix" },
    { value: 5, numeral: "v" },
    { value: 4, numeral: "iv" },
    { value: 1, numeral: "i" },
  ];

  let result = "";
  for (let { value, numeral } of romanMap) {
    while (num >= value) {
      result += numeral;
      num -= value;
    }
  }
  return result;
};

const Page = async ({ params }) => {
  const { invoiceId } = await params;
  const invoiceRes = await PublicServices.gerInvoice(invoiceId).then(
    (res) => res?.data || {}
  );


  if (!invoiceRes?.invoice_id) {
    return (
<SomethingWentWrong url="/"/>
    );
  }


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
        (invoiceRes?.payment_receive_timestamp &&
          format(
            new Date(invoiceRes.payment_receive_timestamp),
            "dd/MM/yyyy"
          )) ||
        "--/--/----",
      ticket_id: invoiceRes?.billing_details?.ticket_id || "--",
      transaction_id: invoiceRes?.transaction_id || "#######",
    },
    bill_to: {
      name: invoiceRes?.name || "--",
      phone: invoiceRes?.phone || "--",
      email: invoiceRes?.email || "--",
    },
    items: [
      ...invoiceRes?.purchase_history?.map((item, i) => ({
        id: i + 1,
        description:
          item?.ticket_details?.display_ticket_name ||
          item?.ticket_details?.ticket_name,
        // qty: 1,
        isHeading: true,
        // price: item?.ticket_amount,
      })),
      ...invoiceRes?.selected_sessions_type?.map((item, i) => ({
        id: `(${toRoman(i + 1)})`,
        description: item?.display_title || item?.session_title,
        qty: 1,
        price: item?.session_price,
      })),
    ],
    totals: {
      subtotal: invoiceRes?.purchase_history[0]?.sub_total || 0,
      vat_percent: invoiceRes?.purchase_history[0]?.tax_percentage || 0, //not available
      vat_amount: invoiceRes?.purchase_history[0]?.tax_amount || 0,
      total: invoiceRes?.purchase_history[0]?.ticket_amount,
      paid: invoiceRes?.purchase_history[0]?.ticket_amount,
      currency: invoiceRes?.currency,
    },
    qr_code: invoiceRes?.zatca_qr_base64 || invoiceRes?.zatca_qr_image,
  };


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
                      <span className="font-normal arabic">رقم الفاتورة:</span>
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
                    {/* <span className="lg:hidden">
                        {invoiceData?.invoice?.transaction_id}
                      </span> */}
                  </div>
                  <div className="flex justify-between lg:justify-end">
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
                        <span className="block font-light">السعر الإجمالي</span>
                        <span>Total Price</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoiceData?.items?.map((item, i) => (
                      <tr
                        key={i}
                        className={` border-b border-gray-300 py-2 [&>td]:py-2 [&>td]:px-2 ${
                          item.isHeading ? "bg-[#F0F0F0] font-semibold text-lg" : ""
                        }`}
                      >
                        <td className=" text-center">{item?.id}</td>
                        <td><div className={`${item.isHeading ? "" : "ps-4"}`}>{item.description}</div></td>
                        <td className=" text-center">{item.qty}</td>
                        <td className=" text-start">
                          {(item?.price || item?.price == "0") && (
                            <>
                              {item?.price?.toFixed(2) || "0.00"}{" "}
                              {invoiceData?.totals?.currency}
                            </>
                          )}
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
                      <span className="font-bold font-droid-bold">Paid /</span>
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
