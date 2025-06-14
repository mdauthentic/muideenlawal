import Link from "next/link";
import { ReactNode } from "react";

type BoxedLinkProps = {
  href: string;
  title: string;
  children: ReactNode;
  className?: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
  rel?: string;
};

const BoxedLink: React.FC<BoxedLinkProps> = ({
  href,
  title,
  children,
  className = "",
  target = "_self",
  rel = "",
  ...props
}) => {
  const classes =
    `border-[0.1rem] border-solid border-black pr-[0.2rem] pl-[0.3rem] ${className}`.trim();
  return (
    <Link
      href={href}
      title={title}
      target={target}
      rel={target === "_blank" ? `noopener noreferrer ${rel}` : rel}
      className={classes}
      {...props}
    >
      {children}
    </Link>
  );
};

export default BoxedLink;
