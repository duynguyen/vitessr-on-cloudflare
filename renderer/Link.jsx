import React from "react";
import { usePageContext } from "./usePageContext";

function Link({ href, children }) {
  const pageContext = usePageContext();
  const className = [
    "navigation-link",
    pageContext.urlPathname === href && "is-active",
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

export { Link };