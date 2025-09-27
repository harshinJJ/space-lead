import SERVICE from "@/data/service";
import axios from "@/utils/axios";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const RegistrationServices = {
  createFormData: async (form) => {
    try {
      return await axios.post(SERVICE.REGISTER.SUBMIT, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (e) {
      return e;
    }
  },
  abandoned: async (form) => {
    try {
      return await axios.post(SERVICE.REGISTER.SUBMIT, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (e) {
      return e;
    }
  },
  getRegisterPassInfo: async () => {
    try {
      return await axios.get(SERVICE.REGISTER.PASS);
    } catch (e) {
      return e;
    }
  },
  submitContactForm: async (form) => {
    try {
      return await axios.post(SERVICE.CONTACT.SUBMIT, form,{
        headers:{
          "Content-Type":"multipart/form-data"
        }
      });
    } catch (e) {
      return e;
    }
  },
  fetchRegisterPassInfo: async () => {
    try {
      console.log("Fetching fresh data from API..."); // debugging
      const res = await fetch(`${baseURL}${SERVICE.REGISTER.PASS}`, {
        next: { revalidate: 300 }, // cache for 5 minutes
      });

      if (!res.ok) throw new Error("Failed to fetch register pass info");

      return await res.json();
    } catch (e) {
      return e;
    }
  },
};

export default RegistrationServices;
