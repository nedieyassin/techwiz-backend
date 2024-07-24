interface IQuestion {
    question: string;
    options: {
        label: string;
        is_correct: boolean;
    }[];
    answer_description: string;
    difficulty: 'easy' | 'medium' | 'hard';
    tags: string[]; // must include languages and technologies used
}

const questions: IQuestion[] = [
    {
        "question": "What does Docker allow you to do?",
        "options": [
            {
                "label": "Create, deploy, and run applications in isolated environments",
                "is_correct": true
            },
            {
                "label": "Write code in multiple programming languages",
                "is_correct": false
            },
            {
                "label": "Access a centralized database for storing application configurations",
                "is_correct": false
            }
        ],
        "answer_description": "Docker enables you to create, deploy, and run applications in isolated environments known as containers, which encapsulate all the dependencies required for the application.",
        "difficulty": "easy",
        "tags": ["Docker", "containers"]
    },
    {
        "question": "What is the purpose of a Dockerfile?",
        "options": [
            {
                "label": "To define the steps to create a Docker container image",
                "is_correct": true
            },
            {
                "label": "To configure network settings for Docker containers",
                "is_correct": false
            },
            {
                "label": "To manage Docker volumes",
                "is_correct": false
            }
        ],
        "answer_description": "A Dockerfile is used to define the steps and instructions needed to create a Docker container image.",
        "difficulty": "easy",
        "tags": ["Docker", "Dockerfile"]
    },
    {
        "question": "What is the default container isolation technology used by Docker?",
        "options": [
            {
                "label": "Linux Containers (LXC)",
                "is_correct": true
            },
            {
                "label": "Hypervisor-based virtualization",
                "is_correct": false
            },
            {
                "label": "Windows Containers",
                "is_correct": false
            }
        ],
        "answer_description": "Docker uses Linux Containers (LXC) as its default container isolation technology.",
        "difficulty": "easy",
        "tags": ["Docker", "containerization"]
    },
    {
        "question": "What command is used to run a Docker container?",
        "options": [
            {
                "label": "`docker run`",
                "is_correct": true
            },
            {
                "label": "`docker start`",
                "is_correct": false
            },
            {
                "label": "`docker create`",
                "is_correct": false
            }
        ],
        "answer_description": "The `docker run` command is used to run a Docker container based on a specified image.",
        "difficulty": "easy",
        "tags": ["Docker", "container management"]
    },
    {
        "question": "Which Docker command is used to list running containers?",
        "options": [
            {
                "label": "`docker ps`",
                "is_correct": true
            },
            {
                "label": "`docker ls`",
                "is_correct": false
            },
            {
                "label": "`docker list`",
                "is_correct": false
            }
        ],
        "answer_description": "The `docker ps` command is used to list running containers along with their details.",
        "difficulty": "easy",
        "tags": ["Docker", "container management"]
    },
    {
        "question": "What does the -d flag do in the `docker run` command?",
        "options": [
            {
                "label": "Detaches the container and runs it in the background",
                "is_correct": true
            },
            {
                "label": "Deletes the container after it exits",
                "is_correct": false
            },
            {
                "label": "Docks the container to a specific network",
                "is_correct": false
            }
        ],
        "answer_description": "The `-d` flag in the `docker run` command detaches the container and runs it in the background.",
        "difficulty": "easy",
        "tags": ["Docker", "container management"]
    },
    {
        "question": "What is the purpose of Docker Compose?",
        "options": [
            {
                "label": "To define and run multi-container Docker applications",
                "is_correct": true
            },
            {
                "label": "To monitor Docker container performance",
                "is_correct": false
            },
            {
                "label": "To manage Docker images",
                "is_correct": false
            }
        ],
        "answer_description": "Docker Compose is used to define and run multi-container Docker applications.",
        "difficulty": "easy",
        "tags": ["Docker", "Docker Compose"]
    },
    {
        "question": "What file is used to define services, networks, and volumes in Docker Compose?",
        "options": [
            {
                "label": "`docker-compose.yml`",
                "is_correct": true
            },
            {
                "label": "`docker-compose.yaml`",
                "is_correct": false
            },
            {
                "label": "`docker-compose.json`",
                "is_correct": false
            }
        ],
        "answer_description": "The `docker-compose.yml` file is used to define services, networks, and volumes in Docker Compose.",
        "difficulty": "easy",
        "tags": ["Docker", "Docker Compose", "configuration"]
    },
    {
        "question": "Which Docker command is used to stop a running container?",
        "options": [
            {
                "label": "`docker stop`",
                "is_correct": true
            },
            {
                "label": "`docker kill`",
                "is_correct": false
            },
            {
                "label": "`docker pause`",
                "is_correct": false
            }
        ],
        "answer_description": "The `docker stop` command is used to stop a running container gracefully.",
        "difficulty": "easy",
        "tags": ["Docker", "container management"]
    },
    {
        "question": "What is the purpose of Docker volumes?",
        "options": [
            {
                "label": "To persist data generated by Docker containers",
                "is_correct": true
            },
            {
                "label": "To increase the security of Docker containers",
                "is_correct": false
            },
            {
                "label": "To limit the resources consumed by Docker containers",
                "is_correct": false
            }
        ],
        "answer_description": "Docker volumes are used to persist data generated by Docker containers, ensuring that data is not lost when containers are stopped or removed.",
        "difficulty": "easy",
        "tags": ["Docker", "container management", "data persistence"]
    },
    {
        "question": "What is Docker Hub?",
        "options": [
            {
                "label": "A cloud-based repository for Docker images",
                "is_correct": true
            },
            {
                "label": "A graphical user interface for managing Docker containers",
                "is_correct": false
            },
            {
                "label": "A tool for monitoring Docker container performance",
                "is_correct": false
            }
        ],
        "answer_description": "Docker Hub is a cloud-based repository for Docker images, providing a centralized location to store and share container images.",
        "difficulty": "easy",
        "tags": ["Docker", "Docker Hub"]
    },
    {
        "question": "What is the main benefit of using Docker containers?",
        "options": [
            {
                "label": "Consistent environments across different platforms",
                "is_correct": true
            },
            {
                "label": "Higher performance compared to traditional virtual machines",
                "is_correct": false
            },
            {
                "label": "Access to a wider range of hardware resources",
                "is_correct": false
            }
        ],
        "answer_description": "One of the main benefits of using Docker containers is the ability to create consistent environments across different platforms, ensuring that applications run the same regardless of the underlying infrastructure.",
        "difficulty": "easy",
        "tags": ["Docker", "containerization", "benefits"]
    },
    {
        "question": "What is the purpose of the `docker pull` command?",
        "options": [
            {
                "label": "To download Docker images from a registry",
                "is_correct": true
            },
            {
                "label": "To push Docker images to a registry",
                "is_correct": false
            },
            {
                "label": "To create a new Docker container",
                "is_correct": false
            }
        ],
        "answer_description": "The `docker pull` command is used to download Docker images from a registry to the local machine.",
        "difficulty": "easy",
        "tags": ["Docker", "image management"]
    },
    {
        "question": "What is the purpose of the `docker push` command?",
        "options": [
            {
                "label": "To upload Docker images to a registry",
                "is_correct": true
            },
            {
                "label": "To pull Docker images from a registry",
                "is_correct": false
            },
            {
                "label": "To build Docker images from a Dockerfile",
                "is_correct": false
            }
        ],
        "answer_description": "The `docker push` command is used to upload Docker images from the local machine to a registry.",
        "difficulty": "easy",
        "tags": ["Docker", "image management"]
    },
    {
        "question": "Which command is used to remove a Docker container?",
        "options": [
            {
                "label": "`docker rm`",
                "is_correct": true
            },
            {
                "label": "`docker remove`",
                "is_correct": false
            },
            {
                "label": "`docker delete`",
                "is_correct": false
            }
        ],
        "answer_description": "The `docker rm` command is used to remove a Docker container.",
        "difficulty": "easy",
        "tags": ["Docker", "container management"]
    },
    {
        "question": "What is the purpose of Docker Swarm?",
        "options": [
            {
                "label": "To orchestrate and manage a cluster of Docker nodes",
                "is_correct": true
            },
            {
                "label": "To build Docker images from source code",
                "is_correct": false
            },
            {
                "label": "To create isolated environments for Docker containers",
                "is_correct": false
            }
        ],
        "answer_description": "Docker Swarm is used to orchestrate and manage a cluster of Docker nodes, allowing for the deployment and scaling of containerized applications across multiple hosts.",
        "difficulty": "easy",
        "tags": ["Docker", "Docker Swarm", "orchestration"]
    },
    {
        "question": "What is the purpose of Docker networking?",
        "options": [
            {
                "label": "To enable communication between Docker containers and external networks",
                "is_correct": true
            },
            {
                "label": "To limit the bandwidth usage of Docker containers",
                "is_correct": false
            },
            {
                "label": "To restrict access to Docker containers based on IP addresses",
                "is_correct": false
            }
        ],
        "answer_description": "Docker networking allows for communication between Docker containers and external networks, enabling applications running in containers to interact with other services and resources.",
        "difficulty": "easy",
        "tags": ["Docker", "networking"]
    },
    {
        "question": "What is the purpose of Docker registries?",
        "options": [
            {
                "label": "To store and distribute Docker images",
                "is_correct": true
            },
            {
                "label": "To manage Docker volumes",
                "is_correct": false
            },
            {
                "label": "To monitor Docker container performance",
                "is_correct": false
            }
        ],
        "answer_description": "Docker registries are used to store and distribute Docker images, allowing users to share and access container images from different locations.",
        "difficulty": "easy",
        "tags": ["Docker", "image management", "registries"]
    },
    {
        "question": "What is Docker?",
        "options": [
            {
                "label": "An open-source platform for building, shipping, and running applications in containers",
                "is_correct": true
            },
            {
                "label": "A programming language",
                "is_correct": false
            },
            {
                "label": "An operating system",
                "is_correct": false
            }
        ],
        "answer_description": "Docker is an open-source platform for building, shipping, and running applications in containers, providing an efficient way to package and deploy software.",
        "difficulty": "easy",
        "tags": ["Docker", "containerization"]
    },
    {
        "question": "What is the purpose of Docker images?",
        "options": [
            {
                "label": "To provide a lightweight, standalone, executable package that includes all the necessary components to run a piece of software",
                "is_correct": true
            },
            {
                "label": "To manage Docker containers",
                "is_correct": false
            },
            {
                "label": "To control Docker networking",
                "is_correct": false
            }
        ],
        "answer_description": "Docker images are used to provide a lightweight, standalone, executable package that includes all the necessary components to run a piece of software, including the code, runtime, libraries, and dependencies.",
        "difficulty": "easy",
        "tags": ["Docker", "image management"]
    },
    {
        "question": "What is Docker Compose?",
        "options": [
            {
                "label": "A tool for defining and running multi-container Docker applications",
                "is_correct": true
            },
            {
                "label": "A graphical user interface for managing Docker containers",
                "is_correct": false
            },
            {
                "label": "A tool for monitoring Docker container performance",
                "is_correct": false
            }
        ],
        "answer_description": "Docker Compose is a tool for defining and running multi-container Docker applications, allowing developers to define the services, networks, and volumes for an application in a single YAML file.",
        "difficulty": "easy",
        "tags": ["Docker", "Docker Compose"]
    },
    {
        "question": "What is the purpose of Docker Swarm?",
        "options": [
            {
                "label": "To orchestrate and manage a cluster of Docker nodes",
                "is_correct": true
            },
            {
                "label": "To build Docker images from source code",
                "is_correct": false
            },
            {
                "label": "To create isolated environments for Docker containers",
                "is_correct": false
            }
        ],
        "answer_description": "Docker Swarm is used to orchestrate and manage a cluster of Docker nodes, allowing for the deployment and scaling of containerized applications across multiple hosts.",
        "difficulty": "easy",
        "tags": ["Docker", "Docker Swarm", "orchestration"]
    },
    {
        "question": "What is the purpose of Docker networking?",
        "options": [
            {
                "label": "To enable communication between Docker containers and external networks",
                "is_correct": true
            },
            {
                "label": "To limit the bandwidth usage of Docker containers",
                "is_correct": false
            },
            {
                "label": "To restrict access to Docker containers based on IP addresses",
                "is_correct": false
            }
        ],
        "answer_description": "Docker networking allows for communication between Docker containers and external networks, enabling applications running in containers to interact with other services and resources.",
        "difficulty": "easy",
        "tags": ["Docker", "networking"]
    },
    {
        "question": "What is the purpose of Docker registries?",
        "options": [
            {
                "label": "To store and distribute Docker images",
                "is_correct": true
            },
            {
                "label": "To manage Docker volumes",
                "is_correct": false
            },
            {
                "label": "To monitor Docker container performance",
                "is_correct": false
            }
        ],
        "answer_description": "Docker registries are used to store and distribute Docker images, allowing users to share and access container images from different locations.",
        "difficulty": "easy",
        "tags": ["Docker", "image management", "registries"]
    },
    {
        "question": "What is Docker?",
        "options": [
            {
                "label": "An open-source platform for building, shipping, and running applications in containers",
                "is_correct": true
            },
            {
                "label": "A programming language",
                "is_correct": false
            },
            {
                "label": "An operating system",
                "is_correct": false
            }
        ],
        "answer_description": "Docker is an open-source platform for building, shipping, and running applications in containers, providing an efficient way to package and deploy software.",
        "difficulty": "easy",
        "tags": ["Docker", "containerization"]
    },
    {
        "question": "What is the purpose of Docker images?",
        "options": [
            {
                "label": "To provide a lightweight, standalone, executable package that includes all the necessary components to run a piece of software",
                "is_correct": true
            },
            {
                "label": "To manage Docker containers",
                "is_correct": false
            },
            {
                "label": "To control Docker networking",
                "is_correct": false
            }
        ],
        "answer_description": "Docker images are used to provide a lightweight, standalone, executable package that includes all the necessary components to run a piece of software, including the code, runtime, libraries, and dependencies.",
        "difficulty": "easy",
        "tags": ["Docker", "image management"]
    },
    {
        "question": "What is Docker Compose?",
        "options": [
            {
                "label": "A tool for defining and running multi-container Docker applications",
                "is_correct": true
            },
            {
                "label": "A graphical user interface for managing Docker containers",
                "is_correct": false
            },
            {
                "label": "A tool for monitoring Docker container performance",
                "is_correct": false
            }
        ],
        "answer_description": "Docker Compose is a tool for defining and running multi-container Docker applications, allowing developers to define the services, networks, and volumes for an application in a single YAML file.",
        "difficulty": "easy",
        "tags": ["Docker", "Docker Compose"]
    },
    {
        "question": "What is the purpose of Docker Swarm?",
        "options": [
            {
                "label": "To orchestrate and manage a cluster of Docker nodes",
                "is_correct": true
            },
            {
                "label": "To build Docker images from source code",
                "is_correct": false
            },
            {
                "label": "To create isolated environments for Docker containers",
                "is_correct": false
            }
        ],
        "answer_description": "Docker Swarm is used to orchestrate and manage a cluster of Docker nodes, allowing for the deployment and scaling of containerized applications across multiple hosts.",
        "difficulty": "easy",
        "tags": ["Docker", "Docker Swarm", "orchestration"]
    },
    {
        "question": "What is the purpose of Docker networking?",
        "options": [
            {
                "label": "To enable communication between Docker containers and external networks",
                "is_correct": true
            },
            {
                "label": "To limit the bandwidth usage of Docker containers",
                "is_correct": false
            },
            {
                "label": "To restrict access to Docker containers based on IP addresses",
                "is_correct": false
            }
        ],
        "answer_description": "Docker networking allows for communication between Docker containers and external networks, enabling applications running in containers to interact with other services and resources.",
        "difficulty": "easy",
        "tags": ["Docker", "networking"]
    },
    {
        "question": "What is the purpose of Docker registries?",
        "options": [
            {
                "label": "To store and distribute Docker images",
                "is_correct": true
            },
            {
                "label": "To manage Docker volumes",
                "is_correct": false
            },
            {
                "label": "To monitor Docker container performance",
                "is_correct": false
            }
        ],
        "answer_description": "Docker registries are used to store and distribute Docker images, allowing users to share and access container images from different locations.",
        "difficulty": "easy",
        "tags": ["Docker", "image management", "registries"]
    },
    {
        "question": "What is Docker?",
        "options": [
            {
                "label": "An open-source platform for building, shipping, and running applications in containers",
                "is_correct": true
            },
            {
                "label": "A programming language",
                "is_correct": false
            },
            {
                "label": "An operating system",
                "is_correct": false
            }
        ],
        "answer_description": "Docker is an open-source platform for building, shipping, and running applications in containers, providing an efficient way to package and deploy software.",
        "difficulty": "easy",
        "tags": ["Docker", "containerization"]
    },
    {
        "question": "What is the purpose of Docker images?",
        "options": [
            {
                "label": "To provide a lightweight, standalone, executable package that includes all the necessary components to run a piece of software",
                "is_correct": true
            },
            {
                "label": "To manage Docker containers",
                "is_correct": false
            },
            {
                "label": "To control Docker networking",
                "is_correct": false
            }
        ],
        "answer_description": "Docker images are used to provide a lightweight, standalone, executable package that includes all the necessary components to run a piece of software, including the code, runtime, libraries, and dependencies.",
        "difficulty": "easy",
        "tags": ["Docker", "image management"]
    },
    {
        "question": "What is Dockerfile used for?",
        "options": [
            {
                "label": "Defining the steps to create a Docker container image",
                "is_correct": true
            },
            {
                "label": "Running Docker containers",
                "is_correct": false
            },
            {
                "label": "Managing Docker networks",
                "is_correct": false
            }
        ],
        "answer_description": "A Dockerfile is used to define the steps and instructions needed to create a Docker container image.",
        "difficulty": "medium",
        "tags": ["Docker", "Dockerfile", "containerization"]
    },
    {
        "question": "Which Docker command is used to build an image from a Dockerfile?",
        "options": [
            {
                "label": "`docker build`",
                "is_correct": true
            },
            {
                "label": "`docker create`",
                "is_correct": false
            },
            {
                "label": "`docker run`",
                "is_correct": false
            }
        ],
        "answer_description": "The `docker build` command is used to build an image from a Dockerfile.",
        "difficulty": "medium",
        "tags": ["Docker", "Dockerfile", "image management"]
    },
    {
        "question": "What is the purpose of Docker volumes?",
        "options": [
            {
                "label": "To persist data generated by Docker containers",
                "is_correct": true
            },
            {
                "label": "To limit the resources consumed by Docker containers",
                "is_correct": false
            },
            {
                "label": "To manage Docker networks",
                "is_correct": false
            }
        ],
        "answer_description": "Docker volumes are used to persist data generated by Docker containers, ensuring that data is not lost when containers are stopped or removed.",
        "difficulty": "medium",
        "tags": ["Docker", "container management", "data persistence"]
    },
    {
        "question": "What is Docker Compose?",
        "options": [
            {
                "label": "A tool for defining and running multi-container Docker applications",
                "is_correct": true
            },
            {
                "label": "A graphical user interface for managing Docker containers",
                "is_correct": false
            },
            {
                "label": "A tool for monitoring Docker container performance",
                "is_correct": false
            }
        ],
        "answer_description": "Docker Compose is a tool for defining and running multi-container Docker applications, allowing developers to define the services, networks, and volumes for an application in a single YAML file.",
        "difficulty": "medium",
        "tags": ["Docker", "Docker Compose", "containerization"]
    },
    {
        "question": "What is Docker Swarm?",
        "options": [
            {
                "label": "A tool for orchestrating and managing a cluster of Docker nodes",
                "is_correct": true
            },
            {
                "label": "A tool for building Docker images",
                "is_correct": false
            },
            {
                "label": "A tool for managing Docker volumes",
                "is_correct": false
            }
        ],
        "answer_description": "Docker Swarm is a tool for orchestrating and managing a cluster of Docker nodes, allowing for the deployment and scaling of containerized applications across multiple hosts.",
        "difficulty": "medium",
        "tags": ["Docker", "Docker Swarm", "orchestration"]
    },
    {
        "question": "How can you pass environment variables to a Docker container?",
        "options": [
            {
                "label": "Using the `-e` or `--env` flag with `docker run`",
                "is_correct": true
            },
            {
                "label": "Editing the Dockerfile",
                "is_correct": false
            },
            {
                "label": "Using the `--env-file` flag with `docker run`",
                "is_correct": false
            }
        ],
        "answer_description": "Environment variables can be passed to a Docker container using the `-e` or `--env` flag with the `docker run` command.",
        "difficulty": "medium",
        "tags": ["Docker", "container management", "environment variables"]
    },
    {
        "question": "What is Docker Registry?",
        "options": [
            {
                "label": "A storage for Docker images",
                "is_correct": true
            },
            {
                "label": "A container management tool",
                "is_correct": false
            },
            {
                "label": "A networking tool",
                "is_correct": false
            }
        ],
        "answer_description": "Docker Registry is a storage for Docker images. It is used to store and distribute Docker images.",
        "difficulty": "medium",
        "tags": ["Docker", "Docker Registry", "image management"]
    },
    {
        "question": "What is Docker Hub?",
        "options": [
            {
                "label": "A cloud-based repository for Docker images",
                "is_correct": true
            },
            {
                "label": "A tool for building Docker images",
                "is_correct": false
            },
            {
                "label": "A container orchestration tool",
                "is_correct": false
            }
        ],
        "answer_description": "Docker Hub is a cloud-based repository for Docker images. It provides a centralized location to store and share container images.",
        "difficulty": "medium",
        "tags": ["Docker", "Docker Hub", "image management"]
    },
    {
        "question": "What is the purpose of Docker networking?",
        "options": [
            {
                "label": "To enable communication between Docker containers and external networks",
                "is_correct": true
            },
            {
                "label": "To limit the bandwidth usage of Docker containers",
                "is_correct": false
            },
            {
                "label": "To restrict access to Docker containers based on IP addresses",
                "is_correct": false
            }
        ],
        "answer_description": "Docker networking allows for communication between Docker containers and external networks, enabling applications running in containers to interact with other services and resources.",
        "difficulty": "medium",
        "tags": ["Docker", "networking"]
    },
    {
        "question": "What is Docker Swarm?",
        "options": [
            {
                "label": "A tool for orchestrating and managing a cluster of Docker nodes",
                "is_correct": true
            },
            {
                "label": "A tool for building Docker images",
                "is_correct": false
            },
            {
                "label": "A tool for managing Docker volumes",
                "is_correct": false
            }
        ],
        "answer_description": "Docker Swarm is a tool for orchestrating and managing a cluster of Docker nodes, allowing for the deployment and scaling of containerized applications across multiple hosts.",
        "difficulty": "medium",
        "tags": ["Docker", "Docker Swarm", "orchestration"]
    },
    {
        "question": "What is the purpose of Docker Registry?",
        "options": [
            {
                "label": "A storage for Docker images",
                "is_correct": true
            },
            {
                "label": "A container management tool",
                "is_correct": false
            },
            {
                "label": "A networking tool",
                "is_correct": false
            }
        ],
        "answer_description": "Docker Registry is a storage for Docker images. It is used to store and distribute Docker images.",
        "difficulty": "medium",
        "tags": ["Docker", "Docker Registry", "image management"]
    },
    {
        "question": "What is Docker Hub?",
        "options": [
            {
                "label": "A cloud-based repository for Docker images",
                "is_correct": true
            },
            {
                "label": "A tool for building Docker images",
                "is_correct": false
            },
            {
                "label": "A container orchestration tool",
                "is_correct": false
            }
        ],
        "answer_description": "Docker Hub is a cloud-based repository for Docker images. It provides a centralized location to store and share container images.",
        "difficulty": "medium",
        "tags": ["Docker", "Docker Hub", "image management"]
    },
    {
        "question": "What is the purpose of Docker networking?",
        "options": [
            {
                "label": "To enable communication between Docker containers and external networks",
                "is_correct": true
            },
            {
                "label": "To limit the bandwidth usage of Docker containers",
                "is_correct": false
            },
            {
                "label": "To restrict access to Docker containers based on IP addresses",
                "is_correct": false
            }
        ],
        "answer_description": "Docker networking allows for communication between Docker containers and external networks, enabling applications running in containers to interact with other services and resources.",
        "difficulty": "medium",
        "tags": ["Docker", "networking"]
    },
    {
        "question": "What is Docker Swarm?",
        "options": [
            {
                "label": "A tool for orchestrating and managing a cluster of Docker nodes",
                "is_correct": true
            },
            {
                "label": "A tool for building Docker images",
                "is_correct": false
            },
            {
                "label": "A tool for managing Docker volumes",
                "is_correct": false
            }
        ],
        "answer_description": "Docker Swarm is a tool for orchestrating and managing a cluster of Docker nodes, allowing for the deployment and scaling of containerized applications across multiple hosts.",
        "difficulty": "medium",
        "tags": ["Docker", "Docker Swarm", "orchestration"]
    },
    {
        "question": "What is the purpose of Docker Registry?",
        "options": [
            {
                "label": "A storage for Docker images",
                "is_correct": true
            },
            {
                "label": "A container management tool",
                "is_correct": false
            },
            {
                "label": "A networking tool",
                "is_correct": false
            }
        ],
        "answer_description": "Docker Registry is a storage for Docker images. It is used to store and distribute Docker images.",
        "difficulty": "medium",
        "tags": ["Docker", "Docker Registry", "image management"]
    },
    {
        "question": "What is Docker Hub?",
        "options": [
            {
                "label": "A cloud-based repository for Docker images",
                "is_correct": true
            },
            {
                "label": "A tool for building Docker images",
                "is_correct": false
            },
            {
                "label": "A container orchestration tool",
                "is_correct": false
            }
        ],
        "answer_description": "Docker Hub is a cloud-based repository for Docker images. It provides a centralized location to store and share container images.",
        "difficulty": "medium",
        "tags": ["Docker", "Docker Hub", "image management"]
    },
    {
        "question": "What is the purpose of Docker networking?",
        "options": [
            {
                "label": "To enable communication between Docker containers and external networks",
                "is_correct": true
            },
            {
                "label": "To limit the bandwidth usage of Docker containers",
                "is_correct": false
            },
            {
                "label": "To restrict access to Docker containers based on IP addresses",
                "is_correct": false
            }
        ],
        "answer_description": "Docker networking allows for communication between Docker containers and external networks, enabling applications running in containers to interact with other services and resources.",
        "difficulty": "medium",
        "tags": ["Docker", "networking"]
    },
    {
        "question": "What is Docker Swarm?",
        "options": [
            {
                "label": "A tool for orchestrating and managing a cluster of Docker nodes",
                "is_correct": true
            },
            {
                "label": "A tool for building Docker images",
                "is_correct": false
            },
            {
                "label": "A tool for managing Docker volumes",
                "is_correct": false
            }
        ],
        "answer_description": "Docker Swarm is a tool for orchestrating and managing a cluster of Docker nodes, allowing for the deployment and scaling of containerized applications across multiple hosts.",
        "difficulty": "medium",
        "tags": ["Docker", "Docker Swarm", "orchestration"]
    },
    {
        "question": "What is the purpose of Docker Registry?",
        "options": [
            {
                "label": "A storage for Docker images",
                "is_correct": true
            },
            {
                "label": "A container management tool",
                "is_correct": false
            },
            {
                "label": "A networking tool",
                "is_correct": false
            }
        ],
        "answer_description": "Docker Registry is a storage for Docker images. It is used to store and distribute Docker images.",
        "difficulty": "medium",
        "tags": ["Docker", "Docker Registry", "image management"]
    },
    {
        "question": "What is Docker Hub?",
        "options": [
            {
                "label": "A cloud-based repository for Docker images",
                "is_correct": true
            },
            {
                "label": "A tool for building Docker images",
                "is_correct": false
            },
            {
                "label": "A container orchestration tool",
                "is_correct": false
            }
        ],
        "answer_description": "Docker Hub is a cloud-based repository for Docker images. It provides a centralized location to store and share container images.",
        "difficulty": "medium",
        "tags": ["Docker", "Docker Hub", "image management"]
    },
    {
        "question": "What is the purpose of Docker networking?",
        "options": [
            {
                "label": "To enable communication between Docker containers and external networks",
                "is_correct": true
            },
            {
                "label": "To limit the bandwidth usage of Docker containers",
                "is_correct": false
            },
            {
                "label": "To restrict access to Docker containers based on IP addresses",
                "is_correct": false
            }
        ],
        "answer_description": "Docker networking allows for communication between Docker containers and external networks, enabling applications running in containers to interact with other services and resources.",
        "difficulty": "medium",
        "tags": ["Docker", "networking"]
    },
    {
        "question": "What is Docker Swarm?",
        "options": [
            {
                "label": "A tool for orchestrating and managing a cluster of Docker nodes",
                "is_correct": true
            },
            {
                "label": "A tool for building Docker images",
                "is_correct": false
            },
            {
                "label": "A tool for managing Docker volumes",
                "is_correct": false
            }
        ],
        "answer_description": "Docker Swarm is a tool for orchestrating and managing a cluster of Docker nodes, allowing for the deployment and scaling of containerized applications across multiple hosts.",
        "difficulty": "medium",
        "tags": ["Docker", "Docker Swarm", "orchestration"]
    },
    {
        "question": "What is the purpose of Docker Registry?",
        "options": [
            {
                "label": "A storage for Docker images",
                "is_correct": true
            },
            {
                "label": "A container management tool",
                "is_correct": false
            },
            {
                "label": "A networking tool",
                "is_correct": false
            }
        ],
        "answer_description": "Docker Registry is a storage for Docker images. It is used to store and distribute Docker images.",
        "difficulty": "medium",
        "tags": ["Docker", "Docker Registry", "image management"]
    },
    {
        "question": "What is Docker Hub?",
        "options": [
            {
                "label": "A cloud-based repository for Docker images",
                "is_correct": true
            },
            {
                "label": "A tool for building Docker images",
                "is_correct": false
            },
            {
                "label": "A container orchestration tool",
                "is_correct": false
            }
        ],
        "answer_description": "Docker Hub is a cloud-based repository for Docker images. It provides a centralized location to store and share container images.",
        "difficulty": "medium",
        "tags": ["Docker", "Docker Hub", "image management"]
    },
    {
        "question": "What is the purpose of Docker networking?",
        "options": [
            {
                "label": "To enable communication between Docker containers and external networks",
                "is_correct": true
            },
            {
                "label": "To limit the bandwidth usage of Docker containers",
                "is_correct": false
            },
            {
                "label": "To restrict access to Docker containers based on IP addresses",
                "is_correct": false
            }
        ],
        "answer_description": "Docker networking allows for communication between Docker containers and external networks, enabling applications running in containers to interact with other services and resources.",
        "difficulty": "medium",
        "tags": ["Docker", "networking"]
    },
    {
        "question": "What is Docker Swarm?",
        "options": [
            {
                "label": "A tool for orchestrating and managing a cluster of Docker nodes",
                "is_correct": true
            },
            {
                "label": "A tool for building Docker images",
                "is_correct": false
            },
            {
                "label": "A tool for managing Docker volumes",
                "is_correct": false
            }
        ],
        "answer_description": "Docker Swarm is a tool for orchestrating and managing a cluster of Docker nodes, allowing for the deployment and scaling of containerized applications across multiple hosts.",
        "difficulty": "medium",
        "tags": ["Docker", "Docker Swarm", "orchestration"]
    },
    {
        "question": "What is the purpose of Docker Registry?",
        "options": [
            {
                "label": "A storage for Docker images",
                "is_correct": true
            },
            {
                "label": "A container management tool",
                "is_correct": false
            },
            {
                "label": "A networking tool",
                "is_correct": false
            }
        ],
        "answer_description": "Docker Registry is a storage for Docker images. It is used to store and distribute Docker images.",
        "difficulty": "medium",
        "tags": ["Docker", "Docker Registry", "image management"]
    },
    {
        "question": "What is Docker Hub?",
        "options": [
            {
                "label": "A cloud-based repository for Docker images",
                "is_correct": true
            },
            {
                "label": "A tool for building Docker images",
                "is_correct": false
            },
            {
                "label": "A container orchestration tool",
                "is_correct": false
            }
        ],
        "answer_description": "Docker Hub is a cloud-based repository for Docker images. It provides a centralized location to store and share container images.",
        "difficulty": "medium",
        "tags": ["Docker", "Docker Hub", "image management"]
    },
    {
        "question": "What is the purpose of Docker networking?",
        "options": [
            {
                "label": "To enable communication between Docker containers and external networks",
                "is_correct": true
            },
            {
                "label": "To limit the bandwidth usage of Docker containers",
                "is_correct": false
            },
            {
                "label": "To restrict access to Docker containers based on IP addresses",
                "is_correct": false
            }
        ],
        "answer_description": "Docker networking allows for communication between Docker containers and external networks, enabling applications running in containers to interact with other services and resources.",
        "difficulty": "medium",
        "tags": ["Docker", "networking"]
    },
    {
        "question": "What is Docker Swarm?",
        "options": [
            {
                "label": "A tool for orchestrating and managing a cluster of Docker nodes",
                "is_correct": true
            },
            {
                "label": "A tool for building Docker images",
                "is_correct": false
            },
            {
                "label": "A tool for managing Docker volumes",
                "is_correct": false
            }
        ],
        "answer_description": "Docker Swarm is a tool for orchestrating and managing a cluster of Docker nodes, allowing for the deployment and scaling of containerized applications across multiple hosts.",
        "difficulty": "medium",
        "tags": ["Docker", "Docker Swarm", "orchestration"]
    },
    {
        "question": "What is the purpose of Docker Registry?",
        "options": [
            {
                "label": "A storage for Docker images",
                "is_correct": true
            },
            {
                "label": "A container management tool",
                "is_correct": false
            },
            {
                "label": "A networking tool",
                "is_correct": false
            }
        ],
        "answer_description": "Docker Registry is a storage for Docker images. It is used to store and distribute Docker images.",
        "difficulty": "medium",
        "tags": ["Docker", "Docker Registry", "image management"]
    },
    {
        "question": "What is Docker Hub?",
        "options": [
            {
                "label": "A cloud-based repository for Docker images",
                "is_correct": true
            },
            {
                "label": "A tool for building Docker images",
                "is_correct": false
            },
            {
                "label": "A container orchestration tool",
                "is_correct": false
            }
        ],
        "answer_description": "Docker Hub is a cloud-based repository for Docker images. It provides a centralized location to store and share container images.",
        "difficulty": "medium",
        "tags": ["Docker", "Docker Hub", "image management"]
    },
    {
        "question": "What is the purpose of Docker networking?",
        "options": [
            {
                "label": "To enable communication between Docker containers and external networks",
                "is_correct": true
            },
            {
                "label": "To limit the bandwidth usage of Docker containers",
                "is_correct": false
            },
            {
                "label": "To restrict access to Docker containers based on IP addresses",
                "is_correct": false
            }
        ],
        "answer_description": "Docker networking allows for communication between Docker containers and external networks, enabling applications running in containers to interact with other services and resources.",
        "difficulty": "medium",
        "tags": ["Docker", "networking"]
    },
    {
        "question": "What is Docker Swarm?",
        "options": [
            {
                "label": "A tool for orchestrating and managing a cluster of Docker nodes",
                "is_correct": true
            },
            {
                "label": "A tool for building Docker images",
                "is_correct": false
            },
            {
                "label": "A tool for managing Docker volumes",
                "is_correct": false
            }
        ],
        "answer_description": "Docker Swarm is a tool for orchestrating and managing a cluster of Docker nodes, allowing for the deployment and scaling of containerized applications across multiple hosts.",
        "difficulty": "medium",
        "tags": ["Docker", "Docker Swarm", "orchestration"]
    },
    {
        "question": "What is the purpose of Docker Registry?",
        "options": [
            {
                "label": "A storage for Docker images",
                "is_correct": true
            },
            {
                "label": "A container management tool",
                "is_correct": false
            },
            {
                "label": "A networking tool",
                "is_correct": false
            }
        ],
        "answer_description": "Docker Registry is a storage for Docker images. It is used to store and distribute Docker images.",
        "difficulty": "medium",
        "tags": ["Docker", "Docker Registry", "image management"]
    },
    {
        "question": "What is Docker Hub?",
        "options": [
            {
                "label": "A cloud-based repository for Docker images",
                "is_correct": true
            },
            {
                "label": "A tool for building Docker images",
                "is_correct": false
            },
            {
                "label": "A container orchestration tool",
                "is_correct": false
            }
        ],
        "answer_description": "Docker Hub is a cloud-based repository for Docker images. It provides a centralized location to store and share container images.",
        "difficulty": "medium",
        "tags": ["Docker", "Docker Hub", "image management"]
    },
    {
        "question": "What is the difference between a Docker container and a Docker image?",
        "options": [
            {
                "label": "An image is a template for containers, and a container is a running instance of an image",
                "is_correct": true
            },
            {
                "label": "An image is a running instance of a container, and a container is a template for images",
                "is_correct": false
            },
            {
                "label": "A container stores data, while an image does not",
                "is_correct": false
            }
        ],
        "answer_description": "An image is a template for containers, while a container is a running instance of an image.",
        "difficulty": "hard",
        "tags": ["Docker", "containerization", "image management"]
    },
    {
        "question": "How can you achieve high availability in Docker Swarm?",
        "options": [
            {
                "label": "By running multiple manager nodes in Docker Swarm",
                "is_correct": true
            },
            {
                "label": "By using Docker volumes",
                "is_correct": false
            },
            {
                "label": "By configuring container health checks",
                "is_correct": false
            }
        ],
        "answer_description": "High availability in Docker Swarm can be achieved by running multiple manager nodes, ensuring redundancy and fault tolerance.",
        "difficulty": "hard",
        "tags": ["Docker", "Docker Swarm", "orchestration", "high availability"]
    },
    {
        "question": "What is Docker overlay network?",
        "options": [
            {
                "label": "A network that spans across multiple Docker hosts",
                "is_correct": true
            },
            {
                "label": "A network for inter-container communication on a single host",
                "is_correct": false
            },
            {
                "label": "A network for communication between Docker containers and external networks",
                "is_correct": false
            }
        ],
        "answer_description": "Docker overlay network is a network that spans across multiple Docker hosts, enabling communication between containers running on different hosts.",
        "difficulty": "hard",
        "tags": ["Docker", "networking", "overlay network"]
    },
    {
        "question": "What is Docker security scanning?",
        "options": [
            {
                "label": "A feature that scans Docker images for vulnerabilities",
                "is_correct": true
            },
            {
                "label": "A feature that scans Docker containers for malware",
                "is_correct": false
            },
            {
                "label": "A feature that encrypts data in Docker volumes",
                "is_correct": false
            }
        ],
        "answer_description": "Docker security scanning is a feature that scans Docker images for vulnerabilities, helping to identify and mitigate security risks.",
        "difficulty": "hard",
        "tags": ["Docker", "security", "vulnerability scanning"]
    },
    {
        "question": "What is Docker content trust?",
        "options": [
            {
                "label": "A feature that ensures the authenticity and integrity of Docker images",
                "is_correct": true
            },
            {
                "label": "A feature that encrypts data in Docker volumes",
                "is_correct": false
            },
            {
                "label": "A feature that restricts access to Docker registries",
                "is_correct": false
            }
        ],
        "answer_description": "Docker content trust is a feature that ensures the authenticity and integrity of Docker images by using digital signatures.",
        "difficulty": "hard",
        "tags": ["Docker", "security", "content trust"]
    },
    {
        "question": "What is Docker Swarm mode?",
        "options": [
            {
                "label": "An orchestration mode for managing a cluster of Docker nodes",
                "is_correct": true
            },
            {
                "label": "A mode for running Docker containers in isolated environments",
                "is_correct": false
            },
            {
                "label": "A mode for building Docker images",
                "is_correct": false
            }
        ],
        "answer_description": "Docker Swarm mode is an orchestration mode for managing a cluster of Docker nodes, providing features for deployment, scaling, and high availability.",
        "difficulty": "hard",
        "tags": ["Docker", "Docker Swarm", "orchestration"]
    },
    {
        "question": "What is Docker secret?",
        "options": [
            {
                "label": "A mechanism for securely storing sensitive data in Docker Swarm",
                "is_correct": true
            },
            {
                "label": "A feature that encrypts communication between Docker containers",
                "is_correct": false
            },
            {
                "label": "A feature for managing Docker configurations",
                "is_correct": false
            }
        ],
        "answer_description": "Docker secret is a mechanism for securely storing sensitive data, such as passwords and API keys, in Docker Swarm.",
        "difficulty": "hard",
        "tags": ["Docker", "Docker Swarm", "security", "secrets management"]
    },
    {
        "question": "What is Docker plugin?",
        "options": [
            {
                "label": "A tool for extending Docker functionality with additional features",
                "is_correct": true
            },
            {
                "label": "A tool for managing Docker images",
                "is_correct": false
            },
            {
                "label": "A tool for building Docker containers",
                "is_correct": false
            }
        ],
        "answer_description": "A Docker plugin is a tool for extending Docker functionality with additional features, such as volume drivers and network drivers.",
        "difficulty": "hard",
        "tags": ["Docker", "plugin", "extensibility"]
    },
    {
        "question": "What is Docker service?",
        "options": [
            {
                "label": "A definition of tasks to be executed in Docker Swarm",
                "is_correct": true
            },
            {
                "label": "A tool for managing Docker images",
                "is_correct": false
            },
            {
                "label": "A tool for deploying Docker containers",
                "is_correct": false
            }
        ],
        "answer_description": "A Docker service is a definition of tasks to be executed in Docker Swarm, specifying the desired state of the service and how many replicas should be running.",
        "difficulty": "hard",
        "tags": ["Docker", "Docker Swarm", "orchestration"]
    },
    {
        "question": "Explain the concept of Docker overlay network and its use cases.",
        "options": [
            {
                "label": "To enable communication between containers running on different hosts in a swarm",
                "is_correct": true
            },
            {
                "label": "To limit the bandwidth usage of Docker containers",
                "is_correct": false
            },
            {
                "label": "To isolate containers from each other",
                "is_correct": false
            }
        ],
        "answer_description": "Docker overlay network is used to enable communication between containers running on different hosts in a swarm, providing a way for distributed applications to communicate seamlessly.",
        "difficulty": "hard",
        "tags": ["Docker", "overlay network", "Docker Swarm", "networking"]
    },
    {
        "question": "What is Docker content trust, and how does it enhance container security?",
        "options": [
            {
                "label": "A feature that ensures the integrity and authenticity of Docker images",
                "is_correct": true
            },
            {
                "label": "A tool for monitoring Docker container performance",
                "is_correct": false
            },
            {
                "label": "A method for securing Docker networks",
                "is_correct": false
            }
        ],
        "answer_description": "Docker content trust is a feature that ensures the integrity and authenticity of Docker images, enhancing container security by preventing the use of unauthorized or tampered images.",
        "difficulty": "hard",
        "tags": ["Docker", "container security"]
    },
    {
        "question": "Explain the concept of Docker multi-stage builds and their advantages.",
        "options": [
            {
                "label": "A feature that enables building efficient and small Docker images by using multiple build stages",
                "is_correct": true
            },
            {
                "label": "A tool for managing Docker volumes",
                "is_correct": false
            },
            {
                "label": "A method for optimizing Docker networking",
                "is_correct": false
            }
        ],
        "answer_description": "Docker multi-stage builds enable building efficient and small Docker images by using multiple build stages, allowing developers to include only the necessary artifacts in the final image.",
        "difficulty": "hard",
        "tags": ["Docker", "Dockerfile", "image optimization"]
    },
    {
        "question": "How does Docker handle security vulnerabilities in containerized applications?",
        "options": [
            {
                "label": "By providing security scanning for Docker images through tools like Docker Security Scanning",
                "is_correct": true
            },
            {
                "label": "By isolating containers using advanced networking techniques",
                "is_correct": false
            },
            {
                "label": "By automatically updating all Docker images to the latest version",
                "is_correct": false
            }
        ],
        "answer_description": "Docker handles security vulnerabilities by providing security scanning for Docker images through tools like Docker Security Scanning, allowing users to identify and address potential security issues.",
        "difficulty": "hard",
        "tags": ["Docker", "container security", "vulnerabilities"]
    },
    {
        "question": "Explain the concept of Docker secrets and their use in secure containerized applications.",
        "options": [
            {
                "label": "A mechanism for securely handling sensitive information, such as passwords or API keys, within Docker services",
                "is_correct": true
            },
            {
                "label": "A tool for managing Docker volumes",
                "is_correct": false
            },
            {
                "label": "A method for optimizing Docker networking",
                "is_correct": false
            }
        ],
        "answer_description": "Docker secrets provide a mechanism for securely handling sensitive information, such as passwords or API keys, within Docker services, enhancing the security of containerized applications.",
        "difficulty": "hard",
        "tags": ["Docker", "container security", "secrets"]
    },
    {
        "question": "Explain the purpose and benefits of Docker Health Checks in containerized applications.",
        "options": [
            {
                "label": "To monitor and automatically manage the health of Docker containers",
                "is_correct": true
            },
            {
                "label": "To limit the bandwidth usage of Docker containers",
                "is_correct": false
            },
            {
                "label": "To isolate containers from each other",
                "is_correct": false
            }
        ],
        "answer_description": "Docker Health Checks are used to monitor and automatically manage the health of Docker containers, improving the reliability and availability of containerized applications.",
        "difficulty": "hard",
        "tags": ["Docker", "container management", "health checks"]
    },
    {
        "question": "Explain the concept of Docker rootless mode and its advantages.",
        "options": [
            {
                "label": "To run Docker without requiring root privileges, enhancing security and isolation",
                "is_correct": true
            },
            {
                "label": "To optimize Docker container networking",
                "is_correct": false
            },
            {
                "label": "To manage Docker volumes in a more efficient way",
                "is_correct": false
            }
        ],
        "answer_description": "Docker rootless mode allows running Docker without requiring root privileges, enhancing security and isolation by reducing the attack surface of the containerized applications.",
        "difficulty": "hard",
        "tags": ["Docker", "security", "rootless mode"]
    },
    {
        "question": "Explain the concept of Docker BuildKit and its advantages in building Docker images.",
        "options": [
            {
                "label": "A toolkit for building Docker images with improved performance and additional features",
                "is_correct": true
            },
            {
                "label": "A tool for monitoring Docker container performance",
                "is_correct": false
            },
            {
                "label": "A method for optimizing Docker networking",
                "is_correct": false
            }
        ],
        "answer_description": "Docker BuildKit is a toolkit for building Docker images with improved performance and additional features, providing better control and flexibility in the image building process.",
        "difficulty": "hard",
        "tags": ["Docker", "BuildKit", "image building"]
    },
    {
        "question": "Explain the concept of Docker user namespaces and their role in container security.",
        "options": [
            {
                "label": "To provide additional layer of security by mapping container user IDs to host user IDs",
                "is_correct": true
            },
            {
                "label": "To limit the bandwidth usage of Docker containers",
                "is_correct": false
            },
            {
                "label": "To optimize Docker container networking",
                "is_correct": false
            }
        ],
        "answer_description": "Docker user namespaces provide an additional layer of security by mapping container user IDs to host user IDs, reducing the risk of privilege escalation attacks in containerized environments.",
        "difficulty": "hard",
        "tags": ["Docker", "container security", "user namespaces"]
    },

]
export default questions