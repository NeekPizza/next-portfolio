import React, { useEffect } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';

const Index = () => {
  useEffect(() => {
    console.log('component did mount');
    return () => {
      console.log('component did unmount');
    }
  })
  return (
    <React.Fragment>
        <BaseLayout>
          <h1>I am index page</h1>
        </BaseLayout>
    </React.Fragment>
  )
};

export default Index