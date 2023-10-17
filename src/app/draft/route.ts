import { draftMode } from "next/dist/client/components/headers";

export async function GET(request: Request) {
  draftMode().enable()
  return new Response("Draft Mode is now enabled")
}
