import CoreTextInput from "@/components/core/textInput/CoreTextInput";
import { useState } from "react";

type AppListFilterProps = {
    categories: Array<string>,
    handleClickCategory: (category: string) => void;
};

export default function AppList({ categories, handleClickCategory }: AppListFilterProps) {
    const [selectedCategory, setSelectedCategory] = useState<string>('');

    const onClickCategory = (category: string) => {
        selectedCategory === category ? setSelectedCategory('') : setSelectedCategory(category);
        handleClickCategory(category);
    }

    return (
        <>
            <div className="flex justify-between">
                <div className="flex gap-4">
                    {categories.map((category) => (
                        <div className={`transition-colors hover:bg-gray-100 hover:cursor-pointer hover:text-black p-2 border-1 mb-2 
                            ${selectedCategory === category ? 'bg-gray-100 text-black' : ''}`}
                        onClick={() => onClickCategory(category)}
                        key={category}>
                            <p>{category}</p>
                        </div>
                    ))}
                    {categories.length > 1 && (
                        <div className="transition-colors hover:bg-gray-100 hover:cursor-pointer hover:text-black p-2 border-1 mb-2"
                        onClick={() => onClickCategory('')}>
                            <p>{`More`}</p>
                        </div>
                    )}
                </div>
                <CoreTextInput placeholder="Search" icon="/search.svg"/>
            </div>
        </>
    )
}