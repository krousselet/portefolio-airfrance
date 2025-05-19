<template>
  <main>
    <section>
      <div class="video-container wrapper appear fromLeftToRight">
        <video autoplay muted loop playsinline preload>
          <source src="/videos/sky.mp4" type="video/mp4" />
          Le navigateur ne supporte pas la vidéo.
        </video>
      </div>
      <div class="svg-container">
        <svg preserveAspectRatio="xMidYMid slice" viewBox="0 0 285 80">
          <defs>
            <mask id="mask" x="0" y="0" width="100%" height="100%">
              <rect x="0" y="0" width="100%" height="100%" fill="white" class="appear"/>
              <text
                x="50%"
                y="50%"
                dominant-baseline="middle"
                text-anchor="middle"
                fill="black"
              >
                AIR FRANCE
              </text>
            </mask>
          </defs>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="white"
            mask="url(#mask)"
          />
        </svg>
      </div>
    </section>
    <section></section>
  </main>
</template>

<style scoped lang="scss">
main {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 50px;

  section {
    position: relative;
    margin: 0 auto;
    width: 100%;
    height: 300px;

    .wrapper {
      width: 100%;
      height: 100%;

      video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        z-index: -1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    .svg-container {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 100;

      svg {
        width: 100%;
        height: 100%;

        mask {
          width: 100%;
          max-height: 800px;
          rect {
            display: flex;
            justify-self: center;
            align-self: center;
            @media (min-width: 992px) and (max-width: 2440px) {
              height: 400px;
              max-height: 400px;
            }
            @media (min-width: 2441px) and (max-width: 3840px) {
                  height: 800px;
                  max-height: 800px;
            }
          }

          text {
            @media (min-width: 992px) and (max-width: 1920px) {
              font-size: 2.5vw;
            }
             @media (min-width: 1921px) and (max-width: 2440px) {
              font-size: 2vw;
            }
            @media (min-width: 2441px) {
              font-size: 1vw;
            }
            font-size: 4vw;
            font-weight: 900;
            font-family: "Courier New", Courier, monospace;
          }
        }
      }
    }
  }
}

@media (min-width: 320px) and (max-width: 550px) {
  main {
    height: 800px;
  }
}
</style>
