import BlogCard from "@/components/ui/BlogCard";
import { Blog } from "@/types";
import { Metadata } from "next";


export const metaData : Metadata = {
    title :"NexaBlog | Blogs"
}

const BlogsPage = async () => {
    const res = await fetch("http://localhost:5000/blogs", {
        cache: "no-store"
    });
    const blogs = await res.json();
    console.log(blogs)
    return (
        <div className="w-[90%] mx-auto">
            <h1 className="text-3xl text-center my-5 font-bold">
                Explore All  <span className="text-teal-600">Blogs</span>
            </h1>
            <p className="text-center text-gray-400 w-2/5 mx-auto">
                <i>
                    Dive into the fascinating world of quantum computing, where unlocking
                    unprecedented computational power.
                </i>
            </p>

            <div className="grid grid-cols-3 my-5 gap-6">
                {blogs.map((blog: Blog) => <BlogCard blog={blog} key={blog.id} />)}
            </div>
        </div>
    );
};

export default BlogsPage;