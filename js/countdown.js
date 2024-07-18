{
    var start = new Date;
    start.setHours(19, 34, 0); // 11pm
    start.setDate(11)
  
    function pad_two(num) {
      return ("0" + parseInt(num)).substr(-2);
    }

    function pad(num) {
      return ("0" + parseInt(num)).substr(-3);
    }
  
    function tick() {
      var now = new Date;
      start.setHours(10, 52, 0); // 11pm
      start.setDate(18)

      var remain = ((now - start) / 1000);
      var hh = pad((remain / 60 / 60));
      var mm = pad_two((remain / 60) % 60);
      var ss = pad_two(remain % 60);
      document.getElementById('countdown').innerHTML =
        hh + " : " + mm + " : " + ss;
      setTimeout(tick, 1000);
    }
  
    document.addEventListener('DOMContentLoaded', tick);
}
