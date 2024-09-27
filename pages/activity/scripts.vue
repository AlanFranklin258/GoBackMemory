<template>
  <div class="home">
    <div class="paragraph-bg">
      <div class="title">历年选本</div>
      <div class="table-line header">
        <div class="name">剧本名</div>
        <div class="source">剧本来源</div>
        <div class="type">类型</div>
        <div class="duration">时长</div>
        <div class="access">资源</div>
      </div>
      <div v-for="(group, year) in scripts" :key="group">
        <div class="table-line sub-header">
          <div class="name">{{begin+year}}-{{begin+year+1}}</div>
        </div>
        <div v-for="script in group" :key="script" class="table-line cell">
          <div class="name">{{script.name}}</div>
          <div class="source">{{script.source}}</div>
          <div class="type">{{script.type}}</div>
          <div class="duration">{{script.duration}}</div>
          <div v-if="script.access===''" class="access">-</div>
          <div v-else class="access"><a target="_blank" :href="script.access">查看</a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import scripts from '~//assets/scripts.js'
export default {
  name: 'scripts',
  components: {},
  data() {
    return {
      scripts,
      begin: 2015
    }
  }
}
</script>


<style scoped>
.home{
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.title{
  width: 100%;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin: 0.5rem 0;
}
.paragraph-bg{
  width: 100%;
  border-radius: 1rem;
  padding: 2rem;
  background: rgba(255,255,255,0.2);
  /* background: linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(255,255,240,0.5) 15%, rgba(255,250,205,0.5) 30%, rgba(255,255,0,0.5) 45%, rgba(154,205,50,0.5) 60%, rgba(46,139,87,0.5) 75%, rgba(0,128,128,0.5) 90%, rgba(0,83,117,0.5) 100%); */
}
.table-line{
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: start;
}
.header{
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
  background: grey;
  color: white
}
.sub-header{
  background: lightgray;
  font-size: 1.2rem;
  text-indent: 2rem;
}
.cell{
  text-align: center;
  background: white;
  font-size: 1rem;
  border-bottom: 0.1rem solid lightgray;
}
.table-line .name{
  width: 30%;
}
.table-line .source{
  width: 30%;
  border-left: 0.1rem solid lightgray;
}
.table-line .type{
  width: 20%;
  border-left: 0.1rem solid lightgray;
}
.table-line .duration{
  width: 10%;
  border-left: 0.1rem solid lightgray;
}
.table-line .access{
  width: 10%;
  border-left: 0.1rem solid lightgray;
}
</style>
