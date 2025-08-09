import React from 'react'
import ChapterEditPage from '@/features/MyNovelDetails/pages/ChapterEditPage'

const page = async ({ params }: { params: { id: string, chapterID: string } }) => {
  const { id, chapterID } = await params;
  return <ChapterEditPage novelId={id} chapterID={chapterID} />
}

export default page