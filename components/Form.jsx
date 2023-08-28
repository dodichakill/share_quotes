import Link from "next/link";
import React from "react";

export default function Form({
  type,
  post,
  setPost,
  submitting,
  handleSubmit,
}) {
  return (
    <section className="w-full max-w-full flex-start flex-col mb-10">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Quote</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share it with the world
      </p>

      <form
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
        onSubmit={handleSubmit}
      >
        <label htmlFor="" className="">
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Yout Quote
          </span>

          <textarea
            value={post.quote}
            onChange={(e) => setPost({ ...post, quote: e.target.value })}
            className="form_textarea"
            placeholder="write your quote here ..."
            required
          ></textarea>
        </label>
        <label htmlFor="" className="">
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag <span className="font-normal">(#bijak, #lucu, #motivasi)</span>
          </span>

          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            className="form_input"
            placeholder="#tag"
            required
          ></input>
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>

          <button
            type="submit"
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white cursor-pointer"
            disabled={submitting}
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
}
