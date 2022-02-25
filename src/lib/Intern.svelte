<script lang="ts">
  import Section from "./Section.svelte";
  import { Interns } from "../constrants/interns";
</script>

<Section title="Internships">
  {#each Interns as { company, position, period, url, projects }}
    <div class="pl-5 my-3" name={company}>
      <a class="text-primary font-bold text-lg" href={url} target="_blank">
        {company}
      </a>
      <p class="text-secondary text-base">
        {`${position} | ${period.start} - ${
          period.end === null ? "Now" : period.end
        }`}
      </p>
      {#if projects.length !== 0}
        <div class="pl-10">
          <ul class="list-disc">
            {#each projects as project}
              <li class="text-lg text-white mt-2">
                <a
                  class="text-primary font-bold"
                  href={project.url}
                  target="_blank"
                >
                  {project.name}
                </a>
                <span class="text-secondary text-base font-normal">
                  , {project.description}
                </span>
              </li>
            {/each}
          </ul>
        </div>
      {/if}
    </div>
  {/each}
</Section>
