<template>
  <div class="container" :style="bgImg">
    <div class="row black-color">
      <div class="heading">
        <div class="content">
          <div class="inline-block pr-50">
            <img class="workout-img" src="../../assets/friend-logo.png" >
          </div>
          <div class="inline-block pr-50 pl-50">
            <h2>Fitness Tracker Members</h2>
            <small>You can view details of Fitness Tracker's members by serching member name or email.</small>
            <div>
              <vue-bootstrap-typeahead 
                v-model="searchText"
                :data="members"
                :serializer="item => item.name"
                @hit="openModalViewFriend($event)"
                placeholder="Search member here..."
              />
            </div>          
          </div>
          
        </div>
      </div>
      <div class="user-list">
        
      </div>
      <modal-show-member v-if="modalShow" @close="modalShow = false" :selectedMember="selectedMember" :API_HOST_URL="API_HOST_URL">
      </modal-show-member>      
    </div>
  </div>
</template>

<script>

import Vue from 'vue';
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead';
import { API_HOST } from '../../api/urls';
import ModalShowMember from './modalShowMember';

export default {
  name: 'friend-view',
  components: {
    VueBootstrapTypeahead,
    ModalShowMember
  },
   watch: {
    searchText(newQuery) {
      Vue.http.get('friends', {params: {searchText:newQuery}})
      .then((res) => {
        console.log(res)
        this.members = res.body.friends;
      })
    }
  },
  data() {
    return {
      modalShow: false,
      bgImg: {
        backgroundImage: `url(${require('@/assets/friends.jpg')})`
      },
      API_HOST_URL : API_HOST,
      members: [],
      searchText: '',
      selectedMember: {
        name:'',
        gender:'',
        dob: '',
        profile_picture:'',
        mobile:''
      }
    };
  },
  methods: {
    openModalViewFriend(member) {
      this.selectedMember = member;
      this.modalShow = true;
    },
  }
};

</script>

<style>
.img-style-modal {
    width: 90px;
    height: 90px;
    margin: 10px auto !important; 
  }
  .user-list {
    padding-top: 50px;
  }

  .name {
    display: inline-block;
    width: 200px;
  }
  .add-btn {
    display: inline-block;
  }

  .item {
    margin-top: 10px;
    position: relative; 
  }
  .img-friend{
    width: 100px;
    height: 100px;  
  }
</style>

