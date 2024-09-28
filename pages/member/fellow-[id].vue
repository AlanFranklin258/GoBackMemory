<template>
  <div class="home">
    <div v-for="group in groups" :key="group.group" class="col">
      <div v-if="group.type === 0" class="col type-0">
        <div class="title1">{{ group.group }}</div>
        <div class="row" v-for="row in group.members" :key="row">
          <member-card v-for="member in row" :key="member" :avatar="member.avatar" :name="member.mark"
            :word="member.word" :duty="member.duty" style="width: 18%; margin: auto"></member-card>
        </div>
      </div>
      <div v-if="group.type === 1" class="col type-1">
        <div class="title1">{{ group.group }}</div>
        <div class="row" v-for="row in group.members" :key="row">
          <member-card v-for="member in row" :key="member" :avatar="member.avatar" :name="member.mark"
            :word="member.word" :duty="member.duty" style="width: 18%; margin: auto"></member-card>
        </div>
      </div>
      <div v-if="group.type === 2" class="col type-2">
        <div class="title2">{{ group.group }}</div>
        <div class="row" v-for="row in group.members" :key="row">
          <member-card v-for="member in row" :key="member" :avatar="member.avatar" :name="member.mark"
            :word="member.word" :duty="member.duty" style="width: 16%; margin: 0 2%"></member-card>
        </div>
        <div v-for="subGroup in group.subGroups" :key="subGroup.group" class="col type-3">
          <div class="title3">{{ subGroup.group }}</div>
          <div class="sub-row" v-for="row in subGroup.members" :key="row">
            <member-card v-for="member in row" :key="member" :avatar="member.avatar" :name="member.mark"
              :word="member.word" :duty="member.duty" style="width: 16%; margin: 0 2%"></member-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const reloadPage = useReloadPage()
if (reloadPage.value === true) {
  reloadPage.value = false
  location.reload()
}
</script>

<script>
import members from '../../assets/members'
import memberCardVue from '../../components/memberCard.vue'

export default {
  components: { memberCardVue },
  data() {
    return {
      members,
      id: '',
      groups: [],
      col: 5
    }
  },
  created() {
    this.id = parseInt(useRoute().params.id)
    this.divider()
  },
  methods: {
    divider() {
      for (let i = 0; i < members[this.id].length; i++) {
        let group = {}
        group.type = members[this.id][i].type
        group.group = members[this.id][i].group
        group.members = []
        group.subGroups = []
        let row = []
        for (let j = 0; j < members[this.id][i].members.length; j++) {
          row.push(members[this.id][i].members[j])
          if (j % this.col === this.col - 1 || j === members[this.id][i].members.length - 1) {
            group.members.push(row)
            row = []
          }
        }
        this.groups.push(group)
      }
      let cursor = -1
      for (let i = 0; i < this.groups.length; i++) {
        if (this.groups[i].type === 2) {
          cursor = i
        }
        if (this.groups[i].type === 3) {
          this.groups[cursor].subGroups.push(this.groups[i])
        }
      }
      this.groups = this.groups.filter(e => e.type !== 3)
    }
  }
}
</script>

<style scoped>
.home {
  width: 95%;
}

.title1 {
  width: 100%;
  margin: 1rem 0;
  font-size: 2rem;
  font-weight: bold;
  text-align: left;
  text-indent: 0.5rem;
  border-left: 1rem solid rgba(0, 83, 117, 1);
}

.title2 {
  width: 100%;
  /* margin: 1rem 0; */
  font-size: 2rem;
  font-weight: bold;
  text-align: left;
  text-indent: 0.5rem;
  border-left: 1rem solid rgba(0, 83, 117, 1);
  border-top: 0.2rem solid rgba(0, 83, 117, 1);
}

.col {
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.type-0 {
  width: 100%;
}

.type-1 {
  width: 100%;
}

.type-2 {
  width: 100%;
  border-radius: 0 0 2rem 2rem;
  background-color: rgba(255, 255, 255, 0.2);
  padding-bottom: 1rem;
}

.type-3 {
  width: 95%;
  margin-left: 5%;
  /* border-radius: 0 0 2rem 0; */
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%);
}

.row {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.title3 {
  width: 100%;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: left;
  text-indent: 0.5rem;
  border-left: 1rem solid rgba(0, 83, 117, 1);
}

.sub-row {
  width: 100%;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border-left: 0.2rem solid rgba(0, 83, 117, 1);
}
</style>