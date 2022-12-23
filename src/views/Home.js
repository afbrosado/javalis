import React, {useState} from "react";
import {Button, Grid, Typography} from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Home = props => {

  const {setStep} = props;

  return (
    <>
      <Grid item xs={12} style={{textAlign: "center"}}>
        <img src="https://i.imgur.com/jSrp1VO.jpg" alt="Logo javalis" width={150} height={150}/>
        <Typography variant="h4" style={{marginTop: 10, fontWeight: "bold"}}>
          Bem vindo JAVALI
        </Typography>
        <Typography variant="h5" gutterBottom style={{marginTop: 60}}>
          Vota para Javali Presidente e Javali do Ano 2022
        </Typography>
        <Button
          variant="contained"
          endIcon={<ArrowForwardIosIcon/>}
          onClick={() => setStep(1)}
        >
          Seguir para as votações
        </Button>
      </Grid>
      <Typography variant="body2" style={{position: "absolute", bottom: 10, left: 10}}>
        Powered by: Not Konga
      </Typography>
    </>
  );
};

export default Home;
