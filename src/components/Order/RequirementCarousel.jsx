import { ImageList, ImageListItem } from '@mui/material';
import SwipeableTextMobileStepper, { images } from '../ImagesList/Carousel';
import './RequirementCarousel.css';

const RequirementCarousel = (img) => {
  console.log(img.img);

  const imgArr =
    img &&
    img?.img?.map((item) => ({
      url: item.url,
    }));

  return (
    <>
      <SwipeableTextMobileStepper
        images={imgArr || []}
        style={{ m: 'auto', width: '150px' }}
      />
    </>
  );
};

export default RequirementCarousel;
