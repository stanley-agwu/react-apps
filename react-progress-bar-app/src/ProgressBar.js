import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";

const Container = Styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    height: 100vh;

    p{
        font-weight: 600;
        font-size: 1.3em;
    }
    
    progress[value] {
        width: ${props => props.width};

        -webkit-appearance: none;
        appearance: none;
    }

    progress[value]::-webkit-progress-bar {
        height: 20px;
        border-radius: 20px;
        background-color: #ccc;
    }  

    progress[value]::-webkit-progress-value {
        height: 20px;
        border-radius: 20px;
        background-color: ${props => props.color};
    }
`;

const ProgressBar = ({ value, max, color, width }) => {
  return (
    <Container color={color} width={width}>
        <span><h1>Progress Bar</h1>
        <progress value={value} max={max} />
        <p>{(value / max) * 100}%</p></span>
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
  width: "300px"
};

export default ProgressBar;
