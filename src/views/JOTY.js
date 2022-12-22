import React from "react";
import Header from "./Header";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {useDispatch, useSelector} from "react-redux";
import {Button, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography} from "@mui/material";
import {JAVALIS} from "../utils/javalisList";
import {setVoted, setVote} from "../redux/voters/vothersActions";

const JOTY = props => {
  const dispatch = useDispatch();
  const {votes, results} = useSelector(state => state.voters);

  const {voter, setStep, joty, setJoty, president} = props;

  const handleChange = e => {
    setJoty(e.target.value);

  };

  const handleNextClick = () => {
    let _voter = votes.find(v => Number(v.id) === Number(voter));
    let _votes = votes;
    let _results = results;

    _voter.president = true;
    _voter.joty = true;

    _votes[voter -1] = _voter;

    _results[president -1].president += 1;
    _results[joty -1].joty += 1;

    dispatch(setVoted(_votes));
    dispatch(setVote(_results));
    setStep(4);
  };
  console.log(votes)
  console.log(results)
  return (
    <>
      <Header/>
      <Grid item xs={12} style={{textAlign: "center", marginTop: 40}}>
        <Typography variant="h5" gutterBottom>Passo 3</Typography>
        <Typography variant="h5">Voto para Javali do Ano</Typography>
      </Grid>
      <Grid item xs={12} style={{marginTop: 20}}>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={joty}
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
            disabled={joty === 0}
          >
            Concluir votação
          </Button>
        </div>
      </Grid>
    </>
  );
};

export default JOTY;
