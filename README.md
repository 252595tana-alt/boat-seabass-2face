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

### 1. 予約・SNSリンク
公式Instagram・LINE・YouTubeのリンクは `app/siteConfig.ts` の `INSTAGRAM_URL` / `LINE_URL` / `YOUTUBE_URL` で一元管理しています。予約相談はLINEへ誘導しています。
LINEやYouTubeを追加する場合は、実際に開ける公式URLを確認してから設定してください。

### 2. 画像
`Hero.tsx`、`About.tsx` などの `Image` コンポーネントの `src` を
実際の写真のURLまたはpublicフォルダ内の画像パスに変更してください。

### 3. 集合場所・Googleマップ
集合場所の住所と地図URLは `app/siteConfig.ts` で一元管理しています。

---

## ページ構成

| セクション | ID |
|---|---|
| ヒーロー | #top |
| 2FACEについて | #about |
| ガイドプラン | #plan |
| 船・設備 | #boat |
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
