{
    var start = new Date;
    start.setHours(19, 34, 0); // 11pm
    start.setDate(11)
  
    function pad(num) {
      return ("0" + parseInt(num)).substr(-3);
    }
  
    function tick() {
      var now = new Date;

      var remain = ((now - start) / 1000);
      var hh = pad((remain / 60 / 60));
      var mm = pad((remain / 60) % 60);
      var ss = pad(remain % 60);
      document.getElementById('countdown').innerHTML =
        hh + " : " + mm + " : " + ss;
      setTimeout(tick, 1000);
    }
  
    document.addEventListener('DOMContentLoaded', tick);
}
