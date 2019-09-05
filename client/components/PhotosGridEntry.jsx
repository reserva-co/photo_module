/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

const PhotosGridDiv = styled.div`
  float: left;
  box-sizing: border-box;
  background: #000;
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
  transition: width 1s;
  
  &:hover {
    width: 110%;
    position: relative;
    transition-property: width;
    transition-duration: 1s;
  };
`;

function PhotosGridEntry(props) {
  // eslint-disable-next-line object-curly-newline
  const { photo, openSlideShow, wideGrid, fullGrid, hoverEffect } = props;
  return (
    <PhotosGridDiv photo={photo} wideGrid={wideGrid} fullGrid={fullGrid}>
      <PhotosGridImg
        src={photo.url}
        alt={photo.desc}
        onClick={() => openSlideShow(photo.slide_id)}
        className='hoverPhoto'
        onMouseOver={() => { hoverEffect(photo.slide_id, false); }}
        onMouseOut={() => { hoverEffect(photo.slide_id, true); }}
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
