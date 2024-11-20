import { notesData } from '@/lib/data'
import Image from 'next/image'
import React from 'react'

const TabNotes = () => {
  return (
    <div className='lg:py-4 space-y-9 md:space-y-16'>
      <div className='space-y-6'>
        <h2 className='text-2xl lg:text-40 font-medium text-brand-main uppercase text-center'>Top Notes</h2>
        <div className='flex items-stretch justify-center gap-2 md:gap-4 lg:gap-6'>
          {notesData.slice(0,3).map(note => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      </div>
      <div className='space-y-6'>
        <h2 className='text-2xl lg:text-40 font-medium text-brand-main uppercase text-center'>Mid Notes</h2>
        <div className='flex flex-wrap items-stretch justify-center gap-2 md:gap-4 lg:gap-6'>
          {notesData.slice(3,7).map(note => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      </div>
      <div className='space-y-6'>
        <h2 className='text-2xl lg:text-40 font-medium text-brand-main uppercase text-center'>Base Notes</h2>
        <div className='flex flex-wrap items-stretch justify-center gap-2 md:gap-4 lg:gap-6'>
          {notesData.slice(7,8).map(note => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      </div>
    </div>
  )
}


const NoteCard = ({note}) => {
  return (
    <div className='max-w-[100px] md:max-w-72 w-full min-h-full flex flex-col items-center justify-center gap-6 bg-brand-yellow-400 py-4 md:py-6 md:px-7'>
      <div className='relative w-20 h-[71px] lg:w-[137px] lg:h-[122px]'>
        <Image className='absolute object-cover' src={`/notes/note-${note.id}.png`} alt='' fill />
      </div>
      <h4 className='text-sm text-center lg:text-2xl font-semibold text-brand-balck'>{note.name}</h4>
    </div>
  )
}

export default TabNotes