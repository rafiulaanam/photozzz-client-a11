import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const service = useLoaderData();

  const { img, title, facility,id } = service;

  const handleComment =(event)=>{
    event.preventDefault()
    const form = event.target;
    const comment = form.comment.value;
    console.log(comment)

    fetch('https://photozzz-server-rafiulaanam.vercel.app/services',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(comment)
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
  }

  return (
    <>
      <div className="hero  h-80" style={{ backgroundImage: `url(${img})` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl text-white font-bold">{title}</h1>
            <p className="mb-5 text-white">
              Thanks for visit our service section. See all the details which
              service is related to you.
            </p>
          </div>
        </div>
      </div>

      <div className="m-20">
        <h4 className="text-2xl text-white">We provide those Service</h4>
        {
        
        facility.map(details =><p key={id}>{details.name}</p>)
        
        }
      </div>

      <div className="text-center">
        <h1 className="text-3xl text-bold">Customer Review Section</h1>
        <h3 className="mt-5">Wirte your comment</h3>
        <form onSubmit={handleComment}>
          <textarea
            className="textarea textarea-bordered w-96"
            name="comment"
            placeholder="write your comments"
          ></textarea>
          <br />
          <input
            className="btn btn-primary mt-10 mb-10"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </>
  );
};

export default ServiceDetails;
