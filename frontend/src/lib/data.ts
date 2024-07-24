import phpQuestions from "@/lib/questions/php.ts";
import dockerQuestions from "@/lib/questions/docker.ts";
import htmlcssjsQuestions from "@/lib/questions/htmlcssjs.ts";
import linuxQuestions from "@/lib/questions/linux.ts";
import sqlQuestions from "@/lib/questions/sql.ts";
import pb from "@/lib/pocketbase.ts";

export interface ICategory {
    id: number
    icon: string
    name: string
    description: string
}

const categories: ICategory[] = [
    {
        "id": 1,
        "icon": "devicon-html5-plain",
        "name": "HTML",
        description: "HTML5 is the latest version of the Hypertext Markup Language used for structuring and presenting content on the World Wide Web."
    },
    {
        "id": 2,
        "icon": "devicon-css3-plain",
        "name": "CSS",
        description: "CSS (Cascading Style Sheets) is a styling language used to control the presentation and layout of HTML documents. It defines how elements are displayed on webpages, including aspects such as colors, fonts, spacing, and positioning."
    },
    {
        "id": 7,
        "icon": "devicon-javascript-plain",
        "name": "JavaScript",
        description: "JavaScript is a versatile programming language commonly used for creating dynamic and interactive webpages, adding functionality to web applications, and more."
    },
    {
        "id": 14,
        "icon": "devicon-php-plain",
        "name": "PHP",
        description: "PHP is a server-side scripting language designed for web development, often used to create dynamic web pages and interact with databases."
    },
    {
        "id": 5,
        "icon": "devicon-azuresqldatabase-plain",
        "name": "SQL",
        description: "SQL (Structured Query Language) is a domain-specific language used for managing and manipulating relational databases, enabling tasks such as querying, updating, and deleting data."
    },
    {
        "id": 12,
        "icon": "devicon-linux-plain",
        "name": "Linux",
        description: "Linux is a free and open-source operating system kernel that serves as the foundation for various Unix-like operating systems, known for its stability, security, and flexibility."
    },
    // {
    //     "id": 2,
    //     "icon": "devicon-bash-plain",
    //     "name": "Bash"
    // },
    {
        "id": 4,
        "icon": "devicon-docker-plain",
        "name": "Docker",
        description: "Docker is a platform for developing, shipping, and running applications using containerization technology, allowing developers to package an application with all of its dependencies into a standardized unit for deployment."
    },
    // {
    //     "id": 8,
    //     "icon": "devicon-kubernetes-plain",
    //     "name": "Kubernetes",
    //     description: "Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications, providing tools for container deployment, scaling, and resource management."
    // }
];

// generate random  6 len string
function generateRandomString(length: number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


const addQuestions = () => {
    const aq = [
        ...phpQuestions,
        ...dockerQuestions,
        ...htmlcssjsQuestions,
        ...linuxQuestions,
        ...sqlQuestions
    ].map((q) => ({
        topic: q.tags[0],
        ...q,
        options: q.options.map((o) => ({
            ...o,
            id: generateRandomString(6)
        }))
    }))
    console.log(aq.length)

    aq.map(async (q) => {
        await pb.collection('questions').create(q, {
            requestKey: null
        })
    })
}


export {categories, addQuestions}