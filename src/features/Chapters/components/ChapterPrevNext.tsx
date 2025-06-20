import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'

const ChapterPrevNext = () => {
  return (
    <div className='flex flex-row items-center justify-between'>
        <div className='flex cursor-pointer text-sm font-medium border bg-white border-gray-200 px-4 py-3 rounded-md flex-row items-center gap-2'>
            <ChevronLeft className='size-5' />
            <p>Previous Chapter</p>
        </div>
        <p className='text-sm text-gray-500'> 1 / 21</p>
        <div className='flex cursor-pointer text-sm font-medium  bg-gray-800 text-white border border-gray-200 px-4 py-3 rounded-md flex-row items-center gap-2'>
            <p>Next Chapter</p>
            <ChevronRight className='size-5' />
        </div>
    </div>
  )
}

export default ChapterPrevNext