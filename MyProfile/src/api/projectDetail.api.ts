import IMAGE_HYGEE from 'src/assets/images/hygge-event-project.png'
import IMAGE_SHOPEE from 'src/assets/images/shopee-project.png'
import IMAGE_ARTICLE from 'src/assets/images/articles-project.png'
import IMAGE_NEWS_WEB from 'src/assets/images/news-web.png'
import IMAGE_SELFTAUGHT from 'src/assets/images/selftaught-layout.png'

export const projectDetailApi = [
  {
    name: 'project shopee',
    path: '/project-shopee',
    image: `${IMAGE_SHOPEE}`,
    projectDetailContent: [
      {
        title: 'Shopee',
        linkWeb: 'https://shopee-clone-woad.vercel.app/',
        linkGithub: 'https://github.com/NguyenUyen-ReactJs2206/Clone_Shopee',
        technologiesFE: [
          'Framework: React Js + Type Script.',
          'Build tool: Vite.',
          'UI / CSS Library: Tailwindcss + HeadlessUI.',
          'State Management: React Query for async state and React Context for normal state.',
          'Form Management: React Hook Form and validation with Yup',
          'Router: React Router',
          'API: Rest API - based on the provided server',
          'Multi-language support with React.i18next',
          'Used React Toastify to display the message and the error',
          'SEO support with React Helmet',
          'Unit Test'
        ],
        technologiesBE: [],
        functions: [
          'Manage authentication with JWT (automatic token refresh applied)',
          'Use the Yup and React Hook Form to validate the form.',
          'Smart Pagination, Filter, and Product SearchIncorporate state into the URL to easily share results across devices.',
          'Asynchronous state management with React Query.',
          'Code Splitting',
          'Improve performance by optimizing build file size analysis.',
          'SEO with React HelmetSeparate the private and public routes.'
        ],
        conclude:
          'Thanks to this project, it helps me understand more about logic in Website E-commerce, better understand how to manage state with React Query and many other technologies are used in the project.'
      }
    ]
  },
  {
    name: 'project event',
    path: '/project-event',
    image: `${IMAGE_HYGEE}`,
    projectDetailContent: [
      {
        title: 'Hygee Event',
        linkWeb: 'https://hygge-event.vercel.app/',
        linkGithub: 'https://github.com/NguyenUyen-ReactJs2206/Hygge_Event',
        technologiesFE: [
          'Framework: React Js + Type Script.',
          'Build tool: Vite.',
          'UI / CSS Library: Tailwindcss and SASS',
          'State Management: React Context state.',
          'Form Management: React Hook Form',
          'Router: React Router',
          'Mockup API',
          'Multi-language support with React.i18next',
          'Used React Toastify to display the message and the error',
          'SEO support with React Helmet'
        ],
        technologiesBE: [],
        functions: [
          'Build responsive websites for all screen types using Tailwind css.',
          'Custom components to optimize performance.',
          'Loading effect when turning pages',
          'Use i18next for multilingual conversion for the website.',
          'Synchronize urls for pages, user-friendly.',
          'Receive email feedback from users and send automatic thank you letters to them.'
        ],
        conclude:
          'This is a project I wrote entirely myself through the design of an event company. This project helps me gain a deeper understanding of how to write css using Tailwind Css that integrates responsive for many devices. At the same time, create a fully functional static website to introduce your business.'
      }
    ]
  },
  {
    name: 'project article',
    path: '/project-article',
    image: `${IMAGE_ARTICLE}`,
    projectDetailContent: [
      {
        title: 'Article',
        linkWeb: 'https://articles-app-seven.vercel.app/',
        linkGithub: 'https://github.com/NguyenUyen-ReactJs2206/Blog_App',
        technologiesFE: [
          'Framework: React Js + Type Script.',
          'Build tool: Vite.',
          'UI / CSS Library: Tailwindcss.',
          'State Management: React Redux Toolkit combined with AsyncThunk for async state and React Context for normal state.',
          'Form Management: React Hook Form and validation with Yup',
          'Router: React Router',
          'API: Rest API - based on the provided server',
          'Multi-language support with React.i18next',
          'Used React Toastify to display the message and the error',
          'SEO support with React Helmet'
        ],
        technologiesBE: [],
        functions: [
          'Manage authentication with JWT (automatic token refresh applied).',
          'Get list article and pagination.',
          'Asynchronous state management with Redux Toolkit.',
          'Function to favorite articles and call favorite articles.',
          'CRUD articles.',
          'User profile editing function.',
          'Synchronize urls for pages, user-friendly.'
        ],
        conclude:
          'This is the main project I did to better understand how reduxToolkit works and learn how to handle asynchronous tasks in Redux using createAsyncThunk.'
      }
    ]
  },
  {
    name: 'project social network',
    path: '/project-social-network',
    //`${IMAGE_SOCIAL_NETWORK}`
    image: '',
    projectDetailContent: [
      {
        title: 'Social Network',
        linkWeb: '',
        linkGithub: ': https://github.com/NguyenUyen-ReactJs2206/SocialNetwork',
        technologiesFE: [
          'Framework: React Js',
          'Build tool: Create React App.',
          'UI / CSS Library: Material UI.',
          'State Management: Redux Toolkit and Redux Persist.',
          'Form Management: Formik and validation with Yup',
          'Router: React Router',
          'Call API: Fetch API.',
          'API: Rest API with self-created server.'
        ],
        technologiesBE: [
          'Framework: Node Js (Express Js).',
          'Build tool: Webpack.',
          'Database: MongoDB.',
          'Router in Express Js.',
          'Encrypt the password with Bcript.',
          'Authenticate user with JsonwebToken.',
          'Manage file storage and uploads in MongoDB using Multer.'
        ],
        functions: [
          'Manage authentication with JWT.',
          'Dark mode for app.',
          'Create articles.',
          'Like articles.',
          'Add friends.'
        ],
        conclude:
          'This is a project that I researched and corrected errors along the way to better understand the combination of Back-end and Front-end.'
      }
    ]
  },
  {
    name: 'project news website',
    path: '/project-news-website',
    image: `${IMAGE_NEWS_WEB}`,
    projectDetailContent: [
      {
        title: 'NEWS WEBSITE',
        linkWeb: 'https://news-web-five.vercel.app/',
        linkGithub: 'https://github.com/NguyenUyen-ReactJs2206/News_Web',
        technologiesFE: [],
        technologiesBE: [],
        functions: ['This is a fully functional project of a news website.'],
        conclude:
          'This is a project I just learned with full functionality of a news website. The website uses Bootstrap and pure JS to help me become more proficient in Js as well as the logic processing process to create a complete website.'
      }
    ]
  },
  {
    name: 'selftaught layout',
    path: '/selftaught-layout',
    image: `${IMAGE_SELFTAUGHT}`,
    projectDetailContent: [
      {
        title: 'SELFTAUGHT LAYOUT',
        linkWeb: 'https://selftaught-one.vercel.app/',
        linkGithub: 'https://github.com/NguyenUyen-ReactJs2206/Landing_Page_Responsive/tree/main/SELFTAUGHT',
        technologiesFE: ['Semantic HTML, CSS, SCSS'],
        technologiesBE: [],
        functions: ['This is just a normal layout.'],
        conclude: 'This is a project i write in my free time to improve my CSS, SCSS writing skills.'
      }
    ]
  }
]
