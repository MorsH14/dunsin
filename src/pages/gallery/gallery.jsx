import React from 'react';
import "./gallery.css";

const Gallery = () => {
  return (
    <div className="">
    <div className="galleryPage">
      
      <div className='galleryContainer'>
        <div className="gallery">
          <h2>Checkout Some of Our Amazing Pictures</h2>
          <div className="imgGallery">
            <div className="galleryImgContainer">
              <img src="/assets/wedding/DSC_9524.JPG" alt="" className='galleryImg'/>
            </div>
            <div className="galleryImgContainer">
              <img src="/assets/wedding/DSC_1902.JPG" alt="" className='galleryImg'/>
            </div>
            <div className="galleryImgContainer">
              <img src="/assets/wedding/DSC_1896.JPG" alt="" className='galleryImg'/>
            </div>
            <div className="galleryImgContainer">
              <img src="/assets/wedding/DSC_4214.jpg" alt="" className='galleryImg'/>
            </div>
            <div className="galleryImgContainer">
              <img src="/assets/Studio/DSC_3055.JPG" alt="" className='galleryImg'/>
            </div>
            <div className="galleryImgContainer">
              <img src="/assets/Studio/DSC_3842.JPG" alt="" className='galleryImg'/>
            </div>
            <div className="galleryImgContainer">
              <img src="/assets/Studio/DSC_8404.JPG" alt="" className='galleryImg'/>
            </div>
            <div className="galleryImgContainer">
              <img src="/assets/outdoor/DSC_6227.JPG" alt="" className='galleryImg'/>
            </div>
            <div className="galleryImgContainer">
              <img src="/assets/outdoor/DSC_6230.JPG" alt="" className='galleryImg'/>
            </div>
          </div>
        </div>
      </div>
    </div>

    <a href='https://www.instagram.com/' className='linkTag'>
        <div className="appointment flex-center linkTag">
          <button>Explore More!</button>
        </div>
      </a>
          </div>
  );
}

export default Gallery;
