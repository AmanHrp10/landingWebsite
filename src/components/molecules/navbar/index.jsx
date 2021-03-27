import React from 'react';
import styles from '../../../assets/css/global.module.css';
import Logo from '../../../assets/images/gadjian.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as action from '../../../redux/action';

function Navbar({ sidebar, showSidebar, closeSidebar }) {
  const handleShowSidebar = () => {
    showSidebar();
  };
  const handleCloseSidebar = () => {
    closeSidebar();
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.wrapperHeader}>
        <div className={styles.logoHeader}>
          <h4
            onClick={
              sidebar.isShow === false ? handleShowSidebar : handleCloseSidebar
            }
            className={styles.bars}
          >
            <i className='fa fa-bars fa-lg'></i>
          </h4>
          <div className={styles.logoImage}>
            <Link to='/'>
              <img src={Logo} width='100%' height='100%' alt='' />
            </Link>
          </div>
        </div>
        <div className='user d-flex align-items-center'>
          <h6 className={`pr-3 pt-2 ${styles.userName}`}>
            Hello, <span className='text-info'> Gadjian User</span>
          </h6>
          <div className={styles.avatar}>
            <img src='' alt='' />
          </div>
        </div>
      </div>
    </nav>
  );
}
const mapStateToProps = (state) => {
  return {
    sidebar: state.sidebar,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showSidebar: () => dispatch(action.showSidebar()),
    closeSidebar: () => dispatch(action.closeSidebar()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
