import image1 from "../../assets/banner/images (3).jpg";
import image2 from "../../assets/banner/images (4).jpg";
import image3 from "../../assets/banner/download (4).jpg";
import image4 from "../../assets/banner/images (9).jpg";
import image5 from "../../assets/banner/download (1).jpg";
import image6 from "../../assets/banner/download (5).jpg";
import image7 from "../../assets/banner/images (9).jpg";
import image8 from "../../assets/banner/images.jpg";
import image9 from "../../assets/banner/images.jpg";
import image10 from "../../assets/banner/images (6).jpg";

const Gallery = () => {
  return <div className="mt-12">
    <h2 className="font-bold text-2xl text-center w-48 tracking-widest p-2 mx-auto border-cyan-600 border-b-8">Toy Gallery</h2>
    <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
	<div className="container grid grid-cols-2 gap-4 py-4 mx-auto md:grid-cols-4">
		<img src={image9} alt="" className="w-full h-full border-2 p-4 border-gray-200 shadow-lg col-span-2 row-span-2 rounded-lg min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
		<img alt="" className="w-full h-full border-2 p-4 border-gray-200 shadow-lg rounded-lg min-h-48 dark:bg-gray-500 aspect-square" src={image3} />
		<img alt="" className="w-full h-full border-2 p-4 border-gray-200 shadow-lg rounded-lg min-h-48 dark:bg-gray-500 aspect-square" src={image4} />
		<img alt="" className="w-full h-full border-2 p-4 border-gray-200 shadow-lg rounded-lg min-h-48 dark:bg-gray-500 aspect-square" src={image5} />
		<img alt="" className="w-full h-full border-2 p-4 border-gray-200 shadow-lg rounded-lg min-h-48 dark:bg-gray-500 aspect-square" src={image6} />
		<img alt="" className="w-full h-full border-2 p-4 border-gray-200 shadow-lg rounded-lg min-h-48 dark:bg-gray-500 aspect-square" src={image7} />
		<img alt="" className="w-full h-full border-2 p-4 border-gray-200 shadow-lg rounded-lg min-h-48 dark:bg-gray-500 aspect-square" src={image8} />
		<img alt="" className="w-full h-full border-2 p-4 border-gray-200 shadow-lg rounded-lg min-h-48 dark:bg-gray-500 aspect-square" src={image1} />
		<img alt="" className="w-full h-full border-2 p-4 border-gray-200 shadow-lg rounded-lg min-h-48 dark:bg-gray-500 aspect-square" src={image10} />
		<img src={image2} alt="" className="w-full h-full border-2 p-4 border-gray-200 shadow-lg col-span-2 row-span-2 rounded-lg min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
	</div>
</section>
  </div>;
};

export default Gallery;
