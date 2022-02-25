<script lang="ts">
  import Section from "./Section.svelte";
  import { Certifications } from "../constrants/certifications";
</script>

<Section title={"Certifications"}>
  {#each Certifications as { name, company, issue, url }}
    <div class="pl-5 my-3" {name}>
      <a class="text-primary font-bold text-lg" href={url} target="_blank">
        {name}
      </a>
      <p class="text-secondary text-base">
        {`${company} | ${issue.month ? issue.month : ""} ${issue.year}`}
      </p>
    </div>
  {/each}
</Section>
