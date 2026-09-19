<script>
   let { targetDomin = $bindable(), isInvalidDomin = $bindable(), onfind, loading } = $props();

   function onkeydown({ key }) {
      isInvalidDomin = null;
      if (key === "Enter") onfind();
   }
</script>

<nav>
   <ul>
      <li>
         <img src="https://taraknath341.codeberg.page/client_storage/logo.svg" alt=">404<" width="35px" />
      </li>
      <li>
         <font size="5">Subdomin Finder</font>
      </li>
   </ul>
</nav>

<header>
   <div role="search">
      <input
         type="search"
         aria-invalid={isInvalidDomin}
         {onkeydown}
         bind:value={targetDomin}
         placeholder="e.g. target.com"
      />
      <button onclick={onfind} aria-busy={loading}>Find</button>
   </div>
</header>

<hr />

<style>
   img {
      border-radius: 9px;
   }

   hr {
      margin-top: 0;
   }
</style>
