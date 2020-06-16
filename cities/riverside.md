---
title: Riverside
desc: This is the Riverside city of the Vue Remark test.
---


# Welcome to Riverside
See all organisations in this area below:


<div class="company-card">
    <ul>
        <li v-for="edge in $static.locations.belongsTo.edges" :key="edge.node.id">
            <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
        </li>
    </ul>
</div>


<static-query>
query {
  locations(id: "Riverside") {
    title
    	belongsTo {
        edges {
          node {
            ... on Organisations {
              title
              path
            }
          }
        }
      }
  }
}
</static-query>