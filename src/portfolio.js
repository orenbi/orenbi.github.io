import emoji from 'react-easy-emoji'

const greeting = {
    username: 'אורן בן ישי',
    title: 'הנדסאי אלטרוניקה וטכנאי מחשבים',
    subTitle: emoji('ב-5 שנים האחרונות עסקתי בתיקון מחשבים נייחים וניידים ללקוחות פרטיים ועסקים קטנים. אני זמין להגעה לבית הלקוח באזור כפר-סבא והשרון. אשמח לתת יעוץ ואבחון ראשוני טלפוני 🚀'),
    resumeLink: 'https://drive.google.com/'
}

const socialMediaLinks = {
    gmail: 'orenbi7@gmail.com',
    facebook: 'https://www.facebook.com/oren.ishay'
}

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

const techStack = {
    viewSkillBars: true,
    experience: [
        {
            Stack: 'תחזוקה ותיקון של מחשבים מכל הסוגים',
            progressPercentage: '95%'
        },
        {
            Stack: 'פתרון בעיות מורכבות',
            progressPercentage: '90%'
        },
        {
            Stack: 'תכנון רשתות',
            progressPercentage: '85%'
        },

    ]
}

const contactInfo = {
    title: emoji('אני זמין בכל שאלה ☎️'),
    subtitle: '',
    number: '+972-54xxxxxxx',
    email_address: 'orenbi7@gmail.com'
}


// openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, twitterDetails
export { greeting, socialMediaLinks, skillsSection, techStack, contactInfo }
