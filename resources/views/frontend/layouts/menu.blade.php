<div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav menu w_menu ml-auto">
<!--
        <li class="nav-item">
            <a class="nav-link" href="{{  url('/') }}" role="button" aria-haspopup="true">
                Home
            </a>

        </li>
 -->

<!--
        <li class="nav-item dropdown submenu">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Plattform
            </a>
            <ul class="dropdown-menu">
                <li class="nav-item"><a href="{{ url('/function') }}" class="nav-link">Übersicht</a></li>
                <li class="nav-item"><a href="{{ url('/purpose') }}" class="nav-link">Auftragserfassung</a></li>
                <li class="nav-item"><a href="{{ url('/offer_management') }}" class="nav-link">Offerten Management</a></li>
                <li class="nav-item"><a href="{{ url('/project_management') }}" class="nav-link">Projekt Management</a></li>
                <li class="nav-item"><a href="{{url('/defect_detection')}}" class="nav-link">Mängelerfassung</a></li>
                <li class="nav-item"><a href="{{ url('/document_management') }}" class="nav-link">Dokumentenverwaltung</a></li>
                <li class="nav-item"><a href="{{ url('/communication') }}" class="nav-link">Kommunikation</a></li>
            </ul>
        </li>
 -->
<!--
        <li class="nav-item">
            <a class="nav-link" href="{{ url('/partner') }}" role="button" aria-haspopup="true">
                Partner werden
            </a>
        </li>
 -->
{{--        <li class="nav-item">--}}
{{--            <a class="nav-link" href="{{  url('/kuechen') }}" role="button" aria-haspopup="true">--}}
{{--                Küche--}}
{{--            </a>--}}

{{--        </li>--}}
{{--        <li class="nav-item">--}}
{{--            <a class="nav-link" href="{{  url('/bad') }}" role="button" aria-haspopup="true">--}}
{{--                Bad--}}
{{--            </a>--}}
{{--        </li>--}}
{{--        <li class="nav-item">--}}
{{--            <a class="nav-link" href="{{  url('/fassade') }}" role="button" aria-haspopup="true">--}}
{{--                Fassade--}}
{{--            </a>--}}
{{--        </li>--}}
{{--        <li class="nav-item">--}}
{{--            <a class="nav-link" href="{{  url('/platten') }}" role="button" aria-haspopup="true">--}}
{{--                Platten--}}
{{--            </a>--}}
{{--        </li>--}}
{{--        <li class="nav-item">--}}
{{--            <a class="nav-link" href="{{  url('/boden') }}" role="button" aria-haspopup="true">--}}
{{--                Parkett--}}
{{--            </a>--}}
{{--        </li>--}}
<!--
        <li class="nav-item">
            <a class="nav-link" href="https://www.umbaumanager.ch/blog/" role="button" aria-haspopup="true">
                Ratgeber
            </a>

        </li>
 -->
{{--        <li class="nav-item">--}}
{{--            <a class="nav-link" href="{{  url('/handwerker') }}" role="button" aria-haspopup="true">--}}
{{--                Für Handwerker--}}
{{--            </a>--}}

{{--        </li>--}}

        <li class="nav-item" style="padding-top: 20px; padding-bottom: 20px;">
{{--            @if(Auth::check())--}}
{{--                @if(auth()->user()->role =='admin')--}}
{{--                    <button class="btn_get btn_hover saas_btn" onclick="window.location = '/admin'"><i class="fa fa-user-circle-o"></i> Mein Konto</button>--}}
{{--                @elseif(auth()->user()->role =='client')--}}
{{--                    <button class="btn_get btn_hover saas_btn" onclick="window.location = '/client'"><i class="fa fa-user-circle-o"></i> Mein Konto</button>--}}
{{--                @elseif(auth()->user()->role =='company')--}}
{{--                    <button class="btn_get btn_hover saas_btn" onclick="window.location = '/company'"><i class="fa fa-user-circle-o"></i> Mein Konto</button>--}}
{{--                @endif--}}
{{--                <button class="btn_get btn_hover saas_btn" onclick="window.location = '/logout'"><i class="fa fa-sign-out"></i>Abmelden</button>--}}
{{--            @else--}}
{{--                <button class="btn_get btn_hover saas_btn"   onclick="window.location='/login'"><i class="fa fa-sign-in"></i> Anmelden</button>--}}
{{--    --}}{{--        <button class="btn_get btn_hover saas_btn" onclick="window.location = '/register'"><i class="fa fa-user-plus"></i> Registrieren</button>--}}
{{--            @endif--}}
                <button class="btn_get btn_hover saas_btn"   onclick="window.location='http://int.umbaumanager.ch/login'"><i class="fa fa-sign-in"></i> Anmelden</button>
        </li>




    </ul>


</div>



<div class="modal fade" id="errorModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop = 'false'>
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Anmeldefehler</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                @if($errors->any())
                    @foreach ($errors->all() as $error)
                        {!! $error !!}
                    @endforeach
                @endif
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Schliessen</button>
                <button class="btn_custom_small btn btn_small text-capitalize btn-rounded navbar-btn" data-toggle="modal" data-target="#loginModal" data-dismiss="modal"><i class="fa fa-sign-in"></i> Wiederholen</button>
            </div>
        </div>
    </div>
</div>

{{--<div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="false">--}}
{{--    <div class="modal-dialog" role="document">--}}
{{--        <div class="modal-content">--}}
{{--            <div class="modal-header">--}}
{{--                <h5 class="modal-title" id="exampleModalLabel">Login</h5>--}}
{{--                <button type="button" class="close" data-dismiss="modal" aria-label="Close">--}}
{{--                    <span aria-hidden="true">&times;</span>--}}
{{--                </button>--}}
{{--            </div>--}}
{{--            <form method="POST" action="{{ route('login') }}">--}}
{{--                @csrf--}}
{{--            <div class="modal-body">--}}
{{--                    <label>Email</label>--}}
{{--                    <input type="email" value="{!! old('email') !!}" class="form-control" name="email">--}}
{{--                    <br />--}}
{{--                    <div class="clearfix"></div>--}}
{{--                    <label>Passwort</label>--}}
{{--                    <input type="password"  class="form-control" name="password">--}}
{{--            </div>--}}
{{--            <div class="modal-footer">--}}
{{--                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>--}}
{{--                <button type="submit" class="btn btn-primary">Login</button>--}}
{{--            </div>--}}
{{--            </form>--}}
{{--        </div>--}}
{{--    </div>--}}
{{--</div>--}}
<script>

    function deleteBackDrop(){
        setTimeout(
                function(){
                    $('.modal-backdrop').remove();
                },300
        );
    }
</script>

