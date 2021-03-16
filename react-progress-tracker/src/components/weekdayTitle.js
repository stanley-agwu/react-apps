import React from 'react'
import styled from 'styled-components'

const StyledWeekdayTitle = styled.div`
  width: 50px;
  height: 100%;
  border-right: 3px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  color: #ff6961;
`
const StyledWeekendTitle = styled(StyledWeekdayTitle)`
  background-color: lightgrey;
  border-radius: 7px 0 0 7px;
`
const WeekdayTitle = ({ day }) => {
  const isWeekday = day !== "S"
  return (
    <>
      {(isWeekday) && <StyledWeekdayTitle>{day}</StyledWeekdayTitle>}
      {(!isWeekday) &&<StyledWeekendTitle>{day}</StyledWeekendTitle>}
    </>
    )

}
export default WeekdayTitle