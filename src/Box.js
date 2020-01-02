import React from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';
import { useDrag } from 'react-use-gesture';

const BoxWrapper = styled(animated.div)`
  width: 80px;
  height: 80px;
  background: hotpink;
  border-radius: 16px;
  position: absolute;
`;

const Box = () => {
  const [{ x, y }, set] = useSpring(() => ({ x: 0, y: 0 }))

  const bind = useDrag(({ down, movement: [mx, my] }) => {
    set({ x: down ? mx : 0, y: down ? my : 0 })
  })

  return (
    <BoxWrapper {...bind()} style={{ left: x, top: y }}></BoxWrapper>
  )
}

export default Box;
