import Head from 'next/head'
import { useUser } from 'src/hooks/useUser'

export const User = () => {
  const { user, todo, error, isLoading } = useUser()

  if (isLoading) {
    return <div>ローディング中</div>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  return (
    <div>
      <Head>
        <title>
          {user?.name} {user?.username}
        </title>
      </Head>
      {user?.email ? <div>Email: {user.email}</div> : null}
      {user?.address ? (
        <div>
          住所: {user.address.city} {user.address.suite} {user.address.street}
        </div>
      ) : null}
      {todo?.title ? <div>やること： {todo.title}</div> : null}
    </div>
  )
}
