<script>
  import P5 from 'p5-svelte';

  // Props
  export let config;
  export let makeSketch;

  const sketch = (p5) => {
    const canvas = makeSketch({ p5, config });

    p5.setup = () => {
      canvas.$setup();
    };

    p5.draw = () => {
      canvas.$draw();
    };
  };
</script>

<P5 {sketch} />
