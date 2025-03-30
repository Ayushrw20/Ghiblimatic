'use client';
            
import { useEffect, useState } from "react";
import GalleryGrid from "./components/GalleryGrid";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

type ItemType = {
    image: string,
    insta: string
}

export default function Home() {

    const [data, setData] = useState([]);
    const [draft, setDraft] = useState([]);
    const [uniqueInstaCount, setUniqueInstaCount] = useState(0);

    const handleSearch = (value: string) => {
        setData([...draft]);
        if(value.length == 0) {
            setData([...draft]);
        } else {
            const filteredData = draft.filter((item: ItemType) => item.insta.toLowerCase().includes(value.toLowerCase()));
            setData(filteredData);
        }
    }
                
    const fetchData = async() => {
        const result = await fetch("https://ghiblimatic.onrender.com/api/artworks");

        console.log(result);
        const data = await result.json();
        console.log(data);
        setData(data);
        setDraft(data);
        const uniqueIds = new Set(data.map((art: ItemType) => art.insta).filter(Boolean));
        setUniqueInstaCount(uniqueIds.size);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="h-screen w-screen bg-gradient-to-br from-[#E3F2FD] 
        via-[#F8E8EE] to-[#FFF7E3] overflow-x-hidden">
            <Navbar handleSearchFn={handleSearch} userCount={uniqueInstaCount} />
            <div className="pt-20">
                {
                    // data.length > 0 && <Masonry data={data} />
                    data.length > 0 && <GalleryGrid data={data} />
                }
                {
                    data.length == 0 && <p className="flex items-center w-screen justify-center">Loading...</p>
                }
            </div>
            <Footer />
        </div>
    )
}