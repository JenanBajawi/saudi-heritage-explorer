/**
 * معرّفات المناطق والقاعات — ثابتة ولا تتغير.
 * المسؤول: المهمة 1 (أي تعديل بموافقة مسؤولة الدمج)
 */

/** المناطق الخمس اللي لها بيانات معالم */
export type RegionId = 'najd' | 'hijaz' | 'north' | 'south' | 'east';

/** كل الأماكن اللي يقدر الزائر يروح لها */
export type RoomId = 'lobby' | RegionId | 'fashion';

export const REGION_NAMES_AR: Record<RegionId, string> = {
  najd: 'نجد',
  hijaz: 'الحجاز',
  north: 'الشمال',
  south: 'الجنوب',
  east: 'الشرقية',
};
