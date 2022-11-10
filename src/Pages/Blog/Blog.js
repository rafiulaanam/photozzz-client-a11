import React from 'react';

import img from '../../Assets/img/1.jpg'

const Blog = () => {
    return (
        <div>
            <div className="hero  h-80" style={{ backgroundImage: `url(${img})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl text-white font-bold">Blogs</h1>
      <p className="mb-5 text-white">Thanks for visit our blog section. See all the details which blog you want to read.</p>
    
    </div>
  </div>
        </div>


        <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/200/280/arch" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">New movie is released!</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
















        </div>
    );
};

export default Blog;