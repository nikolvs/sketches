<script>
  import Sketch from '$lib/components/Sketch.svelte';
  import { makeSketch } from '$lib/sketches/game-of-life';

  const config = {
    canvasWidth: 2160,
    canvasHeight: 3840,
  };
</script>

<Sketch {config} {makeSketch} />
