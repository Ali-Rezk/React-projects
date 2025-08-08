import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../apis/posts/posts.api";
import Loading from "../components/Loading";
import PostItem from "../components/PostItem";

export default function Home() {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  if (isLoading) return <Loading></Loading>;

  if (isError) return <h2>{error.message}</h2>;

  console.log(data.posts);

  return data.posts.map((post) => (
    <PostItem key={post._id} post={post}></PostItem>
  ));
}
