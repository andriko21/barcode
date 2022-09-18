


// function App() {
//   let VIDEO = null;
//   let CANVAS = null;
//   let CONTEXT = null;

//   function main() {
//     console.log("main");
//     CANVAS = document.getElementById("myCanvas");
//     CONTEXT = CANVAS.getContext("2d");
//     CANVAS.width = window.innerWidth;
//     CANVAS.height = window.innerHeight;

//     let promise = navigator.mediaDevices.getUserMedia({ video: true });

//     promise
//       .then(function (signal) {
//         VIDEO = document.createElement("video");
//         VIDEO.srcObject = signal;
//         VIDEO.play();

//         VIDEO.onloadeddata = function () {
//           updateCanvas();
//         };
//       })
//       .catch(function (err) {
//         alert(`Camera: ${err}`);
//       });
//   }
//   function updateCanvas() {
//     CONTEXT.drawImage(VIDEO, 0, 0);

//     window.requestAnimationFrame(updateCanvas);
//   }

//   return (
//     <>
//       <h1>hello</h1>
//       <canvas id="myCanvas"></canvas>
//       <button onClick={main}>show me</button>
//     </>
//   );
// }

// export default App;


function App() {


  
  return (
    <>
    
    <div id="qr-reader" style="width: 600px"></div>
      
    </>
    
  )
}

export default App
