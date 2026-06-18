# TICKET-003 — Divider

**Loại:** New component (Atom)
**Màn hình nguồn:** Product Detail (đường kẻ dưới khối Rating); dùng chung nhiều màn.
**Ưu tiên:** Low
**Phụ thuộc:** Design tokens

## Bối cảnh
Màn Detail có đường kẻ ngang ngăn giữa khối Rating và Description. Cần 1 atom Divider chuẩn hoá thay vì kẻ border lẻ tẻ.

## Specs (theo design system)
- Màu: `border-line` (#E3E3E3).
- Độ dày: 1px.
- Spacing dọc mặc định: 16px trên/dưới (cho phép override).
- Hỗ trợ hướng ngang (mặc định) và dọc.

## Props
```ts
type DividerProps = {
  orientation?: 'horizontal' | 'vertical'; // mặc định 'horizontal'
  spacing?: 'none' | 'sm' | 'md';          // 0 / 8px / 16px — mặc định 'md'
  inset?: boolean;                          // chừa lề trái 16px (kiểu list)
};
```

## Accessibility
- Render `role="separator"`, `aria-orientation` tương ứng.

## Acceptance criteria
- [ ] 1px, màu `line`, không hardcode.
- [ ] Hỗ trợ horizontal/vertical + spacing variants.
- [ ] Có trong showcase.

## Vị trí file
`src/components/ui/Divider.tsx`

## Tham chiếu
- `DESIGN-SYSTEM.md` §2.1, §2.3
