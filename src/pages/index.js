import Link from 'components/Link'
import React from 'react'

export default () => (
  <div
    style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      textAlign: 'left',
    }}
  >
    <div>
      <div>Home Page Coming Soon</div>
      <div>Meanwhile…</div>
      <Link to="/the-work-blog">The Work Blog</Link>
    </div>
  </div>
)
