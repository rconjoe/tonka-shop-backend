import { createStep, createWorkflow, StepResponse, WorkflowResponse } from "@medusajs/framework/workflows-sdk";
import { setAuthAppMetadataStep } from "@medusajs/medusa/core-flows";
import ProfileModuleService from "src/modules/profile/service";

type CreateProfileWorkflowInput = {
  profile: {
    email: string
    username: string
  }
  authIdentityId: string
}

const createProfileStep = createStep(
  "create-profile-step",
  async (
    { profile: profileData }: Pick<CreateProfileWorkflowInput, "profile">,
    { container }
  ) => {
    const profileModuleService: ProfileModuleService = container.resolve("profileModuleService")

    const profile = await profileModuleService.createProfiles(profileData)

    return new StepResponse(profile)
  }
)

const createProfileWorkflow = createWorkflow(
  "create-profile",
  function (input: CreateProfileWorkflowInput) {
    const profile = createProfileStep({
      profile: input.profile
    })

    setAuthAppMetadataStep({
      authIdentityId: input.authIdentityId,
      actorType: "profile",
      value: profile.id
    })

    return new WorkflowResponse(profile)
  }
)

export default createProfileWorkflow 
