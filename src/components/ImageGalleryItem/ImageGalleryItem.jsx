import React from 'react';
import style from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ webformatURL, largeImageURL, onClick }) => {
    return (
      <li className={style.ImageGalleryItem} onClick={onClick}>
        <img src={webformatURL} alt="" />
      </li>
    );
  };
  
  ImageGalleryItem.propTypes = {
    url: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  export default ImageGalleryItem;
  