import Bookmark from "../Bookmark/bookmark"


const Bookmarks = ({bookmarks,readingTime}) => {
  return (
    <div className="md:w-1/3 bg-gray-50 ml-3 mt-2 pt-4">
   <div className="text-center text-white bg-red-600 ">
    <h3 className="text-4xl"> reading time:{readingTime}</h3>
   </div>
 <h2 className="text-3xl text-center  mr-2">Bookmarked blog  : {bookmarks.length}</h2>
{
    bookmarks.map(bookmark =><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
}


</div>
  )
}

Bookmarks.propTypes = {}

export default Bookmarks