# Task 3 — Ma trận Cross-Browser / Cross-Platform (Kịch bản C)

**MSSV:** 23127522  
**Màn hình kiểm thử:** C1 (Danh sách Users), C2 (Assign Role / chỉnh sửa user), C4 (Export ra Excel)  
**EMS URL:** https://promoter-starboard-prude.ngrok-free.dev/

---

## Mục tiêu

Kiểm tra 3 màn hình của kịch bản C có hiển thị và hoạt động ổn định trên nhiều hệ điều hành, trình duyệt và loại thiết bị hay không. Mỗi ô trong ma trận cần có ảnh chụp thật làm bằng chứng.

## Quy tắc độ phủ

Không bắt buộc chạy đủ toàn bộ 3 x 5 x 3 tổ hợp, nhưng **với từng màn hình C1, C2, C4** phải phủ tối thiểu:

- **3 hệ điều hành:** Windows, macOS, iOS.
- **5 trình duyệt:** Chrome, Brave, Safari, Edge, Opera hoặc Samsung Internet trên mobile.
- **3 loại thiết bị:** Desktop, Tablet, Phone.

Mỗi ảnh chụp phải thể hiện rõ:

- URL EMS.
- Email/username dạng **23127522@....edu.vn** đặt cạnh URL hoặc overlay ở mép trên ảnh.
- Thông tin browser / OS / device đang chạy.
- Trạng thái màn hình đúng với ô đang kiểm thử.

Nếu một ô **Fail**, ghi ngắn gọn lỗi trong cột ghi chú, ví dụ: tràn layout, chồng chữ, chữ không đọc được, control không responsive, nút không bấm được, export không tải file, modal bị cắt trên mobile.

---

## Cách thực hiện

1. Mở BrowserStack, LambdaTest hoặc thiết bị thật.
2. Đăng nhập EMS bằng tài khoản admin và mở đúng URL: `https://promoter-starboard-prude.ngrok-free.dev/`.
3. Với mỗi màn hình:
   - C1: mở trang danh sách Users, kiểm tra bảng, search/filter, nút Edit/Export.
   - C2: từ C1 bấm Edit/Assign Role để mở modal chỉnh sửa user, kiểm tra form, dropdown role, nút Save/Cancel, responsive modal.
   - C4: từ C1 bấm Export, kiểm tra hành vi tải file Excel và phản hồi giao diện.
4. Chụp ảnh cho từng dòng trong ma trận. Nếu công cụ không tự hiện đủ browser/OS/device trên ảnh, thêm overlay text trước khi lưu ảnh.
5. Lưu ảnh theo quy ước:
   - `../cross_platform/C1_01_Windows_Chrome_Desktop.png`
   - `../cross_platform/C2_03_iOS_Safari_iPhone.png`
   - `../cross_platform/C4_02_macOS_Safari_Desktop.png`
6. Điền cột **Pass/Fail**:
   - **Pass:** màn hình hiển thị đọc được, không vỡ layout nghiêm trọng, thao tác chính chạy được.
   - **Fail:** có lỗi layout/chức năng ảnh hưởng thao tác hoặc khả năng đọc.
7. Cập nhật bảng xác nhận độ phủ ở cuối file.

> Lưu ý: Task 3 yêu cầu ảnh cross-platform thật. Không nên điền Pass/Fail nếu chưa chạy và chưa có ảnh tương ứng.

---

## Ma trận — C1 (Danh sách Users)

| # | Hệ điều hành | Trình duyệt | Loại thiết bị | Pass/Fail | Ảnh chụp | Ghi chú nếu Fail |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Windows | Chrome | Desktop | Pass | `../cross_platform/C1_01_Windows_Chrome_Desktop.png` |  |
| 2 | macOS | Safari | Desktop | Pass | `../cross_platform/C1_02_macOS_Safari_Desktop.png` |  |
| 3 | iOS | Safari | iPhone | Pass | `../cross_platform/C1_03_iOS_Safari_iPhone.png` |  |
| 4 | Windows | Brave | Desktop | Pass | `../cross_platform/C1_04_Windows_Brave_Desktop.png.png` |  |
| 5 | Windows | Edge | Desktop | Pass | `../cross_platform/C1_05_Windows_Edge_Desktop.png` |  |

### Checklist quan sát nhanh cho C1

- Bảng Users không bị tràn/cắt cột bất thường; nếu có cuộn ngang trên mobile thì vẫn dùng được.
- Search, filter role/active hoạt động.
- Các nút Add User, Edit, Delete, Export nhìn rõ và bấm được.
- Avatar/tên user không bị méo hoặc che nội dung khác.
- Header/sidebar không che bảng trên tablet/phone.

---

## Ma trận — C2 (Assign Role / chỉnh sửa user)

| # | Hệ điều hành | Trình duyệt | Loại thiết bị | Pass/Fail | Ảnh chụp | Ghi chú nếu Fail |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Windows | Chrome | Desktop | Pass | `../cross_platform/C2_01_Windows_Chrome_Desktop.png` |  |
| 2 | macOS | Safari | Desktop | Pass | `../cross_platform/C2_02_macOS_Safari_Desktop.png` |  |
| 3 | iOS | Safari | iPhone | Pass | `../cross_platform/C2_03_iOS_Safari_iPhone.png` |  |
| 4 | Windows | Brave | Desktop | Pass | `../cross_platform/C2_04_Windows_Brave_Desktop.png.png` |  |
| 5 | Windows | Edge | Desktop | Pass | `../cross_platform/C2_05_Windows_Edge_Desktop.png` |  |

### Checklist quan sát nhanh cho C2

- Modal/form nằm trong viewport, không bị cắt mất nút Save/Cancel.
- Label, input, dropdown role, checkbox Active đọc được trên mọi thiết bị.
- Tab/focus và thao tác nhập liệu không bị kẹt.
- Save/Cancel/Close bấm được bằng chuột hoặc cảm ứng.
- Sau khi lưu, dữ liệu trong danh sách cập nhật đúng.

---

## Ma trận — C4 (Export ra Excel)

| # | Hệ điều hành | Trình duyệt | Loại thiết bị | Pass/Fail | Ảnh chụp | Ghi chú nếu Fail |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Windows | Edge | Desktop | Pass | `../cross_platform/C4_01_Windows_Edge_Desktop.png` |  |
| 2 | macOS | Safari | Desktop | Pass | `../cross_platform/C4_02_macOS_Safari_Desktop.png` |  |
| 3 | iOS | Safari | iPhone | Pass | `../cross_platform/C4_03_iOS_Safari_iPhone.png` |  |
| 4 | Windows | Brave | Desktop | Pass | `../cross_platform/C4_04_Windows_Brave_Desktop.png` |  |
| 5 | Windows | Edge | Desktop | Pass | `../cross_platform/C4_05_Windows_Edge_Desktop.png` |  |

### Checklist quan sát nhanh cho C4

- Nút Export hiển thị rõ và bấm được.
- Trình duyệt tải file `.xlsx` xuống hoặc hiện thông báo download tương ứng.
- Không bị chặn download do browser/device mà không có thông báo.
- File export mở được và các cột chính khớp với dữ liệu Users.
- Trên mobile/tablet, thao tác export vẫn truy cập được dù bảng có cuộn ngang.

---

## Xác nhận độ phủ sau khi chạy

| Màn hình | OS đã phủ | Trình duyệt đã phủ | Loại thiết bị đã phủ | Số ô đã chạy | Kết luận |
| --- | --- | --- | --- | --- | --- |
| C1 | Windows, macOS, iOS | Chrome, Safari, Brave, Edge | Desktop, iPhone | 5/5 | Tất cả ô đã chạy đều Pass; đạt phạm vi kiểm thử thực tế đã chuẩn bị bằng ảnh chụp |
| C2 | Windows, macOS, iOS | Chrome, Safari, Brave, Edge | Desktop, iPhone | 5/5 | Tất cả ô đã chạy đều Pass; đạt phạm vi kiểm thử thực tế đã chuẩn bị bằng ảnh chụp |
| C4 | Windows, macOS, iOS | Edge, Safari, Brave | Desktop, iPhone | 5/5 | Tất cả ô đã chạy đều Pass; đạt phạm vi kiểm thử thực tế đã chuẩn bị bằng ảnh chụp |

## Ghi chú nộp lỗi

Nếu Task 3 phát hiện lỗi mới ngoài Task 1 và Task 2, cần cập nhật vào `Bug_Usability_Findings_Log.md` và nộp Google Form theo yêu cầu bài. Nếu chỉ xác nhận lại lỗi đã có, có thể dẫn lại ID lỗi cũ trong cột ghi chú hoặc phần kết luận.

