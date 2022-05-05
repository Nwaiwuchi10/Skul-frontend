import { Routes } from "react-router-dom";
import "./App.css";
import { Container } from "react-bootstrap";
import Head from "./Components/Head";
import Header from "./Components/Header";
import { Route } from "react-router-dom";
import HomPage from "./HomePage/HomPage";

import Footer from "./Components/Footer";
import Outline from "./Pages/Outline";
import Reg from "./Screens/Reg";
import JSS1A from "./Screens/JSS1A";
import StudentsLoginScreen from "./Screens/StudentsLoginScreen";
import StudentSignup from "./Screens/StudentSignup";
import TeacherLogin from "./Screens/TeacherLogin";
import TeacherSignup from "./Screens/TeacherSignup";
import CheckResult from "./Screens/CheckResult";
import Jss1result from "./Screens/Jss1result";

import Jss1Aresultlist from "./Screens/Jss1Aresultlist";
import Jss1result2 from "./Screens/Jss1result2";
import AdmissionPortal from "./Screens/AdmissionPortal";

import Createjss1results from "./Screens/Createjss1results";
import GetResults from "./Screens/GetResults";
import Ss1resultlist from "./Screens/SS1Screen/Ss1resultlist";
import Ss1studentResult from "./Screens/SS1Screen/Ss1studentResult";
import Adminresultclasslist from "./Screens/Adminresultclasslist";
import CreateResultList from "./Screens/CreateResultList";
import Jss1resultbyyear from "./Screens/Jss1resultbyyear";

// import Jss1result2 from "./Screens/Jss1result2";

function App() {
  return (
    <div>
      <Head />
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomPage />} />
            <Route path="/registernumber" element={<Reg />} />
            <Route path="/login" element={<StudentsLoginScreen />} />
            <Route path="/teacherslogin" element={<TeacherLogin />} />
            <Route path="/teachersignup" element={<TeacherSignup />} />
            <Route path="/signup" element={<StudentSignup />} />
            <Route path="/JSS1A" element={<JSS1A />} />
            <Route path="/checkresult" element={<CheckResult />} />
            <Route path="/jss1results/:id" element={<Jss1result2 />} />

            <Route path="/JSS1resultlist" element={<Jss1Aresultlist />} />
            <Route path="/admissionportal" element={<AdmissionPortal />} />
            <Route
              path="/admin/jss1results/:id/edit"
              element={<Createjss1results />}
            />
            <Route path="/getclasslist" element={<Adminresultclasslist />} />
            <Route path="/getresult" element={<GetResults />} />
            <Route path="/upload" element={<CreateResultList />} />
            <Route path="/SS1" element={<Ss1resultlist />} />
            <Route path="/yearofresult" element={<Jss1resultbyyear />} />
            <Route path="/ss1results/:id" element={<Ss1studentResult />} />

            {/* <Route path="/JSS1result" element={<Jss1result2 />} /> */}
          </Routes>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
