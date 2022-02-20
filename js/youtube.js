// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: 'hn4DXGwlrr8',
    playerVars: {
      autoplay: 1,
      loop: true,
      playlist: 'hn4DXGwlrr8',
    },
    events: {
      onReady: function (event) {
        event.target.mute();
      },
    },
  });
}
