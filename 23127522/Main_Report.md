# Main Report — HW04 GUI & Usability Testing on EMS

**Student:** Ong Khánh Vinh  
**MSSV:** 23127522  
**Class:** 23KTPM1  
**Scenario:** C — Admin quản lý người dùng  
**Screens:** C1 (Danh sách Users), C2 (Assign Role / chỉnh sửa user), C4 (Export ra Excel)  
**EMS URL:** https://promoter-starboard-prude.ngrok-free.dev/

---

## 1. Scope

Bài làm kiểm thử giao diện và usability cho nhóm chức năng **Pool C — Quản trị người dùng**. Ba màn hình/luồng được chọn:

| Màn hình | Nội dung kiểm thử | Lý do chọn |
| --- | --- | --- |
| C1 | Danh sách Users, search/filter, bảng dữ liệu, thao tác Add/Edit/Delete/Export | Điểm vào chính của admin, mật độ UI cao |
| C2 | Modal Assign Role / chỉnh sửa user | Luồng form quan trọng, có validation và thao tác lưu |
| C4 | Export danh sách Users ra Excel | Luồng action-flow cần kiểm phản hồi UI và tính đúng dữ liệu file |

---

## 2. Task 1 — GUI Checklist

Checklist dùng chung gồm **50 mục** phủ IA-01 đến IA-04:

| IA | Nội dung | Số mục |
| --- | --- | ---: |
| IA-01 | Chuẩn UI chung | 15 |
| IA-02 | Forms | 13 |
| IA-03 | Navigation | 11 |
| IA-04 | Feedback / state | 11 |

Kết quả chạy checklist:

| Màn hình | Số mục chạy | Passed | Failed | N/A |
| --- | ---: | ---: | ---: | ---: |
| C1 | 50 | 31 | 4 | 15 |
| C2 | 50 | 22 | 7 | 21 |
| C4 | 50 | 6 | 4 | 40 |
| **Tổng** | **150** | **59** | **15** | **76** |

Chi tiết: `tasks/Task1B_Checklist_Run_ScenarioC.md`

---

## 3. Task 2 — Usability Testing

Task 2 dùng kịch bản mục tiêu: admin tìm user, chỉnh thông tin/quyền, sau đó export danh sách người dùng ra Excel.

| Chỉ số | Kết quả |
| --- | --- |
| Số người tham gia | 5 |
| Tỉ lệ hoàn thành | 100% hoàn thành T1-T5 |
| Thời gian trung bình | 334.2 giây |
| Số lỗi/lần do dự trung bình | 1.8 |
| SUS trung bình | 83.5 |

Findings usability chính:

| ID | Phát hiện | Mức độ |
| --- | --- | ---: |
| F1 | Thiếu feedback/toast sau Save/Export khiến người dùng phải tự kiểm tra kết quả | 2 |
| F2 | Nút chính thiếu affordance hover/cursor pointer | 1 |
| F3 | Form C2 thiếu dấu hiệu required và xác nhận khi đóng form đang sửa | 2 |

Chi tiết: `tasks/Task2_Usability_Report_ScenarioC.md`

---

## 4. Task 3 — Cross-Browser / Cross-Platform

Đã kiểm thử **15 ô** trên 3 màn hình, toàn bộ kết quả ghi nhận là **Pass**.

| Màn hình | Số ô | Kết quả |
| --- | ---: | --- |
| C1 | 5 | Pass 5/5 |
| C2 | 5 | Pass 5/5 |
| C4 | 5 | Pass 5/5 |
| **Tổng** | **15** | **Pass 15/15** |

Môi trường đã dùng gồm Windows, macOS, iOS/iPhone với Chrome, Safari, Brave và Edge theo ảnh bằng chứng trong `cross_platform/`.

Chi tiết: `tasks/Task3_CrossPlatform_Matrix_ScenarioC.md`

---

## 5. Bug & Usability Findings

Tổng cộng ghi nhận **13 findings**:

| Nhóm | Số lượng |
| --- | ---: |
| C1 | 3 |
| C2 | 8 |
| C4 | 3 |
| **Tổng** | **13** |

Một số lỗi nổi bật:

- Avatar bị bóp méo khi tên/nội dung user quá dài.
- Thiếu `cursor: pointer` trên nhiều nút chính.
- Không có toast sau tạo/sửa/export.
- C2 thiếu marker trường bắt buộc và thiếu xác nhận khi đóng form đang sửa.
- C2 thiếu focus trap trong modal.
- Export không chống double-submit và thiếu phản hồi khi lỗi mạng.

Chi tiết: `tasks/Bug_Usability_Findings_Log.md`

---

## 6. AI Usage & Agent Skill

AI được dùng để hỗ trợ tạo checklist, tạo script kiểm thử bán tự động, chuẩn hóa báo cáo, rà soát folder và tạo AI Audit Report. Kết quả kiểm thử vẫn dựa trên quan sát và ảnh bằng chứng thật.

Agent Skill: `skills/gui-checklist/`  
Self-assessment Agent Skill: **5/10** vì có skill và script hỗ trợ, nhưng không có demo video.

AI audit:

- `appendix/AI Audit Report.md`
- `appendix/AI Audit Report.pdf`
- `appendix/AI Critique.md`
- `appendix/AI Critique.pdf`
- `appendix/prompt_logs.md`

---

## 7. Evidence Files

| Loại bằng chứng | Thư mục |
| --- | --- |
| Ảnh màn hình chính | `screenshots/` |
| Ảnh bug/usability | `bugs/` |
| Ảnh cross-platform | `cross_platform/` |
| Agent Skill | `skills/gui-checklist/` |
| Git commit log | `appendix/Git Commit Log.txt` |

---

## 8. Self-Assessment

| Criterion | Points | Self |
| --- | ---: | ---: |
| Task 1A | 15 | 15 |
| Task 1B | 15 | 15 |
| Task 2 | 25 | 25 |
| Task 3 | 25 | 25 |
| Bug & Usability Findings | 10 | 10 |
| Agent Skill | 10 | 5 |
| **Total** | **100** | **95** |
