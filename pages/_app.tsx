import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import { UserProvider } from '@auth0/nextjs-auth0' 
import AuthHeader from '../components/AuthHeader'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <UserProvider>
      <AuthHeader />
      <Header />
      <Component {...pageProps} />
    </UserProvider>
  </>
);
}

export default MyApp
