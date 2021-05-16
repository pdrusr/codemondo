const regex = new RegExp("^FASE[A-Z0-9]{0,12}$");
console.log(regex.test(""));
console.log(regex.test("FASEd"));
console.log(regex.test("FASEX"));