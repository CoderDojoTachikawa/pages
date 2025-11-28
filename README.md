# CoderDojo 立川 Web サイト（pages + pages-theme）

このリポジトリ群は CoderDojo 立川のホームページです。フレームワークは Jekyll、ホスティングは GitHub Pages。文字コンテンツ（pages）とレイアウト/Jekyll テーマ（pages-theme）を分けて管理します。開発時はローカルのテーマを自動的に参照します。

## Remote Theme (jekyll-remote-theme)

`pages/_config.yml` で  
```yaml
remote_theme: coderdojotachikawa/pages-theme@main
plugins:
  - jekyll-remote-theme
```  
を指定し、GitHub 上の `pages-theme` リポジトリを参照しています。レイアウトや Sass を変更したら必ず `pages-theme` 側で commit & push してください。未 push の変更は本番に反映されません。ローカルでは `_plugins/local_theme_override.rb` により隣接する `pages-theme` ディレクトリをシンボリックリンクで強制参照するため、ローカルで見える内容と GitHub Pages の公開内容が乖離する場合があります。公開前に `git pull` 済みか確認してください。

## リポジトリ構成

```
./project-root
├─ pages
└─ pages-theme
```

## 使用技術

- Jekyll 4.x
- GitHub Pages
- jekyll-remote-theme
- Bootstrap 5 (CDN)
- Sass/SCSS

## セットアップ

```bash
git clone <pages repo>
git clone <pages-theme repo>
cd pages
bundle install
```

## 開発

```bash
cd pages
./serve.sh
```

## デプロイ手順の切り分け

- コンテンツ更新: pages で編集 → commit → push
- レイアウト/スタイル更新: pages-theme で編集 → commit → push → （必要なら pages を再ビルド）

## 主ファイル

- pages/_config.yml で remote_theme 設定
- pages/assets/images/* 画像
- pages/assets/css/main.scss SCSS (Front Matter 必須)
- pages-theme/_layouts/* レイアウト
- pages-theme/_includes/* 共通部品
- pages-theme/assets/css/main.scss テーマ SCSS

## 注意点 / トラブルシュート

- テーマ変更が公開に反映されない: pages-theme を push したか確認
- SCSS 未反映: 先頭 `---`、`jekyll clean`
- パス問題: `{{ '/path' | relative_url }}`
