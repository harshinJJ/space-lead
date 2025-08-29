const { default: SERVICE } = require("@/data/service");
const { default: axios } = require("@/utils/axios");

const publicServices = {
  submitContactForm: async (form) => {
    try {
      return await axios.post(SERVICE.CONTACT.SUBMIT, form);
    } catch (e) {
      return e;
    }
  },
  submitRegisterForm: async (form) => {
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

export default publicServices;
