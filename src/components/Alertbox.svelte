<script>
   let { showAlertBox = $bindable() } = $props();
</script>

<dialog open={showAlertBox}>
   <article>
      <header>
         <button aria-label="Close" rel="prev" onclick={() => (showAlertBox = null)}></button>
         <p>
            <strong>Alert</strong>
         </p>
      </header>
      <center>
         <img src="https://freesvg.org/img/error-button.png" alt="Error" width="150px" height="150px" />
         <h1>Try Again</h1>
      </center>
   </article>
</dialog>
