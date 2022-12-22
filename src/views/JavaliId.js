import React, {useState} from "react";
import {FormControl, FormControlLabel, Grid, RadioGroup, Typography, Radio, Button} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Header from "./Header";
import {JAVALIS} from "../utils/javalisList";

const JavaliId = props => {

  const {setStep, setVoter, voter} = props;

  const handleChange = e => {
    setVoter(e.target.value)
  };

  const handleNextClick = () => {
    setStep(2);
  };

  return (
    <>
      <Header/>
      <Grid item xs={12} style={{textAlign: "center", marginTop: 40}}>
        <Typography variant="h5" gutterBottom>Passo 1</Typography>
        <Typography variant="h5">Javali indentifique-se</Typography>
      </Grid>
      <Grid item xs={12} style={{marginTop: 20}}>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={voter}
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
            disabled={voter === 0}
          >
            Javali Presidente
          </Button>
        </div>
      </Grid>
    </>
  );
};

export default JavaliId;
