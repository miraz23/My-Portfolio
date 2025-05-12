import workifyImg from '../asset/Projects/workify.jpg';
import hemosysImg from '../asset/Projects/hemosys.png';
import gifsoverflowImg from '../asset/Projects/gifsoverflow.jpg';
import alapImg from '../asset/Projects/alap.png';
import staypointImg from '../asset/Projects/staypoint.png';
import wearvaultImg from '../asset/Projects/wearvault.png';
import growthLabImg from '../asset/Projects/growthlab.png';

const ProjectData = [
    {
        id: '01',
        imgUrl: workifyImg,
        title: 'Workify - Job Portal',
        description: 'Workify is a modern job portal designed to provide a seamless job search and recruitment experience.',
        tech: ["React", "Tailwind css", "Vercel"],
        siteUrl: 'https://workify-gules.vercel.app/',
    },
    {
        id: '02',
        imgUrl: gifsoverflowImg,
        title: 'Gifs Overflow - Gif Genrator',
        description: 'Gifs Overflow is a gif generator that allows users to search for gifs and share them with friends.',
        tech: ["React", "Tailwind css", "Vercel"],
        siteUrl: 'https://gifs-overflow.vercel.app/',
    },
    {
        id: '03',
        imgUrl: growthLabImg,
        title: 'Growth Lab - Educational-Platform',
        description: 'Growth-Lab is a platform designed to help users develop and refine their skills through structured learning resources.',
        tech: ["Dango Rest Framework", "Tailwind css", "Vercel", "Render"],
        siteUrl: 'https://growth-lab-bd.vercel.app/',
    },
    {
        id: '04',
        imgUrl: hemosysImg,
        title: 'Hemosys - Advance Blood Donation System',
        description: 'Hemosys is a comprehensive solution designed to streamline and enhance blood donation processes.',
        tech: ["Django", "PostgreSQL", "AWS S3", "Onrender"],
        siteUrl: 'http://hemosys.onrender.com/',
    },
    {
        id: '05',
        imgUrl: staypointImg,
        title: 'Stay Point - Hotel Booking Platform',
        description: 'Stay Point is an advanced hotel booking platform that offers a seamless experience for users to book hotels while empowering landlords to list their properties effortlessly.',
        tech: ["Dango Rest Framework", "React", "Redux", "Axios", "Tailwind css", "Vercel", "Render"],
        siteUrl: 'https://stay-point.vercel.app/',
    },
    {
        id: '06',
        imgUrl: wearvaultImg,
        title: 'Wear Vault - Fashion E-commerce Platform',
        description: 'Wear Vault is a cutting-edge fashion eCommerce platform designed to deliver a seamless and captivating shopping experience.',
        tech: ["Django", "Javascript", "Paypal", "Namecheap"],
        siteUrl: 'https://wearvault.au/',
    },
]

export default ProjectData;