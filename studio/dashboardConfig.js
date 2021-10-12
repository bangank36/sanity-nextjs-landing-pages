export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6165109d202d92825f1ce491',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-hgo5uuz7',
                  apiId: 'ddce53a4-2079-4cc4-835d-1cfa5b36b4f7'
                },
                {
                  buildHookId: '6165109df6388e76caccd699',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-z33acm2a',
                  apiId: 'a769b383-7777-4d86-bb8a-30b6753bf069'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bangank36/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-z33acm2a.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
