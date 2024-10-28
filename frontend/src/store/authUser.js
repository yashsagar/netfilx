import axios from "axios";
import { create } from "zustand";
import toast from "react-hot-toast";
import ENV_VARS from "../config/envVars";
import { devtools } from "zustand/middleware";

export const useAuthStore = create(
  devtools(
    (set) => ({
      user: "",
      projectCSS: "",
      isSigningUp: false,
      isLoggingOut: false,
      isLoggingIn: false,
      isCheckingAuth: false,
      signup: async (credentials) => {
        set({ isSigningUp: true });
        const toastId = toast.loading("loading...");
        try {
          const response = await axios.post(
            `${ENV_VARS.BACKEND}/v1/auth/signup`,
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
      },
      login: async (credentials) => {
        set({ isLoggingIn: true });
        const toastId = toast.loading("loading...");
        try {
          const response = await axios.post(
            `${ENV_VARS.BACKEND}/v1/auth/login`,
            credentials,
            { withCredentials: true }
          );

          set({ user: response.data.user, isLoggingIn: false });
          toast.success("login successful", {
            id: toastId,
            duation: 3000,
          });
        } catch (error) {
          set({ user: null, isLoggingIn: false });
          toast.error(error.response?.data?.message || "somthing went wrong", {
            id: toastId,
            duation: 3000,
          });
        }
      },
      logout: async () => {
        set(() => ({ isLoggingOut: true }));
        const toastId = toast.loading("processing logout..");
        try {
          await axios.get(`${ENV_VARS.BACKEND}/v1/auth/logout`);
          set({ user: null, isLoggingOut: true });
          toast.success("logout succsessfully");
        } catch (error) {
          set(() => ({ isLoggingOut: false }));
          console.log(error);
          toast.error("somthing went wrong :", {
            id: toastId,
            duration: 3000,
          });
        }
      },
      authCheck: async () => {
        set({ isCheckingAuth: true });

        try {
          const response = await axios.get(
            `${ENV_VARS.BACKEND}/v1/auth/authCheck`,
            { withCredentials: true }
          );
          set({ isCheckingAuth: false, user: response.data.user });
        } catch (error) {
          set({ isCheckingAuth: false, user: null });
        }
      },
    }),
    { name: "CounterStore" }
  )
);
