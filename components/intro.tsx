import Image from 'next/image'
import React from 'react'

export default function intro() {
  return (
    <section>
        <div className='flex items-center justify-center'>
            <div>
                <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=368&h=368&q=100"
                alt='Jefta Supraja'
                width="192"
                height="192"
                quality="95"
                priority={true}
                className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'
                />
                <span className='absolute text-4xl'>
                    😊
                </span>
            </div>
        </div>
    </section>
  )
}
