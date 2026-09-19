function validateDomin(domin) {
   if (
      domin.includes("https://") ||
      domin.includes("http://") ||
      !domin.includes(".") ||
      domin[0] === "." ||
      domin[domin.length - 1] === "."
   ) {
      throw {
         text: "Domin-Invalid",
         code: 400,
      };
   }
}

export default validateDomin;
