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
        <link rel="apple-touch-icon" href="/myAvatar.svg" />
      </Head>
      
      <main className='flex flex-col w-screen'>
      <section className='h-screen bg-black bg-fixed'>
        <div className='relative overflow-hidden h-1/3 md:h-fit mx-auto'>
          <div className='h-72 md:h-48 w-1/2 text-white relative top-40 md:left-52 left-10 text-3xl md:text-6xl font-bold'>
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
          <svg className='hidden md:block align-bottom ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fillOpacity="1" d="M0,192L48,202.7C96,213,192,235,288,250.7C384,267,480,277,576,272C672,267,768,245,864,213.3C960,181,1056,139,1152,138.7C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
        <div className='bg-white w-screen flex flex-col md:flex-row h-2/3 md:h-1/2 mx-auto place-content-evenly'>
                <div className='flex flex-col mx-auto md:flex-row md:w-9/12'>
                  <div className='font-bold md:text-xl text-lg font-mono mx-auto w-10/12'>
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
                  <div className='mx-auto md:h-fit flex flex-col place-content-around md:mr-28 font-semibold js-show-on-scroll h-auto'>
                    <button className='w-fit rounded-md border px-5 my-2 py-2 bg-amber-500 hover:bg-amber-600 ease-in-out duration-300'>
                      <a href='/Nennii-Cally-Ntete-ResumeCS.docx.pdf' download='Nennii_Cally_Ntete_Resume'>Resume</a>
                    </button>
                    <button className='w-fit rounded-md border px-5 py-2 bg-amber-500 hover:bg-amber-600 ease-in-out duration-300'>
                      <a href='#projects-section'>Projects</a>
                    </button>
                    <button className='border px-5 py-2 bg-amber-500 hover:bg-amber-600 ease-in-out duration-300' hidden>
                      <a href=''>Discover More</a>
                    </button>
                  </div>
                </div>
        </div>
      </section>
      <div className='min-h-screen md:h-screen flex flex-col flex-wrap bg-fixed bg-white [@media(max-width:767px)]:scrollbar-hide'>
        <div className='mx-auto text-center flex flex-col'>
          <div className='p-10'>
            <h1 className='text-black text-3xl md:text-6xl font-bold font-sans subpixel-antialiased'>My <span className='text-amber-500'>Pro</span>jects</h1>
          </div>
          <div className='mt-5 w-20 mx-auto md:h-fit md:w-fit' id='projects-section'>
            <Image  
              src={avatarTwo}
              height={216.6}
              width={167.4}
              alt="Author Avatar on Computer"
              placeholder='blur'
            />
          </div>
          <div className='flex flex-col md:flex-row flex-wrap place-content-around md:w-screen md:px-20 relative top-28 overflow-auto'>
            <div className='mb-5 w-40 h-48 md:w-60 md:h-72 bg-black text-white p-3 rounded-xl shadow-xl shadow-amber-500'>
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
                    <button hidden className='border px-2 py-1 bg-amber-500 border-none hover:bg-amber-600 ease-in-out duration-300 text-xs md:text-sm'>
                      <a href=''>Read About it</a>
                    </button>
                    <button className='text-xs mx-auto'>
                      <a href='https://aquamarine-kelpie-f7e314.netlify.app/' target='blank' className='hover:text-blue-500 ease-in-out duration-300'>Live Demo &#62;</a>
                    </button>
                  </div>
                </div>
            </div>
            <div className='mb-5 w-40 h-48 md:w-60 md:h-72 bg-black text-white p-3 rounded-xl shadow-xl shadow-amber-500'>
                <div className='flex flex-col place-content-between h-full'>
                  <div className='mx-auto'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 md:w-16 md:h-16 text-sky-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                  </svg>
                  </div>
                  <div>
                  <h3 className='text-lg font-semibold'>HireMePlease!</h3>
                  </div>
                  <div>
                    <p className='text-xs md:text-sm overflow-clip truncate md:whitespace-normal'>
                        Platform that helps users speed through and keep track of job application processes. 
                    </p>
                  </div>
                  <div className='flex flex-row place-content-between'>
                    <button hidden className='border px-2 py-1 bg-amber-500 border-none hover:bg-amber-600 ease-in-out duration-300 text-xs md:text-sm'>
                      <a href=''>Read About it</a>
                    </button>
                    <button className='text-xs mx-auto'>
                      <a href='' className='hover:text-blue-500 ease-in-out duration-300'>Coming Soon!</a>
                    </button>
                  </div>
                </div>
            </div>
            <div className='mb-5 w-40 h-48 md:w-60 md:h-72 bg-black text-white p-3 rounded-xl shadow-xl shadow-amber-500'>
                <div className='flex flex-col place-content-between h-full'>
                  <div className='mx-auto'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 md:w-16 md:h-16 text-sky-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
                  </svg>
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold'>Safeicc</h3>
                  </div>
                  <div>
                    <p className='text-xs md:text-sm overflow-clip truncate md:whitespace-normal'>
                    Using raspberry pi cameras and Python, this project demonstrates how AI can be used to find car last known locations through street cameras.
                    </p>
                  </div>
                  <div className='flex flex-row place-content-between'>
                    <button hidden className='border px-2 py-1 bg-amber-500 border-none hover:bg-amber-600 ease-in-out duration-300 text-xs md:text-sm'>
                      <a href=''>Read About it</a>
                    </button>
                    <button className='text-xs mx-auto'>
                      <a href='' className='hover:text-blue-500 ease-in-out duration-300'>Coming Soon!</a>
                    </button>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      
          
      </main>
      {/* <div className='mx-auto'>
        <footer ><p className='text-black text-sm'>Nennii Cally-Ntete 2022 | All Rights Reserved</p></footer>
      </div> */}

    </div>
  )
}
