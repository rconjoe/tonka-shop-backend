import { model } from "@medusajs/framework/utils";

const Profile = model.define("profile", {
  id: model.id().primaryKey(),
  email: model.text(),
  username: model.text(),
  photo_url: model.text(),
})

export default Profile 
