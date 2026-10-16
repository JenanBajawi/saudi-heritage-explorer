/**
 * أوامر المتحف اللي يستدعيها الوكيل الذكي.
 * المهمة 1 تنفّذها، والمهمة 6 تستخدمها.
 * الشرح: docs/AI_AGENT_GUIDE.md
 */
import type { RoomId } from './region';

export interface CommandResult {
  ok: boolean;
  /** رسالة عربية يعرضها الوكيل للزائر */
  messageAr: string;
}

export interface RoomSummary {
  id: RoomId;
  titleAr: string;
  landmarkIds: string[];
}

export interface VisitorState {
  roomId: RoomId;
  nearbyLandmarkIds: string[];
  openInfoLandmarkId: string | null;
  inVR: boolean;
}

export interface MuseumAPI {
  listRooms(): RoomSummary[];
  goToRoom(roomId: RoomId): Promise<CommandResult>;
  focusLandmark(landmarkId: string): Promise<CommandResult>;
  openInfo(landmarkId: string): CommandResult;
  closeInfo(): CommandResult;
  getVisitorState(): VisitorState;
}
