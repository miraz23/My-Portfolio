import hemosysImg from '../asset/Projects/hemosys.png';
import staypointImg from '../asset/Projects/staypoint.png';
import wearvaultImg from '../asset/Projects/wearvault.png';
import swiftcartImg from '../asset/Projects/swiftcart.png';

const ProjectData = [
    {
        id: '01',
        imgUrl: hemosysImg,
        title: 'Hemosys - Advance Blood Donation System',
        description: 'Hemosys is a comprehensive solution designed to streamline and enhance blood donation processes.',
        tech: ["Django", "PostgreSQL", "AWS S3", "Onrender"],
        siteUrl: 'http://hemosys.onrender.com/',
        repoUrl: 'https://github.com/miraz23/Hemosys',
    },
    {
        id: '02',
        imgUrl: wearvaultImg,
        title: 'Wear Vault - Fashion E-commerce Platform',
        description: 'Wear Vault is a cutting-edge fashion eCommerce platform designed to deliver a seamless and captivating shopping experience.',
        tech: ["Django", "Javascript", "Paypal", "Namecheap"],
        siteUrl: 'https://wearvault.au/',
        repoUrl: 'https://github.com/miraz23/Wear-Vault',
    },
    {
        id: '03',
        imgUrl: staypointImg,
        title: 'Stay Point - Hotel Booking Platform',
        description: 'Stay Point is an advanced hotel booking platform that offers a seamless experience for users to book hotels while empowering landlords to list their properties effortlessly.',
        tech: ["Dango Rest Framework", "React", "Redux", "Axios", "Tailwind css", "Vercel", "Render"],
        siteUrl: 'https://stay-point.vercel.app/',
        repoUrl: 'https://github.com/miraz23/Stay-Point_Server',
    },
    {
        id: '04',
        imgUrl: swiftcartImg,
        title: 'Swift Cart - Fashion E-commerce Platform',
        description: 'A modern, full-stack e-commerce platform built with Mern, featuring a complete shopping experience with user authentication, product management, cart functionality, and secure payment processing.',
        tech: ["React", "MongoDB", "Express", "Nodejs", "Tailwind css"],
        siteUrl: 'https://swiftcartbd.vercel.app/',
        repoUrl: 'https://github.com/miraz23/Swiftcart_client',
    },
]

export default ProjectData;