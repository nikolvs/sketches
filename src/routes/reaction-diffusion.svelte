<script>
    import Sketch from '$lib/components/Sketch.svelte';
    import { makeSketch } from '$lib/sketches/reaction-diffusion';
  
    const config = {
      canvasWidth: 400,
      canvasHeight: 400,
    };
  </script>
  
  <Sketch {config} {makeSketch} />
  