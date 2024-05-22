import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const sizes = {
  normal: css`
    width: 150px;
  `,
  large: css`
    width: 200px;
  `,
  huge: css`
    width: 300px;
  `,
  enormous: css`
    width: 450px;
  `,
};

const Card = styled.div`
  ${({ top, left }) =>
    top && left
      ? css`
          position: absolute;
          top: ${top};
          left: ${left};
          transform: translate(-50%, -50%)
            rotate(${({ rotation }) => rotation || 0}deg);
        `
      : css`
          position: relative;
        `}
  background-color: ${({ noFrame }) => (noFrame ? "transparent" : "white")};
  border: ${({ noFrame }) => (noFrame ? "none" : "10px solid white")};
  ${({ size }) => sizes[size] || sizes.normal}
  box-shadow: ${({ noFrame }) =>
    noFrame ? "none" : "0 4px 8px rgba(0, 0, 0, 0.1)"};
  text-align: center;
  z-index: ${({ zIndex }) => zIndex || 1};
  filter: ${({ isBlurred, extraBlur }) =>
    `blur(${isBlurred ? 5 : extraBlur}px)`};
  transition: filter 1s ease-out;
`;

const Photo = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const Title = styled.h3`
  font-size: 1em;
  margin: 5px 0;
`;

const Description = styled.p`
  font-size: 0.8em;
  margin: 5px 0;
`;

const PhotoCard = ({ photo, style }) => {
  const [isBlurred, setIsBlurred] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBlurred(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const noFrame = !photo.title && !photo.description;

  return (
    <Card
      style={{ ...style }}
      top={style.top}
      left={style.left}
      isBlurred={isBlurred}
      extraBlur={photo.extraBlur}
      rotation={photo.rotation}
      size={photo.size}
      zIndex={photo.zIndex}
      noFrame={noFrame}
    >
      <Photo src={photo.url} alt={photo.title} />
      {!noFrame && (
        <>
          <Title>{photo.title}</Title>
          <Description>{photo.description}</Description>
        </>
      )}
    </Card>
  );
};

PhotoCard.propTypes = {
  photo: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    size: PropTypes.oneOf(["normal", "large", "huge", "enormous"]).isRequired,
    rotation: PropTypes.number,
    extraBlur: PropTypes.number,
    zIndex: PropTypes.number,
  }).isRequired,
  style: PropTypes.object,
};

export default PhotoCard;
