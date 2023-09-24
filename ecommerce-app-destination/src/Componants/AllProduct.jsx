import React from 'react'
import styled from 'styled-components'

const AllProduct = () => {
  return (
    <DIV>
    <div>
      hello I am product page
    </div>
    </DIV>
  )
}

export default AllProduct

const DIV= styled.div`
border:2px solid blue;
margin: auto;
width: 85%;

@media only screen and (min-width: 280px) and (max-width: 667px) {
  width:100%;
}
`