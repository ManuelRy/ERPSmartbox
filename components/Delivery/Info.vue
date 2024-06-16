<template>
  <section class="font-poppins bg-white dark:bg-gray-900">
    <div class="pt-10">
      <h1
        class="mb-4 text-5xl tracking-tight font-sans font-extrabold text-blue-900 dark:text-white text-center"
      >
        Delivery
      </h1>
      <p class="text-center font-medium mb-12 text-lg sm:text-2xl text-pretty">
        SmartBox provides a luggage and parcel delivery Within the same day
      </p>
      <p
        class="text-center font-medium mb-12 text-lg sm:text-2xl text-pretty text-red-700"
      >
        HOW TO USE IT?
      </p>
    </div>
    <div class="btn flex justify-center align-center mb-2">
      <button
        type="button"
        class="text-center focus:outline-none text-white font-medium rounded-lg rounded-r-none lg:text-lg md:text-base px-12 py-4 me-0"
        :class="{ 'bg-orange-500': showStore, 'bg-orange-300': !showStore }"
        @click="handleClick(true)"
      >
        For Sender
      </button>
      <button
        type="button"
        class="text-center focus:outline-none text-white font-medium rounded-lg rounded-l-none lg:text-lg md:text-base px-12 py-4 me-0"
        :class="{ 'bg-orange-500': showTakeout, 'bg-orange-300': !showTakeout }"
        @click="handleClick(false)"
      >
        For Receiver
      </button>
    </div>
    <div v-if="showStore" class="to-store">
      <section class="bg-white dark:bg-gray-900" data-aos="fade-up">
        <div class="px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div class="grid gap-14 lg:grid-cols-4 md:grid-cols-2 md:gap-2">
            <div
              class="step-item rounded-xl bg-customOrange-300 p-6 text-center shadow-xl md:w-full"
              data-aos="zoom-in-up"
              data-aos-delay="200"
            >
              <h1
                class="step-title text-darken mb-3 text-xl font-bold lg:px-10"
              >
                Step 1
              </h1>
              <div class="step-icon mx-auto my-4">
                <img src="/img/process/qr.png" alt="" class="h-32 w-32" />
              </div>
              <h1
                class="step-info text-darken mb-3 text-xl font-medium lg:px-6"
              >
                Scan QR Code on our locker
              </h1>
            </div>
            <div
              class="step-item rounded-xl bg-customOrange-300 p-6 text-center shadow-xl md:w-full"
              data-aos="zoom-in-up"
              data-aos-delay="400"
            >
              <h1
                class="step-title text-darken mb-3 text-xl font-bold lg:px-10"
              >
                Step 2
              </h1>
              <div class="step-icon mx-auto my-4">
                <img src="/img/process/fill.png" alt="" class="h-32 w-32" />
              </div>
              <h1
                class="step-info text-darken mb-3 text-xl font-medium lg:px-6"
              >
                Fill in your information
              </h1>
            </div>
            <div
              class="step-item rounded-xl bg-customOrange-300 p-6 text-center shadow-xl md:w-full"
              data-aos="zoom-in-up"
              data-aos-delay="600"
            >
              <h1
                class="step-title text-darken mb-3 text-xl font-bold lg:px-10"
              >
                Step 3
              </h1>
              <div class="step-icon mx-auto my-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-32 w-32"
                  viewBox="0 0 72 72"
                >
                  <path
                    fill="#f4aa41"
                    d="M34.322 64.164a1 1 0 0 1-.5-.134l-22.69-13.332a1 1 0 0 1-.5-.866l-.25-27.414a1 1 0 0 1 .5-.866L35.072 7.22c.31-.178.69-.178 1 0l22.69 13.082a1 1 0 0 1 .003 1.731l-23.193 14l-.25 27.133a1 1 0 0 1-1 .998"
                  />
                  <path
                    fill="#f4aa41"
                    d="m36 64.572l24.759-14.108l-.346-28.476l-24.841 14.045z"
                  />
                  <path
                    fill="#d0cfce"
                    d="M44.442 37.978a2.47 2.47 0 0 1-1.25-2.163v-4.172l-22.88-15.53c.692-.456 6.218-3.632 6.56-3.722l26.15 13.002a1 1 0 0 1 .5.866v6.024a3.29 3.29 0 0 1-1.64 2.841l-4.945 2.854c-.77.45-1.725.45-2.496 0m.397 21.497v-3.336a2.98 2.98 0 0 1 1.485-2.572l6.073-3.507a1.847 1.847 0 0 1 2.77 1.6s-.022 1.605-.33 1.847c-2.04 1.61-9.998 6.279-9.998 5.968"
                  />
                  <path
                    fill="#3f3f3f"
                    d="M44.427 45.946v.869a1.497 1.497 0 0 0 2.246 1.296l6.804-3.76a2.28 2.28 0 0 0 1.14-1.975v-1.118a1.444 1.444 0 0 0-2.166-1.25l-6.745 3.724a2.56 2.56 0 0 0-1.279 2.214"
                  />
                  <path
                    fill="#fff"
                    d="m31.083 38.917l-8.298-4.653v7.442l8.298 4.653z"
                  />
                  <g
                    fill="none"
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  >
                    <path
                      d="M61.262 21.168L35.572 6.336L9.882 21.168v29.664l25.69 14.832l25.69-14.832zm-25.69 14.865v29.631m.058-29.631L9.94 21.201m42.577 5.049l8.745-5.049m-25.69 14.832l8.616-4.974"
                    />
                    <path
                      d="m26.884 11.457l25.638 14.801v6.025a2.28 2.28 0 0 1-1.14 1.975l-4.944 2.854a1.497 1.497 0 0 1-2.246-1.296v-4.749L18.624 16.25m12.459 22.667l-8.298-4.653v7.442l8.298 4.653zm23.084 15.749V51.66a.847.847 0 0 0-1.271-.734l-6.073 3.506a1.97 1.97 0 0 0-.985 1.707v3.336m-1.411-13.529v.869a1.497 1.497 0 0 0 2.246 1.296l6.804-3.76a2.28 2.28 0 0 0 1.14-1.975v-1.118a1.444 1.444 0 0 0-2.166-1.25l-6.745 3.724a2.56 2.56 0 0 0-1.279 2.214"
                    />
                  </g>
                </svg>
              </div>
              <h1
                class="step-info text-darken mb-3 text-xl font-medium lg:px-6"
              >
                Choose Package Size
              </h1>
            </div>
            <div
              class="step-item rounded-xl bg-customOrange-300 p-6 text-center shadow-xl md:w-full"
              data-aos="zoom-in-up"
              data-aos-delay="800"
            >
              <h1
                class="step-title text-darken mb-3 text-xl font-bold lg:px-10"
              >
                Step 4
              </h1>
              <div class="step-icon mx-auto my-4">
                <img src="/img/process/done.png" alt="" class="h-32 w-32" />
              </div>
              <h1
                class="step-info text-darken mb-3 text-xl font-medium lg:px-6"
              >
                Place your package in locker
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div v-if="showTakeout" class="to-takeout flex items-center justify-center">
      <section class="bg-white dark:bg-gray-900 pt-0" data-aos="fade-up">
        <div class="py-2 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div class="grid gap-14 lg:grid-cols-4 md:grid-cols-2 md:gap-2">
            <div
              class="step-item rounded-xl bg-customOrange-300 p-6 text-center shadow-xl md:w-full"
              data-aos="zoom-in-up"
              data-aos-delay="200"
            >
              <h1
                class="step-title text-darken mb-3 text-xl font-bold lg:px-10"
              >
                Step 1
              </h1>
              <div class="step-icon mx-auto my-4">
                <img src="/img/process/email.png" alt="" class="h-32 w-32" />
              </div>
              <h1
                class="step-info text-darken mb-3 text-xl font-medium lg:px-6"
              >
                Receive PIN through SMS
              </h1>
            </div>
            <div
              class="step-item rounded-xl bg-customOrange-300 p-6 text-center shadow-xl md:w-full"
              data-aos="zoom-in-up"
              data-aos-delay="400"
            >
              <h1
                class="step-title text-darken mb-3 text-xl font-bold lg:px-10"
              >
                Step 2
              </h1>
              <div class="step-icon mx-auto my-4">
                <img src="/img/process/qr.png" alt="" class="h-32 w-32" />
              </div>
              <h1
                class="step-info text-darken mb-3 text-xl font-medium lg:px-6"
              >
                Scan QR Code on our locker
              </h1>
            </div>
            <div
              class="step-item rounded-xl bg-customOrange-300 p-6 text-center shadow-xl md:w-full"
              data-aos="zoom-in-up"
              data-aos-delay="600"
            >
              <h1
                class="step-title text-darken mb-3 text-xl font-bold lg:px-10"
              >
                Step 3
              </h1>
              <div class="step-icon mx-auto my-4">
                <img src="/img/process/pin.png" alt="" class="h-32 w-32" />
              </div>
              <h1
                class="step-info text-darken mb-3 text-xl font-medium lg:px-6"
              >
                Input your PIN
              </h1>
            </div>
            <div
              class="step-item rounded-xl bg-customOrange-300 p-6 text-center shadow-xl md:w-full"
              data-aos="zoom-in-up"
              data-aos-delay="800"
            >
              <h1
                class="step-title text-darken mb-3 text-xl font-bold lg:px-10"
              >
                Step 4
              </h1>
              <div class="step-icon mx-auto my-4">
                <img src="/img/process/done2.png" alt="" class="h-32 w-32" />
              </div>
              <h1
                class="step-info text-darken mb-3 text-xl font-medium lg:px-6"
              >
                Take out your belongings
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  data() {
    return {
      showStore: true,
      showTakeout: false,
    };
  },
  methods: {
    handleClick(isStore) {
      this.showStore = isStore;
      this.showTakeout = !isStore;
      this.$nextTick(() => {
        AOS.refresh();
      });
    },
  },
  mounted() {
    AOS.init();
  },
};
</script>

<style scoped>
.pt-10 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.step-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.step-icon {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.step-title {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.step-info {
  margin-top: 1rem;
}
@media (max-width: 640px) {
  .pt-10 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
.btn button {
  transition: width 0.3s ease-in-out;
}
</style>
