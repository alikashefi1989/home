'use client'
export default function Home() {
  return (
    <div>
      <button onClick={() => {
        fetch('/api', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: 'hasan', lastName: 'jafari', email: 'any', age: 25 }),
        }).then(res => res.json()).then(res => console.log('FUCK ======>>', res))
      }}>clickkkkkkkkkkkkkkkkk</button>
    </div>
  )
}
