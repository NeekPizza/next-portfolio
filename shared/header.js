import React from 'react';
import Link from 'next/link';

const header = () => (
  <React.Fragment>
    <Link href="/about">
      <a>Go to About Page</a>
    </Link>
    <Link href="/portfolios">
      <a>Go to Portfolio Page</a>
    </Link>
    <Link href="/cv">
      <a>Go to CV Page</a>
    </Link>
    <Link href="/blogs">
      <a>Go to Blogs Page</a>
    </Link>
  </React.Fragment>
);

export default header;