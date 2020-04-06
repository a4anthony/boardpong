<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>BoardPong</title>

    <!-- Fonts -->

    <!-- fontawesome -->
    <link href="{{asset('css/fontawesome.min.css')}}" rel="stylesheet">
    <link href="{{asset('css/all.css')}}" rel="stylesheet">
    <script src="{{asset('js/all.js')}}"></script>

    <!-- Styles -->
    <link href="{{asset('css/style.css')}}?<?php echo date('style.css'); ?>" rel="stylesheet">

    <!-- jquery -->
    <script src="{{asset('js/jquery3.4.1.min.js')}}"></script>

    <!-- bootstrap -->
    <link href="{{asset('css/bootstrap.min.css')}}" rel="stylesheet">
    <script src="{{asset('js/bootstrap.min.js')}}"></script>

    <!-- game loader -->
    <script src="{{asset('js/loader.js')}}"></script>


</head>

<body>
    <!-- modal success -->
    <div id="popup-success" class="modal fade popup-success">
        <div class="modal-dialog success-dialog">
            <!-- Modal content-->
            <div class="modal-content text-center">
                <h1> <i class="fas fa-laugh-wink"></i></h1>
                <h3>Congratulations!!! <span>You win</span></h3>
            </div>
        </div>
    </div>

    <!-- modal error -->
    <div id="popup-error" class="modal fade popup-error">
        <div class="modal-dialog success-dialog">
            <!-- Modal content-->
            <div class="modal-content text-center">
                <h1> <i class="fas fa-frown"></i></h1>
                <h3>Oops!!! <span>Time up</span></h3>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row" style=" height: 100%; margin-top: 180px;">

            <!-- buttons -->
            <div class="col-2 text-center">
                <div class="play-btn">
                    <button id="restart-play" class="btn btn-primary" disabled>Play Again</button>
                    <hr>
                    <div class="row text-center level-btn">
                        <div class="col-12">
                            <span class="game-mode">select dificulty</span>
                        </div>

                        <div class="col-4" style="padding: 0!important;">
                            <button id="easy" class="btn btn-warning">Easy</button>
                        </div>
                        <div class="col-4" style="padding: 0!important;">
                            <button id="normal" class="btn btn-warning">normal</button>
                        </div>
                        <div class="col-4" style="padding: 0!important;">
                            <button id="difficult" class="btn btn-warning">difficult</button>
                        </div>
                    </div>
                    <hr>
                    <button id="start-play" class="btn btn-primary" disabled>Start Game</button>
                    <hr>
                    <button id="play" class="btn btn-success" disabled>Roll Ball</button>
                    <hr>
                    <button id="quit" class="btn btn-danger">Reset</button>

                </div>
            </div>

            <!-- game board -->
            <div class="col-8 my-auto">
                <div id="court">
                    <div id="horizontal" class="horizontal-animation">
                        <span id="ball"></span>
                    </div>
                    <div id="bar">
                        <span id="stick-1"></span>
                    </div>
                    <div id="bar-1">
                        <span id="stick"></span>
                    </div>
                    <div class="bucket">
                        <span id="b1"></span>
                        <span id="b2"></span>
                        <span id="b3"></span>

                    </div>
                </div>

            </div>


            <!-- timer -->
            <div class="col-2 text-center d-none" id="timer">
                <p>Time Left <br> <span id="time"></span></p>
            </div>
        </div>
    </div>
</body>


<!-- game runner -->
<script src="{{asset('js/run.js')}}"></script>

</html>