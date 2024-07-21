
import { Footer } from './_components/footer';
import { NavBar } from './_components/nav-bar';


const LandingLayout = ({ children } : { children: React.ReactNode }) => {
  return (
    <div className='bg-gradient-to-r from-background to-white'>
      <NavBar />
      <div className='h-full'>
        { children }
      </div>
      <Footer />
    </div>
  )
}

export default LandingLayout;
