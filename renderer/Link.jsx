import React from "react";
import { usePageContext } from "./usePageContext";

function Link({ href, children }) {
  // const pageContext = usePageContext();
  // const className = [
  //   "navigation-link",
  //   pageContext.urlPathname === href && "is-active",
  // ]
  //   .filter(Boolean)
  //   .join(" ");
  return (
    <a href={href} className="w-32 h-16 p-8">
      {children}
    </a>
  );
}

export { Link };