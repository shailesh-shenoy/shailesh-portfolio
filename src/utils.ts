
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
    "Secure Social Share": {
        name: 'Secure Social Share',
        description: `An E2E encrypted data sharing system with strict, smart contract-based access control, 
        allowing users to securely share sensitive information with their social circle in a decentralized way.
        Won multiple 1st place prizes at ETHBoston 2024.`,
        imageUrl: '/projects/secure-social-share.jpg',
        github: 'https://github.com/shailesh-shenoy/secure-share-dapp',
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
    'VeriFree': {
        name: 'VeriFree',
        description: `A permissioned blockchain where students with a valid educational email address can gain access to a student-led DAO as well as free transactions on the verifree Subnet.
        Runner up prize at Chainlink Constellation hackathon in Avalanche track.`,
        imageUrl: '/projects/verifree.png',
        github: 'https://github.com/shailesh-shenoy/VeriFree',
        skills: ['Solidity', 'NextJS', 'MongoDB', 'TypeScript']
    },
};







