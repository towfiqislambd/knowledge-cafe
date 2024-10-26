import './App.css'
import Header from './components/header'
import Blogs from './components/blogs'
import Bookmarks from './components/Bookmarks'
import { useState } from 'react'

function App() {

  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleBookmarks = blog => {
    document.getElementById('bookmark').style.display='none'
    if(bookmarks.includes(blog)){
      return alert('Bookmark already added')
    }
    else{
      const newBookmarks = [...bookmarks,blog];
      setBookmarks(newBookmarks)
    }
  }

  const handleReadingTime = time => {
      const newReadingTime = readingTime + time;
      setReadingTime(newReadingTime)
  }

  return (
    <div className='container mx-auto px-32'>
      <Header></Header>
      <div className='grid grid-cols-1 md:grid-cols-3 py-5 gap-5'>
        <div className='col-span-2'>
          <Blogs handleBookmarks={handleBookmarks} handleReadingTime={handleReadingTime}></Blogs>
        </div>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </div>
  )
}

export default App
