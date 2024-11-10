import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
<li>
    <Link href="/dashboard/users/1">User1
    </Link>
    <Link href="/dashboard/users/2">User2
    </Link>
    <Link href="/dashboard/users/3">User3
    </Link>
    <Link href="/dashboard/users/4">User4
    </Link>
</li>

    </div>
  )
}

export default page