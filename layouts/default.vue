<template>
  <div class="min-h-screen bg-gray-950 font-sans">
    <!-- Grid background -->
    <div class="fixed inset-0 pointer-events-none" style="background-image: linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px); background-size: 40px 40px;" />
    <div class="relative z-10">
      <slot />
    </div>
  </div>
</template>
