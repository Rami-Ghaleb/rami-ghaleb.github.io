import awsMedia from '../images/aws-media.jpeg';
import googleMedia from '../images/Google.webp';
import raytheonMedia from '../images/rtx logo.png';
import collinsMedia from '../images/collins aerospace.webp';
import seiMedia from '../images/lock3.png';
import humeMedia from '../images/vt_2-transformed.png';
import nasaMedia from '../images/NASA 1.webp';
import cavGPTMedia from '../images/baiMedia.png';
import prizePicksMedia from '../images/prizepicksMedia.jpg';
import invisibleMouseMedia from '../images/mouse.png';
import scoreMyHomeMedia from '../images/scoremyhomeMedia.jpg';

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
    summary: 'Participated in a mentorship program focused on research methodologies, statistical modeling, and advanced AI/ML techniques.',
    briefDescription: 'As a Research Fellow in the Google CS Research Mentorship Program, I collaborated with researchers and students from top universities to tackle key computer science challenges. I developed an LLM using Hugging Face and Mixtral, training it on emerging technologies in AI/ML. This project emphasized both theoretical understanding and practical applications of large language models in various tech domains.',
    fullDescription: `### Role & Responsibilities

As a Research Fellow in Google’s CS Research Mentorship Program, I explored advanced research methodologies, partnering with researchers and peers from leading universities. I focused on statistical modeling frameworks and developed solutions to address complex computer science problems.

### LLM Development & Emerging Technologies

My main project involved creating a large language model (LLM) in collaboration with Google researchers. Using Hugging Face and Mixtral, I trained the LLM on emerging AI/ML technologies, emphasizing practical applications like stable diffusion and adaptive learning models. This experience allowed me to work with cutting-edge AI frameworks, enhancing the model’s capability to handle diverse datasets and provide accurate outputs.

### Research Methodologies & Collaboration

The program provided me with a solid foundation in advanced research techniques, from designing experiments to analyzing complex datasets. Working with students and researchers from top institutions exposed me to a variety of perspectives, helping me address critical issues in computer science domains effectively.

### Impact & Personal Growth

This experience deepened my understanding of AI/ML advancements and their real-world applications. I improved my skills in LLM development, statistical analysis, and collaborative research, gaining confidence in tackling complex tech challenges alongside industry experts.`,
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
    title: 'CavGPT Mobile App',
    duration: 'Aug 2023 — Present',
    summary: 'Developed a mobile app integrating UVA class scheduling and event information with an AI-driven chatbot.',
    briefDescription: 'Built an AI-powered mobile app using React Native and OpenAI API to help UVA students streamline their course enrollment process. The app integrates with class schedules and provides personalized recommendations.',
    fullDescription: `### Project Description and Impact

CavGPT is an AI-powered mobile application specifically designed to assist students at the University of Virginia (UVA) in streamlining their course enrollment process. The app integrates multiple UVA-proprietary services, including access to real-time class schedules, course availability, and ratings from CourseForum. By leveraging these resources, CavGPT provides students with personalized course recommendations that align with their academic goals and interests.

Built with React Native, the app ensures cross-platform compatibility, allowing both iOS and Android users to benefit from its features. The intuitive chatbot interface, powered by the OpenAI API, enables students to interact with the app conversationally, asking questions and receiving immediate, tailored responses.

During its closed beta phase, CavGPT was tested by over 100 students who provided invaluable feedback. The majority praised the app for its user-friendly design and the convenience it brought to the often complicated course selection process. By simplifying access to essential information and providing intelligent recommendations, CavGPT significantly enhanced the student experience at UVA.

### What I Learned

Throughout this project, I gained extensive experience in managing and leading a diverse development team within an Agile framework. Coordinating a team of 12 developers required effective communication, task delegation, and conflict resolution skills. I honed my ability to prioritize tasks and ensure that project milestones were met on schedule.

From a technical standpoint, I deepened my expertise in mobile application development using React Native, exploring advanced features to enhance app performance and user experience. I also expanded my knowledge of backend development using Python, particularly in integrating with the OpenAI API to create a responsive and intelligent chatbot. This project allowed me to understand the complexities of integrating multiple APIs and ensuring seamless data flow between the frontend and backend systems.

### How It Changed Me

Working on CavGPT was a transformative experience that highlighted the profound impact artificial intelligence can have on education. It underscored the importance of designing solutions that are centered around the user's needs and preferences. Leading a sizable team taught me valuable lessons in leadership, such as the importance of empathy, adaptability, and proactive problem-solving. The challenges we faced and overcame boosted my confidence in managing large-scale projects and reinforced my commitment to continuous learning and improvement.

### What Tech I Learned

- React Native: Utilized for building a performant, cross-platform mobile application compatible with both iOS and Android devices.

- OpenAI API: Integrated to develop an intelligent chatbot capable of understanding and responding to complex student queries about courses.

- Python: Employed in backend development to handle data processing, API integrations, and server-side logic.

- Agile Methodology: Applied to manage the development process, facilitating iterative progress, team collaboration, and adaptability to change.
        `,
    media: cavGPTMedia,
  },
  {
    type: 'project',
    title: 'PrizePicks Bot',
    duration: 'Feb 2024 — Present',
    summary: 'Created an automated bot for PrizePicks betting, generating over $35,000 in revenue for users.',
    briefDescription: 'Developed an automation tool using Python and Selenium to streamline betting for PrizePicks, integrating OpenAI and Discord APIs. The bot improved decision-making and increased revenue for users.',
    fullDescription: `### Project Description and Impact

The PrizePicks Bot is an advanced automation tool that revolutionizes the way users engage with the PrizePicks betting platform. By leveraging Python and Selenium, I created a bot that automates the entire betting process, from logging in to placing bets, thereby eliminating the need for manual input. The bot operates in real-time, analyzing dynamic odds and making instantaneous decisions to optimize betting strategies.

To enhance its predictive capabilities, the bot integrates with the OpenAI API, utilizing machine learning algorithms to forecast optimal bet sizes and potential outcomes. It also connects with the Discord API to provide users with immediate notifications and updates. Users receive alerts via email and SMS, keeping them informed about betting activities and results.

During the beta testing phase with 10 users, the bot demonstrated remarkable success by generating over $35,000 in revenue. This significant achievement not only validated the effectiveness of the bot but also highlighted its potential for scalability in the betting market.

### What I Learned

Developing the PrizePicks Bot provided me with deep insights into automation technologies and their application in high-stakes environments like sports betting. I mastered advanced techniques in Python programming and Selenium for web automation and scraping. The project also required extensive data analysis skills to interpret betting odds and trends effectively.

Additionally, integrating machine learning models into the bot's decision-making process enhanced my understanding of AI in practical applications. I learned how to handle real-time data streams and ensure that the bot could adapt to rapidly changing information.

### How It Changed Me

This project broadened my perspective on the transformative power of data and automation in traditional industries. It highlighted the importance of precision and reliability in automated systems, especially when financial outcomes are at stake. The experience reinforced my interest in pursuing projects that merge technology with innovative solutions to real-world problems.

### What Tech I Learned

- Python & Selenium: Utilized for developing automation scripts and performing web scraping tasks essential for real-time data collection.

- OpenAI API: Integrated to enhance the bot's predictive analytics, enabling smarter betting decisions based on AI-generated insights.

- Discord API: Used to facilitate seamless communication with users, providing timely notifications and updates on betting activities.

- Web Scraping & Data Analysis: Applied advanced techniques to monitor real-time betting odds, analyze trends, and adjust strategies accordingly.
        `,
    media: prizePicksMedia,
  },
  {
    type: 'project',
    title: 'Invisible Mouse',
    duration: 'Jun 2023 — Aug 2023',
    summary: 'Developed a real-time hand-tracking and gesture recognition system to replace traditional mouse input.',
    briefDescription: 'Built a real-time hand-tracking system using Python, OpenCV, and machine learning to control a computer’s mouse pointer with gestures, improving accessibility for individuals with physical disabilities.',
    fullDescription: `### Project Description and Impact

Invisible Mouse is a cutting-edge, real-time hand-tracking and gesture recognition system that enables users to control a computer's mouse pointer using only their hand movements, eliminating the need for a physical mouse. Developed using Python, OpenCV, and machine learning algorithms, the system captures live video feed from a standard webcam, processes the images to detect and track hand gestures, and translates these gestures into mouse actions such as moving the cursor, clicking, scrolling, and dragging.

The project aimed to explore new avenues in touchless human-computer interaction, with a particular focus on enhancing accessibility for individuals with physical disabilities who may find traditional input devices challenging to use. By providing an alternative method of interaction, Invisible Mouse has the potential to make computer usage more inclusive and user-friendly.

The system incorporates advanced image processing techniques to accurately detect hand landmarks and interpret various gestures in real-time, ensuring smooth and responsive control. Its implementation demonstrates the practical applications of computer vision and machine learning in creating innovative solutions that address real-world problems.

### What I Learned

Throughout this project, I delved deep into the field of computer vision, gaining hands-on experience with OpenCV for image and video processing. I learned how to implement advanced algorithms for hand detection and tracking, including background subtraction, contour detection, and feature extraction. Developing machine learning models for gesture classification enhanced my understanding of supervised learning techniques and neural networks.

I also explored the integration of the system with the operating system's input controls using PyAutoGUI, which allowed me to translate gesture recognition outputs into actual mouse movements and clicks. This project sharpened my problem-solving skills as I navigated challenges related to real-time processing and system performance optimization.

### How It Changed Me

Working on Invisible Mouse transformed my perspective on the possibilities of human-computer interaction. It highlighted the profound impact that technology can have on accessibility and inclusivity. The project inspired me to consider how emerging technologies like computer vision and machine learning can be harnessed to create tools that improve people's lives, particularly for those facing physical challenges.

### What Tech I Learned

- Python & OpenCV: Employed for developing the computer vision components of the project, including real-time image processing and gesture recognition.

- PyAutoGUI: Used to automate mouse movements and integrate gesture outputs with the operating system's input controls.

- Machine Learning: Applied to build and train models for accurate and responsive gesture classification and tracking, utilizing algorithms suitable for real-time applications.
        `,
    media: invisibleMouseMedia,
  },
  {
    type: 'project',
    title: 'ScoreMyHome',
    duration: 'Sep 2023 - Present',
    summary: 'Developed a machine learning-based web app that scores homes based on environmental and educational factors.',
    briefDescription: 'Created ScoreMyHome, a machine learning-based web app using Google APIs to evaluate homes on factors like solar potential and access to libraries, helping users make data-driven decisions when purchasing homes.',
    fullDescription: `### Project Description and Impact

ScoreMyHome is an innovative web application that utilizes machine learning to provide comprehensive evaluations of residential properties. The app scores homes based on various critical factors, including solar potential, proximity to public libraries, environmental impact, educational resources, and more. By aggregating and analyzing data from multiple sources, ScoreMyHome offers users valuable insights to make informed decisions when purchasing or renting a home.

The application leverages several Google APIs, such as Google Maps API for location data, Google Places API for nearby amenities, and Google Solar API to assess the solar energy potential of a property. Custom scoring algorithms process this data to generate an overall score for each home, highlighting its strengths and potential drawbacks.

To enhance its utility, ScoreMyHome includes a feature that scrapes home listings from popular real estate websites using Selenium. This allows users to explore alternative properties that may better meet their criteria based on the scoring metrics. By presenting this information in a user-friendly interface, the app empowers users to consider environmental and educational factors alongside traditional considerations like price and size.

### What I Learned

Developing ScoreMyHome provided me with valuable experience in integrating machine learning models with real-world applications. I learned how to effectively utilize various Google APIs to collect and process large datasets in real-time. The project deepened my understanding of data aggregation, cleaning, and analysis, as well as the importance of creating efficient algorithms to handle complex computations.

I also gained proficiency in web scraping techniques using Selenium, enabling the app to dynamically gather up-to-date property listings. This project enhanced my skills in full-stack development, from backend data processing to frontend user interface design.

### How It Changed Me

Working on ScoreMyHome underscored the significance of environmental sustainability and access to educational resources in the context of residential living. It broadened my appreciation for how technology can assist individuals in making choices that positively impact their quality of life and the environment. The project inspired me to continue exploring ways to integrate social and environmental considerations into technological solutions.

### What Tech I Learned

- Machine Learning: Applied to develop predictive models and scoring algorithms that evaluate various attributes of homes.

- Google APIs: Utilized extensively to gather real-time data on locations, amenities, and environmental factors crucial to the home's assessment.

- Selenium: Implemented for web scraping to retrieve the latest home listings and ensure the app's recommendations are current and relevant.
        `,
    media: scoreMyHomeMedia,
  }
];
