"use client"
import React from 'react'
import Image from 'next/image'
import ashish from '/public/ashish.png'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import './Intro.css'
const intro = () => {
  const [text] = useTypewriter({
    words:['Web Developer...'],
    loop: {},
  });
  return (
    <>
        <div className='intro'>
            <div className="content">
                <span className='hello'>Hello,</span>
                <span className='ku'>I'm <span className='ku hj'>Ashish Kumar,</span></span>
                <span className='ku'>a<span className='ku hi'> {text}<Cursor/></span></span>
                <p className='po'>I'm a very skillful front-end developer and passionate in problem solving.</p>
            </div>
            <div className='ii'><Image priority={true} src={ashish}  alt="ashish" className="me"/></div>
        </div>
    </>
  )
}

export default intro
