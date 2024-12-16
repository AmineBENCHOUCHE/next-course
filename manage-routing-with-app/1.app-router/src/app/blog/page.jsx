import Link from "next/link";

const page = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");  
  const posts = await res.json();
	return (
		<main className="mt-12">
			<h1 className="text-3xl font-bold mb-4">Blog</h1>
			<p className="text-xl mb-8">Derniers Posts</p>
			<div
				className="grid grid-cols-1
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      gap-6
      
      "
			>
        {posts.map((post) => (
          <div className="gap-y-2 block bg-white border-1 shadow-lg rounded-lg hover:bg-gray-100 transition duration-200  border-slate-800 p-4">
            <Link href={`/blog/${post.id}`}>
            <p className="text-xl font-semibold mb-2">{post.title}</p>
            <p className="text-lg text-gray-600">{post.body.slice(0, 100)}...</p>
            </Link>
          </div>
          ))
        }
      </div>
		</main>
	);
};
export default page;
