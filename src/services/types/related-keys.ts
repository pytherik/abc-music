import type { SelectedKey } from '@/services/types/selected-key'

export type RelatedKeys = {
  selected: SelectedKey;
  parallel: SelectedKey;
  sub: SelectedKey;
  dom: SelectedKey;
  subParallel: SelectedKey;
  domParallel: SelectedKey;
}