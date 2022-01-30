<script lang="ts">
  export let shown: boolean;
</script>

<div class:hidden={!shown} class="fixed overflow-y-auto z-10 inset-0">
  <div class="flex items-center justify-center min-h-screen">
    <div class="fixed inset-0 bg-gray-300 bg-opacity-75 transition-opacity"></div>
    <div class="bg-white m-3 md:m-0 rounded-xl z-20 p-10">
      <slot />
    </div>
  </div>
</div>