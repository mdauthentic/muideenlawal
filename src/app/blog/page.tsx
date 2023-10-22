import { allPosts } from "contentlayer/generated"
import { compareDesc } from "date-fns"
import { FeaturedPost } from "@/components/FeaturedPost"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Blog Posts | Muideen Lawal',
    description: 'All my writings are here',
}

export default function BlogPage() {
    const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    return (
        <section className="blog">
            <div className="container">
                <div className="blogIntro">
                    <h1 className="blogTitle">Blog.</h1>
                    <div className="blogASide">
                        <p className="pb2">
                            I collect my thoughts into writings and I post about tech, life and other things here.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="postCollection">
                    {posts.map((post, index) => (
                        <FeaturedPost key={index} {...post} />
                    ))}
                </div>
            </div>
        </section>
    )
}