<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <meta name="csrf-token" id="csrf-token" content="{{ csrf_token() }}">

    <title id="tab_title">Intolerance Test | System</title>
    <link id="favicon" rel="shortcut icon" href="{{ asset('favicon.ico') }}">

    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <!-- Font -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

    <script src="{{ mix("/js/app.js") }}" defer></script>
</head>

<body style="font-family: Poppins, Helvetica, 'sans-serif' !important;">
<style>
    .swal2-icon.swal2-warning{border-color: #FFA800;color: #FFA800;width:4em;height:4em}
    .swal2-title{font-weight: 500;font-size: 1.3rem;color: #181C32;}
</style>
<noscript>
    <strong>We're sorry but Our System doesn't work properly without JavaScript enabled.
        Please enable it to continue.</strong>
</noscript>
<script>window.Laravel = {csrfToken: '{{ csrf_token() }}'}</script>
<div id="app">
</div>
</body>

</html>
