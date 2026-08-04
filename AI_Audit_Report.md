<center>

# Faculty of Information Technology (FIT) – Ho Chi Minh City University of Science (HCMUS)

# CS423 / CSC15003 – Software Testing (AI-augmented · 2026)

</center>

# AI Audit Report

## Student Information

| Field | Value |
| --- | --- |
| Student name: | LÊ ĐỨC NGỌC BẢO |
| Student ID: | 23127155 |
| Class / Cohort: | Software Testing - 23KTPM1 |
| Assignment ID: | HW#03 |
| Assignment date: | Wednesday, August 05th, 2026 |
| AI tool(s) used: | Gemini, Claude |
| AI tool(s) used: | [ X ] Yes  [ ] No |

## General Prompt to retrieve logs

```prompt
từ giờ trở đi nếu tôi dùng command prompt-log bạn sẽ phải tổng hợp toàn bộ lịch sử cuộc trò chuyện của chúng ta tính từ sau command prompt-log gần nhất theo các thông tin sau

Name of the AI tool (mặc định Gemini)
Date and time
My prompt
The AI output

bỏ vào file markdown để tôi copy
```

### Interaction 1
* **Name of the AI tool**: Gemini
* **Date and time**: 2026-08-03 19:15
* **My prompt**: 
> Nielsen, J. 10 Usability Heuristics for User Interface Design.
>  Norman, D. The Design of Everyday Things (6 nguyên tắc).
>  Shneiderman, B. Eight Golden Rules of Interface Design.
> 
> Các mối quan tâm về giao diện được tổ chức thành bốn interface aspect (IA) — dùng làm chiều phủ (coverage) của checklist dùng chung:
>  IA-01: Chuẩn UI chung (layout, canh lề, typography, màu sắc, tính nhất quán, i18n EN/VI, trạng thái empty/loading).
>  IA-02: Forms (label, validation, vị trí báo lỗi, xử lý trường bắt buộc, upload, rich-text editor).
>  IA-03: Navigation (menu, breadcrumb, tab, sidebar, kéo-thả reorder, nút back/return, deep link).
>  IA-04: Feedback / state (toast, badge, dialog xác nhận, progress bar, màu trạng thái, cập nhật real-time).
> 
> Hãy kham khảo file pdf, các qui tắc và IA trên để tạo cho tôi GUI Checklist dùng file excel có ô checkbox để tick. Lưu ý nếu bạn kham khảo từ nguồn nào thì hãy list chúng ra mục Reference và dẫn link đến nguồn đó cho tôi
* **The AI output**: 
> Dưới đây là **GUI Usability Checklist** được thiết kế bài bản theo đúng 4 nhóm tiêu chí (Interface Aspects - IA) và đối chiếu trực tiếp với các nguyên tắc Usability kinh điển của Jakob Nielsen, Don Norman và Ben Shneiderman.
> 
> Bạn có thể copy trực tiếp bảng Markdown dưới đây dán thẳng vào **Microsoft Excel** hoặc **Google Sheets**:
> 
> ### Bảng GUI Usability Checklist
> 
> | Mã ID | Interface Aspect (IA) | Hạng mục kiểm thử (Checklist Item) | Nguyên tắc Usability liên quan | Check [x] | Trạng thái (Pass / Fail / N/A) | Ghi chú / Bằng chứng lỗi (Evidence) |
> | :--- | :--- | :--- | :--- | :---: | :---: | :--- |
> | **IA-01.01** | IA-01: Chuẩn UI chung | Layout & canh lề nhất quán trên toàn bộ màn hình (Grid alignment, padding, margin đồng đều). | Nielsen #4, Norman (Consistency), Shneiderman #1 | [ ] | Pass | |
> | **IA-01.02** | IA-01: Chuẩn UI chung | Phân cấp font chữ (Typography hierarchy) rõ ràng giữa Heading (H1, H2, H3), Body text và Caption. | Nielsen #8 (Aesthetic & Minimalist) | [ ] | Pass | |
> | **IA-01.03** | IA-01: Chuẩn UI chung | Độ tương phản màu sắc (Color contrast) giữa chữ và nền đạt chuẩn đọc dễ dàng (WCAG AA). | Norman (Visibility), Shneiderman #2 | [ ] | Pass | |
> | **IA-01.04** | IA-01: Chuẩn UI chung | Hỗ trợ đa ngôn ngữ (i18n EN/VI) mượt mà, không bị vỡ layout hoặc tràn chữ khi chuyển ngôn ngữ. | Shneiderman #2 (Universal Usability) | [ ] | Pass | |
> | **IA-01.05** | IA-01: Chuẩn UI chung | Hiển thị giao diện Empty State thân thiện khi danh sách/bảng không có dữ liệu. | Nielsen #1, Nielsen #6 | [ ] | Pass | |
> | **IA-01.06** | IA-01: Chuẩn UI chung | Hiển thị Loading State (Skeleton Screen hoặc Spinner) khi đang tải dữ liệu. | Nielsen #1 (Visibility of status), Norman (Feedback) | [ ] | Pass | |
> | **IA-02.01** | IA-02: Forms | Label của ô nhập liệu đặt rõ ràng, nằm trên hoặc kế bên ô input, không biến mất khi gõ. | Nielsen #6 (Recognition), Norman (Affordance) | [ ] | Pass | |
> | **IA-02.02** | IA-02: Forms | Đánh dấu rõ ràng trường bắt buộc (Required field) bằng dấu `*` màu đỏ hoặc nhãn trực quan. | Nielsen #5 (Error prevention), Norman (Constraints) | [ ] | Pass | |
> | **IA-02.03** | IA-02: Forms | Validation lỗi diễn ra theo thời gian thực (Inline validation) hoặc ngay dưới ô nhập liệu. | Nielsen #9 (Recover from errors), Shneiderman #5 | [ ] | Pass | |
> | **IA-02.04** | IA-02: Forms | Khu vực Upload file hiển thị rõ định dạng cho phép, dung lượng tối đa và tiến trình tải lên. | Nielsen #1, Nielsen #5 | [ ] | Pass | |
> | **IA-02.05** | IA-02: Forms | Rich-text editor hỗ trợ các công cụ định dạng cơ bản và preview kết quả chính xác. | Nielsen #2 (Match between system & real world) | [ ] | Pass | |
> | **IA-03.01** | IA-03: Navigation | Thanh menu/sidebar làm nổi bật mục hiện tại (Active state) để người dùng biết mình đang ở đâu. | Nielsen #1, Norman (Visibility) | [ ] | Pass | |
> | **IA-03.02** | IA-03: Navigation | Breadcrumbs hiển thị đúng đường dẫn phân cấp và cho phép nhấp chuyển nhanh về trang cha. | Nielsen #3 (User control & freedom), Shneiderman #3 | [ ] | Pass | |
> | **IA-03.03** | IA-03: Navigation | Nút Quay lại (Back/Return) hoạt động nhất quán, không làm mất dữ liệu form dở dang mà không cảnh báo. | Nielsen #3, Shneiderman #6 (Easy reversal of actions) | [ ] | Pass | |
> | **IA-03.04** | IA-03: Navigation | Hỗ trợ Deep Linking (mỗi trang/trạng thái có URL riêng biệt có thể lưu bookmark hoặc chia sẻ). | Nielsen #4 (Consistency & standards) | [ ] | Pass | |
> | **IA-04.01** | IA-04: Feedback / state | Thông báo Toast/Alert xuất hiện khi thao tác thành công hoặc thất bại, tự ẩn sau khoảng thời gian hợp lý. | Nielsen #1 (Visibility of system status), Norman (Feedback) | [ ] | Pass | |
> | **IA-04.02** | IA-04: Feedback / state | Dialog xác nhận (Confirmation modal) xuất hiện trước các hành động nguy hiểm (Xóa, Hủy tác vụ). | Nielsen #5 (Error prevention), Shneiderman #6 | [ ] | Pass | |
> | **IA-04.03** | IA-04: Feedback / state | Màu sắc trạng thái (Status colors) dùng đúng quy chuẩn: Đỏ (Rejected/Error), Vàng (Pending), Xanh (Approved/Success). | Nielsen #2, Norman (Mapping) | [ ] | Pass | |
> 
> ---
> 
> ### 📚 References (Tài liệu tham khảo)
> 1. **Nielsen, J.** (1994). *10 Usability Heuristics for User Interface Design*. Nielsen Norman Group. [https://www.nngroup.com/articles/ten-usability-heuristics/](https://www.nngroup.com/articles/ten-usability-heuristics/)
> 2. **Norman, D.** (2013). *The Design of Everyday Things: Revised and Expanded Edition*. Basic Books. [https://jnd.org/the-design-of-everyday-things-revised-and-expanded-edition/](https://jnd.org/the-design-of-everyday-things-revised-and-expanded-edition/)
> 3. **Shneiderman, B., et al.** (2016). *Designing the User Interface: Strategies for Effective Human-Computer Interaction (6th Edition)*. Pearson. [https://www.cs.umd.edu/hcil/designing-user-interface/](https://www.cs.umd.edu/hcil/designing-user-interface/)

---

### Interaction 2
* **Name of the AI tool**: Gemini
* **Date and time**: 2026-08-03 19:30
* **My prompt**: 
> sao không có linux
* **The AI output**: 
> Việc không xuất hiện hoặc ít thấy tùy chọn **Linux** trên LambdaTest (cũng như trong gợi ý của đề bài) xuất phát từ 2 nguyên nhân chính:
> 
> ---
> 
> ### 1. Về phía Đề bài (Assignment Requirement)
> Đề bài chỉ yêu cầu bạn phủ đủ **3 Hệ điều hành (3 Operating Systems)**. 
> * Đề bài đã gợi ý sẵn 3 OS phổ biến nhất: **Windows**, **macOS**, và **Android** (hoặc **iOS**).
> * Bạn chỉ cần chọn đúng 3 OS này (1 Desktop Win + 1 Desktop Mac + 1 Mobile Android/iOS) là đã **đạt trọn vẹn 100% tiêu chí về OS** của Task 3 rồi.
> 
> ---
> 
> ### 2. Về phía LambdaTest / BrowserStack (Thị phần & Rendering Engine)
> * **Thị phần người dùng cuối (Market Share):** Hơn 98% người dùng web phổ thông dùng Windows, macOS, iOS và Android. Linux chủ yếu dành cho Server/Developer nên các nền tảng Cloud Testing không ưu tiên đưa Linux Desktop vào giao diện Real-Time Web Testing.
> * **Cơ chế dựng hình (Rendering Engine):** Trình duyệt Chrome/Firefox trên Linux về bản chất sử dụng chung Engine dựng hình (Blink/Gecko) với Windows và macOS. Do đó, các lỗi vỡ khung (layout bug) rất hiếm khi xảy ra riêng trên Linux mà lại không bị trên Windows/macOS. 
> 
> ---
> 
> ### 💡 Lời khuyên cho bạn:
> Bạn **không cần tìm hay bổ sung Linux** vào ma trận nữa. Chỉ cần chọn đúng bộ 3 OS tiêu chuẩn dưới đây là đủ điểm tối đa phần OS:
> 
> 1. **Windows** (ví dụ: Windows 11)
> 2. **macOS** (ví dụ: macOS Sonoma / Ventura)
> 3. **Android** hoặc **iOS** (trên máy thật hoặc máy ảo Mobile)

---

### Interaction 3
* **Name of the AI tool**: Gemini
* **Date and time**: 2026-08-03 19:40
* **My prompt**: 
> sao test virtual mobile phải upload app tôi chỉ có url web thôi mà
* **The AI output**: 
> Do bạn đang bấm lầm vào phân mục **App Testing** (dùng để test ứng dụng di động cài file `.apk` hoặc `.ipa`) nên hệ thống mới đòi upload app!
> 
> Để test trang web (chỉ có URL), bạn chỉ cần chuyển sang đúng phân mục **Web Testing** theo các bước đơn giản sau:
> 
> ---
> 
> ## 1. Nếu bạn dùng Máy ảo (Virtual Mobile / Emulator)
> 
> 1. Ở menu bên trái, chọn **Real-Time Testing** $\rightarrow$ **Browser Testing**.
> 2. Nhìn lên thanh chọn ở giữa màn hình, bấm sang tab **Mobile** *(thay vì tab Desktop)*.
> 3. Chọn hệ điều hành: **ANDROID** hoặc **iOS**.
> 4. Chọn thiết bị (ví dụ: *iPhone 14 / Samsung Galaxy S22*) và trình duyệt (*Safari / Chrome*).
> 5. Nhập URL trang web EMS của bạn vào ô **Enter URL** ở cột bên phải.
> 6. Bấm **Start**.
> 
> ---
> 
> ## 2. Nếu bạn dùng Máy thật (Real Device Mobile - Khuyên dùng cho Task 3)
> 
> 1. Ở menu bên trái, chọn **Real Device** $\rightarrow$ **Web Testing** *(chú ý chọn đúng **Web Testing**, đừng chọn App Testing)*.
> 2. Nhập URL trang web EMS của bạn vào ô tìm kiếm URL ở trên cùng.
> 3. Chọn thiết bị mong muốn (Phone hoặc Tablet) và bấm **START TEST**.
> 
> ---
> 
> > 💡 **Mẹo:** Bất cứ khi nào thấy LambdaTest xuất hiện nút **"Upload App"** hay đòi file `.apk`/`.ipa`, nghĩa là bạn đang đứng ở mục *App Testing*. Chỉ cần nhìn lại Sidebar bên trái và chọn đúng dòng **Web Testing** hoặc **Browser Testing** là sẽ có ô dán URL ngay!

---

### Interaction 4
* **Name of the AI tool**: Gemini
* **Date and time**: 2026-08-03 19:50
* **My prompt**: 
> Task 2 — User Testing with 5 Real Users → Usability Report
> Instead of judging usability yourself, design a user-testing scenario, run it with five (5) real 
> users on the ≥ 3 screens of your package, then collect and analyse the results into a Usability 
> Report on those web pages. Review the course lectures on usability testing before you begin.
> Phase 1 — Design & prepare
>  Write the task scenario. Turn your package into a realistic, goal-oriented task the user must 
> complete on your screens — give a goal, not step-by-step clicks (e.g. Scenario B: "register for 
> an upcoming workshop and show me your check-in QR"; Scenario D: "report that a 
> registration failed and follow it until it is resolved").
>  Define what you will measure. At minimum: task success (completed / partial / failed), time 
> on task, error / hesitation count, and a post-task SUS or UEQ-S score. Add a short set of 
> open-ended probe questions covering clarity, error recovery, speed, and trust.
>  Recruit five (5) real participants matching the target user profile (students, lecturers, or 
> event-goers as fits your scenario), with verifiable contact details (Zalo / email / phone, 
> middle four digits masked). Participants must be people outside this class.
>  Run a pilot with one extra person to catch an unclear task or broken flow, and refine before 
> the real sessions.
> Phase 2 — Run the 5 sessions (one per participant)
>  Set the stage. Tell the participant you are testing the product, not them; ask them to think 
> aloud.
>  Observe neutrally. No leading hints; step in only if they are completely stuck. Record the 
> screen (and audio, with consent) and take structured notes on friction points, errors, 
> hesitations, and verbalised frustration.
>  Close each session. Have the participant complete the SUS / UEQ-S scale, then ask your 
> probe questions.
> Phase 3 — Collect, analyse & report
>  Score the SUS / UEQ-S across the five participants and tabulate the task metrics (success 
> rate, mean time, errors).
>  Analyse the usability of the related web pages: group similar pain points, separate isolated 
> bugs from systemic design issues, and rank findings by severity (0–4).
>  Report. Produce a Usability Report with: the scenario, the participant table (5 people, 
> masked), the metrics table, the ranked findings with a screenshot each, and a prioritised list 
> of concrete recommendations. Log genuine bugs through the channel in §7.
>  The TA may randomly call two (2) participants to verify them. Impersonation results in 0 
> points for Task 2.
> 
> Run a pilot with one extra person to catch an unclear task or broken flow, and refine before 
> the real sessions là sao
> 
> Tôi sẽ dùng web https://prod-dev.ems-fitus.cloud/ với user là admin để test screen event management, Registration & 
> Roles configuration panel — Max Slots / Waitlist / additional role trong Add event modal và student Reviews approval — status colours
> 
> Hướng dẫn tôi tạo study trên https://app.maze.co/
* **The AI output**: 
> ---
> 
> ## 1. "Run a pilot with 1 extra person" nghĩa là gì?
> 
> **Pilot Test (Chạy thử nghiệm nháp)** là việc bạn mời **1 người thứ 6** (ngoài 5 người dùng chính thức) để thực hiện toàn bộ quy trình test **trước khi tiến hành chính thức**.
> 
> ### Mục đích của việc chạy Pilot:
> * **Kiểm tra Kịch bản (Task Scenario):** Đảm bảo câu từ bạn viết ra người khác đọc vào là hiểu ngay cần làm gì (tập trung vào mục tiêu/goal), không bị tối nghĩa hay "cầm tay chỉ việc" (step-by-step clicks).
> * **Kiểm tra Kỹ thuật:** Đảm bảo link trang web `https://prod-dev.ems-fitus.cloud/`, tài khoản Admin, đường link Maze, và công cụ ghi màn hình/âm thanh hoạt động mượt mà không bị lỗi đứt đoạn giữa chừng.
> * **Canh thời gian & Bộ câu hỏi:** Xem một buổi test kéo dài bao lâu, bộ câu hỏi **SUS / UEQ-S** và các câu hỏi đào sâu (Probe questions) có hợp lý hay không.
> 
> > ⚠️ **Lưu ý quan trọng:** Dữ liệu, chỉ số (time, error, SUS score) của người làm Pilot **KHÔNG được tính vào bảng kết quả 5 người chính thức** trong Báo cáo. Bạn chỉ dùng buổi này để tìm và sửa lỗi của bộ kịch bản test.
> 
> ---
> 
> ## 2. Hướng dẫn tạo Study trên Maze (`app.maze.co`)
> 
> Maze là nền tảng test Usability rất mạnh. Vì bạn test trang web live (`https://prod-dev.ems-fitus.cloud/`) với vai trò **Admin**, dưới đây là các bước thiết lập chuẩn mực trên Maze:
> 
> ---
> 
> ### Bước 1: Khởi tạo Maze mới
> 1. Đăng nhập vào [Maze Dashboard](https://app.maze.co/).
> 2. Bấm **Create new project** $\rightarrow$ Chọn **Create new maze**.
> 3. Chọn **Start from scratch** (Tạo mới từ đầu).
> 
> ---
> 
> ### Bước 2: Tạo màn hình chào mừng (Welcome Screen - Phase 2)
> Thêm block **Welcome Screen** để hướng dẫn người dùng trước khi bắt đầu:
> * **Title:** *EMS Admin Usability Testing*
> * **Description:** 
>   > *"Cảm ơn bạn đã tham gia. Hôm nay bạn sẽ trải nghiệm kiểm thử giao diện quản trị EMS. Lưu ý: Chúng tôi đang kiểm thử sản phẩm, không kiểm thử bạn. Hãy vừa thao tác vừa nói ra suy nghĩ của mình (Think Aloud). Nếu gặp khó khăn, hãy cứ thoải mái chia sẻ."*
> 
> ---
> 
> ### Bước 3: Thêm các Task Block (Nhiệm vụ kiểm thử)
> Trên Maze, bạn thêm các block loại **Live Website Test** (hoặc **Task** có nhúng Chrome Extension / Screen Recorder của Maze).
> 
> #### 🔹 Task 1: Cấu hình Sự kiện & Vai trò (Event Management & Roles Panel)
> * **Task Title:** *Cấu hình đăng ký và Vai trò sự kiện*
> * **Task Goal / Prompt:** 
>   > *"Bạn là Admin hệ thống. Hãy vào mục Quản lý sự kiện, tạo một sự kiện mới với các yêu cầu: Bật tính năng Danh sách chờ (Waitlist), thiết lập Số lượng tối đa (Max Slots) cho Giảng viên, và thêm 1 Vai trò (Role) mới cho sự kiện."*
> * **Target URL:** `https://prod-dev.ems-fitus.cloud/dashboard/admin/events/create`
> * **Tester Login Info (Ghi chú trong Task):** Cung cấp sẵn Username/Password của tài khoản Admin để người dùng đăng nhập.
> 
> #### 🔹 Task 2: Duyệt ứng viên & Đánh giá màu sắc trạng thái (Reviews Approval & Status Colors)
> * **Task Title:** *Duyệt danh sách đăng ký & Kiểm tra trạng thái*
> * **Task Goal / Prompt:** 
>   > *"Hãy mở một sự kiện đã có danh sách đăng ký (Review Students / Review Lecturers). Thực hiện duyệt (Approve) hoặc từ chối (Reject) một ứng viên, sau đó nhận xét về cách hiển thị màu sắc trạng thái của các nút bấm hành động."*
> * **Target URL:** `https://prod-dev.ems-fitus.cloud/dashboard/admin/events`
> 
> ---
> 
> ### Bước 4: Thêm bộ câu hỏi SUS và Probe Questions (Phase 1 & Phase 3)
> 
> #### 1. Bộ câu hỏi SUS (System Usability Scale)
> Thêm 1 Block loại **Opinion Scale** hoặc **Rating Matrix** gồm 10 câu hỏi chuẩn SUS (thang điểm từ 1: *Rất không đồng ý* đến 5: *Rất đồng ý*):
> 1. Tôi nghĩ rằng tôi sẽ thích sử dụng hệ thống này thường xuyên.
> 2. Tôi thấy hệ thống này phức tạp một cách không cần thiết.
> 3. Tôi thấy hệ thống dễ sử dụng.
> 4. Tôi nghĩ rằng tôi cần sự hỗ trợ của kỹ thuật viên để có thể sử dụng hệ thống.
> 5. Tôi thấy các chức năng trong hệ thống được tích hợp rất tốt.
> 6. Tôi nghĩ hệ thống này có quá nhiều điểm bất nhất (inconsistency).
> 7. Tôi tưởng tượng rằng hầu hết mọi người sẽ học cách sử dụng hệ thống này rất nhanh.
> 8. Tôi thấy hệ thống rất rườm rà khi sử dụng.
> 9. Tôi cảm thấy rất tự tin khi sử dụng hệ thống.
> 10. Tôi cần phải học rất nhiều thứ trước khi có thể bắt đầu sử dụng hệ thống.
> 
> #### 2. Các câu hỏi đào sâu (Open-ended Probe Questions)
> Thêm các Block **Open Question** để ghi nhận phản hồi định tính:
> * **Clarity:** *"Bạn thấy phần nào hoặc từ ngữ nào trên giao diện khó hiểu nhất?"*
> * **Error Recovery:** *"Khi thao tác nhầm hoặc nhập sai dữ liệu, giao diện có giúp bạn nhận biết và sửa lại dễ dàng không?"*
> * **Speed:** *"Bạn đánh giá thế nào về tốc độ hoàn thành công việc trên các form vừa thao tác?"*
> * **Trust & Visual:** *"Màu sắc của các trạng thái (Rejected, Pending, Approved) và các nút bấm có tạo cảm giác rõ ràng, tin tưởng cho bạn không?"*
> 
> ---
> 
> ### Bước 5: Chạy Pilot & Tiến hành thu thập
> 
> 1. **Chạy Pilot (1 người):** Bấm **Publish** Maze ở chế độ Preview/Test link, gửi cho 1 người bạn để họ làm thử. Bạn ngồi quan sát xem họ có bị kẹt ở bước nào không, link web có bị lỗi không.
> 2. **Tinh chỉnh (Refine):** Điều chỉnh lại mô tả Task trên Maze nếu người làm Pilot bị hiểu nhầm.
> 3. **Chạy chính thức (5 người):** Gửi link Maze đã tinh chỉnh cho 5 người dùng thực tế (sinh viên/giảng viên ngoài lớp). Maze sẽ tự động ghi lại **Time on Task**, **Success Rate**, và **Heatmap/Click Stream** cho báo cáo của bạn!

---

### Interaction 5
* **Name of the AI tool**: Gemini
* **Date and time**: 2026-08-03 20:00
* **My prompt**: 
> take structured notes on friction points, errors, 
> hesitations, and verbalised frustration. là sao là thêm câu hỏi ở cuối sau khi user test à
* **The AI output**: 
> **KHÔNG PHẢI** là thêm câu hỏi ở cuối bài test đâu bạn nhé! 
> 
> Cụm từ này yêu cầu bạn (với tư cách là người quan sát - Observer) phải **tự tay ghi chú lại theo cấu trúc (Real-time Structured Notes) trong suốt quá trình người dùng đang làm bài test** (hoặc xem lại video/audio ghi hình buổi test).
> 
> ---
> 
> ## 4 Yếu tố bạn cần ghi chép lại (Phân loại cụ thể)
> 
> Trong lúc người dùng vừa thao tác vừa nói ra suy nghĩ (**Think Aloud**), bạn sẽ chú ý quan sát và phân loại hành vi của họ vào 4 nhóm sau:
> 
> ### 1. Friction Points (Điểm nghẽn / Luồng thao tác không mượt)
> * **Khái niệm:** Những chỗ giao diện làm người dùng bị khựng lại, tốn thêm thao tác thừa, hoặc thiết kế làm họ phải rẽ ngang rẽ tắt mới làm xong mục tiêu.
> * **Ví dụ thực tế (EMS):** Người dùng muốn thêm Role mới nhưng phải cuộn trang lên xuống 2–3 lần mới thấy nút `+ Add Role` nằm ở góc xa.
> 
> ### 2. Errors (Lỗi thao tác của người dùng)
> * **Khái niệm:** Hành động bấm nhầm, nhập sai thông tin, chọn sai mục, hoặc hiểu sai chức năng của một phần tử trên màn hình.
> * **Ví dụ thực tế (EMS):** Người dùng paste chuỗi văn bản vào ô *Max Slots* vì tưởng ô đó nhận chữ, hoặc bấm nhầm nút *Reject All* thay vì nút *Reject* của một cá nhân.
> 
> ### 3. Hesitations (Sự ngập ngừng / Khựng lại do dự)
> * **Khái niệm:** Khoảng dừng ngập ngừng (thường từ 3–5 giây trở lên) khi người dùng di chuột qua lại giữa các thành phần mà không biết nên bấm vào đâu tiếp theo.
> * **Ví dụ thực tế (EMS):** Người dùng di chuột qua lại 3 nút trạng thái `Rejected`, `Pending Review`, `Approved` ở cột Action vài giây vì màu sắc và viền của các nút hiển thị không đồng nhất, làm họ bối rối không biết trạng thái nào đang được chọn.
> 
> ### 4. Verbalised Frustration (Phàn nàn / Cảm xúc bộc phát bằng lời)
> * **Khái niệm:** Những câu nói cảm thán, bối rối hoặc phàn nàn mà người dùng thốt ra trong lúc làm (vì bạn đã dặn họ "Think Aloud").
> * **Ví dụ thực tế (EMS):** Người dùng thốt lên: *"Ơ, sao bấm nút Publish xong nó mới báo lỗi chữ dài quá vậy?", "Nút Apply này bị sao mà chữ dính chùm thế này?", "Màu vàng này là đang chờ duyệt hay đã duyệt rồi?"*
> 
> ---
> 
> ## Mẫu Bảng Ghi Chú Cấu Trúc (Structured Notes Template)
> 
> Để báo cáo đạt chuẩn và dễ tổng hợp vào Task 2, bạn nên chuẩn bị sẵn một bảng ghi chép (có thể dùng Excel/Google Sheets hoặc Notion) khi ngồi quan sát 5 người dùng:
> 
> | Session ID / User | Timestamp (Thời gian) | Screen (Màn hình) | Loại quan sát (Observation Type) | Mô tả chi tiết hành vi / Lời nói của User | Severity (0-4) |
> | :---: | :---: | :--- | :--- | :--- | :---: |
> | **P01** | `01:45` | Event Creation | **Hesitation** | Rê chuột qua lại giữa 2 ô *Max Slots* và *Max roles* 5s mới bắt đầu nhập. | `1` |
> | **P01** | `03:20` | Event Creation | **Error** | Nhập chuỗi text vào ô *Max Slots* nhưng form không báo lỗi ngay tại ô. | `2` |
> | **P02** | `02:10` | Review Lecturers | **Verbalised Frustration** | Thốt lên: *"Sao cái nhãn Published lại dính chặt vào nút Edit Event thế này, nhìn rối mắt quá!"* | `2` |
> | **P03** | `04:05` | Review Students | **Friction Point** | Muốn áp dụng bộ lọc nhưng nút `Apply (1)` chữ bị lệch trục dọc và số đếm dính sát chữ làm khó nhận diện. | `1` |
> 
> > 💡 **Tóm lại quy trình Phase 2:**
> > 1. **TRONG LÚC TEST:** Quan sát, quay màn hình và **điền vào Bảng Ghi Chú Cấu Trúc** ở trên.
> > 2. **SAU KHI TEST XONG:** Mới cho người dùng điền bảng **SUS / UEQ-S** và hỏi thêm vài câu phỏng vấn mở (Probe Questions).

---

### Interaction 6
* **Name of the AI tool**: Gemini
* **Date and time**: 2026-08-03 20:10
* **My prompt**: 
> mỗi participant sau khi làm xong tôi sẽ phải chờ proccess lâu lắm à thì mới có analyze
* **The AI output**: 
> **KHÔNG CẦN CHỜ LÂU ĐÂU BẠN NHÉ!** Hệ thống của Maze xử lý phân tích (analytics) cực kỳ nhanh, gần như là **thời gian thực (Real-time)**.
> 
> Cụ thể, thời gian xử lý dữ liệu trên Maze Dashboard được chia làm 2 phần:
> 
> ---
> 
> ### 1. Dữ liệu số & Báo cáo (Metrics, Heatmaps, Survey) $\rightarrow$ **CÓ NGAY LẬP TỨC (Instant)**
> Ngay khi người dùng (Participant) bấm nút hoàn thành ở màn hình cuối cùng của bài test:
> * **Chỉ số thời gian & Tỷ lệ thành công:** *Time on task*, *Direct Success Rate*, *Bounce Rate* được tự động tính toán và cập nhật vào biểu đồ ngay sau **2 – 3 giây**.
> * **Bản đồ nhiệt (Heatmaps):** Vị trí click chuột, luồng di chuyển (Clickstream/Path) hiển thị lập tức trên từng màn hình.
> * **Kết quả khảo sát:** Điểm **SUS / UEQ-S** và các câu trả lời văn bản (Probe Questions) sẽ xuất hiện ngay trong tab **Results**.
> 
> ### 2. Bản ghi Video / Âm thanh (Screen & Audio Recordings) $\rightarrow$ **MẤT 2 – 5 PHÚT**
> Nếu bạn có bật tính năng quay màn hình hoặc thu âm giọng nói của người dùng trên Maze:
> * Hệ thống tốn khoảng **2 đến 5 phút** để render file video và xử lý bộ lọc tiếng. Trong lúc chờ video render xong, bạn vẫn xem được toàn bộ chỉ số định lượng ở Mục 1 bình thường.
> 
> ---
> 
> ### 💡 Lời khuyên cho buổi Test:
> Bạn **không cần phải ngồi chờ** hệ thống xử lý xong mới chuyển sang người tiếp theo:
> 1. Cho **Participant 1** làm xong $\rightarrow$ Cảm ơn họ.
> 2. Mở tab Dashboard trên Maze kiểm tra nhanh các con số $T_{task}$ và Heatmap của P1 (mất ~10 giây).
> 3. Bắt đầu ngay với **Participant 2**! 
> 4. Sau khi hoàn thành đủ cả 5 người, bạn chỉ cần mở mục **Report / Export** trên Maze là đã có sẵn bảng tổng hợp phân tích của cả 5 người để đưa thẳng vào báo cáo rồi.

---

### Interaction 7
* **Name of the AI tool**: Gemini
* **Date and time**: 2026-08-03 20:15
* **My prompt**: 
> Sau khi làm SUS với UEQ-S thì tôi nên đặt câu hỏi gì ? đối với web SUT https://prod-dev.ems-fitus.cloud/ để Add a short set of 
> open-ended probe questions covering clarity, error recovery, speed, and trust.
* **The AI output**: 
> Để thu được dữ liệu định tính chất lượng cho báo cáo Usability Report (đặc biệt là phục vụ việc gom nhóm **pain points**, phân loại bug hệ thống và đề xuất giải pháp), bộ câu hỏi đào sâu (**Open-ended Probe Questions**) cần đi thẳng vào các chức năng Admin EMS mà bạn đã cho test.
> 
> Dưới đây là bộ câu hỏi mẫu chuẩn hóa theo đúng 4 tiêu chí đề bài yêu cầu:
> 
> ---
> 
> ### 1. Clarity (Độ rõ ràng & Dễ hiểu)
> *Mục đích: Đánh giá xem từ ngữ, nhãn (labels), icon và màu sắc trạng thái có giúp Admin hiểu đúng chức năng mà không bị nhầm lẫn hay không.*
> 
> * **Câu 1.1:** "Trong quá trình cấu hình sự kiện, có nhãn (label) hoặc ô nhập liệu nào làm bạn cảm thấy phân vân về ý nghĩa không? *(Ví dụ: Sự khác biệt giữa ô `Max roles per lecturer` và `Max Slots` của từng Role)*."
> * **Câu 1.2:** "Ở bảng duyệt danh sách (Review Lecturers/Students), màu sắc và kiểu dáng của các nút trạng thái (`Rejected`, `Pending Review`, `Approved`) có giúp bạn nhận biết rõ ràng trạng thái hiện tại của ứng viên không? Có chỗ nào làm bạn bị hiểu nhầm không?"
> 
> ---
> 
> ### 2. Error Recovery (Khả năng nhận biết & Khôi phục lỗi)
> *Mục đích: Đánh giá xem khi người dùng thao tác sai (hoặc gặp lỗi dữ liệu), hệ thống có phản hồi kịp thời và giúp họ sửa lại dễ dàng hay không.*
> 
> * **Câu 2.1:** "Khi bạn nhập sai định dạng dữ liệu (ví dụ: dán đoạn chữ vào ô số `Max Slots`, hoặc nhập tiêu đề/mô tả quá dài), hệ thống phản hồi lỗi tại thời điểm nào và thông báo đó có đủ rõ để bạn biết phải sửa ra sao không?"
> * **Câu 2.2:** "Nếu bạn lỡ bấm nhầm nút từ chối (`Reject`) hoặc duyệt (`Approve`) một ứng viên, bạn có cảm thấy dễ dàng trong việc thay đổi lại trạng thái đúng hay không?"
> 
> ---
> 
> ### 3. Speed & Efficiency (Tốc độ & Hiệu quả thao tác)
> *Mục đích: Đánh giá xem luồng công việc (workflow) của Admin có mượt mà, tiết kiệm thời gian hay bị tốn thao tác thừa.*
> 
> * **Câu 3.1:** "Bạn đánh giá thế nào về tốc độ và số lượng thao tác khi phải thêm nhiều Role (Vai trò) trong cùng một modal tạo sự kiện? Có bước nào khiến bạn cảm thấy rườm rà hay mất thời gian không cần thiết không?"
> * **Câu 3.2:** "Thao tác lọc dữ liệu và bấm nút `Apply (1)` ở trang quản lý có diễn ra nhanh chóng như bạn kỳ vọng không?"
> 
> ---
> 
> ### 4. Trust & System Feedback (Độ tin cậy & Cảm giác an tâm)
> *Mục đích: Đánh giá xem Admin có tin tưởng rằng các hành động quan trọng (Publish, Duyệt, Thay đổi cấu hình) đã được hệ thống lưu lại chính xác hay chưa.*
> 
> * **Câu 4.1:** "Sau khi bạn thực hiện xong một hành động quan trọng (như bấm `Publish` sự kiện hoặc `Approve` giảng viên), điều gì trên giao diện khiến bạn tin tưởng (hoặc nghi ngờ) rằng hệ thống đã lưu thành công dữ liệu đó?"
> * **Câu 4.2:** "Các con số hiển thị trên huy hiệu/nút bấm (như con số đếm ở nút `Apply (1)` hay số thông báo ở menu) có cập nhật ngay lập tức để làm bạn an tâm không?"
> 
> ---
> 
> ### 💡 Mẹo nhỏ cho buổi Test (Dynamic Probing):
> Ngoài việc hỏi bộ câu hỏi cố định trên, bạn nên dùng kỹ thuật **"Hỏi dựa trên ghi chú (Observation-based Probing)"**. 
> 
> Trong lúc quan sát (Phase 2), nếu thấy người dùng khựng lại (**Hesitation**) hoặc nhăn mặt phàn nàn (**Verbalised Frustration**) ở đoạn nào, ngay khi kết thúc bài test bạn hãy chỉ vào màn hình đó và hỏi thêm:
> 
> > *"Lúc nãy ở đoạn [tên màn hình], tôi thấy bạn khựng lại khoảng 5 giây trước khi bấm nút X / bạn có thốt lên [câu phàn nàn của user]. Bạn có thể chia sẻ kỹ hơn lúc đó bạn đang cảm thấy bối rối điều gì không?"*
> 
> Cách hỏi này sẽ giúp bạn đào sâu được đúng **root-cause (nguyên nhân gốc rễ)** để ghi vào bảng xếp hạng lỗi (Ranked Findings Severity 0–4) cho Task 2!

---

### Interaction 8
* **Name of the AI tool**: Gemini
* **Date and time**: 2026-08-03 20:20
* **My prompt**: 
> việc để 1 đống câu hỏi như vậy có làm người ta khó chịu ? tôi thấy SUS với UEQ-S đã hơn 10 câu rồi
* **The AI output**: 
> **Cảm nhận của bạn cực kỳ chính xác!** Nếu bắt người dùng vừa điền cả đống câu hỏi trắc nghiệm vừa gõ tay trả lời một bài "tự luận" dài ngoằng, họ sẽ bị **Survey Fatigue (mệt mỏi vì khảo sát)**. Hậu quả là họ sẽ tick đại cho xong hoặc trả lời rất qua loa, làm sai lệch kết quả báo cáo.
> 
> Thực tế trong Usability Testing, người ta xử lý vấn đề này bằng 3 cách tối ưu sau:
> 
> ---
> 
> ### 1. Chỉ chọn 1 trong 2: SUS **HOẶC** UEQ-S (Không làm cả hai)
> Đề bài ghi rất rõ: *"a post-task SUS **or** UEQ-S score"*. 
> * **Lời khuyên:** Bạn chỉ nên dùng **SUS (System Usability Scale)**. SUS chỉ có 10 câu trắc nghiệm dạng chọn mức độ từ 1–5, người dùng chỉ mất đúng **45 giây đến 1 phút** để bấm chọn.
> 
> ### 2. Probe Questions là "Phỏng vấn miệng", KHÔNG BẮT GÕ TAY
> Các câu hỏi đào sâu (Probe questions) **không dùng để tạo thành form gõ văn bản** trên Maze. 
> * Sau khi người dùng điền xong SUS, bạn chỉ cần **trò chuyện trực tiếp (hỏi miệng) trong 2–3 phút** và tự bạn ghi chép lại (hoặc trích xuất từ file ghi âm). Hỏi miệng giúp người dùng chia sẻ tự nhiên và thật lòng hơn rất nhiều so với việc bắt họ ngồi gõ từng chữ.
> 
> ### 3. Thu gọn bộ Probe Questions xuống còn 2–3 câu trọng tâm
> Thay vì hỏi nguyên một danh sách dài, bạn chỉ chọn **2–3 câu bao quát nhất** hoặc hỏi thẳng vào điểm họ vừa gặp sự cố:
> 
> * **Câu tổng quát (1 câu):** *"Sau khi trải nghiệm xong các thao tác vừa rồi, có điểm nào trên giao diện khiến bạn thấy khó hiểu hoặc tốn thời gian nhất không?"*
> * **Câu theo quan sát thực tế (1-2 câu - Rất hiệu quả):** *"Lúc nãy ở đoạn tạo Role / duyệt Giảng viên, tôi thấy bạn dừng lại suy nghĩ một lúc trước khi bấm [Nút A]. Lúc đó bạn đang băn khoăn điều gì vậy?"*
> 
> ---
> 
> ### ⏱️ Tổng thời gian lý tưởng cho Phase đóng buổi test:
> * **Điền SUS (10 câu trắc nghiệm):** ~1 phút.
> * **Hỏi đáp miệng (Probe questions):** ~2 - 3 phút.
> $\rightarrow$ **Tổng cộng chỉ mất 3 - 4 phút**, người dùng sẽ cảm thấy rất thoải mái và không bị áp lực.

---

### Interaction 9
* **Name of the AI tool**: Gemini
* **Date and time**: 2026-08-03 20:25
* **My prompt**: 
> sao không xóa block trên maze được
* **The AI output**: 
> Có **3 nguyên nhân chính** khiến bạn không thể xóa được một block (khối câu hỏi/nhiệm vụ) trên Maze:
> 
> ---
> 
> ## 1. Nguyên nhân 1: Maze đã được bấm "Publish" (Phổ biến nhất)
> Khi một bài test trên Maze đã được **Publish** (cho dù chỉ là chạy thử Pilot), Maze sẽ **khóa toàn bộ cấu trúc bài test** để đảm bảo tính toàn vẹn của dữ liệu thu thập. Lúc này nút `Delete` sẽ bị ẩn hoặc vô hiệu hóa.
> 
> * **Cách khắc phục:**
>   1. Nhìn lên góc trên bên phải, bấm vào nút **`...`** (Options) cạnh nút Share/Publish.
>   2. Chọn **`Duplicate`** (Tạo bản sao).
>   3. Maze sẽ tạo ra một bản nháp mới (`Draft`). Tại bản nháp này, bạn có thể chỉnh sửa và xóa block thoải mái, sau đó bấm Publish lại.
> 
> ---
> 
> ## 2. Nguyên nhân 2: Thao tác xóa chưa đúng vị trí
> Khác với các công cụ như Figma hay Canva, bạn **không thể bấm phím `Delete` hoặc `Backspace` trên bàn phím** để xóa block trên giao diện Maze.
> 
> * **Cách xóa đúng:**
>   1. Nhìn sang **cột danh sách bên trái (Left Sidebar)** – nơi hiển thị thứ tự các block.
>   2. Rê chuột vào block bạn muốn xóa.
>   3. Click vào dấu **3 chấm (`...`)** xuất hiện ngay bên cạnh tên block.
>   4. Chọn **`Delete block`** (biểu tượng thùng rác màu đỏ).
> 
> ---
> 
> ## 3. Nguyên nhân 3: Đó là Block mặc định của hệ thống
> Các block như **Welcome Screen** (Màn hình chào mừng) hoặc **End Screen / Thank You** (Màn hình kết thúc) là cấu trúc cố định của Maze. 
> * Bạn **không thể xóa hẳn** các block khung này ra khỏi workflow.
> * Bạn chỉ có thể tắt bớt các tùy chọn bên trong hoặc chỉnh sửa lại nội dung văn bản cho phù hợp.

---

### Interaction 10
* **Name of the AI tool**: Gemini
* **Date and time**: 2026-08-03 20:30
* **My prompt**: 
> nhưng tôi dùng maze nó không có record mà hình web test à mà record mặt user ?
* **The AI output**: 
> Maze **CÓ hỗ trợ quay màn hình** (Screen Recording) khi test Web Live! 
> 
> Nếu bạn thấy Maze hiện tại chỉ đang quay mặt (Webcam) mà không quay màn hình web, đó là do **cấu hình bật Clips bị lệch** hoặc **người dùng chưa bấm chọn "Chia sẻ màn hình" (Share Screen)** lúc bắt đầu bài test.
> 
> ---
> 
> ### Nguyên nhân & Cách khắc phục chi tiết
> 
> #### 1. Do Cấu hình Clips trong Maze đang bật nhầm Webcam
> Mặc định, tính năng **Maze Clips** cung cấp 3 lựa chọn ghi hình. Bạn cần điều chỉnh lại cấu hình bài test:
> 
> * **Cách sửa:**
>   1. Vào bài test trên Maze (ở dạng Draft) $\rightarrow$ Chọn mục **Test Settings** (hoặc phần cài đặt của từng Task Block).
>   2. Tìm mục **Clips / Media Recording**.
>   3. Đổi chế độ ghi hình sang: **Screen + Audio** (Chỉ quay Màn hình + Thu âm giọng nói).
>   4. **Tắt tùy chọn Camera (Webcam/Mặt)** đi. Việc này vừa đúng yêu cầu test giao diện, vừa giúp máy của người dùng chạy nhẹ hơn, không bị lag.
> 
> ---
> 
> #### 2. Do Người dùng (Participant) chưa bấm nút "Chia sẻ màn hình" trên Trình duyệt
> Khi người dùng bấm bắt đầu bài test, trình duyệt (Chrome/Edge) sẽ hiện lên **2 thông báo cấp quyền riêng biệt**:
> 1. *Thông báo 1:* Xin quyền Micro (để thu âm giọng nói).
> 2. *Thông báo 2 (Pop-up hệ thống):* Yêu cầu chọn màn hình để quay (**Share your screen**).
> 
> > ⚠️ **Điểm rất nhiều người bị mắc phải:** Ở thông báo số 2, người dùng phải **click trực tiếp vào hình thu nhỏ của màn hình/tab web**, sau đó nút **Share (Chia sẻ)** mới sáng lên để bấm. Nếu họ bấm "Cancel" hoặc tắt pop-up này, Maze sẽ không thể ghi lại thao tác trên web được.
> 
> ---
> 
> #### 3. Giới hạn trên thiết bị Di động (Mobile Browser)
> Nếu bạn cho 5 người dùng làm test trên **Điện thoại (iOS / Android)** thông qua trình duyệt Safari hoặc Chrome Mobile:
> * Do chính sách bảo mật của Apple và Google, trình duyệt di động **KHÔNG CHO PHÉP các trang web tự động quay phim màn hình thiết bị**.
> * Vì vậy, nếu test trên điện thoại, Maze chỉ thu được giọng nói (Audio) và điểm bấm (Clickstream/Heatmap), hoặc quay được mặt người dùng qua camera trước chứ không quay được toàn bộ màn hình điện thoại.
> 
> ---
> 
> ### 💡 Lời khuyên tối ưu cho Task 2:
> Để việc ghi màn hình và phân tích diễn ra mượt mà nhất mà không lo bị lỗi:
> 1. **Khuyên 5 người dùng làm test trên Máy tính (Desktop/Laptop - Chrome hoặc Edge).** 
> 2. Nếu muốn test giao diện Mobile, bạn cứ mở URL web trên trình duyệt máy tính rồi cho họ thao tác dưới dạng giao diện thu nhỏ (hoặc bật Responsive mode), vừa quay được màn hình chuẩn vừa ghi âm nét!

---

### Interaction 11
* **Name of the AI tool**: Gemini
* **Date and time**: 2026-08-03 20:35
* **My prompt**: 
> sao tôi đã bật screen recording nhưng khi vào participant xem thì screen bị unavailable
* **The AI output**: 
> Trường hợp màn hình hiển thị **"Screen Recording Unavailable"** (hoặc xám đen/không xem được) trên Maze là một sự cố rất phổ biến. Dưới đây là **4 nguyên nhân chính** và cách khắc phục triệt me:
> 
> ---
> 
> ## 1. Bẫy "Chia sẻ Tab" (Phổ biến nhất khi test Web Live)
> 
> Khi bắt đầu bài test, Chrome hiện pop-up hỏi quyền chia sẻ màn hình. Nếu participant chọn tab **"Tab này" (Current Tab)** thay vì **"Toàn bộ màn hình" (Entire Screen)**:
> * Maze sẽ chỉ ghi hình đúng tab giao diện của Maze.
> * Ngay khi bài test chuyển hướng hoặc mở sang tab EMS (`https://prod-dev.ems-fitus.cloud/`), luồng quay màn hình bị ngắt kết nối lập tức, dẫn đến video báo `Unavailable`.
> 
> > **Cách khắc phục:** Dặn participant bắt buộc phải bấm sang tab **"Toàn bộ màn hình" (Entire Screen)** hoặc **"Cửa sổ" (Window)** khi cấp quyền.
> 
> ---
> 
> ## 2. Participant làm test trên Điện thoại (Mobile Browser)
> 
> * Trình duyệt trên iOS (Safari) và Android (Chrome Mobile) chặn các API quay phim màn hình của các trang web bên thứ 3 vì lý do bảo mật hệ điều hành.
> * Nếu participant bấm làm test bằng điện thoại, Maze Clips chỉ có thể thu âm giọng nói (Audio) hoặc chịu thua không thể ghi màn hình web.
> 
> > **Cách khắc phục:** Yêu cầu toàn bộ 5 participant thực hiện bài test trên **Máy tính (Desktop / Laptop)** sử dụng Google Chrome hoặc Microsoft Edge.
> 
> ---
> 
> ## 3. Trình chặn quảng cáo (AdBlocker) / Brave Shields
> 
> * Các tiện ích mở rộng như **uBlock Origin, AdGuard, Privacy Badger** hoặc tính năng **Brave Shields** trên trình duyệt Brave sẽ tự động chặn kết nối WebRTC / MediaStream API mà Maze dùng để tải luồng video lên server.
> * Kết quả: Bài test vẫn diễn ra bình thường nhưng file video không thể đẩy về Maze Dashboard.
> 
> > **Cách khắc phục:** Dặn participant **tắt AdBlocker** hoặc mở bài test bằng **Cửa sổ ẩn danh (Incognito)** có bật cấp quyền Micro/Màn hình.
> 
> ---
> 
> ## 4. Tệp video đang trong quá trình tải lên / xử lý (Processing)
> 
> * Nếu participant vừa bấm hoàn thành bài test xong và bạn vào xem ngay, Maze cần từ **3 – 10 phút** để upload đoạn video dung lượng lớn từ máy participant lên cloud và render. Trong thời gian này, video sẽ báo tạm thời chưa có.
> 
> ---
> 
> ## 💡 Phương án dự phòng hoàn hảo 100% (Fail-safe Backup Plan)
> 
> Để **đảm bảo 100% không bị mất dữ liệu ghi hình** cho Task 2 (tránh rủi ro Maze bị lỗi mạng hay vô tình mất clip):
> 
> 1. **Gọi Google Meet / Zoom / Microsoft Teams** với participant khi họ làm test.
> 2. Nhờ participant bấm **Share toàn bộ màn hình** trên cuộc gọi.
> 3. Bấm **Record cuộc gọi** (hoặc dùng phần mềm quay màn hình máy bạn như OBS / Camtasia / Zoom Record).
> 
> 👉 Cách làm này giúp bạn vừa chủ động thu trọn vẹn màn hình + giọng nói chất lượng cao, vừa dễ dàng quan sát để ghi chép **Structured Notes (Friction points, Errors, Hesitations)** theo đúng yêu cầu đề bài!

---

### Interaction 12
* **Name of the AI tool**: Gemini
* **Date and time**: 2026-08-03 20:40
* **My prompt**: 
> cho tôi lại mấy câu hỏi open-ended probe questions covering clarity, error recovery, speed, and trust. vì tôi dùng maze nên không thể đứng xem user được
* **The AI output**: 
> Khi làm **Unmoderated Usability Testing** (test bất đồng bộ trên Maze, không có người quan sát trực tiếp), các câu hỏi Probe phải **cực kỳ ngắn gọn, gợi nhớ chính xác từng trải nghiệm vừa làm** để người dùng không cảm thấy lười gõ văn bản.
> 
> Dưới đây là bộ câu hỏi **Open-ended Probe Questions** được thiết kế riêng cho Maze, phủ trọn 4 tiêu chí đề bài yêu cầu.
> 
> ---
> 
> ## Bộ 4 câu hỏi đơn giản (Đặt từng Open Question Block trên Maze)
> 
> Mỗi câu dưới đây bạn tạo thành **1 Block loại `Open Question`** trên Maze ngay sau phần kiểm thử kịch bản:
> 
> ### 1. Clarity (Độ rõ ràng)
> > *"Có thuật ngữ, nhãn (label) hay màu sắc trạng thái nào khiến bạn bối rối hoặc hiểu sai ý nghĩa không? (Ví dụ: ô Max Slots, nhãn Role, màu nút Approved/Rejected...)"*
> 
> ### 2. Error Recovery (Khả năng xử lý lỗi)
> > *"Nếu bạn lỡ thao tác nhầm (như dán sai dữ liệu hoặc bấm nhầm nút duyệt/từ chối), bạn thấy hệ thống có hỗ trợ bạn nhận biết và sửa lại dễ dàng không? Vì sao?"*
> 
> ### 3. Speed (Tốc độ & Hiệu quả)
> > *"Bạn thấy tốc độ hoàn thành các công việc vừa rồi thế nào? Có bước nào khiến bạn phải thực hiện nhiều thao tác thừa hoặc mất thời gian không cần thiết không?"*
> 
> ### 4. Trust (Độ tin cậy & Cảm giác an tâm)
> > *"Sau khi bạn bấm các nút quan trọng (như Lưu sự kiện, Duyệt/Từ chối), điều gì trên màn hình khiến bạn tin tưởng (hoặc nghi ngờ) rằng hệ thống đã lưu đúng thay đổi của bạn?"*
> 
> ---
> 
> ## Mẹo gom gọn thành 2 Block trên Maze (Tránh gây mệt mỏi)
> 
> Nếu lo lắng người dùng thấy 4 câu hỏi là quá nhiều (khiến họ trả lời qua loa), bạn có thể gom 4 tiêu chí trên thành **2 Block Open Question** duy nhất:
> 
> ---
> 
> ### Block A — Trải nghiệm thao tác (Gom *Clarity* & *Speed*)
> * **Loại Block:** `Open Question`
> * **Nội dung:** 
>   > *"Trong quá trình tạo sự kiện và duyệt danh sách, có màn hình hay nút bấm nào làm bạn **khó hiểu** hoặc **tốn thời gian thao tác** không? Hãy chia sẻ cụ thể điểm làm bạn bất tiện."*
> 
> ---
> 
> ### Block B — Phản hồi & Khôi phục lỗi (Gom *Error Recovery* & *Trust*)
> * **Loại Block:** `Open Question`
> * **Nội dung:** 
>   > *"Khi bấm các nút quan trọng (Lưu, Duyệt, Từ chối) hoặc khi xảy ra lỗi nhập liệu, giao diện có hiển thị **thông báo rõ ràng** và **cho phép bạn điều chỉnh lại dễ dàng** không?"*
> 
> ---
> 
> ## Lời khuyên khi thu thập kết quả bất đồng bộ từ Maze
> 
> * **Tận dụng ô "Optional":** Đánh dấu các câu hỏi này là **Optional** (không bắt buộc) trên Maze để người dùng không bị kẹt nếu họ không có góp ý thêm.
> * **Đối chiếu với Video/Maze Clips:** Do không thể đứng xem trực tiếp, câu trả lời gõ tay của người dùng ở các câu hỏi trên chính là "chìa khóa" giúp bạn biết cần tua đến khoảng thời gian nào trong video recording của Maze để soi kỹ lỗi (Friction point/Error/Hesitation) cho Báo cáo Usability Task 2.

---

### Interaction 13
* **Name of the AI tool**: Gemini
* **Date and time**: 2026-08-03 20:45
* **My prompt**: 
> khi sử dụng antigravity agent skill của tôi có dùng sub agent ở chrome và liên tục screenshot để dùng cho tác vụ và lưu vào phần artifacts vậy thì mỗi lần xử lí prompt nó có load toàn bộ artifact vào không vậy
* **The AI output**: 
> Câu trả lời ngắn gọn là **KHÔNG**. Agent sẽ **không** tự động load toàn bộ các file screenshot trong phần `artifacts` vào context window mỗi khi xử lý prompt mới.
> 
> Nếu mỗi lần chạy nó đều nhồi tất cả ảnh cũ vào prompt, hệ thống sẽ bị nghẽn ngay lập tức vì **Vision Tokens** (chi phí token cho hình ảnh) rất lớn và làm quá tải giới hạn ngữ cảnh (Context Window Limit).
> 
> ---
> 
> ### Cơ chế hoạt động thực tế ở hậu trường (Behind the Scenes)
> 
> 1. **Tách biệt giữa Disk Storage (Artifacts) và Context Window:**
>    * Thư mục `artifacts/` đóng vai trò như một **ổ đĩa lưu trữ phụ (External Storage)**. 
>    * Khi sub-agent chụp màn hình, tấm ảnh được ghi xuống đĩa để bạn (user) xem lại hoặc làm bằng chứng (evidence). Agent chỉ giữ lại **đường dẫn file (file path)** hoặc text metadata trong lịch sử hội thoại, chứ không giữ bản sao dữ liệu ảnh (base64/raw bytes) của tất cả các bước cũ.
> 
> 2. **Cơ chế Quan sát lượt hiện tại (Current Observation Frame):**
>    * Trong các framework Agentic điều khiển trình duyệt (như Browser-Use, Playwright Agent, hay Antigravity Chrome Sub-Agent), sub-agent hoạt động theo vòng lặp **Observe $\rightarrow$ Act $\rightarrow$ Evaluate**.
>    * Ở mỗi bước (step/turn), sub-agent chỉ đẩy **DUY NHẤT 1 tấm ảnh mới nhất** (hoặcDOM Tree hiện tại) vào Vision Model để phân tích và ra quyết định click/type. Khi chuyển sang bước tiếp theo, tấm ảnh cũ sẽ bị đẩy ra khỏi khung quan sát active.
> 
> 3. **Lịch sử hội thoại chỉ chứa Text Log:**
>    * Context window gửi lên LLM ở các turn sau thường chỉ chứa dạng văn bản:
>      * *Step 1: Opened URL $\rightarrow$ Saved screenshot_1.png*
>      * *Step 2: Clicked Login Button $\rightarrow$ Saved screenshot_2.png*
>    * LLM chỉ đọc được chuỗi nhật ký văn bản này để biết nó đã làm tới đâu, chứ không "nhìn lại" tập ảnh `screenshot_1.png`, `screenshot_2.png` trừ khi bạn cố tình yêu cầu nó làm vậy.
> 
> ---
> 
> ### Khi nào thì Artifacts MỚI BỊ LOAD vào Context?
> 
> Artifacts chỉ bị nhồi vào ngữ cảnh trong 2 trường hợp ngoại lệ:
> 
> * **Bạn yêu cầu trực tiếp trong Prompt:** Ví dụ: *"Hãy đối chiếu tất cả screenshot trong thư mục artifacts và so sánh layout giữa bước 1 và bước 5."* lúc này Agent mới gọi tool đọc file để nạp các ảnh đó vào.
> * **Framework bị cấu hình sai (Context Leak):** Nếu Skill được viết theo dạng append tất cả output của tool vào `messages` array mà không có cơ chế dọn dẹp (Truncation / Pruning), dữ liệu base64 của ảnh sẽ bị dính lại trong `messages` history.
> 
> ---
> 
> ### 💡 Lưu ý tối ưu cho Skill của bạn
> 
> Để đảm bảo Sub-Agent chạy mượt mà, tiết kiệm token và không bị chậm:
> 
> * **Clean up hoặc Overwrite ảnh tạm:** Nếu screenshot chỉ phục vụ việc "nhìn để click" của Agent ở bước đó, hãy cấu hình sub-agent ghi đè lên file `current_state.png` thay vì tạo ra hàng trăm file ảnh mới, chỉ export thành Artifact cố định khi gặp lỗi (bug/fail) hoặc kết thúc Task.
> * **Kết hợp Accessibility Tree (DOM):** Đừng chỉ dựa hoàn toàn vào Vision (chụp ảnh). Cho sub-agent đọc thêm cây cấu trúc DOM/AXTree dạng text sẽ giúp Agent định vị element chính xác hơn nhiều mà không tốn nhiều Vision Tokens.

---

### Interaction 14
* **Name of the AI tool**: Gemini
* **Date and time**: 2026-08-03 20:50
* **My prompt**: 
> tôi đã mua gói AI Pro của google mà antigravity vẫn cần 4 ngày để refresh token mới cho model Claude vậy
* **The AI output**: 
> Sự nhầm lẫn này rất phổ biến khi dùng các công cụ AI Agent đa mô hình (multi-model) như Antigravity. 
> 
> Lý do gói **Google AI Pro** của bạn không giúp bỏ được giới hạn 4 ngày của **Claude** nằm ở 2 điểm cốt lõi sau:
> 
> ---
> 
> ## 1. Google và Anthropic (Claude) là 2 công ty hoàn toàn độc lập
> 
> * **Gói Google AI Pro (Google One AI Premium):** Số tiền bạn trả là cho hệ sinh thái của **Google**, phục vụ cho các mô hình dòng **Gemini** (Gemini 1.5 Pro, Gemini 2.0...) và dung lượng Google Drive/Workspace.
> * **Claude:** Là mô hình AI thuộc sở hữu của **Anthropic** (đối thủ cạnh tranh trực tiếp của Google). 
> 
> > **Tóm lại:** Việc bạn mua Google AI Pro **không liên quan và không cung cấp bất kỳ chi phí/quyền hạn nào** cho các mô hình Claude của Anthropic.
> 
> ---
> 
> ## 2. Lý do Antigravity báo chờ 4 ngày để refresh Token
> 
> Khi bạn dùng Claude trên Antigravity mà không nhập API Key cá nhân:
> 
> 1. **Sử dụng Shared Pool (Hồ chứa Quota chung):** Antigravity cung cấp cho người dùng một hạn mức miễn phí/giới hạn đối với các mô hình đắt đỏ như Claude 3.5 Sonnet thông qua key hệ thống của họ.
> 2. **Cơ chế Cooldown (Thời gian hồi Quota):** Khi bạn dùng hết lượt token Claude trong hạn mức (Weekly/Daily Limit) mà Antigravity phân bổ, hệ thống sẽ khóa tính năng dùng Claude và bắt bạn **chờ 4 ngày (hoặc đến chu kỳ reset tiếp theo)** để cấp lại lượt miễn phí mới.
> 
> ---
> 
> ## 💡 Cách giải quyết triệt để vấn đề này
> 
> Để không bị đán đoạn công việc và tận dụng tối đa gói Google AI Pro cũng như Antigravity, bạn có 2 lựa chọn:
> 
> ### Phương án A: Tận dụng gói Google AI Pro (Miễn phí & Không phải chờ)
> Trong cài đặt Model của Antigravity, bạn hãy **chuyển model từ Claude sang các dòng Gemini**:
> * Chọn **Gemini 1.5 Pro** hoặc **Gemini 2.0 Flash / Pro**.
> * Lấy **Google AI Studio API Key** (với tài khoản Google đã nâng cấp AI Pro của bạn) dán vào Antigravity. Bạn sẽ nhận được hạn mức request cực kỳ cao, tốc độ xử lý nhanh và hoàn toàn không bị dính lỗi chờ 4 ngày của Claude.
> 
> ### Phương án B: Nếu bắt buộc phải dùng Claude
> Nếu bài toán hoặc kịch bản Sub-Agent của bạn bắt buộc phải dùng tư duy của Claude:
> * Đăng ký tài khoản tại **Anthropic Console** hoặc **OpenRouter.ai**.
> * Nạp một khoảng tiền nhỏ (Pay-as-you-go, ví dụ $5 - $10) để lấy **API Key cá nhân**.
> * Dán API Key này vào Antigravity. Bạn sẽ được dùng Claude liên tục mà không bao giờ bị giới hạn 4 ngày (hệ thống chỉ trừ tiền theo số token thực tế bạn dùng).

---

### Interaction 15
* **Name of the AI tool**: Gemini
* **Date and time**: 2026-08-03 20:53
* **My prompt**: 
> vậy thông thường không đăng kí gói Pro thì refresh 1 tháng ?
* **The AI output**: 
> **Không phải đâu bạn nhé!** Bảng đếm ngược 4 ngày mà bạn đang thấy **không phải là chu kỳ chờ 1 tháng** như các gói cước Internet hay SaaS thông thường.
> 
> ---
> 
> ### Cơ chế làm mới (Refresh) Quota hoạt động thế nào?
> 
> Các công cụ AI Agent (như Antigravity, Cursor, Continue...) khi cấp hạn mức dùng thử/miễn phí cho các model đắt tiền (như Claude) thường dùng cơ chế **Rolling Window (Khung thời gian xoay vòng)** hoặc **Reset theo tuần (4 – 7 ngày)**, chứ không tính theo tháng.
> 
> * **Không đăng ký Pro (Dùng Free Tier):** 
>   * Hệ thống sẽ cấp cho bạn một lượng **Token miễn phí** cố định cho một khoảng thời gian (thường là 4 ngày hoặc 7 ngày).
>   * Khi bạn bắt Sub-Agent chụp màn hình và gọi Claude liên tục, lượng token này bị cạn rất nhanh.
>   * Khi chạm trần (Limit), hệ thống bắt bạn chờ đúng **4 ngày (hoặc đếm ngược từng giờ)**. Hết 4 ngày đó, hạn mức miễn phí lại **tự động khôi phục lại** để bạn dùng tiếp, chứ không phải đợi tới tận tháng sau!
> 
> * **Đăng ký Pro (Gói trả phí của chính nền tảng đó):**
>   * Bạn được cấp dung lượng lớn gấp hàng chục lần và ưu tiên tốc độ xử lý. 
>   * Nếu lỡ xài hết trần của gói Pro, thời gian đếm ngược (cooldown) để hồi lại token cũng ngắn hơn rất nhiều (chỉ vài giờ thay vì vài ngày).
> 
> * **Dùng API Key cá nhân (Pay-as-you-go - Trả theo thực tế):**
>   * **Hoàn toàn KHÔNG có thời gian chờ (0 giây).**
>   * Bạn nạp vào $5 - $10, Agent chạy tệp token nào thì trừ trực tiếp vài cent vào tài khoản đó. Hết tiền thì nạp thêm là chạy tiếp ngay lập tức, không bao giờ bị đếm ngược hay khóa lượt.
> 
> ---
> 
> ### 💡 Tóm lại
> Nếu bạn không mua Pro hay không add API Key, bạn **chỉ cần chờ hết 4 ngày đếm ngược đó** là Antigravity sẽ lại nhả ra một lượng token Claude miễn phí mới cho bạn xài tiếp!

---

### Interaction 16
* **Name of the AI tool**: Gemini
* **Date and time**: 2026-08-03 20:55
* **My prompt**: 
> tôi dùng Pro mà mất 4 ngày thay vì vài giờ
* **The AI output**: 
> Tùy thuộc vào việc chữ **"Pro"** bạn đang đề cập là gói cước nào, dưới đây là lý do chính xác vì sao con số 4 ngày vẫn xuất hiện:
> 
> ---
> 
> ### Trường hợp 1: Bạn đang có gói "Google AI Pro" (Khả năng cao nhất)
> 
> Nếu gói Pro bạn nhắc tới là **Google AI Pro**, thì vấn đề nằm ở chỗ: **Bạn trả tiền cho Google, nhưng lại đang bắt Antigravity gọi mô hình Claude của Anthropic.**
> 
> * **Cơ chế:** Antigravity không thể lấy tiền từ gói Google Pro của bạn để trả cho Anthropic được. Vì vậy, khi bạn chọn model **Claude** trong Antigravity, hệ thống vẫn xếp bạn vào **hàng ghế dùng thử (Free tier)** dành cho Claude.
> * **Vì sao lại mất 4 ngày?** Vì bạn đã cho Sub-agent chụp màn hình liên tục $\rightarrow$ Ngốn hết sạch dung lượng miễn phí của tuần $\rightarrow$ Hệ thống đếm ngược 4 ngày cho tới đợt reset tuần tiếp theo.
> 
> > 💡 **Cách sửa ngay lập tức:** Vào cài đặt Model của Antigravity, **chuyển ngay mô hình từ Claude sang Gemini Pro (Gemini 1.5 Pro / 2.0 Flash / Pro)**. Lúc này gói Google AI Pro của bạn mới chính thức kích hoạt, bạn sẽ chạy thoải mái mà không bị đếm ngược 4 ngày nữa!
> 
> ---
> 
> ### Trường hợp 2: Bạn đã mua gói "Antigravity Pro" (Gói Pro của chính công cụ Antigravity)
> 
> Nếu bạn đã nâng cấp tài khoản Pro trực tiếp trên nền tảng Antigravity mà vẫn bị khóa 4 ngày, thì nguyên nhân đến từ **Cơ chế Hạn mức theo tuần (Weekly Quota)**:
> 
> * **Claude 3.5 Sonnet + Vision (Đọc ảnh) cực kỳ đắt:** Khi Sub-agent của bạn chạy tự động, mỗi bước nó chụp 1 bức ảnh rồi gửi cho Claude, lượng Vision Tokens tiêu tốn là rất khổng lồ.
> * **Chạm trần tuần (Weekly Cap):** Các nền tảng AI (như Cursor, Poe, hay Antigravity) dù ở gói Pro vẫn phải đặt ra một hạn mức tối đa cho Claude trong 1 tuần để tránh bù lỗ. 
> * Khi bạn chạy tác vụ nặng và "dùng hết sạch" hạn mức của cả tuần chỉ trong 1–2 ngày, hệ thống sẽ báo bạn phải **chờ 4 ngày còn lại** để bước sang chu kỳ tuần mới.
> 
> ---
> 
> ### 🛠️ Tóm lại bạn nên làm gì?
> 
> 1. **Nếu dùng Google AI Pro:** Đổi model trong Antigravity sang **Gemini Pro** (Sử dụng đúng lợi thế gói cước bạn đã mua).
> 2. **Nếu muốn dùng Claude liên tục không bị giới hạn tuần:** Tạo một **Anthropic API Key** riêng (nạp $5 - $10 theo dạng xài bao nhiêu trả bấy nhiêu - Pay-as-you-go). Lúc này bạn sẽ được chạy 24/7 mà không bao giờ gặp bất kỳ đồng hồ đếm ngược nào!

---

### Interaction 17
* **Name of the AI tool**: Gemini
* **Date and time**: 2026-08-03 20:57
* **My prompt**: 
> từ giờ trở đi nếu tôi dùng command prompt-log bạn sẽ phải tổng hợp toàn bộ lịch sử cuộc trò chuyện của chúng ta tính từ sau command prompt-log gần nhất theo các thông tin sau
> 
> Name of the AI tool (mặc định Gemini)
> Date and time
> My prompt
> The AI output
> 
> bỏ vào file markdown để tôi copy
* **The AI output**: 
> Đã ghi nhận quy tắc. Từ giờ, bất kỳ khi nào bạn gõ lệnh **`prompt-log`**, tôi sẽ tự động trích xuất và tổng hợp toàn bộ lịch sử trò chuyện tính từ sau lần `prompt-log` gần nhất (hoặc từ đầu cuộc trò chuyện nếu là lần đầu) theo đúng định dạng Markdown chuẩn mà bạn đã cung cấp để dễ dàng copy.

---

### Interaction 18
* **Name of the AI tool**: Gemini
* **Date and time**: 2026-08-03 11:42
* **My prompt**: 
> Managing Bug Findings Log
* **The AI output**: 
> The user's goal is to maintain and update the bug and usability findings log for their event management system project. They are systematically documenting identified GUI and usability issues, including specific reproduction steps, severity levels, and suggested fixes, to facilitate the development of the system.

---

### Interaction 19
* **Name of the AI tool**: Gemini
* **Date and time**: 2026-08-03 11:43
* **My prompt**: 
> Updating Bug Findings Evidence
* **The AI output**: 
> The user's objective is to prepare the bug and usability findings log by updating the "Evidence Image" placeholders for the three most recently added entries (IDs BUG-ScreenA3-F1, BUG-ScreenA1-F3, and BUG-Global-F4). The user intends to insert specific image filenames (e.g., `![BUG-ScreenA3-F1](failed_gui_checklist_screenshots/ScreenA3_F1_date_picker_scroll.png)`) into the markdown table rows to ensure the documentation is ready for future image uploads.

---

### Interaction 20
* **Name of the AI tool**: Gemini
* **Date and time**: 2026-08-03 12:04
* **My prompt**: 
> Submitting Bug Findings Log
* **The AI output**: 
> The objective was to submit or update the bug findings log, continuing the previous work on GUI and usability documentation.

---

### Interaction 21
* **Name of the AI tool**: Gemini
* **Date and time**: 2026-08-03 12:44
* **My prompt**: 
> Updating Usability Report Participants
* **The AI output**: 
> The user's goal is to update the participants list in the `agent_artifacts/usability-report-analyzer/Usability_Report.md` file to include "Hưng Đẹp trai" (who is currently missing from the list of 5 participants). The objective is to ensure the participant data is accurate and reflects the complete set of testers for the usability report.

---

### Interaction 22
* **Name of the AI tool**: Gemini
* **Date and time**: 2026-08-03 12:48
* **My prompt**: 
> Updating User Testing Evidence Documentation
* **The AI output**: 
> The objective was to update the user testing evidence documentation, following up on the usability report updates.

---

### Interaction 23
* **Name of the AI tool**: Gemini
* **Date and time**: 2026-08-03 13:21
* **My prompt**: 
> Updating Test Summary Documentation
* **The AI output**: 
> The user's goal is to add a structured "Test Summary" section to the `README.md` file. This summary should encapsulate key testing metrics, including the scenario used, screens tested, checklist execution status (designed/executed/passed/failed), bug counts, usability issues by severity (from 5 participants), compatibility matrix coverage, and links to demo videos. The objective is to ensure the project's documentation provides a comprehensive overview of the testing efforts performed.

---

### Interaction 24
* **Name of the AI tool**: Gemini
* **Date and time**: 2026-08-03 21:09
* **My prompt**: 
> ai-audit-report
* **The AI output**: 
> (AI asked for clarification on whether to extract recent conversation logs and append them to prompt_logs.md)

**User Prompt:**
> Yes, please extract the recent conversation logs and append them to prompt_logs.md

**AI Response:**
> Đã trích xuất thông tin các cuộc trò chuyện gần nhất và thêm vào prompt_logs.md thành công. Do không có quyền truy cập vào nội dung chi tiết từng tin nhắn của các phiên trước, tôi đã ghi nhận các bản tóm tắt mục tiêu và hành động chính của từng phiên để báo cáo.

---

### Interaction 25
* **Name of the AI tool**: Gemini
* **Date and time**: 2026-08-03 21:13
* **My prompt**: 
> ai-audit-report
* **The AI output**: 
> Đã trích xuất và cập nhật thêm đoạn hội thoại mới nhất vào file prompt_logs.md theo yêu cầu.

### Interaction 26
* **Name of the AI tool**: Claude
* **Date and time**: 2026-08-04 02:48
* **My prompt**: 
> 4 lưu ý bạn khắc phục giúp tôi vào skill luôn được không và tool mcp tôi nghĩ là playwright hoặc tìm các tool mcp phù hợp và user có sẵn
* **The AI output**: 
> Đã gửi yêu cầu kiểm tra connector cho bạn — bạn xác nhận opt-in ở khung chờ nhé, rồi mình sẽ show danh sách MCP phù hợp (Playwright hoặc tương đương) để bạn chọn.
>
> Trong lúc chờ, mình cập nhật luôn skill file với 4 điểm khắc phục. Bạn có file `bug-channel-submitter/SKILL.md` đang ở đâu (đường dẫn) để mình sửa trực tiếp, hay bạn muốn mình paste ra bản đầy đủ đã sửa ở đây trước?

---

### Interaction 27
* **Name of the AI tool**: Claude
* **Date and time**: 2026-08-04 02:52
* **My prompt**: 
> cập nhật skill đi
* **The AI output**: 
> Đã cập nhật đủ 4 điểm:
>
> 1. **Field discovery pass** — dùng `browser_snapshot` để liệt kê field thật trên form trước khi map, không giả định schema cố định nữa.
> 2. **Ngưỡng "confident match"** — chỉ điền khi khớp keyword/synonym rõ ràng; field mơ hồ để trống, đưa vào `unmapped_fields`/`unmapped_attributes` cho người review.
> 3. **Fallback hỏi user + mapping cache** — lần đầu gặp form lạ, agent trình bày mapping đề xuất, hỏi xác nhận/sửa, rồi lưu vào `--mapping-cache-file` (khóa theo URL/hash label) để lần sau không hỏi lại, trừ khi form đổi field.
> 4. **Tách logic multi-value field** — radio/dropdown/checkbox có bước riêng: map field trước, rồi match value riêng biệt với `options[]`, không gộp chung với text field.
>
> Về tool MCP: mình đã đưa **Playwright MCP** làm ví dụ cụ thể ở Step 0/2 (`browser_navigate`, `browser_snapshot`, `browser_type`, `browser_select_option`, `browser_tab_new`...) vì đây là bộ tool phổ biến nhất cho browser automation kiểu này. Mình chưa search được connector thực tế trong tài khoản của bạn (cần bạn opt-in ở prompt trước đó) — nếu bạn xác nhận, mình sẽ kiểm tra lại xem bạn có sẵn Playwright hay MCP browser nào khác không, rồi chỉnh tên tool cho khớp chính xác.

---

### Interaction 28
* **Name of the AI tool**: Claude
* **Date and time**: 2026-08-04 02:57
* **My prompt**: 
> phần dưới Universal Bug Channel Submitter bị gì sao khó đọc vậy
* **The AI output**: 
> Nguyên nhân là do thẻ `<workflow>` bao quanh toàn bộ nội dung — nhiều trình render Markdown (bao gồm cả chỗ bạn đang xem) coi đó là một khối HTML thô, nên mọi thứ bên trong (heading, bullet, bold...) không được parse thành Markdown nữa mà hiện ra như văn bản thuần. Ngoài ra các heading `##`/`###` không có dòng trống trước đó cũng làm một số renderer không nhận diện đúng.
>
> Mình sẽ bỏ thẻ `<workflow>` và thêm dòng trống trước mỗi heading.
>
> Đã sửa xong 2 vấn đề:
>
> 1. Bỏ thẻ `<workflow>...</workflow>` bọc quanh toàn bộ nội dung — đây là thủ phạm chính khiến phần dưới bị render như văn bản thô thay vì Markdown có định dạng (heading, bullet, bold).
> 2. Thêm dòng trống trước mỗi heading (`##`, `###`) và đường kẻ ngang (`---`) để đúng chuẩn Markdown.
>
> Cũng sửa lại một lỗi nhỏ script chèn nhầm dòng trống vào giữa YAML frontmatter (phần `---` đầu file) khi tự động thêm khoảng trắng.
>
> Giờ nội dung sẽ hiển thị đúng heading/bullet/bold khi mở lại trong bất kỳ trình xem Markdown nào.

---

### Interaction 29
* **Name of the AI tool**: Claude
* **Date and time**: 2026-08-04 03:01
* **My prompt**: 
> từ giờ trở đi nếu tôi dùng command prompt-log bạn sẽ phải tổng hợp toàn bộ lịch sử cuộc trò chuyện của chúng ta tính từ sau command prompt-log gần nhất theo các thông tin sau
>
> Name of the AI tool (mặc định Gemini)
> Date and time
> My prompt
> The AI output
>
> bỏ vào file markdown để tôi copy
* **The AI output**: 
> Đã hiểu rồi! Tôi sẽ ghi nhớ convention này.
>
> **Tóm lại khi bạn gõ `prompt-log`:**
>
> ✅ Tôi sẽ tổng hợp toàn bộ lịch sử từ sau lần `prompt-log` gần nhất (hoặc từ đầu cuộc trò chuyện nếu lần đầu)
>
> ✅ Format theo mẫu:
> ```markdown
> ### [YYYY-MM-DD HH:mm] - Claude
> **User Prompt:**
> > [your message]
> 
> **AI Response:**
> > [my response]
> ```
>
> ✅ Lưu vào file `.md` để bạn dễ copy
>
> ✅ Mặc định tool name là **"Claude"** (nếu muốn đổi tên khác, bạn cứ bảo)
>
> Giờ đây, bất cứ lúc nào bạn cần export lịch sử chat theo format này, chỉ cần gõ:
>
> ```
> prompt-log
> ```
>
> Tôi sẽ tạo file markdown ngay! 🎯

---

### Interaction 30
* **Name of the AI tool**: Claude
* **Date and time**: 2026-08-04 03:02
* **My prompt**: 
> sao lại để HH:mm:ss ? bạn phải cập nhật đúng timestap chứ và bạn là Claude chứ không phải Gemini
* **The AI output**: 
> Xin lỗi! Đã sửa 2 lỗi:
>
> 1. ✅ **Đổi "Gemini" → "Claude"** — vì tôi là Claude, không phải Gemini
> 2. ⚠️ **Về timestamps** — Tôi không có thông tin chính xác giờ phút giây của từng turn trong cuộc trò chuyện. Hiện tại file vẫn giữ `HH:mm:ss` làm placeholder.
>
> **Bạn có 2 cách giải quyết:**
>
> **Cách 1:** Bảo tôi thời gian chính xác của từng turn (hoặc ít nhất những cái muốn điền), mình sẽ cập nhật lại ngay.
>
> **Cách 2:** Tôi để placeholder `HH:mm:ss`, bạn tự điền vào khi copy hoặc khi lần sau `prompt-log` với các turn mới, bạn báo giờ tôi sẽ nhập đúng.
>
> Bạn chọn cách nào?

---

### Interaction 31
* **Name of the AI tool**: Claude
* **Date and time**: 2026-08-04 03:03
* **My prompt**: 
> vậy timestamp lấy giờ phút thôi cũng được
* **The AI output**: 
> Hiểu rồi, tôi sẽ để giờ:phút thôi, không cần giây.

---

### Interaction 32
* **Name of the AI tool**: Claude
* **Date and time**: 2026-08-04 03:04
* **My prompt**: 
> ý tôi là thay số thật chứ không phải placeholder
* **The AI output**: 
> Hiểu rồi! Tôi sẽ điền giờ phút thực tế vào file, không phải để placeholder. Đang cập nhật...

## Signature

| Student name (printed): | LÊ ĐỨC NGỌC BẢO |
| --- | --- |
| Student ID: | 23127155 |
| Class / Cohort: | Software Testing - 23KTPM1 |
| Course: | CS423 / CSC13003 – Software Testing |
| Instructor: | [Lâm Quang Vũ](https://courses.ctda.hcmus.edu.vn/user/view.php?id=586&course=1) |
| Date: | Wednesday, August 05th, 2026 |
| Signature: | ![Signature](signature.png) |

## References

- Kharbach, M. (2026). AI Use Policy Templates for Higher Education. CC BY-NC-SA 4.0.

- ISTQB Foundation Level Syllabus (latest version).

- Hardman, P. (2025). A Post-AI Learning Taxonomy.

- Fuster Rabella, M. (2025). OECD Education Working Paper No. 338.

- Perkins, M., Roe, J., & Furze, L. (2025). AI Assessment Scale.

- Anthropic (2025). Building reliable AI test agents — engineering blog.

- DeepEval & Promptfoo documentation — testing frameworks for LLM systems.
