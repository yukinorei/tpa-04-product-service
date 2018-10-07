# プロダクトサービス

クライアントは複数のお菓子から好みを選べます。選んで、"get price" を押すと、APIが合計の値段を返すものです。

ただし、APIが実装されていないのでクライアントも動きません。

クライアントはいじらなくていいので、`public/` フォルダーの中ではなく`server/product-service.js` をみてみましょう。

## 初めに

基本タスクは `server/controller.js` と `server/setup.js` で行いますが他のファイルも見るのを忘れないように。

**本日のキーワード：**

- [HTTP RESTful API](https://qiita.com/NagaokaKenichi/items/0647c30ef596cedf4bf2)
- [HTTP Request Query String　（クエリ文字列）](https://online.dhw.co.jp/kuritama/query-string/)

**役に立つリンク：**

- [Express app.use](http://expressjs.com/ja/api.html#app.use)
- [Express app.get](http://expressjs.com/ja/api.html#app.get.method)
- [Express req.query](http://expressjs.com/ja/api.html#req.query)

## タスク１：GET /api/products ハンドリングを実装しよう

下記のデータ型に従ってレスポンスを送りましょう。

```
リクエスト
GET /api/products

レスポンス
Example Response Body
{
  "products": [
    {
      "id": 0,
      "name": "卵ボーロ",
      "price": 109,
      "imageUrl": "https://pbs.twimg.com/profile_images/510408704458379265/WzFxKw75_400x400.jpeg"
    },
    {
      "id": 1,
      "name": "かっぱえびせん",
      "price": 68,
      "imageUrl": "https://item-shopping.c.yimg.jp/i/l/zennokasiten_4901330105938"
    },
    ...
  ]
}
```

**タスク１の実装が完成したら、クライアントを動かして見てお菓子が表示されるかを確認しよう！**

## タスク２：GET /api/price?ids=[ids] ハンドリングを実装しよう

下記のデータ型に従ってレスポンスを送りましょう。

```
リクエスト
GET /api/price?ids=[ids]
  例: /api/price?ids=2,3

レスポンス
Response Body
{
  "productIds": ["2","3"],
  "total":4 08
}
```

## Misc.

To start the app:

```bash
npm i
npm start
# Then visit http://localhost:3000
```
