import { allPosts } from 'contentlayer/generated'
import { dateFormatting } from '@/lib/util'
import MDXContent from '@/components/mdx-component'
import Image from 'next/image'
import { Metadata } from 'next';

const HOST = 'muideenlawal.com'

export function generateMetadata({ params: { slug } }: IProps): Metadata {
    const post = allPosts.find((post) => post._raw.flattenedPath === slug);

    if (!post) throw new Error(`Post not found for slug: ${slug}`)

    const { summary, title, date } = post;

    const description = summary;

    const ogImage = {
        url: `${HOST}/posts/${slug}/og.png`,
    };

    return {
        metadataBase: new URL('https://muideenlawal.com'),
        title,
        description,
        openGraph: {
            type: 'article',
            url: `${HOST}/posts/${slug}`,
            title,
            description,
            publishedTime: date,
            images: [ogImage],
        }
    };
}



interface IProps {
    params: { slug: string };
}

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

// export const generateMetadata = ({ params: { slug } }: IProps) => {
//     const post = allPosts.find((post) => post._raw.flattenedPath === slug)
//     if (!post) throw new Error(`Post not found for slug: ${slug}`)
//     return { title: post.title }
// }

const PostLayout = ({ params: { slug } }: IProps) => {
    const post = allPosts.find((post) => post._raw.flattenedPath === slug)
    if (!post) throw new Error(`Post not found for slug: ${slug}`)

    return (
        <>
            <article className="blogPost">
                <div className="container-xs">
                    <div className="postMeta">
                        <span>{dateFormatting(post.date)}</span>
                        <span className="px2">•</span>
                        <span>{post.readingTime.text}</span>
                        <span className="px2">•</span>
                        <span>{post.wordCount} words</span>
                    </div>
                    <h1 className="blogPostTitle">{post.title}</h1>
                    <div className="flex align-center mt4">
                        <Image alt="" loading="lazy" width={32} height={32} className="postAuthorImg" src="/img/icon.png" style={{ color: "transparent" }} />
                        <span className="postAuthor">Muideen Lawal</span>
                    </div>
                    <p className="postSummary">{post.summary}</p>
                </div>
            </article>
            <article className="articleBody">
                <div className="container-xs">
                    <MDXContent source={post.body.code} />
                </div>
            </article>
        </>
    )
}

export default PostLayout