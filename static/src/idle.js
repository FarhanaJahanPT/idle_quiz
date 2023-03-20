odoo.define('idle_quiz.idle_time', function (require) {
 var PublicWidget = require('web.public.widget');
   console.log(PublicWidget,'public')
   var rpc = require('web.rpc');
   var idle_timer;
   this.$('.time_text').hide();
   PublicWidget.registry.PublicWidgetQuizIdleTimer = PublicWidget.Widget.extend({

//   choose survey form id as selector

       selector: '.o_survey_form',
        start: function () {
        this.$('.time_text').hide();

//   take field value from required model using rpc.query

        rpc.query({
            model:'survey.survey',
            method:'get_idletime',
            args:[0]
        }).then(function(result){
        idle_timer =result;

//     assign the result value to a variable

        })

//     assign a function for reset time at the time mouse click,move,keypress,window click,touch start

      let timer,timerCount ;
      window.onload = resetTimer;
      window.onmousemove = resetTimer;
      window.onmousedown = resetTimer;
      window.ontouchstart = resetTimer;
      window.onclick = resetTimer;
      window.onkeypress = resetTimer;


      function resetTimer() {
      clearTimeout(timer);

//    set idle_time

      timerCount=idle_timer+10
      timer = setInterval(startTimer, 1000)
      this.$('.time_text').hide();
      this.$('.idle_time_countdown').hide();
        }

      function startTimer() {

//      set timer count,and assign that count to ui form using append

        timerCount--;

        this.$('.idle_time_countdown').empty();
        this.$('.idle_time_countdown').append(timerCount);

        if(timerCount <= 10){
        this.$('.time_text').show();
        this.$('.idle_time_countdown').show();
        }
        else{
        this.$('.time_text').hide();
        this.$('.idle_time_countdown').hide();

        }

//      when time count is zero automatically goto next page

        if(timerCount == 0){
        $('.btn-primary').click();
        this.$('.idle_time_countdown').empty();
        resetTimer();
        }
      }
}
});
});
