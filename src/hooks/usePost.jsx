import useSWR from 'swr'
import { API_URL } from '/src/utils/const'

export const usePost = (id) => {
  const { data, error } = useSWR(id ? `${API_URL}/posts/${id}` : null)

  return {
    data,
    error,
    isLoading: !data && !error,
  }
}
