// src/App.js
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <header className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 shadow-md">
        <h1 className="text-3xl font-bold">Anime Fan Zone</h1>
        <nav className="mt-2 flex flex-wrap gap-4 text-sm">
          <a href="#upcoming" className="hover:underline">Upcoming</a>
          <a href="#trending" className="hover:underline">Trending</a>
          <a href="#reviews" className="hover:underline">Reactions</a>
          <a href="#platforms" className="hover:underline">Watch/Read</a>
          <a href="#merch" className="hover:underline">Merch</a>
          <a href="#events" className="hover:underline">Events</a>
        </nav>
      </header>

      <main className="p-6 space-y-12">
        <section id="upcoming">
          <h2 className="text-2xl font-semibold mb-2">📅 Upcoming Releases</h2>
          <p>List of anime, manhwa, and webtoon releases with trailers and summaries will go here.</p>
        </section>

        <section id="trending">
          <h2 className="text-2xl font-semibold mb-2">🔥 Trending Now</h2>
          <p>Top trending shows and comics based on buzz.</p>
        </section>

        <section id="reviews">
          <h2 className="text-2xl font-semibold mb-2">💬 Fan Reactions & Reviews</h2>
          <p>Curated Reddit, X (Twitter), and meme content.</p>
        </section>

        <section id="platforms">
          <h2 className="text-2xl font-semibold mb-2">🎥 Where to Watch/Read</h2>
          <p>Crunchyroll, Netflix, Webtoon, and more.</p>
        </section>

        <section id="merch">
          <h2 className="text-2xl font-semibold mb-2">🛍 Merch & Collectibles</h2>
          <p>Limited edition drops and where to buy.</p>
        </section>

        <section id="events">
          <h2 className="text-2xl font-semibold mb-2">🎉 Events & Cons</h2>
          <p>Anime expos, K-cons, and online fan meetups.</p>
        </section>
      </main>

      <footer className="bg-gray-800 p-4 text-center text-sm">
        © 2025 Anime Fan Zone. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
