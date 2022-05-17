module.exports = {
  title: 'Redux 中文官网',
  tagline: 'JS 应用的状态容器，提供可预测的状态管理',
  url: 'http://cn.redux.js.org',
  baseUrl: '/',
  favicon: 'img/favicon/favicon.ico',
  organizationName: 'camsong',
  projectName: 'redux-in-chinese',
  onBrokenLinks: 'warn',
  themeConfig: {
    image: 'img/redux-logo-landscape.png',
    metadatas: [{ name: 'twitter:card', content: 'summary' }],
    prism: {
      theme: require('./src/js/monokaiTheme.js')
    },
    colorMode: {
      disableSwitch: false
    },
    navbar: {
      title: 'Redux 中文官网',
      logo: {
        alt: 'Redux Logo',
        src: 'img/redux.svg'
      },
      items: [
        {
          label: '入门',
          to: 'introduction/getting-started',
          position: 'right'
        },
        {
          label: '教程',
          to: 'tutorials/essentials/part-1-overview-concepts',
          position: 'right'
        },
        { label: 'API', to: 'api/api-reference', position: 'right' },
        { label: '常见问题', to: 'faq', position: 'right' },
        {
          label: '最佳实践',
          to: '/style-guide/style-guide',
          position: 'right'
        },
        {
          label: '源码',
          href: 'https://www.github.com/camsong/redux-in-chinese',
          position: 'right'
        },
        {
          label: '纠错',
          to: 'https://github.com/camsong/redux-in-chinese/issues',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: '入门',
              to: 'introduction/getting-started'
            },
            {
              label: '教程',
              to: 'tutorials/essentials/part-1-overview-concepts'
            },
            {
              label: '常见问题',
              to: 'faq'
            },
            {
              label: 'API 文档',
              to: 'api/api-reference'
            }
          ]
        },
        {
          title: '社区',
          items: [
            {
              label: 'Reactiflux Discord',
              href: 'https://discord.gg/0ZcbPKXt5bZ6au5t'
            },
            {
              label: 'Stack Overflow',
              href: 'http://stackoverflow.com/questions/tagged/redux'
            },
            {
              label: 'Feedback',
              to: 'introduction/getting-started#help-and-discussion'
            }
          ]
        },
        {
          title: '更多',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/camsong/redux-in-chinese'
            },
            {
              html: `
                <a href="https://www.netlify.com">
                  <img
                    src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg"
                    alt="Deploys by Netlify"
                  />
                </a>
              `
            }
          ]
        }
      ],
      logo: {
        alt: 'Redux Logo',
        src: 'img/redux.svg',
        href: 'https://redux.js.org/'
      },
      copyright: `Copyright © 2015–${new Date().getFullYear()} Dan Abramov and Cam Song.`
    },
    algolia: {
      apiKey: '518c6e3c629811d8daa1d21dc8bcfa37',
      indexName: 'redux',
      algoliaOptions: {}
    },
    googleAnalytics: {
      trackingID: 'UA-66122997-1'
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: '../docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js')
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
}
