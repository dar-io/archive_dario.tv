//
// var waypoints = $('.hydrogen--wrap').waypoint(function (direction) {
//   if (direction == 'down') {
//
//       $('.global-header').css("height", "150px");
//       $('.global-header').css("font-size", "100%");
//   }
//   if (direction == 'up') {
//       $('.global-header').css("height", "100px");
//       $('.global-header').css("font-size", "200%");
//
//   }
// }, {
//   offset: '100%'
// });




$(function() {
  var itemQueue = []
  var delay = 200
  var queueTimer

  function processItemQueue () {
    if (queueTimer) return // We're already processing the queue
		queueTimer = window.setInterval(function () {
      if (itemQueue.length) {
        $(itemQueue.shift()).addClass('');
        processItemQueue()
      }
      else {
        window.clearInterval(queueTimer)
        queueTimer = null
      }
    }, delay)
  }

  $(".promo").waypoint(function () {
    itemQueue.push(this.element)
    processItemQueue()
  }, {
    offset: '98%',
    triggerOnce: true
  })
})


//
// var waypoints = $('.promo').waypoint(function() {
//     alert(this.element.id + ' animated fadeInLeft animate')
//     $(this.element).addClass('animated fadeInLeft animate');
//   }, {
//       offset: '70%',
//       triggerOnce: true
//   });
