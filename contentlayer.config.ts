import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import readingTime from 'reading-time'
import rehypeAutolinkHeadings, { type Options as AutolinkOptions } from 'rehype-autolink-headings';
import rehypePrettyCode, { type Options as PrettyCodeOptions } from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import { s } from 'hastscript';

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        author: { type: 'string', required: false },
        tag: { type: 'list', of: { type: 'string' }, required: false },
        date: { type: 'date', required: true },
        summary: { type: 'string', required: true },
        cover: { type: 'string', required: true },
    },
    computedFields: {
        wordCount: { type: 'number', resolve: (post) => post.body.raw.split(/\s+/gu).length },
        readingTime: { type: 'json', resolve: (post) => readingTime(post.body.raw) },
        slug: { type: 'string', resolve: (post) => post._raw.flattenedPath },
        url: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },
    },
}))


export default makeSource({
    contentDirPath: 'posts',
    documentTypes: [Post],
    mdx: {
        rehypePlugins: [
            /**
             * Adds ids to headings
             */
            rehypeSlug,
            [
                /**
                 * Adds auto-linking button after h1, h2, h3 headings
                 */
                rehypeAutolinkHeadings,
                {
                    behavior: 'append',
                    test: ['h2', 'h3'],
                    properties: { class: 'heading-link' },
                    content: s(
                        'svg',
                        {
                            xmlns: 'http://www.w3.org/2000/svg',
                            viewBox: '0 0 24 24',
                            width: '16',
                            height: '16',
                            fill: 'none',
                            stroke: '#b2b2b2',
                            'stroke-width': '2',
                            'stroke-linecap': 'round',
                            'stroke-linejoin': 'round',
                            'aria-label': 'Anchor link',
                        },
                        [
                            s('line', { x1: '4', y1: '9', x2: '20', y2: '9' }),
                            s('line', { x1: '4', y1: '15', x2: '20', y2: '15' }),
                            s('line', { x1: '10', y1: '3', x2: '8', y2: '21' }),
                            s('line', { x1: '16', y1: '3', x2: '14', y2: '21' }),
                        ],
                    ),
                } satisfies Partial<AutolinkOptions>,
            ],
            [
                /**
                 * Enhances code blocks with syntax highlighting, line numbers,
                 * titles, and allows highlighting specific lines and words
                 */
                rehypePrettyCode,
                {
                    theme: {
                        dark: "vitesse-dark",
                    },
                } satisfies Partial<PrettyCodeOptions>,
            ],
        ],
    }
})