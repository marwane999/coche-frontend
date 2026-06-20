const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string
  ) {
    super(message)
    this.name = 'ApiError'
  }
}

export async function fetchApi<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const url = `${BASE_URL}${endpoint}`
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'An error occurred' }))
    throw new ApiError(response.status, error.message || 'An error occurred')
  }

  return response.json()
}

export function apiGet<T>(endpoint: string, options?: RequestInit) {
  return fetchApi<T>(endpoint, { ...options, method: 'GET' })
}

export function apiPost<T>(endpoint: string, body: unknown, options?: RequestInit) {
  return fetchApi<T>(endpoint, { ...options, method: 'POST', body: JSON.stringify(body) })
}

export function apiPut<T>(endpoint: string, body: unknown, options?: RequestInit) {
  return fetchApi<T>(endpoint, { ...options, method: 'PUT', body: JSON.stringify(body) })
}

export function apiDelete<T>(endpoint: string, options?: RequestInit) {
  return fetchApi<T>(endpoint, { ...options, method: 'DELETE' })
}
