<script>
  import Sketch from '$lib/components/Sketch.svelte';
  import { makeSketch } from '$lib/sketches/game-of-life';

  const config = {
    canvasWidth: 1080,
    canvasHeight: 1920,
  };
</script>

<Sketch {config} {makeSketch} />
