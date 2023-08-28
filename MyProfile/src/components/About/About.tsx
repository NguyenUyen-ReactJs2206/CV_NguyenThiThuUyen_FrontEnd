import avatarAbout from 'src/assets/images/avatar.jpg'
import cvFile from 'src/assets/files/CV-Frontend-ReactJs-NguyenThiThuUyen (2).pdf'

export default function About() {
  return (
    <div id='about' className='min-h-[100vh]'>
      <div className='container px-4 py-16 mx-auto text-center '>
        <h2 className='text-4xl font-semibold py-8 text-blue'>About</h2>
        <div className='flex'>
          <img
            src={avatarAbout}
            alt='avatarAbout'
            className='object-cover md:block hidden md:h-[500px] md:w-[300px] lg:h-[550px] lg:w-[400px]'
          />
          <div className='text-left px-2'>
            <h2 className='py-2 text-2xl font-semibold'>Nguyễn Thị Thu Uyên</h2>
            <div className='py-1'>
              <h4 className='text-xl'> Front-end Developer</h4>
              <p className='py-2 text-sm'>
                Hi, I'm a front-end developer. I can learn to code and fix error codes for hours until all these
                unexpected errors are resolved. Before that, I was a bachelor in business administration. Ever since I
                was exposed to the IT industry, I knew I belonged in this world. In the past year, I have been very
                focused on learning front-end web programming. Currently, I would love to join the new environment to
                develop and strengthen my Front-end skills.
              </p>
            </div>
            <h2 className='py-2 text-2xl font-semibold'>Education</h2>
            <div className='py-1'>
              <h4 className='text-xl font-semibold'>Front-end</h4>
              <p className='text-sm'>Front-end training course at T3H Information Technology Institute.</p>
              <p className='text-sm'>Front-end training course of Du Thanh Duoc.</p>
            </div>
            <div className='py-1'>
              <h4 className='text-xl font-semibold'>Back-end</h4>
              <p className='text-sm'>Back-end training course of Du Thanh Duoc.</p>
            </div>
            <div className='py-4'>
              <div className='flex'>
                <a href={cvFile} className='lg:py-4 lg:px-6 py-3 px-4' download='CV-FrontEnd-Nguyen-Thi-Thu-Uyen'>
                  Download CV
                </a>
                <button className=' ml-6 lg:py-4 lg:px-6 py-3 px-4'>Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
