<script setup>
import ContactSection from './components/ContactSection.vue'
import HeroSection from './components/HeroSection.vue'
import MethodSection from './components/MethodSection.vue'
import PathSection from './components/PathSection.vue'
import PersonalSection from './components/PersonalSection.vue'
import SiteFooter from './components/SiteFooter.vue'
import SiteHeader from './components/SiteHeader.vue'
import ToolsSection from './components/ToolsSection.vue'
import WorkSection from './components/WorkSection.vue'
</script>

<template>
  <a
    href="#travail"
    class="label sr-only z-50 bg-paper px-3 py-2 focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
  >
    Aller au contenu
  </a>
  <SiteHeader />
  <main>
    <HeroSection />
    <WorkSection />
    <MethodSection />
    <PersonalSection />
    <ToolsSection />
    <PathSection />
    <ContactSection />
  </main>
  <SiteFooter />
</template>
