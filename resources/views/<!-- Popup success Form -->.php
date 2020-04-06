 <!-- Popup success Form -->

 <div class="container">
     <div class="row" style=" height: 100%; margin-top: 7rem;">
         <div class="col-2 text-center">
             <div class="play-btn">
                 <button id="start-play" class="btn">Start Game</button>
                 <hr>
                 <button id="play" class="btn">Play</button>
             </div>
         </div>


         <div class="col-8 my-auto">
             <div class="board">
                 <div class="board-inner">
                     <figure id="circle" class="circle"></figure>
                 </div>
             </div>
             <div id="goal" class="goal">
                 <figure class="border-1"></figure>
                 <figure class="goal-line"></figure>
                 <figure class="border-2"></figure>
             </div>

             <div id="popup-success" class="modal fade popup-success">
                 <div class="modal-dialog success-dialog">
                     <!-- Modal content-->
                     <div class="modal-content">
                         <h1>Congrtulations!!! <span>Level Cleared</span></h1>
                         <h6>Next Level in <span id="time" style="color: blue;">5</span> </h6>
                     </div>
                 </div>
             </div>
         </div>
     </div>


     <script>
         $(document).ready(function() {
             $.ajaxSetup({
                 headers: {
                     'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                 }
             });
             //$('.popup-success').modal('show');
             $("#start-play").click(function() {
                 $('#goal').addClass('animate-goal');
             });




             function getPositions(box) {
                 var $box = $(box);
                 var pos = $box.position();
                 var width = $box.width();
                 var height = $box.height();
                 return [
                     [pos.left, pos.left + width],
                     [pos.top, pos.top + height]
                 ];
             }

             function comparePositions(p1, p2) {
                 var x1 = p1[0] < p2[0] ? p1 : p2;
                 var x2 = p1[0] < p2[0] ? p2 : p1;
                 return x1[1] > x2[0] || x1[0] === x2[0] ? true : false;
             }

             function checkCollisions() {
                 var box = $(".bomb")[0];
                 var pos = getPositions(box);

                 var pos2 = getPositions(this);
                 var horizontalMatch = comparePositions(pos[0], pos2[0]);
                 var verticalMatch = comparePositions(pos[1], pos2[1]);
                 var match = horizontalMatch && verticalMatch;
                 if (match) {
                     $("body").append("<p>COLLISION !!!</p>");
                 }
             }




             
             $("#play").click(function() {
                 $('#time').text(5);
                 $('#circle').addClass('animate-circle');
                 // $('.popup-success').modal('show');



                 var counter = 5;
                 var interval = setInterval(function() {

                     // Display 'counter' wherever you want to display it.
                     if (counter <= 0) {
                         $('.popup-success').modal('hide');
                         clearInterval(interval);
                         return;
                     } else {
                         $('#time').text(counter);
                         counter--;
                     }


                 }, 1000);
             });
         });
     </script>