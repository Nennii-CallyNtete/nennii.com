import Head from 'next/head'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import AllPagesPDFViewer from "../components/allPages";
import styles from '../styles/Home.module.css'
import avatarTwo from '../public/avatarComputer.png'
import eId from '../public/eid.svg'

export default function Home() {

  return (
    <div className=''>
      <Head>
        <title>Nennii.Dev</title>
        <meta name="description" content="Dev Portfolio web page of Nennii Cally-Ntete." />
        <link rel="icon" href="/myAvatar.svg" />
      </Head>

      <main className=''>
      <section className='h-screen'>
        <div className='relative overflow-hidden bg-black'>
          <div className='h-72 md:h-48 w-full text-white relative top-40 md:left-52 left-10 text-3xl md:text-6xl font-bold p-3'>
            <h1>
            Hi, I am <br className="block md:hidden" />
              <TypeAnimation
                // Same String at the start will only be typed once, initially
                sequence={[
                'Nennii!',
                2000,
                'Creative',
                2000,
                'Innovative',
                2000,
                'a Developer!',
                2000,
                ]}
                speed={30} // Custom Speed from 1-99 - Default Speed: 40
                style={{ color: 'orange' }}
                wrapper="span" // Animation will be rendered as a <span>
                repeat={Infinity} // Repeat this Animation Sequence infinitely
              />
            </h1>
          </div>
          <div className='absolute md:h-60 md:w-60 md:top-28 md:right-60 h-40 w-40 top-36 right-6'>
            <video src='/avatarvid.mov' autoPlay loop playsInline muted>Cant Display Video</video>
          </div>
          <svg className='md:block align-bottom ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fillOpacity="1" d="M0,192L48,202.7C96,213,192,235,288,250.7C384,267,480,277,576,272C672,267,768,245,864,213.3C960,181,1056,139,1152,138.7C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
        <div className='bg-white flex flex-col md:flex-row w-10/12 mx-auto place-content-between'>
          <div className='font-bold md:text-xl text-lg font-mono'>
            <p><span className='text-orange-400'>let</span> me = &#123;</p>
            <p className='pl-3 '><span className='text-purple-500'>name :</span><span className='text-emerald-600'> "Nennii"</span>,</p>
            <p className='pl-3 '><span className='text-purple-500'>type :</span><span className='text-emerald-600'> ['Full Stack Developer', <br/><span className='pl-20'>'Data Scientist',</span> <br/><span className='pl-20'>'DevOps Engineer'</span> ]</span>,</p>
            <p className='pl-3 '><span className='text-purple-500'>location :</span><span className='text-emerald-600'> "Calgary, AB Canada"</span>,</p>
            <p className='pl-3 '><span className='text-purple-500'>properties : </span><br className="block md:hidden" />
            <TypeAnimation
                // Same String at the start will only be typed once, initially
                sequence={[
                '[ "JavaScript" , "SQL", "Python", "Elixir", "C++", ...resume ]',
                2000,
                ]}
                speed={30} // Custom Speed from 1-99 - Default Speed: 40
                style={{ color: '#059669' }}
                wrapper="span" // Animation will be rendered as a <span>
                repeat={Infinity} // Repeat this Animation Sequence infinitely
              />
            </p>
            <span>&#125;</span>
          </div>
          <div className='flex flex-col place-content-around md:mr-28 font-semibold js-show-on-scroll h-auto'>
            <button className='border px-5 my-2 py-2 bg-amber-500 hover:bg-amber-600 ease-in-out duration-300'>
              <a href='/Resume-Dev.docx' download='Nennii_Cally_Ntete_Resume'>Get Resume</a>
            </button>
            <button className='border px-5 py-2 bg-amber-500 hover:bg-amber-600 ease-in-out duration-300'>
              <a href='#projects-section'>See Projects</a>
            </button>
            <button className='border px-5 py-2 bg-amber-500 hover:bg-amber-600 ease-in-out duration-300' hidden>
              <a href=''>Discover More</a>
            </button>
          </div>
        </div>
      </section>
      <section className='h-screen bg-gradient-to-b from-black to-gray-600'>
        <div className='mx-auto text-center'>
          <div className='p-10'>
            <h1 className='text-white text-3xl md:text-6xl font-bold font-sans subpixel-antialiased'>My <span className='text-amber-500'>Pro</span>jects</h1>
          </div>
          <div className='mt-5 h-20 w-20 mx-auto md:h-fit md:w-fit' id='projects-section'>
            <Image  
              src={avatarTwo}
              height={216.6}
              width={167.4}
              alt="Author Avatar on Computer"
              placeholder='blur'
            />
          </div>
          <div>
            <p></p>
          </div>
          <div className='flex flex-row flex-wrap place-content-around relative top-28 overflow-y-auto'>
            <div className='w-40 h-60 md:w-60 md:h-72 bg-black text-white p-3 rounded-sm shadow-2xl shadow-amber-500 js-show-on-scroll'>
                <div className='flex flex-col place-content-between h-full w-full'>
                  <div className='mx-auto'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 md:w-16 md:h-16 text-sky-300">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                    </svg>
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold'>CoinWatch</h3>
                  </div>
                  <div>
                    <p className='text-xs md:text-sm overflow-clip truncate md:whitespace-normal'>
                      Frontend Real-time data driven dashboard for displaying and analysing crypto market data.
                    </p>
                  </div>
                  <div className='flex flex-row place-content-between'>
                    <button className='border px-2 py-1 bg-amber-500 border-none hover:bg-amber-600 ease-in-out duration-300 text-xs md:text-sm'>
                      <a href=''>Read About it</a>
                    </button>
                    <button className='text-xs'>
                      <a href='' className='hover:text-blue-500 ease-in-out duration-300'>Live Demo &#62;</a>
                    </button>
                  </div>
                </div>
            </div>
            <div className='w-40 h-60 md:w-60 md:h-72 bg-black text-white p-3 rounded-sm shadow-2xl shadow-amber-500'>
                <div className='flex flex-col place-content-between h-full'>
                  <div className='mx-auto'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 md:w-16 md:h-16 text-sky-300">
                    <path fillRule="evenodd" d="M3 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5H15v-18a.75.75 0 000-1.5H3zM6.75 19.5v-2.25a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75zM6 6.75A.75.75 0 016.75 6h.75a.75.75 0 010 1.5h-.75A.75.75 0 016 6.75zM6.75 9a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM6 12.75a.75.75 0 01.75-.75h.75a.75.75 0 010 1.5h-.75a.75.75 0 01-.75-.75zM10.5 6a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zm-.75 3.75A.75.75 0 0110.5 9h.75a.75.75 0 010 1.5h-.75a.75.75 0 01-.75-.75zM10.5 12a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM16.5 6.75v15h5.25a.75.75 0 000-1.5H21v-12a.75.75 0 000-1.5h-4.5zm1.5 4.5a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008zm.75 2.25a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75v-.008a.75.75 0 00-.75-.75h-.008zM18 17.25a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z" clipRule="evenodd" />
                  </svg>
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold'>InterFreak</h3>
                  </div>
                  <div>
                    <p className='text-xs md:text-sm overflow-clip truncate md:whitespace-normal'>
                    A SAAS company project with a marketed software product targeting freelance developers and their workflows.
                    </p>
                  </div>
                  <div className='flex flex-row place-content-between'>
                    <button className='border px-2 py-1 bg-amber-500 border-none hover:bg-amber-600 ease-in-out duration-300 text-xs md:text-sm'>
                      <a href=''>Read About it</a>
                    </button>
                    <button className='text-xs'>
                      <a href='' className='hover:text-blue-500 ease-in-out duration-300'>Live Demo &#62;</a>
                    </button>
                  </div>
                </div>
            </div>
            <div className='w-40 h-60 md:w-60 md:h-72 bg-black text-white p-3 rounded-sm shadow-2xl shadow-amber-500'>
                <div className='flex flex-col place-content-between h-full'>
                  <div className='mx-auto'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 md:w-16 md:h-16 text-sky-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
                  </svg>
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold'>MachineLearning</h3>
                  </div>
                  <div>
                    <p className='text-xs md:text-sm overflow-clip truncate md:whitespace-normal'>
                    Using raspberry pi cameras and Python, this project demonstrates how AI can be used to find car last known locations through street cameras.
                    </p>
                  </div>
                  <div className='flex flex-row place-content-between'>
                    <button className='border px-2 py-1 bg-amber-500 border-none hover:bg-amber-600 ease-in-out duration-300 text-xs md:text-sm'>
                      <a href=''>Read About it</a>
                    </button>
                    <button className='text-xs'>
                      <a href='' className='hover:text-blue-500 ease-in-out duration-300'>Live Demo &#62;</a>
                    </button>
                  </div>
                </div>
            </div>
          </div>
          <div className='text-xs text-center text-slate-100'>
              <footer><p>2022 Nennii Cally-Ntete</p></footer>
          </div>
        </div>
      </section>
      </main>

    </div>
  )
}
