import React from 'react';
import Styles from '../styles/Footer.module.css';
import Image from 'next/image';
import Location from '../../../public/Images/location.png';
import Phone from '../../../public/Images/phone.png';
import mail from '../../../public/Images/mail.png';
import Logo from '../../../public/Images/header.png';




function Footer() {
  return (
    <div className={Styles.footerContainer}>   

    <div className={Styles.footerContact}>

        <div className= {Styles.footerCard}> 
            <Image src={Phone} alt='phone'
             loading="lazy"
              placeholder="blur"
            
            />
            <div > 
            <p>Phone Number</p>
            <p>+974 3118 1843</p>
            </div>

        </div>
        <div className= {Styles.footerCard}>
            <Image src={mail} alt='mail' 
             loading="lazy"
             placeholder="blur"/>
            <div>
            <p>Email Address</p>
            <p>Elbrithcqhr@gmail.com</p>
            </div>
        </div>
        <div className= {Styles.footerCard}>
            <Image src={Location} alt = 'loc'
             loading="lazy"
              placeholder="blur"
            />
            <div>
            <p>Office Location</p>
            <p>Ambassador Street, Zone 61</p>
            </div>
        </div>
        
        </div>

        <div className={Styles.fotterInfo}>
            <div className= {Styles.imgContent}>
            <Image src = {Logo} alt= 'companyLogo'/>
            </div>
            <div className={Styles.footInfos}>            
                <p>Your health, physical and emotional well-being is important
            to us. We are always by your side and have made it even
            easier for you to find the necessary vitamins.</p>
            </div>
    <div>
        
    </div>
            
            </div> 

            <p className= {Styles.copyright}>Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051</p>
     
    </div>
  )
}

export default Footer
