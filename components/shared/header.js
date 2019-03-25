import React from 'react';
import Link from 'next/link';

import '../../styles/main.scss';

const Header = ({
  title,
  children,
}) => (
  <React.Fragment>
    <p>{ title }</p>
    { children }
    <p className="class">I am a styled P tag</p>
    <p className="classFile">I am a styled file tag</p>
    <Link href="/">
      <a>Go to Home Page</a>
    </Link>
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
    <style jsx>
    {`
      a {
        font-size: 20px;
      }

      .class {
        color: red;
      }
    `}
    </style>
  </React.Fragment>
);

export default Header;