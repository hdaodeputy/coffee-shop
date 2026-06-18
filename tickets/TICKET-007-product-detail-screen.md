# TICKET-007 — Ráp màn Product Detail

**Loại:** Screen assembly (Organism → Screen)
**Màn hình nguồn:** Product Detail (Figma node `2-2`)
**Ưu tiên:** High
**Phụ thuộc:** TICKET-001 → 006 (các component dưới đây phải xong trước)

## Bối cảnh
Lắp ráp hoàn chỉnh màn **Product Detail** bằng các component **đã tạo** + component sẵn có trong design system. `screens/` chỉ ghép component + dữ liệu, **không tự định nghĩa style** (DS §5).

## Component sử dụng (không tạo mới)
| Vùng | Component | Nguồn |
|---|---|---|
| Thanh trạng thái | `StatusBar` | DS §3.1 (đã có) |
| Header (back + "Detail" + heart) | `AppHeader` variant `title` + `IconButton` | DS §3.3 (đã có) |
| Ảnh lớn | `ProductHero` | TICKET-005 |
| Tên + phụ đề | typography `text-h1` / `text-caption` | tokens |
| Hàng icon thuộc tính | `AttributeIconRow` | TICKET-001 |
| Đánh giá | `Rating` | DS §3.2 (đã có) |
| Đường kẻ | `Divider` | TICKET-003 |
| Tiêu đề khối | `SectionHeader` | TICKET-004 |
| Mô tả | `ExpandableText` | TICKET-002 |
| Chọn size | `SegmentedControl` appearance `spaced` | TICKET-006 |
| Thanh đáy (giá + CTA) | `BottomActionBar` + `Button` + `Price` | DS §3.3 (đã có) |

## Layout (theo design system)
- Khung mobile gốc **375 × 812**, nền `bg-surface-page`.
- **AppHeader** cố định trên; **BottomActionBar** cố định đáy (`shadow-floating`), tôn trọng safe-area.
- Vùng giữa **cuộn dọc**; gutter ngang **16px**; khoảng cách giữa các section **24px**.
- Thứ tự dọc: Hero → (Tên + AttributeIconRow cùng hàng) → Rating → Divider → SectionHeader "Description" + ExpandableText → SectionHeader "Size" + SegmentedControl → (chừa padding đáy = chiều cao BottomActionBar).

## Data model
```ts
type ProductDetail = {
  id: string;
  name: string;
  subtitle: string;            // vd "Ice/Hot"
  imageUrl: string;
  rating: number;              // 4.8
  ratingCount: number;         // 230
  description: string;
  sizes: { value: 'S' | 'M' | 'L'; label: string; price: number }[];
  attributes: { icon: React.ReactNode; label: string }[];
};

type ProductDetailScreenProps = {
  product: ProductDetail;
  onBack: () => void;
  onToggleFavorite: (id: string) => void;
  onBuyNow: (id: string, size: string) => void;
};
```

## Trạng thái màn (bắt buộc — Figma chưa có)
- **loading**: skeleton cho Hero + dòng tiêu đề + khối mô tả (dùng nền `bg-line` shimmer).
- **error**: thông báo lỗi + nút "Thử lại" (CTA `primary`).
- **default/loaded**: nội dung đầy đủ.
- State cục bộ: `selectedSize` (mặc định 'M'), `isFavorite`. Giá ở BottomActionBar **đổi theo size** đang chọn.

## Tương tác
- Back → `onBack`. Heart → `onToggleFavorite` (đổi icon filled/outline).
- Chọn size → cập nhật `selectedSize` + giá hiển thị.
- "Read More/Less" → do `ExpandableText` tự xử lý.
- "Buy Now" → `onBuyNow(id, selectedSize)`.

## Accessibility
- Một CTA `brand.primary` duy nhất trên màn ("Buy Now").
- Thứ tự focus hợp lý; mọi nút icon có `aria-label`; vùng chạm ≥ 44px.
- Tương phản chữ trắng trên nền nâu (CTA) đạt AA.

## Acceptance criteria
- [ ] Màn render khớp Figma node `2-2`, chỉ dùng component đã có + token.
- [ ] Header & BottomActionBar cố định, phần giữa cuộn mượt, không che nội dung.
- [ ] Chọn size cập nhật giá đúng ở thanh đáy.
- [ ] Có đủ 3 state: loading / error / loaded.
- [ ] `screens/ProductDetail.tsx` không chứa style hardcode (chỉ ghép component + data).
- [ ] `npm run build` và `npm run lint` PASS.
- [ ] Showcase: mount màn với dữ liệu mẫu (và demo state loading/error).

## Vị trí file
`src/screens/ProductDetail.tsx` (data mẫu để demo có thể đặt tại `src/lib/mockProducts.ts`).

## Tham chiếu
- `DESIGN-SYSTEM.md` §1, §2, §3.3, §3.4, §4, §5
- TICKET-001 → 006
- Figma: Coffee Shop Mobile App Design — màn Detail (node `2-2`)
