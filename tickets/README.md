# Design Tickets — màn Product Detail

Tổng hợp ticket thiết kế cho các component **tái sử dụng còn thiếu**, rút ra từ màn **Product Detail** (Figma node `2-2`). Mọi ticket bám theo `DESIGN-SYSTEM.md` (tokens, variants, states). Phần triển khai sẽ do Claude Code thực hiện.

## Audit màn Detail — component đã có vs cần tạo

| Thành phần trên màn | Trạng thái | Ghi chú |
|---|---|---|
| StatusBar | ✅ Đã có | DS §3.1 |
| AppHeader (back + title + heart) | ✅ Đã có | variant `title`, DS §3.3 |
| IconButton (back, heart) | ✅ Đã có | DS §3.1 |
| Rating (4.8 (230)) | ✅ Đã có | DS §3.2 |
| Price | ✅ Đã có | DS §3.1 |
| Button (Buy Now) | ✅ Đã có | variant `primary` |
| BottomActionBar (Price + CTA) | ✅ Đã có | DS §3.3 |
| Ảnh hero lớn | 🆕 **TICKET-005** | tách ProductHero + state ảnh |
| Hàng icon thuộc tính (scooter/bean/milk) | 🆕 **TICKET-001** | AttributeIconTile + Row |
| Mô tả + "Read More" | 🆕 **TICKET-002** | ExpandableText |
| Đường kẻ ngăn cách | 🆕 **TICKET-003** | Divider |
| Tiêu đề khối (Description, Size) | 🆕 **TICKET-004** | SectionHeader |
| Bộ chọn Size (S/M/L) | 🆕 **TICKET-006** | mở rộng SegmentedControl (variant `spaced`) |
| **Ráp toàn màn Detail** | 🆕 **TICKET-007** | screen assembly từ các component trên |

## Danh sách ticket

1. [TICKET-001 — AttributeIconTile + AttributeIconRow](./TICKET-001-attribute-icon-tile.md)
2. [TICKET-002 — ExpandableText (Read More)](./TICKET-002-expandable-text.md)
3. [TICKET-003 — Divider](./TICKET-003-divider.md)
4. [TICKET-004 — SectionHeader](./TICKET-004-section-header.md)
5. [TICKET-005 — ProductHero (Hero Image)](./TICKET-005-product-hero.md)
6. [TICKET-006 — SegmentedControl: variant "spaced"](./TICKET-006-segmented-control-spaced-variant.md)
7. [TICKET-007 — Ráp màn Product Detail](./TICKET-007-product-detail-screen.md) *(làm cuối, sau khi 001–006 xong)*

## Nguyên tắc chung (áp dụng cho mọi ticket)
- Chỉ dùng **design token** (`@theme` trong `src/index.css`) — không hardcode hex/px ngoài scale 4/8pt.
- Ưu tiên **props/variant** thay vì tạo bản sao component.
- Mỗi component định nghĩa đủ states: default · pressed · focus · disabled · loading · selected (khi áp dụng).
- Đạt a11y cơ bản: vùng chạm ≥ 44px, tương phản màu đạt WCAG AA, focus-visible rõ ràng.
- Kèm showcase/Storybook cho mọi variant & state.
