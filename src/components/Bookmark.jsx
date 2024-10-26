const Bookmark = ({bookmark}) => {
    console.log(bookmark)
    return (
        <div>
            <p className="border rounded-lg p-4 my-3 bg-white font-semibold">{bookmark.blog_title}</p>
        </div>
    )
}

export default Bookmark;