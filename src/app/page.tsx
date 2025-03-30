'use client';

import { useEffect, useState } from "react";
import Masonry from "./components/Masonry/Masonry";
import GalleryGrid from "./components/GalleryGrid";

export default function Home() {

    const [data, setData] = useState([]);

    const fetchData = async() => {
        const result = await fetch("https://ghiblimatic.onrender.com/api/artworks");
                
        console.log(result);
        const data = await result.json();
        console.log(data);
        setData(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="h-screen w-screen bg-gradient-to-br from-[#E3F2FD] 
        via-[#F8E8EE] to-[#FFF7E3] overflow-x-hidden">
            <div className="pt-20">
                {
                    // data.length > 0 && <Masonry data={data} />
                    data.length > 0 && <GalleryGrid data={data} />
                }
            </div>
        </div>
    )
}
//     { id: 1, image: 'https://imgs.search.brave.com/KzdCNdiXme5tHJ8ynYmwEscmUJLSE8OE4pBj6fPdZsk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aGluZHVzdGFudGlt/ZXMuY29tL2h0LWlt/Zy9pbWcvMjAyNS8w/My8yOS9vcmlnaW5h/bC9DaGF0R1BUX18x/NzQzMjMwNjMwMzI3/LmpwZWc', height: 500, insta: "abcs" },
//     { id: 2, image: 'https://imgs.search.brave.com/gSwpT41LHZVAJg_8xJCWpnbtdDaFUnJZ6REgoXYucew/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aGluZHVzdGFudGlt/ZXMuY29tL2h0LWlt/Zy9pbWcvMjAyNS8w/My8yOS81NTB4MzA5/L0NoYXRHUFRfXzE3/NDMyMjg5ODM3MDFf/MTc0MzIyODk5NDE1/MC5qcGVn', height: 400, insta: "abcs" },
//     { id: 3, image: 'https://imgs.search.brave.com/pSE9P0LArFTfKgJHxDh7BzcHf_psvS62c1ZU2F3vVPs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jLm5k/dHZpbWcuY29tLzIw/MjUtMDMvODVqaXBv/aF9zdHVkaW8tZ2hp/YmxpLV82MjV4MzAw/XzI5X01hcmNoXzI1/LmpwZWc_ZG93bnNp/emU9NzczOjQzNQ', height: 450, insta: "abcs" },
//     { id: 4, image: 'https://imgs.search.brave.com/YUV9EgUrXr7_6HS1czUjafsKI5iERCBzlDhCSz1PjW4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY25iY3R2MTgu/Y29tL3VwbG9hZHMv/MjAyNS8wMy9naWJo/bGktaGVyYS1waGVy/aS0yMDI1LTAzLWMw/YTU3NjgzMTI4MTk2/NGE4YzY2MDQxN2Zl/ZGQ1Nzc1LmpwZz9p/bXBvbGljeT13ZWJz/aXRlJndpZHRoPTY0/MCZoZWlnaHQ9MzYw', height: 400, insta: "abcs" },
//     { id: 5, image: 'https://imgs.search.brave.com/TjdcLlq_PqoF2cSlP8hcG9bNyL_ftCCbHb1mI8Dd0TA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaW5kaWFuZXhw/cmVzcy5jb20vMjAy/NS8wMy9PcGVuQUkt/SW1hZ2UtZ2VuZXJh/dG9yLTEuanBnP3c9/NjQw', height: 450, insta: "abcs" },
//     { id: 6, image: 'https://imgs.search.brave.com/Pcbo4s7J9GNl5A3NVgIBb0CLOPYeZG2CJ1C-_1a-YyY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jLm5k/dHZpbWcuY29tLzIw/MjUtMDMvNDRtb2tw/cWdfc3R1ZGlvLWdo/aWJsaS1fNjI1eDMw/MF8yOF9NYXJjaF8y/NS5qcGc_aW09RmVh/dHVyZUNyb3AsYWxn/b3JpdGhtPWRubix3/aWR0aD03NzMsaGVp/Z2h0PTQzNQ', height: 500, insta: "abcs" },
//     { id: 7, image: 'https://m.economictimes.com/thumb/msid-119638556,width-1200,height-900,resizemode-4,imgsize-2105314/ghibli-art.jpg', height: 350, insta: "abcs" },
//     { id: 8, image: 'https://www.livemint.com/lm-img/img/2025/03/28/600x338/Gm8d8AObYAImwUr_1743126963833_1743126970437.jfif', height: 425, insta: "abcs" },
//     { id: 9, image: 'https://images.news18.com/ibnlive/uploads/2025/03/ghibli-open-ai-trend-2025-03-4a1370fc180137fe2ae4811921c4f903-16x9.png?impolicy=website&width=640&height=360', height: 375, insta: "abcs" },
//     { id: 10, image: 'https://d3pc1xvrcw35tl.cloudfront.net/ln/images/1200x900/ghibli-art-by-chatgpt_202503898670.jpeg', height: 500, insta: "abcs" },
//     { id: 11, image: 'https://imgs.search.brave.com/KzdCNdiXme5tHJ8ynYmwEscmUJLSE8OE4pBj6fPdZsk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aGluZHVzdGFudGlt/ZXMuY29tL2h0LWlt/Zy9pbWcvMjAyNS8w/My8yOS9vcmlnaW5h/bC9DaGF0R1BUX18x/NzQzMjMwNjMwMzI3/LmpwZWc', height: 500, insta: "abcs" },
//     { id: 12, image: 'https://imgs.search.brave.com/gSwpT41LHZVAJg_8xJCWpnbtdDaFUnJZ6REgoXYucew/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aGluZHVzdGFudGlt/ZXMuY29tL2h0LWlt/Zy9pbWcvMjAyNS8w/My8yOS81NTB4MzA5/L0NoYXRHUFRfXzE3/NDMyMjg5ODM3MDFf/MTc0MzIyODk5NDE1/MC5qcGVn', height: 400, insta: "abcs" },
//     { id: 13, image: 'https://imgs.search.brave.com/pSE9P0LArFTfKgJHxDh7BzcHf_psvS62c1ZU2F3vVPs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jLm5k/dHZpbWcuY29tLzIw/MjUtMDMvODVqaXBv/aF9zdHVkaW8tZ2hp/YmxpLV82MjV4MzAw/XzI5X01hcmNoXzI1/LmpwZWc_ZG93bnNp/emU9NzczOjQzNQ', height: 450, insta: "abcs" },
//     { id: 14, image: 'https://imgs.search.brave.com/YUV9EgUrXr7_6HS1czUjafsKI5iERCBzlDhCSz1PjW4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY25iY3R2MTgu/Y29tL3VwbG9hZHMv/MjAyNS8wMy9naWJo/bGktaGVyYS1waGVy/aS0yMDI1LTAzLWMw/YTU3NjgzMTI4MTk2/NGE4YzY2MDQxN2Zl/ZGQ1Nzc1LmpwZz9p/bXBvbGljeT13ZWJz/aXRlJndpZHRoPTY0/MCZoZWlnaHQ9MzYw', height: 400, insta: "abcs" },
// ];