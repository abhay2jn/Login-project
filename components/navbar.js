import Link from 'next/link'
import React from 'react'

function navbar() {
  return (
    <ul className='login-menu border bg-green-800'>
            <li>
                <Link href="/login">Login to the account</Link>
            </li>
            <li>
                <Link href="/login/admin">Login Admin</Link>
            </li>
            <li>
                <Link href="/login/user">Login USers</Link>
            </li>
        </ul>
  )
}

export default navbar;