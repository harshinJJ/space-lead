import { addDays, parseISO, isValid } from "date-fns";
// import CryptoJS from "crypto-js";
import parsePhoneNumberFromString from "libphonenumber-js";
// import currencyList from "@assets/json/currency.json";
export function formatDate(dateString, mType = "short") {
  if (!dateString) return "N/A";
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "N/A";
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: mType,
    day: "numeric",
  });
}

const handleErrors = (response) => {
  const errors = response.response?.data?.errors;

  if (errors) {
    Object.keys(errors).forEach((field) => {
      formik.setFieldError(field, errors[field][0]);
    });
  }
};

export const generateSlug = (length = 10) => {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  return Array.from(
    { length },
    () => chars[Math.floor(Math.random() * chars.length)]
  ).join("");
};

export const convertUtcToNativeTime = (
  utcDateTime,
  timezone,
  timeFormat = "12"
) => {
  if (!utcDateTime || isNaN(new Date(utcDateTime).getTime())) {
    return "00:00:00";
  }

  const utcDate = new Date(utcDateTime);
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: timeFormat === "12",
    timeZone: timezone,
  };

  try {
    const formatter = new Intl.DateTimeFormat("en-US", options);
    return formatter.format(utcDate);
  } catch (error) {
    console.error("Error formatting date:", error);
    return "Invalid Timezone";
  }
};

export function dateFormat(date, format = "YYYY-MM-DD") {
  if (!date) return "N/A";
  const d = new Date(date);
  if (isNaN(d)) throw new Error("Invalid date provided");
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  return format.replace("YYYY", year).replace("MM", month).replace("DD", day);
}
export const formatDuration = (duration) => {
  let timeDisplay;
  if (duration < 60) {
    timeDisplay = `${duration} s`;
  } else if (duration < 3600) {
    const minutes = Math.floor(duration / 60);
    timeDisplay = `${minutes} min`;
  } else {
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    timeDisplay = `${hours}h ${minutes}m`;
  }
  return timeDisplay;
};

export const generateRandomColor = (name, colors = []) => {
  if (!name) return "#6366f1";
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
};

export const getInitials = (firstname, lastname) => {
  if (!firstname) return "??";
  if (lastname) {
    return (firstname.charAt(0) + lastname.charAt(0)).toUpperCase();
  }
  return firstname.length > 1
    ? firstname.slice(0, 2).toUpperCase()
    : firstname.charAt(0).toUpperCase() + firstname.charAt(0).toUpperCase();
};
export const shortenName = (name) => {
  if (!name) return "";
  const words = name.trim().split(/\s+/);
  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase();
  }
  return (words[0][0] + words[1][0]).toUpperCase();
};
export const generateDates = (startDate, endDate) => {
  const dates = [];
  let currentDate =
    typeof startDate === "string" ? parseISO(startDate) : startDate;
  if (!isValid(currentDate)) {
    return;
  }
  const finalDate = typeof endDate === "string" ? parseISO(endDate) : endDate;
  if (!isValid(finalDate)) {
    return;
  }
  while (currentDate <= finalDate) {
    dates.push(new Date(currentDate));
    currentDate = addDays(currentDate, 1);
  }

  return dates;
};

export const convertSecondsToTime = (totalSeconds) => {
  const hours = Math.floor(totalSeconds / 3600) % 12 || 12;
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const period = totalSeconds >= 43200 ? "PM" : "AM";

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(2, "0")} ${period}`;
};

export function convertPermissions(permissionsArray, isAdmin, isSuperuser) {
  const transformedPermissions = {};

  if (isAdmin || isSuperuser) {
    permissionsArray?.forEach(({ name }) => {
      const key = name
        .replace(/\s+/g, " ")
        .trim()
        .replace(/\s(.)/g, (match) => match.toUpperCase())
        .replace(/\s/g, "")
        .replace(/^(.)/, (match) => match.toLowerCase());

      transformedPermissions[key] = {
        read: true,
        write: true,
        update: true,
        delete: true,
      };
    });
  } else {
    permissionsArray?.forEach(({ name, permissions }) => {
      const key = name
        .replace(/\s+/g, " ")
        .trim()
        .replace(/\s(.)/g, (match) => match.toUpperCase())
        .replace(/\s/g, "")
        .replace(/^(.)/, (match) => match.toLowerCase());
      const permissionKey = name
        .toLowerCase()
        .replace(/\s+/g, "_")
        .replace("producivity", "productivity");

      transformedPermissions[key] = {
        read:
          permissions[`view_${permissionKey}`] === true ||
          permissions[`view_all_${permissionKey}`] === true,
        write: permissions[`write_${permissionKey}`] === true,
        update: permissions[`update_${permissionKey}`] === true,
        delete: permissions[`delete_${permissionKey}`] === true,
      };
    });
  }

  return transformedPermissions;
}

export function formatDateAndTime(inputDate) {
  const date = new Date(inputDate);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;

  return `${month} ${day} ${year} ${hours}:${minutes} ${ampm}`;
}

export function generateTimeSlots(startTime, endTime) {
  const parseTime = (timeStr) => {
    let [time, modifier] = timeStr.split(" ");
    let [hours, minutes] = time.split(":").map(Number);
    if (modifier === "PM" && hours !== 12) hours += 12;
    if (modifier === "AM" && hours === 12) hours = 0;
    return { hours, minutes };
  };

  const formatTime = (hours, minutes) => {
    let period = hours >= 12 ? "PM" : "AM";
    let formattedHours = hours % 12 || 12;
    let formattedMinutes = String(minutes).padStart(2, "0");
    return `${formattedHours}:${formattedMinutes} ${period}`;
  };

  const start = parseTime(startTime);
  const end = parseTime(endTime);

  let slots = [];
  let current = new Date();
  current.setHours(start.hours - 3, start.minutes, 0, 0);
  let endLimit = new Date();
  endLimit.setHours(end.hours + 3, end.minutes, 0, 0);

  if (current.getHours() < 0) {
    current.setHours(0, 0, 0, 0);
  }
  if (endLimit.getHours() >= 24) {
    endLimit.setHours(23, 55, 0, 0);
  }

  while (current < endLimit) {
    if (current.getDate() === new Date().getDate()) {
      // Ensure it does not overlap previous day
      let slotStart = formatTime(current.getHours(), current.getMinutes());
      current.setMinutes(current.getMinutes() + 5);
      let slotEnd = formatTime(current.getHours(), current.getMinutes());

      if (
        current.getHours() < start.hours - 3 ||
        current.getHours() >= end.hours + 3
      ) {
        continue; // Skip slots at the extreme start and end
      }

      slots.push({ start: slotStart, end: slotEnd });
    } else {
      current.setMinutes(current.getMinutes() + 5);
    }
  }

  return slots;
}

export function splitHours(startTime, endTime) {
  function parseTime(timeStr) {
    let [time, modifier] = timeStr.split(" ");
    let [hours, minutes] = time.split(":").map(Number);
    if (modifier === "PM" && hours !== 12) hours += 12;
    if (modifier === "AM" && hours === 12) hours = 0;
    return hours;
  }

  let startHour = parseTime(startTime) - 3;
  let endHour = parseTime(endTime) + 3;

  if (startHour < 0) startHour = 0; // Prevent going to the previous day
  if (endHour > 23) endHour = 23; // Prevent exceeding the current day

  let result = [];
  for (let hour = startHour; hour <= endHour; hour++) {
    let period = hour < 12 ? "AM" : "PM";
    let formattedHour = hour % 12 === 0 ? 12 : hour % 12;
    result.push(`${formattedHour.toString().padStart(2, "0")}${period}`);
  }
  return result;
}

export function getTimeDifference(start, end) {
  const startTime = new Date(start);
  const endTime = new Date(end);

  let diffInSeconds = Math.floor((endTime - startTime) / 1000); // Difference in seconds

  let hours = Math.floor(diffInSeconds / 3600);
  let minutes = Math.floor((diffInSeconds % 3600) / 60);
  let seconds = diffInSeconds % 60;

  // Ensure two-digit format for minutes and seconds
  let formattedTime = `${hours}h:${String(minutes).padStart(2, "0")}m:${String(
    seconds
  ).padStart(2, "0")}s`;

  return formattedTime;
}
export function countFiveMinuteIntervals(startTime, endTime) {
  let start = new Date(startTime);
  let end = new Date(endTime);

  let diffInMs = end - start; // Difference in milliseconds
  let intervalCount = Math.floor(diffInMs / (5 * 60 * 1000)); // Convert to 5-minute intervals

  return intervalCount;
}
export function formatCardTime(input) {
  let match = input.match(/(\d{2})h:(\d{2})m/);
  if (!match) return input; // Return input if format is incorrect

  let hours = parseInt(match[1], 10);
  let minutes = parseInt(match[2], 10);

  return (
    (hours > 0 ? `${hours}h ` : "") + (minutes > 0 ? `${minutes}m` : "").trim()
  );
}

export function formatCurrency(amount) {
  const num = parseFloat(amount);
  if (!isNaN(num)) {
    return new Intl.NumberFormat("en-NG", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(num);
  }
  return "0.00";
}
export function formatCurrencyNoZero(amount) {
  if (!!amount) {
    const formatted = new Intl.NumberFormat("en-NG").format(parseFloat(amount));
    return formatted;
  }
  return 0;
}
// export function encryptAES(data, sKey) {
//   const key = CryptoJS.enc.Utf8.parse(sKey);
//   const iv = CryptoJS.lib.WordArray.random(16);
//   const encrypted = CryptoJS.AES.encrypt(data, key, {
//     iv,
//     mode: CryptoJS.mode.CBC,
//     padding: CryptoJS.pad.Pkcs7,
//   });
//   const combined = iv.concat(encrypted.ciphertext);
//   const base64 = CryptoJS.enc.Base64.stringify(combined);

//   // Convert to Base64URL
//   const base64url = base64.replace(/\+/g, "-").replace(/\//g, "_");
//   // .replace(/=+$/, "");

//   return base64url;
// }

// export function decryptAES(encryptedBase64url, sKey) {
//   // Convert Base64URL → Base64
//   let base64 = encryptedBase64url.replace(/-/g, "+").replace(/_/g, "/");

//   // Pad to multiple of 4
//   while (base64.length % 4 !== 0) {
//     base64 += "=";
//   }

//   // Decode Base64 into a WordArray
//   const combined = CryptoJS.enc.Base64.parse(base64);

//   // Extract IV (first 16 bytes = 4 words)
//   const iv = CryptoJS.lib.WordArray.create(combined.words.slice(0, 4), 16);

//   // Extract ciphertext (bytes after the first 16)
//   const ciphertext = CryptoJS.lib.WordArray.create(
//     combined.words.slice(4),
//     combined.sigBytes - 16
//   );

//   const key = CryptoJS.enc.Utf8.parse(sKey);

//   // Decrypt
//   const decrypted = CryptoJS.AES.decrypt({ ciphertext }, key, {
//     iv,
//     mode: CryptoJS.mode.CBC,
//     padding: CryptoJS.pad.Pkcs7,
//   });

//   return decrypted.toString(CryptoJS.enc.Utf8);
// }
export function splitDialCode(phoneNumber) {
  if (!phoneNumber) return "";

  try {
    const phone = parsePhoneNumberFromString(phoneNumber);
    if (phone) {
      return `${
        phone.countryCallingCode ? `+${phone.countryCallingCode}` : ""
      } ${phone.nationalNumber || ""}`;
    } else {
      return phoneNumber;
    }
  } catch (e) {
    return phoneNumber;
  }
}

export function normalizeGmail(email) {
  email = email.trim().toLowerCase();
  const [localPart, domain] = email.split("@");
  if (domain === "gmail.com" || domain === "googlemail.com") {
    const baseLocal = localPart.split("+")[0];
    return `${baseLocal}@gmail.com`;
  }
  return email;
}
export const getReferrerSource = () => {
  const ref = document.referrer.toLowerCase();
  if (!ref) return "direct";
  // Social media platforms
  if (
    ref.includes("facebook.com") ||
    ref.includes("fb.com") ||
    ref.includes("m.facebook.com")
  )
    return "facebook";
  if (ref.includes("instagram.com")) return "instagram";
  if (ref.includes("whatsapp.com")) return "whatsapp";
  if (ref.includes("linkedin.com")) return "linkedin";
  if (
    ref.includes("t.co") ||
    ref.includes("twitter.com") ||
    ref.includes("x.com")
  )
    return "twitter";
  if (ref.includes("tiktok.com")) return "tiktok";
  if (ref.includes("youtube.com") || ref.includes("youtu.be")) return "youtube";
  if (ref.includes("pinterest.com")) return "pinterest";
  if (ref.includes("snapchat.com")) return "snapchat";
  if (ref.includes("reddit.com")) return "reddit";
  if (ref.includes("discord.com") || ref.includes("discord.gg"))
    return "discord";
  if (ref.includes("telegram.")) return "telegram";
  // Search engines
  if (
    ref.includes("google.") ||
    ref.includes("bing.com") ||
    ref.includes("duckduckgo.com") ||
    ref.includes("yahoo.com") ||
    ref.includes("yandex.") ||
    ref.includes("baidu.com")
  )
    return "search";
  // Email platforms
  if (
    ref.includes("mail.") ||
    ref.includes("outlook.") ||
    ref.includes("gmail.") ||
    ref.includes("yahoo.") ||
    ref.includes("hotmail.")
  )
    return "email";
  // Other platforms
  if (ref.includes("github.com")) return "github";
  if (ref.includes("stackoverflow.com")) return "stackoverflow";
  if (ref.includes("medium.com")) return "medium";
  const referrer = document.referrer;
  const isInternal = referrer.includes(window.location.hostname);
  if (referrer && !isInternal) {
    const refDomain = new URL(referrer).hostname;
    return refDomain;
  }
  return "direct";
};
export const getReferrerMedium = () => {
  const referrer = document.referrer;
  const isInternal = referrer.includes(window.location.hostname);
  if (referrer && !isInternal) {
    return "referral";
  } else {
    return "";
  }
};
export function smartTrim(str = "") {
  return str.replace(/\s+/g, " ").trim();
}
// export const currencySymbol = (code) => {
//   return currencyList[code]?.symbol || "";
// };
export function isValidEmail(email) {
  const forbiddenKeywords = ["test", "demo", "temp", "fake", "example"];
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (typeof email !== "string" || !emailRegex.test(email)) return false;
  const [localPart, domainPart] = email.toLowerCase().split("@");
  const localHasForbidden = forbiddenKeywords.some((keyword) =>
    new RegExp(`\\b${keyword}\\b`, "i").test(localPart)
  );
  const domainHasForbidden = forbiddenKeywords.some((keyword) =>
    new RegExp(`\\b${keyword}\\b`, "i").test(domainPart)
  );
  return !(localHasForbidden || domainHasForbidden);
}

export function percentageToDecimal(percentage, total) {
  const value = (percentage / 100) * total;
  return value.toFixed(2);
}

export function separatePhoneNumber(number) {
  const phoneObj = parsePhoneNumberFromString(number);
  if (phoneObj) {
    const countryCode = `+${phoneObj.countryCallingCode}`;
    const nationalNumber = phoneObj.nationalNumber;
    return { countryCode, nationalNumber };
  }
}

export function formatPhoneNum(countryCode, phoneNumber) {
  if (!phoneNumber) return "";
  const parsed = parsePhoneNumberFromString(phoneNumber);
  if (parsed && parsed.countryCallingCode) {
    return phoneNumber;
  }
  if (!countryCode) {
    return phoneNumber;
  }
  const cleanNumber = phoneNumber.replace(/^(\+|0)+/, "");
  return `${countryCode}${cleanNumber}`;
}

export function getFullfilled(result) {
  return result.status === "fulfilled" ? result.value?.data ?? [] : [];
}

export function formatTimeTo12Hour(timeStr) {
  if (!timeStr) return "";

  // Normalize: ensure we only have HH:MM:SS or HH:MM
  const parts = timeStr.split(":");
  if (parts.length < 2) return timeStr; // invalid format

  const [hoursStr, minutesStr] = parts;
  let hours = parseInt(hoursStr, 10);
  const minutes = parseInt(minutesStr, 10);

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // convert to 12-hour format

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")} ${ampm}`;
}
