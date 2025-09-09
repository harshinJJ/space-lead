import SERVICE from "@/data/service";
import axios from "@/utils/axios";

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
};

export default RegistrationServices;
