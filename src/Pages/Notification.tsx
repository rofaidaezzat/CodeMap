import Modal from "@/components/NotificationModal";
import NotificationSkeleton from "@/components/NotificationSkeleton";
import { axiosInstance } from "@/config/axios.config";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { BellDot } from "lucide-react";
import { useEffect, useState } from "react";

interface NotificationItem {
  _id: string;
  title: string;
  message: string;
  read: boolean;
}

const fetchNotifications = async (): Promise<NotificationItem[]> => {
  const token = localStorage.getItem("accessToken");
  const res = await axiosInstance.get("/notifications", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data.data.notifications;
};

const markAsRead = async (id: string): Promise<void> => {
  const token = localStorage.getItem("accessToken");
  await axiosInstance.post(`/notifications/${id}/read`, null, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const Notification = () => {
  const queryClient = useQueryClient();
  const [selectedNotification, setSelectedNotification] =
    useState<NotificationItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"all" | "unread">("all");
  const [localNotifications, setLocalNotifications] = useState<
    NotificationItem[] | null
  >(null);

  const {
    data: notifications,
    isLoading,
    isError,
  } = useQuery<NotificationItem[], Error>({
    queryKey: ["notifications"],
    queryFn: fetchNotifications,
  });

  const mutation = useMutation({
    mutationFn: markAsRead,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },
  });

  const handleClick = (notification: NotificationItem) => {
    localStorage.setItem("notificationId", notification._id);
    mutation.mutate(notification._id, {
      onSuccess: () => {
        setLocalNotifications(
          (prev) =>
            prev?.map((n) =>
              n._id === notification._id ? { ...n, read: true } : n
            ) || null
        );
      },
    });
    setSelectedNotification(notification);
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (notifications) {
      setLocalNotifications(notifications);
    }
  }, [notifications]);

  useEffect(() => {
    if (notifications && notifications.length > 0) {
      const allIds = notifications.map((n) => n._id);
      localStorage.setItem("notificationIds", JSON.stringify(allIds));
    }
  }, [notifications]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2F174E] via-[#371F5A] to-[#DE00A5] lg:px-40 py-20 lg:pt-28 space-y-8 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold font-serif text-white drop-shadow mb-6">
        Notificationsss
      </h1>

      <div className="border-b-2 border-[#b480cc] mb-6 w-full max-w-2xl mx-auto">
        <ul className="flex gap-5 ">
          <li>
            <button
              onClick={() => setActiveTab("all")}
              className={`font-bold pb-2 px-2 ${
                activeTab === "all"
                  ? "text-[#DE00A5] border-b-2 border-[#DE00A5]"
                  : "text-white hover:text-[#DE00A5] transition-colors"
              }`}
            >
              All
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("unread")}
              className={`font-bold pb-2 px-2 ${
                activeTab === "unread"
                  ? "text-[#DE00A5] border-b-2 border-[#DE00A5]"
                  : "text-white hover:text-[#DE00A5] transition-colors"
              }`}
            >
              Unread
            </button>
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-6 w-full max-w-2xl mx-auto">
        {isLoading && (
          <>
            {[...Array(6)].map((_, i) => (
              <NotificationSkeleton key={i} />
            ))}
          </>
        )}
        {isError && (
          <p className="text-red-400">
            Something went wrong while fetching notifications.
          </p>
        )}
        {(() => {
          const filtered =
            activeTab === "all"
              ? localNotifications
              : localNotifications?.filter((n) => n.read === false);
          if (!isLoading && filtered?.length === 0) {
            return <p className="text-white">No notifications available.</p>;
          }
          return filtered?.map((notification) => (
            <div
              key={notification._id}
              className={`flex items-center space-x-6 cursor-pointer p-5 rounded-xl shadow-lg border transition-all duration-200 bg-white/80 hover:bg-[#f3eafd] ${
                !notification.read
                  ? "border-[#DE00A5] ring-2 ring-[#DE00A5]/30"
                  : "border-[#b480cc]/40"
              }`}
              onClick={() => handleClick(notification)}
            >
              <div>
                <BellDot
                  size={50}
                  color={notification.read ? "#b480cc" : "#DE00A5"}
                  className={`p-3 rounded-lg ${
                    notification.read
                      ? "bg-[#e9d8fd]"
                      : "bg-[#DE00A5]/20 animate-pulse"
                  }`}
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3
                  className={`font-semibold text-xl ${
                    !notification.read ? "text-[#2F174E]" : "text-[#565656]"
                  }`}
                >
                  {notification.title}
                </h3>
                <p className="text-[#371F5A]">{notification.message}</p>
              </div>
            </div>
          ));
        })()}
      </div>

      {selectedNotification && (
        <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2 className="text-xl font-bold mb-4 text-[#2F174E]">
            {selectedNotification.title}
          </h2>
          <p className="text-[#371F5A]">{selectedNotification.message}</p>
        </Modal>
      )}
    </div>
  );
};

export default Notification;
