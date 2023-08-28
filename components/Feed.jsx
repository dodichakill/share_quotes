"use client";

import { useState, useEffect } from "react";
import QuoteCard from "./QuoteCard";

const QuoteCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <QuoteCard key={post._id} post={post} handleTagClick={handleTagClick} />
      ))}
    </div>
  );
};

export default function Feed() {
  const [searchText, setSearchText] = useState("");
  const [plainDataPost, setPlainDataPost] = useState([]);
  const [resultDataPost, setResultDataPost] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("/api/quote");
    const data = await response.json();
    setPlainDataPost(data);
    setResultDataPost(data);
  };

  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };

  useEffect(() => {
    if (searchText) {
      const filteredPosts = plainDataPost.filter((post) => {
        const lowercaseSearchText = searchText.toLowerCase();
        const lowercaseQuote = post.quote.toLowerCase();
        const lowercaseUsername = post.creator.username.toLowerCase();
        const lowercaseTag = post.tag.toLowerCase();

        return (
          lowercaseQuote.includes(lowercaseSearchText) ||
          lowercaseUsername.includes(lowercaseSearchText) ||
          lowercaseTag.includes(lowercaseSearchText)
        );
      });

      setResultDataPost(filteredPosts);
    } else {
      setResultDataPost(plainDataPost);
    }
  }, [searchText]);

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full max-w-xl flex-center">
        <input
          type="text"
          className="search_input peer"
          placeholder="cari quote berdasarkan tag, username, isi di sini..."
          value={searchText}
          onChange={handleSearchChange}
          required
        />
      </form>
      <QuoteCardList data={resultDataPost} handleTagClick={() => {}} />
    </section>
  );
}
