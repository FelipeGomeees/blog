'use client'

import { useEffect ,useState } from "react";
import AppList from "@/components/app/list/AppList";
import Articles from "@/mockup/Articles";
import { Article } from "@/types/Article";

export default function Home() {
  const [articles, setArticles] = useState<Array<Article>>([]);

  useEffect(() => {
    // fetch("http://localhost:3000/api/articles")
    //   .then((res) => res.json())
    //   .then((data) => setArticles(data));
    setArticles(Articles);
  }, []);

  return (
    <div>
      <main className="w-[1080px] max-w-[95%] mx-auto my-16">
        <h1>Blog</h1>
        <br />
        <AppList articles={articles} />
      </main>
    </div>
  );
}
