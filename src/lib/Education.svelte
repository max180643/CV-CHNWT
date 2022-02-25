<script lang="ts">
  import Section from "./Section.svelte";
  import { Educations } from "../constrants/educations";
</script>

<Section title={"Educations"}>
  {#each Educations as { name, level, info, year, url }}
    <div class="pl-5 my-3" {name}>
      <a class="text-primary font-bold text-lg" href={url} target="_blank">
        {name}
      </a>
      <p class="text-secondary text-base">
        {`${level}${info !== null ? `, ${info}` : ""} | ${year.start} - ${
          year.end === null ? "Now" : year.end
        }`}
      </p>
    </div>
  {/each}
</Section>
