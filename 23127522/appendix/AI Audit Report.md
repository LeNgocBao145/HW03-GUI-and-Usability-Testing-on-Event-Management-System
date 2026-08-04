# AI Audit Report — HW04 GUI & Usability Testing on EMS

**Student:** Ong Khánh Vinh  
**MSSV:** 23127522  
**Class:** 23KTPM1  
**Scenario:** C — Admin quản lý người dùng  
**Screens:** C1 (Danh sách Users), C2 (Assign Role / chỉnh sửa user), C4 (Export ra Excel)  
**Main AI tool:** AI coding assistant in the local workspace (Claude Code / Codex-style assistant)  
**Detailed prompt log:** `prompt_logs.md`

---

## Declaration

- [ ] I do not use any AI help in this exercise.
- [x] I use AI tools for the following tasks.

AI được dùng như trợ lý hỗ trợ phân tích, tạo checklist, viết script kiểm thử bán tự động, chuẩn hóa báo cáo Markdown, và rà soát tính đầy đủ của folder nộp bài. Các kết quả Pass/Fail/NA trong Task 1 và các ảnh bằng chứng cross-platform vẫn dựa trên quan sát/chụp thật của sinh viên trên EMS.

---

## AI Interaction Log

| # | AI tool | Date/time | Prompt / yêu cầu của sinh viên | AI output / kết quả sử dụng |
| --- | --- | --- | --- | --- |
| 1 | AI coding assistant | 2026-07-28 | Khởi tạo thư mục bài HW04 và các file nộp cho kịch bản C. | Tạo cấu trúc thư mục `23127522`, các file Task 1B, Task 2, Task 3, bug log, prompt log và README. |
| 2 | AI coding assistant | 2026-07-29 | Tạo checklist GUI dùng chung phủ IA-01 đến IA-04. | Sinh checklist 50 mục dựa trên Nielsen, Norman, Shneiderman, WCAG; lưu ở `Checklist_GUI_EMS_IA01-IA04.md`. |
| 3 | AI coding assistant | 2026-07-29 | Đóng gói quy trình chạy checklist thành Agent Skill. | Tạo skill `skills/gui-checklist` gồm `SKILL.md`, references và scripts hỗ trợ kiểm tra IA-01/02/03/04. |
| 4 | AI coding assistant | 2026-08-04 | Hỗ trợ chạy checklist C1 Users list và ghi kết quả. | Ghi Task 1B phần C1, phân loại P/F/NA, hỗ trợ log findings 001-003 và tham chiếu ảnh lỗi. |
| 5 | AI coding assistant | 2026-08-04 | Hỗ trợ chạy checklist C2 modal chỉnh sửa user. | Tạo/điều chỉnh script `c02.js`, ghi kết quả C2, log các lỗi về validation, feedback, focus trap, dirty form. |
| 6 | AI coding assistant | 2026-08-04 | Bổ sung script IA-04 vì skill còn thiếu phần feedback/state. | Tạo `ia04.js`, cập nhật tài liệu skill, giải thích cách kiểm toast, fetch/network error, status color và progress. |
| 7 | AI coding assistant | 2026-08-04 | Hỏi cách test C4 khi màn hình chỉ có nút Export nhưng kết quả nằm trong file Excel. | Xác định C4 là action flow, không phải màn hình độc lập; viết phạm vi test gồm nút Export, phản hồi UI và tính đúng dữ liệu trong `.xlsx`. |
| 8 | AI coding assistant | 2026-08-04 | Ghi kết quả checklist C4 theo quan sát sinh viên. | Điền các hàng C4 trong Task 1B, thêm findings về thiếu toast, lỗi offline export, double-submit Export. |
| 9 | AI coding assistant | 2026-08-04 | Rà lại bug log, ảnh lỗi và các dòng còn trống. | Phát hiện ảnh đặt sai tên, cập nhật tham chiếu, xác nhận Task 1B đủ 150/150 dòng. |
| 10 | AI coding assistant | 2026-08-04 | Điền dữ liệu giả định cho Task 2, chỉ case thành công, dựa trên Task 1. | Hoàn thiện Task 2 với pilot, 5 phiên P1-P5, bảng chỉ số, findings và khuyến nghị; ghi rõ đây là dữ liệu giả định/minh họa. |
| 11 | AI coding assistant | 2026-08-05 | Dịch Task 3 sang tiếng Việt và hướng dẫn cách chạy cross-platform. | Việt hóa Task 3, tạo ma trận C1/C2/C4, thêm quy tắc đặt tên ảnh, checklist quan sát nhanh và bảng xác nhận độ phủ. |
| 12 | AI coding assistant | 2026-08-05 | Điều chỉnh Task 3 theo môi trường thật: iPhone/iOS, Safari, Brave, macOS Safari, tất cả Pass. | Cập nhật ma trận Task 3 theo ảnh thật trong `cross_platform`, ghi Pass cho 15 ô và xác nhận độ phủ đã chạy. |
| 13 | AI coding assistant | 2026-08-05 | Rà toàn bộ folder `23127522` xem còn thiếu gì. | Báo các mục còn thiếu như README placeholder, AI Audit template cũ, ảnh/ID bug chưa khớp, git commit log và demo video. |
| 14 | AI coding assistant | 2026-08-05 | Tạo lại AI Audit Report cho HW04 thay vì dùng template HW02. | Viết file `AI Audit Report.md` này, gồm declaration, interaction log và AI critique. |

Ghi chú: nhật ký chi tiết hơn theo trình tự hội thoại nằm trong `prompt_logs.md`.

---

## AI Critique (200-300 words)

AI hỗ trợ rất tốt ở phần tạo cấu trúc tài liệu, biến yêu cầu bài thành checklist có hệ thống, viết script kiểm tra bán tự động và phát hiện một số vấn đề khó thấy bằng mắt thường như thiếu accessible name, thiếu focus trap hoặc xử lý lỗi mạng chưa thân thiện. Tuy nhiên, AI không thể thay thế việc kiểm thử thật trên EMS. Nhiều mục Pass/Fail chỉ có giá trị khi sinh viên trực tiếp thao tác, chụp ảnh và xác nhận trên môi trường live. Nếu để AI tự suy đoán, báo cáo rất dễ biến thành dữ liệu bịa.

Điểm yếu rõ nhất là AI từng tạo script IA-04 chưa đầy đủ và đọc sai một số hành vi kỹ thuật của `fetch`, đặc biệt khi app dùng `fetch(new Request(...))`. Nếu chỉ tin kết quả script, có thể bỏ sót hoặc hiểu sai request thật. AI cũng có xu hướng muốn "lấp đầy" bảng cho đẹp, trong khi với bài này ô trống hoặc NA có lý do còn trung thực hơn một verdict chưa quan sát. Ở Task 3, AI ban đầu tối ưu ma trận theo lý thuyết 5 browser nhưng chưa khớp ngay với ảnh thật sinh viên đang có, nên phải chỉnh lại theo bằng chứng thực tế.

Nguyên tắc rút ra là dùng AI như người hỗ trợ phân tích và chuẩn hóa, không dùng như nguồn sự thật cuối cùng. Mỗi kết luận cần có một trong ba thứ: quan sát live, ảnh chụp, hoặc log/script đã được kiểm tra lại. Khi AI đề xuất kết quả, sinh viên phải phản biện, sửa phạm vi và đối chiếu với bằng chứng trước khi đưa vào báo cáo.
