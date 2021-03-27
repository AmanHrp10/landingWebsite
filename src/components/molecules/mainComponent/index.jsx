import styles from '../../../assets/css/global.module.css';
import Navbar from '../navbar';
import Sidebar from '../sidebar';

export default function Main({ children }) {
  return (
    <>
      <div>
        <Navbar />
        <Sidebar />
        <div className={`${styles.mainContent}`}>{children}</div>
      </div>
    </>
  );
}
