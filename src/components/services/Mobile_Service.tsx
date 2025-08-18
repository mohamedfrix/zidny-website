import mobile_service from '../../assets/images/Services/Mobile/mobile_service.svg';
import iphone from         '../../assets/images/Services/Mobile/iphone.svg';
import notification_1 from '../../assets/images/Services/Mobile/Notification_1.svg';
import notification_2 from '../../assets/images/Services/Mobile/Notification_2.svg';
import notification_3 from '../../assets/images/Services/Mobile/Notification_3.svg';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

function Mobile_Service() {
  


  const iphoneVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      }
    }
  };

  const notificationVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
      }
    }
  };

  

  return (
    <motion.div 
      className="relative items-center flex flex-col h-auto"
     
    >
      <Image src={mobile_service} alt="Mobile Service" className="relative h-auto -z-10" />

      <div className="absolute inset-0">
        <motion.div variants={iphoneVariants} className="absolute transform w-2/3 h-auto bottom-0 right-28">
          <Image src={iphone} alt="Iphone" className="w-full h-auto" />
        </motion.div>
        
        <motion.div variants={notificationVariants} className="absolute right-16 bottom-20">
          <Image src={notification_1} alt="Notification 1" />
        </motion.div>
        
        <motion.div 
          variants={notificationVariants} 
          className="absolute bottom-0 right-96"
          transition={{ delay: 0.2 }}
        >
          <Image src={notification_2} alt="Notification 2" />
        </motion.div>
        
        <motion.div 
          variants={notificationVariants} 
          className="absolute top-16 right-32"
          transition={{ delay: 0.4 }}
        >
          <Image src={notification_3} alt="Notification 3" />
        </motion.div>
      </div>

      <motion.div 
        className="absolute text-white top-0 left-30 w-2/5"
      >
        <h1 className='text-7xl font-semibold font-outfit mt-16'>
          &lt; Mobile Dev &gt;
        </h1>
        <p className='font-outfit mt-7 text-2xl font-normal'>
          Tellus tellus cras gravida non eget nibh. Mollis malesuada eleifend ultricies sed sed imperdiet senectus. Nisl molestie sit donec ac imperdiet lacus. Mattis eu vitae id et.
        </p>
        <Link href="/Devis">
          <motion.button 
            className="mt-44 flex items-center gap-3 bg-[#0A60AD] text-white rounded-4xl py-3 px-3 sm:px-8 text-lg cursor-pointer hover:bg-[#0C224B] transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Discover more  
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.7 12.1064H3.75" stroke="#E9FCFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M20.3539 12.1002C20.3539 10.8442 13.9899 6.82919 13.2679 7.55119C12.5459 8.27319 12.4769 15.8582 13.2679 16.6492C14.0599 17.4402 20.3539 13.3552 20.3539 12.1002Z" stroke="#E9FCFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default Mobile_Service;