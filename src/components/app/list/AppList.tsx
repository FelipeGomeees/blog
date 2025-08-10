import { Article } from "@/types/Article";
import { useEffect, useState } from "react";
import AppListFilter from "./AppListFilter";

type AppListProps = {
    articles: Array<Article>
    filterable?: boolean
};

export default function AppList({ 
    articles, 
    filterable = true
}: AppListProps) {
    const [categories, setCategories] = useState<Array<string>>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const filteredArticles = selectedCategory ? articles.filter((article) => article.category === selectedCategory) : articles;

    useEffect(() => {
        const categories = articles.map((article) => article.category);
        const uniqueCategories = Array.from(new Set(categories));
        setCategories(uniqueCategories);
    }, [articles]);

    function handleOnClickCategory(category: string) {
        selectedCategory === category ? setSelectedCategory('') : setSelectedCategory(category);
    }

    return (
        <>
            {
                filterable && (
                    <AppListFilter categories={categories} handleClickCategory={handleOnClickCategory}/>
                )
            }
            <div className="w-full border-t-1">
                {filteredArticles.map((article) => (
                    <div className="
                    flex justify-between border-b-1 p-4 
                    transition-colors hover:bg-gray-100 hover:cursor-pointer hover:text-black"
                    key={article.title}>
                        <b>{article.title}</b>
                        <div className="flex gap-4">
                            <p className="mpx-2">{article.category}</p>
                            <p>{article.date}</p>
                            <p>...</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}