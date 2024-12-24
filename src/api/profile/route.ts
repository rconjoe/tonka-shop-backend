import type { AuthenticatedMedusaRequest, MedusaResponse } from "@medusajs/framework";
import { MedusaError } from "@medusajs/framework/utils";
import createProfileWorkflow from "src/workflows/create-profile";

type RequestBody = {
  email: string
  username: string
}

export async function POST(
  req: AuthenticatedMedusaRequest<RequestBody>,
  res: MedusaResponse
) {
  // if actor_id is present on the request, this means it's already authenticated for existing profile
  if (req.auth_context.actor_id) {
    throw new MedusaError(
      MedusaError.Types.INVALID_DATA,
      "Request already authenticated as profile"
    )
  }

  const { result } = await createProfileWorkflow(req.scope)
    .run({
      input: {
        profile: req.body,
        authIdentityId: req.auth_context.auth_identity_id
      },
    })

  res.status(200).json({ profile: result })
}
