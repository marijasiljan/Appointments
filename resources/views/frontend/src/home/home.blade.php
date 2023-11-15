
@extends('frontend.layouts.app')
@section('content')

    <div id="wrapper">

        <!-- page preloader begin -->
        <div id="de-loader"></div>
        <!-- page preloader close -->

        <!-- header begin -->
        <!-- header close -->
        <!-- content begin -->
        <div class="no-bottom no-top" id="book">
            <div id="top"></div>
            <section id="de-carousel" class="no-top no-bottom carousel slide text-light carousel-fade" data-mdb-ride="carousel">
                <!-- Inner -->
                <div class="carousel-inner">
                    <!-- Single item -->
                    <div class="carousel-item active jarallax">
                        <img src="/assets/images/background/7.jpg" class="jarallax-img" alt="">
                        <div class="d-content relative z1000">
                            <div class="wm wm-carousel mt-30" data-jarallax-element="-50">
                                <div class="wow fadeInRight">blaxcut <span class="t2">barbershop</span></div>
                            </div>
                            <div class="top-center">
                                <div class="wow fadeInRight">
                                    <h1 class="id-color">Make Your Own Style</h1>
                                </div>
                            </div>
                            <div class="v-center">
                                <div class="container">
                                    <div class="row align-items-center">
                                        <div class="col-lg-6 offset-lg-3 d-flex">
                                            <img src="/assets/images/misc/man.png" class="wow fadeInLeft" data-wow-delay=".3s" data-wow-duration="1.5s" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="de-gradient-edge-bottom"></div>
                    </div>
                    <!-- Single item -->

                </div>
                <!-- Inner -->

                <!-- Controls -->
                <a class="carousel-control-prev" href="#de-carousel" role="button" data-mdb-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#de-carousel" role="button" data-mdb-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </section>

            <section aria-label="section" class="no-top no-bottom">

                <div class="container">
                    <div class="row">
                        <div class="col-lg-12" data-jarallax-element="-50">
                            <p class="lead big wow fadeInUp">Established with a passion for the art of barbering, we take great pride in our craft and strive to create an atmosphere that feels like home. From the moment you walk through our doors, you'll be greeted by friendly smiles and a warm ambiance that instantly puts you at ease.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="section-trending" class="pt80">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2 text-center">
                            <h2 class="wow fadeIn">Trending Styles</h2>
                            <div class="de-separator"></div>
                            <div class="spacer-single"></div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12" data-jarallax-element="-20">
                            <div class="d-carousel wow fadeInRight" >
                                <div id="item-carousel-big" class="owl-carousel no-hide owl-center" data-wow-delay="1s">
                                    <div class="c-item">
                                        <a href="#">
                                            <span class="c-item_info">
                                                <span class="c-item_title">Slick Back</span>
                                                <span class="c-item_wm">#1</span>
                                            </span>

                                            <div class="c-item_wrap">
                                                <img src="/assets/images/hairstyles/1.jpg" class="lazy img-fluid" alt="">
                                            </div>
                                        </a>
                                    </div>

                                    <div class="c-item">
                                        <a href="#">
                                            <span class="c-item_info">
                                                <span class="c-item_title">Classic Quiff</span>
                                                <span class="c-item_wm">#2</span>
                                            </span>

                                            <div class="c-item_wrap">
                                                <img src="/assets/images/hairstyles/2.jpg" class="lazy img-fluid" alt="">
                                            </div>
                                        </a>
                                    </div>

                                    <div class="c-item">
                                        <a href="#">
                                            <span class="c-item_info">
                                                <span class="c-item_title">Pompadour</span>
                                                <span class="c-item_wm">#3</span>
                                            </span>

                                            <div class="c-item_wrap">
                                                <img src="/assets/images/hairstyles/3.jpg" class="lazy img-fluid" alt="">
                                            </div>
                                        </a>
                                    </div>

                                    <div class="c-item">
                                        <a href="#">
                                            <span class="c-item_info">
                                                <span class="c-item_title">Fringe</span>
                                                <span class="c-item_wm">#4</span>
                                            </span>

                                            <div class="c-item_wrap">
                                                <img src="/assets/images/hairstyles/4.jpg" class="lazy img-fluid" alt="">
                                            </div>
                                        </a>
                                    </div>


                                    <div class="c-item">
                                        <a href="#">
                                            <span class="c-item_info">
                                                <span class="c-item_title">Curly Fade</span>
                                                <span class="c-item_wm">#5</span>
                                            </span>

                                            <div class="c-item_wrap">
                                                <img src="/assets/images/hairstyles/5.jpg" class="lazy img-fluid" alt="">
                                            </div>
                                        </a>
                                    </div>

                                    <div class="c-item">
                                        <a href="#">
                                            <span class="c-item_info">
                                                <span class="c-item_title">Undercut</span>
                                                <span class="c-item_wm">#6</span>
                                            </span>

                                            <div class="c-item_wrap">
                                                <img src="/assets/images/hairstyles/6.jpg" class="lazy img-fluid" alt="">
                                            </div>
                                        </a>
                                    </div>

                                </div>
                                <div class="d-arrow-left mod-a"><i class="fa fa-angle-left"></i></div>
                                <div class="d-arrow-right mod-a"><i class="fa fa-angle-right"></i></div>
                            </div>
                            <div class="spacer-double"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="no-top jarallax">
                <div class="de-gradient-edge-top"></div>
                <img src="/assets/images/background/1.jpg" class="jarallax-img" alt="">
                <div class="container relative z1000">
                    <div class="row align-items-center">
                        <div class="col-lg-6" data-jarallax-element="-30">
                            <img src="/assets/images/misc/man-2.png" class="img-fluid wow fadeInRight" alt="">
                        </div>
                        <div class="col-lg-6" data-jarallax-element="-60">
                            <h2 class="wow fadeInRight" data-wow-delay=".3s">We’ll  Crafting <span class="id-color">Confidence</span> Through Sharp Style</h2>
                            <p class="wow fadeInRight" data-wow-delay=".4s">We take pride in providing top-notch grooming services that blend classic techniques with modern trends. Step into our warm and inviting space, where you'll find a team of skilled barbers dedicated to enhancing your style and confidence.</p>
                            <a href="/book" class="btn-main wow fadeInRight" data-wow-delay=".5s">Book Now</a>
                        </div>
                    </div>
                </div>
                <div class="de-gradient-edge-bottom"></div>
            </section>

            <section aria-label="section" class="no-top">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <h2 class="wow fadeIn">Our Services</h2>
                            <div class="de-separator"></div>
                        </div>
                        <div class="col-lg-3 text-center" data-jarallax-element="-20" v-for="service in services" :key="service.id">
                            <div class="de-box-a">
                            </div>
                            <div class="spacer-20"></div>
                            <h4>@{{ service.category }}</h4>
                        </div>
                    </div>
                    <div class="spacer-single"></div>
                    <div class="text-center">
                        <a href="/services" class="btn-main">All Services &amp; Prices</a>
                    </div>
                </div>
            </section>

            <section class="jarallax no-top">
                <div class="de-gradient-edge-top"></div>
                <img src="/assets/images/background/1.jpg" class="jarallax-img" alt="">
                <div class="container relative z1000">
                    <div class="row gx-5">
                        <div class="col-lg-6 text-center" data-jarallax-element="-50">
                            <div class="d-sch-table">
                                <h2 class="wow fadeIn">We're Open</h2>
                                <div class="de-separator"></div>
                                <div class="d-col">
                                    <div class="d-title">Mon - Thu</div>
                                    <div class="d-content id-color">7:30AM - 6:30PM</div>
                                </div>
                                <div class="d-col">
                                    <div class="d-title">Friday</div>
                                    <div class="d-content id-color">8:30AM - 8:30PM</div>
                                </div>
                                <div class="d-col">
                                    <div class="d-title">Sat - Sun</div>
                                    <div class="d-content id-color">9:30AM - 5:30PM</div>
                                </div>
                                <div class="d-deco"></div>
                            </div>
                        </div>

                        <div class="col-lg-6 text-center" data-jarallax-element="-100">
                            <div class="d-sch-table">
                                <h2 class="wow fadeIn">Location</h2>
                                <div class="de-separator"></div>
                                <div class="d-col">
                                    <div class="d-title">Address</div>
                                    <div class="d-content id-color">100 Mainstreet Center, NY</div>
                                </div>
                                <div class="d-col">
                                    <div class="d-title">Phone</div>
                                    <div class="d-content id-color">+1 333 8080 1000</div>
                                </div>
                                <div class="d-col">
                                    <div class="d-title">Email</div>
                                    <div class="d-content id-color">contact@blaxcut.com</div>
                                </div>
                                <div class="d-deco"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="de-gradient-edge-bottom"></div>
            </section>

        </div>
        <!-- content close -->
        <a href="#" id="back-to-top"></a>
        <!-- footer begin -->
        <!-- footer close -->
    </div>

    <script>
        let app = new Vue({
            el: '#book',
            data: {
                services: [],
            },
            created() {
                axios.get('https://appointment.mangosoft.mk/api/services')
                    .then(response => {
                        this.services = response.data.data;
                        console.log('res', response.data.data)
                    })
                    .catch(error => {
                        console.error('Error fetching services data:', error);
                    });
            }
        })
    </script>

@endsection
