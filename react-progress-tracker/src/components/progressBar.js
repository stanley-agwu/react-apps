import React from 'react'
import styled from 'styled-components'

const StyledProgressContainer = styled.div`
    width: 85%;
    height: 100%;
    border-radius: 0 7px 7px 0;
`
const StyledProgressBar = styled(StyledProgressContainer)`
    box-sizing: border-box;
    width: ${({ width }) => width || "0"};
    height: 100%;
    background-color: ${({width}) => {
        let newWidth = width.replace(/\D/g, "")
        newWidth = parseInt(newWidth)
        if (newWidth >= 85) return "#05c77d"
        else if (newWidth >= 70) return "#FFB3BA"
        else if (newWidth >= 55) return "#ffb866"
        else if (newWidth >= 30) return "#e6e634"
        else return "#ff4d4d"
    }};
`
const TodayProgressBar = styled(StyledProgressBar)`
    background-color: #b324b3;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.6rem;
    font-weight: 600;
    @media (max-width: 480px){
    font-size: 1.1rem;
  }
`

const ProgressBar = ({ progress, dayNum }) => {
    let today = new Date()
    today = today.getDay()
    return (
        <StyledProgressContainer>
            {today !== dayNum && <StyledProgressBar width={progress} />}
            {today === dayNum && <TodayProgressBar width={progress} >{progress}</TodayProgressBar>}
            
        </StyledProgressContainer>
    )
}
export default ProgressBar