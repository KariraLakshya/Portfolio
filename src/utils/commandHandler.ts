import { portfolioData } from '../data/portfolio';

export interface CommandOutput {
    output: string;
    isHtml?: boolean;
}

export const commandHandler = (input: string): CommandOutput => {
    const command = input.trim().toLowerCase();
    const args = command.split(' ');
    const cmd = args[0];

    switch (cmd) {
        case 'help':
            return {
                output: `
╔════════════════════════════════════════════════════════════╗
║                    AVAILABLE COMMANDS                      ║
╠════════════════════════════════════════════════════════════╣
║  help        - Display this help message                   ║
║  about       - Learn about me                              ║
║  skills      - View my technical skills                    ║
║  projects    - See my projects                             ║
║  achievements- View my accomplishments                     ║
║  contact     - Get my contact information                  ║
║  resume      - Download my resume                          ║
║  clear       - Clear the terminal                          ║
║                                                            ║
║  🎮 Easter Eggs:                                           ║
║  matrix      - Toggle matrix rain effect                   ║
║  hack        - Initiate hacking sequence                   ║
║  coffee      - Get some coffee                             ║
║  sudo rm -rf - Don't try this at home                      ║
╚════════════════════════════════════════════════════════════╝
`
            };

        case 'about':
            return {
                output: `
╔════════════════════════════════════════════════════════════╗
║                      ABOUT ME                              ║
╚════════════════════════════════════════════════════════════╝

👤 ${portfolioData.name}
💼 ${portfolioData.title}
📍 ${portfolioData.contact.location}

${portfolioData.professionalSummary}

🎓 EDUCATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${portfolioData.education.degree}
${portfolioData.education.institution} | Expected: ${portfolioData.education.expected}

${portfolioData.education.school}
`
            };

        case 'skills':
            return {
                output: `
╔════════════════════════════════════════════════════════════╗
║                    TECHNICAL SKILLS                        ║
╚════════════════════════════════════════════════════════════╝

💻 LANGUAGES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${portfolioData.skills.languages.map(skill => `  ▸ ${skill}`).join('\n')}

🌐 FULL STACK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${portfolioData.skills.fullStack.map(skill => `  ▸ ${skill}`).join('\n')}

🤖 MACHINE LEARNING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${portfolioData.skills.machineLearning.map(skill => `  ▸ ${skill}`).join('\n')}

🛠️  TOOLS & CONCEPTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${[...portfolioData.skills.tools, ...portfolioData.skills.concepts].map(skill => `  ▸ ${skill}`).join('\n')}
`
            };

        case 'projects':
            return {
                output: `
╔════════════════════════════════════════════════════════════╗
║                       PROJECTS                             ║
╚════════════════════════════════════════════════════════════╝

${portfolioData.projects.map((project) => `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📦 ${project.name}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${project.description}

🔧 Tech Stack:
${project.tech.map(tech => `  • ${tech}`).join('\n')}
`).join('\n')}
`
            };

        case 'achievements':
            return {
                output: `
╔════════════════════════════════════════════════════════════╗
║                     ACHIEVEMENTS                           ║
╚════════════════════════════════════════════════════════════╝

${portfolioData.achievements.map((achievement) => `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🏆 ${achievement.title}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${achievement.organization} | ${achievement.date}

${achievement.description}
`).join('\n')}
`
            };

        case 'contact':
            return {
                output: `
╔════════════════════════════════════════════════════════════╗
║                   CONTACT INFORMATION                      ║
╚════════════════════════════════════════════════════════════╝

📧 Email:     ${portfolioData.contact.email}
📱 Phone:     ${portfolioData.contact.phone}
📍 Location:  ${portfolioData.contact.location}

🔗 SOCIAL LINKS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Instagram:  @${portfolioData.contact.instagram}
  LinkedIn:   linkedin.com/in/${portfolioData.contact.linkedin}
  GitHub:     github.com/${portfolioData.contact.github}

💬 Let's connect and build something amazing together!
`
            };

        case 'resume':
            return {
                output: `
╔════════════════════════════════════════════════════════════╗
║                    RESUME DOWNLOAD                         ║
╚════════════════════════════════════════════════════════════╝

📄 Downloading resume...

[████████████████████████████████████████] 100%

✅ Resume downloaded successfully!

Note: In production, this would trigger a PDF download.
For now, please contact me directly for my latest resume.
`
            };

        case 'clear':
            return { output: 'CLEAR_SCREEN' };

        case 'matrix':
            return {
                output: `
╔════════════════════════════════════════════════════════════╗
║              MATRIX MODE TOGGLED                           ║
╚════════════════════════════════════════════════════════════╝

🟢 Matrix rain effect activated/deactivated!

"Wake up, Neo... The Matrix has you..."
`
            };

        case 'hack':
            return {
                output: `
╔════════════════════════════════════════════════════════════╗
║            INITIATING HACKING SEQUENCE                     ║
╚════════════════════════════════════════════════════════════╝

[*] Scanning network...
[*] Found 127.0.0.1
[*] Attempting to breach firewall...
[████████████████████████████████████████] 100%
[✓] Access granted!
[*] Downloading secret files...
[✓] hack_the_planet.exe downloaded!

Just kidding! 😄 I'm a developer, not a hacker.
But I can hack together some pretty cool code! 💻
`
            };

        case 'coffee':
            return {
                output: `
        (  )   (   )  )
         ) (   )  (  (
         ( )  (    ) )
         _____________
        <_____________> ___
        |             |/ _ \\
        |    COFFEE   | | | |
        |   _________ |_| |
     ___|_____________|\\___/
    /    \\___________/    \\
    \\_____________________/

☕ Here's your coffee! Fuel for coding! ☕

"First, we drink the coffee. Then, we do the things."
`
            };

        case 'sudo':
            if (args[1] === 'rm' && args[2] === '-rf' && args[3] === '/') {
                return {
                    output: `
╔════════════════════════════════════════════════════════════╗
║                    ⚠️  WARNING  ⚠️                         ║
╚════════════════════════════════════════════════════════════╝

[sudo] password for lakshya: ********

Deleting system files...
[████████████████████████████████████████] 100%

Just kidding! 😅

You really thought I'd let you delete everything?
Nice try though! This is a portfolio, not a real terminal.

Pro tip: Never run 'sudo rm -rf /' on a real system!
`
                };
            }
            return { output: `sudo: ${args.slice(1).join(' ')}: command not found` };

        case '':
            return { output: '' };

        default:
            return {
                output: `Command not found: ${cmd}

Type 'help' to see available commands.`
            };
    }
};

export const getCommandSuggestions = (partial: string): string[] => {
    const commands = [
        'help',
        'about',
        'skills',
        'projects',
        'achievements',
        'contact',
        'resume',
        'clear',
        'matrix',
        'hack',
        'coffee',
        'sudo rm -rf /'
    ];

    if (!partial) return commands;

    return commands.filter(cmd => cmd.startsWith(partial.toLowerCase()));
};
