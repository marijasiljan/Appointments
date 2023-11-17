<!doctype html>
<html lang="de-CH">

<head>

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-154855465-1"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.4/vue.js" integrity="sha512-LdhBTKne2GexKsxobRozOyU4IQDtrwPY0DR9p81jKXYg7g9yC8q2XSEe7GY9X2kcULCLntu6ZL49PI7xZ/0tfQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>

{{--    <script src="/moment/moment.min.js"></script>--}}


    {{--    <script src="https://cdn.jsdelivr.net/npm/calendarpickerjs@1.2.0"></script>--}}
    <script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-154855465-1');
</script>



    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no,user-scalable=no">
    <meta property="og:type" content="website" />

{{--    <link rel="shortcut icon" href="img/favicon.png" type="image/x-icon">--}}
    <title>Blaxcut - Barbershop Website Template</title>
    <link rel="icon" href="/images/icon.png" type="image/gif" sizes="16x16">
    <meta content="text/html;charset=utf-8" http-equiv="Content-Type">
    <meta content="width=device-width, initial-scale=1.0" name="viewport" >
    <meta content="Blaxcut - Barbershop Website Template" name="description" >
    <meta content="" name="keywords" >
    <meta content="" name="author" >
    <!-- CSS Files
    ================================================== -->
    <link href="/assets/css/bootstrap.min.css" rel="stylesheet" type="text/css" id="bootstrap">
    <link href="/assets/css/mdb.min.css" rel="stylesheet" type="text/css" id="mdb" >
    <link href="/assets/css/plugins.css" rel="stylesheet" type="text/css" >
    <link href="/assets/css/style.css" rel="stylesheet" type="text/css" >
    <link href="/assets/css/coloring.css" rel="stylesheet" type="text/css" >
{{--    <link rel="stylesheet" href="/assets/CalendarPickerJS-master/CalendarPicker.style.css">--}}

    <!-- color scheme -->
    <link id="colors" href="/assets/css/colors/scheme-01.css" rel="stylesheet" type="text/css" >

</head>

<body class="dark-scheme">
<div class="dark-scheme">
    @include('frontend.layouts.header')
    @yield('content')
    @include('frontend.layouts.footer')
</div>

<script src="/assets/js/plugins.js"></script>
<script src="/assets/js/designesia.js"></script>
<script src="/assets/js/custom-marquee.js"></script>
@if(session('success')!=null)
    <script>
        $(document).ready(function(){
            swal({
                title: "{!! __('admin.good_job') !!}",
                text: "{{ session('success') }}",
                type: "success",
                timer:3000
            });
        });
    </script>
@elseif(session('error') != null)
    <script>
        $(document).ready(function(){
            swal({
                title: "{!! __('admin.something_went_wrong') !!}",
                text: "{{ session('error') }}",
                type: "error",
                timer:3000
            });
        });
    </script>
@endif
@yield('footer')


<script>
    let logUser = false;

    function checkUser () {
        let user = localStorage.getItem('user')
        if(user) {
            logUser = true;
        }
    }

    checkUser()

    function updateMenu() {
        const loginMenu = document.querySelector('.user-login');
        const appointmentMenu = document.querySelector('.appointment-menu');
        const logoutMenu = document.querySelector('.user-logout');

        if (logUser) {
            logoutMenu.textContent = 'Log Out';
            appointmentMenu.textContent = 'My Appointments';
            loginMenu.href = '/home';
            loginMenu.style.display = 'none';
        } else {
            loginMenu.textContent = 'Sign In';
            loginMenu.href = '/login';
            logoutMenu.style.display = 'none';
            appointmentMenu.style.display = 'none';
        }
    }

    updateMenu();

    function logout() {
        if (logUser) {
            Swal.fire({
                text: "Are you sure you want to log out?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#cf814d",
                cancelButtonColor: "#ad190e",
                confirmButtonText: "Yes!"
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.removeItem('vuex');
                    localStorage.removeItem('user');

                    window.location.href = '/';
                    updateMenu()
                }
            });
        } else {
            return !logUser;
        }
    }

</script>
{{--<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.1.1/flowbite.min.js"></script>--}}

</body>

</html>
