'use client'

import { useRouter } from "next/navigation"

export default function Profile() {
  const router = useRouter()
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '20px',
      }}
    >
      <button
        onClick={() => {
          fetch('/api/auth', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: 'hasan', lastName: 'jafari', email: 'any', age: 25 }),
          }).then(res => res.json()).then(res => console.log('AFTER login ======>>', res))
        }}>login</button>
      <button
        onClick={() => {
          fetch('/api/auth', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Auth': 'HHHHHHHHH.BBBBBBBBB.SSSSSSSSS',
            },
          }).then(res => res.json()).then(res => console.log('AFTER logout ======>>', res))
        }}>logout</button>
      <button
        onClick={() => router.push('/')}>
        home
      </button>
    </div>
  )
}
