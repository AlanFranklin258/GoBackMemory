<template>
  <!-- <div class="home">
    <div :class="'title' + postCls">更新信息</div>
    <div :class="'sub-title' + postCls">【置顶】2023.10.01</div>
    <div :class="'text' + postCls">
      网站初步建立，展示了告白剧社的简介、<NuxtLink
        to="/activity/show#page-anchor"
        class="link"
        >演出回顾</NuxtLink
      >和历代的<NuxtLink to="/member/fellow-1#page-anchor" class="link"
        >主要成员</NuxtLink
      >。其中，成员名字使用的是角色名或者自定义的昵称。
    </div>
    <div :class="'text' + postCls">
      本网站由『十三太保』维护，用于记录告白话剧社介绍、演出活动和历代人员组成，在收集信息的过程中难免有疏漏错误。如果有任何需要补充、修改或删除的信息，请联系：
    </div>
    <div :class="'text' + postCls">
      <span style="font-weight: bold">Wechat:</span> 18965072161
    </div>
    <div :class="'text' + postCls">
      <span style="font-weight: bold">QQ:</span> 916824242
    </div>
    <div :class="'text' + postCls">
      <span style="font-weight: bold">Tel:</span> 18850115168
    </div>
    <div :class="'text' + postCls">
      <span style="font-weight: bold">Email:</span> 916824242@qq.com
    </div>
    <div :class="'sub-title' + postCls">2024.12.11</div>
    <div :class="'text' + postCls">
      网站更新了2024年秋季《告白之夜》的演出回顾和成员介绍。
    </div>
    <div :class="'sub-title' + postCls">2024.09.28</div>
    <div :class="'text' + postCls">
      网站迁移到新服务器，改为域名访问：<a
        href="https://utszart.cn/GoBack"
        class="link"
        >utszart.cn/GoBack</a
      >
    </div>
    <div :class="'text' + postCls">
      域名访问如果受限，亦可通过IP访问：<a
        href="http://120.24.21.171/GoBack/"
        class="link"
        >http://120.24.21.171/GoBack/</a
      >
    </div>
    <div :class="'sub-title' + postCls">2024.05.16</div>
    <div :class="'text' + postCls">
      网站更新了<NuxtLink to="/activity/scripts#page-anchor" class="link"
        >历年选本</NuxtLink
      >模块，汇总梳理每年演过的剧目。
    </div>
    <div :class="'sub-title' + postCls">2024.05.15</div>
    <div :class="'text' + postCls">
      网站更新了<NuxtLink to="/activity/instruction#page-anchor" class="link"
        >演出事务指导意见</NuxtLink
      >模块，总结了多年来演出筹备经验。
    </div>
    <div :class="'sub-title' + postCls">2024.04.30</div>
    <div :class="'text' + postCls">
      网站更新了<NuxtLink to="/activity/show#page-anchor" class="link"
        >演出回顾</NuxtLink
      >。
    </div>
    <div :class="'sub-title' + postCls">2024.04.29</div>
    <div :class="'text' + postCls">网站更新了移动端布局（长宽比约1：2）。</div>
    <div :class="'sub-title' + postCls">2023.12.08</div>
    <div :class="'text' + postCls">
      网站更新了2023-2024年度的<NuxtLink
        to="/member/fellow-9#page-anchor"
        class="link"
        >成员信息</NuxtLink
      >。
    </div>
    <div :class="'sub-title' + postCls">2023.10.31</div>
    <div :class="'text' + postCls">
      网站新增了<NuxtLink to="/activity/show#page-anchor" class="link"
        >团建活动</NuxtLink
      >板块。
    </div>
    <div :class="'sub-title' + postCls">2023.10.28</div>
    <div :class="'text' + postCls">
      网站新增了<NuxtLink to="/about/history#page-anchor" class="link"
        >发展沿革</NuxtLink
      >板块。
    </div>
    <div :class="'sub-title' + postCls">2023.10.25</div>
    <div :class="'text' + postCls">
      网站新增了<NuxtLink to="/about/constitution#page-anchor" class="link"
        >社团章程</NuxtLink
      >板块。
    </div>
    <div :class="'sub-title' + postCls">2023.10.18</div>
    <div :class="'text' + postCls">
      网站更新了<NuxtLink to="/activity/show#page-anchor" class="link"
        >演出回顾</NuxtLink
      >的节目简介。
    </div>
    <div :class="'sub-title' + postCls">2023.10.16</div>
    <div :class="'text' + postCls">
      网站更新了剧社创始年份2015-2016的初代成员信息；更新了<NuxtLink
        to="/member/teacher#page-anchor"
        class="link"
        >指导老师</NuxtLink
      >
      模块，以纪念几位老师对剧社发展做出的重要推动作用。
    </div>
    <div :class="'sub-title' + postCls">2023.10.05</div>
    <div :class="'text' + postCls">
      网站更新了<NuxtLink to="/activity/show#page-anchor" class="link"
        >演出回顾</NuxtLink
      >
      的详细内容，使用相册动画来展示演出的图片。同时，网站对所有图片进行了压缩，清晰度有所下降。
    </div>
  </div> -->
  <div class="home">
    <div :class="'title' + postCls">更新信息</div>
    <NoticeCard
      class="notice-card"
      v-for="notice in newNotices"
      :timestamp="notice.timestamp"
      :type="notice.type"
      :content="notice.content"
    ></NoticeCard>
  </div>
</template>

<script>
import notices from "~/assets/notices";
import noticeCardVue from "~/components/noticeCard.vue";

export default {
  components: { noticeCardVue },
  data() {
    return {
      newNotices: [],
      postCls: "",
    };
  },
  created() {
    this.resort(notices);
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
    resort(notices) {
      this.newNotices = this.newNotices.concat(
        notices.filter((notice) => notice.type === 0)
      );
      this.newNotices = this.newNotices.concat(
        notices.filter((notice) => notice.type !== 0)
      );
    },
  },
};
</script>

<style scoped lang="less">
.home {
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.title {
  width: 100%;
  font-size: 2rem;
  font-weight: bold;
  margin: 0.5rem 0;
  border-bottom: 0.2rem solid rgba(0, 83, 117, 1);

  &.mobile {
    font-size: 1.5rem;
  }
}

.sub-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0.5rem 0;

  &.mobile {
    font-size: 1.2rem;
  }
}

.text {
  font-size: 1.2rem;
  text-align: left;
  text-indent: 2rem;

  &.mobile {
    font-size: 1rem;
  }
}

.link {
  color: rgba(0, 83, 117, 1);
  text-decoration: underline;
}
.notice-card {
  width: 100%;
  margin: 0.5rem 0;
}
</style>
