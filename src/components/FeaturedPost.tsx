import Link from 'next/link';
import { Post } from 'contentlayer/generated';
import Image from 'next/image';
import { dateFormatting } from '@/lib/util';

export function FeaturedPost(props: Post) {
    return (
        <>
            <Link href={`/blog/${props.slug}`} className="postLink" key={props.slug}>
                <Image src={props.cover} width={379} height={250} alt="" className="postImg" />
                <div className="postContent">
                    <div className="postDate">{dateFormatting(props.date)}</div>
                    <div className="postTitle">{props.title}</div>
                    <p className="postBody">{props.summary}</p>
                </div>
            </Link>
        </>
    )
}