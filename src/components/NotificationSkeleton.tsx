
const NotificationSkeleton = () => {
  return (
    <div className="flex items-center space-x-6 p-5 rounded-xl shadow-lg border border-[#b480cc]/40 bg-white/60 animate-pulse">
      <div>
        <div className="w-[50px] h-[50px] rounded-lg bg-[#e5d0fa]" />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="h-5 bg-[#dec7f4] rounded w-3/4" />
        <div className="h-4 bg-[#e9d8fd] rounded w-full" />
      </div>
    </div>
  );
};

export default NotificationSkeleton;