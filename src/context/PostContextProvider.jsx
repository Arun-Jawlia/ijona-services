import React, { useState } from 'react'
import { createContext } from 'react'

export const PostContext = createContext()




const PostContextProvider = ({children}) => {

    const [post, setPost] = useState([])


  return (
    <PostContext.Provider value={{post,setPost}}>
        {children}
    </PostContext.Provider>
  )
}

export default PostContextProvider