"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Profile from "@components/Profile";

export default function MyProfile() {
  const router = useRouter();
  const { data: session } = useSession();

  const [myPost, setMyPost] = useState([]);

  const handleEdit = (post) => {
    router.push(`/update-quote?id=${post._id}`);
  };

  const handleDelete = async (post) => {
    const hasConfirmed = confirm("Apakah kamu yakin menghapus Quote ini?");

    if (hasConfirmed) {
      try {
        await fetch(`/api/quite/${post._id.toString()}`, {
          method: "DELETE",
        });

        const filteredPosts = myPost.filter((p) => p._id !== post._id);
        setMyPost(filteredPosts);
      } catch (error) {}
    }
  };
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();
      setMyPost(data);
    };

    if (session?.user.id) fetchPosts();
  }, [session?.user.id]);
  return (
    <Profile
      name="Ku"
      desc="Selamat datang di halaman profile personal"
      data={myPost}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
}
