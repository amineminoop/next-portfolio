import Head from 'next/head'
import Main from '../components/Main'
import About from '../components/About'
import Navbar from '../components/Navbar'
import Skils from '@components/Skils'
import Projects from '@components/Projects'
import Contact from '@components/Contact'


export default function Home() {
  return (
    <div >
      <Head>
        <title>AM | Front-End Web Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href='https://fonts.googleapis.com/css2?family=Courgette&display=swap' rel="stylesheet"></link>
          </Head>
          <Navbar />
          <Main />
          <About />
          <Skils/>
          <Projects/>
          <Contact/>

        </div>
        )
}
