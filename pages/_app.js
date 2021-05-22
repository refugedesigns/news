import '../styles/globals.css'
import MainNavigation from '../components/Layout/mainNavigation'

function MyApp({ Component, pageProps }) {
  return (
    <div className="h-full bg-gray-200 w-full font-serif ">
      <MainNavigation>
        <Component {...pageProps} />
      </MainNavigation>
    </div>
  );
}

export default MyApp
