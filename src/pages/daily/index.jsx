import Main from '../../components/molecules/mainComponent';
import HeaderContent from '../../components/molecules/contentHeader/index';

export default function Daily() {
  return (
    <div>
      <Main>
        <HeaderContent title='Daily Attendance' desc='Your daily activity' />
      </Main>
    </div>
  );
}
