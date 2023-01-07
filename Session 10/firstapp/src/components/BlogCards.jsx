import React from 'react'
import blog from '../images/blog-1.png';
import '../styles/BlogCards.css';
const BlogCards = () => {
  return (
    <div className='container' style={{marginTop: '5rem'}}>
        {/* <h1>Latest Blog Posts!</h1> */}
        <div className='cards'>
            <div className='left'>
                <img src={blog} alt="blog" />
            </div>
            <div className='right'>
                <h1>Lorem Ipsum</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod a eligendi sed itaque obcaecati vero alias quas fuga aspernatur tempore!</p>
            </div>
        </div>
    </div>
  )
}

export default BlogCards