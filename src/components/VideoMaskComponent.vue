<template>
  <main>
    <section class="mask-airfrance">
      <div class="video-container wrapper appear fromLeftToRight">
        <video autoplay muted loop playsinline>
          <source src="/videos/sky.mp4" type="video/mp4" />
          Le navigateur ne supporte pas la vidéo.
        </video>
      </div>
      <div class="svg-container">
        <svg preserveAspectRatio="xMidYMid slice" viewBox="0 0 285 80" height="100%">
          <defs>
            <mask id="mask" x="0" y="0" width="100%" height="100%">
              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="white"
                class="appear"
              />
              <text
                x="50%"
                y="50%"
                dominant-baseline="auto"
                text-anchor="middle"
                fill="black"
              >
                AIR FRANCE
              </text>
              <!-- AIRFRANCE -->
              <text
                x="50%"
                y="75%"
                dominant-baseline="auto"
                text-anchor="middle"
                fill="black"
              >
                {{ $t('slogan') }}
              </text>
            </mask>
          </defs>
          <rect
            id="text-background"
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="var(--mask-fill)"
            mask="url(#mask)"
          />
        </svg>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
// CHANGER TO BLACK AVEC LE DARKMODE ET LE BODY DE APP EN BLACK AUSSI
#text-background {
  --mask-fill: white;
}

body.dark-mode #text-background {
  --mask-fill: black;
}
main {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 50px;

  .mask-airfrance {
    position: relative;
    width: 100%;
    height: 800px;
    @media (min-width: 320px) and (max-width: 1920px) {
       margin: -25px auto;
      height: 350px;
    }
    @media (min-width: 1921px) and (max-width: 2440px) {
          margin: auto;
          height: 500px;
    }
    @media (min-width: 2441px) {
       margin: auto;
    }

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
      @media (min-width: 320px) and (max-width: 1920px) {
      margin: auto;
      height: 350px;
    }
    @media (min-width: 1921px) and (max-width: 2440px) {
          margin: auto;
          height: 500px;
    }
      width: 100%;
      height: 800px;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 100;

      svg {
        width: 100%;
        height: 100%;

        mask {
          width: 100%;
          rect {
            display: flex;
            justify-self: center;
            align-self: center;
          }

          text {
            @media (min-width: 320px) and (max-width: 991px) {
              font-size: 1.6vw;
            }
            @media (min-width: 992px) and (max-width: 1920px) {
              font-size: 1vw;
            }
            @media (min-width: 1921px) and (max-width: 2440px) {
              font-size: 20px;
            }
            @media (min-width: 2441px) {
              font-size: 16px;
              letter-spacing: 2px;
            }
            font-size: 4vw;
            font-weight: 900;
            font-family: "Courier New", Courier, monospace;
          }
        }
      }
    }
  }
  .slogan {
    div {
      color: #002157;
      @media (min-width: 320px) and (max-width: 550px) {
        letter-spacing: 6px;
        font-size: 3vw;
      }
      @media (min-width: 991px) {
        letter-spacing: 8px;
        font-size: 3.6vw;
        margin-top: 150px;
      }
      opacity: 0;
    }
  }
}
</style>
