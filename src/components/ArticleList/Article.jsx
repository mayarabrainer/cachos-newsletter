const Article = ({ title, text, tags, image, alt}) => {
    return <div className="p-5 bg-gray-300 dark:bg-gray-700 sm:rounded-xl sm:shadow-lg flex gap-2 flex-col items-center sm:hover:shadow-red-400 sm:hover:shadow-lg">
        <h3 className="text-lx text-red-400 dark:text-red-400 font-bold">{title}</h3>
        <div className="w-full flex-row justify-end gap-2 pr-5 hidden sm:flex">
            {
                tags.map(tag => <span key={tag} className="bg-red-300 dark:bg-red-400 px-3 py-1 rounded-full text-gray-900 dark:text-gray-300 text-ts uppercase hover:bg-red-400 hover:scale-110">{tag}</span>)
            }

        </div>
        <div className="grig gap-1">
            {
                text.map((content, index) => <p key={index} className="text-gray-900 dark:text-gray-400">{content}</p>)
            }
        </div>
            { image && <img className="sm:p-4" src={image}/>}
            { image && alt && <span className="sr:only">{alt}</span>}

    </div>
}

export default Article