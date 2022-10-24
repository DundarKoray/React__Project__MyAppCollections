import styles from './title.module.scss'

const Title = ({title}) => {
  return (
    <div className={styles.title}>
        <h1>{title}</h1>
        <div className={styles.underline}></div>
    </div>
  )
}

export default Title