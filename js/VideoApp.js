function createVideoChat(videoID1,videoID2,chatRoomName){
  var videoChat = new SimpleWebRTC({
    // the id/element dom element that will hold "our" video
    localVideoEl: videoID1,
    // the id/element dom element that will hold remote videos
    remoteVideosEl: videoID2,
    // immediately ask for camera access
    autoRequestMedia: true
  });
  videoChat.on('readyToCall', function () {
    // you can name it anything
    videoChat.joinRoom(chatRoomName);
  });
}

createVideoChat("localVideo", "remoteVideos", "myChatRoom");