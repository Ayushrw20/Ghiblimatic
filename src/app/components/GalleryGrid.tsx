interface ImageData {
  id: string;
  image: string;
  insta: string;
}

interface GalleryGridProps {
  data: ImageData[];
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ data }) => {
  const handleImageClick = (username: string) => {
    window?.open(`https://www.instagram.com/${username}`, '_blank')?.focus();
  };
                          
  return (
    <div className="columns-2 md:columns-3 lg:columns-4 gap-4 p-4 space-y-4">
      {data.map((image, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-xl shadow-md cursor-pointer"
          onClick={() => handleImageClick(image.insta)}
        >
          <img
            src={image.image}
            className="w-full object-cover rounded-xl"
            loading="lazy"
            alt={image.insta}
          />
          {/* Username Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-white text-sm">
            {image.insta}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;