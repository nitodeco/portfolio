import { Footer } from '@/components/organisms/Footer';
import { Header } from '@/components/organisms/Header';
import { Portfolio } from '@/components/pages/Portfolio';

export default function Home() {
  return (
    <div className='relative min-h-screen'>
      <div className='absolute inset-0 z-0 pointer-events-none [background-image:radial-gradient(circle_at_center,black_0.1rem,transparent_0),radial-gradient(circle_at_center,black_0.1rem,transparent_0)] [background-size:1.3rem_1.3rem] [background-position:0_0,0.65rem_0.65rem] opacity-10' />
      <div className='relative z-10'>
        <Header />
        <Portfolio />
        <Footer />
      </div>
    </div>
  );
}
