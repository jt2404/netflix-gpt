import Header from "../Header/Header";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_large.jpg" />
      </div>
      <div className=" flex justify-center items-center w-full h-screen">
      <LoginForm />
      </div>
      </>
  );
};

export default LoginPage;
