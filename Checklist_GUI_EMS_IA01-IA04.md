# Checklist GUI dùng chung — EMS (Event Management System)

**Phạm vi:** Task 1 Phần A (HW03). Checklist tái sử dụng cho cả bốn kịch bản A–D, phủ đủ bốn interface aspect **IA-01…IA-04**.
**Tổng số mục:** 48 (IA-01: 13 · IA-02: 13 · IA-03: 11 · IA-04: 11).

## Cách dùng
- Với mỗi màn hình được kiểm, đánh dấu từng mục **Passed (P)** / **Failed (F)** / **N/A** (không áp dụng cho màn hình đó).
- Mục **Failed** bắt buộc ghi lý do vào cột **Notes** và đính kèm ảnh chụp.
- Cột **Nguồn** trỏ về heuristic gốc: **N#** = 10 Usability Heuristics của Nielsen; **No#** = 6 nguyên tắc của Norman (visibility, feedback, constraints, mapping, consistency, affordance); **S#** = 8 Golden Rules của Shneiderman; **WCAG** = tiêu chí accessibility.

## Bảng ghi kết quả (mẫu cho mỗi màn hình)

| Mã mục | P/F/NA | Notes (bắt buộc nếu Failed) | Ảnh |
| --- | --- | --- | --- |
| IA01-01 |  |  |  |
| ... |  |  |  |

---

## IA-01 — Chuẩn UI chung
*(layout, canh lề, typography, màu sắc, tính nhất quán, i18n EN/VI, empty/loading)*

| Mã | Mục kiểm tra | Nguồn |
| --- | --- | --- |
| IA01-01 | Layout căn lưới nhất quán; các khối canh lề đều, không lệch cột, không tràn viền ở màn hình chuẩn (1366px). | No5, S1 |
| IA01-02 | Khoảng cách (padding/margin) giữa các phần tử đồng nhất theo một hệ spacing chung. | No5, S1 |
| IA01-03 | Typography nhất quán: cỡ chữ, font-weight, line-height theo cấp bậc tiêu đề/thân; không trộn nhiều font ngẫu nhiên. | N4, S1 |
| IA01-04 | Bảng màu nhất quán; màu thương hiệu và màu nhấn dùng đúng vai trò, không lạm dụng. | N4, No5 |
| IA01-05 | Tương phản màu chữ/nền đạt tối thiểu WCAG AA (4.5:1 cho text thường, 3:1 cho text lớn). | WCAG, N4 |
| IA01-06 | Icon và nút cùng chức năng trông giống nhau trên mọi màn hình (consistency & standards). | N4, S1 |
| IA01-07 | Chuyển ngôn ngữ EN/VI hoạt động; mọi chuỗi được dịch, không còn text lẫn hai ngôn ngữ hay khoá dịch thô (`i18n.key`). | N2 |
| IA01-08 | Sau khi đổi sang VI, layout không vỡ do chuỗi dài hơn (nút, nhãn, tiêu đề không bị cắt/tràn). | N2, No5 |
| IA01-09 | Trạng thái **empty** có thông báo rõ ràng + gợi ý hành động (ví dụ "Chưa có sự kiện — Tạo sự kiện mới"), không chỉ là màn hình trắng. | N1, N10 |
| IA01-10 | Trạng thái **loading** có chỉ báo (skeleton/spinner); người dùng biết hệ thống đang xử lý. | N1, No2 |
| IA01-11 | Ngày giờ, số, tiền tệ hiển thị theo định dạng nhất quán và phù hợp locale (VD ngày dd/mm/yyyy). | N4, No5 |
| IA01-12 | Ảnh (thumbnail 4:3, banner 24:9) giữ đúng tỉ lệ, không méo/vỡ; có alt text cho ảnh nội dung. | WCAG, N8 |
| IA01-13 | Giao diện responsive: bố cục co giãn hợp lý ở desktop/tablet/phone, không vỡ ở breakpoint. | N8, No5 |

---

## IA-02 — Forms
*(label, validation, vị trí báo lỗi, trường bắt buộc, upload, rich-text editor)*

| Mã | Mục kiểm tra | Nguồn |
| --- | --- | --- |
| IA02-01 | Mỗi trường nhập có **label** rõ ràng, liên kết đúng với input (không dùng placeholder thay label). | N6, WCAG |
| IA02-02 | Trường bắt buộc được đánh dấu rõ (dấu `*` hoặc chữ "bắt buộc") trước khi submit. | N1, No3 |
| IA02-03 | Validation kiểm tra đúng ràng buộc (định dạng email, số, độ dài, ngày hợp lệ). | N5, No3 |
| IA02-04 | Thông báo lỗi hiển thị **sát trường lỗi**, không chỉ gộp một chỗ ở đầu/cuối form. | N1, N9 |
| IA02-05 | Nội dung lỗi rõ nghĩa, chỉ ra cách sửa (VD "Ngày kết thúc phải sau ngày bắt đầu"), không phải mã lỗi thô. | N9 |
| IA02-06 | Validation ngày/giờ: chặn ngày bắt đầu sau ngày kết thúc, chặn thời điểm trong quá khứ khi không hợp lệ. | N5, No3 |
| IA02-07 | Upload ảnh (thumbnail/banner): kiểm tra định dạng & dung lượng, báo lỗi khi sai và hiển thị preview khi đúng. | N1, N9 |
| IA02-08 | Rich-text editor hoạt động đúng: các nút định dạng (bold, list, link…) có hiệu lực và nội dung được lưu/hiển thị đúng. | N7, No6 |
| IA02-09 | Nhập liệu được giữ lại khi validation fail; không xoá trắng form buộc nhập lại. | N5, S6 |
| IA02-10 | Có xác nhận/khả năng hoàn tác khi rời form còn dở hoặc khi thao tác phá huỷ dữ liệu đã nhập. | N3, S6 |
| IA02-11 | Nút submit bị vô hiệu hoá hoặc hiện loading khi đang gửi để tránh double-submit. | N1, No2 |
| IA02-12 | Điều hướng bàn phím trong form đúng thứ tự (Tab), Enter submit hợp lý, focus thấy rõ. | WCAG, S3 |
| IA02-13 | Các công tắc cấu hình (student/lecturer/guest, Max Slots, Waitlist) có trạng thái mặc định rõ và ràng buộc hợp lệ (VD Max Slots > 0). | No3, N5 |

---

## IA-03 — Navigation
*(menu, breadcrumb, tab, sidebar, kéo-thả reorder, nút back/return, deep link)*

| Mã | Mục kiểm tra | Nguồn |
| --- | --- | --- |
| IA03-01 | Menu/sidebar hiển thị đầy đủ mục, nhãn dễ hiểu; mục đang chọn được **highlight** rõ. | N1, No1 |
| IA03-02 | Breadcrumb (nếu có) phản ánh đúng vị trí hiện tại và điều hướng ngược được. | N1, No4 |
| IA03-03 | Tab (VD Pending/Resolved, Draft/Publish) chuyển đúng nội dung; tab active phân biệt rõ. | N1, No1 |
| IA03-04 | Nút **Back/Return** đưa về đúng màn hình trước, không mất dữ liệu hoặc nhảy sai ngữ cảnh. | N3, S6 |
| IA03-05 | Kéo-thả reorder (nếu có) hoạt động mượt, có phản hồi trực quan vị trí thả và lưu đúng thứ tự. | No2, S2 |
| IA03-06 | **Deep link**: mở trực tiếp URL một sự kiện/trang cụ thể trả đúng nội dung (không bắt về trang chủ). | N7, No4 |
| IA03-07 | Điều hướng nhất quán giữa các trang: vị trí menu, header, nút hành động không đổi chỗ. | N4, S1 |
| IA03-08 | Có lối thoát rõ ràng ("emergency exit"): đóng dialog, huỷ thao tác, thoát luồng nhiều bước. | N3 |
| IA03-09 | Nút/liên kết điều hướng có affordance rõ (trông bấm được) và trạng thái hover/focus thấy được. | No6, S3 |
| IA03-10 | Phân trang / cuộn danh sách dài hoạt động đúng; giữ ngữ cảnh khi quay lại từ trang chi tiết. | N7, S2 |
| IA03-11 | Điều hướng bằng bàn phím xuyên suốt menu/tab/link; thứ tự focus logic, có skip-link nếu phù hợp. | WCAG, S3 |

---

## IA-04 — Feedback / State
*(toast, badge, dialog xác nhận, progress bar, màu trạng thái, real-time)*

| Mã | Mục kiểm tra | Nguồn |
| --- | --- | --- |
| IA04-01 | Sau mỗi hành động (lưu, xoá, publish, gán role…) có **feedback** rõ (toast/thông báo) báo thành công/thất bại. | N1, No2 |
| IA04-02 | Toast/thông báo tồn tại đủ lâu để đọc, hoặc cho đóng chủ động; không biến mất quá nhanh. | N1 |
| IA04-03 | Thao tác phá huỷ/không hồi phục (Delete, Block, Reset Password) có **dialog xác nhận** nêu rõ hậu quả. | N5, S4 |
| IA04-04 | Dialog xác nhận phân biệt rõ nút hành động chính và huỷ; nút nguy hiểm không phải mặc định dễ bấm nhầm. | N5, No3 |
| IA04-05 | **Badge** (chấm thông báo, số lượng, tab count) hiển thị đúng số liệu và cập nhật khi trạng thái đổi. | N1, No1 |
| IA04-06 | **Progress bar** (duyệt participants, export…) phản ánh đúng tiến độ thực, không đứng hình hay nhảy 0→100. | N1, No2 |
| IA04-07 | **Màu trạng thái** nhất quán và có nghĩa (VD xanh = active/resolved, đỏ = blocked/failed, vàng = pending). | N4, No5 |
| IA04-08 | Không chỉ dùng màu để truyền trạng thái — kèm text/icon để người mù màu vẫn phân biệt được. | WCAG, N4 |
| IA04-09 | Cập nhật **real-time** (log check-in, trạng thái request) phản ánh đúng và kịp thời, không cần F5 thủ công. | N1, No2 |
| IA04-10 | Thông báo lỗi hệ thống (mất mạng, timeout, 500) hiển thị thân thiện và gợi ý bước tiếp theo. | N9 |
| IA04-11 | Trạng thái sau hành động phản ánh đúng dữ liệu (VD sau Publish, sự kiện chuyển đúng trạng thái ở danh sách). | N1, No2 |

---

## Nguồn tham khảo (đính kèm khi nộp)
- Nielsen, J. *10 Usability Heuristics for User Interface Design* (N1–N10).
- Norman, D. *The Design of Everyday Things* — 6 nguyên tắc (visibility, feedback, constraints, mapping, consistency, affordance).
- Shneiderman, B. *Eight Golden Rules of Interface Design* (S1–S8).
- WCAG 2.1 (AA) — tương phản màu, alt text, điều hướng bàn phím, không phụ thuộc màu.
- Slide môn học: *GUI + Usability + Compatibility Testing (AI-First, Combined).*

## Ghi chú về các mục AI thường bỏ sót (bổ sung của nhóm)
Các mục sau thường không xuất hiện trong output AI thô và được nhóm thêm vào — nêu rõ lý do khi nộp:
- **Accessibility / WCAG** (IA01-05, IA01-12, IA02-12, IA03-11, IA04-08): AI hay tập trung vào UI "nhìn thấy được" mà bỏ qua tương phản, alt text, keyboard nav.
- **i18n EN/VI vỡ layout** (IA01-08): AI sinh mục "hỗ trợ đa ngôn ngữ" chung chung, ít bắt lỗi tràn/cắt khi chuỗi VI dài hơn — đặc thù của EMS song ngữ.
- **Không phụ thuộc màu** (IA04-08): thường bị gộp chung vào "màu trạng thái" mà không tách yêu cầu cho người mù màu.
- **Đặc thù EMS** (IA01-12 tỉ lệ 4:3/24:9, IA02-13 Max Slots/Waitlist, IA04-09 log check-in real-time): AI không biết ràng buộc riêng của EMS trừ khi được cung cấp ngữ cảnh giao diện.

