# Coffee Shop App — Design System

> Đề xuất design system rút ra từ file Figma *"Coffee Shop Mobile App Design (Community)"* (NAM Design Studio).
> Mục tiêu: đảm bảo mọi giao diện build sau này thống nhất về UI/UX và component được tái sử dụng tối đa.
> Định hướng triển khai: **React + Tailwind CSS** (mobile-first).

---

## 1. Nguyên tắc thiết kế (Design Principles)

1. **Mobile-first** — Thiết kế gốc là app điện thoại (khung 375px). Mọi component build cho màn hình nhỏ trước, mở rộng sau.
2. **Một nguồn sự thật (single source of truth)** — Màu, font, spacing, radius đều khai báo bằng *design token*. Tuyệt đối không hardcode hex/px rải rác trong component.
3. **Ấm, mời gọi, sạch sẽ** — Tông nâu cà phê + nền kem, nhiều khoảng trắng, bo góc lớn, đổ bóng mềm.
4. **Component đóng, có biến thể (variants)** — Mỗi component nhận `variant`/`size`/`state` qua props thay vì tạo nhiều bản sao.
5. **Nhất quán tương tác** — Cùng một hành động (CTA chính, nút icon, chip chọn) phải trông và hành xử giống nhau ở mọi màn hình.

---

## 2. Design Tokens

### 2.1 Màu sắc (Colors)

Trích từ Color Guide trong file. Nhóm Figma: `Color Foundation` (Brown / Grey / Surface) + `Container`.

| Token | Hex | Vai trò |
|---|---|---|
| `brand.primary` (Brown 01) | `#C67C4E` | Màu thương hiệu — CTA chính, trạng thái active, giá tiền nổi bật |
| `brand.primaryPressed` | `#A86B43` | Trạng thái nhấn/hover của nút chính (derive, tối hơn ~10%) |
| `brand.soft` (Tan 02) | `#EDD6C8` | Nền nhạt của thương hiệu — promo, chip nền, vùng nhấn nhẹ |
| `neutral.ink` (03) | `#313131` | Text chính, tiêu đề, icon đậm |
| `neutral.body` | `#313131` @ 80–90% | Text nội dung |
| `neutral.muted` | `#9B9B9B` | Text phụ, mô tả, placeholder |
| `neutral.border` (Grey 04) | `#E3E3E3` | Viền, đường kẻ, nút phụ/outline |
| `surface.page` (05) | `#F9F2ED` | Nền trang (kem ấm) |
| `surface.card` | `#FDFDFF` | Nền thẻ/card, input, sheet |
| `success` (đề xuất thêm) | `#2EB872` | Trạng thái "Đã giao", progress giao hàng (file có dùng xanh lá làm accent) |
| `warning` | `#E8A33D` | Cảnh báo nhẹ (đề xuất thêm) |
| `danger` | `#E5484D` | Lỗi, xoá, hết hàng (đề xuất thêm) |

**Quy ước dùng màu**
- Nền app luôn là `surface.page`; mọi khối nội dung đặt trên `surface.card`.
- Chỉ dùng `brand.primary` cho **một** hành động chính mỗi màn hình (CTA). Không lạm dụng.
- Text trên nền nâu (`brand.primary`) luôn là `surface.card` (#FDFDFF) để đủ tương phản.

### 2.2 Typography

Font chữ: **Sora** (Google Fonts) — sans-serif hình học, hiện đại. Dùng cho toàn bộ app.

| Token | Size / Line-height | Weight | Dùng cho |
|---|---|---|---|
| `display` | 30 / 38 | 600 (SemiBold) | Tiêu đề onboarding ("Fall in Love with…") |
| `h1` | 24 / 32 | 600 | Tên sản phẩm ở Detail |
| `h2` | 20 / 28 | 600 | Tiêu đề màn hình |
| `h3` | 16 / 24 | 600 | Tiêu đề khối ("Description", "Size", "Payment Summary") |
| `body` | 14 / 22 | 400 | Nội dung mặc định |
| `body-strong` | 14 / 22 | 600 | Nhãn nhấn, giá trong list |
| `caption` | 12 / 16 | 400 | Phụ đề, metadata ("Deep Foam", rating count) |
| `button` | 16 / 16 | 600 | Chữ trên nút |
| `price` | 18 / 24 | 600 | Giá tiền |

Quy tắc: chỉ dùng các bậc trên, không tạo size lẻ. Weight giới hạn ở 400 / 500 / 600.

### 2.3 Spacing (hệ 4pt / 8pt)

`4 · 8 · 12 · 16 · 20 · 24 · 32 · 40`

- **Gutter màn hình:** 16px hai bên (an toàn 24px cho onboarding).
- **Khoảng giữa các card trong grid:** 16px.
- **Padding trong card:** 12–16px.
- **Khoảng giữa các section:** 24px.

### 2.4 Bo góc (Radius)

| Token | px | Dùng cho |
|---|---|---|
| `radius.sm` | 8 | Input nhỏ, badge |
| `radius.md` | 12 | Chip, nút icon, thumbnail nhỏ |
| `radius.lg` | 16 | Nút chính, card sản phẩm, ảnh |
| `radius.xl` | 24 | Ảnh lớn (Detail), bottom sheet, promo |
| `radius.full` | 9999 | Chip pill, avatar, toggle |

### 2.5 Đổ bóng (Shadow) — nhóm `Container` trong Figma

| Token | Giá trị | Dùng cho |
|---|---|---|
| `shadow.card` | `0 8px 24px rgba(141, 87, 56, 0.08)` | Card sản phẩm, sheet (bóng ấm theo tông nâu) |
| `shadow.floating` | `0 12px 32px rgba(49, 49, 49, 0.12)` | Nút nổi, bottom action bar |

### 2.6 Tailwind config (gợi ý)

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: '#C67C4E', pressed: '#A86B43', soft: '#EDD6C8' },
        ink: '#313131',
        muted: '#9B9B9B',
        border: '#E3E3E3',
        surface: { page: '#F9F2ED', card: '#FDFDFF' },
        success: '#2EB872', warning: '#E8A33D', danger: '#E5484D',
      },
      fontFamily: { sans: ['Sora', 'system-ui', 'sans-serif'] },
      borderRadius: { sm: '8px', md: '12px', lg: '16px', xl: '24px' },
      boxShadow: {
        card: '0 8px 24px rgba(141,87,56,0.08)',
        floating: '0 12px 32px rgba(49,49,49,0.12)',
      },
    },
  },
};
```

---

## 3. Thư viện Component (Component Library)

Tổ chức theo Atomic Design: **Atoms → Molecules → Organisms**. Mỗi component nên là một file React riêng, nhận props rõ ràng, không chứa logic màn hình.

### 3.1 Atoms (thành phần cơ bản)

- **Button** — `variant`: `primary` (nền nâu, chữ trắng, pill/lg radius) · `secondary` (viền `border`, chữ ink) · `ghost` (chỉ chữ/icon). `size`: `sm | md | lg`. `state`: default / pressed / disabled / loading. `fullWidth`. Hỗ trợ `leadingIcon`/`trailingIcon`. Ví dụ trong file: "Get Started", "Buy Now", "Order".
- **IconButton** — nút icon vuông bo góc (`radius.md`), `variant`: `filled` (nền nâu — nút filter, +) · `soft` (nền `brand.soft`) · `ghost` (nút back, heart, call). Kích thước chạm tối thiểu 44×44.
- **Chip / CategoryTab** — chip chọn danh mục. `selected`: nền `brand.primary` + chữ trắng; mặc định: chữ `muted`, nền trong suốt. Dùng ở thanh "All Coffee / Machiato / Latte / Americano".
- **Badge** — nhãn nhỏ. Biến thể: `rating` (sao + số, góc ảnh sản phẩm), `promo` ("Promo", nền đỏ/cam), `status`.
- **Input / TextField** — ô nhập có `leadingIcon` tuỳ chọn. Dùng cho SearchBar, form địa chỉ.
- **SegmentedControl** — chọn 1 trong N. Dùng cho "Deliver / Pick Up" và chọn Size "S / M / L" (item active = nền `brand.soft` + viền `brand.primary`).
- **Stepper** — bộ tăng/giảm số lượng `[ − ] n [ + ]`.
- **Avatar** — ảnh tròn (courier), có size.
- **Price** — text giá, format tiền tệ, dùng token `price`.
- **Rating** — sao + điểm + số lượt (vd "4.8 (230)").
- **StatusBar** — thanh trạng thái giả lập (9:41, sóng, pin) cho preview.

### 3.2 Molecules (ghép từ atoms)

- **ProductCard** — ảnh + `Badge(rating)` + tên + phụ đề (vd "Deep Foam") + `Price` + `IconButton(+)`. Là khối tái sử dụng nhiều nhất ở Home.
- **PromoBanner** — ảnh nền + `Badge(promo)` + tiêu đề ("Buy one get one FREE") + (tùy chọn) CTA. Carousel-ready.
- **SearchBar** — `Input(search)` + `IconButton(filter)` đặt cạnh nhau.
- **LocationHeader** — nhãn "Location" + giá trị + dropdown (đổi địa chỉ).
- **OrderItem (ListItem)** — thumbnail + tên + phụ đề + `Stepper`. Dùng ở Order/Cart.
- **AddressCard** — icon + nhãn địa chỉ + nút "Edit Address" / "Add Note".
- **PaymentRow** — nhãn trái + giá phải (Price, Delivery Fee); hỗ trợ giá gạch ngang khi giảm.
- **PaymentMethodSelector** — icon + tên ví + số dư + chevron (mở danh sách).
- **DiscountRow** — dòng "1 Discount is Applied" + chevron.
- **CourierCard** — avatar + tên + vai trò ("Personal Courier") + `IconButton(call)`.
- **DeliveryStatusCard** — tiêu đề "10 minutes left" + ProgressTracker (các chặng, dùng `success`) + mô tả.

### 3.3 Organisms (khối lớn / theo màn hình)

- **AppHeader** — `variant`: `title` (back + tiêu đề giữa + action phải, dùng ở Detail/Order) · `location` (LocationHeader + action, dùng ở Home).
- **BottomNavBar** — 4 tab: Home · Favorites · Cart/Bag · Notifications. Tab active tô màu `brand.primary`. Cố định đáy, tôn trọng safe-area.
- **CategoryTabs** — hàng `Chip` cuộn ngang.
- **ProductGrid** — lưới 2 cột `ProductCard`, gutter 16px.
- **BottomActionBar** — thanh dính đáy: `Price` + `Button(primary)` ("Buy Now" / "Order"). Dùng `shadow.floating`.
- **CheckoutSummary** — gom AddressCard + OrderItem + DiscountRow + PaymentRow + PaymentMethodSelector.

### 3.4 Trạng thái bắt buộc cho mọi component

Mỗi component nên định nghĩa rõ: **default · hover/pressed · focus (a11y) · disabled · loading · selected/active**. Ngoài ra mỗi *màn hình dữ liệu* cần có **empty / loading (skeleton) / error** — đây là phần file Figma chưa có, nên bổ sung sớm để tránh thiếu nhất quán về sau.

---

## 4. Màn hình & Layout nên xây

File hiện có 5 màn high-fidelity. Dưới đây là bộ màn hình đề xuất đầy đủ cho một app order cà phê, đánh dấu cái nào đã có / nên thêm:

**Đã có trong Figma**
1. **Onboarding / Splash** — ảnh full-bleed, headline, subtitle, CTA "Get Started".
2. **Home** — LocationHeader, SearchBar+Filter, PromoBanner, CategoryTabs, ProductGrid, BottomNavBar.
3. **Product Detail** — ảnh lớn, tên + rating, icon row, Description (Read More), Size (SegmentedControl), BottomActionBar.
4. **Order / Checkout** — Deliver/Pick Up, AddressCard, OrderItem + Stepper, Discount, PaymentSummary, payment method, CTA "Order".
5. **Delivery Tracking** — bản đồ, DeliveryStatusCard + ProgressTracker, CourierCard.

**Nên bổ sung để hoàn chỉnh flow & dùng lại component**
6. **Search & Filter** — kết quả tìm kiếm + bottom sheet bộ lọc (tái dùng Chip, SegmentedControl).
7. **Cart / Giỏ hàng** — danh sách OrderItem + tóm tắt giá (tái dùng OrderItem, PaymentRow, BottomActionBar).
8. **Favorites** — lưới ProductCard (tab trái tim ở nav).
9. **Notifications** — danh sách thông báo (tab chuông).
10. **Profile / Settings** — thông tin user, địa chỉ đã lưu, lịch sử đơn.
11. **Order History / Order Detail** — tái dùng CheckoutSummary ở chế độ chỉ đọc.
12. **States dùng chung** — Empty (giỏ trống, chưa có yêu thích), Loading (skeleton), Error/No-network, Success (đặt hàng thành công).

**Quy ước layout**
- Khung gốc **375 × 812** (iPhone), padding ngang **16px**, tôn trọng safe-area top/bottom.
- Mọi màn hình cuộn dọc; CTA chính dính đáy bằng **BottomActionBar**.
- Lưới sản phẩm: **2 cột**, gap 16px.
- Header cao ~56px; BottomNav cao ~64px + safe-area.

---

## 5. Cấu trúc thư mục React (đề xuất)

```
src/
├── styles/
│   └── tokens.css          # CSS variables (mirror của tailwind.config)
├── components/
│   ├── ui/                 # Atoms: Button, IconButton, Chip, Badge, Input,
│   │                       #        SegmentedControl, Stepper, Avatar, Price, Rating
│   ├── product/            # ProductCard, PromoBanner, ProductGrid
│   ├── order/              # OrderItem, AddressCard, PaymentRow, CheckoutSummary
│   ├── delivery/           # DeliveryStatusCard, CourierCard, ProgressTracker
│   └── layout/             # AppHeader, BottomNavBar, BottomActionBar
├── screens/                # Onboarding, Home, Detail, Order, Delivery, ...
└── lib/                    # format tiền tệ, hooks dùng chung
```

Nguyên tắc: `ui/` không biết gì về business; `screens/` chỉ ghép component + dữ liệu, không tự style.

---

## 6. Lộ trình triển khai (gợi ý thứ tự)

1. **Tokens trước** — khai báo `tailwind.config.js` + nạp font Sora. Khoá lại trước khi code component.
2. **Atoms** — Button, IconButton, Chip, Badge, Input, SegmentedControl, Stepper. (Dựng kèm 1 trang "Storybook/Showcase" để duyệt mọi variant/state.)
3. **Molecules** — ProductCard, SearchBar, OrderItem, PaymentRow…
4. **Organisms** — AppHeader, BottomNavBar, BottomActionBar.
5. **Screens** — Home → Detail → Order → Delivery → Onboarding, rồi các màn bổ sung.
6. **States & a11y** — empty/loading/error; kiểm tra tương phản màu (đặc biệt text trên nền nâu) và vùng chạm ≥ 44px.

---

*Ghi chú: các giá trị `pressed`, `muted`, `success/warning/danger`, và shadow là đề xuất phái sinh để hoàn thiện hệ thống — nên xác nhận lại với bản Figma gốc trước khi khoá token.*
