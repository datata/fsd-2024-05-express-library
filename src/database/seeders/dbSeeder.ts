import { authorSeeder } from "./authorSeeder";
import userSeeder from "./userSeeder";

(async () => {
   console.log("Starting seeders...");
   await authorSeeder();
   await userSeeder();
})();


// const startSeeder = async() => {
//   console.log("Starting seeders...");
//   await authorSeeder();
// }

// startSeeder()