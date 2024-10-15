<template>
  <div :class="'home' + postCls">
    <div class="paragraph-bg">
      <div :class="'title' + postCls">告白剧社·发展沿革</div>
      <div :class="'text' + postCls">
        2015年9月，『南宫灥』、『小黑蛋』创建哈工大深圳学生艺术团的话剧分部，并担任首届正副社长。同年，话剧部首个原创小品、同时也是首次演出《戏中戏中戏》在学校晚会舞台上亮相。</div>
      <div :class="'text' + postCls">
        2016-2017年度，话剧部排演了成立以来第一部长戏《你好，打劫》。此后，话剧部在2017-2018、2018-2019两个年度连续推出长戏《暗恋·桃花源》、《乌龙山伯爵》，在校内演出取得热烈反响。</div>
      <div :class="'text' + postCls">2019年9月，『剧社背后的女人』为话剧部定名。“告白”意在用最诚挚的表演向观众传递最动人的情绪；而其英文谐音“Go
        back”也有追溯之意，表达了追求纯粹话剧艺术、向内探索精神境界的理念；宣传标语“不加戏，怎么红！”，则寄托了大家对社团繁荣向好的期盼。自此，哈工大深圳学生艺术团话剧部多了一个响亮的名字：<span
          style="font-weight:bold">告白话剧社（GoBack Drama Theater）</span></div>
      <div :class="'text' + postCls">
        同年，时任社长『十三太保』首次引入了短剧拼盘的模式，这种模式对刚刚接触话剧的新成员来说比较友好。在时任副社长『姥姥』、『张鹤』、『我在长沙三套房』及全体社员的共同努力下，首个大型短剧专场《告白之夜2019》如期而至，为那年的“大学城戏剧节”做了收尾。
      </div>
      <div :class="'text' + postCls">
        疫情三年，剧社的发展受阻，许多计划遗憾停摆。然而期间，剧社始终保持活跃，把握珍贵的表演机会，奉献了大型演出《告白之夜2021》，以及《金漆雕木大神龛》、《点名风波》、《觉醒年代》、《谁杀死了周日》等晚会短节目。</div>
      <div :class="'text' + postCls">时间来到2023年，剧社重新。5月份，剧社完成了大型演出《告白之夜2023》；春秋两季纳新，为社团注入了新鲜血液。至此，告白剧社完成重建。</div>
      <div :class="'text' + postCls">2023-2024年度，是剧社活动井喷的一年。这一年，剧社推出了《告白之夜2023秋》、《告白之夜2024春》以及《你好，疯子》专场，累计奉献1部大戏、12部短剧。
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      postCls: ''
    }
  },
  mounted() {
    if (import.meta.client) {
      const isMobile = /(Android|webOS|iPhone|iPod|tablet|BlackBerry|Mobile|iPad)/i.test(navigator.userAgent)
      this.postCls = isMobile ? ' mobile' : ''
    }
  }
}

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
  text-align: center;
  margin: 0.5rem 0;

  &.mobile {
    font-size: 1.5rem;
  }
}

.paragraph-bg {
  width: 100%;
  border-radius: 1rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.2);
}

.text {
  font-size: 1.2rem;
  text-align: justify;
  text-indent: 2rem;
  margin: 0.5rem 0;

  &.mobile {
    font-size: 1rem;
  }
}
</style>
