import styles from './title.module.scss'

const Title = ({title, dark}) => {
  return (
    <div className={styles.title}>
        {dark ? <h1 className={styles.dark}>{title}</h1> : <h1>{title}</h1> }
        <div className={styles.underline}></div>
    </div>
  )
}

export default Title