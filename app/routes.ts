import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.page.tsx"),
    route("club", "routes/club.tsx"),
    route("partners", "routes/partners.tsx"),
    route("about", "routes/about.tsx"),
] satisfies RouteConfig;
