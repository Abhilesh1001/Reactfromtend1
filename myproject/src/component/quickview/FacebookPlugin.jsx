import React from 'react'
import { FacebookProvider, Comments } from 'react-facebook';

const FacebookPlugin = () => {
    
  return (
    <FacebookProvider appId="624858779749945">
      <Comments href="http://127.0.0.1:5173/shop/QuivkView" />
    </FacebookProvider>
  )
}

export default FacebookPlugin



