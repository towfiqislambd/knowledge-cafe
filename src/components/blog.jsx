import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleBookmarks, handleReadingTime }) => {
    const { blog_thumbnail, blog_title, author_name, author_img, publish_date, watching_time, tags } = blog
    return (
        <div className="border space-y-3 mb-5 rounded-lg p-5">
            <img src={blog_thumbnail} className="w-full" />
            <div className="flex justify-between items-center">
                <div className="flex gap-5 items-center">
                    <img src={author_img} style={{ width: '60px' }} />
                    <div>
                        <h5>{author_name}</h5>
                        <p>{publish_date}</p>
                    </div>
                </div>
                <p>{watching_time} min read
                    <button onClick={() => handleBookmarks(blog)} className='ml-2'>
                        <FaBookmark></FaBookmark>
                    </button>
                </p>
            </div>
            <p className="text-3xl font-bold pb-5">{blog_title}</p>
            {
                tags.map(tag => <span className='mr-2'>#{tag}</span>)
            }
            <br />
            <button className="text-blue-700 underline font-medium" onClick={() => handleReadingTime(watching_time)}>Mark As Read</button>
        </div>
    )
}

export default Blog;