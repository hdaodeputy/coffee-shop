# TICKET-006 — SegmentedControl: thêm variant "spaced" (Size selector)

**Loại:** Extend existing component (Atom)
**Màn hình nguồn:** Product Detail (chọn Size S/M/L) — đối chiếu với Order (Deliver/Pick Up)
**Ưu tiên:** Medium
**Phụ thuộc:** `SegmentedControl` (đã có trong design system §3.1)

## Bối cảnh
Design system đã có `SegmentedControl` (dùng cho "Deliver / Pick Up" — kiểu **connected**, các option dính liền trong 1 track). Nhưng bộ chọn **Size (S / M / L)** ở Detail là các **option rời nhau, viền ngoài**, option active = nền `brand-soft` + viền `brand`. Cần mở rộng component bằng một `appearance` variant thay vì tạo component mới (theo nguyên tắc "props, not copies").

## Specs (theo design system)
**Variant `connected` (đã có):** track nền `brand-soft`/`line`, item active nền trắng nổi. Dùng cho Deliver/Pick Up.

**Variant `spaced` (mới):**
- Mỗi option là 1 ô riêng, gap 12px (`gap-3`).
- Mặc định: nền `surface-card`, viền `border-line`, chữ `text-ink`, `rounded-lg`.
- Active/selected: nền `brand-soft`, viền `border-brand`, chữ `text-ink`.
- Chiều cao ô ≥ 44px.

## Props (đề xuất)
```ts
type SegmentedControlProps<T extends string> = {
  options: { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
  appearance?: 'connected' | 'spaced'; // mặc định 'connected'
  size?: 'sm' | 'md';
};
```

## States
- default · selected · pressed · focus-visible (ring `brand`) · disabled (cả control & từng option).

## Accessibility
- `role="radiogroup"`, mỗi option `role="radio"` + `aria-checked`.
- Điều hướng bằng phím mũi tên giữa các option.

## Acceptance criteria
- [ ] `appearance="spaced"` render đúng Size S/M/L như Figma (active = `brand-soft` + viền `brand`).
- [ ] `appearance="connected"` vẫn hoạt động cho Deliver/Pick Up.
- [ ] Không tạo component trùng; chỉ thêm variant.
- [ ] Bàn phím + a11y đạt yêu cầu.
- [ ] Showcase cả 2 appearance.

## Vị trí file
`src/components/ui/SegmentedControl.tsx`

## Tham chiếu
- `DESIGN-SYSTEM.md` §2.1, §2.4, §3.1, §3.4 ("props, not copies")
