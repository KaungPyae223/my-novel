import MyNovelDetailsPage from '@/features/MyNovelDetails/pages/MyNovelDetailsPage';
import React from 'react'

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return (
    <div>
      <MyNovelDetailsPage id={id} />
    </div>
  )
}

export default page