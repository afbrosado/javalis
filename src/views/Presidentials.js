import React from "react";
import {Button, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography} from "@mui/material";
import {JAVALIS} from "../utils/javalisList";
import Header from "./Header";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Presidentials = props => {

  const {setStep, president, setPresident} = props;

  const handleChange = e => {
    setPresident(e.target.value)
  };

  const handleNextClick = () => {
    setStep(3);
  };

  return (
    <>
      <Header/>
      <Grid item xs={12} style={{textAlign: "center", marginTop: 40}}>
        <Typography variant="h5" gutterBottom>Passo 2</Typography>
        <Typography variant="h5">Voto para Javali Presidente</Typography>
      </Grid>
      <Grid item xs={12} style={{marginTop: 20}}>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={president}
            onChange={handleChange}
          >
            {JAVALIS.map(j => (
              <FormControlLabel key={j.id} value={j.id} control={<Radio/>} label={j.name}/>
            ))}
          </RadioGroup>
        </FormControl>
        <div style={{textAlign: "end"}}>
          <Button
            variant="contained"
            endIcon={<ArrowForwardIosIcon/>}
            style={{maxWidth: 250, marginBottom: 20}}
            onClick={handleNextClick}
            disabled={president === 0}
          >
            Javali do ano
          </Button>
        </div>
      </Grid>
    </>
  );
};

export default Presidentials;
