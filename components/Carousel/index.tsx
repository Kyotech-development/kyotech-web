
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const CarouselComponent = () => (
  <Carousel showThumbs={false} autoPlay showArrows={false} width="100%" interval={3000} infiniteLoop={true}>
    <div>
      <img src="/assets/kyoInfo1.png" />
    </div>
    <div>
      <img src="/assets/kyoInfo2.png" />
    </div>
    <div>
      <img src="/assets/kyoInfo3.png" />
    </div>
  </Carousel>
);

export default CarouselComponent;