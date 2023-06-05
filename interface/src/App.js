import React, { useEffect, useContext } from "react";
import Web3 from "web3";
import { abi } from "./abi/abi";
import { AppContext } from "./contexts/context";

function App() {
  const [{}, dispatch] = useContext(AppContext);

  useEffect(() => {
    async function connect() {
      const address = "";
      const web3Connection = new Web3(
        new Web3.providers.HttpProvider("http://localhost:8545")
      );
      const contractConnection = new web3Connection.eth.Contract(abi, address);

      dispatch({
        type: "SET_CONNECTION",
        payload: { web3: web3Connection, contract: contractConnection },
      });
    }

    connect();
  }, []);

  return <div className="App"></div>;
}

export default App;
