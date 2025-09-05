'use client';

import { motion, useScroll } from 'framer-motion';
import Design_Service from './Design_Service';  
import Filmmaking_Service from './Filmmaking_Service';
import Mobile_Service from './Mobile_Service';
import Web_Service from './Web_Service';
import {  useRef } from 'react';
import Titre_Component from '../landing_page/Titre_Component';
import { useLanguage } from '@/hooks/useLanguage';

function Scroll_Services() {
    const Services = [
        { component: Filmmaking_Service },
        { component: Mobile_Service },
        { component: Web_Service },
        { component: Design_Service }
    ];

    const container = useRef(null);

    const { scrollYProgress } = useScroll()
    const { t } = useLanguage();

   

    return (
        <div ref={container} className='relative mt-20  mx-4'>
            <Titre_Component title={t('services.title')} subtitle={t('services.description')}/>
            {Services.map((service, index) => {
                const ServiceComponent = service.component;
                const targetScale = 1 - ((Services.length - index) * 0.05);
                const range = [index * 0.25, 1];
                
                return (
                    <motion.div 
                        key={index}
                        className="sticky "
                        style={{ 
                            top: `${10 + index * 30}px`,
                            }}
                    >
                        <ServiceComponent 
                            i={index} 
                            progress={scrollYProgress} 
                            range={range} 
                            targetScale={targetScale}
                        />
                    </motion.div>
                );
            })}
        </div>
    );
}

export default Scroll_Services;