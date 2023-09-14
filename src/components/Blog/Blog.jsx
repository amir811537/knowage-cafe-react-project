
import PropTypes from 'prop-types';
const Blog = ({blog}) => {
const {title,posted_date,hashtags, cover,reading_time,author,author_img}=blog;

    return (
        <div>
            <img src={cover} alt={`cover picture of the title ${title}`} />
           <div className='flex justify-between items-center '>
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
            </div>
           </div>
           <h2 className='text-4xl'>{title}</h2> 
           <p>
            {
                hashtags.map((hash,idx)=><span key={idx}><a href=''>#{hash}</a></span>)
            }
           </p>
        </div>
    );
};

Blog.PropTypes={
    blog: PropTypes.object.isRequired
}

export default Blog;