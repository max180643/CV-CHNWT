<script lang="ts">
  import Github from "./icons/Github.svelte";
  import Linkedin from "./icons/Linkedin.svelte";
</script>

<footer>
  <div class="mt-10 flex max-w-full h-10">
    <div class="flex ml-auto">
      <a
        href="https://www.linkedin.com/in/max180643/"
        class="text-gray-300 hover:text-primary mx-1"
        target="_blank"
      >
        <Linkedin size={10} />
      </a>
      <a
        href="https://github.com/max180643"
        class="text-gray-300 hover:text-primary mx-1"
        target="_blank"
      >
        <Github size={10} />
      </a>
    </div>
  </div>
</footer>
