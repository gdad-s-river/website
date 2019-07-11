import styled from '@emotion/styled'
import React from 'react'

const MindBlowStyles = styled.div`
  font-size: 3rem;
  text-align: center;
`

const MindBlownEmoji = () => (
  <MindBlowStyles>
    <span role="img" aria-label="mind blowing emoji">
      🤯
    </span>
  </MindBlowStyles>
)

export default MindBlownEmoji
