<script>
   import Header from "./components/Header.svelte";
   import Alertbox from "./components/Alertbox.svelte";
   import subdominFinder from "./functions/sundominFinder";
   let targetDomin = $state.raw("");
   let subdomins = $state.raw([]);
   let loading = $state.raw(false);
   let showAlertBox = $state.raw(false);

   async function onfind() {
      try {
         loading = true;
         subdomins = await subdominFinder(targetDomin);
      } catch (err) {
         showAlertBox = true;
      } finally {
         loading = false;
      }
   }
</script>

<Alertbox bind:showAlertBox />

<Header bind:targetDomin {onfind} {loading} />

<footer>
   {#each subdomins as subdomin}
      <div role="group">
         <input type="text" readonly value={subdomin} />
         <a href="https://{subdomin}" role="button">Visit</a>
      </div>
   {/each}
</footer>
