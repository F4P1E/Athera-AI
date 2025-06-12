export const validateEmail = async (email?: string | null) => {
  if (!email) throw "Email is required";

  const regex = /\S+@\S+\.\S+/;
  if (!regex.test(email)) throw "Email is invalid";

  return email.toLowerCase();
};

export const validateOtp = async (otp?: string | null) => {
  if (!otp) throw "OTP is required";

  const regex = /^\d{6}$/;
  if (!regex.test(otp)) throw "OTP is invalid";

  return otp;
};
