$(document).ready(function() {
    var counter = sessionStorage.getItem('counter');
    var max = sessionStorage.getItem('max');
    var btn = sessionStorage.getItem('btn');

    if (btn) {
        if (btn == 'easy') {
            var min = Math.random() + 3.5;
        }
        if (btn == 'normal') {
            var min = Math.random() + 2;
        }
        if (btn == 'difficult') {
            var min = Math.random() + 1;
        }
    }
    if (counter) {
        setConfig(counter, max, min);
    }

    //----------------------------------------
    // RESTART GAME 
    //----------------------------------------

    $("#restart-play").click(function() {
        location.reload();
    });




    //----------------------------------------
    // QUIT GAME 
    //----------------------------------------

    $("#quit").click(function() {
        sessionStorage.clear();
        location.reload();
    });



    //----------------------------------------
    // EASY 
    //----------------------------------------

    $("#easy").click(function() {
        var counter = 40;
        var max = 5;
        var min = Math.random() + 3.5;

        sessionStorage.clear();
        sessionStorage.setItem('counter', counter);
        sessionStorage.setItem('max', max);
        sessionStorage.setItem('min', min);
        sessionStorage.setItem('btn', 'easy');

        location.reload();
    });



    //----------------------------------------
    // NORMAL
    //----------------------------------------

    $("#normal").click(function() {
        var counter = 20;
        var max = 3.5;
        var min = Math.random() + 2;

        sessionStorage.clear();
        sessionStorage.setItem('counter', counter);
        sessionStorage.setItem('max', max);
        sessionStorage.setItem('min', min);
        sessionStorage.setItem('btn', 'normal');

        location.reload();
    });


    //----------------------------------------
    // DIFFICULT
    //----------------------------------------

    $("#difficult").click(function() {
        var counter = 10;
        var max = 2;
        var min = Math.random() + 1;

        sessionStorage.clear();
        sessionStorage.setItem('counter', counter);
        sessionStorage.setItem('max', max);
        sessionStorage.setItem('min', min);
        sessionStorage.setItem('btn', 'difficult');

        location.reload();
    });



    //----------------------------------------
    // SET GAME CONFIG
    //----------------------------------------
    function setConfig(counter, max, min) {
        $("#start-play").click(function() {
            runGame(counter, max, min);
        });
    }




    //----------------------------------------
    // RUN GAME 
    //----------------------------------------

    function runGame(counter, max, min) {

        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }

        var speed = getRndInteger(min, max);

        $("#horizontal").css("animation", "updown " + "10" + "s linear 0s infinite");
        $("#bar").css("animation", "updown-bar " + speed + "s linear 0s infinite");



        var interval = setInterval(function() {

            if (counter <= 0) {
                $('#restart-play').prop('disabled', false);
                $('#time').text("00:00");
                setTimeout(function() {
                    $('.popup-error').modal('show');
                }, 500)
                setTimeout(function() {
                    $("#bar").css("animation", "");
                }, 1500)
                $("#horizontal").css("animation", "");
                $("#ball").css("animation", "stop 1s ease 0s 1 normal forwards");
                clearInterval(interval);
            } else {
                $('#timer').removeClass('d-none');
                if (counter < 10) {
                    $('#time').text("00:0" + counter);
                } else {
                    $('#time').text("00:" + counter);
                }

                if (counter <= 6) {
                    function blink_text() {
                        $('#time').fadeOut(500);
                        $('#time').fadeIn(500);
                    }
                    setInterval(blink_text, 1000);
                }

                counter--;
            }

        }, 1000);


        $('#play').prop('disabled', false);



        $("#play").click(function() {
            $('#start-play').prop('disabled', true);
            $('#play').prop('disabled', true);

            $("#ball").addClass('ball-animation');

            setInterval(function() {
                checkCollisions();
            }, 0.0000000000001);
        });




        //----------------------------------------
        // getPosition functions 
        //----------------------------------------

        //box1
        var box1 = $('#horizontal');

        function getPositions1(box1) {
            var $box1 = $(box1);
            var pos = $box1.position();
            var width = $box1.width();
            var height = $box1.height();
            return [
                [pos.left, pos.left + width],
                [pos.top, pos.top + height]
            ];
        }

        //box2
        var box2 = $('#bar');

        function getPositions2(box2) {
            var $box2 = $(box2);
            var pos = $box2.position();
            var width = $box2.width();
            var height = $box2.height();
            return [
                [pos.left, pos.left + width],
                [pos.top, pos.top + height]
            ];
        }

        //box3
        var box3 = $('#ball');

        function getPositions2(box3) {
            var $box3 = $(box3);
            var pos = $box3.position();
            var width = $box3.width();
            var height = $box3.height();

            return [
                [pos.left, pos.left + width],
                [pos.top, pos.top + height]
            ];
        }

        //box4
        var box4 = $('#bar-1');

        function getPositions2(box4) {
            var $box4 = $(box4);
            var pos = $box4.position();
            var width = $box4.width();
            var height = $box4.height();

            return [
                [pos.left, pos.left + width],
                [pos.top, pos.top + height]
            ];
        }


        //----------------------------------------
        // compare functions 
        //----------------------------------------

        //horizontalMatch
        function comparePositions1(p1, p2) {
            if (p1[1] < 21) {
                $("#ball").removeClass('ball-bounce');
                $("#stick-1").removeClass('stick-hit');
                $("#ball").addClass('ball-animation');
            }
            if (p1[1] > p2[0]) {
                return true;
            } else {
                return false;
            }

        }

        //verticalMatch
        function comparePositions2(p1, p2) {
            if ((p1[1] > p2[0]) && (p1[0] < p2[1])) {
                return true;
            } else {
                return false;
            }
        }

        //goalHorizontalMatch
        function comparePositions3(p1, p2) {
            if (p2[1] > (p1[0] - 5)) {
                return true;
            } else {
                return false;
            }
        }

        //goalVerticalMatch
        function comparePositions4(p1, p2) {
            if ((p2[0] < p1[0]) && (p1[1] < p2[1])) {
                return true;
            } else {
                return false;
            }
        }



        //----------------------------------------
        // collision functions 
        //----------------------------------------

        function checkCollisions() {
            var pos = getPositions1(box1);
            var pos2 = getPositions2(box2);
            var pos3 = getPositions2(box3);
            var pos4 = getPositions2(box4);
            var horizontalMatch = comparePositions1(pos3[0], pos2[0]);
            var verticalMatch = comparePositions2(pos[1], pos2[1]);
            var goalHorizontalMatch = comparePositions3(pos4[0], pos3[0]);
            var goalVerticalMatch = comparePositions4(pos[1], pos4[1]);

            if ((horizontalMatch == true) && (verticalMatch == true)) {
                $("#stick-1").addClass('stick-hit');
                $("#ball").removeClass('ball-animation');
                $("#ball").addClass('ball-bounce');
            }

            if ((goalHorizontalMatch == true) && (goalVerticalMatch == true)) {
                $("#horizontal").removeClass('horizontal-animation');
                $("#horizontal").css("animation", "");
                $("#ball").addClass('ball-goal');
                setTimeout(function() {
                    $("#bar").css("animation", "");
                    $('.popup-success').modal('show');
                }, 1500)
                clearInterval(interval);
                $('#restart-play').prop('disabled', false);
            }

        }

    }



});