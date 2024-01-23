console.log("ok", Vue);

const { createApp } = Vue;
const app = createApp({
  data: () => ({
    pictures,
    currentIndex: 0,
  }),
  computed: {
    lastElementIndex() {
      return this.pictures.length - 1;
    },
    isFirstIndex() {
      return this.currentIndex === 0;
    },
    isLastIIndex() {
      return this.currentIndex === this.pictures.length - 1;
    },
  },
  methods: {
    goToNext() {
      if (this.isLastIndex) this.currentIndex = 0;
      else this.currentIndex++;
    },
    goToPrev() {
      if (this.isFirstIndex) this.currentIndex = this.lastElementIndex;
      else this.currentIndex--;
    },
  },
});

app.mount("#root");
