import { refreshAccessToken } from "@/services/authService";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://bcad-102-189-220-41.ngrok-free.app/", 
  withCredentials: true, // ضروري لإرسال واستقبال الـ cookies تلقائيًا
  timeout: 10000, 
});

axiosInstance.interceptors.request.use(
    async (config) => {
      // لو الرابط خاص بتسجيل الدخول أو الريفرش أو التسجيل، مانحطش توكن
        const noAuthEndpoints = ["/auth/login", "/auth/refresh", "/auth/register"];
        if (noAuthEndpoints.some((url) => config.url?.includes(url))) {
        return config; // أرجع الطلب كما هو بدون تعديل
        }

    const token = localStorage.getItem("accessToken");

      // لو التوكن موجود، نضيفه في الهيدر مع كل طلب
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        }

      return config; // نرجع الطلب بعد ما ضفنا التوكن
    },
    (error) => Promise.reject(error) // لو فيه خطأ في الإرسال، نرجعه
    );

    axiosInstance.interceptors.response.use(
        (response) => response, // لو مفيش مشاكل في الرد، نرجعه كما هو
        async (error) => {
          const originalRequest = error.config; // نحتفظ بنسخة من الطلب اللي فشل
    
         // لو السيرفر رجع 401 (غير مصرح) ودي أول محاولة نعمل ريفرش
            if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true; // نحط علامة إننا حاولنا مرة بالفعل
    
            try {
              // نحاول نجدد التوكن باستخدام الريفرش توكن
            const newToken = await refreshAccessToken();
    
              // لو رجعلنا توكن جديد، نحطه في الهيدر ونكرر الطلب
            if (newToken) {
                axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;
                originalRequest.headers.Authorization = `Bearer ${newToken}`;
                return axiosInstance(originalRequest); // نعيد إرسال الطلب القديم
                }
            } catch (err) {
              // لو فشل تجديد التوكن، نحذف بيانات المستخدم ونوجهه للّوج إن
                localStorage.removeItem("accessToken");
                localStorage.removeItem("loggedInUser");
                console.log(err)
                window.location.href = "/login";
            }
            }
          return Promise.reject(error); // لو مفيش تجديد، نرجع الخطأ كما هو
        }
        );

