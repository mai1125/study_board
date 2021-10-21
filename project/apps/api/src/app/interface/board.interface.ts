import { Category } from './category.interface';

/** 性別*/
export const GENDER = {
  /** 男 */
  MALE: '男',
  /** 女 */
  FEMALE: '女',
} as const;

/**
 * Boardモデル
 */
export interface Board {
  /** ID */
  id?: number;
  /** 名前 */
  name: string;
  /** 年齢 */
  age: number;
  /** 性別 */
  gender: typeof GENDER[keyof typeof GENDER];
  /** タイトル */
  title: string;
  /** 本文 */
  text: string;
  /** カテゴリー */
  category: Category[];
}
