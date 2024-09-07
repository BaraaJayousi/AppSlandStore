'use server';
import { deleteToken, fetchToken } from "@/lib/Token"
import { redirect } from "next/navigation"

export async function signinAction( values: {username:string, password:string}) {
  // fetch the token and store it as a cookie in the server
  await fetchToken(values.username, values.password)
  // 5. Redirect user
  redirect('/')
}

export async function signoutAction() {
  //delete the token from the cookies
  deleteToken()
  //redirect the use to the login page
  redirect('/auth/login');
}