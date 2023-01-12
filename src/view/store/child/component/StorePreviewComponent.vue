<template>
  <div>
    <div class="container">
      <div class="preview-box">
        <div class="left">
          <van-image
            fit="cover"
            height="100%"
            radius="6"
            src="https://unpkg.com/@vant/assets/cat.jpeg"
            width="100%"
          />
        </div>
        <div class="right">
          <van-row
            align="center"
            class="first-line"
          >
            <van-col span="2">
              <div style="display: flex;">
                <van-tag
                  class="coupons"
                  type="danger"
                >
                  卷
                </van-tag>
              </div>
            </van-col>
            <van-col
              span="20"
              offset="1"
            >
              <h2>隆江猪脚饭（南职店）</h2>
            </van-col>
          </van-row>
          <van-row class="second-line">
            <van-col
              class="star"
            >
              4.3<span style="font-style: normal">分</span>
            </van-col>
            <van-col
              class="sale"
              offset="1"
            >
              月售1000+
            </van-col>
            <van-col
              class="avg"
              offset="1"
            >
              人均￥21
            </van-col>
          </van-row>
          <van-row
            align="center"
            class="third-line"
          >
            <van-col span="8">
              起送￥10
            </van-col>
            <van-col
              span="8"
              offset="8"
              class="address"
            >
              <van-icon name="guide-o" />200m
            </van-col>
          </van-row>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.container {
  .preview-box {
    height: 10vh;
    background-color: #FFF;
    padding: 8px;
    border-radius: 6px;
    box-sizing: border-box;

    .left {
      float: left;
      height: 100%;
      width: 30%;
    }

    .right {
      display: flex;
      flex-direction: column;
      float: right;
      width: 70%;
      height: 100%;
      padding-left: 8px;
      box-sizing: border-box;

      .first-line {
        justify-self: self-start;

        h2 {
          margin: 0;
          font-size: 16px;
          line-height: 1em;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }

      .second-line {
        display: flex;
        align-items: center;
        color: #858687;
        font-size: 12px;

        .star {
          color: #ff8000;
          font-size: 14px;
          font-weight: bold;
          font-style: italic;
        }
      }

      .third-line {
        flex: 1;
        align-items: flex-end;
        font-size: 12px;
        color: #858687;

        .address {
          text-align: right;
        }
      }
    }
  }
}
</style>