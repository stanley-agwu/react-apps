import React from 'react'
import styled from 'styled-components'

const StyledProgressContainer = styled.div`
    width: 300px;
    height: 100%;
    border-radius: 0 7px 7px 0;
`
const StyledProgressBar = styled(StyledProgressContainer)`
    box-sizing: border-box;
    width: ${({ width }) => width || "0"};
    height: 100%;
    background-color: red;
`

const ProgressBar = ({ width }) => {
    return (
        <StyledProgressContainer>
            <StyledProgressBar width={width} />
        </StyledProgressContainer>
    )
}
export default ProgressBar