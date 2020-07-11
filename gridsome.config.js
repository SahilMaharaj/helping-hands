// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

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
        refs: {
          locations: {
            typeName: 'Locations',
            create: true
          }
        },
        pathPrefix: '/organisations', // Add route prefix. Optional
        template: './src/templates/Organisations.vue', // Optional
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
          }          
        ]      
      }
    }
  ]
}
