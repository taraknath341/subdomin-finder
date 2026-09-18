async function subdominFinder(domin) {
   const response = await fetch(`https://proxy.corsfix.com/?https://crt.name/v1/search?apex=${domin}`, {
      headers: {
         "X-CORSFIX-KEY": "cfx_cdaeda8219b5165f5d2cf8554444ab91",
      },
   });
   if (!response.ok) {
      throw new Error("Response invalid");
   }
   const subdomins = await response.text();
   return subdomins.split("\n").filter((i) => i);
}

export default subdominFinder;
