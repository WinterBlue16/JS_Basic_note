// Youtube 동영상 불러오기

var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    function onYouTubeIframeAPIReady(fileName) {
        var player = new YT.Player('player', {
            height: '290',
            width: '560',
            videoId: '불러오고 싶은 동영상 youtube id',
            events: {
              'onReady': onPlayerReady,
              'onStateChange': onPlayerStateChange
            }
        });
    }
    function onPlayerReady(event) {
         event.target.playVideo();
     }
