import React from 'react';
import './Blog.css';

const BlogPage = () => {
  return (
    <div className="blog-container">
      <div className="blog-header">
        <h1>Our Bakery Blog</h1>
        <p>Welcome to our blog where we share recipes, tips, and news about our bakery!</p>
      </div>
      <div className="blog-posts">
        <div className="blog-post">
          <img src="https://i.ytimg.com/vi/Ffqe3GnNJhc/maxresdefault.jpg" alt="Cupcake" className="blog-post-image" />
          <div className="blog-post-content">
            <h2>Delicious Cupcake Recipe</h2>
            <p>Check out our latest cupcake recipe! Perfect for any occasion.</p>
            <div className="blog-post-meta">
              <span className="author">By: John Doe</span>
              <span className="date">Published: April 14, 2024</span>
            </div>
            <a href="https://www.lifeloveandsugar.com/easy-homemade-vanilla-cupcakes-recipe/">Read more</a>
          </div>
        </div>
        <div className="blog-post">
          <img src="https://media1.popsugar-assets.com/files/thumbor/JRdDZnznWxTVvbcWmAjR7DVwIbY=/728x728/filters:quality(85):extract_cover()/2015/01/28/786/n/1922195/53214d5c_edit_img_cover_file_1346512_1422462658_Food-10TipsforBeginnerBakers-post.jpg" alt="Baking Tips" className="blog-post-image" />
          <div className="blog-post-content">
            <h2>Baking Tips for Beginners</h2>
            <p>Learn some useful baking tips for beginners from our expert bakers.</p>
            <div className="blog-post-meta">
              <span className="author">By: Jane Smith</span>
              <span className="date">Published: April 10, 2024</span>
            </div>
            <a href="https://www.dominosugar.com/baking-tips-how-tos/basic-baking-tips">Read more</a>
          </div>
        </div>
        {/* Add more blog posts here */}
        <div className="blog-post">
          <img src="https://www.allrecipes.com/thmb/u1WbdCNAF3ZHPkNuAI77R5iGW84=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/964221-739412110d294649b92fde8706b96438.jpg" alt="Brownies" className="blog-post-image" />
          <div className="blog-post-content">
            <h2>Decadent Brownie Recipe</h2>
            <p>Indulge in our rich and fudgy brownie recipe, guaranteed to satisfy your sweet cravings.</p>
            <div className="blog-post-meta">
              <span className="author">By: Sarah Johnson</span>
              <span className="date">Published: April 18, 2024</span>
            </div>
            <a href="https://www.loveandlemons.com/brownies-recipe/">Read more</a>
          </div>
        </div>
        <div className="blog-post">
          <img src="data:image/jpeg;base64,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" alt="Croissants" className="blog-post-image" />
          <div className="blog-post-content">
            <h2>Flaky Croissant Recipe</h2>
            <p>Learn how to make authentic French croissants from scratch with our step-by-step guide.</p>
            <div className="blog-post-meta">
              <span className="author">By: Michael Smith</span>
              <span className="date">Published: April 20, 2024</span>
            </div>
            <a href="https://butterandbliss.net/homemade-flaky-croissants/">Read more</a>
          </div>
        </div>
        <div className="blog-post">
          <img src="https://api.vip.foodnetwork.ca/wp-content/uploads/2021/08/29d8196e-1429-4559-93e5-cf8e9a5b2442_Classic-Chocolate-Chip-Cookies-3.jpg?w=3840&quality=75" alt="Cookies" className="blog-post-image" />
          <div className="blog-post-content">
            <h2>Classic Chocolate Chip Cookies</h2>
            <p>Try our timeless chocolate chip cookie recipe, perfect for dunking in a glass of milk.</p>
            <div className="blog-post-meta">
              <span className="author">By: Emily Davis</span>
              <span className="date">Published: April 22, 2024</span>
            </div>
            <a href="https://joyfoodsunshine.com/the-most-amazing-chocolate-chip-cookies/">Read more</a>
          </div>
        </div>
        <div className="blog-post">
          <img src="https://media.houseandgarden.co.uk/photos/61893f4cb028fc86ce48802d/4:3/w_660,h_495,c_limit/apr-10_simple-vanilla-cake_b.jpg" alt="Cakes" className="blog-post-image" />
          <div className="blog-post-content">
            <h2>Homemade Cake Recipes</h2>
            <p>Discover a variety of delicious homemade cake recipes to celebrate any occasion.</p>
            <div className="blog-post-meta">
              <span className="author">By: David Brown</span>
              <span className="date">Published: April 25, 2024</span>
            </div>
            <a href="https://sallysbakingaddiction.com/category/desserts/cakes/">Read more</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;