const Login = () => {
  return (
    <div className=" h-full flex justify-center items-center">
      <div className="max-w-xs w-full mx-auto flex flex-col ">
        <h1 className="text-2xl font-bold mb-5  ">로그인</h1>
        <div className="mb-6">
          <label
            htmlFor="idInput"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            아이디
          </label>
          <input
            type="text"
            id="idInput"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 "
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="passwordInput"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            비밀번호
          </label>
          <input
            type="text"
            id="passwordInput"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 "
          />
        </div>
        <button
          type="submit"
          className="mb-3 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
        >
          로그인
        </button>
        <button
          type="submit"
          className="text-gray-900  hover:bg-purple-700 hover:text-gray-50 border border-gray-400  focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
        >
          회원가입
        </button>
      </div>
    </div>
  );
};

export default Login;
