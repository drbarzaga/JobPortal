import UserType from "../models/user/user-type.model";

export default class UserTypeSeeder {
  public static async run() {
    const data = [
      {
        user_type_name: "job_seeker",
        user_type_display_name: "Job Seeker",
      },
      {
        user_type_name: "hr_recruiter",
        user_type_display_name: "HR Recruiter",
      },
    ];

    for (const userType of data) {
      const existingUserType = await UserType.findOne({
        user_type_name: userType.user_type_name,
      });

      if (!existingUserType) {
        await UserType.create({
          user_type_name: userType.user_type_name,
          user_type_display_name: userType.user_type_display_name,
        });
      }
    }
  }
}
