import styles from '../../../assets/css/global.module.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

function Sidebar({ sidebar }) {
  return (
    <>
      <div
        className={`${styles.sidebar} ${
          sidebar.isShow === false ? styles.sidebarResponsive : ''
        }`}
      >
        <div className={styles.sidebarWrapper}>
          <ul>
            <li className='py-1'>
              <NavLink exact activeClassName={'active'} to='/'>
                <span className='mr-3'>
                  <i className='fa fa-home'></i>
                </span>{' '}
                Beranda
              </NavLink>
            </li>
            <li className='py-1'>
              <NavLink exact activeClassName='active' to='/list'>
                <span className='mr-3'>
                  <i className='fa fa-users'></i>
                </span>{' '}
                Personal List
              </NavLink>
            </li>
            <li className='py-1'>
              <NavLink exact activeClassName='active' to='/daily'>
                <span className='mr-3'>
                  <i className='fa fa-calendar'></i>
                </span>{' '}
                Daily Attendance
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    sidebar: state.sidebar,
  };
};

export default connect(mapStateToProps)(Sidebar);
