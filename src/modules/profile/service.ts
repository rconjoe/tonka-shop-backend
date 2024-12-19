import { MedusaService } from "@medusajs/framework/utils";
import Profile from "./models/profile";

class ProfileModuleService extends MedusaService({
  Profile,
}) { }

export default ProfileModuleService 
