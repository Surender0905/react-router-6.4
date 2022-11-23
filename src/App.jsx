import {
  RouterProvider,
  createBrowserRouter,
 
 
} from "react-router-dom";

import BlogLayout from "./pages/BlogLayout";
// import BlogPostsPage, { loader as blogPostsLoader } from "./pages/BlogPosts";

import { action as newsletterAction } from "./pages/Newsletter";
import DeferredBlogPostsPage, {
  loader as deferredBlogPostsLoader,
} from "./pages/DeferredBlogPosts";
import NewPostPage, { action as newPostAction } from "./pages/NewPost";
import PostDetailPage, { loader as singlePostData } from "./pages/PostDetail";
import RootLayout from "./pages/RootLayout";
import WelcomePage from "./pages/Welcome";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <WelcomePage /> },
      {
        path: "/blog",
        element: <BlogLayout />,
        children: [
          {
            index: true,
            element: <DeferredBlogPostsPage />,
            loader: deferredBlogPostsLoader,
          },
          {
            path: ":id",
            element: <PostDetailPage />,
            loader: singlePostData,
          },
        ],
      },
      {
        path: "/blog/new",
        element: <NewPostPage />,
        action: newPostAction,
      },
    ],
  },
  {
    path: "/newsletter",
    action: newsletterAction,
  },
]);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<RootLayout />} errorElement={<Error />}>
//       <Route index element={<WelcomePage />} />
//       <Route path="/blog" element={<BlogLayout />}>
//         <Route index element={<BlogPostsPage />} loader={blogPostsLoader} />
//         {/* <Route
//           index
//           element={<DeferredBlogPostsPage />}
//           loader={deferredBlogPostsLoader}
//         /> */}
//         <Route
//           path=":id"
//           element={<PostDetailPage />}
//           loader={singlePostData}
//         />
//       </Route>
//       <Route
//         path="/blog/new"
//         element={<NewPostPage />}
//         action={newPostAction}
//       />
//     </Route>
//   )
// );

function App() {
  return <RouterProvider router={router} />;
}

export default App;
