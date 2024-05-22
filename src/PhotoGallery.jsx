import React from "react";
import styled from "styled-components";
import PhotoCard from "./PhotoCard";
import { pizzaPhotos } from "./data/pizzaPhotos";

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
  padding: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 150px auto;
  text-align: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 10px;
    padding: 10px;
    margin: 50px auto;
    width: auto;
    text-align: center;
  }
`;

const PhotoGallery = () => {
  return (
    <GalleryContainer>
      {pizzaPhotos.map((photo, index) => (
        <PhotoCard
          key={index}
          photo={photo}
          style={{ display: "inline-block" }}
        />
      ))}
    </GalleryContainer>
  );
};

export default PhotoGallery;
