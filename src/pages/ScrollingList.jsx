import { Splide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import SlideCard from '../components/ScrollCard';
const event = [
  {
    img: "https://media.licdn.com/dms/image/D5622AQEFXUpHtdyOog/feedshare-shrink_2048_1536/0/1697452206050?e=1700697600&v=beta&t=KuX_r7_fHDGtQyTntKAacn2SSrT-2O53pzGSR35-41E",
    name:"Startup Success Days",
    tags:["innovation", "gdgvizag", "startups", "community", "event"],
    link: "https://www.linkedin.com/posts/premsaivarma_google-future-technology-activity-7119630618073731072-UDma?utm_source=share&utm_medium=member_desktop"
  },
  {
    img: "https://media.licdn.com/dms/image/D5622AQFXwhFhK4yhmg/feedshare-shrink_800/0/1694264355394?e=1700697600&v=beta&t=5UViPtz0WsDD9y0J85V7K7iEGFgiS6RFvBz2Cupww0M",
    name:"Github Fullstack Dev Roadmap",
    tags:["technology", "github", "speaker", "community", "event"],
    link: "https://www.linkedin.com/posts/premsaivarma_technology-innovation-future-ugcPost-7106259777491537920-lTOf?utm_source=share&utm_medium=member_desktop"
  },
  {
    img: "https://media.licdn.com/dms/image/D5622AQHjVgweFM4H1w/feedshare-shrink_1280/0/1691325429150?e=1700697600&v=beta&t=7G1_tKIh2Qkpx84bFX4GRGlYRYaKe7Ytl5iMISsK_Mw",
    name:"Goolge I/O",
    tags:["innovation", "gdgvizag", "technology", "community", "google"],
    link: "https://www.linkedin.com/posts/premsaivarma_google-future-technology-activity-7093933026509811712-gAnM?utm_source=share&utm_medium=member_desktop"
  },
  {
    img: "https://media.licdn.com/dms/image/D5622AQHU5fZtOkGBxg/feedshare-shrink_800/0/1687349651919?e=1700697600&v=beta&t=bUS4Urip6HTs69tqTNmtXi21MwyMbHnfcUpsgbv0qEE",
    name:"CXR Hackathon",
    tags:["technology", "cxrgitam", "arvr", "research", "hackathon"],
    link: "https://www.linkedin.com/posts/premsaivarma_technology-innovation-future-activity-7077257432267165697-Uq8X?utm_source=share&utm_medium=member_desktop"
  },
  {
    img: "https://media.licdn.com/dms/image/D5622AQEBQdllAtE-zg/feedshare-shrink_2048_1536/0/1682338913688?e=1700697600&v=beta&t=yWGAQJZ1GVIM47x_u7a3D-UVznS6b1GTHkcnzURhA6A",
    name:"Selection of Cloud Platform",
    tags:["cloud", "gitam", "speaker", "google", "event"],
    link: "https://www.linkedin.com/posts/premsaivarma_microsoft-azure-amazon-activity-7056240843417911298-Yz_G?utm_source=share&utm_medium=member_desktop"
  },
  {
    img: "https://media.licdn.com/dms/image/D5622AQF5lvad2puzpw/feedshare-shrink_2048_1536/0/1680434195276?e=1700697600&v=beta&t=BpVMRpI6b0Cb-u9PqyeID8O9ufkz4pVlc-HPYOw4igE",
    name:"WTM IWD",
    tags:["innovation", "wtmvizag", "technology", "community", "event"],
    link: "https://www.linkedin.com/posts/premsaivarma_experiences-knowledge-health-activity-7048251956619857920-wm4f?utm_source=share&utm_medium=member_desktop"
  },
  {
    img: "https://media.licdn.com/dms/image/D5622AQFbq-qn23hQZw/feedshare-shrink_800/0/1680277016729?e=1700697600&v=beta&t=huOAlqRUSuSF5LF6wF0jfpYjArC7xbximAO4E3CMut0",
    name:"Hack the Hackers",
    tags:["innovation", "acmgitam", "cybersecurity", "community", "event"],
    link: "https://www.linkedin.com/posts/premsaivarma_technology-future-education-activity-7047592619677257729-8ldc?utm_source=share&utm_medium=member_desktop"
  },
  {
    img: "https://media.licdn.com/dms/image/D5622AQHLmxGvWC1RsA/feedshare-shrink_800/0/1679746059980?e=1700697600&v=beta&t=zH56jvSg7tUpy7CFZwaZ9GiRoJW3pG8_4HpMsPzGPlU",
    name:"GDSC WOW",
    tags:["technology", "gdsc", "gitam", "community", "fest"],
    link: "https://www.linkedin.com/posts/premsaivarma_success-google-gdsc-activity-7045365628597112832--vPM?utm_source=share&utm_medium=member_desktop"
  },  {
    img: "https://media.licdn.com/dms/image/C5622AQHiHEI7PhYKfg/feedshare-shrink_800/0/1678465044671?e=1700697600&v=beta&t=bir24nrFswNj9sZ09sJd54b1ZUOQ7wsEA-oPafJ9Xm4",
    name:"Introduction to Opensource",
    tags:["github", "acm", "opensource", "community", "developer"],
    link: "https://www.linkedin.com/posts/premsaivarma_future-opensource-technology-activity-7039992671150501888-XqgY?utm_source=share&utm_medium=member_desktop"
  },
  {
    img: "https://media.licdn.com/dms/image/C5622AQEY15fgE7ajwg/feedshare-shrink_800/0/1671631125710?e=1700697600&v=beta&t=ePHjfPfORykMEyTOeitWEbsakmGfwLWYveLhTAYT1ko",
    name:"Treasure Hunt",
    tags:["fun", "github", "volunteer", "community", "game"],
    link: "https://www.linkedin.com/posts/premsaivarma_github-community-students-activity-7011329127752359936-AY8Z?utm_source=share&utm_medium=member_desktop"
  },

]

const ScrollingList = () => {
    const options = {
        type   : 'loop',
        drag   : 'free',
        focus  : 'center',
        snap: 'true',
        perPage: {
          sm: 2, // 1 slide per page on small screens
          md: 2, // 2 slides per page on medium screens
          lg: 2,
          xl:3 // 3 slides per page on large screens
        },
        autoScroll: {
          speed: -1,
        },
        autoplay: 'play'
      };
  return (
    <div className=' bg-[#090E34]'>
      <Splide
      aria-label="My Favorite Images"
      options={ options } 
    >
      {event.map(e => <SlideCard details={e} />)}
    </Splide>
    </div>
  );
};

export default ScrollingList;
