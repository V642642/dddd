import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import axios from "axios";
import { useParams } from "react-router-dom";
const Payroll = () => {
  let { id } = useParams();
  const [f, setf] = useState(false);
  const [s, sset] = useState([]);
  const [form, setform] = useState({
    input: "",
    email: "",
    website: "",
    username: "",
    name: "",
    phone: "",
  });
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer ",
  };

  const add = async () => {
    console.log(form, "d   ");
    const data = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      form,
      { headers: headers }
    );
    return data;
  };

  useEffect(() => {
    const fetch = async () => {
      const data = await axios.get(
        // "https://jsonplaceholder.typicode.com/users"
        `https://jsonplaceholder.typicode.com/users/${id}`
      );

      sset(data?.data);
      console.log(data, "data");
    };

    fetch();
  }, [id]);

  const sun = (e) => {
    const { value, name } = e.target;

    setform({ ...form, [name]: value });
  };

  return (
    <div className="payroll">
      <Nav />
      <div className="main_payroll  lg:mt-7 lg:pt-10 lg:px-28">
        <div className="payroll_logo text-3xl">{s?.username}</div>
        {/* {s?.map((n, index) => {
          return ( */}
        <div className="w-full p-4">
          <div className="lg:w-[70%]  w-full bg-white shadow-md p-6 mt-5 rounded-md  ">
            <div className="top   flex justify-between">
              <div>
                {" "}
                <span className="text-green-500">●</span>Last active 6 hours ago
              </div>
              <div className="capatilize">active job</div>
            </div>
            <hr className="bg-black mt-3"></hr>

            <div className="top_2  flex justify-between items-baseline mt-5 lg:w-[90%] text-gray-400 w-full">
              <span className="text-green-500">{s.name}</span>
              <span>{s.username}</span>
              <div className="flex flex-col items-center gap-4">
                <span className="text-2xl">#wa7yl99o</span>
                <span>Job Reference ID {s?.address?.geo?.lat}</span>
              </div>
            </div>

            <div>Job funnel</div>

            <div className="flex justify-between text-lg lg:w-[70%] w-full gap-8  text-center flex-wrap ">
              <div className="funnel   ">
                <span>0</span>
                <hr></hr>
                <span>view</span>
              </div>
              <div className="funnel ">
                <span>0</span>
                <hr></hr>
                <span>view</span>
              </div>
              <div className="funnel ">
                <span>0</span>
                <hr></hr>
                <span>view</span>
              </div>
              <div className="funnel text-center">
                <span>0</span>
                <hr></hr>
                <span>view</span>
              </div>
              <div className="funnelr">
                <span>0</span>
                <hr></hr>
                <span>view</span>
              </div>
              <div className="funnel ">
                <span>0</span>
                <hr></hr>
                <span>view</span>
              </div>
              <div className="funnel ">
                <span>0</span>
                <hr></hr>
                <span>view</span>
              </div>
              <div className="funnel ">
                <span>0</span>
                <hr></hr>
                <span>view</span>
              </div>
              <div className="funnel ">
                <span>0</span>
                <hr></hr>
                <span>view</span>
              </div>
              <div className="funnel ">
                <span>0</span>
                <hr></hr>
                <span>view</span>
              </div>
            </div>

            <div className="flex justify-between items-center mt-7 text-sm text-gray-700    lg:w-[90%] w-full ">
              <div className="flex flex-col w-full">
                <span className="font-bold">Department</span>
                <span>{s?.address?.street}</span>
              </div>

              <div className="flex flex-col w-full ">
                <span className="font-bold">Experience</span>
                <span>4 to 5 Years</span>
              </div>
              <div className="flex flex-col w-full">
                <span className="font-bold">Annual CTC</span>
                <span>INR(₹) 600000 to 800000</span>
              </div>
            </div>
            <div className="flex justify-between items-baseline mt-7 text-sm  lg:w-[90%] w-full ">
              <div className="flex flex-col w-full">
                <span className="font-bold">Gaurantee Period</span>
                <span>90 Days</span>
              </div>

              <div>
                <span className="font-bold w-full">Number of Position(s)</span>
                <span>1</span>
              </div>

              <div>grade</div>
            </div>

            <div className="mt-4 w-full">
              Commercials
              <span className="text-gray-500 pl-2">
                Payment after 60 days, 75% share of recruitment fee
              </span>
            </div>
            <div className="border border-gray-400 p-5 text-sm mt-8">
              <div className="memership_type  flex justify-between  w-full   text-gray-500  ">
                <span>Membership Type</span>
                <span>Recruitment Fee</span>
              </div>
              <hr className="mt-3 text-gray-500"></hr>

              <div className="memership_type  flex justify-between  w-full mt-3  text-gray-500 ">
                <span>Prime Member</span>
                <span>INR(₹) 45,500 {s?.phone}</span>
              </div>
              <hr className="mt-3 text-gray-500"></hr>

              <div className="memership_type  flex justify-between w-full mt-3  text-gray-500 ">
                <span>Club Member</span>
                <span>INR(₹) 45,500 {s?.phone}</span>
              </div>
            </div>

            <div className="job_reg_id  flex justify-between text-bold mt-5  text-sm">
              <span>Job Requisition ID</span>
              <div className="flex flex-col ">
                <span>Churn Period</span>
                <span className="text-gray-500">180 days</span>
              </div>
            </div>

            <div className="mandantry_skilss">
              <span className="">Mandatory Skills</span>
              <div className="mandatory mt-4 flex flex-wrap lg:w-[80%]  w-full  gap-4">
                <span className=" bg-green-600 p-2 rounded-full   text-white">
                  {s?.username}
                </span>
                <span className=" bg-green-600 p-2 rounded-full   text-white">
                  {s?.username}
                </span>
                <span className=" bg-green-600 p-2 rounded-full   text-white">
                  {s?.username}
                </span>
                <span className=" bg-green-600 p-2 rounded-full   text-white">
                  {s?.username}
                </span>
                <span className=" bg-green-600 p-2 rounded-full   text-white">
                  {s?.username}
                </span>
                <span className=" bg-green-600 p-2 rounded-full   text-white">
                  {s?.username}
                </span>
                <span className=" bg-green-600 p-2 rounded-full   text-white">
                  {s?.username}
                </span>
                <span className=" bg-green-600 p-2 rounded-full   text-white">
                  {s?.username}
                </span>
              </div>
            </div>

            <div className=" mt-2">Additional Skills</div>
            <div className="job_des space-y- mt-10">
              <span>job description</span>
              <p className="mt-10">
                We are looking for an experienced payroll accountant for our
                payroll function. Your primary responsibility will be collating
                inputs for processing of India payroll, compliance with local
                laws, improving payroll process efficiency and assisting in
                internal and external audits.
              </p>
            </div>
            <div className="role mt-16">
              <span className="underline bg-yellow-300">Role</span>
              <p className="mt-16 lg:w-[70%]  w-full">
                Tracking and validating time and expenses from all employees
                Ensuring accurate and timely processing of payroll in accordance
                with local statutory requirements and regulations. Review
                payroll file received from consultant, record journals and
                prepare reconciliation of payroll ledgers. Onboard new employee
                by processing their paperwork and collecting all details needed
                for pay run. Coordinate Enrolment of employees, collaborating
                with HR Payroll partners on a regular basis. Calculate of final
                salary payment for leavers including leave encashment. Ensuring
                that all necessary documentation is kept in an orderly manner
                for audit purposes. Tracking of PF transfers, e-nominations,
                Gratuity declarations, Form 11 declarations etc. Resolve
                employee clarifications and educate them about policy
              </p>
            </div>

            <div className="mt-10">Additional Information</div>

            <div className="requirment space-y-6 ">
              <span className="underline bg-yellow-300 ">Requirement</span>
              <p className="underline bg-yellow-300">
                Graduate with 4 to 5 years of work experience in India Payroll
                functions. Good knowledge of ADP.
              </p>
              <p>
                Excellent knowledge of MS Office, especially Excel and
                PowerPoint. Good partnership, influencing and communication
                skills. Strong teammate with global approach, equally successful
                at working independently or in large groups.
              </p>
            </div>
            <div className="required_quli space-y-7">
              <p className="mt-10">Required Qualification</p>

              <div className="screenn">
                <labal className="font-bold">Screening Questions:</labal>
                <div className="flex justify-between mt-2 ">
                  <span>N/A</span>
                  <span className="text-green-500">(+Add Notes)</span>
                </div>
              </div>
            </div>

            <div className="proposed_candidates mt-5  flex gap-3 ">
              <div className="main_proposed ">
                <div className="proposed" onClick={() => setf(!f)}>
                  <span>Proposed Candidates</span>
                  <hr className={f ? "bg-green-500  h-1 w-40" : "hidden"}></hr>
                </div>
              </div>

              <div className="main_proposed ">
                <div className="proposed " onClick={() => setf(!f)}>
                  <span>Candidate databank</span>
                  <hr className={f ? "hidden" : "bg-green-500  h-1 w-40"}></hr>
                </div>
              </div>
            </div>

            <div className={f ? "hidden" : "block"}>
              <div className="buttons mt-3  flex gap-5 text-white">
                <button className="bg-green-500 p-1 rounded-2xl w-12">
                  New
                </button>
                <button className="bg-green-500 p-1 rounded-2xl w-20">
                  shortlist
                </button>
                <button className="bg-green-500 p-1 rounded-2xl w-12">
                  All
                </button>
              </div>

              <div className="propsed_input mt-4 w-full">
                <div className="w-full flex gap-3 flex-col lg:flex-row">
                  <input
                    type="text"
                    className="border border-gray-400 p-2 lg:w-[70%] w-full rounded-xl"
                    placeholder="search for candidate by domain, name , location "
                    name="input"
                    onChange={sun}
                    value={form.input}
                  ></input>
                  <select
                    className="p-3 lg:w-[30%] border border-gray-400 bg-white w-full rounded-lg"
                    name="email"
                    onChange={sun}
                    value={form.email}
                  >
                    <option>kk</option>
                    <option>djjd</option>
                  </select>
                </div>
              </div>

              <div className="input_2 flex gap-3 w-full mt-5 flex-col lg:flex-row">
                <select
                  className="p-3 w-full  border border-gray-400 bg-white rounded-lg"
                  name="website"
                  onChange={sun}
                  value={form.website}
                >
                  <option>kk</option>
                  <option>djjd</option>
                </select>
                <select
                  className="p-3 w-full border border-gray-400 bg-white rounded-lg"
                  name="username"
                  onChange={sun}
                  value={form.username}
                >
                  <option>{s.username}</option>
                </select>
                <select
                  className="p-3 w-full border border-gray-400 bg-white rounded-lg"
                  name="name"
                  onChange={sun}
                  value={form.name}
                >
                  <option>kk</option>
                  <option>djjd</option>
                </select>
                <select
                  className="p-3 w-full border border-gray-400 bg-white rounded-lg"
                  name="phone"
                  onChange={sun}
                  value={form.phone}
                >
                  <option>kk</option>
                  <option>djjd</option>
                </select>
              </div>
              <div className="flex justify-center">
                <div
                  className="  bg-green-500 p-1 mt-3 w-40 items-center flex justify-center rounded-full"
                  onClick={add}
                >
                  submit
                </div>
              </div>
            </div>

            <div className={f ? "block" : "hidden"}>
              {/* <div className="buttons mt-3  flex gap-5 text-white">
                <button className="bg-green-500 p-1 rounded-2xl w-12">
                  New
                </button>
                <button className="bg-green-500 p-1 rounded-2xl w-20">
                  shortlist
                </button>
                <button className="bg-green-500 p-1 rounded-2xl w-12">
                  All
                </button>
              </div> */}

              <div className="propsed_input mt-4 w-full">
                <div className="w-full flex gap-3 flex-col lg:flex-row">
                  <input
                    type="text"
                    className="border border-gray-400 p-2 lg:w-[70%] w-full rounded-xl"
                    placeholder="search for candidate by domain, name , location "
                  />
                  <select className="p-3 lg:w-[30%] border border-gray-400 bg-white w-full rounded-lg">
                    <option>ss</option>
                  </select>
                </div>
              </div>

              <div className="input_2 flex gap-3 w-full mt-5 flex-col lg:flex-row">
                <select className="p-3 w-full  border border-gray-400 bg-white rounded-lg">
                  <option>ss</option>
                </select>
                <select className="p-3 w-full border border-gray-400 bg-white rounded-lg">
                  <option>ss</option>
                </select>
                <select className="p-3 w-full border border-gray-400 bg-white rounded-lg">
                  <option>ss</option>
                </select>
                <select className="p-3 w-full border border-gray-400 bg-white rounded-lg">
                  <option>ss</option>
                </select>
              </div>
              <div className="flex justify-center">
                <div
                  className="  bg-green-500 p-1 mt-3 w-40 items-center flex justify-center rounded-full"
                  onClick={add}
                >
                  submit
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ); */}
        {/* })} */}
      </div>
    </div>
  );
};

export default Payroll;
