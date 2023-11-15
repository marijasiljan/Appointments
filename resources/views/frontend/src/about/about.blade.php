
@extends('frontend.layouts.app')
@section('content')
    <div id="wrapper">

        <!-- page preloader begin -->
        <div id="de-loader"></div>
        <!-- page preloader close -->

        <!-- content begin -->
        <div class="no-bottom no-top" id="book">
            <div id="top"></div>

            <section id="subheader" class="jarallax">
                <img src="images/background/3.jpg" class="jarallax-img" alt="">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 offset-lg-3 text-center">
                            <h1>About Us</h1>
                            <div class="de-separator"></div>
                        </div>
                    </div>
                </div>
                <div class="de-gradient-edge-bottom"></div>
            </section>

            <section aria-label="section" class="no-top">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12" data-jarallax-element="-20">
                            <p class="lead big wow fadeInUp">Immerse yourself in the ambience of our thoughtfully designed space, where modern aesthetics merge harmoniously with classic elements. We believe that a barbershop should be more than just a place to get a haircut; it should be a sanctuary where you can unwind, engage in great conversation, and leave feeling invigorated.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="jarallax no-top">
                <div class="de-gradient-edge-top"></div>
                <img src="images/background/1.jpg" class="jarallax-img" alt="">
                <div class="container relative z1000">
                    <div class="row gx-5">
                        <div class="col-lg-6" data-jarallax-element="-50">
                            <div class="d-sch-table">
                                <h2 class="wow fadeIn text-center">Our Vision</h2>
                                <div class="de-separator"></div>
                                <p>At the heart of our vision is a commitment to preserving the time-honored traditions of barbering while seamlessly blending them with contemporary techniques and trends. We envision a space where heritage and innovation coexist harmoniously, creating an environment that appeals to the modern man seeking both classic sophistication and cutting-edge styles.</p>
                                <div class="d-deco"></div>
                            </div>
                        </div>

                        <div class="col-lg-6" data-jarallax-element="-100">
                            <div class="d-sch-table">
                                <h2 class="wow fadeIn text-center">Our Mission</h2>
                                <div class="de-separator"></div>
                                <p>Our mission is to empower men to feel confident, stylish, and authentic in their appearance. Through our commitment to excellence, personalized service, inviting atmosphere, and a harmonious blend of tradition and innovation, we aspire to become the ultimate grooming destination for the modern gentleman.</p>
                                <div class="d-deco"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="de-gradient-edge-bottom"></div>
            </section>

            <section aria-label="section" class="no-top">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <h2 class="wow fadeIn">Our Team</h2>
                            <div class="de-separator"></div>
                        </div>
                        <div class="col-lg-3 text-center" data-jarallax-element="-20" v-for="employee in employees" :key="employee.id">
                            <div class="de-box-a">
                                <div class="d-image">
                                    <img src="/assets/images/team/employee.jpg" alt="">
                                </div>
                                <div class="d-deco-1"></div>
                                <div class="d-deco-2"></div>
                            </div>
                            <div class="spacer-20"></div>
                            <h4>@{{ employee.name }}</h4>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <!-- content close -->
        <a href="#" id="back-to-top"></a>
    </div>

<script>
    let app = new Vue({
        el: '#book',
        data: {
            employees: [],
        },
        created() {
            axios.get('https://appointment.mangosoft.mk/api/users/employee')
                .then(response => {
                    this.employees = response.data.data;
                    console.log('employees', response.data.data)
                })
                .catch(error => {
                    console.error('Error fetching services data:', error);
                });
        }
    })
</script>
@endsection
