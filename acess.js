// Request access to camera and microphone
navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  .then(stream => {
    // Access granted, attach the stream to a video element
    const video = document.createElement('video');
    video.srcObject = stream;
    document.body.appendChild(video);
    video.play();
  })
  .catch(error => {
    console.error('Access denied', error);
  });
