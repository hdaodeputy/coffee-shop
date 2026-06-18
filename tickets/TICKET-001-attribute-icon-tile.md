# TICKET-001 — AttributeIconTile + AttributeIconRow

**Loại:** New component (Atom + Molecule)
**Màn hình nguồn:** Product Detail (Figma node `2-2`, nhóm "Detail Product")
**Ưu tiên:** Medium
**Phụ thuộc:** Design tokens (`src/index.css` `@theme`)

## Bối cảnh
Trên màn Detail, cạnh tên sản phẩm có một hàng **3 ô icon nền nhạt** thể hiện thuộc tính sản phẩm: giao hàng (scooter), hạt cà phê, sữa tươi. Component này chưa có trong design system và sẽ tái dùng ở Detail (và có thể ở Home card sau này).

## Mô tả
- **AttributeIconTile** (atom): một ô vuông bo góc chứa 1 icon thuộc tính.
- **AttributeIconRow** (molecule): hàng ngang gồm nhiều `AttributeIconTile`, gap đều.

## Specs (theo design system)
- Nền tile: `bg-brand-soft` (#EDD6C8) — *hoặc* `bg-surface-card` + `shadow-card` (chọn 1, mặc định `brand-soft`).
- Icon màu: `text-brand` (#C67C4E).
- Kích thước tile: 44×44 (đúng vùng chạm tối thiểu), `rounded-md` (12px).
- Gap giữa các tile trong row: 8px (`gap-2`).
- Icon size: 20px.

## Props
```ts
type AttributeIconTileProps = {
  icon: React.ReactNode;       // icon component (lucide-react khuyến nghị)
  label?: string;              // dùng cho aria-label / tooltip
  variant?: 'soft' | 'card';   // mặc định 'soft'
};

type AttributeIconRowProps = {
  items: { icon: React.ReactNode; label: string }[];
};
```

## States
- default / hover (nếu clickable: nền đậm nhẹ) / disabled (`opacity-50`, không nhận chạm).
- Mặc định **không** phải nút bấm (chỉ hiển thị). Nếu cần clickable, dùng `IconButton` thay thế.

## Accessibility
- Mỗi tile có `aria-label` từ `label`. Nếu chỉ trang trí, set `aria-hidden`.
- Tương phản icon `brand` trên nền `brand-soft` đạt ≥ 3:1 (đối tượng đồ hoạ).

## Acceptance criteria
- [ ] Render 3 tile (delivery, bean, milk) khớp Figma.
- [ ] Chỉ dùng token (không hardcode hex/px ngoài scale 4/8pt).
- [ ] Tile đạt 44×44, `rounded-md`, icon `text-brand`.
- [ ] Có Storybook/showcase hiển thị `variant` soft & card.

## Vị trí file
`src/components/product/AttributeIconTile.tsx` (và `AttributeIconRow` cùng file hoặc tách).

## Tham chiếu
- `DESIGN-SYSTEM.md` §2.1, §2.4, §3.1
- Figma: Coffee Shop Mobile App Design — màn Detail
