const initialState = {
  loading: false,
  account: null,
  account2: null,
  account3: null,
  smartContract: null,
  smartContract2:null,
  smartContract3:null,
  web3: null,
  errorMsg: "",
};

const blockchainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CONNECTION_REQUEST":
      return {
        ...initialState,
        loading: true,
      };
    case "CONNECTION_SUCCESS":
      return {
        ...state,
        loading: false,
        account: action.payload.account,
        smartContract: action.payload.smartContract,
        web3: action.payload.web3,
      };
    case "CONNECTION_SUCCESS2":
        return {
          ...state,
          // loading: false,
          account2: action.payload.account,
          smartContract2: action.payload.smartContract,
          // web3: action.payload.web3,
        };
     case "CONNECTION_SUCCESS3":
        return {
          ...state,
          // loading: false,
          account3: action.payload.account,
          smartContract3: action.payload.smartContract,
          // web3: action.payload.web3,
        };
    case "CONNECTION_FAILED":
      return {
        ...initialState,
        loading: false,
        errorMsg: action.payload,
      };
    case "UPDATE_ACCOUNT":
      return {
        ...state,
        account: action.payload.account,
      };
    
    default:
      return state;
  }
};

export default blockchainReducer;
