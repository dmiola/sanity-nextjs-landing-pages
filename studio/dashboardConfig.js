export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '62b5d98ed632201914a4f11d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-1phw17f8',
                  apiId: '26736dcd-a309-436b-abaa-9d3bca2344db'
                },
                {
                  buildHookId: '62b5d98f5c7b2b1749729bbd',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ni6gupvj',
                  apiId: '7a7c7f25-6764-4744-80d1-544b23592d63'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dmiola/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ni6gupvj.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
