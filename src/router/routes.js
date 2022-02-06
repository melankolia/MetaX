const TheContainer = () => import("@/container");
const Search = () => import("@/views/Search");
const Result = () => import("@/views/Result");
const Tags = () => import("@/views/Tags");
const About = () => import("@/views/About");

export const configRoutes = () => [
  {
    path: "/",
    redirect: "/home",
    component: TheContainer,
    meta: {
      title: "Home",
    },
    children: [
      {
        path: "/home",
        component: {
          render(c) {
            return c("router-view");
          },
        },
        children: [
          {
            path: "",
            name: "search",
            component: Search,
          },
          {
            path: "results",
            name: "Results",
            component: Result,
            meta: {
              group: "Home Page",
            },
          },
        ],
      },
      {
        path: "tags",
        name: "tags",
        component: Tags,
        meta: {
          group: "Home Page",
        },
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];
