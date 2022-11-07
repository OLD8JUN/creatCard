<template>
  <div>
    <div id="contentHolder">
      <video id="video" ref="video" autoplay style="background-color: rgba(0,0,0,0%)" :width="videoWidth"
             :height="videoWidth"></video>
      <canvas id="canvas" :height="videoHeight" :width="videoWidth"></canvas>
      <canvas id="canvas_bg" style="display: none" :height="videoHeight" :width="videoWidth"></canvas>
      <img id="imgXX" src="" :width="videoWidth" :height="videoHeight"/>
    </div>
    <button id="btn_snap" onclick="takePhoto()">拍照</button>
    <input type="color" oninput="changeBgColor(this.value)" value="#0066cc"/>
  </div>
</template>

<script>
import * as bodyPix from '@tensorflow-models/body-pix';
import * as tf from '@tensorflow/tfjs';
export default {
  name: 'App',
  data() {
    return {
      videoWidth: 300,
      videoHeight: 300,
      thisCancas: null,
      thisContext: null,
      model: {
        architecture: 'MobileNetV1',
        outputStride: 16,
        multiplier: 0.75,
        quantBytes: 2
      },
      radio: 2,
      bcRadio: 0,
      videoCanvas: null,     // 处理后的视频帧的绘制区域
      net: null,
      backgroundImg: null,


    }
  },
  mounted() {
    this.init()
  },
  created() {
  },
  methods: {
    async init(){
      const video = document.querySelector('video');
      const canvas = document.getElementById('canvas');
      const webcam = await tf.data.webcam(video);
      const modelUrl = 'https://storage.googleapis.com/tfjs-models/savedmodel/mobilenet_v2_1.0_224/model.json'
      const model = await tf.loadGraphModel(modelUrl);

      let [r1i, r2i, r3i, r4i] = [tf.tensor(0.), tf.tensor(0.), tf.tensor(0.), tf.tensor(0.)];

      const downsample_ratio = tf.tensor(0.5);
      while (true) {
        await tf.nextFrame();
        const img = await webcam.capture();
        const src = tf.tidy(() => img.expandDims(0).div(255));
        const [fgr, pha, r1o, r2o, r3o, r4o] = await model.executeAsync(
            { src, r1i, r2i, r3i, r4i, downsample_ratio },
            ['fgr', 'pha', 'r1o', 'r2o', 'r3o', 'r4o']
        );
        this.drawMatte(fgr.clone(), pha.clone(), canvas);
        tf.dispose([img, src, fgr, pha, r1i, r2i, r3i, r4i]);
        [r1i, r2i, r3i, r4i] = [r1o, r2o, r3o, r4o];
      }
    },
    async drawMatte(fgr, pha, canvas) {
      const canvas_bg = document.getElementById('canvas_bg');
      const rgba = tf.tidy(() => {
        const rgb = (fgr !== null) ?
            fgr.squeeze(0).mul(255).cast('int32') :
            tf.fill([pha.shape[1], pha.shape[2], 3], 255, 'int32');
        const a = (pha !== null) ?
            pha.squeeze(0).mul(255).cast('int32') :
            tf.fill([fgr.shape[1], fgr.shape[2], 1], 255, 'int32');
        return tf.concat([rgb, a], -1);
      });

      fgr && fgr.dispose();
      pha && pha.dispose();
      const [height, width] = rgba.shape.slice(0, 2);
      const pixelData = new Uint8ClampedArray(await rgba.data());
      const imageData = new ImageData(pixelData, width, height);
      canvas.width = width;
      canvas.height = height;
      var context = canvas.getContext("2d")
      context.putImageData(imageData, 0, 0);
      context.getImageData(0, 0, width, height)
      context.globalCompositeOperation = "destination-over"
      context.drawImage(canvas_bg, 0, 0)
      rgba.dispose();
    }
  }
}
</script>

<style>
.root {
  margin: 40px 50px;
}

.operation {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.container {
  margin-top: 20px;
  display: flex;
}

.video {
  padding: 20px;
}

.bc-img {
  width: 144px;
  height: 108px;
}

.flipHorizontal {
  transform: rotateY(180deg);
}
</style>
