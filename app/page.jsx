import Feed from "@components/Feed";

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Buat & Bagikan {` `}
        <br className="max-md:hidden" />
        <span className="orange_gradient">Quotes Terbaikmu</span>
      </h1>
      <p className="desc text-center">
        MyQuotes adalah website yang menyajikan quotes terbaik untuk membuat
        hari-harimu lebih bersemangat dan termotivasi
      </p>

      <Feed />
    </section>
  );
}
