<template>
    <div id="faqs">
        <div class="faqs-wrapper">
            <div class="faqs-container">
                <div class="more-info">More Information</div>
                <h2>Frequently Asked</h2>
                <div class="faq-questions">
                    <FaqAccordion question="Can I get a qualification or an award?">
                        Sunt laborum sint. Ut ratione eligendi assumenda consequuntur. Similique est rem officia. Dolores assumenda quasi ex. Et et facere et voluptas et minima quisquam. Dolorum fuga assumenda libero. Cupiditate culpa qui est ratione facilis. Incidunt rerum enim enim natus laudantium omnis ipsam.
                    </FaqAccordion>
                    <FaqAccordion question="Can I volunteer from home?">
                        Eos sequi sit quos eos praesentium adipisci qui. Porro iste esse. Praesentium facilis cum. In eum dolor voluptate. Ut repellat iste ullam debitis et commodi exercitationem.
                    </FaqAccordion>
                    <FaqAccordion question="Can I volunteer full-time and get living expenses?">
                        Quae eaque et mollitia ipsum ducimus blanditiis a id. At vel cumque in nemo commodi quae veniam sit eaque. Quos alias qui error minima. Quasi inventore ut assumenda. Velit rerum reprehenderit et quam. Dolore dicta est laboriosam voluptates.
                    </FaqAccordion>
                    <FaqAccordion question="Can I volunteer together with my family or friends?">
                        Voluptates reprehenderit molestiae veniam corrupti illo laboriosam porro ut. Odio ullam autem dolor ut cupiditate ipsam dolores maiores. Cupiditate sapiente fugiat illum distinctio rerum voluptas porro. Ex odio aut et. Quo soluta nihil quae repudiandae accusamus blanditiis molestias. Repudiandae ut voluptatibus. Rem molestiae alias velit neque. Voluptas et eius. Commodi quod quas quam modi distinctio non omnis.
                    </FaqAccordion>
                    <FaqAccordion question="Do I need qualifications?">
                        Quae iusto omnis eligendi ipsum cumque laborum est qui. Aut quia quia sunt quod fugiat veniam velit totam culpa. Dolorem asperiores aut sed. Consequuntur veniam maxime alias deserunt est dolores. Dolorum necessitatibus mollitia aut qui quia facilis dolores laborum illo. Molestias ducimus repellendus voluptas nobis eum facilis recusandae occaecati.
                    </FaqAccordion>
                </div>
                <div class="view-all-faqs">
                    <g-link to="/faq/">View All FAQs <g-image width="14" src='~/assets/images/right-arrow.svg'></g-image></g-link>
                </div>
            </div>
        </div>
        <div id="get-in-touch">
            <div class="contact-col">
                <div class="more-info">How Can I Contact Together?</div>
                <h2>Get in touch</h2>
                <div class="contact-methods">
                    <div class="contact-wrapper">
                        <div class="icon">
                            <g-image width="50" src="~/assets/images/telephone-icon.svg"></g-image>
                        </div>
                        <div class="contact-info">
                            <div>Give us a Call</div>
                            <div class="subtitle">+1 20 330 22</div>
                        </div>
                    </div>
                    <div class="contact-wrapper">
                        <div class="icon">
                            <g-image width="50" src="~/assets/images/email-icon.svg"></g-image>
                        </div>
                        <div class="contact-info">
                            <div>Send us an Email</div>
                            <div class="subtitle">support@hh.com</div>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <div class="customer-service-image">
                    <g-image fit="cover" quality="100" src="~/assets/images/customer-service-agent.jpg"></g-image>
                </div>
                <div class="customer-service-title">
                    <div class="line"></div>
                    <div class="name">Jennifer Sung, Customer Service</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FaqAccordion from '~/components/FaqAccordion.vue'

    export default {
        components: {
            FaqAccordion
        }
    }
</script>

<style scoped>
    #faqs {
        padding: 90px 0;
    }
    
    .faqs-wrapper {
        max-width: 1200px;
        margin: 0 auto;
        padding: 100px 0;
        background-color: #e4f5f0;
    }

    .faqs-container {
        max-width: 940px;
        margin: 0 auto;
    }

    .more-info {
        color: #a899aa;
        font-size: 12px;
        letter-spacing: 2px;
        text-transform: uppercase;
    }

    .faqs-container h2 {
        margin-top: 10px;
        margin-bottom: 0;
        font-family: 'Rubik', sans-serif;
        color: #45164b;
        font-size: 50px;
        line-height: 54px;
        font-weight: 400;
    }

    .faq-questions {
        margin-top: 30px;
    }

    .view-all-faqs {
        margin-top: 30px;
    }

    .view-all-faqs a {
        display: flex;
        color: #45164b;
        align-items: center;
        text-decoration: none;
    }

    .view-all-faqs a img {
        margin-left: 15px;
    }

    /*----- GET IN TOUCH -----*/
    #get-in-touch {
        max-width: 940px;
        margin: 0 auto;
        display: flex;
        z-index: 10;
        margin-top: -80px;
    }

    #get-in-touch div h2 {
        margin-top: 10px;
        margin-bottom: 0;
        font-family: 'Rubik', sans-serif;
        color: #45164b;
        font-size: 50px;
        line-height: 54px;
        font-weight: 400;
    }

    .contact-methods {
        margin-top: 5px;
    }

    .contact-wrapper {
        display: flex;
        align-items: center;
        margin-top: 25px;
        cursor: pointer;
    }

    .contact-wrapper:hover > .contact-info div {
        color: #ff4043 !important;
    }

    .contact-wrapper .icon {
        margin-right: 30px;
    }

    .contact-info div {
        line-height: 26px;
        color: #45164b;
    }
    
    .contact-info .subtitle {
        font-family: 'Rubik', sans-serif;
        font-size: 21px;
        font-weight: 400;
        color: #45164b;
    }

    .customer-service-image img {
        width: 100%;
        display: block;
        box-shadow: 14px 14px 50px -20px rgba(0, 0, 0, 0.2);
    }

    .customer-service-title {
        display: flex;
        align-items: center;
        color: #8c3396;
        margin-top: 30px;
    }

    .customer-service-title .line {
        display: inline-block;
        width: 20px;
        height: 1px;
        margin-right: 10px;
        background-color: #8c3396;
    }

    .contact-col {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding-bottom: 60px;
    }

    .contact-col, .customer-service-col {
        flex: 1;
        padding-left: 10px;
        padding-right: 10px;
    }

    @media all and (max-width : 991px) {
        .faqs-wrapper {
            padding: 90px 50px;
        }

        #get-in-touch {
            max-width: 728px;
        }

        #get-in-touch .contact-col {
            padding: 0 30px;
        }

        #get-in-touch .customer-service-col {
            margin-top: 30px;
            padding: 0;
        }
    }

    @media all and (max-width : 767px) {
        #faqs {
            padding: 0;
        }
        
        .faqs-wrapper {
            padding: 50px 30px;
        }

        #get-in-touch {
            margin-top: 40px;
            flex-direction: column;
        }

        #get-in-touch .contact-col {
            margin-bottom: 40px;
        }

        .customer-service-title {
            padding: 30px;
            font-size: 14px;
            margin: 0;
        }
    }
</style>