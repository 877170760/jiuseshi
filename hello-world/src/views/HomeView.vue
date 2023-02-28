<template>
  <div class="home-page">
    <div v-if="show==false">
      <div
        @click="clickCode"
        style="width: 200px;
    height: 200px;
    line-height: 200px;
    margin: 0 auto;"
      >扫一扫{{qrCodeText}}</div>
    </div>
    <div style="width:100vw" v-else>
      <div class="qrcode">
        <div class="box">
          <qrCode
            :qrcode="qrcode"
            :camera="camera"
            :torchActive="torchActive"
            @switchCamera="switchCamera"
            @ClickFlash="ClickFlash"
            @turnCameraOff="turnCameraOff"
            @onDecode="onDecode"
            @onInit="onInit"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import qrCode from "./qrcode.vue";

export default {
  name: "qrcode",
  components: {
    qrCode,
  },
  data() {
    return {
      show: false,
      qrcode: false,
      torchActive: false,
      camera: "rear",
      qrCodeText: "",
    };
  },
  mounted() {},
  methods: {
    // 打开相机
    clickCode() {
      this.show = true;
      // camera:: 'rear'--前摄像头，'front'后摄像头，'off'关闭摄像头，会获取最后一帧显示，'auto'开始获取摄像头
      this.qrcode = true;
      this.camera = "rear";
    },

    // 扫码结果回调
    onDecode(result) {
      console.log(result);
      this.qrCodeText = result;
      this.turnCameraOff();
      this.show = false;
    },
    // 相机反转
    switchCamera() {
      switch (this.camera) {
        case "front":
          this.camera = "rear";

          break;

        case "rear":
          this.camera = "front";

          break;

        default:
          this.$toast("错误");
      }
    },
    // 关闭相机？？？？？？
    turnCameraOff() {
      // this.camera = 'off'
      this.qrcode = !this.qrcode;
      if (this.camera === "off") {
        this.camera = "front";
      } else {
        this.camera = "off";
      }
    },
    // 打开手电筒
    ClickFlash() {
      switch (this.torchActive) {
        case true:
          this.torchActive = false;

          break;

        case false:
          this.torchActive = true;

          break;

        default:
          this.$toast("错误");
      }
    },
    // 检查是否调用摄像头
    async onInit(promise) {
      try {
        await promise;
      } catch (error) {
        console.log(error);
        if (error.name === "StreamApiNotSupportedError") {
        } else if (error.name === "NotAllowedError") {
          console.log("需要摄像头,拒绝了摄像头权限");
          this.errorMessage = "Hey! I need access to your camera";
        } else if (error.name === "NotFoundError") {
          console.log("没有摄像头");
          this.errorMessage = "Do you even have a camera on your device?";
        } else if (error.name === "NotSupportedError") {
          console.log("需要https");
          this.errorMessage =
            "Seems like this page is served in non-secure context (HTTPS, localhost or file://)";
        } else if (error.name === "NotReadableError") {
          console.log("无法访问摄像头");
          this.errorMessage =
            "Couldn't access your camera. Is it already in use?";
        } else if (error.name === "OverconstrainedError") {
          console.log("没有前置摄像头");
          this.errorMessage =
            "Constraints don't match any installed camera. Did you asked for the front camera although there is none?";
        } else {
          this.errorMessage = "UNKNOWN ERROR: " + error.message;
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
.qrcode {
  .box {
    width: 100%;
  }
}
</style>
