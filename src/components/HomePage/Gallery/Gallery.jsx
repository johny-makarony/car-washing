import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Slider from 'react-slick';

import { getGallery } from 'redux/gallery/galleryOperations';
import { selectGallery } from 'redux/gallery/gallerySelectors';

import lanos from '../../../images/lanos.webp';
import panamera from '../../../images/panamera.webp';

export const Gallery = () => {
  const gallery = useSelector(selectGallery);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGallery());
  }, [dispatch]);

  console.log(gallery);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    rows: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 2,
          arrows: false,
        },
      },
    ],
  };
  return (
    <section className="section" id="gallery">
      <div className="container">
        <h2 className="section__title">Наші роботи</h2>
        <Slider {...settings}>
          {[
            { image: lanos, description: 'До' },
            { image: panamera, description: 'Після' },
            { image: lanos, description: 'До' },
            { image: panamera, description: 'Після' },
            { image: lanos, description: 'До' },
            { image: panamera, description: 'Після' },
          ].map((item, index) => (
            <div className="image-container" key={index}>
              <img src={item.image} alt="Example" width="100%" height="100%" />
              <h3 className="description">{item.description}</h3>
            </div>
          ))}
          {/* {gallery.map((item, index) => (
            <div key={item._id}>
              <div className="image-container">
                <img
                  src={item.beforePhoto.url}
                  alt="Example"
                  width="100%"
                  height="100%"
                />
                <h3 className="description">До</h3>
              </div>
              <div className="image-container">
                <img
                  src={item.afterPhoto.url}
                  alt="Example"
                  width="100%"
                  height="100%"
                />
                <h3 className="description">Після</h3>
              </div>
            </div>
          ))} */}
        </Slider>
      </div>
    </section>
  );
};
