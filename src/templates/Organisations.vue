<template>
    <Layout>
        <div>
            <h1>{{ $page.organisations.title }}</h1>
            <VueRemarkContent />
            
            <div id="org-form">
               <form action="https://www.form-data.com/_functions/submit/ophk4d66zcnl4r9ox6sr" method="post" >
                  <p type="text" name="organisation"><strong>{{ $page.organisations.title }}</strong></p>

                  <p><input type="text" name="name" required="required" placeholder="Full Name"/></p>

                  <p><input type="text" required="required" name="email" placeholder="Email"/></p>

                  <p><textarea name="Comments" required="required" id="comments" cols="40" rows="6" placeholder="Comments"></textarea></p>

                  <button type="submit" value="Submit">Submit</button>
               </form>
            </div>
        </div>
    </Layout>
</template>

<page-query>
query Organisations ($path: String!) {
  organisations: organisations (path: $path) {
    title
    desc
    path
  }
}
</page-query>

<style>

</style>