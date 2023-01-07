import React from 'react';
import styled, { keyframes } from 'styled-components';

const Wrapper = styled.picture`
  position: relative;
`;

const skeletonAnimation = keyframes`
  from {
    background-position: 0px;
  }
  to {
    background-position: -200%;
  }
`;

const Skeleton = styled.div`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: 200px;
  background-image: linear-gradient(
    90deg,
    #171717 0px,
    #222222 50%,
    #171717 100%
  );
  background-color: #eee;
  position: absolute;
  top: 0px;
  background-size: 200%;
  animation: ${skeletonAnimation} 1.5s infinite linear;
`;

const Content = styled.img`
  opacity: 0;
  display: block;
  object-fit: cover;
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : 'max-content')};

  transition: 0.3s;
`;

function Image({ src, alt, width, height }) {
  const [skeleton, setSkeleton] = React.useState(true);

  function handleLoad({ target }) {
    setSkeleton(false);
    target.style.opacity = '1';
  }

  return (
    <Wrapper>
      {skeleton && <Skeleton/>}
      <Content
        onLoad={handleLoad}
        width={width}
        height={height}
        src={src}
        alt={alt}
      />
    </Wrapper>
  );
}

export default Image;
