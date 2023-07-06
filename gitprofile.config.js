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
    website: '',
    phone: '0368074880',
    email: 'thien.hn2512@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java',
    'CSharp',
    'C++',
    'Python',
    'JavaScript',
    'React.js',
    'Node.js',
    'Next.js',
    'MySQL',
    'Git',
    'Docker',
    'PHPUnit',
    'CSS',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'F8 - Học lập trình để đi làm',
      position: 'Web Developer',
      from: 'September 2019',
      to: 'Present',
      companyLink: 'https://fullstack.edu.vn/',
    },
    {
      company: 'Teck Share',
      position: 'Founder - CEO Teck Share',
      from: 'July 2013',
      to: 'August 2021',
      companyLink: 'ntdev.online',
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
      from: '2018',
      to: '2022',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Github Profile',
      description:
        'Nguyễn Ngọc Thiện',
      imageUrl: 'https://avatars.githubusercontent.com/u/120099415?v=4',
      link: 'https://thiendev.id.vn',
    },
    {
      title: 'Portfolio Personal',
      description:
        'Nguyễn Ngọc Thiện',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://ntdev.id.vn',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'nthien204', // to hide blog section, keep it empty
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
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      // 'cupcake',
      // 'bumblebee',
      'emerald',
      // 'corporate',
      'synthwave',
      // 'retro',
      // 'cyberpunk',
      'valentine',
      'halloween',
      // 'garden',
      'forest',
      'aqua',
      // 'lofi',
      // 'pastel',
      // 'fantasy',
      // 'wireframe',
      // 'black',
      'luxury',
      'dracula',
      // 'cmyk',
      // 'autumn',
      // 'business',
      'acid',
      // 'lemonade',
      'night',
      // 'coffee',
      'winter',
      // 'procyon',
    ],

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
      class="text-primary" href="https://github.com/nthien204/github-profile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
