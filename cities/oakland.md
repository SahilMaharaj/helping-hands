---
title: Oakland
desc: This is the Oakland city of the Vue Remark test.
---

## What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

<div class="company-card">
    <ul>
        <li v-for="edge in $static.locations.belongsTo.edges" :key="edge.node.id">
            <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
        </li>
    </ul>
</div>

<static-query>
query {
  locations(id: "Oakland") {
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