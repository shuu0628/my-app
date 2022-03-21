import Link from 'next/link'
import { usePostsByUserId } from 'src/hooks/useFetchArray'

export const PostsByUserId = (props) => {
  const { data, error, isLoading, isEmpty } = usePostsByUserId(props.id)

  if (isLoading) {
    return <div>ローディング中</div>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  if (isEmpty) {
    return <div>データは空です。</div>
  }

  return (
    <ol>
      {data.map((data) => {
        return (
          <li key={data.id}>
            <Link href={`/posts/${data.id}`}>
              <a>{data.title}</a>
            </Link>
          </li>
        )
      })}
    </ol>
  )
}
