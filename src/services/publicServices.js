import SERVICE from "@/data/service";
import axios from "@/utils/axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function customFetch(path, options = {}) {
  const { revalidate = 60, ...rest } = options; // default ISR 60s

  try {
    const res = await fetch(`${BASE_URL}${path}`, {
      // next: { revalidate },  //activate for caching
      ...rest,
    });
    if (!res.ok) {
      throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
    }

    return await res.json();
  } catch (e) {
    console.error(`❌ customFetch error at ${path}:`, e);
    return { data: [] }; // safe fallback so UI doesn’t break
  }
}

const PublicServices = {
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
      return await customFetch(SERVICE.CONTENT.SPEAKERS);
    } catch (e) {
      return e;
    }
  },
  getSessionSpeakers: async () => {
    try {
      return await customFetch(SERVICE.CONTENT.SESSION_SPEAKERS);
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
  getExhibitors: async () => {
    try {
      return await customFetch(SERVICE.CONTENT.EXHIBITORS);
    } catch (e) {
      return e;
    }
  },
  getSponsors: async () => {
    try {
      return await customFetch(SERVICE.CONTENT.SPONSORS);
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
};

export default PublicServices;
