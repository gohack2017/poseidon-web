var FaceCover = {
  video: null,
  idel: 5000,

  run: function() {
    $("#face-cover").show();

    var that = this;

    navigator.getUserMedia = navigator.getUserMedia ||
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia;

    if (navigator.getUserMedia) {
       navigator.getUserMedia({video: { width: 500, height: 300 } },
          function(stream) {
             var video = document.querySelector('video');
             video.src = window.URL.createObjectURL(stream);
             video.onloadedmetadata = function(e) {
               video.play();
               var canvas = document.getElementById("face-canvas");
               canvas.width = video.videoWidth;
               canvas.height = video.videoHeight;
               that.video = document.getElementById("face-video");
               that.canvas = document.getElementById("face-canvas");
             };
          },
          function(err) {
            console.log("The following error occurred: " + err.name);
          }
       );
    } else {
       console.log("getUserMedia not supported");
    }

    setInterval(this.loopCheck.bind(this), this.idel)
  },

  loopCheck: function() {
    payload = {
      device_id: App.data.deviceId,
      face: this.screenShoot(),
    }

    ApiServer.monitor(payload, function(data){
      console.log(data);
    }, function(err){
      console.log(err)
    })
  },

  screenShoot: function() {
    this.canvas.getContext("2d").drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height);
    return this.canvas.toDataURL("image/JPEG");
  },
}
