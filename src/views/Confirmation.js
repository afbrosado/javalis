import React from "react";
import {Grid, Typography} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import Header from "./Header";

const Confirmation = () => {
  return (
    <>
      <Header/>
      <Grid item xs={12} style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
      }}>
        <Typography variant="h4">Voto concluído com sucesso</Typography>
        <CheckIcon style={{fill: "green", width: 200, height: 200}}/>
      </Grid>
    </>
  );
};

export default Confirmation;
