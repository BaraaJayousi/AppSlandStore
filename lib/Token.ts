import 'server-only'
import { cookies } from 'next/headers'
import { _postSignIn } from '@/Axios'

export async function fetchToken(username: string, password:string) {
  // const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  // const session = await encrypt({ userId, expiresAt })
    const token = await _postSignIn(username, password)
    cookies().set('token', token, {
      httpOnly: true,
      secure: true,
      path: '/',
    })
}

export async function deleteToken(){
  cookies().delete('token')
}