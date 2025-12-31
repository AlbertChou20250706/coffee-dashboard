# ☕ Coffee Dashboard

一個現代化、功能完整的咖啡萃取參數計算工具，採用純 HTML + JavaScript 開發，支援多語言切換與多種主題配色。

A modern, full-featured coffee extraction parameter calculator built with pure HTML + JavaScript, supporting multi-language switching and multiple theme colors.

モダンで機能豊富なコーヒー抽出パラメータ計算ツール。純粋な HTML + JavaScript で構築され、多言語切り替えと複数のテーマカラーをサポートしています。

## 📋 功能說明 (Features / 機能)

### 中文
- ☕ **咖啡萃取計算**：即時計算咖啡豆、水、時間比例
- 🌍 **多語言支援**：支援中文、英文、日文即時切換
- 🎨 **多主題配色**：白底黑字、黑底白字、深色、淺色四種科技風格主題
- 📊 **智能分析**：自動分析咖啡濃度、品質評分與萃取建議
- 💾 **設定儲存**：自動儲存使用者偏好設定
- 📦 **多格式匯出**：支援 ZIP、Excel、CSV、HTML 多種格式匯出
- 📱 **響應式設計**：完美支援各種裝置尺寸
- ⚙️ **可自訂參數**：豆種類型、烘焙程度、重量、水量、時間、溫度

### English
- ☕ **Coffee Extraction Calculation**: Real-time calculation of coffee bean, water, and time ratios
- 🌍 **Multi-language Support**: Supports Chinese, English, and Japanese with instant switching
- 🎨 **Multiple Theme Colors**: Four tech-style themes - white background, black background, dark, and light
- 📊 **Smart Analysis**: Automatic analysis of coffee strength, quality score, and brewing suggestions
- 💾 **Settings Storage**: Automatically saves user preferences
- 📦 **Multi-format Export**: Supports ZIP, Excel, CSV, HTML export formats
- 📱 **Responsive Design**: Perfect support for all device sizes
- ⚙️ **Customizable Parameters**: Bean type, roast level, weight, water volume, time, temperature

### 日本語
- ☕ **コーヒー抽出計算**：豆、水、時間の比率をリアルタイムで計算
- 🌍 **多言語サポート**：中国語、英語、日本語の即時切り替えをサポート
- 🎨 **複数のテーマカラー**：白背景、黒背景、ダーク、ライトの4つのテックスタイルテーマ
- 📊 **スマート分析**：コーヒーの濃度、品質スコア、抽出の推奨を自動分析
- 💾 **設定保存**：ユーザー設定を自動保存
- 📦 **マルチフォーマットエクスポート**：ZIP、Excel、CSV、HTML形式のエクスポートをサポート
- 📱 **レスポンシブデザイン**：すべてのデバイスサイズに完全対応
- ⚙️ **カスタマイズ可能なパラメータ**：豆の種類、焙煎度、重量、水量、時間、温度

## 🚀 快速開始 (Quick Start / クイックスタート)

### 使用方法 (Usage / 使用方法)

1. **開啟網頁**：直接在瀏覽器中開啟 `index.html`
2. **選擇語言**：點擊右上角語言選擇器切換語言（中/英/日）
3. **選擇主題**：點擊主題選擇器切換配色方案
4. **輸入參數**：在參數表格中輸入您的咖啡製作參數
5. **查看結果**：系統會即時計算並顯示結果與建議
6. **儲存設定**：點擊「儲存設定」按鈕保存您的偏好設定
7. **匯出資料**：選擇所需格式（ZIP/Excel/CSV/HTML）匯出資料

### 系統需求 (Requirements / システム要件)
- 現代網頁瀏覽器（Chrome, Firefox, Safari, Edge）
- 支援 JavaScript
- 網路連線（用於載入外部程式庫：XLSX.js, JSZip.js）

## 📖 詳細文件 (Documentation / ドキュメント)

### 參數說明 (Parameters / パラメータ)

| 參數 | 說明 | 建議範圍 |
|------|------|----------|
| 豆種類型 | 咖啡豆種類（阿拉比卡/羅布斯塔/混合） | - |
| 烘焙程度 | 淺焙/中焙/深焙 | 依個人口味 |
| 豆重 (g) | 咖啡豆重量 | 15-20g |
| 水量 (ml) | 萃取水量 | 200-300ml |
| 時間 (秒) | 萃取時間 | 150-240秒 |
| 溫度 (°C) | 水溫 | 90-96°C |

### 計算結果說明 (Results / 結果)

- **咖啡比例**：水與咖啡豆的比例，建議 1:13-1:16
- **濃度評估**：根據比例判斷濃/適中/淡
- **品質評分**：綜合評估咖啡製作品質（0-100%）
- **萃取建議**：基於參數提供改善建議

### 主題配色 (Themes / テーマ)

1. **淺色主題 (Light)**：明亮的灰白配色，適合白天使用
2. **深色主題 (Dark)**：柔和的深色調，減少眼睛疲勞
3. **白底黑字 (White Background)**：經典配色，最大對比度
4. **黑底白字 (Black Background)**：科技感十足，適合夜間使用

### 匯出功能 (Export / エクスポート)

- **Excel (.xlsx)**：適合數據分析與進一步處理
- **CSV (.csv)**：通用格式，可用於各種應用程式
- **HTML (.html)**：可在瀏覽器直接開啟查看
- **ZIP (.zip)**：包含以上三種格式的壓縮檔

## 🔄 使用流程 (Workflow / ワークフロー)

```
1. 開啟 index.html
   ↓
2. 選擇語言 & 主題
   ↓
3. 輸入咖啡製作參數
   ↓
4. 查看即時計算結果
   ↓
5. 根據建議調整參數
   ↓
6. 儲存設定（可選）
   ↓
7. 匯出資料（可選）
```

## 💡 技術架構 (Architecture / アーキテクチャ)

### 技術棧 (Tech Stack)
- **前端**：純 HTML5 + CSS3 + JavaScript (ES6+)
- **樣式**：CSS Variables 支援動態主題切換
- **儲存**：LocalStorage API 用於設定持久化
- **匯出**：XLSX.js (Excel)、JSZip.js (ZIP)

### 檔案結構 (Structure)
```
coffee-dashboard/
├── index.html          # 主要應用程式檔案（包含 HTML/CSS/JS）
└── README.md          # 專案文件
```

### 特色技術 (Features)
- **零依賴本地檔案**：所有功能整合在單一 HTML 檔案
- **CDN 載入**：外部程式庫透過 CDN 載入
- **即時計算**：onChange 事件觸發即時更新
- **動畫效果**：CSS3 過渡與動畫提升使用體驗
- **響應式佈局**：CSS Grid & Flexbox 實現自適應排版

## 🎨 設計風格 (Design / デザイン)

### 色彩系統 (Color System)
- 採用 CSS Variables 實現主題切換
- 避免使用黃色背景（視覺不友善）
- 科技感配色：藍色系為主色調
- 高對比度確保可讀性

### UI/UX 特點
- **卡片式設計**：資訊區塊清晰分離
- **圓角元素**：現代化視覺風格
- **陰影效果**：增加層次感
- **過渡動畫**：流暢的互動體驗
- **通知系統**：操作回饋即時顯示

## 📝 版本紀錄 (Changelog / 変更履歴)

### v3.0.0 (2025-12-31)
- ✨ [新增] 完整的多語言支援系統（中/英/日）
- ✨ [新增] 四種主題配色方案
- ✨ [新增] 設定儲存功能（LocalStorage）
- ✨ [新增] 多格式匯出功能（ZIP/Excel/CSV/HTML）
- ✨ [新增] 橫向參數表格，符合 Excel 操作習慣
- ✨ [新增] 即時日期時間顯示
- ✨ [新增] 完整的功能說明與使用流程
- ✨ [新增] 版本資訊與設計者資訊
- ✨ [新增] 智能咖啡萃取建議系統
- ✨ [新增] 響應式設計支援所有裝置
- 🎨 [優化] 整體 UI/UX 設計
- 🎨 [優化] 科技感配色方案
- 📚 [新增] 完整的 README 文件

### v2.1.0
- ✨ [新增] 多國語言切換
- ✨ [新增] 主題切換器

### v1.0.0
- 🎉 [初始] 專案建立

## 👨‍💻 開發資訊 (Development / 開発情報)

### 開發者 (Developer)
- **姓名**：Albert.Chou
- **版本**：3.0.0
- **日期**：2025-12-31
- **設計風格**：現代科技風格

### 可修改的參數 (Customizable Parameters)

在程式碼中，您可以輕鬆修改以下參數：

1. **translations 物件**：新增或修改語言翻譯
2. **CSS Variables**：調整主題配色
3. **計算邏輯**：修改 calculate() 函數中的計算公式
4. **建議範圍**：調整咖啡參數的建議值

### 擴展建議 (Extension Ideas)

- 🔄 新增更多語言支援
- 📊 整合圖表視覺化（Chart.js）
- 💾 雲端同步功能（Firebase）
- 📱 PWA 支援（離線使用）
- 🎯 咖啡配方資料庫
- 👥 社群分享功能

## 🌐 瀏覽器支援 (Browser Support / ブラウザサポート)

| 瀏覽器 | 版本 |
|--------|------|
| Chrome | ≥ 90 |
| Firefox | ≥ 88 |
| Safari | ≥ 14 |
| Edge | ≥ 90 |

## 📄 授權 (License / ライセンス)

© 2025 Albert.Chou Design. All rights reserved.

## 🤝 貢獻 (Contributing / 貢献)

歡迎提交 Issue 或 Pull Request 來改善此專案！

Welcome to submit Issues or Pull Requests to improve this project!

このプロジェクトを改善するために、IssueやPull Requestを送信することを歓迎します！

## 📮 聯絡方式 (Contact / お問い合わせ)

如有任何問題或建議，請透過 GitHub Issues 聯繫。

For any questions or suggestions, please contact via GitHub Issues.

ご質問やご提案がございましたら、GitHub Issuesを通じてお問い合わせください。

---

**現代科技風格設計 | Modern Tech Design | モダンテックデザイン**

**Coffee Dashboard v3.0.0 - Making Perfect Coffee, Made Easy**
