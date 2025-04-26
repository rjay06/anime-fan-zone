import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [animeData, setAnimeData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch anime data from your backend
    const fetchAnimeData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/scrape-anime');
        setAnimeData(response.data); // Store the fetched anime data in state
        setLoading(false); // Stop loading
        console.log(response.data);  // Handle the response data
      } catch (error) {
        console.error('Error fetching anime data:', error);
        setLoading(false); // Stop loading on error
      }
    };

    fetchAnimeData();
  }, []);

  return (
    <div className="App">
      <h1>Anime Newsletter</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="anime-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {animeData.map((anime, index) => (
            <div key={index} className="anime-card p-4 bg-white shadow-md rounded-lg">
              <img src={anime.image} alt={anime.title} className="w-full h-auto rounded-lg" />
              <h2 className="mt-2 text-lg font-semibold">{anime.title}</h2>
              <a href={anime.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">Watch Now</a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;



// //import React from 'react';
// //import './App.css';

// function App() {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Header */}
//       <header className="bg-blue-600 p-6 text-white text-center">
//         <h1 className="text-4xl font-bold">Anime Fan Zone</h1>
//         <p className="text-xl">Your daily dose of anime, manhwa, and webtoons!</p>
//       </header>

//       {/* Main Content */}
//       <main className="container mx-auto p-6 space-y-10">
//         {/* Upcoming Releases */}
//         <section>
//           <h2 className="text-3xl font-semibold">Upcoming Releases</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {/* Mockup Card */}
//             <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
//               <img src="https://via.placeholder.com/300x450" alt="Anime Title" className="w-full h-48 object-cover" />
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold">Anime Title</h3>
//                 <p className="text-gray-500">Release Date: 2025-05-01</p>
//               </div>
//             </div>
//             {/* More mockup cards... */}
//           </div>
//         </section>

//         {/* Trending Now */}
//         <section>
//           <h2 className="text-3xl font-semibold">Trending Now</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {/* Mockup Card */}
//             <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
//               <img src="https://via.placeholder.com/300x450" alt="Trending Anime" className="w-full h-48 object-cover" />
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold">Trending Anime</h3>
//                 <p className="text-gray-500">Current Status: Ongoing</p>
//               </div>
//             </div>
//             {/* More mockup cards... */}
//           </div>
//         </section>

//         {/* Merch & Collectibles */}
//         <section>
//           <h2 className="text-3xl font-semibold">Featured Merch & Collectibles</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {/* Mockup Merch */}
//             <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
//               <img src="https://via.placeholder.com/300x300" alt="Anime Merch" className="w-full h-48 object-cover" />
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold">Anime Figure</h3>
//                 <p className="text-gray-500">Price: $49.99</p>
//               </div>
//             </div>
//             {/* More mockup cards... */}
//           </div>
//         </section>

//         {/* Events */}
//         <section>
//           <h2 className="text-3xl font-semibold">Upcoming Events</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {/* Mockup Event */}
//             <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
//               <img src="https://via.placeholder.com/300x300" alt="Event Image" className="w-full h-48 object-cover" />
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold">Anime Convention 2025</h3>
//                 <p className="text-gray-500">Date: 2025-06-10</p>
//               </div>
//             </div>
//             {/* More mockup events... */}
//           </div>
//         </section>

//         {/* Email Subscription */}
//         <section className="bg-blue-600 text-white p-6 text-center">
//           <h2 className="text-2xl font-semibold">Stay Updated!</h2>
//           <p className="mb-4">Subscribe to our newsletter for the latest updates on anime, manhwa, and webtoons.</p>
//           <form action="https://YOUR-MAILCHIMP-FORM-ACTION-URL" method="post" className="flex justify-center space-x-2">
//             <input type="email" name="EMAIL" placeholder="Enter your email" required className="p-2 rounded-md"/>
//             <button type="submit" className="bg-yellow-400 text-black p-2 rounded-md">Subscribe</button>
//           </form>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white text-center p-6">
//         <p>Follow us on:</p>
//         <div className="space-x-4">
//           <a href="https://twitter.com" className="text-yellow-400">Twitter</a>
//           <a href="https://facebook.com" className="text-yellow-400">Facebook</a>
//           <a href="https://instagram.com" className="text-yellow-400">Instagram</a>
//         </div>
//         <p className="mt-4">© 2025 Anime Fan Zone. All Rights Reserved.</p>
//       </footer>
//     </div>
//   );
// }

// export default App;


