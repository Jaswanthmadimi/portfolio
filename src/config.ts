export const config = {
    developer: {
        name: "Jaswanth",
        fullName: "Madimi Jaswanth Sai",
        title: "Aspiring Software Developer",
        description: "As an Information Science student with a strong passion for vibe coding, programming, and cybersecurity, seeking a Software Developer or Web Developer role in the IT industry. I aim to apply my programming skills, hands-on experience with security tools, problem-solving ability, and collaborative mindset to build secure, efficient, and impactful software solutions"
    },
    social: {
        github: "Jaswanthmadimi", // Placeholder as none was provided
        email: "jaswanthr612@gmail.com",
        location: "Bangalore, Karnataka"
    },
    about: {
        title: "About Me",
        description: "As an Information Science student with a strong passion for vibe coding, programming, and cybersecurity, seeking a Software Developer or Web Developer role in the IT industry. I aim to apply my programming skills, hands-on experience with security tools, problem-solving ability, and collaborative mindset to build secure, efficient, and impactful software solutions"
    },
    experiences: [
        {
            position: "B.E – Information Science and Engineering",
            company: "CMR Institute of Technology",
            period: "2026 [Pursuing]",
            location: "AECS Layout, Bangalore",
            description: "Currently pursuing Bachelor of Engineering with a CGPA of 6.5 (Pursuing).",
            responsibilities: [
                "Focusing on Information Science and Engineering",
                "Developing skills in coding, programming, and cybersecurity"
            ],
            technologies: ["JavaScript", "HTML", "CSS", "MySQL"]
        },
        {
            position: "12th – Science",
            company: "Narayana Junior College",
            period: "04/2022",
            location: "Vijayawada, Andhra Pradesh",
            description: "Completed 12th grade Science with 60%.",
            responsibilities: [],
            technologies: []
        },
        {
            position: "10th - CBSE",
            company: "Viswabharathi Wisewoods",
            period: "12/2020",
            location: "Gudivada",
            description: "Completed 10th grade CBSE with 75%.",
            responsibilities: [],
            technologies: []
        }
    ],
    projects: [
        {
            id: 1,
            title: "MRF Tyres Enterprises",
            category: "Web App",
            technologies: "React, Node.js, Express, PostgreSQL, JWT Auth",
            image: "/images/MRF.png",
            description: "MRF Tyre Shop Management System is a full-stack web app built with React, Node.js, and PostgreSQL to streamline tyre dealership operations. It offers inventory tracking, sales processing, invoicing, financial monitoring, and secure authentication in a responsive interface.",
            highlight: true,
            badge: "🏆 First Real-World Client - My Dad's Business"
        },
        {
            id: 2,
            title: "Keylogger Analyzer Tool",
            category: "Security",
            technologies: "Android Studio, JavaScript, Dart, Flutter, Windows OS telemetry",
            image: "/images/project-1.webp",
            description: "A cross-platform keylogger detection utility that identifies unauthorized surveillance software. Analyzes running processes in real-time against known malicious signatures. Provides automated threat alerts with tamper-evident logging."
        },
        {
            id: 3,
            title: "Sentiment Analysis on Twitter",
            category: "AI/ML",
            technologies: "Python, NLP, BERT/RoBERTa, FastAPI, React.js, MongoDB",
            image: "/images/project-3.webp",
            description: "An NLP-powered tool that classifies tweet sentiment in real-time using BERT/RoBERTa models. Exposes results through a FastAPI backend consumed by a React.js dashboard. Stores analysis history and trends in a MongoDB collection."
        },
        {
            id: 4,
            title: "Endpoint Detection & Response",
            category: "Security",
            technologies: "PowerShell, JavaScript, HTTP API, Windows Telemetry",
            image: "/images/project-1.webp",
            description: "An EDR system that collects, analyzes, and centrally monitors endpoint telemetry via HTTP-based communication. Detects suspicious activity using PowerShell scripts and a JavaScript dashboard. Suitable for real-world enterprise security demonstrations."
        }
    ],
    skillsSection: {
        quote: "Life is short, So I use Python 🐍",
        categories: [
            {
                icon: "💻",
                label: "Languages",
                items: ["Python", "C"]
            },
            {
                icon: "🌐",
                label: "Web Technologies",
                items: ["HTML", "CSS", "JavaScript", "React", "Node.js"]
            },
            {
                icon: "🛠️",
                label: "Tools & Platforms",
                items: ["Visual Studio Code", "Android Studio", "Git", "Postman", "Firebase Console"]
            },
            {
                icon: "🗄️",
                label: "Database",
                items: ["MySQL", "MongoDB"]
            },
            {
                icon: "🔗",
                label: "Networking",
                items: ["Real-World Network Attacks", "Cisco Packet Tracer", "Network Configurations"]
            },
            {
                icon: "🖥️",
                label: "Operating Systems",
                items: ["Windows", "Mac", "Debian / Ubuntu", "Parrot OS", "Black Arch (Linux)"]
            },
            {
                icon: "⚔️",
                label: "Security Frameworks & Tools",
                items: ["Metasploit", "Nmap", "Burp Suite", "Wireshark", "Hashcat", "Aircrack-ng", "BeEF", "Mimikatz"]
            }
        ]
    },
    achievements: [
        {
            icon: "🏅",
            title: "CEH Master Certificate",
            refLabel: "Cert Ref:",
            ref: "ECC0831945726",
            link: null,
            description: "Earned the Certified Ethical Hacker (CEH) Master certification from EC-Council, validating advanced skills in ethical hacking, penetration testing, and cybersecurity defense. This credential demonstrates hands-on expertise in identifying and mitigating real-world vulnerabilities across systems and networks.",
            year: "2026"
        },
        {
            icon: "📄",
            title: "Published Research Paper — IRJMETS",
            refLabel: "View Paper:",
            ref: "IRJMETS Journal",
            link: "https://www.irjmets.com/searchissue.php?keywor=Sentiment+Analysis+on+Twitter+Using+NLP",
            description: "Co-authored and published a research paper titled 'Sentiment Analysis on Twitter Using NLP' in the International Research Journal of Modernization in Engineering, Technology and Science (IRJMETS). The paper covers BERT/RoBERTa-based classification models achieving high accuracy on real Twitter datasets.",
            year: "2025"
        },
        {
            icon: "⚡",
            title: "Synchrony Infosec University Hackathon 2025",
            refLabel: null,
            ref: null,
            link: null,
            description: "Participated in the Synchrony Infosec University Hackathon 2025, a competitive cybersecurity challenge focused on information security problem-solving and innovation. Collaborated in a team environment to tackle real-world security scenarios under time-constrained conditions.",
            year: "2025"
        },
        {
            icon: "📱",
            title: "Android Pentesting on Software 13 using ADB Unauth Root Access",
            refLabel: "Severity:",
            ref: "Critical",
            link: null,
            description: "Exploits misconfigured Android devices (ro.secure=0 or unlocked bootloader) via Android Debug Bridge (ADB). Gains unauthorized root access through the ADB shell to bypass authentication, read sensitive data, and execute arbitrary commands at the highest privilege level.",
            year: "2026"
        },
        {
            icon: "🎯",
            title: "Real World Attack Simulations",
            refLabel: null,
            ref: null,
            link: null,
            description: "I simulate real-world scenarios by executing various edge attacks on mobile devices and laptops, as well as performing Man-in-the-Middle (MitM) attacks, strictly with explicit permission.",
            year: "2026"
        }
    ],
    contact: {
        email: "jaswanthr612@gmail.com",
        github: "https://github.com/Jaswanthmadimi", // Placeholder
        linkedin: "https://www.linkedin.com/in/madimi-jaswanth-sai-621a76340/", // Placeholder

    },
    skills: {
        develop: {
            title: "DEVELOPER",
            description: "Software and Web Development",
            details: "Building secure and efficient software solutions with a focus on web technologies and cybersecurity.",
            tools: ["Python", "Git", "Android Studio", "Postman"]
        },
        design: {
            title: "DESIGN",
            description: "UI/UX and Frontend Design",
            details: "Creating clean and user-friendly interfaces.",
            tools: ["Visual Studio Code", "Android Studio", "Postman"]
        }
    }
};


