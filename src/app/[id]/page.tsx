import { headers } from 'next/headers'

export default async function Item({ params: { id } }: any) {
  const headersList = headers()
  const token = headersList.get('token')
  console.log('token ===>>', token)
  // console.log("id ===>>", id)
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { cache: 'no-store' })
  const user = await res.json()

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
      <pre>
        {
          typeof user === 'object' &&
          Object.keys(user).map((item: string) => (
            <div>
              <span>{item}</span>
              <span>: </span>
              <span>{JSON.stringify(user[item])}</span>
            </div>
          ))
        }
      </pre>
    </div>
  )
}
