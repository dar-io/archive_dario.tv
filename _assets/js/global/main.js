$(document).ready(function() {

  var animation = bodymovin.loadAnimation({
  container: document.getElementById('lottie'), // Required
  path: '/assets/lottie/angry_emoji.json', // Required
  renderer: 'svg/canvas/html', // Required
  loop: true, // Optional
  autoplay: true, // Optional
  name: "Hello World", // Name for future reference. Optional.
  })
});
