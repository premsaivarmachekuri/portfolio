import { Splide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import SlideCard from '../components/ScrollCard';
const event = [
  {
    img: "./src/assets/events/1.jpeg",
    name:"Startup Success Days",
    tags:["innovation", "gdgvizag", "startups", "community", "event"],
    link: "https://www.linkedin.com/posts/premsaivarma_google-future-technology-activity-7119630618073731072-UDma?utm_source=share&utm_medium=member_desktop"
  },
  {
    img:"./src/assets/events/2.jpeg",
    name:"Github Fullstack Dev Roadmap",
    tags:["technology", "github", "speaker", "community", "event"],
    link: "https://www.linkedin.com/posts/premsaivarma_technology-innovation-future-ugcPost-7106259777491537920-lTOf?utm_source=share&utm_medium=member_desktop"
  },
  {
    img:"./src/assets/events/3.jpeg",
    name:"Goolge I/O",
    tags:["innovation", "gdgvizag", "technology", "community", "google"],
    link: "https://www.linkedin.com/posts/premsaivarma_google-future-technology-activity-7093933026509811712-gAnM?utm_source=share&utm_medium=member_desktop"
  },
  {
    img:"./src/assets/events/4.jpeg",
    name:"CXR Hackathon",
    tags:["technology", "cxrgitam", "arvr", "research", "hackathon"],
    link: "https://www.linkedin.com/posts/premsaivarma_technology-innovation-future-activity-7077257432267165697-Uq8X?utm_source=share&utm_medium=member_desktop"
  },
  {
    img:"./src/assets/events/5.jpeg",
    name:"Selection of Cloud Platform",
    tags:["cloud", "gitam", "speaker", "google", "event"],
    link: "https://www.linkedin.com/posts/premsaivarma_microsoft-azure-amazon-activity-7056240843417911298-Yz_G?utm_source=share&utm_medium=member_desktop"
  },
  {
    img:"./src/assets/events/6.jpeg",
    name:"WTM IWD",
    tags:["innovation", "wtmvizag", "technology", "community", "event"],
    link: "https://www.linkedin.com/posts/premsaivarma_experiences-knowledge-health-activity-7048251956619857920-wm4f?utm_source=share&utm_medium=member_desktop"
  },
  {
    img:"./src/assets/events/7.jpeg",
    name:"Hack the Hackers",
    tags:["innovation", "acmgitam", "cybersecurity", "community", "event"],
    link: "https://www.linkedin.com/posts/premsaivarma_technology-future-education-activity-7047592619677257729-8ldc?utm_source=share&utm_medium=member_desktop"
  },
  {
    img:"./src/assets/events/8.jpeg",
    name:"GDSC WOW",
    tags:["technology", "gdsc", "gitam", "community", "fest"],
    link: "https://www.linkedin.com/posts/premsaivarma_success-google-gdsc-activity-7045365628597112832--vPM?utm_source=share&utm_medium=member_desktop"
  },  {
    img:"./src/assets/events/9.jpeg",
    name:"Introduction to Opensource",
    tags:["github", "acm", "opensource", "community", "developer"],
    link: "https://www.linkedin.com/posts/premsaivarma_future-opensource-technology-activity-7039992671150501888-XqgY?utm_source=share&utm_medium=member_desktop"
  },
  {
    img:"./src/assets/events/10.jpeg",
    name:"Treasure Hunt",
    tags:["fun", "github", "volunteer", "community", "game"],
    link: "https://www.linkedin.com/posts/premsaivarma_github-community-students-activity-7011329127752359936-AY8Z?utm_source=share&utm_medium=member_desktop"
  },
  {
    img:"./src/assets/events/11.jpeg",
    name:"Gitam Homecoming",
    tags:["softskills", "gitam", "volunteer", "event", "networking"],
    link: "https://www.linkedin.com/posts/premsaivarma_innovative-technologies-innovation-activity-7010241375224946688-oToO?utm_source=share&utm_medium=member_desktop"
  },
  {
    img:"./src/assets/events/12.jpeg",
    name:"Google Devfest",
    tags:["technology", "gdgvizag", "networking", "community", "fest"],
    link: "https://www.linkedin.com/posts/premsaivarma_technology-success-gdgvizag-activity-6997443872859578368-NjFq?utm_source=share&utm_medium=member_desktop"
  },
  {
    img:"./src/assets/events/13.jpeg",
    name:"GDSC Compose Camp",
    tags:["gdsc", "composecamp", "google", "community", "event"],
    link: "https://www.linkedin.com/posts/premsaivarma_google-gdsc-composecampindia-activity-6986912731358535680-tfbJ?utm_source=share&utm_medium=member_desktop"
  },
  {
    img:"./src/assets/events/14.jpeg",
    name:"TCS Placement Drive",
    tags:["tcs", "student", "coordinator", "gitam", "placements"],
    link: "https://www.linkedin.com/posts/premsaivarma_gitamdeemedtobeuniversity-tcs-activity-6979112361555062787-lg7N?utm_source=share&utm_medium=member_desktop"
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
          speed: 1,
        },
        autoplay: 'play'
      };
  return (
    <div className=' bg-[#0B113A]'>
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
