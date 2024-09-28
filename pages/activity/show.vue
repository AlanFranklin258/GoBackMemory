<template>
  <div class="home">
    <div v-for="(category, idx) in categories" :key="category" class="category">
      <div class="title">{{ category }}</div>
      <div v-for="(row, idr) in groups[idx]" :key="row" class="row">
        <activity-card-vue
          v-for="(show, idy) in row"
          :key="show"
          :title="show.title"
          :cover="show.cover"
          :idx="idx"
          :idy="idr * cols + idy"
          :type="0"
          style="width: 40%; margin: 5%"
        ></activity-card-vue>
      </div>
    </div>
  </div>
</template>

<script>
import shows from "~/assets/shows.js";
import activityCardVue from "~/components/activityCard.vue";

export default {
  components: { activityCardVue },
  data() {
    return {
      shows,
      cols: 2,
      categories: [
        '2023-2024',
        '2022-2023',
        '2021-2022',
        '2020-2021',
        '2019-2020',
        '2018-2019',
        "2017-2018",
        "2016-2017",
        "2015-2016",
      ],
      groups: [],
    };
  },
  created() {
    this.divider();
  },
  methods: {
    divider() {
      for (let i = 0; i < shows.length; i++) {
        let rows = [];
        let row = [];
        for (let j = 0; j < shows[i].length; j++) {
          row.push(shows[i][j]);
          if (j % this.cols === this.cols - 1 || j === shows[i].length - 1) {
            rows.push(row);
            row = [];
          }
        }
        this.groups.push(rows);
      }
      // this.groups.reverse()
    },
  },
};
</script>

<style scoped>
.home {
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.category {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.title{
  font-size: 1.5rem;
  font-weight: bold;
  text-indent: 0.5rem;
  border-left: 1rem solid rgba(0,83,117,1);
}
.row {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
}
</style>
