<script>
  import P5 from 'p5-svelte';

  // Props
  export let config;
  export let makeSketch;

  const sketch = (p5) => {
    const canvas = makeSketch(p5);

    p5.setup = () => {
      canvas.setup(config);
    };

    p5.draw = () => {
      canvas.draw(config);
    };
  };
</script>

<P5 {sketch} />
