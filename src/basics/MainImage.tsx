import React from 'react';
import styled from 'styled-components';

const MainImageOuter = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 256px;

  & img {
    width: 100%;
  }
`;

const MainImage: React.FC = () => {
  const src = 'https://image.shutterstock.com/image-photo/funny-portrait-hero-260nw-410898763.jpg';
  return (
    <MainImageOuter className="MainImage">
      <img src={src} alt=""/>
    </MainImageOuter>
  );
};

export default MainImage;
