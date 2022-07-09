<script lang="ts">
  import TailwindCSS from "./lib/TailwindCSS.svelte";
  import Work from "./lib/Work.svelte";
  import Intern from "./lib/Intern.svelte";
  import Education from "./lib/Education.svelte";
  import Skill from "./lib/Skill.svelte";
  import Certification from "./lib/Certification.svelte";
  import Contact from "./lib/Contact.svelte";
  import Footer from "./lib/Footer.svelte";
</script>

<TailwindCSS />

<main class="bg-black pt-14 pb-6">
  <div class="container mx-auto px-4 font-Lato">
    <p class="text-4xl text-white font-black tracking-wider">
      Chanwit Settavongsin
    </p>
    <div>
      <p class="text-primary text-xl tracking-wide">
        Application Development Officer at Thai Beverage PLC
      </p>
    </div>
    <Work />
    <Intern />
    <Education />
    <Skill />
    <Certification />
    <Contact />
    <Footer />
  </div>
</main>
