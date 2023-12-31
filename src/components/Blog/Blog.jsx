
import PropTypes from 'prop-types';
import { FaBookmark} from 'react-icons/fa';
const Blog = ({blog,handleAddBookmark,handleMarkAsRead}) => {
const {title,posted_date,hashtags, cover,reading_time,author,author_img}=blog;

    return (
        <div className='mb-20 space-y-3'>
            <img className='w-full mb-8' src={cover} alt={`cover picture of the title ${title}`} />
           <div className='flex justify-between items-center mb-4 '>
            <div className='flex '>
                 <img className='w-14' src={author_img} alt="" />
            <div className='flex '>
                <div className='ml-6'>
                    <h3 className='text-2xl'>{author}</h3>
                  <p>{posted_date}</p>
                </div>
            </div>
            </div>
            <div>
            <span>{reading_time} min read</span>
            <button onClick={()=>handleAddBookmark(blog)} className='ml-2 text-red-600'> <FaBookmark></FaBookmark></button>
            </div>
           </div>
           <h2 className='text-4xl'>{title}</h2> 
           <p>
            {
                hashtags.map((hash,idx)=><span key={idx}><a href=''>#{hash}</a></span>)
            }
           </p>
           <button onClick={()=>handleMarkAsRead(reading_time)} className='text-purple-600 underline'>Mark to read</button>
        </div>
    );
};

Blog.PropTypes={
    blog: PropTypes.object.isRequired
}

export default Blog;