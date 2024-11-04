import awsMedia from '../images/aws-media.jpeg';
import googleMedia from '../images/Google.webp';
import raytheonMedia from '../images/rtx logo.png';
import collinsMedia from '../images/collins aerospace.webp';
import seiMedia from '../images/lock3.png';
import humeMedia from '../images/vt_2-transformed.png';
import nasaMedia from '../images/NASA 1.webp';
import taskMedia from '../images/scheduling.jpeg'
import sentimentMedia from '../images/sentiment.webp'
import discordMedia from '../images/discord 1.png'

export interface Item {
  type: string;
  title: string;
  company?: string;
  position?: string;
  duration: string;
  summary: string;
  briefDescription: string;
  fullDescription: string;
  media: string;
}

export const experiences: Item[] = [
  {
    type: 'experience',
    company: 'Amazon Web Services',
    title: 'Machine Learning Research Fellow, Amazon Web services, Blacksburg, VA',
    position: 'Machine Learning Research Fellow',
    duration: 'Sept. 2024 — Present',
    summary:
      'Researched and developed novel machine learning techniques for collaborative spectrum sensing within cloud-based distributed radio frequency systems.',
    briefDescription:
      'At AWS, I focused on developing innovative ML techniques to enhance collaborative spectrum sensing in distributed cloud RF systems. I leveraged AWS Bedrock and SageMaker to train models, adapt fusion methods for RF fingerprinting, and refine signal detection accuracy. This work contributed to more efficient RF identification and classification.',
    fullDescription: `My time at AWS was both a technical and strategic journey, filled with opportunities to dive deep into machine learning and cloud-based radio frequency systems.

### Project Scope & Responsibilities

A major project involved developing collaborative spectrum sensing algorithms to improve the accuracy of RF fingerprinting within distributed systems. I utilized CNNs to identify and classify radio frequency signals while adapting existing fusion models for enhanced performance. I built and trained these models using AWS Bedrock and SageMaker, ensuring the solution was scalable and effective in real-world scenarios.

### Advanced Technologies & Solutions

At AWS, I integrated advanced ML models with cloud-based distributed systems to optimize signal detection and classification. Leveraging AWS’s suite of tools, such as Bedrock and SageMaker, I was able to build, fine-tune, and deploy machine learning models for RF fingerprinting. This led to measurable improvements in signal detection accuracy and data processing efficiency, enhancing the performance of the overall system.

### Impact & Business Value

The work wasn't just about research or code—it was about creating scalable, real-world solutions for advanced RF signal identification. By adapting fusion models and refining ML algorithms, I played a critical role in improving signal classification, which has significant implications for faster and more accurate decision-making in distributed RF systems.

### What I Liked

The collaborative environment and access to cutting-edge technologies were the highlights of my time at AWS. I worked with a brilliant team of researchers and engineers who brought different perspectives to the table, making problem-solving a team effort. The culture emphasized both innovation and results, which kept me motivated throughout the experience.

### What I Learned

I learned the importance of applying ML models not just theoretically but in operational environments that demand high accuracy and scalability. Working on RF fingerprinting and collaborative spectrum sensing expanded my understanding of machine learning applications in cloud environments, as well as the importance of precise data handling and model optimization.

### Personal Growth

This experience helped me appreciate the complexities of cloud-based RF systems and the critical role of scalable ML solutions in advancing signal processing technologies. It also boosted my confidence in leading research initiatives, handling complex datasets, and collaborating effectively with diverse teams.
`,
    media: awsMedia,
  },
  {
    type: 'experience',
    title: 'Raytheon Fellowship Program, Raytheon, Sterling, VA',
    company: 'Raytheon',
    position: 'Software Engineering Intern',
    duration: 'Aug. 2023 — Present',
    summary:
      'Conducted APT simulations, collaborated with UAV teams, and represented software engineering at Raytheon leadership debriefs.',
    briefDescription:
      'At Raytheon, I focused on conducting advanced APT simulations using IP spoofing and DDoS techniques to enhance exploit detection in distributed systems. I collaborated with the Triton UAV team, developing intuitive UIs for ground communications, mission switching, and flight operations. This effort increased command and control efficiency by 22% and improved the pilot interface experience. Additionally, I was selected from 62 interns to represent software engineering and debrief the VP of Engineering, showcasing my project’s key achievements.',
    fullDescription: `My summer at Raytheon as part of the Fellowship Program was an intense yet rewarding experience that deepened my understanding of both cybersecurity and UAV operations.

### Project Scope & Key Contributions

My role primarily involved conducting APT simulations using IP spoofing and DDoS techniques to improve the detection and response mechanisms in distributed systems. I worked closely with the Triton UAV team to design user interfaces for ground communication, mission switching, and flight operations. These designs significantly boosted command and control efficiency by 22%, making the pilot interface more intuitive and effective.

### Advanced Technologies & Solutions

I leveraged various programming tools and frameworks to develop the UI components, ensuring seamless integration with the existing UAV command infrastructure. The APT simulations I conducted were built to mimic real-world attack scenarios, using advanced IP spoofing methods and DDoS techniques. This approach enhanced the overall exploit detection and provided crucial insights into system vulnerabilities.

### Impact & Business Value

The UI enhancements for the Triton UAVs played a significant role in streamlining drone operations, leading to faster mission execution and a smoother command interface. The APT simulations provided a better understanding of potential vulnerabilities, directly contributing to improved system resilience. My work demonstrated tangible results that reinforced Raytheon’s commitment to innovation in autonomous defense technologies.

### What I Liked

The fast-paced, high-stakes environment at Raytheon was both challenging and exhilarating. I enjoyed the collaborative efforts across teams, particularly when working alongside UAV operators to create solutions that had immediate operational impacts. Being able to present these achievements to the VP of Engineering was a career highlight, giving me the chance to showcase the impact of my work.

### What I Learned

I gained a deeper understanding of cybersecurity strategies, particularly in the context of autonomous systems. Working on both offensive simulations and defense mechanisms expanded my perspective on software engineering within the defense sector. The experience also honed my ability to communicate complex technical concepts to a broader audience, as seen during my presentation to the VP of Engineering.

### Personal Growth

This internship taught me the value of adaptability and precision in high-stakes environments. I developed stronger skills in both cybersecurity and UI design, becoming more confident in leading technical projects and representing software engineering achievements at a senior level.
`,
    media: raytheonMedia,
  },

  {
    type: 'experience',
    title: 'Software Developer, Systems Engineering Inc.',
    duration: 'Aug. 2023 — May 2024',
    company: 'Systems Engineering Inc.',
    position: 'Software Developer',
    summary: 'Developed a ReactJS GUI with an Oracle Database and Django backend to optimize USMC task scheduling, enhancing bias mitigation and task efficiency.',
    briefDescription: 'At Systems Engineering Inc., I created a ReactJS GUI integrated with an Oracle Database and Django backend to streamline USMC task scheduling. By implementing genetic, first-fit, and greedy algorithms, I increased task completion rates by 40%. I collaborated closely with stakeholders through iterative feedback from demos, refining product features and reducing cognitive load in task assignments. The scheduling tool was presented at the IEEE SIEDS conference and is now actively used by the USMC.',
    fullDescription: `### Role & Responsibilities

As a Software Developer at Systems Engineering Inc., I was responsible for designing a task scheduling tool aimed at optimizing operations for the USMC. My primary focus was building a user-friendly ReactJS GUI integrated with an Oracle Database and Django backend. I collaborated with team members to iteratively develop features based on stakeholder feedback, ensuring the tool met operational needs.

### Technical Strategy & Implementation

I incorporated various scheduling algorithms, including genetic, first-fit, and greedy algorithms, to improve interval scheduling efficiency and reduce biases in task assignments. This approach led to a 40% increase in task completion rates and a significant reduction in cognitive load for users. The GUI was designed for intuitive interaction, enabling effective task management.

### Presentation & Impact

The scheduling tool was presented at the IEEE SIEDS conference, showcasing its technical achievements and impact on military task scheduling. The successful demonstration of this tool led to its adoption by the USMC, where it now plays a crucial role in daily operations.

### What I Gained

This experience not only enhanced my skills in full-stack development but also deepened my understanding of how algorithms can improve operational processes. It reinforced my ability to communicate technical concepts effectively, especially during high-stakes presentations, and showed me the tangible impact software can have in real-world applications.`,
    media: seiMedia
  },
  {
    type: 'experience',
    title: 'Research Fellow, Google CS Research Mentorship Program',
    duration: 'Sept. 2023 — Dec. 2023',
    company: 'Google',
    position: 'Research Fellow',
    summary: 'Collaborated with students from leading universities to address key challenges in computer science through research and practical applications in NLP and sentiment analysis.',
    briefDescription: 'As a Research Fellow in the Google CS Research Mentorship Program, I worked closely with a team to apply advanced research methodologies in NLP. We tackled sentiment analysis challenges using BERT-based models, focusing on data quality and accuracy, and collaborated on refining ML models to interpret emerging tech discussions.',
    fullDescription: `

### Role & Responsibilities

In Google’s CS Research Mentorship Program, I participated in collaborative research projects, learning advanced methodologies in natural language processing (NLP) and machine learning. Our team worked with a BERT-based model to conduct sentiment analysis on emerging technology discussions, focusing on optimizing model performance through data quality and validation techniques.

### Research Methodologies & Collaboration

This role emphasized a collaborative approach to research, where I partnered with students and mentors from prestigious institutions. I gained experience in advanced NLP techniques, learned best practices in data augmentation, and refined ML models with insights from peer feedback and mentor guidance. These experiences strengthened my ability to address complex challenges in sentiment analysis and large-scale NLP tasks.

### Impact & Personal Growth

The mentorship program deepened my understanding of NLP’s role in interpreting public sentiment around technology. Working with BERT and Hugging Face alongside academic peers fostered a comprehensive approach to machine learning, and I gained confidence in managing ML projects and collaborating within a research-focused environment.
`,
    media: googleMedia
  },
 {
  type: 'experience',
  title: 'Tactical Software Engineer Co-Op, Collins Aerospace',
  duration: 'June 2023 — Dec 2023',
  company: 'Collins Aerospace',
  position: 'Tactical Software Engineer Co-Op',
  summary: 'Integrated cryptographic solutions, developed ReactJS GUIs, and optimized data handling for secure cross-domain communications.',
  briefDescription: 'At Collins Aerospace, I led cryptographic integration for a cross-domain solution prototype, aligning with MILS security architecture and NSA RTB requirements. I developed a ReactJS GUI for schema configuration and ruleset creation, enabling efficient transmission of Link16 messages. My optimization of DFDL and EXI stream normalizers increased data throughput by 34%. The successful demo secured over $10M in IRAD funding.',
  fullDescription: `### Role & Responsibilities

During my Co-Op at Collins Aerospace, I was focused on developing a cross-domain solution prototype that adhered to MILS security architecture and NSA RTB standards. I was responsible for the cryptographic integration, ensuring secure data handling across domains.

### Technical Implementation & Cryptography

I orchestrated the integration of cryptographic protocols, enhancing secure data transmission. I also developed a ReactJS-based GUI to facilitate schema configuration and ruleset creation, allowing for efficient transmission of Link16 messages. This interface was designed for ease of use and effective communication.

### Data Optimization & Efficiency

To boost data throughput, I optimized DFDL and EXI stream normalizers using compressed XML binary formatting, resulting in a 34% increase in efficiency. This enhancement significantly improved data handling capabilities, making secure communications faster and more reliable.

### Presentation & Funding

I presented the prototype during a demo, showcasing its capabilities and impact on secure cross-domain communication. This demonstration led to the acquisition of over $10M in IRAD funding, validating the solution’s technical and strategic value.

### Impact & Personal Growth

This role allowed me to deepen my understanding of cryptographic integration and secure data handling in tactical communication systems. I developed strong skills in front-end development, data optimization, and effective presentation, gaining confidence in delivering high-stakes demos.`,
  media: collinsMedia
},
  {
    type: 'experience',
  title: 'Cybersecurity Analyst, Virginia Tech Research Project',
  duration: 'Sept. 2022 — May 2023',
  company: 'Virginia Tech',
  position: 'Cybersecurity Analyst',
  summary: 'Conducted center of gravity analysis, developed OSINT scripts, and briefed key stakeholders on Chinese cyber vulnerabilities.',
  briefDescription: 'As a Cybersecurity Analyst for a research project at Virginia Tech, I identified critical vulnerabilities in Chinese cyber networks through a center of gravity analysis, pinpointing 50 high-risk assets. I developed Python scripts for data mining and Open Source Intelligence (OSINT) to analyze “Trojan horse” programs and malware development. My work contributed to strategic decision-making in simulated crisis scenarios, providing valuable insights into countermeasures against Chinese cyber threats.',
  fullDescription: `### Role & Responsibilities

As a Cybersecurity Analyst on a Virginia Tech research project, I focused on analyzing and identifying vulnerabilities within Chinese cyber networks. I conducted comprehensive center of gravity analyses, identifying 50 high-risk assets and offering strategic insights to enhance countermeasures.

### Data Mining & OSINT

I developed Python scripts for data mining and Open Source Intelligence (OSINT), targeting "Trojan horse" programs, malware development, and data exfiltration tools used by Chinese cyber actors. These scripts provided critical insights into potential cyber threat countermeasures, enhancing the project’s effectiveness in identifying emerging threats.

### Strategic Briefings & Impact

I presented findings on China’s multi-domain cyber capabilities to key stakeholders, contributing to strategic decision-making during simulated crisis scenarios. My briefings were designed to offer actionable intelligence, helping shape tactical responses and defense strategies.

### Personal Growth

This role refined my skills in cyber analysis, strategic intelligence gathering, and Python-based scripting for threat detection. It also enhanced my ability to communicate complex cyber threats to stakeholders, demonstrating my capacity to contribute to high-stakes discussions in cybersecurity.`,
    media: humeMedia
  },
  {
  type: 'experience',
  title: 'VASTS Researcher, NASA Langley Research Center',
  duration: 'Dec 2020 — July 2021',
  company: 'NASA',
  position: 'VASTS Researcher',
  summary: 'Enhanced mission success rates through Monte Carlo simulations and risk assessment for a simulated Mars mission.',
  briefDescription: 'As a VASTS Researcher at NASA Langley Research Center, I served as a Risk Assessment Specialist for a simulated human mission to Mars. I used Monte Carlo simulations and data analysis in R to boost mission success rates by 15%. I also developed risk matrices and mitigation algorithms in Tableau, focusing on factors like cosmic radiation exposure and asteroid collision risks.',
  fullDescription: `### Role & Responsibilities

As a VASTS Researcher at NASA, I focused on risk assessment for a simulated human mission to Mars. I utilized Monte Carlo simulations and data analysis in R to identify potential risks and enhance overall mission success rates.

### Monte Carlo Simulations & Data Analysis

I employed Monte Carlo simulations and data analysis techniques to assess and mitigate mission-critical risks, resulting in a 15% increase in simulated mission success rates. This work involved evaluating various scenarios to identify optimal risk management strategies.

### Risk Matrices & Mitigation Algorithms

I developed detailed risk matrices and designed mitigation algorithms using Tableau, concentrating on critical factors like cosmic radiation exposure and potential asteroid collisions. These efforts ensured that risk management strategies were data-driven and tailored to improve mission safety.

### Impact & Personal Growth

This role deepened my expertise in data-driven risk assessment and simulation-based decision-making. It also honed my ability to communicate complex statistical analyses and risk mitigation strategies, furthering my skills in strategic problem-solving and collaborative research.`,
  media: nasaMedia
}

];

export const projects: Item[] = [
  {
    type: 'project',
    title: 'Troop to Task Manager',
    duration: 'Aug. 2023 — May 2024',
    summary: 'Developed a task scheduling application for the USMC to optimize task assignments, reduce bias, and improve scheduling efficiency.',
    briefDescription: 'Built a web app using ReactJS, Django, and Oracle Database to enhance USMC task scheduling. By implementing efficient interval scheduling algorithms, the tool increased task completion rates by 40%.',
    fullDescription: `### Project Description and Impact

The Troop to Task Manager is a specialized scheduling tool developed for the United States Marine Corps (USMC) to optimize task assignments, mitigate bias, and reduce cognitive load on schedulers. The app leverages a powerful backend built with Django and Oracle Database, combined with a ReactJS front-end, creating an intuitive interface for users.

Through extensive testing of genetic, first-fit, and greedy algorithms, the tool was fine-tuned to provide efficient interval scheduling, resulting in a 40% increase in task completion rates. This project included frequent feedback loops with USMC stakeholders to refine product features and ensure the tool’s effectiveness in real-world applications.

The project was presented at the IEEE SIEDS conference, leading to the publication of research detailing the tool’s development and impact. As of now, the Troop to Task Manager is actively utilized by the USMC, underscoring its effectiveness in supporting mission-critical scheduling needs.

### What I Learned

This project expanded my expertise in **web application development**, particularly in using ReactJS for dynamic front-end interfaces and Django for a robust backend. I also gained practical experience in database management with Oracle, ensuring data integrity and efficient retrieval for complex scheduling algorithms.

Additionally, the project emphasized the value of algorithmic design in optimizing real-world processes. Through implementing and testing various scheduling algorithms, I gained a deeper understanding of computational efficiency and its impact on operational outcomes.

### How It Changed Me

Working on the Troop to Task Manager was a pivotal experience, highlighting the potential for technology to streamline critical military operations. This project strengthened my skills in collaborative problem-solving and adaptability, as I navigated complex requirements and integrated stakeholder feedback in each development cycle. Presenting our work at the IEEE SIEDS conference was a significant milestone that reinforced my commitment to impactful, data-driven solutions.

### What Tech I Learned

- ReactJS: Used to build an intuitive, responsive user interface that enhances the user experience.
  
- Django: Employed for the backend to manage task scheduling logic, user authentication, and API integration.
  
- Oracle Database: Leveraged for data storage and retrieval, ensuring high performance and data integrity in handling large-scale scheduling data.
  
- Algorithmic Scheduling: Tested and implemented genetic, first-fit, and greedy algorithms, optimizing scheduling efficiency and increasing task completion rates.
  
- Agile Development: Applied an Agile approach to manage iterative feedback and collaboration with stakeholders, ensuring the tool met operational requirements.
        `,
    media: taskMedia,
  },
  {
    type: 'project',
    title: 'Sentiment Analysis Model',
    duration: 'Sept. 2023 — Dec. 2023',
    summary: 'Fine-tuned a BERT-based model for sentiment analysis on social media posts, providing insights into public opinion on emerging technologies.',
    briefDescription: 'Developed an NLP model using BERT and Hugging Face to classify sentiment in social media posts. Built custom preprocessing, training, and evaluation pipelines, optimizing model accuracy through hyperparameter tuning and data augmentation.',
    fullDescription: `### Project Description and Impact

The Sentiment Analysis Model is a machine learning tool designed to classify social media posts into positive, neutral, and negative sentiments. Built on BERT and fine-tuned using Hugging Face, this model processes emerging technology discussions to provide real-time sentiment insights, valuable for understanding public perception on topics like AI, cybersecurity, and sustainable tech.

This project involved creating custom NLP preprocessing, training, and evaluation pipelines to enhance data quality and model accuracy. Through hyperparameter tuning and data augmentation (e.g., synonym replacement), the model achieved high performance on test data, showcasing its robustness in handling diverse social media language.

### What I Learned

This project deepened my expertise in Natural Language Processing (NLP), specifically in training BERT-based models and working with Hugging Face’s library. I gained hands-on experience in building end-to-end machine learning pipelines and in optimizing model performance through hyperparameter tuning. Additionally, I learned the importance of data quality and diversity in building effective sentiment analysis tools.

### How It Changed Me

Building this model highlighted the value of sentiment analysis in understanding public discourse and its implications for technology companies. This project strengthened my skills in data engineering and model tuning, underscoring the role of meticulous preprocessing and evaluation in creating reliable AI tools.

### What Tech I Learned

- BERT: Fine-tuned a pre-trained BERT model for sentiment classification, adapting it to social media language.
  
- Hugging Face Transformers: Used to streamline NLP model setup, training, and fine-tuning processes.
  
- Data Augmentation: Applied synonym replacement and other NLP techniques to expand the dataset and improve model generalization.
  
- Hyperparameter Tuning: Utilized optuna for efficient hyperparameter search to optimize model accuracy.
  
- Evaluation Metrics: Implemented precision, recall, and F1-score to comprehensively evaluate model performance.
`,
    media: sentimentMedia,
  },
  {
    type: 'project',
    title: 'Discord Tech Bot for Cybersecurity News',
    duration: 'February 2023 - March 2023',
    summary: 'Developed a Discord bot that scrapes Reddit to provide real-time updates on cybersecurity news, data leaks, and emerging technologies.',
    briefDescription: 'Built a Discord bot using Python that leverages the Reddit API to pull the latest cybersecurity insights, data leaks, and major tech developments. The bot autonomously posts updates to a Discord server, providing users with real-time information on security trends.',
    fullDescription: `### Project Description and Impact

The Discord Tech Bot for Cybersecurity News is a Python-based bot designed to keep users informed on the latest in cybersecurity, including data leaks, major hacks, and emerging technological innovations. By scraping top Reddit feeds and subreddits dedicated to cybersecurity and tech, the bot identifies trending topics and pushes real-time updates directly to a Discord server.

The bot accesses the Reddit API to extract high-impact posts from specific subreddits, such as r/cybersecurity, r/netsec, and r/technology. It performs content filtering to ensure relevance, then autonomously formats and posts summaries to the designated Discord channels. The bot is a valuable resource for keeping users informed on the fast-evolving landscape of cybersecurity.

### What I Learned

This project provided hands-on experience with **Reddit API integration** and Discord bot development. I gained proficiency in **web scraping** and automated data extraction, particularly in navigating API limitations and content filtering to ensure data relevance. Additionally, I learned about deploying bots in live environments and managing bot permissions within Discord.

### How It Changed Me

Creating this bot deepened my understanding of cybersecurity trends and threat intelligence by immersing me in real-time industry updates. Building a tool that autonomously delivers critical information to a community enhanced my awareness of the importance of timely data access in cybersecurity, and strengthened my skills in API integration and automation.

### What Tech I Learned

- Python: Utilized for developing the bot’s logic, handling API requests, and processing text data from Reddit.
  
- Reddit API: Integrated to access and filter posts from cybersecurity-focused subreddits, implementing efficient data extraction strategies.
  
- Discord API: Enabled the bot to autonomously post updates in a Discord server, manage permissions, and interact with users.
  
- Data Filtering and Content Parsing: Developed algorithms to filter relevant posts and parse text data to ensure accuracy and relevance in automated updates.
  
- Automation: Built automated schedules for periodic data scraping and content updates to ensure real-time delivery.
`,
    media: discordMedia,
  },
];
