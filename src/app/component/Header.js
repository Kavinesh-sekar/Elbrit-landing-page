import React from 'react';
import HeadImg from '../../../public/Images/header.png';
import Image from 'next/image';

function Header() {
  return (
   <>
   <div style={{ textAlign:'center'}} >
    <Image src = {HeadImg}  alt = 'headerimg'  loading="lazy"
              placeholder="blur" />
   </div>
   </>

  )
}

export default Header
