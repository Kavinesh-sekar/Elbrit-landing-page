import React from 'react';
import Style from '../styles/Product.module.css';

function Product() {
  return (
    <div className={Style.prodContainer}>
        <div className={Style.FirstRow}>
            <div className={Style.intro}>
            <h3 className={Style.cardHead}>INGREDIENTS</h3>
            <p className={Style.cardDesc}>Better Ingredients</p>
            <p >Only the best when you choose products offered on our platform - high-quality
                ingredients for high quality products!</p>
            </div>
            <div className={Style.vitC} >
                <h3 className={Style.cardHead}>Vitamin C</h3>
                <p className={Style.cardDesc}>Vitamin C as ascorbic acid</p>
                <p className={Style.cardBtn}>see more</p>

            </div>
            <div className={Style.vitB}>
            <h3 className={Style.cardHead}>Vitamin B3</h3>
            <p className={Style.cardDesc}>Vitamin C as ascorbic acid</p>
            <p className={Style.cardBtn}>see more</p>

            </div>

        </div>
        <div className={Style.rowSecond}>
        <div className={Style.vitM}>
        <h3 className={Style.cardHead}>Vitamin B3</h3>
        <p className={Style.cardDesc}>Vitamin C as ascorbic acid</p>
        <p className={Style.cardBtn}>see more</p>

            </div>
            <div className={Style.vitH}>
            <h3 className={Style.cardHead}>Vitamin B3</h3>
            <p className={Style.cardDesc}>Vitamin C as ascorbic acid</p>
            <p className={Style.cardBtn}>see more</p>

            </div>
            <div className={Style.vitL}>
            <h3 className={Style.cardHead}>Vitamin B3</h3>
            <p className={Style.cardDesc}>Vitamin C as ascorbic acid</p>
            <p className={Style.cardBtn}>see more</p>

            </div>
            {/* <div className={Style.vitL}>
                <h3>Vitamin B3</h3>
                <p>Vitamin C as ascorbic acid</p>
                <p>see more</p>

            </div> */}

        </div>
    
    </div>
  )
}

export default Product
