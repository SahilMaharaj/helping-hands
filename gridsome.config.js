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
  ]
}
