import Bookmark from "../Bookmark/bookmark"


const Bookmarks = ({bookmarks}) => {
  return (
    <div className="md:w-1/3 bg-gray-50 ml-3 mt-2 pt-4">
   
 <h2 className="text-3xl text-center  mr-2">Bookmarked blog  : {bookmarks.length}</h2>
{
    bookmarks.map(bookmark =><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
}


</div>
  )
}

Bookmarks.propTypes = {}

export default Bookmarks