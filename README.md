# DiscordBot のログインを維持するやつ

Replit で DiscordBot を実装して、Google Apps Script で Bot 起動用の API にアクセスしてログイン状態を維持します

## 使うもの

- [DiscordBot](https://discord.com/developers/applications)
- [Replit](https://replit.com)
- [Google Apps Script](https://script.google.com)

# Replit で Repl を作成

とりあえず[Replit](https://replit.com)でアカウントを作成して以下の Repl を Fork してください
<BR>
[DiscordBot LoginKeeper](https://replit.com/@ekazyenereta/DiscordBot-LoginKeeper)

## Bot のトークンを取得

[discord developer dashboard](https://discord.com/developers/applications/) にアクセスして、ログイン状況を維持したい DiscordBot のトークンを取得してください

## 環境変数の設定

Replit にアクセスして南京錠を押して 2 つの環境変数を設定してください

| key           | value                 |
| ------------- | --------------------- |
| DISCORD_TOKEN | DiscordBot のトークン |
| GAME_NAME     | GameName              |

![image](https://user-images.githubusercontent.com/20793765/225397885-864536a0-8e11-431d-b913-9b70bb25e2f5.png)

## コンパイル

コンパイルしないと機能しないので、Tools から Shell を開いて

```
npm run build
```

を実行してください
<BR>
これで準備完了です
<BR>
![image](https://user-images.githubusercontent.com/20793765/225398645-213092fa-94a3-44f2-98b7-e133fbf904c0.png)

コンパイル後に「Run」ボタンを押すと、「Webview」が起動すると思います
<BR>
ここに表示されている URL は後の設定で使用するので控えといてください
![image](https://user-images.githubusercontent.com/20793765/225399174-24bf4aed-ce2e-4212-8abb-0747016cf615.png)

## Google Apps Script でログイン維持の設定

以下のスクリプトをコピーしてください
<BR>
[常時起動スクリプト](https://script.google.com/home/projects/1FTW_ofyrBodrt-nFPE983uIzWIJ4hViuRyFLetxhBT555BDzBoG29lNg)

コピーしたら「トリガーを追加」で

| 設定項目                 | 設定内容           |
| ------------------------ | ------------------ |
| 時間の間隔を選択（分）   | 分ベースのタイマー |
| 時間の間隔を選択（時間） | 5 分おき           |

と設定して保存してください

![image](https://user-images.githubusercontent.com/20793765/225399848-3a91cde0-ded8-4e3c-a8b9-8c7d8678d82f.png)

スクリプトの

```js
/** 複数のURLを設定できます */
const URL_ARRAY = [
  "ここにURLを挿入してください",
  "ここにURLを挿入してください",
  "ここにURLを挿入してください",
];
```

の項目に URL を設定すると設定した時間の間隔で定期的にアクセスしてくれます

# 参考記事

- [[開発日誌] Google Apps Script を使って Discord bot を 24 時間稼働させる](https://ch.dlsite.com/matome/174569)
- [【初心者向け】Repl.it で Discord の Bot を作る](https://ayutsuki.net/introduction/replit-djs/)
