import Image from 'next/image'
import styles from './hero.module.css'

// Hero个人介绍组件
function Hero() {
  return (
    <section className={styles.hero}>
        {/* Image组件还有Layout响应式布局等，google搜索 nextjs image */}
        <div className={styles.image}>
            <Image 
                src="/images/site/max.png" 
                alt="An image showing Max" 
                width={300} 
                height={300} 
            />
        </div>
        <h1>Hi, I'm Max</h1>
        <p>
            I blog about web development - especially frontend frameworks like Angular or React.
        </p>
    </section>    
  )
}

export default Hero