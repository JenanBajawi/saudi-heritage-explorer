/**
 * شكل بيانات المعلم — الاتفاق بين فرق البيانات والمجسمات والوكيل والبيئة.
 * الشرح الكامل: docs/DATA_SCHEMA.md
 */
import type { RegionId } from './region';

export interface Source {
  title: string;
  url: string;
}

export interface LandmarkImage {
  url: string;        // مثال: /images/landmarks/hegra-qasr-al-farid-1.webp
  captionAr?: string;
  source: Source;
}

export interface Landmark {
  /** معرّف ثابت بالإنجليزي، مثل: hegra-qasr-al-farid */
  id: string;
  regionId: RegionId;
  nameAr: string;
  nameEn: string;
  /** أسماء ثانية يستخدمها الناس، تساعد الوكيل يفهم الزائر */
  aliases: string[];
  summaryAr: string;
  details?: string[];
  period?: string;
  location?: string;
  images?: LandmarkImage[];
  /** مسار المجسم، مثل: /models/landmarks/hegra-qasr-al-farid.glb */
  modelUrl?: string;
  /** مصدر واحد على الأقل */
  sources: Source[];
  /** تنبيه إذا المجسم تمثيلي وليس نسخة دقيقة */
  disclaimerAr?: string;
}
