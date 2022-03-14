import { useRouter } from 'next/router'
import { fetcher } from 'src/utils/fetcher'
import useSWR from 'swr'

export const useUser = () => {
  const router = useRouter()
  const { data: user, error: userError } = useSWR(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/users/${router.query.id}`
      : null,
    fetcher
  )
  const { data: todo, error: todoError } = useSWR(
    user?.id ? `https://jsonplaceholder.typicode.com/todos/${user.id}` : null,
    fetcher
  )

  return {
    user,
    todo,
    error: userError || todoError,
    isLoading: !user && !userError && !todoError,
  }
}
