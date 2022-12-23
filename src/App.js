import Home from "./views/Home";
import {useState} from "react";
import {Grid} from "@mui/material";
import "./index.css";
import JavaliId from "./views/JavaliId";
import Presidentials from "./views/Presidentials";
import JOTY from "./views/JOTY";
import Confirmation from "./views/Confirmation";

function App() {

  const [step, setStep] = useState(0); //0-Home 1-Identification 2-President 3-Javali ano 4-Confimation
  const [voter, setVoter] = useState(0);
  const [president, setPresident] = useState(0);
  const [joty, setJoty] = useState(0);


  return (
    <Grid container direction="row" justifyContent="center" style={{marginTop: 50, height: "100%", paddingLeft: 10, paddingRight: 10, position: "relative"}}>
      {step === 0 && <Home setStep={setStep}/>}
      {step === 1 && <JavaliId setStep={setStep} setVoter={setVoter} voter={voter}/>}
      {step === 2 && <Presidentials setStep={setStep} president={president} setPresident={setPresident}/>}
      {step === 3 && <JOTY voter={voter} setStep={setStep} joty={joty} setJoty={setJoty} president={president}/>}
      {step === 4 && <Confirmation/>}
    </Grid>
  );
}

export default App;
