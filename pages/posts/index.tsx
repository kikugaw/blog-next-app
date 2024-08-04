import type { InferGetStaticPropsType } from "next";
import Link from "next/link";
import Container from "../../components/container";
import distanceToNow from "../../lib/dateRelative";
import { getAllPosts } from "../../lib/getPost";
import Image from "next/image";

export default function NotePage({
  allPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      {allPosts.length ? (
        allPosts.map((post) => (
          <article key={post.slug} className="mb-10">
            <div className="flex">
              <Image
                src={post.image}
                alt="sweet"
                width={100}
                height={100}
                className="rounded-full mt-6 rounded-lg shadow-xl"
              />
              <div className="flex-grow p-4">
                <Link
                  as={`/posts/${post.slug}`}
                  href="/posts/[slug]"
                  className="text-lg leading-6 font-bold"
                >
                  {post.title}
                </Link>
                <p>{post.excerpt}</p>
                <div className="text-gray-400">
                  <time>{distanceToNow(new Date(post.date))}</time>
                </div>
              </div>
            </div>
          </article>
        ))
      ) : (
        <p>No blog posted yet :/</p>
      )}
    </Container>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts(["slug", "title", "excerpt", "image", "date"]);

  return {
    props: { allPosts },
  };
}
