import clsx from 'clsx'
import styles from '../styles/Staff.module.css'

const Staff = () => (
  <div className={styles.staff}>
    <div className={styles.bar} />
    <div className={clsx(styles.bar, styles.end)} />
  </div>
)

export default Staff;
