<script setup>
import BugHunt from './components/BugHunt.vue'
import ContactSection from './components/ContactSection.vue'
import HatsSection from './components/HatsSection.vue'
import HeroSection from './components/HeroSection.vue'
import PathSection from './components/PathSection.vue'
import SiteNav from './components/SiteNav.vue'
import ToolboxSection from './components/ToolboxSection.vue'
import WorkSection from './components/WorkSection.vue'
import WorkshopSection from './components/WorkshopSection.vue'
</script>

<template>
  <a href="#travail" class="sr-only z-[80] rounded-full bg-white px-4 py-2 font-bold focus:not-sr-only focus:fixed focus:top-3 focus:left-3">
    Aller au contenu
  </a>
  <SiteNav />
  <main>
    <HeroSection />
    <WorkSection />
    <HatsSection />
    <WorkshopSection />
    <ToolboxSection />
    <PathSection />
    <ContactSection />
  </main>
  <BugHunt />
</template>
