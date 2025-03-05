const CookiesPolicy = () => {
    return (
      <div className="my-28 px-48">
        <h2 className="font-extrabold text-3xl pb-6">Cookies Policy</h2>
        <div className="py-6">
          <h4 className="text-xl font-bold pb-3 text-[#002855]">Introduction</h4>
          <p className="leading-7 text-[#121417]">
            We use cookies to provide you with a great user experience. By using
            Learnly, you accept our use of cookies.
          </p>
        </div>
        <div className="py-6">
          <h4 className="text-xl font-bold pb-3 text-[#002855]">
            Types of Cookies Used
          </h4>
          <p className="leading-7 text-[#121417]">
            We use the following types of cookies for the purposes explained in
            this chart:
          </p>
        </div>
        {/* ------start table-------- */}
        <div className="border  rounded-3xl  border-[#637588]">
          <div className="flex justify-between items-center border-b border-[#637588]  p-8 ">
            <div className="flex-1 font-semibold text-xl">Type of Cookie</div>
            <div className="flex-1 font-semibold text-xl">Purpose</div>
          </div>
          <div className="flex justify-between items-center  border-b border-[#637588] p-8">
            <div className="flex-1">Necessary</div>
            <div className="flex-1">
              These cookies are essential for the site to function.
            </div>
          </div>
          <div className="flex justify-between items-center border-b border-[#637588] p-8">
            <div className="flex-1">Functionality</div>
            <div className="flex-1">
              These cookies allow us to remember choices you make when you use the
              site.
            </div>
          </div>
          <div className="flex justify-between items-center border-b border-[#637588] p-8">
            <div className="flex-1">Performance</div>
            <div className="flex-1">
              These cookies collect information about how you use the site.
            </div>
          </div>
          <div className="flex justify-between items-center border-b border-[#637588] p-8">
            <div className="flex-1">Targeting or Advertising</div>
            <div className="flex-1">
              These cookies are used to deliver content that is more relevant to
              you and your interests.
            </div>
          </div>
          <div className="flex justify-between items-center p-8">
            <div className="flex-1">Social Media</div>
            <div className="flex-1">
              These cookies are used when you share information using a social
              media sharing button or “like” button on our sites or you link your
              account or engage with our content on or through a social networking
              site such as Facebook, Twitter or LinkedIn.
            </div>
          </div>
        </div>
        <div className="py-6">
          <h4 className="text-xl font-bold pb-3 text-[#002855]">
            How to Manage Cookies
          </h4>
          <p className="leading-7 text-[#121417]">
            You can control and manage cookies in various ways. Please keep in
            mind that removing or blocking cookies can negatively impact your user
            experience and parts of our website may no longer be fully accessible.
          </p>
        </div>
        <div className="py-6">
          <h4 className="text-xl font-bold pb-3 text-[#002855]">
            Impact of Not Using Cookies
          </h4>
          <p className="leading-7 text-[#121417]">
            If you choose to delete or block cookies, the website may not function
            properly and certain features may not work.
          </p>
        </div>
      </div>
    );
  };
  export default CookiesPolicy;
  