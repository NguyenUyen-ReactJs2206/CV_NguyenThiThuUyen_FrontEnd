import '../../sass/main.scss'
import avatar from '../../assets/images/avatar-main.jpg'
import avatarAbout from '../../assets/images/avatar.jpg'
import cvFile from '../../assets/files/CV-Frontend-ReactJs-NguyenThiThuUyen (2).pdf'
export default function Main() {
  return (
    <div className='my-profile'>
      <div className='grid grid-cols-12'>
        <div className='xl:col-span-3 xl:block hidden min-h-[100vh]'>aa</div>
        <div className='xl:col-span-9 col-span-12'>
          <div className='home flex bg-black items-center justify-center min-h-[100vh] w-full'>
            <div className='container text-white px-8 text-center'>
              <div className='avatar text-center inline-block w-[200px] h-[200px] rounded-full bg-white overflow-hidden animation-left'>
                <img src={avatar} alt='avatar' className='object-cover' />
              </div>
              <h1 className='my-4 text-3xl font-semibold uppercase animation-right'>Nguyễn Thị Thu Uyên</h1>
              <h2 className='text-2xl font-medium animation-left'>Front-end deverloper</h2>
              <h4 className='animation-left'>HTML, CSS, Java Script, React JS, Node JS</h4>
            </div>
          </div>
          <div className='about py-16 min-h-[100vh]'>
            <div className='container mx-auto text-center '>
              <h2 className='text-4xl font-semibold py-8'>About</h2>
              <div className='flex'>
                <img
                  src={avatarAbout}
                  alt='avatarAbout'
                  className='object-cover md:block hidden md:h-[500px] md:w-[300px] lg:h-[550px] lg:w-[400px]'
                />
                <div className='px-2 text-left'>
                  <h2 className='py-2 text-2xl font-semibold'>Nguyễn Thị Thu Uyên</h2>
                  <div className='py-1'>
                    <h4 className='text-xl'> Front-end Developer</h4>
                    <p className='py-2 lg:text-base text-sm'>
                      Hi, I'm a front-end developer. I can learn to code and fix error codes for hours until all these
                      unexpected errors are resolved. Before that, I was a bachelor in business administration. Ever
                      since I was exposed to the IT industry, I knew I belonged in this world. In the past year, I have
                      been very focused on learning front-end web programming. Currently, I would love to join the new
                      environment to develop and strengthen my Front-end skills.
                    </p>
                  </div>
                  <h2 className='py-2 text-2xl font-semibold'>Education</h2>
                  <div className='py-1'>
                    <h4 className='text-xl font-semibold'>Front-end</h4>
                    <p className='lg:text-base text-sm'>
                      Front-end training course at T3H Information Technology Institute.
                    </p>
                    <p className='lg:text-base text-sm'>Front-end training course of Du Thanh Duoc.</p>
                  </div>
                  <div className='py-1'>
                    <h4 className='text-xl font-semibold'>Back-end</h4>
                    <p className='lg:text-base text-sm'>Back-end training course of Du Thanh Duoc.</p>
                  </div>
                  <div className='py-4'>
                    <div className='flex'>
                      <a href={cvFile} className='' download='CV-FrontEnd-Nguyen-Thi-Thu-Uyen'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>Download CV
                      </a>
                      <button></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
