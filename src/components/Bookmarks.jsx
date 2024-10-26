import Bookmark from "./Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="bg-slate-100 rounded-lg p-5">
            <div className="border rounded-lg p-4 mb-2 font-semibold text-blue-600">
                Spend Time On Read: {readingTime ? readingTime : '150'}
            </div>
            <h3 className="text-xl font-bold">Bookmarked Blogs: {bookmarks.length}</h3>
            <p className="text-red-600 text-3xl text-center font-semibold py-10" id="bookmark">No Bookmark Yet!</p>
            {
                bookmarks.map(bookmark => <Bookmark bookmark={bookmark}></Bookmark>)
            }
        </div>
    )
}

export default Bookmarks;