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
        
function Navbar() {
    return (
        <nav className="h-[11vh] w-full fixed z-10 flex items-center justify-between px-5 backdrop-blur-md max-sm:px-3">
            <h1 className="text-4xl font-semibold pt-1 text-black mr-12 max-sm:text-2xl max-sm:mr-4">
                Ghiblimatic 
            </h1>
            <div className="w-[35%] max-sm:w-[60%] flex gap-4 max-sm:gap-2">
                <Input type="text" placeholder="Search..." className="bg-white focus:border-none" />  
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
                            <Input type="text" placeholder="Enter your Instgram Username" className="bg-white focus:border-none" />  
                            <Input id="picture" type="file" className="bg-white" />
                            <Button className="font-bold">Upload</Button>
                        </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>        
            </div>
        </nav>
    )
}
    
export default Navbar;