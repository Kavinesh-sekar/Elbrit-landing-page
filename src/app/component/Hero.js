import React from 'react';
import styles from '../styles/Hero.module.css';
import f2 from '../../../public/Images/f2-1.png.png';
import Image from 'next/image';
import We from '../../../public/Images/wieght.png';
import v from '../../../public/Images/vitamin.png';
import food from '../../../public/Images/food.png';



function Hero() {
  return (
    <>
    <div className={styles.totalContaier} >
     <h1 className={styles.head} >Essential Vitamins</h1>
    <div className={styles.heroContainer} >
   
        <div className={styles.heroleft}>

            <h4 className={styles.subtitle}>Online Medical Supplies</h4>
            <h3 className={styles.title}>Get Your Vitamins <br /> & Minerals </h3>
            <button className={styles.exploreButton} >Explore</button>

        </div>
        <div className={styles.imgCenter}>

        <Image className= {styles.imgs} src = {f2} alt = 'f2-image' width={400} height={400}   loading="lazy"
              placeholder="blur"   />
        </div>
        <div className= {styles.heroright}>

            <div className={styles.rightContent}>
            <Image src = {We} alt = 'weight'  loading="lazy"
              placeholder="blur" />
            <div>
                
            <h4>Vitamins</h4>
            <p>Increased vitamin and <br></br> Minerals in your diet</p>
            </div>
            </div>
            <div  className={styles.rightContent} >
            <Image src = {We} alt = 'weight'  loading="lazy"
              placeholder="blur"/>
            <div>
                
            <h4>Weight Loss</h4>
            <p>Find scientifically proven <br></br>solutions</p>
            </div>
            </div>
            <div  className={styles.rightContent}>
            <Image src = {We} alt = 'weight'  loading="lazy"
              placeholder="blur" />
            <div>
                
            <h4>Functional Foods</h4>
              <p>From protein powders <br></br> to baby formula</p>
            </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Hero
