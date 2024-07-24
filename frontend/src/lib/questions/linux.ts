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
        "question": "What command is used to list files and directories in a directory in Linux?",
        "options": [
            {
                "label": "`ls`",
                "is_correct": true
            },
            {
                "label": "`dir`",
                "is_correct": false
            },
            {
                "label": "`list`",
                "is_correct": false
            }
        ],
        "answer_description": "`ls` is the correct command. It stands for 'list' and is used to list files and directories in a directory.",
        "difficulty": "easy",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "Which command is used to change permissions of a file or directory in Linux?",
        "options": [
            {
                "label": "`chmod`",
                "is_correct": true
            },
            {
                "label": "`chown`",
                "is_correct": false
            },
            {
                "label": "`perm`",
                "is_correct": false
            }
        ],
        "answer_description": "`chmod` is the correct command. It stands for 'change mode' and is used to change permissions of a file or directory.",
        "difficulty": "easy",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "Which command is used to create a new directory in Linux?",
        "options": [
            {
                "label": "`mkdir`",
                "is_correct": true
            },
            {
                "label": "`newdir`",
                "is_correct": false
            },
            {
                "label": "`mkd`",
                "is_correct": false
            }
        ],
        "answer_description": "`mkdir` is the correct command. It stands for 'make directory' and is used to create a new directory in Linux.",
        "difficulty": "easy",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "Which command is used to display the current directory in Linux?",
        "options": [
            {
                "label": "`pwd`",
                "is_correct": true
            },
            {
                "label": "`dir`",
                "is_correct": false
            },
            {
                "label": "`cd`",
                "is_correct": false
            }
        ],
        "answer_description": "`pwd` is the correct command. It stands for 'print working directory' and is used to display the current directory in Linux.",
        "difficulty": "easy",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "Which command is used to copy files or directories in Linux?",
        "options": [
            {
                "label": "`cp`",
                "is_correct": true
            },
            {
                "label": "`copy`",
                "is_correct": false
            },
            {
                "label": "`mv`",
                "is_correct": false
            }
        ],
        "answer_description": "`cp` is the correct command. It stands for 'copy' and is used to copy files or directories in Linux.",
        "difficulty": "easy",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "Which command is used to move files or directories in Linux?",
        "options": [
            {
                "label": "`mv`",
                "is_correct": true
            },
            {
                "label": "`move`",
                "is_correct": false
            },
            {
                "label": "`cp`",
                "is_correct": false
            }
        ],
        "answer_description": "`mv` is the correct command. It stands for 'move' and is used to move files or directories in Linux.",
        "difficulty": "easy",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "Which command is used to remove files or directories in Linux?",
        "options": [
            {
                "label": "`rm`",
                "is_correct": true
            },
            {
                "label": "`delete`",
                "is_correct": false
            },
            {
                "label": "`del`",
                "is_correct": false
            }
        ],
        "answer_description": "`rm` is the correct command. It stands for 'remove' and is used to remove files or directories in Linux.",
        "difficulty": "easy",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "Which command is used to view the contents of a file in Linux?",
        "options": [
            {
                "label": "`cat`",
                "is_correct": true
            },
            {
                "label": "`view`",
                "is_correct": false
            },
            {
                "label": "`more`",
                "is_correct": false
            }
        ],
        "answer_description": "`cat` is the correct command. It stands for 'concatenate' and is used to view the contents of a file in Linux.",
        "difficulty": "easy",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "Which command is used to search for files in Linux?",
        "options": [
            {
                "label": "`find`",
                "is_correct": true
            },
            {
                "label": "`search`",
                "is_correct": false
            },
            {
                "label": "`locate`",
                "is_correct": false
            }
        ],
        "answer_description": "`find` is the correct command. It is used to search for files in Linux based on various criteria.",
        "difficulty": "easy",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "Which command is used to display the manual of another command in Linux?",
        "options": [
            {
                "label": "`man`",
                "is_correct": true
            },
            {
                "label": "`help`",
                "is_correct": false
            },
            {
                "label": "`info`",
                "is_correct": false
            }
        ],
        "answer_description": "`man` is the correct command. It is used to display the manual of another command in Linux.",
        "difficulty": "easy",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "Which command is used to create a new file in Linux?",
        "options": [
            {
                "label": "`touch`",
                "is_correct": true
            },
            {
                "label": "`newfile`",
                "is_correct": false
            },
            {
                "label": "`mkfile`",
                "is_correct": false
            }
        ],
        "answer_description": "`touch` is the correct command. It is used to create a new file in Linux.",
        "difficulty": "easy",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "Which command is used to display the current date and time in Linux?",
        "options": [
            {
                "label": "`date`",
                "is_correct": true
            },
            {
                "label": "`time`",
                "is_correct": false
            },
            {
                "label": "`datetime`",
                "is_correct": false
            }
        ],
        "answer_description": "`date` is the correct command. It is used to display the current date and time in Linux.",
        "difficulty": "easy",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "Which command is used to display the calendar for a specific month in Linux?",
        "options": [
            {
                "label": "`cal`",
                "is_correct": true
            },
            {
                "label": "`calendar`",
                "is_correct": false
            },
            {
                "label": "`date`",
                "is_correct": false
            }
        ],
        "answer_description": "`cal` is the correct command. It is used to display the calendar for a specific month in Linux.",
        "difficulty": "easy",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "Which command is used to display a list of currently logged in users in Linux?",
        "options": [
            {
                "label": "`who`",
                "is_correct": true
            },
            {
                "label": "`users`",
                "is_correct": false
            },
            {
                "label": "`logged`",
                "is_correct": false
            }
        ],
        "answer_description": "`who` is the correct command. It is used to display a list of currently logged in users in Linux.",
        "difficulty": "easy",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "Which command is used to display the system uptime in Linux?",
        "options": [
            {
                "label": "`uptime`",
                "is_correct": true
            },
            {
                "label": "`time`",
                "is_correct": false
            },
            {
                "label": "`uptime -s`",
                "is_correct": false
            }
        ],
        "answer_description": "`uptime` is the correct command. It is used to display the system uptime in Linux.",
        "difficulty": "easy",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "Which command is used to shut down the system immediately in Linux?",
        "options": [
            {
                "label": "`shutdown -h now`",
                "is_correct": true
            },
            {
                "label": "`shutdown -r now`",
                "is_correct": false
            },
            {
                "label": "`poweroff`",
                "is_correct": false
            }
        ],
        "answer_description": "`shutdown -h now` is the correct command. It is used to shut down the system immediately in Linux.",
        "difficulty": "easy",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "Which command is used to restart the system in Linux?",
        "options": [
            {
                "label": "`reboot`",
                "is_correct": true
            },
            {
                "label": "`restart`",
                "is_correct": false
            },
            {
                "label": "`shutdown -r now`",
                "is_correct": false
            }
        ],
        "answer_description": "`reboot` is the correct command. It is used to restart the system in Linux.",
        "difficulty": "easy",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "Which command is used to check the network connectivity to a remote host in Linux?",
        "options": [
            {
                "label": "`ping`",
                "is_correct": true
            },
            {
                "label": "`connect`",
                "is_correct": false
            },
            {
                "label": "`netcheck`",
                "is_correct": false
            }
        ],
        "answer_description": "`ping` is the correct command. It is used to check the network connectivity to a remote host in Linux.",
        "difficulty": "easy",
        "tags": ["Linux", "command-line", "networking"]
    },
    {
        "question": "Which command is used to display network interface information in Linux?",
        "options": [
            {
                "label": "`ifconfig`",
                "is_correct": true
            },
            {
                "label": "`netinfo`",
                "is_correct": false
            },
            {
                "label": "`nicinfo`",
                "is_correct": false
            }
        ],
        "answer_description": "`ifconfig` is the correct command. It is used to display network interface information in Linux.",
        "difficulty": "easy",
        "tags": ["Linux", "command-line", "networking"]
    },
    {
        "question": "Which command is used to change the network configuration in Linux?",
        "options": [
            {
                "label": "`ip`",
                "is_correct": true
            },
            {
                "label": "`netconf`",
                "is_correct": false
            },
            {
                "label": "`ifconfig`",
                "is_correct": false
            }
        ],
        "answer_description": "`ip` is the correct command. It is used to change the network configuration in Linux.",
        "difficulty": "easy",
        "tags": ["Linux", "command-line", "networking"]
    },
    {
        "question": "Which command is used to display listening network ports in Linux?",
        "options": [
            {
                "label": "`netstat`",
                "is_correct": true
            },
            {
                "label": "`portstat`",
                "is_correct": false
            },
            {
                "label": "`listen`",
                "is_correct": false
            }
        ],
        "answer_description": "`netstat` is the correct command. It is used to display listening network ports in Linux.",
        "difficulty": "easy",
        "tags": ["Linux", "command-line", "networking"]
    },
    {
        "question": "Which command is used to manage user accounts in Linux?",
        "options": [
            {
                "label": "`useradd`",
                "is_correct": true
            },
            {
                "label": "`adduser`",
                "is_correct": false
            },
            {
                "label": "`newuser`",
                "is_correct": false
            }
        ],
        "answer_description": "`useradd` is the correct command. It is used to manage user accounts in Linux by adding new users.",
        "difficulty": "easy",
        "tags": ["Linux", "command-line", "user-management"]
    },
    {
        "question": "Which command is used to change a user's password in Linux?",
        "options": [
            {
                "label": "`passwd`",
                "is_correct": true
            },
            {
                "label": "`password`",
                "is_correct": false
            },
            {
                "label": "`changepass`",
                "is_correct": false
            }
        ],
        "answer_description": "`passwd` is the correct command. It is used to change a user's password in Linux.",
        "difficulty": "easy",
        "tags": ["Linux", "command-line", "user-management"]
    },
    {
        "question": "Which command is used to delete a user account in Linux?",
        "options": [
            {
                "label": "`userdel`",
                "is_correct": true
            },
            {
                "label": "`deleteuser`",
                "is_correct": false
            },
            {
                "label": "`deluser`",
                "is_correct": false
            }
        ],
        "answer_description": "`userdel` is the correct command. It is used to delete a user account in Linux.",
        "difficulty": "easy",
        "tags": ["Linux", "command-line", "user-management"]
    },
    {
        "question": "Which command is used to display information about currently running processes in Linux?",
        "options": [
            {
                "label": "`ps`",
                "is_correct": true
            },
            {
                "label": "`process`",
                "is_correct": false
            },
            {
                "label": "`procinfo`",
                "is_correct": false
            }
        ],
        "answer_description": "`ps` is the correct command. It is used to display information about currently running processes in Linux.",
        "difficulty": "easy",
        "tags": ["Linux", "command-line", "process-management"]
    },
    {
        "question": "Which command is used to kill a process by its process ID in Linux?",
        "options": [
            {
                "label": "`kill`",
                "is_correct": true
            },
            {
                "label": "`terminate`",
                "is_correct": false
            },
            {
                "label": "`endprocess`",
                "is_correct": false
            }
        ],
        "answer_description": "`kill` is the correct command. It is used to kill a process by its process ID in Linux.",
        "difficulty": "easy",
        "tags": ["Linux", "command-line", "process-management"]
    },
    {
        "question": "Which command is used to send a signal to a process in Linux?",
        "options": [
            {
                "label": "`kill`",
                "is_correct": true
            },
            {
                "label": "`signal`",
                "is_correct": false
            },
            {
                "label": "`send`",
                "is_correct": false
            }
        ],
        "answer_description": "`kill` is the correct command. It is used to send a signal to a process in Linux, which can terminate or modify its behavior.",
        "difficulty": "easy",
        "tags": ["Linux", "command-line", "process-management"]
    },
    {
        "question": "Which command is used to view and manipulate environment variables in Linux?",
        "options": [
            {
                "label": "`export`",
                "is_correct": true
            },
            {
                "label": "`env`",
                "is_correct": false
            },
            {
                "label": "`variable`",
                "is_correct": false
            }
        ],
        "answer_description": "`export` is the correct command. It is used to view and manipulate environment variables in Linux.",
        "difficulty": "easy",
        "tags": ["Linux", "command-line", "environment-variables"]
    },
    {
        "question": "Which command is used to compress files and directories in Linux?",
        "options": [
            {
                "label": "`tar`",
                "is_correct": true
            },
            {
                "label": "`zip`",
                "is_correct": false
            },
            {
                "label": "`compress`",
                "is_correct": false
            }
        ],
        "answer_description": "`tar` is the correct command. It is used to compress files and directories into an archive in Linux.",
        "difficulty": "easy",
        "tags": ["Linux", "command-line", "compression"]
    },
    {
        "question": "Which command is used to decompress files and directories in Linux?",
        "options": [
            {
                "label": "`tar -xvf`",
                "is_correct": true
            },
            {
                "label": "`unzip`",
                "is_correct": false
            },
            {
                "label": "`decompress`",
                "is_correct": false
            }
        ],
        "answer_description": "`tar -xvf` is the correct command. It is used to decompress files and directories from an archive in Linux.",
        "difficulty": "easy",
        "tags": ["Linux", "command-line", "compression"]
    },
    {
        "question": "Which command is used to check disk usage in Linux?",
        "options": [
            {
                "label": "`df`",
                "is_correct": true
            },
            {
                "label": "`du`",
                "is_correct": false
            },
            {
                "label": "`diskusage`",
                "is_correct": false
            }
        ],
        "answer_description": "`df` is the correct command. It is used to check disk usage in Linux.",
        "difficulty": "easy",
        "tags": ["Linux", "command-line", "disk-management"]
    },
    {
        "question": "Which command is used to display information about disk partitions in Linux?",
        "options": [
            {
                "label": "`fdisk`",
                "is_correct": true
            },
            {
                "label": "`diskinfo`",
                "is_correct": false
            },
            {
                "label": "`partitions`",
                "is_correct": false
            }
        ],
        "answer_description": "`fdisk` is the correct command. It is used to display information about disk partitions in Linux.",
        "difficulty": "easy",
        "tags": ["Linux", "command-line", "disk-management"]
    },
    {
        "question": "Which command is used to format a disk partition in Linux?",
        "options": [
            {
                "label": "`mkfs`",
                "is_correct": true
            },
            {
                "label": "`format`",
                "is_correct": false
            },
            {
                "label": "`diskformat`",
                "is_correct": false
            }
        ],
        "answer_description": "`mkfs` is the correct command. It is used to format a disk partition in Linux.",
        "difficulty": "easy",
        "tags": ["Linux", "command-line", "disk-management"]
    },
    {
        "question": "In Linux, what command is used to display the last few lines of a file?",
        "options": [
            {
                "label": "`tail`",
                "is_correct": true
            },
            {
                "label": "`head`",
                "is_correct": false
            },
            {
                "label": "`last`",
                "is_correct": false
            }
        ],
        "answer_description": "`tail` is the correct command. It is used to display the last few lines of a file in Linux.",
        "difficulty": "medium",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "Which command is used to compress files in Linux?",
        "options": [
            {
                "label": "`tar`",
                "is_correct": true
            },
            {
                "label": "`zip`",
                "is_correct": false
            },
            {
                "label": "`compress`",
                "is_correct": false
            }
        ],
        "answer_description": "`tar` is the correct command. It is used to compress files in Linux, often combined with gzip or bzip2.",
        "difficulty": "medium",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "Which command is used to check the disk space usage of a file system in Linux?",
        "options": [
            {
                "label": "`df`",
                "is_correct": true
            },
            {
                "label": "`du`",
                "is_correct": false
            },
            {
                "label": "`diskusage`",
                "is_correct": false
            }
        ],
        "answer_description": "`df` is the correct command. It is used to check the disk space usage of a file system in Linux.",
        "difficulty": "medium",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "Which command is used to display the process information in Linux?",
        "options": [
            {
                "label": "`ps`",
                "is_correct": true
            },
            {
                "label": "`top`",
                "is_correct": false
            },
            {
                "label": "`procinfo`",
                "is_correct": false
            }
        ],
        "answer_description": "`ps` is the correct command. It is used to display the process information in Linux.",
        "difficulty": "medium",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "What is the purpose of the `grep` command in Linux?",
        "options": [
            {
                "label": "Search for patterns in files",
                "is_correct": true
            },
            {
                "label": "Copy files",
                "is_correct": false
            },
            {
                "label": "Move files",
                "is_correct": false
            }
        ],
        "answer_description": "`grep` is used to search for patterns in files in Linux. It stands for 'Global Regular Expression Print.'",
        "difficulty": "medium",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "Which command is used to edit a text file in the terminal in Linux?",
        "options": [
            {
                "label": "`nano`",
                "is_correct": true
            },
            {
                "label": "`edit`",
                "is_correct": false
            },
            {
                "label": "`vim`",
                "is_correct": false
            }
        ],
        "answer_description": "`nano` is the correct command. It is a simple text editor that can be used in the terminal in Linux.",
        "difficulty": "medium",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "Which command is used to list all running processes in Linux?",
        "options": [
            {
                "label": "`ps aux`",
                "is_correct": true
            },
            {
                "label": "`top`",
                "is_correct": false
            },
            {
                "label": "`listproc`",
                "is_correct": false
            }
        ],
        "answer_description": "`ps aux` is the correct command. It lists all running processes in Linux along with detailed information.",
        "difficulty": "medium",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "What does the `chmod 755` command do in Linux?",
        "options": [
            {
                "label": "Give read, write, and execute permissions to the owner, and read and execute permissions to group and others.",
                "is_correct": true
            },
            {
                "label": "Remove all permissions",
                "is_correct": false
            },
            {
                "label": "Give full permissions to everyone",
                "is_correct": false
            }
        ],
        "answer_description": "`chmod 755` gives read, write, and execute permissions to the owner, and read and execute permissions to group and others in Linux.",
        "difficulty": "medium",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "Which command is used to display the contents of a compressed file in Linux without extracting it?",
        "options": [
            {
                "label": "`zcat`",
                "is_correct": true
            },
            {
                "label": "`unzip`",
                "is_correct": false
            },
            {
                "label": "`extract`",
                "is_correct": false
            }
        ],
        "answer_description": "`zcat` is the correct command. It is used to display the contents of a compressed file in Linux without extracting it.",
        "difficulty": "medium",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "What does the command `uname -a` display in Linux?",
        "options": [
            {
                "label": "System information",
                "is_correct": true
            },
            {
                "label": "User information",
                "is_correct": false
            },
            {
                "label": "File information",
                "is_correct": false
            }
        ],
        "answer_description": "`uname -a` displays system information in Linux, including the kernel version, architecture, and other details.",
        "difficulty": "medium",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "Which command is used to change the current user's password in Linux?",
        "options": [
            {
                "label": "`passwd`",
                "is_correct": true
            },
            {
                "label": "`change-pass`",
                "is_correct": false
            },
            {
                "label": "`set-password`",
                "is_correct": false
            }
        ],
        "answer_description": "`passwd` is the correct command. It is used to change the current user's password in Linux.",
        "difficulty": "medium",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "What does the `df -h` command display in Linux?",
        "options": [
            {
                "label": "Disk space usage in human-readable format",
                "is_correct": true
            },
            {
                "label": "Detailed file information",
                "is_correct": false
            },
            {
                "label": "Directory size",
                "is_correct": false
            }
        ],
        "answer_description": "`df -h` displays disk space usage in human-readable format in Linux, showing sizes in KB, MB, GB, etc.",
        "difficulty": "medium",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "Which command is used to display the current date and time in Linux?",
        "options": [
            {
                "label": "`date`",
                "is_correct": true
            },
            {
                "label": "`time`",
                "is_correct": false
            },
            {
                "label": "`datetime`",
                "is_correct": false
            }
        ],
        "answer_description": "`date` is the correct command. It is used to display the current date and time in Linux.",
        "difficulty": "medium",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "Which command is used to count the number of lines in a file in Linux?",
        "options": [
            {
                "label": "`wc -l`",
                "is_correct": true
            },
            {
                "label": "`countlines`",
                "is_correct": false
            },
            {
                "label": "`lines`",
                "is_correct": false
            }
        ],
        "answer_description": "`wc -l` is the correct command. It is used to count the number of lines in a file in Linux.",
        "difficulty": "medium",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "Which command is used to create an archive in Linux?",
        "options": [
            {
                "label": "`tar`",
                "is_correct": true
            },
            {
                "label": "`zip`",
                "is_correct": false
            },
            {
                "label": "`arc`",
                "is_correct": false
            }
        ],
        "answer_description": "`tar` is the correct command. It is used to create an archive in Linux.",
        "difficulty": "medium",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "What does the command `ls -l` display in Linux?",
        "options": [
            {
                "label": "Detailed list view",
                "is_correct": true
            },
            {
                "label": "Simple list view",
                "is_correct": false
            },
            {
                "label": "Long list view",
                "is_correct": false
            }
        ],
        "answer_description": "`ls -l` displays a detailed list view in Linux, showing permissions, ownership, size, and other information about files and directories.",
        "difficulty": "medium",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "Which command is used to display the contents of a directory in Linux?",
        "options": [
            {
                "label": "`ls`",
                "is_correct": true
            },
            {
                "label": "`dir`",
                "is_correct": false
            },
            {
                "label": "`list`",
                "is_correct": false
            }
        ],
        "answer_description": "`ls` is the correct command. It is used to display the contents of a directory in Linux.",
        "difficulty": "medium",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "Which command is used to display the current user's username in Linux?",
        "options": [
            {
                "label": "`whoami`",
                "is_correct": true
            },
            {
                "label": "`username`",
                "is_correct": false
            },
            {
                "label": "`who`",
                "is_correct": false
            }
        ],
        "answer_description": "`whoami` is the correct command. It is used to display the current user's username in Linux.",
        "difficulty": "medium",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "Which command is used to display the first few lines of a file in Linux?",
        "options": [
            {
                "label": "`head`",
                "is_correct": true
            },
            {
                "label": "`tail`",
                "is_correct": false
            },
            {
                "label": "`first`",
                "is_correct": false
            }
        ],
        "answer_description": "`head` is the correct command. It is used to display the first few lines of a file in Linux.",
        "difficulty": "medium",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "What does the `cd` command do in Linux?",
        "options": [
            {
                "label": "Change directory",
                "is_correct": true
            },
            {
                "label": "Copy directory",
                "is_correct": false
            },
            {
                "label": "Create directory",
                "is_correct": false
            }
        ],
        "answer_description": "`cd` is used to change the current directory in Linux.",
        "difficulty": "medium",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "Which command is used to kill a process in Linux?",
        "options": [
            {
                "label": "`kill`",
                "is_correct": true
            },
            {
                "label": "`stop`",
                "is_correct": false
            },
            {
                "label": "`end`",
                "is_correct": false
            }
        ],
        "answer_description": "`kill` is the correct command. It is used to terminate a process in Linux.",
        "difficulty": "medium",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "Which command is used to set environment variables in Linux?",
        "options": [
            {
                "label": "`export`",
                "is_correct": true
            },
            {
                "label": "`set`",
                "is_correct": false
            },
            {
                "label": "`env`",
                "is_correct": false
            }
        ],
        "answer_description": "`export` is the correct command. It is used to set environment variables in Linux.",
        "difficulty": "medium",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "Which command is used to display the contents of a file page by page in Linux?",
        "options": [
            {
                "label": "`less`",
                "is_correct": true
            },
            {
                "label": "`more`",
                "is_correct": false
            },
            {
                "label": "`view`",
                "is_correct": false
            }
        ],
        "answer_description": "`less` is the correct command. It is used to display the contents of a file page by page in Linux.",
        "difficulty": "medium",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "Which command is used to display the contents of two files side by side in Linux?",
        "options": [
            {
                "label": "`diff`",
                "is_correct": false
            },
            {
                "label": "`sdiff`",
                "is_correct": true
            },
            {
                "label": "`side`",
                "is_correct": false
            }
        ],
        "answer_description": "`sdiff` is the correct command. It is used to display the contents of two files side by side in Linux.",
        "difficulty": "medium",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "Which command is used to create a symbolic link in Linux?",
        "options": [
            {
                "label": "`ln -s`",
                "is_correct": true
            },
            {
                "label": "`link`",
                "is_correct": false
            },
            {
                "label": "`symlink`",
                "is_correct": false
            }
        ],
        "answer_description": "`ln -s` is the correct command. It is used to create a symbolic link in Linux.",
        "difficulty": "medium",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "Which command is used to compress files in Linux?",
        "options": [
            {
                "label": "`gzip`",
                "is_correct": true
            },
            {
                "label": "`zip`",
                "is_correct": false
            },
            {
                "label": "`tar`",
                "is_correct": false
            }
        ],
        "answer_description": "`gzip` is the correct command. It is used to compress files in Linux.",
        "difficulty": "medium",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "Which command is used to decompress files in Linux?",
        "options": [
            {
                "label": "`gunzip`",
                "is_correct": false
            },
            {
                "label": "`unzip`",
                "is_correct": false
            },
            {
                "label": "`gzip -d`",
                "is_correct": true
            }
        ],
        "answer_description": "`gzip -d` is the correct command. It is used to decompress files compressed with gzip in Linux.",
        "difficulty": "medium",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "Which command is used to archive files in Linux?",
        "options": [
            {
                "label": "`tar`",
                "is_correct": true
            },
            {
                "label": "`zip`",
                "is_correct": false
            },
            {
                "label": "`gzip`",
                "is_correct": false
            }
        ],
        "answer_description": "`tar` is the correct command. It is used to archive files in Linux.",
        "difficulty": "medium",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "Which command is used to extract files from an archive in Linux?",
        "options": [
            {
                "label": "`tar -xvf`",
                "is_correct": true
            },
            {
                "label": "`unzip`",
                "is_correct": false
            },
            {
                "label": "`gunzip`",
                "is_correct": false
            }
        ],
        "answer_description": "`tar -xvf` is the correct command. It is used to extract files from an archive in Linux.",
        "difficulty": "medium",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "Which command is used to display a calendar in Linux?",
        "options": [
            {
                "label": "`cal`",
                "is_correct": true
            },
            {
                "label": "`calendar`",
                "is_correct": false
            },
            {
                "label": "`date`",
                "is_correct": false
            }
        ],
        "answer_description": "`cal` is the correct command. It is used to display a calendar in Linux.",
        "difficulty": "medium",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "Which command is used to display the process status in Linux?",
        "options": [
            {
                "label": "`ps`",
                "is_correct": true
            },
            {
                "label": "`status`",
                "is_correct": false
            },
            {
                "label": "`process`",
                "is_correct": false
            }
        ],
        "answer_description": "`ps` is the correct command. It is used to display the process status in Linux.",
        "difficulty": "medium",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "Which command is used to kill a process in Linux?",
        "options": [
            {
                "label": "`kill`",
                "is_correct": true
            },
            {
                "label": "`stop`",
                "is_correct": false
            },
            {
                "label": "`end`",
                "is_correct": false
            }
        ],
        "answer_description": "`kill` is the correct command. It is used to kill a process in Linux.",
        "difficulty": "medium",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "Which command is used to schedule tasks in Linux?",
        "options": [
            {
                "label": "`cron`",
                "is_correct": true
            },
            {
                "label": "`schedule`",
                "is_correct": false
            },
            {
                "label": "`task`",
                "is_correct": false
            }
        ],
        "answer_description": "`cron` is the correct command. It is used to schedule tasks in Linux.",
        "difficulty": "medium",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "What is the purpose of the `sed` command in Linux?",
        "options": [
            {
                "label": "`sed` is used for stream editing",
                "is_correct": true
            },
            {
                "label": "`sed` is used for file compression",
                "is_correct": false
            },
            {
                "label": "`sed` is used for network configuration",
                "is_correct": false
            }
        ],
        "answer_description": "`sed` is a stream editor used for performing basic text transformations on an input stream or a file. It is commonly used for text substitution, deletion, insertion, and other transformations.",
        "difficulty": "hard",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "What is the purpose of the `awk` command in Linux?",
        "options": [
            {
                "label": "`awk` is used for pattern scanning and processing",
                "is_correct": true
            },
            {
                "label": "`awk` is used for file encryption",
                "is_correct": false
            },
            {
                "label": "`awk` is used for package management",
                "is_correct": false
            }
        ],
        "answer_description": "`awk` is a versatile programming language for pattern scanning and processing. It is mainly used for data extraction and reporting tasks, often used as a data manipulation tool in shell scripts.",
        "difficulty": "hard",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "What does the `grep` command do in Linux?",
        "options": [
            {
                "label": "`grep` is used for searching patterns in files",
                "is_correct": true
            },
            {
                "label": "`grep` is used for network diagnostics",
                "is_correct": false
            },
            {
                "label": "`grep` is used for file compression",
                "is_correct": false
            }
        ],
        "answer_description": "`grep` is a command-line utility for searching plain-text data sets for lines that match a regular expression. It is commonly used to search for patterns in files and to filter text output from other commands.",
        "difficulty": "hard",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "What is the purpose of the `tar` command in Linux?",
        "options": [
            {
                "label": "`tar` is used for archiving files",
                "is_correct": true
            },
            {
                "label": "`tar` is used for package management",
                "is_correct": false
            },
            {
                "label": "`tar` is used for file compression",
                "is_correct": false
            }
        ],
        "answer_description": "`tar` is a command-line utility used for archiving files. It allows users to compress and extract files in various archive formats such as .tar, .tar.gz, .tar.bz2, etc.",
        "difficulty": "hard",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "What does the `rsync` command do in Linux?",
        "options": [
            {
                "label": "`rsync` is used for remote file synchronization",
                "is_correct": true
            },
            {
                "label": "`rsync` is used for disk partitioning",
                "is_correct": false
            },
            {
                "label": "`rsync` is used for file compression",
                "is_correct": false
            }
        ],
        "answer_description": "`rsync` is a powerful file synchronization and transfer tool in Linux. It is commonly used to synchronize files and directories between two locations, either on the local system or between a local and remote system over a network.",
        "difficulty": "hard",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "What is the purpose of the `find` command in Linux?",
        "options": [
            {
                "label": "`find` is used for searching files and directories",
                "is_correct": true
            },
            {
                "label": "`find` is used for file compression",
                "is_correct": false
            },
            {
                "label": "`find` is used for network diagnostics",
                "is_correct": false
            }
        ],
        "answer_description": "`find` is a command-line utility used for searching files and directories in a directory hierarchy based on various criteria such as name, type, size, etc. It is often used for file management and administrative tasks.",
        "difficulty": "hard",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "What is the purpose of the `cron` utility in Linux?",
        "options": [
            {
                "label": "`cron` is used for scheduling tasks",
                "is_correct": true
            },
            {
                "label": "`cron` is used for file compression",
                "is_correct": false
            },
            {
                "label": "`cron` is used for network configuration",
                "is_correct": false
            }
        ],
        "answer_description": "`cron` is a system utility in Linux used for scheduling repetitive tasks to be executed at specified intervals. It is commonly used for automating system maintenance, backups, and other administrative tasks.",
        "difficulty": "hard",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "What is the purpose of the `iptables` command in Linux?",
        "options": [
            {
                "label": "`iptables` is used for configuring firewall rules",
                "is_correct": true
            },
            {
                "label": "`iptables` is used for file compression",
                "is_correct": false
            },
            {
                "label": "`iptables` is used for network diagnostics",
                "is_correct": false
            }
        ],
        "answer_description": "`iptables` is a command-line utility used for configuring the Linux kernel's packet filtering ruleset, acting as a firewall. It is used to set up, maintain, and inspect the tables of IP packet filter rules in the Linux kernel.",
        "difficulty": "hard",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "What is the purpose of the `dd` command in Linux?",
        "options": [
            {
                "label": "`dd` is used for disk cloning and conversion",
                "is_correct": true
            },
            {
                "label": "`dd` is used for file compression",
                "is_correct": false
            },
            {
                "label": "`dd` is used for network diagnostics",
                "is_correct": false
            }
        ],
        "answer_description": "`dd` is a command-line utility used for copying and converting files and data blocks. It is commonly used for tasks like disk cloning, data recovery, and low-level disk operations.",
        "difficulty": "hard",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "What is the purpose of the `chroot` command in Linux?",
        "options": [
            {
                "label": "`chroot` is used for changing the root directory",
                "is_correct": true
            },
            {
                "label": "`chroot` is used for file compression",
                "is_correct": false
            },
            {
                "label": "`chroot` is used for network diagnostics",
                "is_correct": false
            }
        ],
        "answer_description": "`chroot` is a command-line utility used for changing the root directory of a process and its children to a new location in the filesystem. It is often used for creating isolated environments and for system recovery purposes.",
        "difficulty": "hard",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "What is the purpose of the `curl` command in Linux?",
        "options": [
            {
                "label": "`curl` is used for transferring data from or to a server",
                "is_correct": true
            },
            {
                "label": "`curl` is used for file compression",
                "is_correct": false
            },
            {
                "label": "`curl` is used for network diagnostics",
                "is_correct": false
            }
        ],
        "answer_description": "`curl` is a command-line utility used for transferring data to or from a server. It supports various protocols such as HTTP, HTTPS, FTP, FTPS, SCP, SFTP, and more, making it a versatile tool for data transfer and manipulation.",
        "difficulty": "hard",
        "tags": ["Linux", "command-line"]
    },
    {
        "question": "What is the purpose of the `lsof` command in Linux?",
        "options": [
            {
                "label": "`lsof` is used for listing open files and processes",
                "is_correct": true
            },
            {
                "label": "`lsof` is used for file compression",
                "is_correct": false
            },
            {
                "label": "`lsof` is used for network diagnostics",
                "is_correct": false
            }
        ],
        "answer_description": "`lsof` is a command-line utility used for listing open files and the processes that opened them. It provides detailed information about which files are opened by which processes, making it useful for system monitoring and troubleshooting.",
        "difficulty": "hard",
        "tags": ["Linux", "command-line"]
    },

]
export default questions