# Vue 3 CI 範本專案

本專案為一個使用 Vue 3 + Vite 架構的範本，整合了 ESLint、Prettier、Stylelint、Husky、lint-staged 與 GitHub Actions，以確保程式碼品質與一致的格式。

## 🚀 快速開始

### 安裝依賴

```bash
yarn install
```

### 啟動開發伺服器

```bash
yarn dev
```

### 預覽建置結果

```bash
yarn preview
```

### 建置專案

```bash
yarn build
```

## 🧪 程式碼檢查與格式化

在提交程式碼前，建議執行以下指令以確保程式碼符合專案規範：

```bash
yarn check
```

此指令會依序執行：

- `yarn lint`：使用 ESLint 檢查 JavaScript/TypeScript/Vue 檔案。
- `yarn stylelint`：使用 Stylelint 檢查 CSS/SCSS/Vue `<style>` 區塊。
- `yarn format`：使用 Prettier 檢查程式碼格式。

若需自動修復格式問題，可執行：

```bash
yarn fix
```

## 🔐 Git 提交前檢查（Husky + lint-staged）

本專案使用 Husky 設定 Git 的 pre-commit hook，結合 lint-staged，在每次提交前自動檢查已暫存的檔案：

- 對 `.js`、`.ts`、`.vue` 檔案執行 ESLint 自動修復與 Prettier 格式化。
- 對 `.vue`、`.css`、`.scss` 檔案執行 Stylelint 自動修復。

若檢查未通過，提交將被阻止，確保進入版本控制的程式碼品質。

## ⚙️ GitHub Actions：持續整合（CI）

當有程式碼推送至 `main` 分支或建立 Pull Request 時，GitHub Actions 會自動執行以下流程：

1. 安裝專案依賴。
2. 執行 `yarn check` 進行程式碼檢查。
3. 若檢查未通過，CI 將失敗，阻止不符合規範的程式碼被合併。

## 📁 專案結構

```
.
├── .husky/               # Husky Git hooks 設定
├── src/                  # 原始碼目錄
├── .eslintrc.cjs         # ESLint 設定檔
├── .stylelintrc.cjs      # Stylelint 設定檔
├── .prettierrc           # Prettier 設定檔
├── package.json          # 專案描述與指令
└── vite.config.js        # Vite 設定檔
```

## 📦 主要依賴

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Stylelint](https://stylelint.io/)
- [Husky](https://typicode.github.io/husky/#/)
- [lint-staged](https://github.com/okonet/lint-staged)

---
