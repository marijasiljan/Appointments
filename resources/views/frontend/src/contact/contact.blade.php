@extends('frontend.layouts.app')
@section('content')
    <div class="no-bottom no-top" id="content">
        <div id="top"></div>
        <!-- section begin -->
        <section id="subheader" class="jarallax">
            <img src="images/background/5.jpg" class="jarallax-img" alt="">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 offset-lg-3 text-center">
                        <h1>Contact Us</h1>
                        <div class="de-separator"></div>
                    </div>
                </div>
            </div>
            <div class="de-gradient-edge-bottom"></div>
        </section>
        <!-- section close -->

        <section id="section-content" class="no-top" aria-label="section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-4 text-center">
                        <i class="fa fa-map-marker de-icon gradient de-hover-scale text-light mb20"></i>
                        <p class="lead no-bottom">Our Address</p>
                        <h4 class="s2">100 Mainstreet Center, NY</h4>

                    </div>
                    <div class="col-lg-4 col-md-4 text-center">
                        <i class="fa fa-phone de-icon gradient de-hover-scale text-light mb20"></i>
                        <p class="lead no-bottom">Phone Number</p>
                        <h4 class="s2">+1 333 9296</h4>
                    </div>
                    <div class="col-lg-4 col-md-4 text-center">
                        <i class="fa fa-envelope-o de-icon gradient de-hover-scale text-light mb20"></i>
                        <p class="lead no-bottom">Email Address</p>
                        <h4 class="s2">contact@suppport.com</h4>
                    </div>
                </div>
            </div>
        </section>
        <section class="no-top jarallax">
            <div class="de-gradient-edge-top"></div>
            <img src="images/background/7.jpg" class="jarallax-img" alt="">
            <div class="container position-relative z1000">
                <div class="row gx-5">

                    <div class="col-lg-6 offset-lg-3">

                        <div class="d-sch-table">
                            <h2 class="wow fadeIn text-center">Message Us</h2>
                            <div class="de-separator"></div>
                            <p class="lead text-center">
                                If you got any questions, please do not hestitae to send us a message.
                            </p>

                            <form name="contactForm" id="contact_form" class="form-border position-relative z1000" method="post" action="#">
                                <div class="row">
                                    <div class="col-lg-12 mb10">
                                        <div class="field-set">
                                            <input type="text" name="Name" id="name" class="form-control" placeholder="Your Name" required>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 mb10">
                                        <div class="field-set">
                                            <input type="text" name="Email" id="email" class="form-control" placeholder="Your Email" required>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 mb10">
                                        <div class="field-set">
                                            <input type="text" name="phone" id="phone" class="form-control" placeholder="Your Phone" required>
                                        </div>
                                    </div>
                                </div>

                                <div class="field-set mb20">
                                    <textarea name="message" id="message" class="form-control" placeholder="Your Message" required></textarea>
                                </div>

                                <div class="text-center">
                                    <div class="g-recaptcha" data-sitekey="6LdW03QgAAAAAJko8aINFd1eJUdHlpvT4vNKakj6" align="center"></div>
                                    <div id='submit' class="mt20">
                                        <input type='submit' id='send_message' value='Send Message' class="btn-main">
                                    </div>
                                </div>

                                <div id="success_message" class='success'>
                                    Your message has been sent successfully. Refresh this page if you want to send more messages.
                                </div>
                                <div id="error_message" class='error'>
                                    Sorry there was an error sending your form.
                                </div>
                            </form>

                            <div class="d-deco"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="de-gradient-edge-bottom"></div>
        </section>
        <section aria-label="section" class="no-top sm-hide">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <h4>Follow Us</h4>
                        <div class="spacer-20"></div>
                        <div class="social-icons big">
                            <a href="#"><i class="fa fa-facebook fa-lg"></i></a>
                            <a href="#"><i class="fa fa-twitter fa-lg"></i></a>
                            <a href="#"><i class="fa fa-linkedin fa-lg"></i></a>
                            <a href="#"><i class="fa fa-pinterest fa-lg"></i></a>
                            <a href="#"><i class="fa fa-rss fa-lg"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
@endsection
