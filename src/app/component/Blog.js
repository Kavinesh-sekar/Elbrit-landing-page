import React from 'react';
import styles from '../styles/Blog.module.css';
import Image1 from '../../../public/Images/blog1-450x580.jpg.png';
import Image2 from '../../../public/Images/blog2-450x580.jpg.png';

function Blog() {
    const blogs = [
        { id: 1, date: '20 APR', title: 'The Covid-19 Epidemic in 2022 Is Back', image: Image1.src, height: 'large' },
        { id: 2, date: '20 APR', title: 'The Covid-19 Epidemic in 2022 Is Back', image: Image1.src, height: 'large' },
        { id: 3, date: '20 APR', title: 'The Covid-19 Epidemic in 2023 Is Back', image: Image2.src, height: 'large' },
        { id: 4, date: '20 APR', title: 'The Covid-19 Epidemic in 2023 Is Back', image: Image2.src, height: 'small' },
        { id: 5, date: '17 MAR', title: 'Hac hendrerit mus nons semper suspendisse', image: Image2.src, height: 'small' },
        { id: 6, date: '20 APR', title: 'The Covid-19 Epidemic in 2023 Is Back', image: Image2.src, height: 'small' },
    ];

    return (
        <section className={styles.blogSection}>
            <h2 className= {styles.head}>Our Blog</h2>
            <h2 className={styles.sectionTitle}>Latest News</h2>
            <div className={styles.gridContainer}>
                {blogs.map((blog) => (
                    <div
                        key={blog.id}
                        className={styles.card}
                        style={{ backgroundImage: `url(${blog.image})` }}
                    >
                        <div className={styles.cardOverlay}>
                            <span className={styles.date}>{blog.date}</span>
                            <h3 className={styles.title}>{blog.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Blog;
