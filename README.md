<br/>

<p align="center">
  <img src="https://user-images.githubusercontent.com/45073703/177566625-9b84e793-4559-4475-ba54-8d3d5f4123d4.png" width="35%">

  <h4 align="center">Easy to use automatic portfolio builder for every GitHub user!</h4>

  
**Gitprofile** is an easy to use portfolio builder where you can create a portfolio page automatically by just providing your GitHub username. It is built using React.js on top of Vite. But it's not necessary to have knowledge on these to get you started. You can make your own copy with zero coding experience.

**Features:**

✓ [Easy to Setup](#-installation--setup)  
✓ [30 Themes](#themes)  
✓ [Google Analytics](#google-analytics)  
✓ [Hotjar](#hotjar)  
✓ [SEO](#seo)  
✓ [PWA](#pwa)  
✓ [Avatar and Bio](#avatar-and-bio)  
✓ [Social Links](#social-links)  
✓ [Skill Section](#skills)  
✓ [Experience Section](#experience)  
✓ [Certification Section](#certifications)  
✓ [Education Section](#education)  
✓ [Projects Section](#projects)  
✓ [Blog Posts Section](#blog-posts)

To view a live example, **[click here](https://thiendev.id.vn/)**.


## 🛠 Installation & Setup

There are three ways to use **Gitprofile**. Use any.

- [Forking this repo _(recommended)_](#forking-this-repo)
- [Setting up locally](#setting-up-locally)
- [Installing as package](#installing-as-package)

### Forking this repo

These instructions will get you a copy of the project and deploy your portfolio online using GitHub Pages!


- **Rename repo:**
  - If you want to host your portfolio at `https://<USERNAME>.github.io`, rename your forked repository to `username.github.io` in GitHub, where `username` is your GitHub username (or organization name).
  - If you want to host your portfolio at `https://<USERNAME>.github.io/<REPO_NAME>` (e.g. `https://<USERNAME>.github.io/portfolio`), rename your forked repository to `<REPO_NAME>` (e.g. `portfolio`) in GitHub.

- **Base Value:** Open `vite.config.js`, and change `base`'s value.

  - If you are deploying to `https://<USERNAME>.github.io`, set `base` to `'/'`.

  - If you are deploying to `https://<USERNAME>.github.io/<REPO_NAME>` (e.g. `https://<USERNAME>.github.io/portfolio`), then set `base` to `'/<REPO_NAME>/'` (e.g. `'/portfolio/'`).

  ```js
  // vite.config.js
  {
    base: '/',
    // ...
  }
  ```

Your portfolio website will be live shortly. Any time you commit a change to the **main** branch, the website will be automatically updated. If you face any issue viewing the website, double-check the `base` value in the `vite.config.js` file. Also, check if **Source** is set to **GitHub Actions** in **Settings** ➜ **Pages** ➜ **Build and deployment**.

If you wish to add a custom domain, no CNAME file is required. Just add it to your repo's **Settings** ➜ **Pages** ➜ **Custom domain**.

As this is a Vite project, you can also host your website to Netlify, Vercel, Heroku, or other popular services. Please refer to this [doc](https://vitejs.dev/guide/static-deploy.html) for a detailed deployment guide to other services. Also, if you are not deploying to GitHub pages, `base:` might need to be deleted from `vite.config.js`.

### Setting up locally

- Clone the project and change directory.

  ```shell
  git clone https://github.com/nthien204/github-profile
  cd git-profile
  ```

- Install dependencies.

  ```shell
  npm install
  ```

- Run dev server.

  ```shell
  npm run dev
  ```

- Finally, visit [`http://localhost:5173/git-profile/`](http://localhost:5173/git-profile/) from your browser.


Then, import the package, import and style and provide the config.

```js
import git-profile from '@nthien204/github-profile';
import '@nthien204/github-profile/dist/style.css';

function App() {
  return (
    <git-profile
      config={{
        github: {
          username: 'nthien204',
        },
      }}
    />
  );
}

export default App;
```

## 🎨 Customization

All the magic happens in the file `gitprofile.config.js`. Open it and modify it according to your preference.

```js
// gitprofile.config.js

const config = {
  github: {
    username: 'nthien204', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 8, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: '',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // format: userid/username
    website: '',
    skype: '',
    telegram: '',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: ['JavaScript', 'React.js'],
  experiences: [
    {
      company: 'Company Name',
      position: 'Position',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: 'Company Name',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
    },
  ],
  certifications: [
    {
      body: 'Certification Body Name',
      name: 'Sample Certification',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
  education: [
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2015',
      to: '2019',
    },
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2012',
      to: '2014',
    },
  ],
  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'nthien204', // to hide blog section, keep it empty
    limit: 5, // How many posts to display. Max is 10.
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
    defaultTheme: 'light',

    // Hides the theme change switch
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
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
  footer: `Copyright © 2023 John Doe`,
};
```

### Themes

There are 30 themes available that can be selected from the dropdown.

The default theme can be specified.

```js
// gitprofile.config.js
const config = {
  // ...
  themeConfig: {
    defaultTheme: 'light',
    // ...
  },
};
```

You can create your own custom theme by modifying these values. Theme `procyon` will have the custom styles.

```js
// gitprofile.config.js
const config = {
  // ...
  themeConfig: {
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
    // ...
  },
};
```

### Google Analytics

**Gitprofile** supports both GA3 and GA4. If you do not want to use Google Analytics, keep the `id` empty.

```js
// gitprofile.config.js
const config = {
  // ...
  googleAnalytics: {
    id: '',
  },
};
```

Besides tracking visitors, it will track `click events` on projects and blog posts, and send them to Google Analytics.

### Hotjar

**gitprofile** supports [hotjar](https://www.hotjar.com) to track visitor interaction and behavior. If you do not want to use Hotjar, keep the `id` empty.

```js
// gitprofile.config.js
const config = {
  // ...
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
};
```

### SEO

Meta tags will be auto-generated from configs dynamically. However, you can also manually add meta tags in `public/index.html`.

### Avatar and Bio

Your avatar and bio will be fetched from GitHub automatically.

### Social Links

You can link your social media services you're using, including LinkedIn, Twitter, Mastodon, Facebook, Instagram, YouTube, Dribbble, Behance, Medium, dev, Stack Overflow, Skype, Telegram, personal website, phone and email.

```js
// gitprofile.config.js
const config = {
  // ...
  social: {
    linkedin: '',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: '',
  },
};
```

### Skills

To showcase your skills provide them here.

```js
// gitprofile.config.js
const config = {
  // ...
  skills: ['JavaScript', 'React.js'],
};
```

Empty array will hide the skills section.

### Experience

Provide your job history in `experiences`.

```js
// gitprofile.config.js
const config = {
  // ...
  experiences: [
    {
      company: 'Company Name',
      position: 'Position',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: 'Company Name',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
    },
  ],
};
```

Empty array will hide the experience section.

### Education

Provide your education history in `education`.

```js
// gitprofile.config.js
const config = {
  // ...
  education: [
    {
      institution: 'Institution name 1',
      degree: 'Bachelor of Science',
      from: '2015',
      to: '2019',
    },
    {
      institution: 'Institution name 2',
      degree: 'Higher Secondary Certificate (HSC)',
      from: '2012',
      to: '2014',
    },
  ],
};
```

Empty array will hide the education section.

### Certifications

Provide your industry certifications in `certifications`.

```js
// gitprofile.config.js
const config = {
  // ...
  certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
};
```

Empty array will hide the certifications section.

### Projects

#### Github Projects

Your public repo from GitHub will be displayed in the `Github Projects` section automatically. You can limit how many projects do you want to be displayed. Also, you can hide forked or specific repo.

```js
// gitprofile.config.js
const config = {
  // ...
  github: {
    username: 'nthien204',
    sortBy: 'stars',
    limit: 8,
    exclude: {
      forks: false,
      projects: ['my-project1', 'my-project2'],
    },
  },
};
```

#### External Projects

In this section you can showcase your external/personal projects.

```js
// gitprofile.config.js
const config = {
  // ...
  externalProjects: [
    {
      title: 'Project Name',
      description: 'Description',
      link: 'https://example.com',
      imageUrl: 'https://via.placeholder.com/250x250',
    },
  ],
};
```

### Blog Posts

If you have [medium](https://medium.com) or [dev](https://dev.to) account, you can show your recent blog posts in here just by providing your medium/dev username. You can limit how many posts to display (Max is `10`).

```js
// gitprofile.config.js
const config = {
  // ...
  blog: {
    source: 'dev',
    username: 'nthien204',
    limit: 5,
  },
};
```
