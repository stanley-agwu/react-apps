import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";

const Container = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 80vh;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;

    p{
        font-weight: 600;
        font-size: 1.6em;
    }
    
    progress[value] {
        width: ${({width}) => width || "200px"};
        -webkit-appearance: none;
        appearance: none;
    }

    progress[value]::-webkit-progress-bar {
        height: 40px;
        border-radius: 20px;
        background-color: #ccc;
    }  

    progress[value]::-webkit-progress-value {
        height: 40px;
        border-radius: 20px;
        background-color: ${({color}) => color};
    }
    div{
      display: inline-flex;
    }
    p{
      margin-left: 20px;
      transform: translateY(-80%)
    }
`;

const ProgressBar = ({ value, max, color, width }) => {
  return (
    <Container color={color} width={width}>
        <h1>Progress Bar</h1>
        <div>
          <progress value={value} max={max} width={width} color={color}/>
          <p>{(value / max) * 100}%</p>
        </div>
    </Container>
  );
};

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
  color: PropTypes.string,
  width: PropTypes.string
};

ProgressBar.defaultProps = {
  max: 100,
  color: "#CAB6CD",
  width: "400px"
};

export default ProgressBar;
