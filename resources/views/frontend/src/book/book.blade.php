
@extends('frontend.layouts.app')
@section('content')
<!-- content begin -->
<div class="no-bottom no-top" id="book">
    <div id="top"></div>
    <!-- section begin -->
    <section id="subheader" class="jarallax">
        <img src="images/background/6.jpg" class="jarallax-img" alt="">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3 text-center">
                    <h1>Booking</h1>
                    <div class="de-separator"></div>
                </div>
            </div>
        </div>
        <div class="de-gradient-edge-bottom"></div>
    </section>
    <!-- section close -->

    <section id="section-form" class="no-top">
        <div class="container">
            <div class="row">

                <div class="col-md-10 offset-md-1">
                    <form name="contactForm" id='contact_form' class="form-border" method="post">
                        <div id="step-1" class="row">
                            <h3 class="s2">Choose Services</h3>

                            <div class="row">
                                <div class="col-xl-3 col-lg-6" v-for="service in services" :key="service.id">
                                    <div class="sc-group">
                                        <h5>@{{ service.category }}</h5>
                                        <div class="form-group">
                                            <div class="def-list-dots">
                                                <dl>
                                                    <dt>
                                                        <input type="checkbox" @click="selectService(service)">
                                                        <span>@{{ service.name }}</span>
                                                    </dt>
                                                    <dd>@{{ service.price[0].value }}</dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="spacer-single"></div>

                            <!-- step 2 -->

                            <div class="row">
                                <div class="col-lg-6 mb-sm-30">
                                    <h3 class="s2">Staff</h3>

                                    <div class="de_form de_radio">
                                        <div class="radio-img" v-for="employee in employees" :key="employee.id" >
                                            <input :id="'radio-1a' + employee.id" name="Staff" type="radio" @click="selectEmployee(employee)">
                                            <label :for="'radio-1a' + employee.id"><img src="/assets/images/team/employee.jpg" alt="">@{{ employee.name }}</label>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-6">
                                    <div v-if="saveUser.employee">
                                    <h3 class="s2">Select Date</h3>
                                    <input type="date" name="date" id="date" class="form-control" :min="minDate" v-model="saveUser.date" required @change="getAvailability" />
                                    </div>
                                    <div class="spacer-single"></div>
                                    <div v-if="saveUser.date && saveUser.employee">
                                    <h3 class="s2">Select Time</h3>
                                    <div class="custom_radio">
                                        <div class="radio-opt" v-for="(slot, index) in availability" :key="index">
                                            <input type="radio" :id="index" v-model="saveUser.selectedTime" :value="slot" name="select_time"><label :for="index">@{{ slot.start_time + '-' + slot.end_time}}</label>
                                        </div>
                                    </div>
                                    </div>

                                </div>

                            </div>

                            <div class="spacer-single"></div>
                            <div class="row">

                                <div class="col-lg-12 text-center">
                                    <div class="g-recaptcha align-center" data-sitekey="6LdW03QgAAAAAJko8aINFd1eJUdHlpvT4vNKakj6" ></div>
                                    <p id='submit' class="mt20">
                                        <input style="cursor: pointer" readonly id='send_message' value='Submit Form' class="btn-main" @click="appointmentSave">
                                    </p>
                                </div>
                            </div>

                        </div>

                    </form>

                    <div id="success_message" class='success'>
                        Your message has been sent successfully. Refresh this page if you want to send more messages.
                    </div>
                    <div id="error_message" class='error'>
                        Sorry there was an error sending your form.
                    </div>

                </div>

            </div>
        </div>
    </section>



</div>
{{--<!-- content close -->--}}
<a href="#" id="back-to-top"></a>
<script>
let app = new Vue({
el: '#book',
data: {
    saveUser: {
        selectedTime: {
            start_time: null,
            end_time: null,
        },
        clientId: null,
        employee: null,
        price: null,
        date: null,
        service_id: null,
    },
    minDate: '',
    services: [],
    availability: [],
    appointmentData: [],
    employees: [],
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

    axios.get('https://appointment.mangosoft.mk/api/users/employee')
        .then(response => {
            this.employees = response.data.data;
            console.log('employees', response.data.data);
        })
        .catch(error => {
            console.error('Error fetching employees data:', error);
        });

    axios.get('https://appointment.mangosoft.mk/api/appointments')
        .then(response => {
            this.appointmentData = response.data;
            console.log('appointment', response.data.data[0].client_id)
            console.log('appointment', response.data.data)
        })
        .catch(error => {
            console.error('Error fetching appointment data:', error);
        })
    },
    mounted() {
        this.minDate = new Date().toISOString().split('T')[0];
},
    methods: {
        appointmentSave() {
            if (
                localStorage.getItem('user') === null
            ) {
                window.location.href = '/login';
            }   else if (
                this.saveUser.client_id !== null &&
                this.saveUser.date !== null &&
                this.saveUser.employee !== null &&
                this.saveUser.price !== null &&
                this.saveUser.selectedTime !== null
            ){
                axios.post('https://appointment.mangosoft.mk/api/appointments/store', {
                    client_id: JSON.parse(localStorage.getItem('user')).id,
                    employee_id: this.saveUser.employee,
                    price: this.saveUser.price,
                    start_time: this.saveUser.selectedTime.start_time,
                    end_time: this.saveUser.selectedTime.end_time,
                    date: this.saveUser.date,
                    service_id: this.saveUser.service_id,
                })
                .then((response) => {
                    console.log('Form data saved successfully:', response);
                    window.location.href = '/appointments';
                })
                .catch((error) => {
                    console.error('Error saving form data', error);
                });
            }
        },
        selectService(service) {
            this.saveUser.service_id = service.id;
            this.saveUser.price = service.price[0].value;
            console.log('service',service.id)
            console.log('price',service.price[0].value)
        },
        selectEmployee(employee) {
            this.saveUser.employee = employee.id;
            console.log('employee', employee);
        },

        getAvailability() {
            axios.post('https://appointment.mangosoft.mk/api/availability/slots', {
                date: this.saveUser.date,
                employee_id: this.saveUser.employee,
            })
                .then(response => {
                    this.availability = [];
                    if(typeof response.data.data!= 'undefined'){
                        this.availability = response.data.data;
                    }
                    console.log('availability', response)
                })
                .catch(error => {
                    console.error('Error fetching slots data:', error);
                });
            },
        },
});
</script>
@endsection
