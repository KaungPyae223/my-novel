import React from 'react'
import CommunityPostCreate from '../CommunityPost/CommunityPostCreate'
import CommunityPostCard from '../CommunityPost/CommunityPostCard'

const CommunityPostContainer = () => {
  return (
    <div className="space-y-6  my-6 ">
        <CommunityPostCreate />
        <CommunityPostCard />
        <CommunityPostCard />
        <CommunityPostCard />
        <CommunityPostCard />
        <CommunityPostCard />
        <CommunityPostCard />
        <CommunityPostCard />
        <CommunityPostCard />

    </div>
  )
}

export default CommunityPostContainer