import React from 'react';
import Main from '../../components/molecules/mainComponent';
import HeaderContent from '../../components/molecules/contentHeader/index';

export default function Beranda() {
  return (
    <div>
      <Main>
        <HeaderContent title='Home' desc='Be Happy' />
      </Main>
    </div>
  );
}
