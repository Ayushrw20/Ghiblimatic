'use client';

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IoIosAddCircleOutline } from "react-icons/io";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

type NavbarPropType = {
    handleSearchFn: (value: string) => void,
    userCount: number
}

function Navbar({handleSearchFn, userCount}: NavbarPropType) {

    const [username, setUsername] = useState('');
    const [file, setFile] = useState<File | null>(null);
    const [uploadStatus, setUploadStatus] = useState<string>('Upload');
    const [search, setSearch] = useState<string>('');

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
          setFile(selectedFile);
        }
    };

    const handleUpload = () => {
        if (!file) {
            alert("Please select a file to upload.");
            return;
        }

        if(username.length < 5) {
            alert("Please enter a valid insta username");
            return;
        }   

        const formData = new FormData();
        formData.append("image", file);
        formData.append("instaId", username);
        setUploadStatus('Uploading');
        fetch("https://ghiblimatic.onrender.com/api/artworks/upload", {
            method: "POST",
            body: formData,
        })
        .then(response => response.json())
        .then(data => { 
            console.log("Upload successful:", data);
            alert("File uploaded successfully!");
            window.location.reload();
            setFile(null);
            setUsername("");
        })
        .catch(error => {
            console.error("Upload failed:", error);
            alert("File upload failed. Please try again.");
        });
    };

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearch(value);
        handleSearchFn(value);
    };

    return (
        <nav className="h-[11vh] w-full fixed z-10 flex items-center justify-between px-5 backdrop-blur-md max-sm:px-3">
            <h1 className="text-4xl font-semibold pt-1 text-black mr-12 max-sm:text-xl max-sm:mr-4 cursor-pointer" 
            title="Developed by Ayush and Abhishek"> 
                GhibliMatic 
            </h1>
            <div className="w-[35%] max-sm:w-[60%] flex items-center gap-4 max-sm:gap-2 justify-end">
                <Input type="text" placeholder="Search..." className="bg-white focus:border-none" value={search} onChange={handleSearch}  />  
                <Dialog>
                    <DialogTrigger>
                        <Button variant="default">  
                            <IoIosAddCircleOutline />
                            <p className="font-bold max-sm:hidden"> 
                                Upload
                            </p>
                        </Button>  
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                        <DialogTitle>Lets Ghibli-fy the world!</DialogTitle>
                        <DialogDescription className="flex flex-col gap-3 py-4">         
                            <Input type="text" 
                            placeholder="Enter your Instgram" className="bg-white focus:border-none"
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} />  
                            <Input id="picture" type="file" className="bg-white" onChange={handleFileChange} />
                            <Button className="font-bold" 
                            onClick={handleUpload} disabled={uploadStatus != 'Upload'}>
                                {uploadStatus}
                            </Button>
                        </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>        
                <p className="text-xs max-sm:hidden text-center">{userCount} users</p>
            </div>
        </nav>
    )
}
    
export default Navbar;