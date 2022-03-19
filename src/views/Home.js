import React from "react";
//MUI Imports
import { Button, Grid, Paper, Typography } from "@mui/material";
//Components Import
import { Link } from "react-router-dom";
//CSS Import
import "./../styles/Home.css";
import desert from "./../assets/images/desert.png";

function Home() {
  return (
    <React.Fragment>
      <div className="homeRoot">
        <div className="loadpage-wrapper">
          <div>
              <Typography mb={2} variant="h3">
              Lost Dogs
              </Typography>
            <Button size="large" variant="outlined" href="main">
              <Link to="main">Main </Link>
            </Button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
