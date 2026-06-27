# ボートシーバス2FACE 公式サイト

## セットアップ手順

### 前提条件
- Node.js 18以上をインストールしてください
- https://nodejs.org/ja/download から LTS版をダウンロード

### インストール & 起動

```bash
# プロジェクトフォルダに移動
cd boat-seabass-2face

# 依存パッケージをインストール
npm install

# 開発サーバーを起動
npm run dev
```

ブラウザで http://localhost:3000 を開いてください。

### 本番ビルド

```bash
npm run build
npm start
```

---

## カスタマイズポイント

### 1. Googleカレンダー埋め込み
`app/components/sections/Calendar.tsx` の以下の部分を編集：
- `YOUR_CALENDAR_ID` をGoogleカレンダーのIDに変更
- オーバーレイの `div` を削除してカレンダーを表示

### 2. LINE公式アカウントURL
全ファイル内の `https://line.me/R/ti/p/@2face` を実際のLINE公式アカウントURLに変更。

### 3. SNSリンク
- Instagram: `Footer.tsx` と `Gallery.tsx` のリンクを変更
- YouTube: `Footer.tsx` のリンクを変更

### 4. 画像
`Hero.tsx`、`About.tsx` などの `Image` コンポーネントの `src` を
実際の写真のURLまたはpublicフォルダ内の画像パスに変更してください。

### 5. Googleマップ埋め込み
`Access.tsx` の iframe src を正確な埋め込みURLに変更してください。
Google Maps Platform > 地図の埋め込み から取得できます。

---

## ページ構成

| セクション | ID |
|---|---|
| ヒーロー | #top |
| 2FACEについて | #about |
| ガイドプラン | #plan |
| 船・設備 | #boat |
| 船長紹介 | #captain |
| 料金 | #price |
| 空き状況 | #calendar |
| 釣果情報 | #gallery |
| アクセス | #access |
| FAQ | #faq |

## 技術スタック

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Google Fonts (Montserrat + Noto Sans JP)
