module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Cities', // Required
        baseDir: './cities', // Where .md files are located
        pathPrefix: '/cities', // Add route prefix. Optional
        template: './src/templates/Cities.vue', // Optional
      }
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Organisations', // Required
        baseDir: './organisations', // Where .md files are located
        pathPrefix: '/organisations', // Add route prefix. Optional
        template: './src/templates/Organisations.vue', // Optional        
        refs: {
          locations: {
            typeName: 'Locations',
            create: true
          }
        }        
      }
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Team', // Required
        baseDir: './team', // Where .md files are located
        pathPrefix: '/team-members', // Add route prefix. Optional
        template: './src/templates/Team.vue', // Optional
      }
    },
    {
      use: 'gridsome-plugin-flexsearch',
      options: {
        searchFields: ['title', 'desc'],
        collections: [
          {
            typeName: 'Cities',
            indexName: 'Cities',
            fields: ['title', 'desc']
          },
          {
            typeName: 'Organisations',
            indexName: 'Organisations',
            fields: ['title', 'desc']
          }
        ]      
      }
    }
  ]
}
