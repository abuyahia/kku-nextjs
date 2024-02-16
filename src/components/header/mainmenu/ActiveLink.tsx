"use client";

import { usePathname } from "next/navigation";
import Link, { LinkProps } from "next/link";
import React, { useState, useEffect, ReactElement, Children } from "react";

type ActiveLinkProps = LinkProps & { children: ReactElement; activeClassName: string;};

const ActiveLink = ({children, activeClassName, ...props}: ActiveLinkProps) => {

  const pathname = usePathname();

  const [className, setClassName] = useState("");

  useEffect(() => {
    const linkPathname = new URL(
      (props.as || props.href) as string,
      location.href
    ).pathname;

    const activePathname = new URL(pathname, location.href).pathname;

    const newClassName =
      linkPathname === activePathname ? `${activeClassName}` : "";

    if (newClassName !== className) {
      setClassName(newClassName);
    }
  }, [pathname,props.as,props.href,activeClassName,setClassName,className,]);

  return (
    // return the in-built Next Link including a child (a clone the 'a' element (child) including the activeClassName if it is the active page)
  
      <li>
        <Link {...props}>
          {React.cloneElement(children, {className: className || null,})}  <i className="fa-light fa-angle-down"></i>
        </Link>
      </li>

  );
};

export default ActiveLink;



// "use client";

// import { usePathname } from "next/navigation";
// import Link, { LinkProps } from "next/link";
// import React, { useState, useEffect, ReactElement, Children } from "react";

// type ActiveLinkProps = LinkProps & { children: ReactElement; activeClassName: string;};

// const ActiveLink = ({children, activeClassName, ...props}: ActiveLinkProps) => {

//   const pathname = usePathname();

//   const [className, setClassName] = useState("");

//   useEffect(() => {
//     const linkPathname = new URL(
//       (props.as || props.href) as string,
//       location.href
//     ).pathname;

//     const activePathname = new URL(pathname, location.href).pathname;

//     const newClassName =
//       linkPathname === activePathname ? `${activeClassName}` : "";

//     if (newClassName !== className) {
//       setClassName(newClassName);
//     }
//   }, [pathname,props.as,props.href,activeClassName,setClassName,className,]);

//   return (
//     // return the in-built Next Link including a child (a clone the 'a' element (child) including the activeClassName if it is the active page)
//     <li>   
//       <Link {...props}>
//         {React.cloneElement(children, {className: className || null,})}
//       </Link>
//     </li>
//   );
// };

// export default ActiveLink;
