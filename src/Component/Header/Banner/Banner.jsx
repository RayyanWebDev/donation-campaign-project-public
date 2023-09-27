import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/GWWZLSP/Rectangle-4287.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              I Grow By Helping People In Need
            </h1>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-error w-full max-w-xs"
            />
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      {/* <h2 className="flex justify-center text-3xl font-semibold">
        I Grow By Helping People In Need
      </h2> */}
    </div>
  );
};

export default Banner;
