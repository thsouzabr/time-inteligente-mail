import { permanentRedirect } from "next/navigation";

// Time Inteligente: the mailbox is internal to the company, so there is no public
// landing page. "/" always goes to sign-in, which forwards signed-in users to /inbox.
export const dynamic = "force-dynamic";

export default function HomePage() {
	permanentRedirect("/login");
}
