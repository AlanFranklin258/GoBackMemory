<template>
  <div class="activity">
    <el-tabs v-model="activeName" class="tabs" @tab-click="handleClick" stretch>
      <el-tab-pane label="告白魅影" name="picture">
        <div
          v-for="(shows_per_year, idx) in shows"
          :key="'shows' + get_year(idx)"
          :style="{ margin: '1vh auto', width: '100%' }"
        >
          <ShowGroup
            :shows_per_year="shows_per_year"
            :idx="idx"
            :handle-select-show="handleSelectShow"
          ></ShowGroup>
        </div>
      </el-tab-pane>
      <el-tab-pane label="告白回响" name="blog" class="blog">
        <div class="col">
          <BlogCard
            v-for="(blog, idx) in blogs_dbc[0]"
            :blog="blog"
            :key="'col0-' + idx"
            :onclick="() => handleSelectBlog(0, idx)"
          ></BlogCard>
        </div>
        <div class="col">
          <BlogCard
            v-for="(blog, idx) in blogs_dbc[1]"
            :blog="blog"
            :key="'col1-' + idx"
            :onclick="() => handleSelectBlog(1, idx)"
          ></BlogCard>
        </div>
      </el-tab-pane>
    </el-tabs>

    <ShowPreview
      v-if="showPreview"
      :showinfo="showInfo"
      :handle-exit="handleExit"
    ></ShowPreview>

    <BlogPreview
      v-if="blogPreview"
      :bloginfo="blogInfo"
      :handle-exit="handleExitBlog"
    ></BlogPreview>
  </div>
</template>

<script setup lang="ts">
import type { TabsPaneContext } from "element-plus";
import { get_year } from "~/assets/utils";
import { ref } from "vue";
const activeName = ref("picture");
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
// show相关
import shows from "~/assets/shows";
import ShowGroup from "~/components/ShowGroup.vue";
import ShowPreview from "~/components/ShowPreview.vue";
const showPreview = ref(false);
const showInfo = ref<any>(null);
const handleSelectShow = (idx: number, idy: number) => {
  console.log(idx, idy);
  showInfo.value = shows[idx][idy];
  showPreview.value = true;
};
const handleExit = () => {
  showPreview.value = false;
};
// blog相关
import blogs from "~/assets/blogs";
import BlogCard from "~/components/BlogCard.vue";
import BlogPreview from "~/components/BlogPreview.vue";
const blogs_dbc = ref<any>([[], []]);
blogs.map((blog: any, index: number) => {
  if (index % 2 === 0) {
    blogs_dbc.value[0].push(blog);
  } else {
    blogs_dbc.value[1].push(blog);
  }
});
const blogInfo = ref<any>(null);
const blogPreview = ref(false);
const handleSelectBlog = (col: number, row: number) => {
  console.log(col, row);
  console.log(blogs_dbc.value[col][row]);
  blogInfo.value = blogs_dbc.value[col][row];
  blogPreview.value = true;
};

const handleExitBlog = () => {
  blogPreview.value = false;
};
</script>

<style lang="less" scoped>
.activity {
  width: 95%;
  margin: auto;
  margin-bottom: 2vh;
  .blog {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    .col {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    }
  }
}
</style>
