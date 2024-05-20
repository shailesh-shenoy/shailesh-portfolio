
interface NavItem {
    label: string;
    icon?: any;
    link: string;
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