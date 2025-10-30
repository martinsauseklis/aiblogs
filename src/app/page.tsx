import { getPostsFromCache, Post } from "@/lib/notion";
import PostCard from "@/components/post-card";

export default function Home() {
  const posts = getPostsFromCache();

  return (
    <div>
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
          Globālie AI jaunumi latviski
        </h1>
        <p className="text-lg text-muted-foreground">
          Iespējams labākais blogs par AI Latvijā
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
