import React from 'react'
import CreateChapterConfirmPage from '@/features/MyNovelDetails/pages/CreateChapterConfirmPage'

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return <CreateChapterConfirmPage novelId={id} />
}

export default page