import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from './state';
import { GlobalStyle, Wrapper, Container } from './styles/styles';


const App: React.FC = () => {
  const dispatch = useDispatch();
  const { deposit, withdraw, closeAccount } = bindActionCreators(actionCreators, dispatch);
  const amount = useSelector((state: State) => state.bank)

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>Simple Bank Account</h1>
        <h2>{`$ ${amount}`}</h2>
        <Container>
          <input type="text" />
          <button onClick={() => deposit(1000)}>Deposit</button>
        </Container>
        <Container>
          <input type="text" />
          <button onClick={() => withdraw(500)}>Withdraw</button>
        </Container>
        <Container>
          <button onClick={() => closeAccount()}>Close Account</button>
        </Container>
      </Wrapper>
    </>
  );
}

export default App;
