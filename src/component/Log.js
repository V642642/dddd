import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Log = () => {
  let navigate = useNavigate();
  const [click, setclick] = useState(false);
  const [data, setdata] = useState({
    username: "",
    password: "",
    name: "",
  });

  const [s, sset] = useState({
    username: "",
    password: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };

  const formhandler = (e) => {
    const { name, value } = e.target;

    sset({ ...s, [name]: value });
  };

  const add = async () => {
    await axios
      .post("http://localhost:5000/signup", data)
      .then((res) => console.log(res));

    setdata("");



  };

  const Login = async () => {
    await axios.post("http://localhost:5000/login", s).then((re) => {
      console.log(re);
      localStorage.setItem("token", re?.data?.token);

      navigate("/b");
    });
  };

  return (
    <div className="   bg-[url('/src/component/l.jpeg')] bg-no-repeat bg-cover h-[100vh]  p-5">
      <div className="flex  items-center justify-between flex-col lg:flex-row  ">
        <div className="logo">
          <h1 className="text-white text-7xl ml-4">
            Welcome to <span className="text-green-400">Hiring plug</span>
          </h1>
        </div>
        <div className="border border-gray-300 bg-gray-300 p-2 lg:w-[40%] w-full lg:h-[70vh] h-[60vh] mt-16 lg:mr-6 mr-0  rounded-lg">
          <h1 className=" text-green-500  text-2xl font-bold flex justify-center ">
            Hiring Plug Resistration
          </h1>
          <div className="button  flex justify-between p-5">
            <button
              className="bg-green-500 border-none p-2 px-5 w-32 capitalize  rounded-full text-white  hover:bg-orange-400 cursor-pointer"
              onClick={() => setclick(true)}
            >
              sign up
            </button>
            <button
              className="bg-green-500 border-none p-2  px-5 w-32 capitalize rounded-full text-white  hover:bg-orange-400 cursor-pointer"
              onClick={() => setclick(false)}
            >
              log in
            </button>
          </div>
          {!click ? (
            <div className="flex justify-center">
              <div className="sign_page  w-[50%]  flex flex-col  space-y-6  mt-5 ">
                <div className="flex flex-col items-baseline space-y-5">
                  <label>Username</label>
                  <input
                    type="email"
                    className="p-2 w-full rounded-lg "
                    name="username"
                    onChange={formhandler}
                    value={s.username}
                  />
                </div>
                <div className="flex flex-col items-baseline space-y-5">
                  <label>password</label>
                  <input
                    type="password"
                    className="p-2 w-full rounded-lg"
                    name="password"
                    onChange={formhandler}
                    value={s.password}
                  />
                </div>

                <div className="button flex justify-center ">
                  <button
                    className="bg-blue-500 border-none p-2 w-40 rounded-full text-white  hover:bg-orange-400 cursor-pointer"
                    onClick={Login}
                  >
                    Log in
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="sign_page  w-[50%]  flex flex-col  space-y-6  mt-5 ">
                <div className="flex flex-col items-baseline space-y-5">
                  <label>Username</label>
                  <input
                    type="email"
                    className="p-2 w-full rounded-lg "
                    name="username"
                    value={data.username}
                    onChange={change}
                  />
                </div>
                <div className="flex flex-col items-baseline space-y-5">
                  <label>Password</label>
                  <input
                    type="password"
                    className="p-2 w-full rounded-lg"
                    name="password"
                    value={data.password}
                    onChange={change}
                  />
                </div>
                <div
                  className="flex flex-col items-baseline space-y-5"
                  name="name"
                >
                  <label>Name</label>
                  <input
                    type="text"
                    className="p-2 w-full rounded-lg"
                    name="name"
                    value={data.name}
                    onChange={change}
                  />
                </div>

                <div className="button flex justify-center ">
                  <button
                    className="bg-blue-500 border-none p-2  rounded-full text-white  hover:bg-orange-400 cursor-pointer"
                    onClick={add}
                  >
                    Create an account
                  </button>
                </div>
              </div>
            </div>
          )}



        </div>
      </div>
    </div>
  );
};

export default Log;
