import { BellDot } from "lucide-react";

const Notification = () => {
  return (
    <div className="lg:px-40 py-20 lg:pt-28 space-y-8">
      <h1 className="text-3xl font-serif">Notifications</h1>
      <div className="border-b-2 border-gray-400 mb-6">
        <ul className="flex gap-5 ">
          <li>
            <a href="" className="font-bold">
              All
            </a>
          </li>
          <li>
            <a href="" className="font-bold">
              {" "}
              Unread
            </a>
          </li>
        </ul>
      </div>
      {/* <h3>Motivational messages</h3> */}
      <div className="flex flex-col gap-6">
        <div className="flex items-center space-x-6 ">
          <div>
            <BellDot
              size={50}
              color="black"
              className="p-3 bg-gray-400 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold text-xl">
              Complete 3.6: The secret of the universe
            </h3>
            <p>
              If you complete this exercise, you'll be 70% done with the course!
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-6 ">
          <div>
            <BellDot
              size={50}
              color="black"
              className="p-3 bg-gray-400 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold text-xl">
              Complete 3.6: The secret of the universe
            </h3>
            <p>
              If you complete this exercise, you'll be 70% done with the course!
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-6 ">
          <div>
            <BellDot
              size={50}
              color="black"
              className="p-3 bg-gray-400 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold text-xl">
              Complete 3.6: The secret of the universe
            </h3>
            <p>
              If you complete this exercise, you'll be 70% done with the course!
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-6 ">
          <div>
            <BellDot
              size={50}
              color="black"
              className="p-3 bg-gray-400 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold text-xl">
              Complete 3.6: The secret of the universe
            </h3>
            <p>
              If you complete this exercise, you'll be 70% done with the course!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;