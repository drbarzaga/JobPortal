import UserTypeSeeder from "./user-type.seeder";

export default class Seeder {
  public static async run() {
    // Run seeders
    console.log(`🌱[Server]: Running seeders`);
    await UserTypeSeeder.run();
  }
}
