<template>
  <main>
    <section id="first-part">
      <div class="container appear presentation">
        <p>{{ $t("hello") }}</p>
        <p>{{ $t("myself") }}</p>
        <p>{{ $t("data") }}</p>
      </div>
      <div class="container appear-one">
        <ul>
          <li>
            {{ $t("flightAttended") }}: <span>{{ flightAttended }}</span>
          </li>
          <li>
            {{ $t("hoursInFlight") }}: <span>{{ hoursInFlight }}</span>
          </li>
          <li>
            {{ $t("milesTravelled") }}: <span>{{ milesTravelled }}</span>
          </li>
          <li>
            {{ $t("incidentEncountered") }}:
            <span>{{ incidentEncountered }}</span>
          </li>
          <li>
            {{ $t("countryDiscovered") }}:
            <span>{{ countryDiscovered }}</span>
          </li>
        </ul>
      </div>
    </section>
    <section id="second-part">
      <div class="container appear">
        <p>{{ $t("amateur") }}</p>
        <p>{{ $t("determination") }}</p>
        <p>{{ $t("qualities") }}</p>
        <p>{{ $t("motivation") }}</p>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";

const finalFlightAttended = 128;
const finalHoursInFlight = 376;
const finalMilesTravelled = 154203;
const finalIncidentEncountered = 0;
const finalCountryDiscovered = 21;

// Reactive display values
const flightAttended = ref(0);
const hoursInFlight = ref(0);
const milesTravelled = ref(0);
const incidentEncountered = ref(0);
const countryDiscovered = ref(0);

// Animate function
function animateValue(refVar, endValue, duration = 2000) {
  const startTime = performance.now();
  // const startValue = 0;

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    refVar.value = Math.floor(progress * endValue);
    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      refVar.value = endValue; // ensure final value is set
    }
  }

  requestAnimationFrame(update);
}

onMounted(() => {
  animateValue(flightAttended, finalFlightAttended);
  animateValue(hoursInFlight, finalHoursInFlight);
  animateValue(milesTravelled, finalMilesTravelled);
  animateValue(incidentEncountered, finalIncidentEncountered);
  animateValue(countryDiscovered, finalCountryDiscovered);
});
</script>

<style scoped lang="scss">
main {
  height: 80vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;

  @media (min-width: 320px) and (max-width: 551px) {
    margin-top: 75px;
  }

  #first-part {
    margin-bottom: 500px;
  }

  section {
    scroll-snap-align: start;
    height: 100vh;

    @media (min-width: 551px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
    }

    div {
      @media (min-width: 320px) and (max-width: 991px) {
        margin: 25px auto;
      }
      opacity: 0;

      p {
        margin: 25px auto;
        @media (min-width: 320px) and (max-width: 550px) {
          letter-spacing: 3px;
          line-height: 51px;
          font-size: 24px;
          text-align: center;
        }
        @media (min-width: 551px) and (max-width: 991px) {
          letter-spacing: 3px;
          line-height: 51px;
          font-size: 24px;
          text-align: center;
        }
        @media (min-width: 992px) and (max-width: 1920px) {
          letter-spacing: 3px;
          line-height: 51px;
          font-size: 1.9vw;
        }
        @media (min-width: 1921px) and (max-width: 2440px) {
          font-size: 2.5vw;
        }
        @media (min-width: 2441px) {
          font-size: 2.5vw;
          letter-spacing: 2px;
        }
      }

      ul {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-self: center;
        width: 100%;
        margin: 0 auto;

        li {
          align-items: center;
          margin: 15px auto;

          @media (min-width: 320px) and (max-width: 991px) {
            letter-spacing: 3px;
            line-height: 51px;
            font-size: 24px;
            text-align: center;
          }
          @media (min-width: 992px) and (max-width: 1920px) {
            font-size: 1vw;
          }
          @media (min-width: 1921px) and (max-width: 2440px) {
            font-size: 2.5vw;
          }
          @media (min-width: 2441px) {
            font-size: 2.5vw;
            letter-spacing: 2px;
          }

          span {
            font-weight: 900;
            color: gray;
          }
        }

        span,
        li {
          font-weight: 900;
          font-size: 3vw;
        }
      }
    }
  }
}

</style>
