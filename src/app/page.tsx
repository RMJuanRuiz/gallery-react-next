import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/ab12ad88-5a47-4f59-8d96-cf3cdc8ef63b-6tyo61.jpeg",
  "https://utfs.io/f/2b1fd047-2185-4e04-97e6-161f5e29d6f4-1ahcsj.jpeg",
  "https://utfs.io/f/21b04ce6-e20d-4ee8-b1c5-3f399a97d72b-1ahcsh.jpeg",
  "https://utfs.io/f/3cfd978c-66f2-494c-afa7-58b70e5c6c50-1ahcsi.jpeg",
];

const mockImages = mockUrls.map((url, idx) => ({
  id: idx + 1,
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
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
