import Footer from "@/components/landingPage/Footer";
import Navbar from "@/components/landingPage/Navbar";
import BlogCard from "./BlogCard";

export default function Blog(){
    return(
        <div >
            <div className="pt-5">
                <Navbar />    
            </div>

            <div className="h-screen px-[340px] py-14">
                <div className="flex flex-col gap-6">
                    <h1 className="text-5xl font-bold tracking-tighter">Blog</h1>
                    <p className="text-xl text-muted-foreground">A blog built using Contentlayer. Posts are written in MDX.</p>
                </div>

                <hr className="my-8"></hr>
                <div>
                    <BlogCard/>
                </div>
            </div>

            <Footer/>
        </div>
    )
}