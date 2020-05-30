import React from 'react'
import {posts} from '../constant/application'
import FeaturedPost from '../components/post/featuredPost'
export const Top=()=> {

    return (
        <div>
            <h1>Top News</h1>
            {posts.map(post => (
              <FeaturedPost key={post.title} post={post} />
            ))}
        </div>
    )
}

export default Top
