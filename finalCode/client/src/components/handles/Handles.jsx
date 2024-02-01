import React from 'react'
import './Handles.css'
import { AiFillLinkedin } from 'react-icons/ai';
import { FaGithubSquare } from 'react-icons/fa';

const Handles = () => {
  return (
    <section className='socials'>
      <a href="https://www.linkedin.com/in/sujan-sudhakar-445310258/" target='_blank' rel="noopener noreferrer"><AiFillLinkedin className='icon' /></a>
      <a href="https://github.com/Sujaaan" target='_blank' rel="noopener noreferrer"><FaGithubSquare className='icon' />
      </a>


    </section>
  )
}

export default Handles
