import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from './state';
// import { useFormik } from 'formik';
import { GlobalStyle, Wrapper, Container } from './styles/styles';


const App: React.FC = () => {
  const dispatch = useDispatch();
  const { deposit, withdraw, closeAccount } = bindActionCreators(actionCreators, dispatch);
  const amount = useSelector((state: State) => state.bank);
  // const formik = useFormik({
  //   initialValues: {
  //     depositAmount: 0,
  //     withdrawAmount: 0
  //   }
  // })
  const [depositAmount, setDepositAmount] = useState<string>('');
  const [withdrawAmount, setWithdrawAmount] = useState<string>('');


  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>Simple Bank Account</h1>
        <h2>{`$ ${amount}`}</h2>
        <Container>
          <input type="text"
            value={depositAmount}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
              setDepositAmount(e.currentTarget.value)}
          />
          <button 
            onClick={() => {
              deposit(Number(depositAmount))
              setDepositAmount('');
            }}
          >
            Deposit
          </button>
        </Container>
        <Container>
        <input type="text"
            value={withdrawAmount}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
              setWithdrawAmount(e.currentTarget.value)}
          />
          <button 
            onClick={() => {
              withdraw(Number(withdrawAmount))
              setWithdrawAmount('');
            }}
          >
            Withdraw
          </button>
        </Container>
        <Container>
          <button onClick={() => closeAccount()}>Close Account</button>
        </Container>
      </Wrapper>
    </>
  );
}

export default App;
