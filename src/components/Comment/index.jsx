import Head from 'next/head'
import { useComment } from 'src/hooks/useComment'

export const Comment = () => {
  const { comment, album, error, isLoading } = useComment()

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
          {comment?.name} {comment?.name}
        </title>
      </Head>
      {comment?.email ? <div>Email: {comment.email}</div> : null}
      {comment?.body ? <div>{comment.body}</div> : null}
      {album?.title ? <p>アルバム： {album.title}</p> : null}
    </div>
  )
}
