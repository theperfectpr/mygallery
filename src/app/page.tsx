import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://kbreactappbuck.s3.ap-south-1.amazonaws.com/pic1.png",
  "https://kbreactappbuck.s3.ap-south-1.amazonaws.com/IMG_20190531_163347_176_Original.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
