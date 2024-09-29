<template>
  <div class="home">
    <div class="paragraph-bg">
      <div :class="'title' + postCls">演出事务指导意见</div>
      <div :class="'sub-title' + postCls">组织篇</div>
      <div :class="'text' + postCls">
        1.
        尽早选本、定本，最好是招新开始前，招新时可以直接用选本面试，物色演职人员。尽早定本也能尽早过审，后续排练不受干扰。
      </div>
      <div :class="'text' + postCls">
        2.
        与上级管理单位（目前是校团委）、场地设备管理单位以及其他合作单位处理好关系、保持高效沟通，予人方便予己方便。
      </div>
      <div :class="'text' + postCls">
        3.
        明确分工、严格监督。临近演出，宣发、场控、中控、主持、妆造、摄影的安排尤为迫切。
      </div>
      <div :class="'text' + postCls">
        4. 如有条件，招募志愿者承担迎宾、后台上下道具的工作。
      </div>
      <div :class="'sub-title' + postCls">剧组篇</div>
      <div :class="'text' + postCls">
        1.
        剧组确立之初，制作、导演必须熟知剧本、人物，思考排练要点、舞美设计等。
      </div>
      <div :class="'text' + postCls">
        2. 导演督促演员写人物小传、谈剧本理解。
      </div>
      <div :class="'text' + postCls">
        3.
        【建议】导演使用一些开嗓、热身手段，在每次排练开始时帮助演员进入状态。
      </div>
      <div :class="'text' + postCls">
        4.
        【建议】导演不参演。这样一来排练时视角更客观，二来现实情况是导演、制作、舞美甚至中控的工作多有重合，导演是最熟知剧本的人，可能需要随机调度。
      </div>
      <div :class="'text' + postCls">
        5. 制作人员负责安排场地、协调时间、道具制作与采购等。
      </div>
      <div :class="'text' + postCls">
        6. 舞美人员负责背幕、音效、场景布置的设计与制作。
      </div>
      <div :class="'text' + postCls">
        7.
        演员要深刻理解剧本人物，熟记所有人的台词，练习发声、情感、走位、动作。
      </div>
      <div :class="'text' + postCls">
        8. 【建议】演员在表演上，多学习参考已有的演出视频，从模仿开始。
      </div>
      <div :class="'sub-title' + postCls">中控篇</div>
      <div :class="'text' + postCls">
        1. 中控需要一位总控，细分职责有灯光、追光、音效、音控、背幕。
      </div>
      <div :class="'text' + postCls">
        2. 对于<span style="font-weight: bold">长戏</span
        >而言，中控组必须从<span style="font-weight: bold">剧组成立前期</span
        >就确定跟组，要充分熟悉剧本，位同制作、导演；对于短戏而言，不需要从头跟进，但在最后一周必须熟悉剧本。
      </div>
      <div :class="'text' + postCls">
        3.
        演出前一周，中控必须配合剧组在演出场地进行排练，掌握场地设备的使用调试。
      </div>
      <div :class="'text' + postCls">
        4. 剧组的制作、舞美人员交给中控组的资料中，必须包括：
      </div>
      <div :class="'text' + postCls">
        （1）高亮标注<span style="font-weight: bold; color: blue">灯光</span
        >、<span style="font-weight: bold; color: red">音效</span>、<span
          style="font-weight: bold; color: purple"
          >追光</span
        >、<span style="font-weight: bold; color: green">背幕</span>的<span
          style="font-weight: bold"
          >纸质剧本</span
        >，这些标注都必须清晰准确。ps：所谓高亮，不必拘泥于某种特定格式；中控组可以事先给出统一的范式约定，重在现场沟通。
      </div>
      <div :class="'text' + postCls">
        （2）文件格式统一、剪辑完好、命名清晰的音频文件。每个音频文件<span
          style="font-weight: bold"
          >原则上只允许播放一次</span
        >，因此即使是一模一样的音频，只要播放位置不一样，就要分成不同的文件。命名格式建议：【阿拉伯数字标号+语义说明】。
      </div>
      <div :class="'text' + postCls">
        5. 中控理论上<span style="font-weight: bold">不负责</span
        >音频、背幕等文件的制作剪辑，中控只负责按照说明播放灯效、音效，以配合剧组排练。
      </div>
      <div :class="'sub-title' + postCls">场控篇</div>
      <div :class="'text' + postCls">
        1. 场控需要一位总控（一般是<span style="font-weight: bold"
          >演出总负责人</span
        >），细分职责有麦克风管理、道具管理。
      </div>
      <div :class="'text' + postCls">
        2. 演出前一周，场控必须配合剧组在演出场地进行排练，熟知演出流程、节奏。
      </div>
      <div :class="'sub-title' + postCls">关于联排重点</div>
      <div :class="'text' + postCls">
        1.
        确定除节目外的总体流程衔接，包括迎宾、开场、中场休息、抽奖、谢幕、主持词、背景音乐等等。
      </div>
      <div :class="'text' + postCls">
        2.
        剧组与中控、场控配合排练，重点在配合，保证整体流程的前提下，演员的表演部分<span
          style="font-weight: bold"
          >应当适当略过</span
        >。
      </div>
      <div :class="'text' + postCls">
        3. 导演/舞美在<span style="font-weight: bold">观众席</span
        >，使用对讲机与中控人员<span style="font-weight: bold"
          >即时沟通和调整</span
        >，确保视听效果是剧组所期望的。
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      postCls: "",
    };
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
.sub-title {
  width: 100%;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin: 0.5rem 0;
  &.mobile {
    font-size: 1.2rem;
  }
}
.text {
  font-size: 1.2rem;
  text-align: justify;
  margin: 0.5rem 0;
  &.mobile {
    font-size: 1rem;
  }
}
</style>
