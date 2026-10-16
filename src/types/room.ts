/**
 * كيف تعرّف القاعة نفسها للمتحف.
 * كل قاعة في src/rooms/ تصدّر كائن من نوع RoomModule.
 */
import type { ComponentType } from 'react';
import type { RoomId } from './region';

export type Vec3 = [number, number, number];

/** مكان جاهز داخل القاعة يُعرض فيه معلم */
export interface LandmarkSlot {
  slotId: string;
  position: Vec3;
  /** الدوران حول المحور الرأسي بالراديان */
  rotationY?: number;
  /** يُربط بمعرّف المعلم في src/data */
  landmarkId?: string;
}

export interface RoomModule {
  id: RoomId;
  titleAr: string;
  subtitleAr?: string;
  /** مكان وقوف الزائر لما يدخل القاعة */
  entryPoint: Vec3;
  slots: LandmarkSlot[];
  /** مكوّن القاعة ثلاثي الأبعاد */
  Component: ComponentType<{ active: boolean }>;
}
