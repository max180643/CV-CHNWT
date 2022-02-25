<script lang="ts">
  import Section from "./Section.svelte";
  import { Skills } from "../constrants/skills";
</script>

<Section title="Skills">
  <div class="grid grid-flow-col grid-cols-4 grid-rows-4 gap-5 py-0 px-5">
    {#each Skills as skill}
      <div name={skill}>
        <p class="text-center text-secondary text-base font-bold">
          {skill}
        </p>
      </div>
    {/each}
  </div>
</Section>
