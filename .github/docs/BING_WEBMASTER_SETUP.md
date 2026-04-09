# Bing Webmaster Tools セットアップガイド

## 概要

Bing Webmaster Tools（BWT）は、Bing検索エンジン向けのサイト最適化プラットフォームです。DuckDuckGoもBingのインデックスとアルゴリズムに依存しているため、Bing対策 = DuckDuckGo対策となります。

**現在のサイト状態:**
- URL: `https://coderdojotachikawa.github.io/pages/`
- Sitemap XML: `https://coderdojotachikawa.github.io/pages/sitemap.xml`
- Verification: `BingSiteAuth.xml` 配置済み（`/home/cdtckw/develop/pages/BingSiteAuth.xml`）

---

## ステップ 1: Bing Webmaster Tools へのサイト登録

### 1.1 ログイン・初期設定

1. **Bing Webmaster Tools にアクセス**
   - URL: https://www.bing.com/webmasters
   - Microsoftアカウント でサインイン（Hotmailなど）

2. **新規サイト追加**
   - 「+ サイト追加」 をクリック
   - サイトURL入力: `https://coderdojotachikawa.github.io/pages/`
   - 「確認」

### 1.2 サイト所有権の確認

Bing は3つの検証方法をサポート：

#### **方法1: XML/HTML ファイルアップロード（初期設定）**
- BingSiteAuth.xml がリポジトリに配置済み
- 既存のファイルパス: `/home/cdtckw/develop/pages/BingSiteAuth.xml`
  - 内容: `<users><user>3F7E0CC18A2EED8089A86567D5B50E4F</user></users>`
- Bing Webmaster Tools画面で 「ファイルのアップロード」 → BingSiteAuth.xml を選択
- **ただし GitHub Pages の XML 配信に稀な遅延があるため、方法2 推奨**

#### **方法2: HTML Meta Tag（推奨・最も確実）**
**既に設定済み ✅**

- メタタグ: `<meta name="msvalidate.01" content="3F7E0CC18A2EED8089A86567D5B50E4F" />`
- 設定位置: `index.html` head タグ内（ラインafter robots メタタグ）
- Bing Webmaster Tools画面で 「HTML メタタグ」 を選択
- コンテンツをコピー: `3F7E0CC18A2EED8089A86567D5B50E4F`
- 「確認」 をクリック

**このメタタグは既にデプロイされており、即座に認証可能です。**

---

## ステップ 2: Sitemap と RSS の登録

### 2.1 Sitemap 登録

1. Bing Webmaster Tools ダッシュボード内で
2. **「サイト管理」 → 「Sitemaps」**
3. 「Sitemap を送信」 をクリック
4. Sitemap URL 入力:
   ```
   https://coderdojotachikawa.github.io/pages/sitemap.xml
   ```
5. 「送信」

**期待される結果:**
- ステータス: 「保留中」→「成功」（数分～数時間）
- インデックス登録ページ数: 3～5 ページ

### 2.2 RSS フィード登録（ブログがある場合）

CoderDojo 立川サイトに RSS フィードなし → **スキップ OK**

---

## ステップ 3: クロール設定の確認と最適化

### 3.1 クロール統計確認

1. **「分析」 → 「クロール統計」**
   - Bingbot によるクロール頻度、エラー件数を確認
   - GitHub Pages は通常、エラー 0 で安定

### 3.2 クロール要求（インデックス高速化）

1. **「クロール」 → 「URL を送信」**
2. 新規 URL またはアップデート済みページ URL を入力
   - 例: `https://coderdojotachikawa.github.io/pages/#topics`
3. 「送信」
   - Bingbot が 24～48 時間以内にクロール

### 3.3 robots.txt 確認

Bing は robots.txt を厳密に解釈：

現在の設定（`/home/cdtckw/develop/pages/robots.txt`）:
```
User-agent: *
Allow: /
Sitemap: https://coderdojotachikawa.github.io/pages/sitemap.xml
```

**状態: ✅ OK** — すべてのクローラーを許可

---

## ステップ 4: キーワード・パフォーマンス分析

### 4.1 キーワード レポート

1. **「レポート」 → 「キーワード」**
   - 表示： Bing 検索結果に表示されたキーワード
   - クリック： ユーザーがサイトをクリック
   - 表示順位： 平均検索順位

**サイト立ち上げ初期の目安:**
- Bing への認識: 1～2 週間
- 初キーワード表示: 2～4 週間
- 順位変動: 毎日（アルゴリズム更新による）

### 4.2 ページ別パフォーマンス

1. **「レポート」 → 「ページ」**
   - どのページが Bing に認識されているか確認
   - クリック数の多いページを把握

---

## ステップ 5: バックリンク分析

### 5.1 被リンク確認

1. **「レポート」 → 「リンク」**
   - 外部リンク（バックリンク）の一覧表示
   - リンク元ドメイン、アンカーテキスト、参照先 URL

**Bing での重要性:**
- Google: E-E-A-T（専門性・権威性）重視
- **Bing: 被リンク強度がスコアの 40～50%**

→ 高品質なバックリンク 5～10 本で Bing 順位が大きく変動（Google よりダイナミック）

### 5.2 バックリンク作成戦略（次フェーズ）

詳細は `BACKLINK_STRATEGY.md` に記載

---

## ステップ 6: SEO リコメンデーション確認

### 6.1 ページ最適化アドバイス

1. **「レポート」 → 「ページ解析」**
   - Title タグ最適化
   - Meta description 長さチェック
   - 画像の alt テキスト提案
   - モバイル対応状況

**現在のサイト状態:**
- Title: ✅ OK（54字、キーワード含む）
- Meta description: ✅ OK（154字、160字以内）
- Mobile: ✅ OK（Viewport メタタグ設定）
- SSL: ✅ OK（HTTPS）

### 6.2 クロールエラー確認

1. **「クロール」 → 「クロール エラー」**
   - 404, 5xx エラーを確認
   - GitHub Pages は通常、エラーなし

---

## ステップ 7: Disavow（リンク削除）設定（上位達成後）

**現在のドメインが新しい場合、不要。**

サイトが成長し、スパムリンクが増えた場合：

1. **「レポート」 → 「Disavow リンク」**
2. 悪質なバックリンク（スパムサイト、機械生成）を指定
3. 「ファイル送信」

---

## タイムライン期待値

| フェーズ | 期間 | 期待される成果 |
|---------|------|----------------|
| サイト登録 | 1 日 | Bing に認識 |
| Sitemap インデックス | 2～3 日 | ページ数が Sitemap に反映 |
| 最初のキーワード表示 | 2～4 週間 | 「キーワード」レポートにデータ |
| 初アクセス | 3～8 週間 | 最初の検索からのクリック |
| 上位表示（Google との差） | 8～16 週間 | 30 位以内に安定（Google: 12 週間程度） |

**Bing は Google より時間がかかる傾向**

---

## トラブルシューティング

### Q0: BingSiteAuth.xml のアップロード検証に失敗

**症状:** 「Error: Unexpected error occurred」

**原因:**
- GitHub Pages API の一時的な遅延
- XML ファイル配信の Content-Type 問題

**対応（推奨）:**
1. XML ファイルアップロード方法は一度中止
2. **「HTML メタタグ」での検証に切り替え（即座で確実）**
3. Bing Webmaster Tools → Add & verify site
   - 「Choose one of the verification methods」 で 「HTML Meta Tag」 を選択
   - コンテンツをコピー: `3F7E0CC18A2EED8089A86567D5B50E4F`
   - 🟢 「Verify」 をクリック
   - 数秒で ✅ 確認完了

**確認:**  メタタグが実際にデプロイされているか確認
```bash
curl https://coderdojotachikawa.github.io/pages/index.html | grep msvalidate
```

### Q1: Sitemap がエラー「取得できませんでした」

**原因:**
- URL パスが誤っている
- XML フォーマットが無効
- robots.txt で Bingbot をブロック

**対応:**
- robots.txt で `Disallow: /` がないことを確認
- Sitemap XML を手動で ブラウザで開いて確認 https://coderdojotachikawa.github.io/pages/sitemap.xml

### Q2: BingSiteAuth.xml 検証に失敗

**原因:**
- ファイルが公開ディレクトリにない
- ファイル名のスペル誤り

**対応:**
- ファイルパス: `/home/cdtckw/develop/pages/BingSiteAuth.xml` を確認
- GitHub Pages で配信されているか確認: https://coderdojotachikawa.github.io/pages/BingSiteAuth.xml

### Q3: クロール統計に何も表示されない

**原因:**
- 登録から 24～48 時間経っていない
- robots.txt で Bingbot ブロック

**対応:**
- 24 時間待つ
- robots.txt で `User-agent: *` を確認

---

## 次のステップ

1. ✅ **このドキュメント完了後:**
   - Bing Webmaster Tools で サイト登録を実行
   - Sitemap 送信を完了

2. **バックリンク作成フェーズ**（1～2 週間後）
   - `BACKLINK_STRATEGY.md` を参照
   - Qiita, Zenn, GitHub に記事・リンク作成

3. **パフォーマンス追跡**（継続）
   - `キーワード` レポート を月 1 回確認
   - 順位変動を Google Search Console と比較

---

## 参考リンク

- Bing Webmaster Tools: https://www.bing.com/webmasters
- Bing Webmaster Tools ヘルプ: https://www.bing.com/webmaster/help/home
- robots.txt 仕様（RFC）: https://www.robotstxt.org/
- Bing SEO ガイドライン: https://www.bing.com/webmaster/help/webmaster-guidelines

---

**最後に確認:**
- BingSiteAuth.xml ファイル: ✅ `/home/cdtckw/develop/pages/BingSiteAuth.xml` に配置
- index.html title/description: ✅ Bing 最適化済み
- robots.txt: ✅ 正常設定
- sitemap.xml: ✅ 生成・配信中

**準備完了。Bing Webmaster Tools 登録を開始できます。**
