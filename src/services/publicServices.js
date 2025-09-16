import SERVICE from "@/data/service";
import axios from "@/utils/axios";

const PublicServices = {
  getRegisterPassInfo: async () => {
    try {
      return await axios.get(SERVICE.REGISTER.PASS);
    } catch (e) {
      return e;
    }
  },
  getAgenda: async () => {
    try {
      return await axios.get(SERVICE.CONTENT.AGENDA);
    } catch (e) {
      return e;
    }
  },
  getSpeakers: async () => {
    try {
      return await axios.get(SERVICE.CONTENT.SPEAKERS);
    } catch (e) {
      return e;
    }
  },
  getBooths: async () => {
    try {
      return await axios.get(SERVICE.CONTENT.BOOTHS);
    } catch (e) {
      return e;
    }
  },
  getExhibitors: async () => {
    try {
      return await axios.get(SERVICE.CONTENT.EXHIBITORS);
    } catch (e) {
      return e;
    }
  },
  getSponsors: async () => {
    try {
      return await axios.get(SERVICE.CONTENT.SPONSORS);
    } catch (e) {
      return e;
    }
  },
  getSponsorCategory: async () => {
    try {
      return await axios.get(SERVICE.CONTENT.SPONSOR_CATEGORIES);
    } catch (e) {
      return e;
    }
  },
};

export default PublicServices;
