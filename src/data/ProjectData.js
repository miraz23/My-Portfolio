import workifyImg from '../asset/Projects/workify.jpg';
import hemosysImg from '../asset/Projects/hemosys.png';
import gifsoverflowImg from '../asset/Projects/gifsoverflow.jpg';
import alapImg from '../asset/Projects/alap.png';
import staypointImg from '../asset/Projects/staypoint.png';
import wearvaultImg from '../asset/Projects/wearvault.png';

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
        imgUrl: alapImg,
        title: 'Alap - Real-time Chat Application',
        description: 'Alap is a real-time chat application built with React, Node.js, PostgreSQL, and WebSockets, featuring secure authentication, instant messaging, and Dockerized deployment.',
        tech: ["React", "Tailwind css", "Nodejs", "PostgreSQL", "Docker"],
        siteUrl: 'https://github.com/miraz23/Alap_Real-time-chat-application',
    },
    {
        id: '04',
        imgUrl: hemosysImg,
        title: 'Hemosys - Advance Blood Donation System',
        description: 'Hemosys is a comprehensive solution designed to streamline and enhance blood donation processes.',
        tech: ["Django", "PostgreSQL", "AWS S3", "Onrender"],
        siteUrl: 'https://github.com/miraz23/Hemosys_Advance-Blood-Donation-System',
    },
    {
        id: '05',
        imgUrl: staypointImg,
        title: 'Stay Point - Hotel Booking Platform',
        description: 'Stay Point is an advanced hotel booking platform that offers a seamless experience for users to book hotels while empowering landlords to list their properties effortlessly.',
        tech: ["Dango Rest Framework", "PostgreSQL", "React", "Tailwind css"],
        siteUrl: 'https://github.com/miraz23/Stay-Point_Hotel-Booking-Platform',
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