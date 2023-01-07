import React from 'react'
import BlogCards from './BlogCards'
import Newsletter from './Newsletter'
import Tags from './Tags'
import Talk from './Talk'
import Topics from './Topics'

const Blog = () => {
  return (
    <div style={{width: '80%', margin: 'auto'}}>
    <div style={{backgroundColor: '#F7F7F7', paddingBottom: '5rem', display: 'grid', gridTemplateColumns: '5fr 2fr', padding: '0', margin: '0'}}>
        <div style={{ width: '70%', }}>
        <h1>Latest Blogs!</h1>
      <BlogCards heading="Building microservices with Dropwizard, MongoDB & Docker" content="This NoSQL database oriented to documents (by documents like JSON) combines some of the features from relational databases, easy to use and the multi" />
      <BlogCards heading="Building microservices with Dropwizard, MongoDB & Docker" content="This NoSQL database oriented to documents (by documents like JSON) combines some of the features from relational databases, easy to use and the multi" />
      <BlogCards heading="Building microservices with Dropwizard, MongoDB & Docker" content="This NoSQL database oriented to documents (by documents like JSON) combines some of the features from relational databases, easy to use and the multi" />
      <BlogCards heading="Building microservices with Dropwizard, MongoDB & Docker" content="This NoSQL database oriented to documents (by documents like JSON) combines some of the features from relational databases, easy to use and the multi" />
      <BlogCards heading="Building microservices with Dropwizard, MongoDB & Docker" content="This NoSQL database oriented to documents (by documents like JSON) combines some of the features from relational databases, easy to use and the multi" />
      <BlogCards heading="Building microservices with Dropwizard, MongoDB & Docker" content="This NoSQL database oriented to documents (by documents like JSON) combines some of the features from relational databases, easy to use and the multi" />
      <BlogCards heading="Building microservices with Dropwizard, MongoDB & Docker" content="This NoSQL database oriented to documents (by documents like JSON) combines some of the features from relational databases, easy to use and the multi" />
      <div style={{width: '70%', margin: 'auto'}}>
      <button className='btn btn-primary' style={{marginTop: '2rem', margin: 'auto'}}>Load More</button>
      </div>
      </div>
      <div>
        <h1>topics</h1>
        <Topics />
        <h1>topics</h1>
        <Talk />
        <h1>topics</h1>
        <Tags />
        <h1>topics</h1>
        <Newsletter />
      </div>
      </div>
      </div>
  )
}

export default Blog