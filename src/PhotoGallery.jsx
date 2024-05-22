import React from "react";
import styled from "styled-components";
import PhotoCard from "./PhotoCard";
import { pizzaPhotos } from "./data/pizzaPhotos";

const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  padding: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 150px auto;
  text-align: center;
  z-index: 12;

  @media (max-width: 768px) {
    gap: 10px;
    padding: 10px;
    margin: 50px auto;
    z-index: 20; /* Increase z-index */
    position: relative;
  }
`;

const PhotoGallery = () => {
  return (
    <GalleryContainer>
      {pizzaPhotos.map((photo, index) => (
        <PhotoCard key={index} photo={photo} style={{}} />
      ))}
    </GalleryContainer>
  );
};

export default PhotoGallery;
