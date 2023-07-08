// gitprofile.config.js

const config = {
    github: {
        username: 'nthien204', // Your GitHub org/user name. (Required)
        sortBy: 'stars', // stars | updated
        limit: 10, // How many projects to display.
        exclude: {
            forks: false, // Forked projects will not be displayed if set to true.
            projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
        },
    },
    social: {
        linkedin: 'thien-nguyen-767894259',
        twitter: '',
        mastodon: '',
        facebook: 'thien.hn2512',
        instagram: '',
        youtube: '', // example: 'pewdiepie'
        dribbble: '',
        behance: '',
        medium: '',
        dev: 'nthien204',
        stackoverflow: '', // example: '1/jeff-atwood'
        skype: '',
        telegram: '',
        website: 'https://ntdev.online',
        phone: '0368074880',
        email: 'thien.hn2512@gmail.com',
    },
    resume: {
        fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
    },
    skills: ['Java', 'CSharp', 'C++', 'Python', 'JavaScript', 'React.js', 'Next.js', 'MySQL', 'Git', 'CSS', 'Tailwind'],
    experiences: [
        {
            company: 'Teck Share',
            position: 'Founder - CEO Teck Share',
            from: 'July 2023',
            to: 'Present',
            companyLink: 'https://ntdev.online/',
        },
        {
            company: 'F8 - Học lập trình để đi làm',
            position: 'Web Developer',
            from: 'September 2019',
            to: 'Present',
            companyLink: 'https://fullstack.edu.vn/',
        },
    ],
    // certifications: [
    //   {
    //     name: 'Lorem ipsum',
    //     body: 'Lorem ipsum dolor sit amet',
    //     year: 'March 2022',
    //     link: 'https://example.com'
    //   },
    // ],
    education: [
        {
            institution: 'Trường Đại học Giao thông vận tải',
            degree: 'Đại học',
            from: '2022',
            to: '2027',
        },
        {
            institution: 'THPT Lương Ngọc Quyến',
            degree: 'THPT',
            from: '2019',
            to: '2022',
        },
    ],

    // To hide the `My Projects` section, keep it empty.
    externalProjects: [
        {
            title: 'Teck Share',
            description: 'Chia sẻ kiến thức IT, AI',
            imageUrl: '/res/no-img-250x250.png',
            link: 'https://ntdev.online',
        },
        {
            title: 'Github Profile',
            description: 'Nguyễn Ngọc Thiện',
            imageUrl: 'https://avatars.githubusercontent.com/u/120099415?v=4',
            link: 'https://thiendev.id.vn',
        },
        {
            title: 'Portfolio Personal',
            description: 'Nguyễn Ngọc Thiện',
            imageUrl: '/res/logo-portfolio-250.jpg',
            link: 'https://ntdev.id.vn',
        },
    ],
    // Display blog posts from your medium or dev account. (Optional)
    blog: {
        source: 'dev', // medium | dev
        username: 'thienhn204', // to hide blog section, keep it empty
        limit: 2, // How many posts to display. Max is 10.
    },
    googleAnalytics: {
        id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
    },
    // Track visitor interaction and behavior. https://www.hotjar.com
    hotjar: {
        id: '',
        snippetVersion: 6,
    },
    themeConfig: {
        defaultTheme: 'dark',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: false,

        // Should use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded defaultTheme
        respectPrefersColorScheme: false,

        // Hide the ring in Profile picture
        hideAvatarRing: false,

        // Available themes. To remove any theme, exclude from here.
        themes: ['dark', 'night', 'synthwave', 'light', 'emerald', 'winter'],

        // Custom theme
        customTheme: {
            primary: '#fc055b',
            secondary: '#219aaf',
            accent: '#e8d03a',
            neutral: '#2A2730',
            'base-100': '#E3E3ED',
            '--rounded-box': '3rem',
            '--rounded-btn': '3rem',
        },
    },

    // Optional Footer. Supports plain text or HTML.
    footer: `Made with <a 
      class="text-primary" href="https://github.com/nthien204"
      target="_blank"
      rel="noreferrer"
    >NTDEV</a> and ❤️ - 
    Copyright ©️ 2023 <a 
    class="text-primary" href="https://github.com/nthien204"
    target="_blank"
    rel="noreferrer"
  >NTDEV</a>`,
};

export default config;
