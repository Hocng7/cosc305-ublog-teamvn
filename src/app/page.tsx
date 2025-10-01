export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 font-sans flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center py-20 px-4">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 mb-4 drop-shadow-lg">UBlog</h1>
        <p className="text-lg sm:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Your source for the latest news, stories, and insights. Discover trending topics, in-depth articles, and join the conversation.
        </p>
        <a
          href="#featured"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full px-8 py-3 shadow-lg transition-colors"
        >
          Read Latest Posts
        </a>
      </section>

      {/* Featured Posts Section */}
      <section id="featured" className="py-16 px-4 bg-white border-t border-gray-200">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">Featured Posts</h2>
        <div className="max-w-5xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {/* Example featured post cards */}
          <div className="bg-gray-50 rounded-lg shadow p-6 flex flex-col items-start hover:shadow-md transition-shadow">
            <div className="text-xs uppercase text-blue-600 font-bold mb-2">News</div>
            <h3 className="text-lg font-semibold mb-2">Welcome to UBlog!</h3>
            <p className="text-gray-600 mb-4">Explore our new platform for sharing news, stories, and ideas with the world.</p>
            <a href="#" className="text-blue-600 hover:underline font-medium">Read more →</a>
          </div>
          <div className="bg-gray-50 rounded-lg shadow p-6 flex flex-col items-start hover:shadow-md transition-shadow">
            <div className="text-xs uppercase text-green-600 font-bold mb-2">Opinion</div>
            <h3 className="text-lg font-semibold mb-2">Why Blogs Still Matter</h3>
            <p className="text-gray-600 mb-4">In a world of fast news, blogs offer depth, perspective, and community. Here’s why they’re more relevant than ever.</p>
            <a href="#" className="text-blue-600 hover:underline font-medium">Read more →</a>
          </div>
          <div className="bg-gray-50 rounded-lg shadow p-6 flex flex-col items-start hover:shadow-md transition-shadow">
            <div className="text-xs uppercase text-purple-600 font-bold mb-2">Tech</div>
            <h3 className="text-lg font-semibold mb-2">Building UBlog: The Stack</h3>
            <p className="text-gray-600 mb-4">A peek behind the scenes at the technology powering our modern news and blogging platform.</p>
            <a href="#" className="text-blue-600 hover:underline font-medium">Read more →</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-gray-200 mt-auto">
        &copy; {new Date().getFullYear()} UBlog. All rights reserved.
      </footer>
    </div>
  );
}
