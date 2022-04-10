import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import EmailIcon from '../assets/icons/Icon-3.svg';
import LinkIcon from '../assets/icons/Icon-2.svg';
import PhoneIcon from '../assets/icons/Icon-1.svg';
import PinIcon from '../assets/icons/Icon.svg';
import InstagramIcon from '../assets/icons/IG.png'; 
import TwitterIcon from '../assets/icons/TW.png'; 
import GithubIcon from '../assets/icons/Git.png'; 
import LinkedinIcon from '../assets/icons/Link.png'; 
import EnglishIcon from '../assets/icons/UK.png'; 
import XPCLogoIcon from '../assets/icons/XPC.png';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col justify-end w-full h-auto pt-10 md:bg-gray-900">
      <div className="flex flex-row md:container md:mx-auto">
        <Head>
          <title>Paul Pirie CV</title>
          <meta name="description" content="CV for Paul Pirie" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <aside className="w-2/5 h-full p-10 bg-gray-800 divide-y divide-gray-600 rounded-tl-lg">
          <section className="flex flex-col pb-6">
            <h1 className="text-3xl font-bold text-gray-50">Paul Pirie</h1>
            <h2 className="mb-4 text-2xl font-semibold text-gray-400">Full-Stack Web Developer</h2>
            <h3 className="text-gray-500 text-1xl">Multi-Award Winning Web Developer</h3>
          </section>
          <section className="flex flex-col py-6">
            <ul className="flex flex-col">
              <li className="flex flex-row items-center justify-start mb-2">
                <div className="flex items-center justify-center w-8 h-8 mr-4 bg-indigo-900 rounded-full">
                  <img src={EmailIcon.src} alt="Email Icon" className="w-auto h-4"/>
                </div>
                <div>
                  <h4 className="text-gray-500">Email</h4>
                  <h4 className="text-gray-300">pauljohnpirie@yahoo.co.uk</h4>
                </div>
              </li>
              <li className="flex flex-row items-center justify-start mb-2">
                <div className="flex items-center justify-center w-8 h-8 mr-4 bg-indigo-900 rounded-full">
                  <img src={LinkIcon.src} alt="Link Icon" className="w-auto h-4"/>
                </div>
                <div>
                  <h4 className="text-gray-500">Website</h4>
                  <h4 className="text-gray-300">https://paulpirie.com</h4>
                </div>
              </li>
              <li className="flex flex-row items-center justify-start mb-2">
                <div className="flex items-center justify-center w-8 h-8 mr-4 bg-indigo-900 rounded-full">
                <img src={PhoneIcon.src} alt="Phone Icon" className="w-auto h-4"/>
                </div>
                <div>
                  <h4 className="text-gray-500">Phone</h4>
                  <h4 className="text-gray-300">(+44) 757 593 9905</h4>
                </div>
              </li>
              <li className="flex flex-row items-center justify-start mb-2">
                <div className="flex items-center justify-center w-8 h-8 mr-4 bg-indigo-900 rounded-full">
                <img src={PinIcon.src} alt="Pin Icon" className="w-auto h-4"/>
                </div>
                <div>
                  <h4 className="text-gray-500">Address</h4>
                  <h4 className="text-gray-300">Greater Glasgow, Scotland</h4>
                </div>
              </li>
            </ul>
          </section>
          <section className="flex flex-col py-6">
            <h4 className="mb-4 text-gray-500">Socials</h4>
            <ul>
              <li className="flex flex-row items-center justify-start mb-2">
                <div className="mr-4 rounded-full ">
                  <img src={InstagramIcon.src} alt="Instagram Icon" className="w-8"/>
                </div>
                <div>
                  <h4 className="text-gray-500">Instagram</h4>
                  <h4 className="text-gray-300">@paulpiriewebdesign</h4>
                </div>
              </li>
              <li className="flex flex-row items-center justify-start mb-2">
                <div className="mr-4 rounded-full ">
                  <img src={TwitterIcon.src} alt="Twitter Icon" className="w-8"/>
                </div>
                <div>
                  <h4 className="text-gray-500">Twitter</h4>
                  <h4 className="text-gray-300">@pjpirie</h4>
                </div>
              </li>
              <li className="flex flex-row items-center justify-start mb-2">
                <div className="mr-4 rounded-full ">
                  <img src={GithubIcon.src} alt="Github Icon" className="w-8"/>
                </div>
                <div>
                  <h4 className="text-gray-500">Github</h4>
                  <h4 className="text-gray-300">@pjpirie</h4>
                </div>
              </li>
              <li className="flex flex-row items-center justify-start mb-2">
                <div className="mr-4 rounded-full ">
                  <img src={LinkedinIcon.src} alt="Linkedin Icon" className="w-8"/>
                </div>
                <div>
                  <h4 className="text-gray-500">Linkedin</h4>
                  <h4 className="text-gray-300">paul-pirie-37789715b</h4>
                </div>
              </li>
            </ul>
          </section>
          <section className="flex flex-col justify-center py-6">
            <h4 className="mb-4 text-gray-500">Languages</h4>
            <ul>
              <li className="flex flex-row items-center justify-start rounded-lg">
                <div className="w-auto h-8 mr-4">
                <img src={EnglishIcon.src} alt="British Flag Icon" className="h-full rounded-lg"/>
                </div>
                <div>
                  <h4 className="text-gray-300">English</h4>
                  <h4 className="text-gray-500">Native</h4>
                </div>
              </li>
            </ul>
          </section>
        </aside>
        <main className="flex flex-col w-full p-10 bg-gray-700 rounded-tr-lg">
          <section className="mb-4">
            <div className="flex flex-row w-full">
              <span className="w-8 h-8 my-auto text-5xl leading-6 text-center text-gray-300 bg-gray-600 rounded-full">•</span>
              <h1 className="ml-10 text-3xl font-semibold text-gray-50">Experience</h1>
            </div>
            <div className="p-4 pl-16">
              <ul className="flex">
                <li className="flex">
                  <span className="mr-8 text-3xl leading-6 text-gray-300">•</span>
                  <div className="flex flex-col w-2/5">
                    <h5 className="text-gray-400 text-1x">Jan 2021 - Jan 2022 🕑 Contract</h5>
                    <div className="flex items-center my-2">
                      <img src={XPCLogoIcon.src} alt="XPC International Logo" className="w-12 h-12 rounded-md"/>
                      <div className="flex flex-col ml-4 ">
                        <h4 className="font-semibold text-gray-400 text-md">Lead Web Developer</h4>
                        <h2 className="text-xl font-bold text-gray-300">XPC International</h2>
                      </div>
                    </div>
                  </div>
                  <div className="w-3/5">
                    <p className="text-gray-300">In this role I worked in a tight-knit multidiciplinary team, taking our client’s concept to a fully operational and marketable EdTech product.
                    </p>
                    <ul className="my-2">
                      <li className="my-1 text-gray-300">
                      • Work directly with the project manager to create a plan for design and development sprints.
                      </li>
                      <li className="my-1 text-gray-300">
                      • Manage a small team of developers to implement key features
                      </li>
                      <li className="my-1 text-gray-300">
                      • Design, develop, and manage backend system.
                      </li>
                      <li className="my-1 text-gray-300">
                      • Communicate technical knowledge to client’s and other non-expert team members
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            <div className="p-4 pl-16">
              <ul className="flex">
                <li className="flex">
                  <span className="mr-8 text-3xl leading-6 text-gray-300">•</span>
                  <div className="flex flex-col w-2/5">
                    <h5 className="text-gray-400 text-1x">Jan 2021 - Jan 2022 🕑 Contract</h5>
                    <div className="flex items-center my-2">
                      <img src={XPCLogoIcon.src} alt="XPC International Logo" className="w-12 h-12 rounded-md"/>
                      <div className="flex flex-col ml-4 ">
                        <h4 className="font-semibold text-gray-400 text-md">Lead Web Developer</h4>
                        <h2 className="text-xl font-bold text-gray-300">XPC International</h2>
                      </div>
                    </div>
                  </div>
                  <div className="w-3/5">
                    <p className="text-gray-300">In this role I worked in a tight-knit multidiciplinary team, taking our client’s concept to a fully operational and marketable EdTech product.
                    </p>
                    <ul className="my-2">
                      <li className="my-1 text-gray-300">
                      • Work directly with the project manager to create a plan for design and development sprints.
                      </li>
                      <li className="my-1 text-gray-300">
                      • Manage a small team of developers to implement key features
                      </li>
                      <li className="my-1 text-gray-300">
                      • Design, develop, and manage backend system.
                      </li>
                      <li className="my-1 text-gray-300">
                      • Communicate technical knowledge to client’s and other non-expert team members
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            <div className="p-4 pl-16">
              <ul className="flex">
                <li className="flex">
                  <span className="mr-8 text-3xl leading-6 text-gray-300">•</span>
                  <div className="flex flex-col w-2/5">
                    <h5 className="text-gray-400 text-1x">Jan 2021 - Jan 2022 🕑 Contract</h5>
                    <div className="flex items-center my-2">
                      <img src={XPCLogoIcon.src} alt="XPC International Logo" className="w-12 h-12 rounded-md"/>
                      <div className="flex flex-col ml-4 ">
                        <h4 className="font-semibold text-gray-400 text-md">Lead Web Developer</h4>
                        <h2 className="text-xl font-bold text-gray-300">XPC International</h2>
                      </div>
                    </div>
                  </div>
                  <div className="w-3/5">
                    <p className="text-gray-300">In this role I worked in a tight-knit multidiciplinary team, taking our client’s concept to a fully operational and marketable EdTech product.
                    </p>
                    <ul className="my-2">
                      <li className="my-1 text-gray-300">
                      • Work directly with the project manager to create a plan for design and development sprints.
                      </li>
                      <li className="my-1 text-gray-300">
                      • Manage a small team of developers to implement key features
                      </li>
                      <li className="my-1 text-gray-300">
                      • Design, develop, and manage backend system.
                      </li>
                      <li className="my-1 text-gray-300">
                      • Communicate technical knowledge to client’s and other non-expert team members
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <section className="mb-4">
            <div className="flex flex-row w-full">
              <span className="w-8 h-8 my-auto text-5xl leading-6 text-center text-gray-300 bg-gray-600 rounded-full">•</span>
              <h1 className="ml-10 text-3xl font-semibold text-gray-50">Latest Projects</h1>
            </div>
            <div className="p-4 pl-8">
              
            </div>
          </section>
          <section className="mb-4">
            <div className="flex flex-row w-full">
              <span className="w-8 h-8 my-auto text-5xl leading-6 text-center text-gray-300 bg-gray-600 rounded-full">•</span>
              <h1 className="ml-10 text-3xl font-semibold text-gray-50">Education</h1>
            </div>
            <div className="p-4 pl-8">
              
            </div>
          </section>
          <section className="mb-4">
            <div className="flex flex-row w-full">
              <span className="w-8 h-8 my-auto text-5xl leading-6 text-center text-gray-300 bg-gray-600 rounded-full">•</span>
              <h1 className="ml-10 text-3xl font-semibold text-gray-50">Skills</h1>
            </div>
            <div className="p-4 pl-8">
              
            </div>
          </section>
          <section className="mb-4">
            <div className="flex flex-row w-full">
              <span className="w-8 h-8 my-auto text-5xl leading-6 text-center text-gray-300 bg-gray-600 rounded-full">•</span>
              <h1 className="ml-10 text-3xl font-semibold text-gray-50">Awards</h1>
            </div>
            <div className="p-4 pl-8">
              
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Home
