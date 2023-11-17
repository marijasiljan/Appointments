@extends('frontend.layouts.app')
@section('content')
    <div class="no-bottom no-top" id="appointment">
        <div id="top"></div>
        <!-- section begin -->
        <section id="subheader" class="jarallax">
            <img src="images/background/4.jpg" class="jarallax-img" alt="">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 offset-lg-3 text-center">
                        <h1>Appointments</h1>
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
                    <div class="container relative z1000">
                        <div v-for="(appointment, index) in appointments" :key="index">
                                <div class="d-sch-table">
                                    <div class="col-lg-12">
                                        <div class="de-blog-c1">
                                            <div class="col-lg-12" data-jarallax-element="-20">
                                                <p class="lead big wow fadeInUp">@{{ 'Date: ' }} @{{ formatAppointmentDate(appointment.date) }}</p>
                                                <p class="lead big wow fadeInUp">@{{'Time: ' + appointment.start_time + ' - ' + appointment.end_time}}</p>
                                                <p class="lead big wow fadeInUp">@{{'Employee: ' + appointment.employee.name + ' ' + appointment.employee.surname}}</p>
                                                <p class="lead big wow fadeInUp">@{{'Service: ' + appointment.service.name}}</p>
                                            </div>
                                        </div>
                                        <div class="d-deco"></div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <br>
                    <br>
                    <br>
                    <br>
                </div>
            </div>
        </section>
    </div>
    {{--<!-- content close -->--}}
    <a href="#" id="back-to-top"></a>

    <script>
        let app = new Vue({
            el: '#appointment',
            data: {
                appointments: '',
            },
            methods: {
                formatAppointmentDate(date) {
                    return moment(date).format('DD/MM/YYYY');
                },
            },
            created() {
                axios.get('https://appointment.mangosoft.mk/api/appointments')
                    .then(response => {
                        this.appointments = response.data.data;
                        console.log('my appointment', response.data.data)
                    })
                    .catch(error => {
                        console.log('Error loading you appointment', error)
                    })
                },
            })
    </script>
@endsection
