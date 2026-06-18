# TICKET-005 — ProductHero (Hero Image)

**Loại:** New component (Atom)
**Màn hình nguồn:** Product Detail (ảnh lớn đầu màn)
**Ưu tiên:** Medium
**Phụ thuộc:** Design tokens

## Bối cảnh
Màn Detail mở đầu bằng ảnh sản phẩm lớn bo góc. Tách thành component để tái dùng và xử lý nhất quán các state ảnh (loading/error) — vốn thiếu trong Figma.

## Specs (theo design system)
- Bo góc: `rounded-xl` (24px).
- Tỷ lệ khung ảnh: ~16:10 (cho phép `aspect` prop).
- `object-cover`, chiếm đủ chiều ngang content (trừ gutter 16px).
- Nền chờ/skeleton: `bg-line` (shimmer nhẹ).

## Props
```ts
type ProductHeroProps = {
  src: string;
  alt: string;
  aspect?: '16/10' | '1/1' | '4/3';  // mặc định '16/10'
  rounded?: 'lg' | 'xl';             // mặc định 'xl'
};
```

## States (bắt buộc — bổ sung so với Figma)
- **loading**: skeleton `bg-line` + shimmer.
- **loaded**: ảnh hiện (fade-in nhẹ).
- **error**: placeholder (icon cà phê + nền `brand-soft`).

## Accessibility
- `alt` bắt buộc (mô tả sản phẩm).

## Acceptance criteria
- [ ] `rounded-xl`, `object-cover`, đúng aspect.
- [ ] Có đủ 3 state loading/loaded/error.
- [ ] Không hardcode radius/màu.
- [ ] Showcase 3 state.

## Vị trí file
`src/components/product/ProductHero.tsx`

## Tham chiếu
- `DESIGN-SYSTEM.md` §2.4, §3.1, §3.4
