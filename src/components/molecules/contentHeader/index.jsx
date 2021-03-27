import { Link } from 'react-router-dom';
import styles from '../../../assets/css/global.module.css';

function HeaderContent({ title, desc, onChange, value, name }) {
  return (
    <div className={styles.wrapperHeaderContent}>
      <div
        className={`d-flex justify-content-between  align-items-center ${styles.headerContent}`}
      >
        <div className='title pt-3'>
          <h4
            className={`${styles.masterColor} ${styles.titleHeaderContent} font-weight-bold`}
          >
            {title}
          </h4>
          <p>{desc}</p>
        </div>
        <div className={styles.headerContentAction}>
          <input
            placeholder='Find Personnels'
            className={`form-control ${styles.inputSearch}`}
            type='text'
            onChange={onChange}
            value={value}
            name={name}
          />
          <i
            className={`fa fa-search fa-lg ${styles.iconSearch}`}
            style={{ color: '#17a2b8' }}
          ></i>
          <div className={styles.wrapperHeaderAddAction}>
            <Link to='' className={`btn btn-info ${styles.headerAddAction}`}>
              Add Personel <i className='ml-3 fa fa-plus'></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderContent;
