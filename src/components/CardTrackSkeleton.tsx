const CardTrackSkeleton = () => {
  return (
    <div className="w-80 rounded-xl border border-gray-300 p-6 shadow-lg animate-pulse space-y-5">
      <div className="h-48 bg-gray-300 rounded-md w-full"></div>

      <div className="h-6 bg-gray-300 rounded-md w-4/5"></div>

      <div className="h-5 bg-gray-300 rounded-md w-full"></div>
      <div className="h-5 bg-gray-300 rounded-md w-5/6"></div>
    </div>
  );
};

export default CardTrackSkeleton;
