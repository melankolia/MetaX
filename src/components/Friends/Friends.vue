<template>
  <v-navigation-drawer app permanent class="navbar_color" width="375px" right>
    <v-tabs
      v-model="tab"
      height="65px"
      background-color="navbar_color"
      dark
      grow
      class="mb-9"
    >
      <v-tab v-for="item in items" :key="item">
        <p class="mb-n4">{{ item }}</p>
      </v-tab>
    </v-tabs>
    <div class="d-flex flex-column px-4 container-friend">
      <Friend
        :data="item"
        v-for="(item, index) in friendList"
        :key="`friend-${index}`"
      />

      <template v-if="loading">
        <FriendSkeleton v-for="item in 5" :key="item" />
      </template>
    </div>
  </v-navigation-drawer>
</template>

<script>
const Friend = () => import("@/components/Friends/Friend");
const FriendSkeleton = () => import("@/components/Skeleton/Friend");
import FriendService from "@/services/resources/friends-page.service";

export default {
  components: {
    Friend,
    FriendSkeleton,
  },
  data() {
    return {
      tab: 0,
      friendList: [],
      items: ["Followers", "Following"],
      loading: true,
      page: 1,
      totalPages: 2,
      pageSize: 20,
    };
  },
  methods: {
    scroll() {
      const container = document.querySelector(".container-friend");
      container.onscroll = () => {
        let scrollY = container.scrollHeight - container.scrollTop;
        let height = container.offsetHeight;
        let bottomOfWindow = height - scrollY;

        if (
          this.totalPages !== this.page &&
          !this.loading &&
          (bottomOfWindow == 0 || bottomOfWindow == 1)
        ) {
          this.page = this.page + 1;
        }
      };
    },
    getList() {
      this.loading = true;
      FriendService[this.isFollowers ? "getListFollowers" : "getListFollowing"](
        {
          page: this.page,
          pageSize: this.pageSize,
        }
      )
        .then(({ data: { data, totalPages } }) => {
          this.friendList = [...this.friendList, ...data];
          this.totalPages = totalPages;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => (this.loading = false));
    },
  },
  mounted() {
    this.getList();
    this.scroll();
  },
  computed: {
    isFollowers() {
      return this.items[this.tab] == "Followers";
    },
  },
  watch: {
    tab() {
      this.page = 1;
      this.totalPages = 2;
      this.friendList = [];
      this.getList();
    },
    page(val) {
      val > 1 && this.getList();
    },
  },
};
</script>

<style scoped>
.container-friend {
  overflow: scroll;
  height: calc(100vh - 100px);
}
</style>
