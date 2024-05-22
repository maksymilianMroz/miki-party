import styled from "styled-components";
import PropTypes from "prop-types";
import PhotoCard from "./PhotoCard";

const Grid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  @media (max-width: 768px) {
    position: relative;
    top: unset;
    left: unset;
    height: auto;
  }
`;

const PhotoGrid = ({ photos }) => (
  <Grid>
    {photos.map((photo, index) => (
      <PhotoCard
        key={index}
        photo={photo}
        style={{ top: photo.top, left: photo.left }}
      />
    ))}
  </Grid>
);

PhotoGrid.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      top: PropTypes.string.isRequired,
      left: PropTypes.string.isRequired,
      size: PropTypes.oneOf(["normal", "large", "huge"]).isRequired,
    })
  ).isRequired,
};

export default PhotoGrid;
