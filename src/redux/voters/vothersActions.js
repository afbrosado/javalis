import {SET_VOTE, SET_VOTED} from "./votersTypes";

export const setVote = payload => {
  return {
    type: SET_VOTE,
    payload
  }
};

export const setVoted = payload => {
  return {
    type: SET_VOTED,
    payload
  }
};
