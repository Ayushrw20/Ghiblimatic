function GalleryGrid({data}: any) {
    return (        
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 p-4">
        {data.map((image: any, index: any) => (
            <div
            key={index}
            className="relative bg-gray-200 rounded-xl overflow-hidden 
            shadow-md"
            >
            <img
                src={image.image}
                className="w-full h-52 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 text-white text-sm">
                {image.username}
            </div>
            </div>
        ))}
        </div>
    )
}

export default GalleryGrid;