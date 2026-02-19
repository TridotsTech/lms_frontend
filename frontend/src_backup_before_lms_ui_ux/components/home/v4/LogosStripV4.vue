<template>
  <div class="bg-slate-900 border-b border-gray-800 py-6 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between gap-12 w-full animate-marquee">
        <!-- Reusing a simple text placeholder for logos to keep it clean, or use icons -->
        <span class="text-xl font-bold text-gray-600 uppercase tracking-widest hover:text-white transition-colors cursor-pointer">Boeing</span>
        <span class="text-xl font-bold text-gray-600 uppercase tracking-widest hover:text-white transition-colors cursor-pointer">Airbus</span>
        <span class="text-xl font-bold text-gray-600 uppercase tracking-widest hover:text-white transition-colors cursor-pointer">Emirates</span>
        <span class="text-xl font-bold text-gray-600 uppercase tracking-widest hover:text-white transition-colors cursor-pointer">Lufthansa</span>
        <span class="text-xl font-bold text-gray-600 uppercase tracking-widest hover:text-white transition-colors cursor-pointer">Delta</span>
        <span class="text-xl font-bold text-gray-600 uppercase tracking-widest hover:text-white transition-colors cursor-pointer">Qatar</span>
      </div>
    </div>
  </div>
</template>

<style>
/* Simple Marquee */
.animate-marquee {
  animation: marquee 20s linear infinite;
  white-space: nowrap;
}
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); } 
}
/* Note: For a true infinite loop, you duplicate content. For this demo, simple static flex is fine or a simple CSS animation */
</style>
