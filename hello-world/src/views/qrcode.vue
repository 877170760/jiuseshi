<template>
  <div class="qrcode">
    <div class="code">
      <div class="qrcode-drop-zone" v-show="qrcode">
        <!-- decode是扫描结果的函数，torch用于是否需要打开手电筒，init用于检查该设备是否能够调用摄像头的权限，camera可用于打开前面或者后面摄像头  -->
        <qrcode-drop-zone @decode="onDecode">
          <qrcode-stream @decode="onDecode" :torch="torchActive" @init="onInit" :camera="camera">
            <div class="qr-scanner">
              <div class="box">
                <div class="line"></div>
                <div class="angle"></div>
              </div>
            </div>
          </qrcode-stream>
        </qrcode-drop-zone>
      </div>
      <!-- <div class="code-button">
        <van-button type="info"
                    @click="switchCamera"
                    plain>相机反转</van-button>
        <van-button type="info" @click="ClickFlash" plain>打开手电筒</van-button>
        <van-button type="info"
                    @click="turnCameraOff"
                    plain>
          {{ qrcode === true ? '关闭相机' : '打开相机' }}
        </van-button>
      </div>-->
    </div>
  </div>
</template>
<script>
// 引用vue-qrcode-reader插件
import { QrcodeStream, QrcodeDropZone } from "vue-qrcode-reader";
export default {
  name: "Approve",
  props: {
    camera: {
      type: String,
      default: "rear",
    },

    torchActive: {
      type: Boolean,
      default: false,
    },
    qrcode: {
      type: Boolean,
      default: false,
    },

    noStreamApiSupport: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return { error: "" };
  },
  created() {},
  components: {
    // 注册组件
    QrcodeStream,
    QrcodeDropZone,
    // QrcodeCapture
  },

  methods: {
    // 扫码结果回调
    onDecode(result) {
      this.$emit("onDecode", result);
    },
    // 相机反转
    switchCamera() {
      this.$emit("switchCamera");
    },
    // 关闭、打开相机
    turnCameraOff() {
      this.$emit("turnCameraOff");
    },
    // 打开手电筒
    ClickFlash() {
      this.$emit("ClickFlash");
    },
    // 检查是否调用摄像头
    onInit(promise) {
      this.$emit("onInit", promise);
    },
  },
};
</script>
<style lang="scss" scoped>
::v-deep {
  .qrcode-stream-camera {
    height: 100vh;
  }
}
.code {
  // width: 500px;
  // height: 500px;
  width: 100%;
  height: 100%;
  // margin: 88px auto 0;
  .qrcode-drop-zone {
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    background: #000;
  }
  .code-button {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 10px;
    display: flex;
    .van-button {
      flex: 1;
      border: none;
    }
  }

  .qr-scanner {
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(
        0deg,
        transparent 24%,
        rgba(32, 255, 77, 0.1) 25%,
        rgba(32, 255, 77, 0.1) 26%,
        transparent 27%,
        transparent 74%,
        rgba(32, 255, 77, 0.1) 75%,
        rgba(32, 255, 77, 0.1) 76%,
        transparent 77%,
        transparent
      ),
      linear-gradient(
        90deg,
        transparent 24%,
        rgba(32, 255, 77, 0.1) 25%,
        rgba(32, 255, 77, 0.1) 26%,
        transparent 27%,
        transparent 74%,
        rgba(32, 255, 77, 0.1) 75%,
        rgba(32, 255, 77, 0.1) 76%,
        transparent 77%,
        transparent
      );
    background-size: 3rem 3rem;
    background-position: -1rem -1rem;
    position: relative;
    background-color: #1110;
    /* background-color: #111; */
  }
  .qr-scanner .box {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
    /* background: url('http://resource.beige.world/imgs/gongconghao.png') no-repeat center center; */
  }
  .qr-scanner .line {
    height: calc(100% - 2px);
    width: 100%;
    background: linear-gradient(180deg, rgba(0, 255, 51, 0) 43%, #00ff33 211%);
    border-bottom: 3px solid #00ff33;
    transform: translateY(-100%);
    animation: radar-beam 2s infinite alternate;
    animation-timing-function: cubic-bezier(0.53, 0, 0.43, 0.99);
    animation-delay: 1.4s;
  }
  .qr-scanner .box:after,
  .qr-scanner .box:before,
  .qr-scanner .angle:after,
  .qr-scanner .angle:before {
    content: "";
    display: block;
    position: absolute;
    width: 3vw;
    height: 3vw;
    border: 0.2rem solid transparent;
  }
  .qr-scanner .box:after,
  .qr-scanner .box:before {
    top: 0;
    border-top-color: #00ff33;
  }

  .qr-scanner .angle:after,
  .qr-scanner .angle:before {
    bottom: 0;
    border-bottom-color: #00ff33;
  }

  .qr-scanner .box:before,
  .qr-scanner .angle:before {
    left: 0;
    border-left-color: #00ff33;
  }
  .qr-scanner .box:after,
  .qr-scanner .angle:after {
    right: 0;
    border-right-color: #00ff33;
  }
  @keyframes radar-beam {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }
}
</style>