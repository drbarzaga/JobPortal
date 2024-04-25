import { IsDefined, IsEmail, MaxLength, MinLength } from "class-validator";

export class RegisterUserAccountRequest {
  @IsDefined({ message: "User account type is required" })
  user_type_name!: string;

  @IsDefined({ message: "First name is required" })
  @IsEmail()
  email!: string;

  @IsDefined({ message: "Password is required" })
  @MinLength(8)
  @MaxLength(20)
  password!: string;
}
