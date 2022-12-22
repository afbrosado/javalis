import {SET_VOTE,  SET_VOTED} from "./votersTypes";

const initialState = {
  votes: [
    {
      id: 1,
      president: false,
      joty: false
    },
    {
      id: 2,
      president: false,
      joty: false
    },
    {
      id: 3,
      president: false,
      joty: false
    },
    {
      id: 4,
      president: false,
      joty: false
    },
    {
      id: 5,
      president: false,
      joty: false
    },
    {
      id: 6,
      president: false,
      joty: false
    },
    {
      id: 7,
      president: false,
      joty: false
    },
    {
      id: 8,
      president: false,
      joty: false
    },
    {
      id: 9,
      president: false,
      joty: false
    },
    {
      id: 10,
      president: false,
      joty: false
    },
    {
      id: 11,
      president: false,
      joty: false
    },
    {
      id: 12,
      president: false,
      joty: false
    },
    {
      id: 13,
      president: false,
      joty: false
    },
    {
      id: 14,
      president: false,
      joty: false
    },
    {
      id: 15,
      president: false,
      joty: false
    },
    {
      id: 16,
      president: false,
      joty: false
    },
    {
      id: 17,
      president: false,
      joty: false
    }
  ],
  results: [
    {
      id: 1,
      president: 0,
      joty: 0
    },
    {
      id: 2,
      president: 0,
      joty: 0
    },
    {
      id: 3,
      president: 0,
      joty: 0
    },
    {
      id: 4,
      president: 0,
      joty: 0
    },
    {
      id: 5,
      president: 0,
      joty: 0
    },
    {
      id: 6,
      president: 0,
      joty: 0
    },
    {
      id: 7,
      president: 0,
      joty: 0
    },
    {
      id: 8,
      president: 0,
      joty: 0
    },
    {
      id: 9,
      president: 0,
      joty: 0
    },
    {
      id: 10,
      president: 0,
      joty: 0
    },
    {
      id: 11,
      president: 0,
      joty: 0
    },
    {
      id: 12,
      president: 0,
      joty: 0
    },
    {
      id: 13,
      president: 0,
      joty: 0
    },
    {
      id: 14,
      president: 0,
      joty: 0
    },
    {
      id: 15,
      president: 0,
      joty: 0
    },
    {
      id: 16,
      president: 0,
      joty: 0
    },
    {
      id: 17,
      president: 0,
      joty: 0
    }
  ]
};

const VotersReducer = function (state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case SET_VOTED:
      return {
        ...state,
        ...payload
      };
    case SET_VOTE:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};

export default VotersReducer;
