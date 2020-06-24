<template>
  <v-app>
    <v-content class="app-content">
      <layout-base>
        <nuxt />
      </layout-base>
    </v-content>
  </v-app>
</template>

<script>
import LayoutBase from '@/shared/components/LayoutBase';

export default {
  components: {
    LayoutBase,
  },
};
</script>

<style lang="scss" scoped>
.app-content {
  padding: 0;
  padding-right: 15px !important;
}
</style>
