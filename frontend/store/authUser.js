import axios from "axios";
import { create } from "zustand";
import toast from "react-hot-toast";
import ENV_VARS from "../config/envVars";

export const useAuthStore = create((set, get) => ({
  user: "",
  isSigningUp: false,
  signup: async (credentials) => {
    set({ isSigningUp: true });
    const toastId = toast.loading("loading...");
    try {
      const response = await axios.post(
        `${ENV_VARS("BACKEND")}v1/auth/signup`,
        credentials
      );
      set({ user: response.data.user, isSigningUp: false });
      toast.success("user successfully create", {
        id: toastId,
        duation: 3000,
      });
    } catch (error) {
      set({ user: null, isSigningUp: false });
      toast.error(error.response?.data?.message || "somthing went wrong", {
        id: toastId,
        duation: 3000,
      });
    }
    return get().user;
  },
  signin: async () => {},
  logout: async () => {},
  authCheck: async () => {},
}));
