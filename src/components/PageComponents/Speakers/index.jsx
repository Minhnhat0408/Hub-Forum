import '../../../App.css'
import image from '../../../assets/images';
import Image from '../../Utilites/Image/Image';
import Tilt from 'react-parallax-tilt';
import Reveal from '../../Utilites/Reveal';
function Speakers() {
    return ( <div className='flex flex-col w-full text-white bg-black/60 h-fit xl-max:px-7 sm-max:!py-8 py-20 px-10 '>
          <Reveal
        hiddenX={-500}
        className="uppercase event-heading font-nokia text-center text-[50px] mb-[60px] xl:text-[30px] sm2-max:mb-10 xl:text-center sm-max:!text-[21px] sm2-max:mt-2"
      >
        <h1>Diễn Giả</h1>
      </Reveal>
        <div className='flex w-full flex-wrap'>
            <div className='flex  flex-col flex-1 phone:w- phone:flex-auto h-full justify-center items-center m-4 xl:mb-10' >
                
            <Tilt 
        glareEnable={true}
        glareMaxOpacity={0.5}
        glareBorderRadius='24px'
        glarePosition="all"
        className='bg-[rgba(255,255,255,0.1)] flex flex-col p-6 phone:w-full  rounded-3xl h-full'
    >
                <h3 className=' font-nokia event-heading text-[20px] mb-2 phone:text-base'>Phùng Danh Tài - LLMs</h3>
                <p className='mb-10 phone:text-sm'>Technical Manager of FHN.TCS</p>
                <div  className="tai w-[400px] phone:w-full phone:h-[40vw] h-[250px]" alt='ava'/>
                </Tilt>
            </div>
            <div className='flex flex-col flex-1 h-full phone:w-full phone:flex-auto justify-center items-center m-4 '>
            <Tilt  
        glareEnable={true}
        glareMaxOpacity={0.5}
        glareBorderRadius='24px'
        glarePosition="all"
        className='bg-[rgba(255,255,255,0.1)] flex flex-col p-6 phone:w-full rounded-3xl h-full'
    >
      
            <h3 className=' font-nokia event-heading text-[20px] mb-2 phone:text-base'>Hồ Xuân Sơn - Web 3</h3>
                    <p className='phone:text-sm'>Managing Partner at K300 Ventures</p>
                    <p className='mb-10 phone:text-sm'>Head of Marketing SEA at Bitget</p>
              <div  className="son w-[400px] h-[250px] phone:w-full phone:h-[40vw]" alt='ava'/>
      
          </Tilt>
            </div>
        </div>
    </div> );
}

export default Speakers;