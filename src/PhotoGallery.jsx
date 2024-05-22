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
`;

const PhotoGallery = () => {
  const setPhotoHeight = (height) => {
    return {
      height: `${height}px`,
      overflow: "hidden",
    };
  };

  return (
    <GalleryContainer>
      {pizzaPhotos.map((photo, index) => (
        <PhotoCard key={index} photo={photo} style={setPhotoHeight(450)} />
      ))}
    </GalleryContainer>
  );
};

export default PhotoGallery;
