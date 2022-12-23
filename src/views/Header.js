import React from "react";
import {Typography} from "@mui/material";

const Header = () => {
  return (
    <div style={{position: "absolute", top: "-50px", left: 0, width: "100%"}}>
      <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
        <img src="./imgs/javalis_dourados.jpg" alt="Logo javalis" width={50} height={50} style={{marginRight: 10}}/>
        <Typography variant="subtitle1">Javalis Dourados</Typography>
      </div>
    </div>
  );
};

export default Header;
