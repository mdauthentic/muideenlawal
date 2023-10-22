import { useMDXComponent } from "next-contentlayer/hooks";
import { FC } from "react";


interface IProps {
    source: string;
}

const MDXContent: FC<IProps> = ({ source }) => {
    const Component = useMDXComponent(source);
    return <Component components={MDXComponents} />;
};

export default MDXContent;

/**
 * Image component that uses figure tag with optional title
 */
const img = ({ src, alt, title }: React.HTMLProps<HTMLImageElement>) => {
    return (
        <figure className="flex col h-fit w-fit kg-card" aria-label={alt}>
            <img src={src || ''} alt={alt} />
            {title && <figcaption className="text-center">{title}</figcaption>}
        </figure>
    );
};

/**
 * Replace the p elements with div elements, as p elements have restrictions on
 * the types of elements that can be nested inside them.
 */
const p = (props: React.HTMLProps<HTMLParagraphElement>) => {
    return <div className="my3" {...props} />;
};

export const MDXComponents = { img, p };