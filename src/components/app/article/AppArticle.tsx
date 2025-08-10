type AppArticleProps = {
    // articles: Array<Article>
};

export default function AppList({ }: AppArticleProps) {
    return (
        <>
            <div className="flex justify-center">
                <div className="text-center">
                    <p>Frontend</p>
                    <h1>Modern JavaScript Frameworks</h1>
                </div>
            </div>
        </>
    )
}