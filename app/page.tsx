import { redirect } from 'next/navigation';

export default function Home() {
  return (
    <>
      <p>Redirecting you to products page</p>
      {redirect('/products')}
    </>
  );
}
