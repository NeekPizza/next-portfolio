import Link from 'next/link'

const Index = () => (
  <div>
    <ul>
      <li>
        <Link href="/about">
          <a>Go to About Page</a>
        </Link>
      </li>
      <li>
        <Link href="/portfolios">
          <a>Go to Portfolio Page</a>
        </Link>
      </li>
      <li>
        <Link href="/cv">
          <a>Go to CV Page</a>
        </Link>
      </li>
      <li>
        <Link href="/blogs">
          <a>Go to Blogs Page</a>
        </Link>
      </li>
    
    </ul>
    <p>Hello Next.js</p>
  </div>
)

export default Index