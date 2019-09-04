import React from 'react';
import PropTypes from 'prop-types';

const PhotosGridDiv = styled.div`
  float: left;
  box-sizing: border-box;
  width: ${(props) => (props.wideGrid ? '100%' : '50%')};
  height: ${(props) => (props.fullGrid ? '100%' : '175px')};
  border: 1px solid #444;
  margin: none;
  padding: none;
  overflow: hidden;
`;

const PhotosGridImg = styled.img`
  width: 100%;
  min-width: 225px;
  min-height: 175px;
  height: auto;
  margin: none;
`;

function PhotosGridEntry(props) {
  // eslint-disable-next-line object-curly-newline
  const { photo, openSlideShow, wideGrid, fullGrid } = props;
  return (
    <PhotosGridDiv photo={photo} wideGrid={wideGrid} fullGrid={fullGrid}>
      <PhotosGridImg
        src={photo.url}
        alt={photo.desc}
        onClick={() => openSlideShow(photo.slide_id)}
      />
    </PhotosGridDiv>
  );
}

PhotosGridEntry.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  photo: PropTypes.object.isRequired,
  openSlideShow: PropTypes.func.isRequired,
  wideGrid: PropTypes.bool.isRequired,
  fullGrid: PropTypes.bool.isRequired,
};


export default PhotosGridEntry;
