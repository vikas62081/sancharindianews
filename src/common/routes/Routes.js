
import PostContainer from "../container/postContainer";
import { Main } from "../container/main";
import Login from "../components/login/login";
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
  {
    path: "/login",
    exact: true,
    component: Login
  },
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
