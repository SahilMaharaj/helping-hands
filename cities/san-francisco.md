---
title: San Francisco
desc: This is the San Francisco city of the Vue Remark test.
---

## Welcome to San Francisco
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.



<div class="company-card">
    <ul>
        <li v-for="edge in $static.locations.belongsTo.edges" :key="edge.node.id">
            <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
        </li>
    </ul>
</div>

<static-query>
query {
  locations(id: "San Francisco") {
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