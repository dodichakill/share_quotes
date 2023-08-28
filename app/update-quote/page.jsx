"use client";
import Form from "@components/Form";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function UpdateQuote() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const quoteId = searchParams.get("id");

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    quote: "",
    tag: "",
  });

  useEffect(() => {
    const getQuoteDetails = async () => {
      const response = await fetch(`/api/quote/${quoteId}`);
      const data = await response.json();

      console.log("data ", data);
      setPost({
        quote: data.quote,
        tag: data.tag,
      });
    };
    if (quoteId) getQuoteDetails();
    console.log(quoteId);
  }, [quoteId]);

  const handleUpdateQuote = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    if (!quoteId) return alert("Quote ID not found");

    try {
      const response = await fetch(`/api/quote/${quoteId}`, {
        method: "PATCH",
        body: JSON.stringify({
          quote: post.quote,
          tag: post.tag,
        }),
      });
      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Form
        type="Edit"
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={handleUpdateQuote}
      />
    </>
  );
}
