<template>
  <v-main>
    <Navbar v-if="$vuetify.breakpoint.smAndUp" />
    <NavbarMobile v-else />
    <Friends v-if="!isTags && is1440p" />
    <v-container fluid class="ma-0 pa-0">
      <transition name="slide-fade" mode="out-in">
        <router-view />
      </transition>
    </v-container>
    <BottomNavbar v-if="$vuetify.breakpoint.xs" />
  </v-main>
</template>

<script>
const Navbar = () => import("@/components/Navbar/Navbar");
const NavbarMobile = () => import("@/components/Navbar/NavbarMobile");
const Friends = () => import("@/components/Friends/Friends");
const BottomNavbar = () => import("@/components/Navbar/BottomNavbar");

export default {
  components: {
    Navbar,
    NavbarMobile,
    Friends,
    BottomNavbar,
  },
  data() {
    return {
      mini: true,
    };
  },
  computed: {
    isTags() {
      return this.$route.name === "tags";
    },
    is1440p() {
      return this.$vuetify.breakpoint.width >= 1440;
    },
  },
};
</script>

<style scoped></style>
