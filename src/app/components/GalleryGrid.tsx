function GalleryGrid({data}: any) {

    const handleImageClick = (username: string) => {
      window?.open('https://www.instagram.com/' + username, '_blank')?.focus();
    }
      
    return (        
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 p-4 space-y-4">
        {data.map((image: any, index: any) => (
        <div key={index} className="relative overflow-hidden rounded-xl shadow-md" onClick={() => handleImageClick(image.insta)}>
          <img
            src={image.image}
            className="w-full object-cover rounded-xl"
            loading="lazy"
          />
          {/* Username Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-white text-sm">
            {image.insta}
          </div>
        </div>
      ))}
    </div>
    )
}

export default GalleryGrid;