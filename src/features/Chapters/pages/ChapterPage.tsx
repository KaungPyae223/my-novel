"use client";
import React from 'react'
import ChapterNovelIntro from '../components/ChapterNovelIntro'
import Container from '@/features/Components/Container/Container';
import ChapterCard from '../components/ChapterCard';
import ChapterPrevNext from '../components/ChapterPrevNext';
import ChapterHeader from '../components/ChapterHeader';

const ChapterPage = () => {
  return (
    <div >
        <ChapterHeader />
        <Container className='mt-16 py-6 space-y-6'>
            <ChapterNovelIntro />
            <ChapterCard />
            <ChapterPrevNext />
        </Container>
    </div>
  )
}

export default ChapterPage