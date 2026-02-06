import Card from "@/app/(components)/card/Card";
import blogsFile from "./blogs.json"
import HeroContainer from "@/app/(components)/hero/HeroContainer";

interface IBlogsFile {
    title: string,
    description: string,
    thumbnail_url: string,
    link: string
}

function truncateString(string: string, delimeter: number = 50): string {
    let truncated_string = string

    if (truncated_string.length > delimeter) {
        
        return truncated_string.substring(0, delimeter) + "..."
    }

    return truncated_string
}

const BlogWritingPage = () => {
    const blogs: IBlogsFile[] = blogsFile

    return (
        <section id="#" className="transition-all w-full h-full">
            <HeroContainer
            className="blog-writing-bg-pic"
            title="Blog Writing"
            subTitle="How to Guides, Interior Concept Ideas and Copywriting."
            />
            <div className="py-20">
                <div className="text-center grid place-content-center gap-2 px-5 lg:px-20">
                    <h1 className="font-bold text-5xl">Chic Panda Blogs</h1>
                    <p>{`Wrote 8 interior design blogs for sofabedstore.com and filmed, produced, and edited 8+ 
                    interior design videos (with up to 400+ views) under the name Chic Panda Interiors to promote 
                    products and drive customer engagement, developing content marketing skills`}</p>
                    {/* <div className="bg-[#010550] w-[360px] h-[6px]"></div> */}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-[min-content_min-content] justify-center
                gap-10 items-center px-5 lg:px-20 py-10">
                    {
                        blogs.map((blog, index) => {
                            return (
                                <Card
                                className="w-full lg:w-[25rem] h-full justify-self-center"
                                imgClassName="w-full lg:w-[25rem] h-[15rem]"
                                textClassName="w-full h-fit truncate-text"
                                img={blog.thumbnail_url}
                                title={blog.title}
                                text={truncateString(blog.description, 100)}
                                link={blog.link}
                                alt={`${blog.title}-${index}`}
                                key={`${blog.title}-${index}`}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}
 
export default BlogWritingPage;