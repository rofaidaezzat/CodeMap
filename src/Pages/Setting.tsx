import Button from "@/Ui/Button";
import Input from "@/Ui/Input";

const Setting = () => {
  return (
    <div className="mt-28 mx-16 mb-24 space-y-10">
      <h1 className="text-3xl font-bold">Account Settings</h1>

      <form className="space-y-8">
        {/* User Info */}
        <div className="space-y-6">
          <div className="flex flex-col gap-2 w-1/2">
            <label htmlFor="username" className="font-semibold text-gray-700">
              Username
            </label>
            <Input
              type="text"
              id="username"
              name="username"
              className="h-12 bg-gray-100 border border-gray-300 rounded px-3"
            />
          </div>

          <div className="flex flex-col gap-2 w-1/2">
            <label htmlFor="email" className="font-semibold text-gray-700">
              Email
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              className="h-12 bg-gray-100 border border-gray-300 rounded px-3"
            />
          </div>
        </div>

        {/* Password Change */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold font-serif">Change Password</h2>

          <div className="flex flex-col gap-2 w-1/2">
            <label
              htmlFor="currentPassword"
              className="font-semibold text-gray-700"
            >
              Current Password
            </label>
            <Input
              type="password"
              id="currentPassword"
              name="currentPassword"
              className="h-12 bg-gray-100 border border-gray-300 rounded px-3"
            />
          </div>

          <div className="flex flex-col gap-2 w-1/2">
            <label
              htmlFor="newPassword"
              className="font-semibold text-gray-700"
            >
              New Password
            </label>
            <Input
              type="password"
              id="newPassword"
              name="newPassword"
              className="h-12 bg-gray-100 border border-gray-300 rounded px-3"
            />
          </div>

          <div className="flex flex-col gap-2 w-1/2">
            <label
              htmlFor="confirmPassword"
              className="font-semibold text-gray-700"
            >
              Confirm New Password
            </label>
            <Input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="h-12 bg-gray-100 border border-gray-300 rounded px-3"
            />
          </div>

          <div className="flex justify-end w-1/2">
            <Button className="px-6 py-3 bg-[#413198] text-white rounded-md">
              Change Password
            </Button>
          </div>
        </div>
      </form>

      {/* Delete Account Section */}
      <div className="flex items-center justify-between border border-gray-300 p-6 rounded-lg bg-red-50">
        <div className="space-y-2 max-w-3xl">
          <h2 className="text-2xl font-bold text-red-700">Delete Account</h2>
          <p className="text-gray-700">
            By deleting your account, all of your data will be permanently
            removed. Please download any important information before
            proceeding.
          </p>
        </div>
        <Button className="px-6 py-3 bg-[#DC3545] text-white rounded-md">
          DELETE
        </Button>
      </div>
    </div>
  );
};

export default Setting

