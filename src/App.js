import React from "react";
import Home from "./component/Home";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Dashboard from "./component/Dashboard";
import Payroll from "./component/Payroll";
import Myjob from "./component/Myjob";
// import Log from "./component/Log";
import Engaged from "./component/Engaged";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Log />} /> */}

          {/* <Route element={<Auto />}> */}
            <Route path="/" element={<Home />} />
          {/* </Route> */}
          <Route path="/d" element={<Dashboard />} />
          <Route path="/f/:id" element={<Payroll />} />
          <Route path="/h" element={<Myjob />} />
          <Route  path="/j"  element = {<Engaged/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

// export const Auto = () => {
//   if (localStorage.getItem("token")) {
//     return <Outlet />;
//   } else {
//     <Navigate replace to="/" />;
//   }
// };
