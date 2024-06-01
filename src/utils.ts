
interface NavItem {
    label: string;
    icon?: any;
    link: string;
}

interface StoryItem {
    title: string;
    description: string;
    image: string;
}

export interface SkillItem {
    name: string;
    iconSrc: string;
}

export interface ProjectData {
    name: string;
    description: string;
    imageUrl: string;
    github: string;
    skills: string[];
}

export const mailToText = `mailto:shenoy.shailesh21@gmail.com?subject=Reaching%20out%20from%20your%20portfolio`;

export const socials: Array<NavItem> = [
    {
        label: "Github",
        icon: "/icons/github.png",
        link: "https://github.com/shailesh-shenoy/",
    },
    {
        label: "Linkedin",
        icon: "/icons/linkedin.png",
        link: "https://www.linkedin.com/in/shailesh-shenoy/",
    },
    {
        label: "Email",
        icon: "/icons/mail.png",
        link: mailToText,
    },
];



export const stories: Array<StoryItem> = [
    {
        title: "education",
        description: "Back in 2014, I chose Computer Engineering for my undergrad as I liked playing video games and helping my friends assemble PCs from components. What began as a casual interest in technology evolved into a strong passion for programming and led me to a profession I love – solving problems with code.",
        image: "/images/sies.webp",
    },
    {
        title: "ingram micro",
        description: "Soon after getting my CS degree, I worked at Ingram Micro for 4 years as a Software Engineer. There, I learned the intricacies of elaborate enterprise systems by working in large, agile teams, a stark contrast to the smaller, academic projects I was used to. I was fortunate to have done a bit of everything: designed consumer-facing APIs, wove together complex systems through middleware services, and built internal tools & dashboards for our team.",
        image: "/images/ingram.jpeg",
    },
    {
        title: "neu",
        description: "In 2022, seeking to broaden my horizons, I decided to get a master’s degree in information systems, with a focus on the blockchain & Web3 space. My journey has been nothing short of exhilarating – I’ve engaged with brilliant minds at Boston’s tech events, won hackathons, and delved deeper into the crypto ecosystem. ",
        image: "/images/neu.webp",
    },
    {
        title: "fidelity",
        description: "My recent co-op experience at Fidelity Labs was particularly impactful, as I contributed to the early stages of developing crypto services for digital assets in an environment that had all the energy and innovation of a startup. ",
        image: "/images/fidelity.jpg",
    },
    {
        title: "now",
        description: "When I’m not gaming on my PC, I enjoy relaxing with my cats, experimenting with new recipes, or playing online chess matches.  If you’d like to know more about my work or just say hi, feel free to contact me by clicking the over-engineered button below.",
        image: "/images/now.jpg",
    },
];

export const allSkills: Record<string, SkillItem> = {
    "Solidity": {
        name: "Solidity",
        iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-original.svg",
    },
    "React": {
        name: 'React',
        iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    // Add more skills here
    "TypeScript": {
        name: 'TypeScript',
        iconSrc: "/icons/typescript.png",
    },
    "Python": {
        name: 'Python',
        iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    },
    "MongoDB": {
        name: 'MongoDB',
        iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    },
    "C#": {
        name: 'C#',
        iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
    },
    "Go": {
        name: 'Go',
        iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg",
    },
    "AWS": {
        name: 'AWS',
        iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    },
    "NextJS": {
        name: 'NextJS',
        iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    },
    "Postgres": {
        name: 'Postgres',
        iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    },
    "Unity": {
        name: 'Unity',
        iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg",
    },
    "Java": {
        name: 'Java',
        iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    },
};

export const projects: Record<string, ProjectData> = {
    'VeriFree': {
        name: 'VeriFree',
        description: `A permissioned blockchain where students with a valid educational email address can gain access to a student-led DAO as well as free transactions on the verifree Subnet.
        Runner up prize at Chainlink Constellation hackathon in Avalanche track.`,
        imageUrl: '/projects/verifree.png',
        github: 'https://github.com/shailesh-shenoy/VeriFree',
        skills: ['Solidity', 'NextJS', 'MongoDB', 'TypeScript']
    },
    'WagerWinz': {
        name: 'WagerWinz',
        description: 'A decentralized, P2P platform for creating, challenging and winning wagers on the price of ETH/USD using smart contracts and Chainlink price feed.',
        imageUrl: '/projects/wagerwinz.jpg',
        github: 'https://github.com/shailesh-shenoy/wagerwinz',
        skills: ['Solidity', 'React', 'Chainlink']
    },
    'AllCoinz': {
        name: "AllCoinz",
        description: "A simple and easy-to-use crypto portfolio aggregator which let's you track all your coins across top exchanges and blockchains. View your portfolio on the web app or integrate into your own tools using the REST API. Work in Progress.",
        imageUrl: '/projects/allcoinz.png',
        github: "",
        skills: ['Go', "React", "Postgres", "AWS"],
    },
};





