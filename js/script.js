console.log("ok", Vue);

const { createApp } = Vue;
const app = createApp({
  data: () => ({
    pictures: [
      {
        image: "01.jpg",
        name: "Svezia",
        description: "Scandinavia's blend of nature and innovation.",
      },
      {
        image: "02.jpg",
        name: "Norvegia",
        description: "Fjords, mountains, and coastal charm in Nordic splendor.",
      },
      {
        image: "03.jpg",
        name: "Alaska",
        description:
          "Untamed wilderness and rugged beauty in the Last Frontier.",
      },
      {
        image: "04.jpg",
        name: "Gran Canyon",
        description: "Nature's masterpiece, a colorful tapestry of cliffs.",
      },
      {
        image: "05.jpg",
        name: "Skyrim",
        description: "Epic Nordic fantasy with dragons and ancient magic.",
      },
    ],
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
