import React, { useState } from 'react';
import SidePanel from './SidePanel';
import CardContent from './CardContent';
import Rectangle from '../assets/rectangle.svg';

const UpperCard = () => {
  const [activeTab, setActiveTab] = useState('About Me');

  const tabs = ['About Me', 'Experiences', 'Recommended'];

  const aboutMeContent = `Hello! I'm Shashank, a FullStack Developer. I am currently a fourth year Student. I am originally from Lucknow, and currently residing in Bangalore for my College. I am a keen learner and like to work on different technologies. I am also enthusiastic about Blockchain.`;
  const experiencesContent = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quis eaque ullam sequi, dolorum officiis aliquid rerum incidunt nam aliquam reprehenderit perferendis delectus facere quisquam dolore. Eveniet, ab ex est doloribus itaque velit ist.?`;
  const recommendedContent = `lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquiconsequatconsectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna al.`;

  return (
    <div className='w-[720px] h-[316px] bg-[#363C43] rounded-[18.89px] shadow-[5.67px_5.67px_3.78px_0px_#00000066]'>
      <div className='flex items-center justify-center gap-2 mr-2'>
        <SidePanel />
        <CardContent>
          <div className='w-full flex flex-col justify-center gap-y-8'>
            <div className='w-full flex justify-center'>
              <div className='w-full max-w-[614px] h-[62px] rounded-[23px] bg-[#171717] shadow-custom-inset text-white text-[18px] font-medium flex justify-center items-center gap-2'>
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    className={`w-full flex-1 h-[49px] rounded-[16px] px-3 py-2 mx-1 transition-all duration-200 text-center font-['Poppins'] leading-[16.12px] ${activeTab === tab
                      ? 'bg-[#28292f] shadow-[0_0_25px_25px_rgba(0,0,0,0.3)] text-white'
                      : 'hover:bg-[#28292f] hover:shadow-md text-[#A3ADB2]'
                      }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            <div className="w-full max-w-[611px] h-[175px] font-['Plus_Jakarta_Sans'] text-[20px] font-normal text-left text-[#969696] leading-[25.2px] mt-2">
              {activeTab === 'About Me' && aboutMeContent}
              {activeTab === 'Experiences' && experiencesContent}
              {activeTab === 'Recommended' && recommendedContent}
            </div>
          </div>
        </CardContent>
        <img src={Rectangle} alt="rectangle-icon" className="w-[8px] h-[64px] " />
      </div>
    </div>
  );
}

export default UpperCard;
