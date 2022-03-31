import { AnimatePresence } from 'framer-motion'
import Navigation from '../component/Navigation'
import '../styles/globals.css'
import {useRouter} from 'next/router'; 
import { DefaultSeo } from 'next-seo';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const url = `ashish.verce.app${router.route}`
  return (<Navigation>
  <AnimatePresence
    exitBeforeEnter
    initial={false}
    onExitComplete={() => window.scrollTo(0, 0)}
>
<DefaultSeo
        titleTemplate="%s - Ashish | Full Stack Developer | Android Developer - Freelancer"
        openGraph={{
            type: 'website',
            locale: 'en_IE',
            url,
            description: 'Hi, I am Ashish Kumar. I am a full Stack Web Developer & android developer based in bihar. I am current studying in 3rd year at National Institute of Technology, manipur.',
            site_name: ' Ashish | Full Stack Developer | Android Developer - Freelancer',
            images: [],
        }}
        canonical={url}
      />
<Component {...pageProps} /></AnimatePresence></Navigation>)
}

export default MyApp
