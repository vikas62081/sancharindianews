
import PostContainer from "../container/postContainer";
import { Main } from "../container/main";
export const routes = [
  {
    path: "/",
    exact: true,
    component: Main
  },
  {
    path: "/post/:postId",
    exact: true,
    component: PostContainer
  },
  // {
  //   path: "/map",
  //   exact: true,
  //   component: WorldMap
  // },
  // {
  //   path: `/district/:state`,
  //   exact: true,
  //   component: District
  // },
  // {
  //   path: `/about`,
  //   exact: true,
  //   component: About
  // },
  // {
  //   path: `/world`,
  //   exact: true,
  //   component: WorldReport
  // },
  // {
  //   exact: true,
  //   component: Home
  // },
]
