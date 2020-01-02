import React, { useState } from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';
import logo from './logo.svg';
import Box from './Box';
import Page from './Page';

const RotatingElement = styled(animated.img).attrs(({ angle }) => ({
  style: {
    transform: angle.interpolate(a => `rotate(${a}deg)`)
  }
}))`
  width: 300px;
  height: 300px;
  margin: 0 auto;
  margin-top: auto;
`;

const Wrapper = styled(animated.div)`
  width: 300px;
`;

function App() {
  const { angle } = useSpring({
    from: { angle: 360 }, 
    to: async next => {
      while (1) {
        await next({ angle: 0 });
      }
    },

    config: { duration: 3000 },
    reset: true
  });

  const [isClicked, setIsClicked] = useState(false);

  const props = useSpring({
    opacity: isClicked ? 1 : 0,
    marginTop: isClicked ? 0 : 500
  });

  const handleOnClick = () => {
    setIsClicked(!isClicked);
  }

  return (
    <div className="App">
      <RotatingElement angle={angle} src={logo}></RotatingElement>
      <Wrapper style={props}>Hello World</Wrapper>
      <button onClick={handleOnClick}>Click Me</button>
      <Box></Box>
      <Page></Page>
    </div>
  );
}

export default App;
