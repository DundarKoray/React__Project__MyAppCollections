import styles from './title.module.scss'

const Title = ({title}) => {
  return (
    <div className={styles.title}>
        <h1>{title}</h1>
    </div>
  )
}

export default Title