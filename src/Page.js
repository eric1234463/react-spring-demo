import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { animated, useTransition } from 'react-spring';


const PageWrapper = styled(animated.span)`
  vertical-align: middle;
  text-align: center;
  padding: 50px;
`;

const Page = () => {
  const pages = [
    ({ style }) => <PageWrapper style={{ background: 'lightpink' }}>A</PageWrapper>,
    ({ style }) => <PageWrapper style={{ background: 'lightblue' }}>B</PageWrapper>,
    ({ style }) => <PageWrapper style={{ background: 'lightgreen' }}>C</PageWrapper>,
  ]
  const [index, set] = useState(0)

  const onClick = useCallback(() => set(state => (state + 1) % 3), [])
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  return (
    <div onClick={onClick}>
      {transitions.map(({ item, props, key }) => {
        const Page = pages[item]
        return <Page key={key} style={props} />
      })}
    </div>
  )
}

export default Page;