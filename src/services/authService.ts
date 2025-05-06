import { axiosInstance } from "@/config/axios.config";

export const refreshAccessToken = async (): Promise<string | null> => {


  try {
    const response = await axiosInstance.post("/auth/refresh");

    const newAccessToken = response.data.accessToken;

    localStorage.setItem("accessToken", newAccessToken);

    return newAccessToken; 
  } catch (error) {
    console.error("Refresh token failed:", error);
    
    return null;
  }
};
