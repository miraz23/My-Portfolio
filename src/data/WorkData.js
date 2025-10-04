import abadasLogo from '../asset/Companies/abadaslogo.png';
import wearVaultLogo from '../asset/Companies/wearvaultlogo.png';

const workExperiences = [
    {
        company: "Abadas Australia",
        position: "Backend Developer",
        duration: "August 2025 - September 2025",
        link: "https://abadas.com.au/",
        logo: abadasLogo,
        achievements: [
            "Developed and deployed robust e-commerce platform with PostgreSQL (Neon) for scalable performance",
            "Implemented dynamic category management and stock handling with out-of-stock alerts",
            "Integrated PayID alongside Cards and PayPal payment methods for secure multi-payment support",
            "Designed guest checkout flow to improve user experience and reduce cart abandonment",
            "Added admin order notifications and approval workflow for enhanced backend control",
            "Built dynamic shipping methods providing flexible delivery options",
            "Optimized product images using Cloudinary CDN integration for faster load times",
            "Automated order confirmation and notification emails with 100% delivery reliability"
        ]
    },
    {
        company: "Wear Vault",
        position: "Backend Developer", 
        duration: "August 2024 - October 2024",
        link: "https://wearvault.au/",
        logo: wearVaultLogo,
        achievements: [
            "Developed e-commerce platform using Django following software development lifecycle best practices",
            "Integrated Cards and PayPal payment gateway with secure redirection",
            "Implemented custom user authentication with email verification and password reset",
            "Enabled order management through Django Admin with real-time updates",
            "Automated order confirmation emails ensuring 100% delivery success rate",
            "Deployed on Namecheap with MySQL integration and performed manual testing for stable hosting",
            "Presented backend architecture and functionality to client team bridging technical and business workflow"
        ]
    }
];

export default workExperiences;
