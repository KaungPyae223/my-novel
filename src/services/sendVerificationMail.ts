import { api } from "./api";

const sendVerificationMail = () => {
    return api.post("/send-verification-mail");
  };

export default sendVerificationMail;

  