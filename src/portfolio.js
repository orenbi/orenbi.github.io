/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from 'react-easy-emoji'

const greeting = {
    /* Your Summary And Greeting Section */
    username: 'אורן בן ישי',
    title: 'הנדסאי אלטרוניקה וטכנאי מחשבים',
    subTitle: emoji('עוד טקסט 🚀'),
    resumeLink: 'https://drive.google.com/'
}

// Your Social Media Link

const socialMediaLinks = {

    github: '',
    linkedin: '',
    gmail: 'orenbi7@gmail.com',
    facebook: 'https://www.facebook.com/oren.ishay'
    // Instagram and Twitter are also supported in the links!
}

// Your Skills Section

const skillsSection = {
    title: 'מחירון 2020',
    subTitle: '',
    skills: [
        emoji('⚡ ניקיון וירוסים במחשב נייד או נייח - 200 שח'),
        emoji('⚡ תיקון מערכת הפעלה במחשב נייד או נייח - 250 שח'),
        emoji('⚡ החלפת כונן במחשב נייד או נייח - 550 שח'),
        emoji('⚡ תיקון שקע טעינה במחשב נייד - 400 שח'),
        emoji('⚡ החלפת ספק כוח במחשב נייח - 350 שח'),
        emoji('⚡ החלפת מאוורר במחשב נייד - 350 שח'),
        emoji('⚡ תיקון בעיות הדפסה - 250 שח'),
        emoji('⚡ הגדלת טווח רשת אלחוטית - 250 שח'),
        emoji('⚡ תיקון בעיות ברשת אלחוטית - 250 שח'),
        emoji('⚡ התקנת רשת אלחוטית חדשה - 200 שח'),
    ],

    /* Make Sure You include correct Font Awesome Classname to view your icon
    https://fontawesome.com/icons?d=gallery */

    softwareSkills: [
        {
            skillName: '',
            fontAwesomeClassname: 'fas fa-desktop'
        },
        {
            skillName: '',
            fontAwesomeClassname: 'fas fa-wifi'
        },
        {
            skillName: '',
            fontAwesomeClassname: 'fas fa-laptop'
        },
        {
            skillName: '',
            fontAwesomeClassname: 'fas fa-print'
        },
        {
            skillName: '',
            fontAwesomeClassname: 'fas fa-network-wired'
        },
        {
            skillName: '',
            fontAwesomeClassname: 'fas fa-plug'
        },
        {
            skillName: '',
            fontAwesomeClassname: 'far fa-keyboard'
        }
    ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
    viewSkillBars: true, //Set it to true to show Proficiency Section
    experience: [
        {
            Stack: 'תחזוקה ותיקון של מחשבים מכל הסוגים',
            progressPercentage: '95%'
        },
        {
            Stack: 'פתרון בעיות מורכבות',  //Insert stack or technology you have experience in
            progressPercentage: '90%'  //Insert relative proficiency in percentage
        },
        {
            Stack: 'תכנון רשתות',
            progressPercentage: '85%'
        },

    ]
}

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

// Your Achievement Section Include Your Certification Talks and More

const contactInfo = {
    title: emoji('אני זמין בכל שאלה ☎️'),
    subtitle: '',
    number: '+972-54xxxxxxx',
    email_address: 'orenbi7@gmail.com'
}

// twitterDetails
// openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection,
export { greeting, socialMediaLinks, skillsSection, techStack, contactInfo }
