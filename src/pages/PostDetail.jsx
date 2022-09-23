import { useLoaderData } from "react-router-dom";
import BlogPost from "../components/BlogPost";
import NewsletterSignup from "../components/NewsletterSignup";
import { getPost } from "../util/api";

function PostDetailPage() {
  const post = useLoaderData();

  return (
    <>
      <BlogPost title={post.title} text={post.body} />
      <NewsletterSignup />
    </>
  );
}

export default PostDetailPage;

export function loader({ params }) {
  const postId = params.id;
  return getPost(postId);
}
