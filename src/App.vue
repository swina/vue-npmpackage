<template>
  <div id="app" class="theme-dark flex flex-col p-4">
    <Package/>    
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    'Package'    : () => import ( '@/components/Package.vue' ),
  }
}
</script>

<style>
body {
  background: rgb(214, 214, 214);
}

::-webkit-scrollbar {
    width: 8px;
    height: 5px;
  }
  ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
  ::-webkit-scrollbar-thumb {
    background: #616161;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #313131;
  }
  ::-webkit-scrollbar-thumb:active {
    background: #616161;
  }
  ::-webkit-scrollbar-track {
    background: #3a3a3a;
    border: 0px none #ffffff;
    border-radius: 40px;
  }
  ::-webkit-scrollbar-track:hover {
    background: #616161;
  }
  ::-webkit-scrollbar-track:active {
    background: #1f1e1e;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
</style>