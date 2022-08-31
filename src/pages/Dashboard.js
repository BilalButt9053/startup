import React from 'react'
import BannerHd from '../components/BannerHd';
import Button from '../components/Button';
import FeatureCard from '../components/FeatureCard';
import { ReactComponent as BannerBottomBg  }from "../images/banner-bg.svg";
import { ReactComponent as BannerTopBg } from '../images/bg.svg';
import { ReactComponent as CraftIcon } from "../images/craft.svg";
import {ReactComponent as QualityIcon } from "../images/quality.svg";
import {ReactComponent as EssentialIcon } from "../images/essential.svg";
import {ReactComponent as OptimizeIcon } from "../images/optimize.svg";
import {ReactComponent as CustomizeIcon } from "../images/customize.svg";
import {ReactComponent as UpdateIcon } from "../images/updates.svg";
import {ReactComponent as PlayIcon} from "../images/play.svg";
import {ReactComponent as TickIcon} from "../images/check.svg";
import {ReactComponent as CrossIcon} from "../images/cross.svg";
import {ReactComponent as PricingBannerBg} from "../images/pricingBannerBg.svg";
import AuthorImg_1 from "../images/author-01(1).png";
import BlogImg_1 from "../images/blog-01.jpg";
import BlogImg_2 from "../images/blog-02.jpg";
import BlogImg_3 from "../images/blog-03.jpg";
import Bg_Image from "../images/shape.svg";
import VideoImage from "../images/video.jpg";
import UideckImg from "../images/uideck.svg";
import TailgridImg from "../images/tailgrids.svg";
import LineiconImg from "../images/lineicons.svg";
import AyrouiImg from "../images/ayroui.svg";
import PlainadminImg from "../images/plainadmin.svg";
import AboutImg from "../images/about-image.svg";
import List from '../components/List';
import AboutImage from "../images/about-image-2.svg"; 
import Heading from '../components/Heading';
import AboutCard from '../components/AboutCard';
import Author1 from '../images/author-01.png';
import Author2 from '../images/author-02.png';
import Author3 from '../images/author-03.png';
import {ReactComponent as AboutBgLeft} from '../images/bg-about1.svg';
import {ReactComponent as SubcribeBg} from '../images/subcribe.svg';
import {ReactComponent as AboutBgRight} from '../images/bg-about.svg';
import Switch from '../components/Switch';
import PricingCard from '../components/PricingCard';
import BlogCard from '../components/BlogCard';
import InputField from '../components/InputField';


function Dashboard() {
  return (
  <div>
    <div className='pt-28'>
      <div className='absolute top-0 right-0'>
        <BannerTopBg />
      </div>
      <div className='w-1/3 text-center px-11 pt-2 m-auto'>
          <h1 className='text-5xl font-bold text-white leading-tight'>Startup Focused Tailwind CSS Template</h1>
          <h4 className='text-white text-xl font-semibold mt-7 mb-14 leading-8'>A Complete Tailwind CSS Web Template Crafted for - Startup, SaaS, Business, Software and Agencies. Comes with high-quality design and everything you need!</h4>
          <div className='flex mt-5 gap-3 items-center justify-center'>
            <Button 
              title="Get Started"
              bg_color="#4A6CF7"
              width="32"
              hover_color="white"
              txt_color="white"
              hover_opacity="90"
            />
            <Button 
              title="Learn More"
              bg_color="#808080"
              width="32"
              hover_color="white"
              txt_color="white"
              hover_opacity="20"
              bg_opacity="20"
            />
          </div>
      </div>
      <div>
        <BannerBottomBg/>
      </div>
    </div>
    <div className='bg-[#808080] bg-opacity-10'>
      <div className='w-1/3 text-center px-12 py-24 m-auto'>
        <BannerHd 
          title="Main Features"
          description="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
        />
      </div>
      <div className='w-4/6 m-auto pb-24'>
        <div className='flex flex-wrap gap-10'>
          <FeatureCard 
            image={CraftIcon}
            title="Crafted for Startups"
            description="Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores."
          />
          <FeatureCard 
            image={QualityIcon}
            title="High-quality Design"
            description="Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores."
          />
          <FeatureCard 
            image={EssentialIcon}
            title="All Essential Components"
            description="Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores."
          />
          <FeatureCard 
            image={OptimizeIcon}
            title="Speed Optimized"
            description="Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores."
          />
          <FeatureCard 
            image={CustomizeIcon}
            title="Fully Customizable"
            description="Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores."
          />
          <FeatureCard 
            image={UpdateIcon}
            title="Regular Updates"
            description="Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores."
          />
        </div>
      </div>
    </div>
    <div className="flex flex-col items-center justify-center pb-52" >
      <img src={Bg_Image} className="absolute w-full my-28" alt="bg_image" />
      <div className='w-1/3 text-center px-12 py-24 m-auto'>
        <BannerHd 
          title="We are ready to help"
          description="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
        />
      </div>
      <div className='relative'>
        <img src={VideoImage} alt="VideoImage" className='z-10'/>
        <div className='pl-6 bg-[#e5e7eb] bg-opacity-75 w-20 h-20 z-30 absolute top-40 left-80 rounded-full hover:bg-opacity-100'>
          <PlayIcon  className='mt-8 ml-2'/>
        </div>
      </div>
    </div>
    <div className='flex justify-center'>
      <div className='flex w-fit  bg-[#808080] bg-opacity-10 gap-20 px-28 py-16 rounded-md '>
        <img src={UideckImg} alt="UideckImg" className='w-40' />
        <img src={TailgridImg} alt="TailgridImg" className='w-40'/>
        <img src={LineiconImg} alt="LineiconImg" className='w-40'/>
        <img src={AyrouiImg} alt="AyrouiImg" className='w-40'/>
        <img src={PlainadminImg} alt="PlainadminImg" className='w-40'/>
      </div>
    </div>
    <div className='flex w-9/12 m-auto py-24 px-9 border-b border-solid border-[#808080] border-opacity-30'>
      <div className='w-1/2 pr-20 mt-10'>
       <BannerHd 
         title="Crafted for Startup, SaaS and Business Sites."
         description="The main ‘thrust’ is to focus on educating attendees on how to best protect highly vulnerable business applications with interactive panel discussions and roundtables."
        />
        <div className='flex flex-wrap justify-between mt-8'> 
          <div>
            <List
              title="Premium quality"
            /> 
            <List
              title="No code required"
            />
            <List
              title="Use for lifetime"
            />
          </div>
          <div>
            <List
              title="Regular updates"
            />
            <List
              title="Rich documentation"
            />
            <List
              title="Developer friendly"
            />
          </div>  
        </div>
      </div>
      <div className='w-1/2'>
        <img src={AboutImg} alt="about img" className='ml-44'/>
      </div>
    </div>
    <div className='flex w-9/12 m-auto py-24 px-9'>
      <div className='w-1/2'>
        <img src={AboutImage} alt="AboutImage" />
      </div>
      <div className='w-1/2 pr-60 pt-8'>
        <div>
        <Heading
          title="Bug free code"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        </div>
        <div className='pt-10'>
          <Heading
            title="Regular updates"
            description="Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt consectetur adipiscing elit setim."
          />
        </div>
        <div className='pt-10'>
          <Heading
            title="Premier support"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
          />
        </div>
      </div>
    </div>
    <div className='relative bg-[#808080] bg-opacity-10 pb-24'>
      <div className='absolute z-50 left-0 bottom-2 '>
        <AboutBgLeft />
      </div>
      <div className='absolute z-50 right-0 top-0'>
        <AboutBgRight />
      </div>
      <div className='w-1/3 text-center px-12 py-24 m-auto'>
        <BannerHd 
          title="What Our Users Says"
          description="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
        />
      </div>
      <div className='flex items-center justify-center gap-5 px-32'>
        <AboutCard 
          description="“Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community."
          image={Author1}
          title="Musharof Chy"
          author="Founder @TailGrids"
        />
         <AboutCard 
          description="“Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community."
          image={Author2}
          title="Devid Weilium"
          author="Founder @UIdeck"
        />
         <AboutCard 
          description="“Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community."
          image={Author3}
          title="Lethium Frenci"
          author="Founder @Lineicons"
        />
      </div>
    </div>
    <div className='relative'>
      <div className='w-1/2 text-center px-24 py-24 m-auto'>
        <BannerHd 
          title="Simple and Affordable Pricing"
          description="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
        />
      </div>
      <div className='flex items-center justify-center pb  -9'>
        <label htmlFor='switch' className='text-white font-semibold text-lg mr-5'>Monthly</label>
        <Switch />
        <p className='text-white font-semibold text-lg ml-10 '>Yearly</p>
      </div>
     <div className='flex items-center justify-center gap-8 py-10'>
      <PricingCard
        tag="Lite"
        price="40"
        img_1={TickIcon}
        img_2={TickIcon}
        img_3={TickIcon}
        img_4={TickIcon}
        img_5={CrossIcon}
        img_6={CrossIcon}
        description="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
      />
      <PricingCard
        tag="Basic"
        price="399"
        img_1={TickIcon}
        img_2={TickIcon}
        img_3={TickIcon}
        img_4={TickIcon}
        img_5={TickIcon}
        img_6={CrossIcon}
        description="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
      />
      <PricingCard
        tag="Plus"
        price="589"
        img_1={TickIcon}
        img_2={TickIcon}
        img_3={TickIcon}
        img_4={TickIcon}
        img_5={TickIcon}
        img_6={TickIcon}
        description="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
      />
     </div>
     <div className='absolute bottom-0 left-0'>
      <PricingBannerBg />
     </div>
    </div>
    <div className='pb-16'>
      <div className='w-1/2 text-center px-24 py-24 m-auto'>
        <BannerHd
          title="Our Latest Blogs"
          description="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
        />
      </div>
      <div className='flex items-center justify-center gap-5 '>
        <BlogCard 
          BlogImg={BlogImg_1}
          hd="Best UI components for modern websites"
          detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor."
          AuthorImg={AuthorImg_1}
          AuthorName="By Samuyl Joshi"
          AthorWork="Graphic Designer"
          btn="computer"
        />
        <BlogCard 
          BlogImg={BlogImg_2}
          hd="9 simple ways to improve your design skills"
          detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor."
          AuthorImg={Author2}
          AuthorName="By Musharof Chy"
          AthorWork="Content Writer"
          btn="Design"
        />
        <BlogCard 
          BlogImg={BlogImg_3}
          hd="Tips to quickly improve your coding speed."
          detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor."
          AuthorImg={Author3}
          AuthorName="By Lethium Deo"
          AthorWork="Graphic Designer"
          btn="computer"
        />
      </div>
    </div>
    <div className='flex items-center justify-center gap-10'>
      <div className='w-2/5  bg-[#808080] bg-opacity-20 p-10 rounded-md'>
        <Heading 
          title="Need Help? Open a Ticket"
          description="Our support team will get back to you ASAP via email."
        />
        <div className='flex flex-wrap gap-10 my-8'>
          <InputField 
            lable="Your Name"
            placeHolder="Enter Your Name"
            width="80"
            height="10"
          />
          <InputField 
            lable="Your Email"
            placeHolder="Enter Your Email"
            width="80"
            height="10"
          />
        </div>
        <div className='mt-5'>
          <InputField 
            lable="Your Message"
            placeHolder="Enter Your Message"
            width="full"
            height="40"
          />
        </div>
        <div className='mt-5'>
        <Button 
            title="Submit Ticket"
            bg_color="#4A6CF7"
            width="40"
            hover_color="white"
            txt_color="white"
            hover_opacity="90"
        />
        </div>
      </div>
      <div className='relative bg-[#4A6CF7] bg-opacity-10 w-1/5 p-10 rounded-md'>
        <div className='absolute top-0 bottom-0 left-0 right-0'>
          <SubcribeBg />
        </div>
        <div className='border-b border-[#808080] bg-opacity-20 py-2'>
          <Heading 
            title="Subscribe to receive future updates"
            description="Lorem ipsum dolor sited Sed ullam corper consectur adipiscing Mae ornare massa quis lectus.c"
          />
        </div>
        <div>
          <input type="text" placeholder='Enter your name' className="my-5 outline-none border-none bg-[#808080] bg-opacity-10 w-full h-12 px-10 py-3 rounded-md placeholder:text-[#959cb1] shadow-md" />
          <input type="email" placeholder='Enter your email' className="mb-5 outline-none border-none bg-[#808080] bg-opacity-10 w-full h-12 px-10 py-3 rounded-md placeholder:text-[#959cb1] shadow-md" />
        </div>
        <div className='mb-5'>
          <Button 
              title="Subscribe"
              bg_color="#4A6CF7"
              width="full"
              hover_color="white"
              txt_color="white"
              hover_opacity="90"
          />
        </div>
        <p className='text-[#959cb1] text-lg mt-3'>No spam guaranteed, So please don’t send any spam mail.</p>
      </div>
    </div>
  </div>
  )
}

export default Dashboard  