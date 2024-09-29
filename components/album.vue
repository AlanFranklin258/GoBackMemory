<template>
  <div :class="'book' + postCls">
    <div
      v-for="(page, index) in albumPages"
      :id="'album-page' + index"
      :style="setPageStyle(index)"
      :key="page"
      class="album-page"
    >
      <div
        :style="setPageBackBackground(index)"
        @click="prevPage"
        :class="'page-back' + postCls"
      >
        <img
          :src="page.pageBack"
          v-if="page.pageBack"
          :class="'page-picture' + postCls"
          alt=""
        />
        <div v-if="!page.pageBack && !page.pageFront" class="programme">
          <div :class="'programme-title' + postCls">节目介绍</div>
          <div
            v-for="(para, idx) in programme"
            :key="idx"
            :class="'programme-content' + postCls"
          >
            {{ para }}
          </div>
        </div>
      </div>
      <div
        :style="setPageFrontBackground(index)"
        @click="changePage"
        :class="'page-front' + postCls"
      >
        <img
          :src="page.pageFront"
          v-if="page.pageFront"
          :class="'page-picture' + postCls"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Album",
  props: {
    // eslint-disable-next-line vue/require-valid-default-prop
    pictures: { type: Array, default: [] },
    programme: { type: String, default: "" },
  },
  data: () => ({
    currentIndex: 0,
    albumPages: [],
    viewPage: false,
    postCls: "",
  }),
  created() {
    this.getAlbumPages();
  },
  mounted() {
    if (import.meta.client) {
      const isMobile =
        /(Android|webOS|iPhone|iPod|tablet|BlackBerry|Mobile|iPad)/i.test(
          navigator.userAgent
        );
      this.postCls = isMobile ? " mobile" : "";
    }
  },
  methods: {
    getAlbumPages() {
      this.albumPages.push({
        pageFront: "",
        pageBack: "",
      });
      for (let i = 0; i < this.pictures.length - 1; i = i + 2) {
        this.albumPages.push({
          pageFront: this.pictures[i],
          pageBack: this.pictures[i + 1],
        });
      }
      if (this.pictures.length % 2 === 1) {
        this.albumPages.push({
          pageFront: this.pictures[this.pictures.length - 1],
          pageBack: "",
        });
      }
    },
    setPageStyle(index) {
      return {
        zIndex: this.albumPages.length - index,
      };
    },
    setPageFrontBackground(index) {
      if (index === 0) {
        return this.postCls
          ? {
              backgroundImage: "url('/GoBack/images/m_album_cover.webp')",
              backgroundSize: "cover",
              boxShadow: "0 0 0.5rem rgba(0,0,0,0.5)",
            }
          : {
              backgroundImage: "url('/GoBack/images/album_cover.webp')",
              backgroundSize: "contain",
              boxShadow: "0 0 0.5rem rgba(0,0,0,0.5)",
            };
      }
      return this.postCls
        ? {
            backgroundImage: "url('/GoBack/images/m_album_right.webp')",
            backgroundSize: "cover",
            boxShadow: "0 0 0.5rem rgba(0,0,0,0.5)",
          }
        : {
            backgroundImage: "url('/GoBack/images/album_right.webp')",
            backgroundSize: "contain",
            boxShadow: "0 0 0.5rem rgba(0,0,0,0.5)",
          };
    },
    setPageBackBackground(index) {
      return this.postCls
        ? {
            backgroundImage: "url('/GoBack/images/m_album_left.webp')",
            backgroundSize: "cover",
            boxShadow: "0 0 0.5rem rgba(0,0,0,0.5)",
          }
        : {
            backgroundImage: "url('/GoBack/images/album_left.webp')",
            backgroundSize: "contain",
            boxShadow: "0 0 0.5rem rgba(0,0,0,0.5)",
          };
    },
    changePage() {
      const book = document.querySelector("[class^='book']");
      const pageDoms = document.querySelectorAll("[class^='album-page']");
      if (this.currentIndex >= pageDoms.length) {
        this.currentIndex = 0;
        book.style.transform = this.postCls ? "translateY(0)" : "translateX(0)";
        let index = 0;
        while (index < pageDoms.length) {
          pageDoms[index].style.transition = "0.5s";
          pageDoms[index].style.transform = this.postCls
            ? "rotateX(0)"
            : "rotateY(0)";
          pageDoms[index].style.zIndex = pageDoms.length - index;
          index++;
        }
        return;
      }
      book.style.transition = "2s";
      book.style.transform = this.postCls? "translateY(100%)": "translateX(50%)";
      pageDoms[this.currentIndex].style.transition = "2s";
      pageDoms[this.currentIndex].style.transform = this.postCls
        ? "rotateX(150deg)"
        : "rotateY(-150deg)";
      pageDoms[this.currentIndex].style.zIndex = ++this.currentIndex;
    },
    prevPage() {
      const book = document.querySelector("[class^='book']");
      const pageDoms = document.querySelectorAll("[class^='album-page']");
      console.log(this.currentIndex);
      this.currentIndex--;
      pageDoms[this.currentIndex].style.transition = "2s";
      pageDoms[this.currentIndex].style.transform = this.postCls
        ? "rotateX(0)"
        : "rotateY(0)";
      pageDoms[this.currentIndex].style.zIndex =
        pageDoms.length - this.currentIndex;
      if (this.currentIndex === 0) {
        book.style.transform = this.postCls ? "translateY(0)" : "translateX(0)";
      }
    },
    sleep(time) {
      const start = new Date().getTime() + time;
      while (true) {
        if (new Date().getTime() > start) return;
      }
    },
  },
};
</script>

<style scoped lang="less">
.book {
  width: 30rem;
  height: 40rem;
  position: relative;
  transform-style: preserve-3d;
  perspective: 100rem;
  background-image: url("/GoBack/images/album_end.webp");
  background-size: contain;
  border-radius: 1rem 2rem 2rem 1rem;

  &.mobile {
    background-image: url('/GoBack/images/m_album_end.webp');
    background-size: cover;
    width: 20rem;
    height: 15rem;
    border-radius: 0.5rem 0.5rem 1rem 1rem;
  }
}

.album-page {
  transform-origin: left;
  transform-style: preserve-3d;
  position: absolute;
  left: 0;
  top: 0;
}

.page-front {
  width: 30rem;
  height: 40rem;
  backface-visibility: hidden;
  border-radius: 1rem 2rem 2rem 1rem;

  &.mobile {
    width: 20rem;
    height: 15rem;
    border-radius: 0.5rem 0.5rem 1rem 1rem;
  }
}

.page-front:hover {
  cursor: pointer;
}

.page-back {
  width: 30rem;
  height: 40rem;
  transform: rotateY(180deg);
  border-radius: 2rem 1rem 1rem 2rem;

  &.mobile {
    transform: rotateX(180deg);
    width: 20rem;
    height: 15rem;
    border-radius: 1rem 1rem 0.5rem 0.5rem;
  }
}

.page-back:hover {
  cursor: pointer;
}

.page-front,
.page-back {
  display: flex;
  justify-content: center;
  align-items: end;
  position: absolute;
  left: 0;
  top: 0;
}

.page-picture {
  width: 28rem;
  height: 38rem;
  object-fit: contain;
  margin: auto;

  &.mobile {
    width: 19rem;
    height: 14rem;
  }
}

.programme {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.programme-title {
  width: 100%;
  margin: 2rem 0;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;

  &.mobile {
    margin: 1rem 0;
    font-size: 1rem;
  }
}

.programme-content {
  width: 90%;
  text-align: left;
  font-size: 1rem;
  text-indent: 2rem;
  font-family: Kai, serif;

  &.mobile {
    font-size: 0.6rem;
    text-indent: 1rem;
  }
}

.v-enter-active {
  transition: 0s;
}

.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
