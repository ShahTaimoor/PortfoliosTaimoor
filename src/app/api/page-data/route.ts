import { NextResponse } from "next/server";

const contactBar = {
  contactItems: [
    {
      type: "email",
      label: "taimour448@gmail.com",
      icon: "/images/icon/mail-icon.svg",
      link: "mailto:taimour448@gmail.com",
    },
    {
      type: "phone",
      label: "0313 0922988",
      icon: "/images/icon/call-icon.svg",
      link: "tel:+923130922988",
    },
    {
      type: "website",
      label: "Portfolio",
      icon: "/images/icon/web-icon.svg",
      link: "/",
    },
  ],
  socialItems: [
    {
      platform: "github",
      icon: "/images/icon/github-icon.svg",
      link: "https://github.com/ShahTaimoor",
    },
    {
      platform: "linkedin",
      icon: "/images/icon/linkedin-icon.svg",
      link: "https://www.linkedin.com/in/shah-taimoor-bin-khalid-b86191268/",
    },
  ],
};

const educationData = {
  education: [
    {
      title: "Bachelor of Software Engineering (2022 - 2026)",
      description: "Islamia College University - undergraduate studies.",
    },
    {
      title: "FSc in Computer Science (2020 - 2022)",
      description: "Govt College Peshawar.",
    },
  ],
  skills: [
    {
      category: "Frontend",
      icon: "/images/icon/web-icon.svg",
      items: [
        "React.js, Next.js & Redux Toolkit",
        "TypeScript, JavaScript (ES6+)",
        "Tailwind CSS, HTML5, CSS3",
        "Responsive Design & Framer Motion",
      ],
    },
    {
      category: "Backend",
      icon: "/images/icon/web-icon.svg",
      items: [
        "Node.js, Express.js & RESTful APIs",
        "JWT Auth, RBAC & Socket.io",
        "API Integration & Payment Gateway",
      ],
    },
    {
      category: "Database",
      icon: "/images/icon/web-icon.svg",
      items: [
        "MongoDB, PostgreSQL & MySQL",
        "Redis",
      ],
    },
    {
      category: "DevOps & Tools",
      icon: "/images/icon/web-icon.svg",
      items: [
        "Git, GitHub & Docker",
        "CI/CD, Vercel, Render & Nginx",
        "Linux Server Management",
      ],
    },
  ],
  achievements: [
    "Developed 3 production-grade applications",
    "Built enterprise POS with accounting module",
    "Delivered software for international clients",
    "Reduced operational effort through workflow automation",
  ],
};

const contactLinks = {
  socialLinks: [
    {
      title: "GitHub",
      href: "https://github.com/ShahTaimoor",
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/shah-taimoor-bin-khalid-b86191268/",
    },
  ],
  contactInfo: [
    {
      type: "email",
      label: "taimour448@gmail.com",
      link: "mailto:taimour448@gmail.com",
    },
    {
      type: "phone",
      label: "0313 0922988",
      link: "tel:+923130922988",
    },
  ],
};

export const GET = async () => {
  return NextResponse.json({
    contactBar,
    educationData,
    contactLinks,
  });
};
