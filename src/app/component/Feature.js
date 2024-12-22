import React from 'react';
import styles from '../styles/Features.module.css';
import Image from 'next/image';

import clinicallyStudiedIcon from '../../../public/Images/clinically-studied.png';
import vegetarianIcon from '../../../public/Images/vegetarian-friendly.png';
import madeInIndiaIcon from '../../../public/Images/made-in-india.png';
import freeShippingIcon from '../../../public/Images/free-shipping.png';
import noRiskIcon from '../../../public/Images/no-risk.png';
import gmoFreeIcon from '../../../public/Images/gmo-free.png';

const features = [
    {
      id: 1,
      title: 'Clinically Studied',
      description: 'All products that we offer have undergone lab and safety tests',
      icon: clinicallyStudiedIcon,
    },
    {
      id: 2,
      title: 'Vegetarian Friendly',
      description: 'We have a wide selection of vegetarian products to meet your needs',
      icon: vegetarianIcon,
    },
    {
      id: 3,
      title: 'Made In India',
      description: 'Shop local and explore health products made right here in India',
      icon: madeInIndiaIcon,
    },
    {
      id: 4,
      title: 'Free Shipping',
      description: 'We deliver to your door with no shipping costs on your orders',
      icon: freeShippingIcon,
    },
    {
      id: 5,
      title: 'No Risk',
      description: 'We ensure that all products are safe and within their use-by date',
      icon: noRiskIcon,
    },
    {
      id: 6,
      title: 'GMO Free',
      description: 'Natural, no modified products and derivatives for those who need it',
      icon: gmoFreeIcon,
    },
  ];

function Feature() {
  return (
   <div className={styles.featuresContainer}>
    <div className={styles.featuresGrid}>
        {features.map((feature)=>(
            <div className={styles.featureItem} key={feature.id}>
                <div className={styles.iconWrapper}>
              <Image src={feature.icon} alt={feature.title} width={50} height={50}
              loading="lazy"
              placeholder="blur"
              />
            </div>
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.featureDescription}>{feature.description}</p> 

                </div>
        ))}

    </div>

   </div>
  )
}

export default Feature
