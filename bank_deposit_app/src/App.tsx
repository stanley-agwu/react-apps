import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from './state';
import { GlobalStyle } from './styles/styles';


const App: React.FC = () => {
  const dispatch = useDispatch();
  const { deposit, withdraw, closeAccount } = bindActionCreators(actionCreators, dispatch);
  const amount = useSelector((state: State) => state.bank)

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <h1>Simple Bank Account</h1>
        <h2>{amount}</h2>
        <div>
          <input type="text" />
          <button onClick={() => deposit(1000)}>Deposit</button>
        </div>
        <div>
          <input type="text" />
          <button onClick={() => withdraw(500)}>Withdraw</button>
        </div>
        <div>
          <button onClick={() => closeAccount()}>Close Account</button>
        </div>
      </div>
    </>
  );
}

export default App;
