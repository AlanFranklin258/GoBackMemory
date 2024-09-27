<template>
    <div class="member-card-container">
        <div class="poppoer" v-if="word">
            <div class="popper-content">{{ word }}</div>
            <div class="popper-corner-down"></div>
        </div>
        <div class="member-card">
            <img v-if="avatar" :src="avatar" class="member-avatar" alt="">
            <img v-else :src="default_avatar" class="member-avatar" alt="">
            <div class="member-text">{{ name }}</div>
            <div v-if="duty.length" class="duties">
                <div v-for="d in duty" class="duty" :key="d">
                  <div class="medal" :style="getStyle(d)">{{ duties[d].label }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import member_duties from '../assets/member_duties'

export default {
  props:{
    avatar: {type: String, default: ''},
    name: {type: String, default: ''},
    word: {type: String, default: ''},
    duty: {type: Array, default: []},
  },
  data () {
    return {
      duties: member_duties,
      default_avatar: '/GoBack/members/default_member.webp'
    }
  },
  methods: {
    getStyle (index) {
      return {
        color: this.duties[index].color,
        backgroundImage: this.duties[index].backgroundColor
      }
    }
  }
}
</script>

<style scoped>
.member-card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.member-card-container:hover .poppoer {
  opacity: 1;
}
.poppoer {
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  margin: auto;
  position: absolute;
  z-index: 99;
}
.popper-content {
  padding: 0.3rem;
  width: max-content;
  height: auto;
  min-height: 1rem;
  border-radius: 0.5rem;
  background-color: rgba(255,255,255,1);
  font-size: 1rem;
  font-weight: bold;
  text-align: left;
  text-indent: 1rem;
}
.popper-corner-down {
  width: 1rem;
  height: 0.5rem;
  margin-left: 1rem;
  background-color: rgba(255,255,255,1);
  clip-path: polygon(0 0, 100% 0, 50% 100%);
}
.member-card {
  margin-top: 2rem;
  border-radius: 0 0 0.8rem 0.8rem;
  transition: 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  position: relative;
}
.member-card:hover {
  cursor: pointer;
  box-shadow: 0 10px 25px 0 grey;
}
.member-avatar {
  width: 100%;
  border-radius: 0.8rem 0.8rem 0 0;
  object-fit: contain;
}
.member-text {
  border-radius: 0 0 0.8rem 0.8rem;
  width: 100%;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  background-color: white;
}
.duties {
  position: absolute;
  bottom: 2rem;
  left: 0.2rem;
  display: flex;
  flex-direction: row;
  justify-content: left;
  width: auto;
}
.duty {
  width: 3rem;
  margin: 0 0.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.medal{
  width: 3rem;
  height: 3rem;
  clip-path: polygon(29.3% 0, 70.7% 0, 100% 29.3%, 100% 70.7%, 70.7% 100%, 29.3% 100%, 0 70.7%, 0 29.3%);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}
</style>
