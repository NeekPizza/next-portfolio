import React from 'react';

import Header from '../shared/header';
const BaseLayout = ({
  children,
}) => (
  <React.Fragment>
    <Header />
    {children}
  </React.Fragment>
);

export default BaseLayout;