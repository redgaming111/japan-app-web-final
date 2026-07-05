# 🇯🇵 Japan App Web - Ứng dụng Học Tiếng Nhật Toàn Diện

[![GitHub license](https://img.shields.io/github/license/AnNguyenAI/japan-app-web-final?style=flat-square)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/AnNguyenAI/japan-app-web-final?style=flat-square)](https://github.com/AnNguyenAI/japan-app-web-final/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/AnNguyenAI/japan-app-web-final?style=flat-square)](https://github.com/AnNguyenAI/japan-app-web-final/network)

Một ứng dụng web (Progressive Web App - PWA) hỗ trợ học tiếng Nhật từ cơ bản đến nâng cao, tích hợp các công cụ ghi nhớ thông minh giúp tối ưu hóa lộ trình học tập của bạn.

[✨ Trải nghiệm ứng dụng ngay tại đây](https://annguyenai.github.io/japan-app-web-final/) *(Thay thế bằng link thực tế của bạn nếu có)*

---

## 🚀 Tính Năng Nổi Bật

*   **📚 Học Tiếng Nhật Cơ Bản (`coban.html`):** Giao diện trực quan giúp làm quen với bảng chữ cái Hiragana, Katakana và các mẫu câu giao tiếp cơ bản.
*   **🃏 Flashcard Thông Minh (`flashcard.html` & `cobanflashcard.html`):** Phương pháp lặp lại ngắt quãng giúp ghi nhớ từ vựng và Kanji hiệu quả, không gây nhàm chán.
*   **🏆 Luyện Thi JLPT (`jlpt.html`):** Hệ thống bài tập, đề thi thử cấu trúc chuẩn từ N5 đến các cấp độ cao hơn.
*   **📱 Hỗ Trợ PWA (`manifest.json` & `service-worker.js`):** 
    *   Có thể cài đặt trực tiếp lên màn hình điện thoại/máy tính như một app native.
    *   Hỗ trợ hoạt động mượt mà và tối ưu hiệu năng ngay cả khi kết nối mạng kém.

---

## 📂 Cấu Trúc Thư Mục Dự Án

```text
japan-app-web-final/
├── assets/               # Hình ảnh, âm thanh và tài nguyên đa phương tiện
├── css/                  # File định dạng giao diện (Style)
├── icons/                # Bộ icon cho ứng dụng và PWA
├── js/                   # Xử lý logic và tương tác người dùng
├── coban.html            # Trang học cơ bản
├── cobanflashcard.html   # Flashcard cho kiến thức nền tảng
├── flashcard.html        # Trang học flashcard tổng hợp
├── jlpt.html             # Trang luyện thi JLPT
├── index.html            # Trang chủ (Điểm điều hướng chính)
├── manifest.json         # Cấu hình PWA
└── service-worker.js     # Trình quản lý cache và chạy ngầm cho PWA
