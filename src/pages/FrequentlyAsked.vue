<template>
    <Layout>
        <div>
            <h1>FAQ</h1>
            <div id="container">
                <TestAccordion question="Question 1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio mollitia consequuntur accusamus? Natus modi quaerat, rerum tempore aut cum qui, totam distinctio debitis corrupti optio impedit adipisci facere, repudiandae quo.
                </TestAccordion>
                <TestAccordion question="Question 2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio mollitia consequuntur accusamus? Natus modi quaerat, rerum tempore aut cum qui, totam distinctio debitis corrupti optio impedit adipisci facere, repudiandae quo.
                </TestAccordion>
                <TestAccordion question="Question 3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio mollitia consequuntur accusamus? Natus modi quaerat, rerum tempore aut cum qui, totam distinctio debitis corrupti optio impedit adipisci facere, repudiandae quo.
                </TestAccordion>
            </div>

            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, maxime sequi, enim quas perspiciatis distinctio molestias commodi vitae sed cumque quidem. Velit corrupti quas eius! Aperiam quia tenetur soluta culpa veniam autem, distinctio necessitatibus voluptates sint incidunt quo. Dolore laboriosam atque id in dolores vel inventore nesciunt, officiis iste, suscipit aut rerum qui? Repellat cum illum corporis accusantium, commodi dolore eaque amet natus voluptas magnam deleniti odit exercitationem, unde fugit minima maiores maxime quis assumenda! Quisquam inventore saepe sunt consequuntur.</div>
        </div>
    </Layout>
</template>

<script>
import TestAccordion from '~/components/TestAccordion.vue'

export default {
  components: { 
      TestAccordion       
    }
}
</script>

<style scoped>
   #container {
       max-width: 720px;
       margin: 0 auto;
   }
</style>