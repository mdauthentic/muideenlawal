import { promises as fs } from "fs"
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Bookmarks',
    description: 'Some links across the internet',
}


interface BookmarkData {
    bookmarks?: (BookmarksEntity)[] | null;
}
interface BookmarksEntity {
    title: string;
    url: string;
    tags?: (string)[] | null;
}

async function getBookmarkData(): Promise<BookmarkData> {
    const file: string = await fs.readFile(process.cwd() + '/data/bookmarks.json', 'utf8');
    const data: any = JSON.parse(file);
    return data;
}


export default async function Bookmark() {
    const data = await getBookmarkData();
    return (
        <section className="bookmarks">
            <div className="container">
                <div className="blogIntro">
                    <h1 className="blogTitle">Links.</h1>
                    <div className="blogASide">
                        <p className="pb2">
                            Sometimes I unclutter my browser and I put some interesting links "to read" later here.
                        </p>
                    </div>
                </div>

                <div className="projectGrid">
                    {data.bookmarks?.map((obj, index) => (
                        <div className="projectCard" key={index}>
                            <div className="flexSpaceBtw">
                                <Link href="/" className="cardHeader">{obj.title}</Link>
                                <Link href={obj.url}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-link-45deg" viewBox="0 0 16 16">
                                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                    </svg>
                                </Link>
                            </div>
                            <Link href={obj.url} className="badger" target="_blank">{obj.url}</Link>
                            <div className="hrLine" />
                            <div className="tagWrapper">{`${'#' + obj.tags?.join(", #")}`}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}