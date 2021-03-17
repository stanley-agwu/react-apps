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
        if (newWidth >= 80) return "green"
        else if (newWidth >= 60) return "yellow"
        else if (newWidth >= 40) return "orange"
        else return "red"
    }};
`

const ProgressBar = ({ progress }) => {
    return (
        <StyledProgressContainer>
            <StyledProgressBar width={progress} />
        </StyledProgressContainer>
    )
}
export default ProgressBar