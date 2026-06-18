# TICKET-004 — SectionHeader

**Loại:** New component (Atom/Molecule)
**Màn hình nguồn:** Product Detail ("Description", "Size"); dùng chung nhiều màn.
**Ưu tiên:** Low
**Phụ thuộc:** Design tokens

## Bối cảnh
Các tiêu đề khối ("Description", "Size", và ở Order: "Delivery Address", "Payment Summary") đều cùng kiểu chữ. Chuẩn hoá thành 1 component để mọi màn nhất quán.

## Specs (theo design system)
- Tiêu đề: `text-h3` (16/24, weight 600), màu `text-ink`.
- Khoảng cách dưới mặc định: 12px (`mb-3`).
- Tuỳ chọn action bên phải (vd link "See all").

## Props
```ts
type SectionHeaderProps = {
  title: string;
  action?: { label: string; onClick: () => void }; // link phải, dùng text-brand
  className?: string;
};
```

## States
- default · action hover/pressed (`text-brand-pressed`) · focus-visible.

## Accessibility
- `title` render bằng thẻ heading phù hợp (`<h2>`/`<h3>`) — cho phép truyền `as` prop nếu cần.

## Acceptance criteria
- [ ] Dùng đúng `text-h3` + `text-ink`.
- [ ] Action phải tuỳ chọn, dùng `text-brand`.
- [ ] Có trong showcase (có & không có action).

## Vị trí file
`src/components/ui/SectionHeader.tsx`

## Tham chiếu
- `DESIGN-SYSTEM.md` §2.2, §3.2
