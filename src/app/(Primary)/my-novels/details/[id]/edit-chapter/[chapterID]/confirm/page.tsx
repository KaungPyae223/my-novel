import ChapterEditConfirmPage from '@/features/MyNovelDetails/pages/ChapterEditConfirmPage';
import React from 'react'

const page = async ({ params }: { params: { id: string, chapterID: string } }) => {
  const { id, chapterID } = await params;
  return (
    <div>
      <ChapterEditConfirmPage novelId={id} chapterID={chapterID} />
    </div>
  )
}

export default page