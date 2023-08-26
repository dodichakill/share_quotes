import React from "react";
import QuoteCard from "./QuoteCard";

export default function Profile({
  name,
  desc,
  data,
  handleEdit,
  handleDelete,
}) {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        {" "}
        <span className="blue_gradient"> Profil {name} </span>
      </h1>
      <p className="desc text-left">{desc}</p>

      <div className="my-10 prompt_layout">
        {data.map((post) => (
          <QuoteCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  );
}
