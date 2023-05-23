import React from "react";
import chef from "../../assets/home/chef-service.jpg";

const BistroBoss = () => {
  return (
    <section
      style={{ backgroundImage: `url(${chef})` }}
      className="justify-center bg-no-repeat bg-cover bg-center rounded-lg py-20 my-12 bg-fixed"
    >
      <div className="mx-8 md:m-16 p-8 md:py-16 px-6 bg-white text-center space-y-3 rounded-lg">
        <h2 className="text-4xl font-semibold">Bistro Boss</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </section>
  );
};

export default BistroBoss;
