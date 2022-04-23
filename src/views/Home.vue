<template lang="">
  <div>
    <Navbar></Navbar>
    <div class="flex overflow-hidden bg-white pt-16">
      <div
        id="main-content"
        class="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
        <!-- MAIN CONTENT HNA -->
        <main>
            <div class="pt-6 px-4 pb-4">
                <router-view></router-view>
            </div>
        </main>
        <!-- MAIN CONTENT SALA -->
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import Dashboard from "../views/Dashboard.vue";
export default {
  components: {
    Navbar,
    Dashboard
  },
};
</script>
<style lang="">
</style>