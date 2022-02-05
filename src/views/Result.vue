<template>
  <div class="d-flex flex-column">
    <div class="d-flex flex-row results-top align-center">
      <img
        class="chevron-back mr-8"
        src="@/assets/chevron-back.png"
        width="13"
        height="22"
        @click="handleBack"
        v-if="$vuetify.breakpoint.smAndUp"
      />
      <p class="white--text headline-4 regular ma-0">Results</p>
    </div>
    <div
      class="d-flex flex-column flex-sm-row justify-space-between flex-wrap container-card"
    >
      <ResultCard
        v-for="(item, index) in results"
        :data="item"
        :key="`result-${index}`"
      />
      <template v-if="loading">
        <ResultSkeleton v-for="item in 3" :key="item" />
      </template>
    </div>
    <div class="normal-button-width more-button mb-12">
      <NormalButton
        v-if="this.totalPages !== this.page"
        :loading="loading"
        :onClick="handleClick"
        text="More"
      />
    </div>
  </div>
</template>

<script>
const NormalButton = () => import("@/components/Button/Normal");
const ResultCard = () => import("@/components/Cards/ResultCard");
const ResultSkeleton = () => import("@/components/Skeleton/Result");
import ResultService from "@/services/resources/resultPage.service";

export default {
  components: {
    NormalButton,
    ResultCard,
    ResultSkeleton,
  },
  data() {
    return {
      page: 1,
      totalPages: 2,
      pageSize: this.$route.query?.pageSize,
      keyword: this.$route.query?.keyword,
      loading: true,
      results: [],
    };
  },
  methods: {
    handleBack() {
      this.$router.replace({
        name: "Home",
      });
    },
    handleClick() {
      this.page++;
    },
    scroll() {
      window.onscroll = () => {
        let bottomOfWindow =
          Math.round(document.documentElement.scrollTop + window.innerHeight) >=
          document.documentElement.offsetHeight;

        if (this.totalPages !== this.page && !this.loading && bottomOfWindow) {
          this.page = this.page + 1;
        }
      };
    },
    getList() {
      this.loading = true;
      ResultService.getList({
        page: this.page,
        pageSize: this.pageSize,
        keyword: this.keyword,
      })
        .then(({ data: { data, page, totalPages } }) => {
          this.results = [...this.results, ...data];
          this.page = page;
          this.totalPages = totalPages;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  mounted() {
    this.getList();
    this.scroll();
  },
  watch: {
    page(val) {
      val && this.getList();
    },
  },
};
</script>

<style scoped>
.results-top {
  margin: 92px 86px 24px 86px;
}

.container-card {
  margin: 24px 130px 0 130px;
}

.more-button {
  margin: 0 130px 0 130px;
}

.normal-button-width {
  max-width: 343px;
}

@media only screen and (max-width: 600px) {
  .results-top {
    margin: 20px 20px 0px 20px;
  }

  .container-card {
    margin: 24px 20px 0 20px;
  }

  .more-button {
    margin: 0 20px 0 20px;
  }

  .normal-button-width {
    max-width: none;
  }
}

.chevron-back:hover {
  cursor: pointer;
}
</style>
