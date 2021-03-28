import { useEffect, useState } from 'react';
import HeaderContent from '../../components/molecules/contentHeader';
import Main from '../../components/molecules/mainComponent';
import Card from '../../components/molecules/card/index';
import styles from '../../assets/css/global.module.css';
import { connect } from 'react-redux';
import * as action from '../../redux/action';
import ReactPaginate from 'react-paginate';

function List({ getUser, users, isLoading }) {
  const [datas, setDatas] = useState();
  const [offset, setOffset] = useState(0);
  const [dataPaginate] = useState(4);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  const load = async () => {
    const data = users;
    const slice = users.slice(offset, offset + dataPaginate);
    setDatas(slice);
    setPageCount(Math.ceil(data && data.length / dataPaginate));
  };

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * dataPaginate;

    setCurrentPage(selectedPage);
    setOffset(offset);
  };

  useEffect(() => {
    load();
    getUser();
  }, [currentPage]);

  return (
    <div>
      <Main>
        <HeaderContent
          title='PERSONNEL LIST'
          desc='List off all personel'
          name='search'
        />
        <div className='container'>
          <div className={`${styles.wrapperContent} row`}>
            {isLoading ? (
              <div className='col-md'>
                <h2 className='text-center'>Loading...</h2>
              </div>
            ) : (
              datas &&
              datas.map((data, index) => {
                return (
                  <div className='col-lg-3' key={index}>
                    <Card
                      name={`${data.name.title}, ${data.name.first} ${data.name.last}`}
                      phone={data.phone}
                      birthday={new Date(data.dob.date).toDateString()}
                      email={data.email}
                      image={data.picture.large}
                      id={data.id.value && data.id.value}
                    />
                  </div>
                );
              })
            )}
          </div>
          <div className='row'>
            <div className='col-md d-flex justify-content-center'>
              {
                <ReactPaginate
                  previousLabel='Previous Page'
                  nextLabel='Next Page'
                  pageCount={pageCount}
                  containerClassName={`${styles.paginate} pagination`}
                  subContainerClassName={'pages pagination'}
                  onPageChange={handlePageClick}
                />
              }
            </div>
          </div>
        </div>
      </Main>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    sidebar: state.sidebar,
    users: state.users.users,
    isLoading: state.users.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showSidebar: () => dispatch(action.showSidebar()),
    closeSidebar: () => dispatch(action.closeSidebar()),
    getUser: (data) => dispatch(action.getUser(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
