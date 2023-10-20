import IMAGE_HYGEE from 'src/assets/images/hygge-event-project.png'
import IMAGE_SHOPEE from 'src/assets/images/shopee-project.png'
import IMAGE_ARTICLE from 'src/assets/images/articles-project.png'

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
        technologies: [
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
          'Unit Test',
          'Modeling components with story books'
        ],
        functions: []
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
        technologies: [
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
        functions: []
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
        technologies: [
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
        functions: []
      }
    ]
  }
]
