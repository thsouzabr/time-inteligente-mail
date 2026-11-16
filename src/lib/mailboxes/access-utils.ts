import type { AppDatabase } from "@/db";

// Time Inteligente build: Team mailbox sharing is always enabled.
export async function isTeamMailboxSharingEnabled(_db: AppDatabase): Promise<boolean> {
	return true;
}
