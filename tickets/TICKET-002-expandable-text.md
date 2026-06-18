# TICKET-002 — ExpandableText (Read More / Read Less)

**Loại:** New component (Molecule)
**Màn hình nguồn:** Product Detail (Figma node `2-2`, nhóm "Description")
**Ưu tiên:** Medium
**Phụ thuộc:** Design tokens

## Bối cảnh
Khối "Description" hiển thị đoạn mô tả dài, bị cắt còn ~3 dòng và kết thúc bằng link **"Read More"** màu nâu thương hiệu. Nhấn vào sẽ mở rộng toàn bộ (và đổi thành "Read Less"). Chưa có trong design system; tái dùng được ở Detail, Profile, chi tiết khuyến mãi…

## Specs (theo design system)
- Text nội dung: `text-body` (14/22), màu `text-muted`.
- Số dòng mặc định khi thu gọn: 3 (`line-clamp-3`).
- Link toggle: `text-body` **font-semibold**, màu `text-brand`; inline ngay cuối đoạn khi thu gọn.
- Khoảng cách trên của link khi mở rộng: 4px.

## Props
```ts
type ExpandableTextProps = {
  children: string;            // hoặc ReactNode
  clampLines?: number;         // mặc định 3
  moreLabel?: string;          // mặc định 'Read More'
  lessLabel?: string;          // mặc định 'Read Less'
  defaultExpanded?: boolean;   // mặc định false
};
```

## Hành vi
- Thu gọn: clamp `clampLines` dòng, hiện `moreLabel`.
- Mở rộng: hiện toàn bộ, hiện `lessLabel`.
- Nếu nội dung ngắn hơn `clampLines` → **không** hiển thị toggle.

## States
- default (thu gọn) · expanded · link hover/pressed (`text-brand-pressed`) · focus-visible (ring theo `brand`).

## Accessibility
- Toggle là `<button>`, có `aria-expanded`.
- Vùng chạm nút ≥ 44px chiều cao hiệu dụng (padding).

## Acceptance criteria
- [ ] Clamp đúng 3 dòng, toggle Read More/Read Less hoạt động.
- [ ] Ẩn toggle khi text ngắn.
- [ ] Link dùng `text-brand` / pressed `text-brand-pressed`, không hardcode màu.
- [ ] Có showcase với đoạn ngắn & đoạn dài.

## Vị trí file
`src/components/ui/ExpandableText.tsx`

## Tham chiếu
- `DESIGN-SYSTEM.md` §2.1, §2.2, §3.2, §3.4
