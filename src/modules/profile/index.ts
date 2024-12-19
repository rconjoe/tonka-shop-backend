import ProfileModuleService from "./service";
import { Module } from "@medusajs/framework/utils";

export const PROFILE_MODULE = "profile"

export default Module(PROFILE_MODULE, {
  service: ProfileModuleService
})
