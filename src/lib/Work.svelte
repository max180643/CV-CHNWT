<script lang="ts">
  import Section from "./Section.svelte";
  import { WorkExperiences } from "../constrants/work";
</script>

<Section title={"Work Experiences"}>
  {#each WorkExperiences as { company, position, period, url }}
    <div class="pl-5 my-3" name={company}>
      <a class="text-primary font-bold text-lg" href={url} target="_blank">
        {company}
      </a>
      <p class="text-secondary text-base">
        {`${position} | ${period.start} - ${
          period.end === null ? "Now" : period.end
        }`}
      </p>
    </div>
  {/each}
</Section>
