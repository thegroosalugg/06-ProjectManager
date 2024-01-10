import image01 from '../assets/image-01.jpg';
import image02 from '../assets/image-02.jpg';
import image03 from '../assets/image-03.jpg';
import image04 from '../assets/image-04.jpg';
import image05 from '../assets/image-05.jpg';

export default function Homepage() {
  return (
      <img
        src={image05}
        alt="wallpaper"
        className="mx-auto md:mx-20 my-auto border-2 border-stone-400"
      />
  );
}
