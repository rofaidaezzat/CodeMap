function OTPForm() {
  return (
    <form className="flex flex-col gap-2.5 bg-[#333] rounded-md shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-white backdrop-blur-md w-[17em] h-[12em]">
      <div className="flex flex-col gap-2.5 my-auto">
        <p className="text-center text-white font-bold">Enter your OTP Code</p>
        <div className="flex justify-center space-x-2">
          <input
            maxLength={1}
            type="text"
            className="text-white h-8 w-8 text-center bg-transparent border border-white rounded transition-all duration-500 text-lg focus:outline-none focus:border-white placeholder-shown:bg-transparent not-placeholder-shown:bg-white not-placeholder-shown:w-4 not-placeholder-shown:h-4"
            placeholder=""
          />
          <input
            maxLength={1}
            type="text"
            className="text-white h-8 w-8 text-center bg-transparent border border-white rounded transition-all duration-500 text-lg focus:outline-none focus:border-white placeholder-shown:bg-transparent not-placeholder-shown:bg-white not-placeholder-shown:w-4 not-placeholder-shown:h-4"
            placeholder=""
          />
          <input
            maxLength={1}
            type="text"
            className="text-white h-8 w-8 text-center bg-transparent border border-white rounded transition-all duration-500 text-lg focus:outline-none focus:border-white placeholder-shown:bg-transparent not-placeholder-shown:bg-white not-placeholder-shown:w-4 not-placeholder-shown:h-4"
            placeholder=""
          />
          <input
            maxLength={1}
            type="text"
            className="text-white h-8 w-8 text-center bg-transparent border border-white rounded transition-all duration-500 text-lg focus:outline-none focus:border-white placeholder-shown:bg-transparent not-placeholder-shown:bg-white not-placeholder-shown:w-4 not-placeholder-shown:h-4"
            placeholder=""
          />
          <input
            maxLength={1}
            type="text"
            className="text-white h-8 w-8 text-center bg-transparent border border-white rounded transition-all duration-500 text-lg focus:outline-none focus:border-white placeholder-shown:bg-transparent not-placeholder-shown:bg-white not-placeholder-shown:w-4 not-placeholder-shown:h-4"
            placeholder=""
          />
          <input
            maxLength={1}
            type="text"
            className="text-white h-8 w-8 text-center bg-transparent border border-white rounded transition-all duration-500 text-lg focus:outline-none focus:border-white placeholder-shown:bg-transparent not-placeholder-shown:bg-white not-placeholder-shown:w-4 not-placeholder-shown:h-4"
            placeholder=""
          />
        </div>
        <button
          type="submit"
          className="mx-auto bg-transparent text-white w-[8.5em] h-[2.3em] border border-white rounded transition-all duration-500 hover:bg-white hover:text-black"
        >
          Verify
        </button>
      </div>
    </form>
  );
}
export default OTPForm;
