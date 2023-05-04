// import Preloader from '@/component/loaders/Preloader'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <section className="s s1" data-scroll-section>
        <h1 data-scroll data-scroll-speed="1.2">
          Danish Patel
          <Link href={'/about'}>about us</Link>
        </h1>
        <h1 className='text-white'>safeer</h1>
        <p data-scroll data-scroll-speed="1.5">
          Hello Im Front End Developer👋
        </p>
      </section>
      <section className="s s2" data-scroll-section>
        <h1 data-scroll data-scroll-speed="1.2" data-scroll-delay="0.01">
          Danish Patel
        </h1>
        <p data-scroll data-scroll-speed="1.5" data-scroll-delay="0.01">
          Hello Im Front End Developer👋
        </p>
      </section>
    </main>
  )
}
