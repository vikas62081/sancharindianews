import React from 'react'
import {posts} from '../constant/application'
import FeaturedPost2 from '../components/post/featuredPost2'
export const Top=()=> {

    return (
        <div>
            <h1>Top News</h1>
            {posts.map(post => (
              <FeaturedPost2 key={post.title} post={post} getLink={(post)=>`${post.postId}`} />
            ))}
        </div>
    )
}

export default Top
