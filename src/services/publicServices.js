import SERVICE from "@/data/service";
import axios from "@/utils/axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function customFetch(path, options = {}) {
  const { revalidate = 60, timeout = 60000, ...rest } = options; // default ISR 60s
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    const res = await fetch(`${BASE_URL}${path}`, {
      // next: { revalidate },  //activate for caching
      cache: "no-store", //remove for static generation
      signal: controller.signal,
      ...rest,
    });
    if (!res.ok) {
      throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
    }

    return await res.json();
  } catch (e) {
    if (e.name === "AbortError") {
      console.log(`⏱️ Request timed out at ${path}`);
    } else {
      console.log(`❌ customFetch error at ${path}:`, e);
    }
    return { data: [] }; // safe fallback so UI doesn’t break
  } finally {
    clearTimeout(id);
  }
}

const PublicServices = {
  gerInvoice: async (id) => {
    try {
      return await customFetch(`${SERVICE.INVOICE}/${id}`);
    } catch (e) {
      return e;
    }
  },
  getRegisterPassInfo: async () => {
    try {
      return await customFetch(SERVICE.REGISTER.PASS);
    } catch (e) {
      return e;
    }
  },
  getAgenda: async () => {
    try {
      return await customFetch(SERVICE.CONTENT.AGENDA);
    } catch (e) {
      return e;
    }
  },
  getSpeakers: async () => {
    try {
      return await customFetch(`${SERVICE.CONTENT.SPEAKERS}`);
    } catch (e) {
      return e;
    }
  },
  getSessionSpeakers: async () => {
    try {
      // return await customFetch(SERVICE.CONTENT.SESSION_SPEAKERS);
      return await customFetch(`${SERVICE.CONTENT.SPEAKERS}?limit=100`);
    } catch (e) {
      return e;
    }
  },
  getSpeaker: async (id) => {
    try {
      return await customFetch(`${SERVICE.CONTENT.SPEAKERS}/${id}`);
    } catch (e) {
      return e;
    }
  },
  getBooths: async () => {
    try {
      return await customFetch(SERVICE.CONTENT.BOOTHS);
    } catch (e) {
      return e;
    }
  },
  getExhibitors: async (params = new URLSearchParams()) => {
    try {
      return await customFetch(`${SERVICE.CONTENT.EXHIBITORS}?${params}`);
    } catch (e) {
      return e;
    }
  },
  getSponsors: async (params = new URLSearchParams()) => {
    try {
      return await customFetch(`${SERVICE.CONTENT.SPONSORS}?${params}`);
    } catch (e) {
      return e;
    }
  },
  getSponsorCategory: async () => {
    try {
      return await customFetch(SERVICE.CONTENT.SPONSOR_CATEGORIES);
    } catch (e) {
      return e;
    }
  },
  getCommitee: async () => {
    try {
      return await customFetch(SERVICE.CONTENT.COMMITEE);
    } catch (e) {
      return e;
    }
  },
  getCommiteeCategory: async () => {
    try {
      return await customFetch(SERVICE.CONTENT.EVENT_COMMITEE);
    } catch (e) {
      return e;
    }
  },
  getMedia: async () => {
    try {
      return await customFetch(SERVICE.CONTENT.MEDIA);
    } catch (e) {
      return e;
    }
  },
  getLiveUpdates: async () => {
    try {
      return await customFetch(SERVICE.CONTENT.LIVE_UPDATES);
    } catch (e) {
      return e;
    }
  },
  getRegisterStatus: async (id) => {
    try {
      return await customFetch(`${SERVICE.REGISTER.STATUS}/${id}`);
    } catch (e) {
      return e;
    }
  },
};

export default PublicServices;
