import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import "react";
const SplitNotFoundComponent = () => /* @__PURE__ */ jsx("div", { className: "grid min-h-screen place-items-center bg-background p-8 text-center", children: /* @__PURE__ */ jsxs("div", { children: [
  /* @__PURE__ */ jsx("p", { className: "mb-4 text-lg", children: "That route is not in our story." }),
  /* @__PURE__ */ jsx(Link, { to: "/select", className: "rounded-full bg-primary px-6 py-3 text-primary-foreground", children: "Back to map" })
] }) });
export {
  SplitNotFoundComponent as notFoundComponent
};
