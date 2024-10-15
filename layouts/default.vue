<template>
  <div :class="'layout' + postCls">
    <background></background>
    <div :class="'header' + postCls">
      <img :src="gobackLogo" :class="'logo' + postCls" />
      <div style="display: flex; flex-direction: column; align-items: start">
        <div :class="'title' + postCls">告白话剧社</div>
        <div :class="'sub-title' + postCls">GoBack Drama Theater</div>
      </div>
    </div>
    <el-menu
      :default-active="activeIndex"
      :router="true"
      :unique-opened="true"
      mode="horizontal"
      background-color="rgba(0,83,117,0.1)"
      :class="'nav-menu' + postCls"
      id="anchor"
      :style="{ backgroundColor: dynamicBackground }"
    >
      <div v-for="(n, sub) in nav" :key="n.label">
        <el-menu-item v-if="!nav[sub].hasOwnProperty('subNav')" :index="n.path">
          <template #title>
            <i :class="n.icon + ' text' + postCls"></i>
            <span :class="'text' + postCls">{{ n.label }}</span>
          </template>
        </el-menu-item>
        <el-sub-menu
          v-else
          :key="n.label"
          :index="sub"
          :class="'el-sub-menu' + postCls"
        >
          <template #title>
            <i :class="n.icon + ' text' + postCls"></i>
            <span :class="'text' + postCls">{{ n.label }}</span>
          </template>
          <el-menu-item
            v-for="sn in nav[sub].subNav"
            :key="sn.label"
            :index="sn.path"
          >
            <template #title>
              <i :class="sn.icon + ' sub-text' + postCls"></i>
              <span :class="'sub-text' + postCls">{{ sn.label }}</span>
            </template>
          </el-menu-item>
        </el-sub-menu>
      </div>
    </el-menu>
    <div :class="'main-content' + postCls">
      <el-carousel
        :height="dynamicHeight"
        trigger="click"
        :interval="5000"
        indicator-position="outside"
        :class="'banners' + postCls"
      >
        <el-carousel-item v-for="banner in banners" :key="banner">
          <img
            :src="banner"
            alt=""
            :class="'banner-img goback-mark' + postCls"
          />
        </el-carousel-item>
      </el-carousel>
      <slot id="page-anchor" />
    </div>
  </div>
</template>

<script>
import backgroundVue from "~/components/background.vue";

export default {
  components: { backgroundVue },
  data() {
    return {
      activeIndex: "1",
      nav: {
        home: {
          path: "/",
          label: "主页",
          icon: "bi bi-house-fill",
        },
        about: {
          label: "关于社团",
          icon: "bi bi-info-circle-fill",
          subNav: [
            {
              path: "/about/history",
              label: "发展沿革",
              icon: "bi bi-hourglass-split",
            },
            {
              path: "/about/constitution",
              label: "社团章程",
              icon: "bi bi-award-fill",
            },
            {
              path: "/about/notice",
              label: "网站更新公告",
              icon: "bi bi-rocket-takeoff-fill",
            },
          ],
        },
        activity: {
          label: "社团活动",
          icon: "bi bi-activity",
          subNav: [
            {
              path: "/activity/instruction",
              label: "演出事务指导意见",
              icon: "bi bi-lightbulb-fill",
            },
            {
              path: "/activity/show",
              label: "演出回顾",
              icon: "bi bi-camera-reels-fill",
            },
            {
              path: "/activity/party",
              label: "团建聚会",
              icon: "bi bi-balloon-fill",
            },
            {
              path: "/activity/scripts",
              label: "历年选本",
              icon: "bi bi-bookmark-star-fill",
            },
          ],
        },
        member: {
          label: "社团成员",
          icon: "bi bi-people-fill",
          subNav: [
            {
              path: "/member/teacher",
              label: "指导老师",
              icon: "bi bi-person-fill",
            },
            {
              path: "/member/fellow-1",
              label: "2015-2016",
              icon: "bi bi-person-arms-up",
            },
            {
              path: "/member/fellow-2",
              label: "2016-2017",
              icon: "bi bi-person-raised-hand",
            },
            {
              path: "/member/fellow-3",
              label: "2017-2018",
              icon: "bi bi-person-standing",
            },
            {
              path: "/member/fellow-4",
              label: "2018-2019",
              icon: "bi bi-person-walking",
            },
            {
              path: "/member/fellow-5",
              label: "2019-2020",
              icon: "bi bi-person-arms-up",
            },
            {
              path: "/member/fellow-6",
              label: "2020-2021",
              icon: "bi bi-person-raised-hand",
            },
            {
              path: "/member/fellow-7",
              label: "2021-2022",
              icon: "bi bi-person-standing",
            },
            {
              path: "/member/fellow-8",
              label: "2022-2023",
              icon: "bi bi-person-walking",
            },
            {
              path: "/member/fellow-9",
              label: "2023-2024",
              icon: "bi bi-person-arms-up",
            },
            {
              path: "/member/fellow-10",
              label: "2024-2025",
              icon: "bi bi-person-raised-hand",
            },
          ],
        },
      },
      dynamicBackground: `rgba(240, 255, 255, 0)`,
      hitszartLogo: '/GoBack/hitszart_logo.webp',
      gobackLogo: "/GoBack/goback_logo.webp",
      banners: [
        "/GoBack/banners/banner11.webp",
        "/GoBack/banners/banner10.webp",
        // '/GoBack/banners/banner9.webp',
        "/GoBack/banners/banner8.webp",
        // '/GoBack/banners/banner7.webp',
        "/GoBack/banners/banner6.webp",
        "/GoBack/banners/banner5.webp",
        "/GoBack/banners/banner4.webp",
        "/GoBack/banners/banner3.webp",
        "/GoBack/banners/banner2.webp",
        // '/GoBack/banners/banner1.webp'
      ],
      isMobile: false,
      postCls: "",
      dynamicHeight: "50vh",
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    let factor = 0;
    if (import.meta.client) {
      const isMobile =
        /(Android|webOS|iPhone|iPod|tablet|BlackBerry|Mobile|iPad)/i.test(
          navigator.userAgent
        );
      this.postCls = isMobile ? " mobile" : "";
      factor = isMobile ? 32 : 23;
    }
    this.dynamicHeight = `${Math.ceil(
      (window.innerWidth / window.innerHeight) * factor
    )}vh`;
    console.log(this.dynamicHeight);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollTop = document.documentElement.scrollTop;
      const threshold = 600;
      if (scrollTop <= threshold) {
        let opacity = 1 - (threshold - scrollTop) / threshold;
        this.dynamicBackground = `rgba(240, 255, 255, ${opacity})`;
      } else {
        this.dynamicBackground = `rgba(240, 255, 255, 1)`;
      }
    },
  },
};
</script>

<style scoped lang="less">
.layout {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header {
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;

  &.mobile {
    width: 95%;
  }
}

.logo {
  width: 7rem;
  height: 7rem;
  margin: 1rem;
  object-fit: cover;
  border-radius: 50%;

  &.mobile {
    width: 5rem;
    height: 5rem;
  }
}

.header {
  .title {
    font-size: 1.8rem;
    font-weight: bold;
    font-style: italic;
    color: rgba(0, 83, 117, 1);

    &.mobile {
      font-size: 1.5rem;
    }
  }

  .sub-title {
    font-size: 1.8rem;
    font-style: italic;
    font-family: fantasy;
    text-decoration: underline;
    color: rgba(0, 83, 117, 1);

    &.mobile {
      font-size: 1.5rem;
    }
  }
}

.el-menu.nav-menu {
  width: 70%;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  position: sticky !important;
  top: 0;
  background-color: rgba(0, 83, 117, 0);
  border-color: rgba(0, 83, 117, 1);
  border-bottom-width: 0.2rem;
  z-index: 1;

  &.mobile {
    width: 95%;
  }
}

.el-menu--popup {
  padding: 0;
}

.nav-menu .text {
  font-size: 1.2rem;
  font-weight: bold;
  color: rgba(0, 83, 117, 0.8);
  margin: 0 0.2rem;

  &.mobile {
    font-size: 1rem;
    margin: 0;
  }
}

.sub-text {
  font-size: 1rem;
  margin: 0 0.2rem;

  &.mobile {
    font-size: 0.8rem;
    margin: 0;
  }
}

.main-content {
  z-index: 0;
  width: 70%;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  &.mobile {
    width: 95%;
    margin-bottom: 2rem;
  }
}

.main-content:after {
  content: attr(data-content);
  color: white;
}

.banners {
  width: 100%;
  margin-bottom: 1rem;

  &.mobile {
    margin: 0;
  }
}

.banner-img {
  width: 100%;
  object-fit: cover;
}

.goback-mark {
  clip-path: polygon(
    0 0,
    0 100%,
    5% 100%,
    6% 85%,
    9% 85%,
    8.8% 88%,
    6.8% 88%,
    6.2% 97%,
    7.2% 97%,
    7.4% 94%,
    8.4% 94%,
    8% 100%,
    9% 100%,
    9.6% 91%,
    12.6% 91%,
    12% 100%,
    13% 100%,
    14% 85%,
    16% 85%,
    16.8% 88%,
    16.6% 91%,
    15.4% 92.5%,
    16.4% 94%,
    16.2% 97%,
    15% 100%,
    17% 100%,
    17.4% 94%,
    18.6% 91%,
    20.6% 91%,
    20.2% 97%,
    21.2% 97%,
    21.6% 91%,
    24.6% 91%,
    24.4% 94%,
    22.4% 94%,
    22.2% 97%,
    24.2% 97%,
    24% 100%,
    25% 100%,
    26% 85%,
    27% 85%,
    26.6% 91%,
    28.6% 91%,
    28.4% 94%,
    26.4% 94%,
    28% 100%,
    27% 100%,
    26.2% 97%,
    26% 100%,
    19% 100%,
    19.4% 94%,
    18.4% 94%,
    18% 100%,
    14% 100%,
    15.2% 97%,
    15.4% 94%,
    14.5% 92.5%,
    15.6% 91%,
    15.8% 88%,
    14.8% 88%,
    14% 100%,
    11% 100%,
    11.4% 94%,
    10.4% 94%,
    10% 100%,
    100% 100%,
    100% 0
  );
}
</style>
