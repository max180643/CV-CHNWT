<script lang="ts">
  export let title: string;
</script>

<div>
  <p class="text-2xl text-white font-bold mt-7 mb-3">{title}</p>
  <slot />
</div>
