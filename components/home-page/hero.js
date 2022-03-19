import styles from './hero.module.css'

function Hero() {
  return (
    <section className={styles.hero}>
        <div className={styles.image}>Image</div>
        <h1>Hi, I'm Max</h1>
        <p>
            I blog about web development - especially frontend frameworks like Angular or React.
        </p>
    </section>    
  )
}

export default Hero