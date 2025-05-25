import { axiosInstance } from "../config/axios.config";


// Add global type for window._isLoggingOut to avoid 'any' usage
// This prevents multiple redirects on 401 errors

declare global {
  interface Window {
    _isLoggingOut?: boolean;
  }
}


export const refreshAccessToken = async (): Promise<string | null> => {
    try {
        const response = await axiosInstance.get("/auth/refresh");
        const newAccessToken = response.data.accessToken;
        localStorage.setItem("accessToken", newAccessToken);
        return newAccessToken;
    } catch (error: unknown) {
        console.error("Refresh token failed:", error);
        // Prevent multiple redirects using window._isLoggingOut
        if (
            typeof error === 'object' && error !== null &&
            'response' in error &&
            (error as { response?: { status?: number } }).response &&
            (error as { response: { status?: number } }).response.status === 401
        ) {
            if (!window._isLoggingOut) {
                window._isLoggingOut = true;
                window.location.href = "/authpage";
                return null; // Halt further processing
            }
        }
        return null;
    }
};
