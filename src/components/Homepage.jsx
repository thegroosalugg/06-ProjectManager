import { useState, useEffect } from "react";
import image01 from "../assets/image-01.jpg";
import image02 from "../assets/image-02.jpg";
import image03 from "../assets/image-03.jpg";
import image04 from "../assets/image-04.jpg";
import image05 from "../assets/image-05.jpg";

const images = [image01, image02, image03, image04, image05];

export default function Homepage() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the current image index
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000); // Change image every 8000ms

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  return (
    <>
      <img
        src={images[currentImage]}
        alt="wallpaper"
        className="ml-10 md:ml-20 mr-5 md:mr-10 my-auto border-2 border-stone-400"
      />
      <p className="flex flex-col max-w-40 text-stone-900 text-justify my-auto text-xs md:text-base mr-10">
        You have no projects open. Select a project or create a new one You have
        no projects open. Select a project or create a new one You have no
        projects open. Select a project or create a new one You have no projects
        open. Select a project or create a new one You have no projects open.
        Select a project or create a new one
      </p>
    </>
  );
}
