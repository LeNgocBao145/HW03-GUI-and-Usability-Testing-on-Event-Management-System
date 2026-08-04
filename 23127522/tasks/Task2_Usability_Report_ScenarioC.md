# Task 2 — Báo cáo Usability Testing (Kịch bản C — Quản trị người dùng)

- **MSSV:** 23127522
- **Màn hình kiểm thử:** C1 (Danh sách Users), C2 (Assign Role / chỉnh sửa user), C4 (Export ra Excel)

---

## Giai đoạn 1 — Thiết kế và chuẩn bị

### Kịch bản tác vụ
> "Bạn là admin của hệ thống EMS. Một tài khoản giảng viên đang có thông tin/quyền chưa đúng và phòng ban cần danh sách người dùng hiện tại để làm báo cáo.
> Hãy tìm người dùng cần xử lý, chỉnh sửa thông tin/quyền phù hợp, sau đó xuất danh sách người dùng ra file Excel."

Kịch bản này được viết theo hướng mục tiêu, không mô tả từng bước bấm, để người tham gia tự khám phá luồng thao tác trên các màn hình C1, C2 và C4.

### Bộ tác vụ trong phiên test
Các tác vụ được thiết kế ở mức đơn giản, phù hợp với người dùng không chuyên về hệ thống EMS nhưng có kinh nghiệm cơ bản với website và biểu mẫu.

| Mã | Tác vụ | Màn hình liên quan | Tiêu chí hoàn thành |
| --- | --- | --- | --- |
| T1 | Tìm một người dùng cụ thể trong danh sách Users bằng thông tin có sẵn. | C1 | Người tham gia tìm được đúng user cần xử lý trong danh sách. |
| T2 | Mở màn hình chỉnh sửa user và kiểm tra các thông tin chính như tên, email, role và trạng thái active. | C1, C2 | Người tham gia mở được modal/form chỉnh sửa và nhận biết được các trường thông tin chính. |
| T3 | Thực hiện một thay đổi đơn giản trên thông tin user theo yêu cầu của người điều phối. | C2 | Người tham gia nhập/chọn được giá trị mới và biết nút dùng để lưu thay đổi. |
| T4 | Xuất danh sách Users ra file Excel để phục vụ báo cáo. | C4 | Người tham gia bấm được chức năng Export và nhận biết file Excel đã được tải xuống. |
| T5 | Sau khi hoàn thành, mô tả lại thao tác nào rõ ràng, thao tác nào gây bối rối hoặc thiếu phản hồi. | C1, C2, C4 | Người tham gia đưa ra nhận xét về độ rõ ràng, tốc độ, khả năng phục hồi lỗi và độ tin cậy của hệ thống. |

### Chỉ số cần thu thập
| Chỉ số | Cách ghi nhận | Công cụ |
| --- | --- | --- |
| Mức độ hoàn thành tác vụ | Hoàn thành / Hoàn thành một phần / Thất bại | Quan sát |
| Thời gian thực hiện | Số giây từ lúc bắt đầu đến khi kết thúc tác vụ | Đồng hồ bấm giờ / ghi màn hình |
| Số lỗi hoặc lần do dự | Số thao tác sai, điểm dừng lâu, hoặc lúc người dùng tỏ ra bối rối | Ghi chú quan sát |
| Điểm SUS hoặc UEQ-S | Điểm đánh giá sau khi hoàn thành tác vụ | Biểu mẫu sau phiên test |

### Câu hỏi mở sau phiên test
- Người tham gia có hiểu rõ mình cần làm gì không?
- Luồng tìm và chỉnh sửa user có dễ theo dõi không?
- Khi thao tác lỗi hoặc không chắc chắn, hệ thống có giúp họ phục hồi không?
- Người tham gia có tin rằng thao tác đã thành công không?
- Phần Export ra Excel có đủ rõ ràng và đáng tin cậy không?

### Pilot
| Mục | Kết quả |
| --- | --- |
| Người tham gia pilot | P0 - bạn ngoài lớp, đã quen dùng website quản trị cơ bản |
| Vấn đề phát hiện trong wording / luồng tác vụ | Người tham gia hiểu đúng mục tiêu chính, nhưng ban đầu hơi phân vân giữa thao tác sửa user và thao tác export vì đề bài gộp hai mục tiêu trong cùng một câu. Không có tác vụ nào thất bại. |
| Điều chỉnh sau pilot | Tách lời nhắc thành 3 ý ngắn: tìm user, chỉnh role/thông tin, sau đó export danh sách. Không mô tả vị trí nút để vẫn giữ tính tự nhiên của usability test. |

---

## Giai đoạn 2 — Người tham gia

> Người tham gia phải là người thật, ngoài lớp học này. Thông tin liên hệ cần có thể xác minh được và che 4 số giữa nếu là số điện thoại/Zalo.

| # | Tên | Hồ sơ người dùng | Liên hệ đã che | Ngày thực hiện |
| --- | --- | --- | --- | --- |
| P1 | Huỳnh Tấn Đạt | Bạn bè | 091****422 | 02/08/2026 |
| P2 | Đoàn Quang Hiển | Bạn bè | 091****324 | 01/08/2026 |
| P3 | Ong Văn Tài | Người thân | 091****509 | 03/08/2026 |
| P4 | Hồng Kim Phượng | Người thân | 094****738 | 04/08/2026 |
| P5 | Trần Thị Xuân Vinh | Bạn bè | 091****767 | 04/08/2026 |

### Ghi chú quan sát từng phiên

#### P1
- Thời gian bắt đầu / kết thúc: 09:10 - 09:16, 02/08/2026
- Kết quả tác vụ (Hoàn thành / Một phần / Thất bại): Hoàn thành toàn bộ T1-T5
- Thời gian thực hiện: 338 giây
- Lỗi / lần do dự: 2 lần do dự; dừng ở nút Edit vì hover không đổi con trỏ, sau khi Save thì chờ thêm vài giây để xác nhận đã lưu.
- Điểm đau người dùng nói ra: "Sửa xong modal đóng lại nhưng không thấy thông báo thành công nên hơi không chắc."
- Điểm SUS / UEQ-S: SUS 82.5
- Trả lời câu hỏi mở (độ rõ ràng / phục hồi lỗi / tốc độ / độ tin cậy): Luồng tìm user và export dễ hiểu; tốc độ thao tác tốt; độ tin cậy bị giảm nhẹ vì thiếu toast sau khi lưu/export.

#### P2
- Thời gian bắt đầu / kết thúc: 20:05 - 20:10, 01/08/2026
- Kết quả tác vụ (Hoàn thành / Một phần / Thất bại): Hoàn thành toàn bộ T1-T5
- Thời gian thực hiện: 296 giây
- Lỗi / lần do dự: 1 lần do dự; bấm Export thành công nhưng nhìn xuống thanh download của trình duyệt để chắc file đã tải.
- Điểm đau người dùng nói ra: "Export tải được file, nhưng app không báo gì nên phải tự kiểm tra ở trình duyệt."
- Điểm SUS / UEQ-S: SUS 85
- Trả lời câu hỏi mở (độ rõ ràng / phục hồi lỗi / tốc độ / độ tin cậy): Các nhãn trường dễ hiểu, role dễ chọn; người dùng tin kết quả sau khi thấy file tải xuống, nhưng phản hồi trong app chưa đủ rõ.

#### P3
- Thời gian bắt đầu / kết thúc: 15:30 - 15:37, 03/08/2026
- Kết quả tác vụ (Hoàn thành / Một phần / Thất bại): Hoàn thành toàn bộ T1-T5
- Thời gian thực hiện: 381 giây
- Lỗi / lần do dự: 3 lần do dự; đọc lại các field bắt buộc vì form không đánh dấu dấu *, thử đóng modal rồi mở lại để kiểm tra dữ liệu đã lưu.
- Điểm đau người dùng nói ra: "Nếu trường nào bắt buộc có dấu rõ hơn thì nhập nhanh hơn."
- Điểm SUS / UEQ-S: SUS 80
- Trả lời câu hỏi mở (độ rõ ràng / phục hồi lỗi / tốc độ / độ tin cậy): Người dùng hoàn thành đúng nhưng tốn thêm thời gian ở form C2; phần export rõ chức năng nhưng thiếu xác nhận trong app.

#### P4
- Thời gian bắt đầu / kết thúc: 19:15 - 19:20, 04/08/2026
- Kết quả tác vụ (Hoàn thành / Một phần / Thất bại): Hoàn thành toàn bộ T1-T5
- Thời gian thực hiện: 312 giây
- Lỗi / lần do dự: 1 lần do dự; khi rê chuột qua các nút chính không thấy cursor pointer nên hỏi lại có bấm được không.
- Điểm đau người dùng nói ra: "Nhìn nút giống bấm được, nhưng con trỏ không đổi nên hơi lưỡng lự."
- Điểm SUS / UEQ-S: SUS 87.5
- Trả lời câu hỏi mở (độ rõ ràng / phục hồi lỗi / tốc độ / độ tin cậy): Luồng tổng thể dễ theo dõi; chức năng tìm kiếm và chỉnh sửa đáp ứng đúng; cần tăng affordance của nút.

#### P5
- Thời gian bắt đầu / kết thúc: 21:00 - 21:06, 04/08/2026
- Kết quả tác vụ (Hoàn thành / Một phần / Thất bại): Hoàn thành toàn bộ T1-T5
- Thời gian thực hiện: 344 giây
- Lỗi / lần do dự: 2 lần do dự; sau khi chỉnh thông tin user, người dùng kiểm tra lại dòng trong bảng vì không có toast xác nhận; export thành công.
- Điểm đau người dùng nói ra: "Nếu có thông báo 'đã lưu' và 'đã xuất file' thì yên tâm hơn."
- Điểm SUS / UEQ-S: SUS 82.5
- Trả lời câu hỏi mở (độ rõ ràng / phục hồi lỗi / tốc độ / độ tin cậy): Người dùng đánh giá thao tác chính dễ hiểu; tốc độ tốt; thiếu feedback sau hành động làm giảm cảm giác chắc chắn.

---

## Giai đoạn 3 — Phân tích và báo cáo

### Bảng chỉ số tổng hợp
| Người tham gia | Kết quả tác vụ | Thời gian (giây) | Số lỗi / lần do dự | SUS / UEQ-S |
| --- | --- | --- | --- | --- |
| P1 | Hoàn thành T1-T5 | 338 | 2 | SUS 82.5 |
| P2 | Hoàn thành T1-T5 | 296 | 1 | SUS 85 |
| P3 | Hoàn thành T1-T5 | 381 | 3 | SUS 80 |
| P4 | Hoàn thành T1-T5 | 312 | 1 | SUS 87.5 |
| P5 | Hoàn thành T1-T5 | 344 | 2 | SUS 82.5 |
| **Trung bình** | **100% hoàn thành** | **334.2** | **1.8** | **SUS 83.5** |

### Phát hiện usability đã xếp hạng
> Thang mức độ nghiêm trọng: 0 = không phải vấn đề · 1 = thẩm mỹ/nhỏ · 2 = minor · 3 = major · 4 = nghiêm trọng.

| # | Phát hiện | Màn hình | Mức độ | Bằng chứng / ảnh chụp | Có tính hệ thống? |
| --- | --- | --- | --- | --- | --- |
| F1 | Thiếu feedback/toast sau thao tác lưu user và export khiến người dùng đã hoàn thành nhưng vẫn phải tự kiểm tra lại kết quả. | C1, C2, C4 | 2 | Đối chiếu Task 1: IA04-01 failed ở C1/C2/C4; ảnh/ghi chú trong `Bug_Usability_Findings_Log.md`. | Có |
| F2 | Nút chính thiếu affordance hover/cursor pointer, làm người dùng do dự trước khi bấm dù thao tác vẫn thành công. | C1, C2, C4 | 1 | Đối chiếu Task 1: IA03-09 failed ở C1/C2/C4. | Có |
| F3 | Form chỉnh sửa user thiếu dấu hiệu trường bắt buộc và thiếu xác nhận khi đóng form đang sửa, làm người dùng mất thêm thời gian kiểm tra. | C2 | 2 | Đối chiếu Task 1: IA02-02 và IA02-10 failed ở C2; ảnh `../bugs/C02_IA02-02.png`, `../bugs/C02_IA02-10-EXIT.png`. | Không |

### Khuyến nghị ưu tiên
1. Thêm toast hoặc thông báo trạng thái sau các thao tác Save, Add User và Export; nội dung nên nêu rõ hành động đã thành công và có thể tự đóng.
2. Chuẩn hóa affordance cho tất cả nút/link có thể bấm: thêm `cursor: pointer`, trạng thái hover/focus rõ, và giữ nhất quán giữa C1, C2, C4.
3. Cải thiện form C2: đánh dấu trường bắt buộc, cảnh báo khi đóng modal có thay đổi chưa lưu, và giữ focus trong modal để giảm rủi ro thao tác nhầm.

### Ghi chú nộp lỗi
Mọi lỗi bug/usability thật phát hiện thêm trong Task 2 cần được nộp qua Google Form và cập nhật vào `Bug_Usability_Findings_Log.md`. Nếu Task 2 chỉ xác nhận lại các lỗi đã ghi từ Task 1, có thể dùng các lỗi đó làm bằng chứng trong báo cáo mà không cần tạo ID mới.

