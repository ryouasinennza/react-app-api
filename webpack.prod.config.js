const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  // webpackのconfig内のファイルパスの基準となるディレクトリを絶対パスで指定できます
  context: path.resolve(__dirname),
  // バンドルプロセスを開始する場所(最初に読まれるjsファイルを指定）
  entry: './src/index.js',
  // ビルドされたファイルの出力先
  output: {
    // ビルドされたファイル名を指定できます
    // filename: '[name]-[hash].js', // ハッシュを含めた名前にできたりします
    filename: 'main.js',
    // ビルドされたファイル名の置き場所
    path: path.resolve(__dirname, './dist'),
  },
  // 解決 名前解決などの設定
  resolve: {
    // エイリアスの設定
    alias: {
      // partsのエイリアス
      parts: path.resolve(__dirname, 'src/parts/'),
      // apiのエイリアス
      expressApi: path.resolve(__dirname, 'src/expressApi/'),
    },
  },
  // モジュールの読み込み
  module: {
    // 複数のモジュールの読み込みルールを配列で渡します ここではローダーの設定をしています
    rules: [
      {
        // ローダーの処理対象ファイル拡張子
        test: /\.(js|jsx)$/,
        // ローダーの処理対象から外すディレクトリ
        exclude: /node_modules/,
        use: {
          // 利用するローダー
          loader: "babel-loader",
          // オプション
          options: {
            // .babelrc をここに書くことができる .babelrcについては調べてください
            presets: [
              "@babel/preset-env",
              "@babel/react",
            ],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
      {
        // ローダーの処理対象ファイル拡張子
        test: /\.html$/,
        use: [
          {
            // 利用するローダー
            loader: "html-loader",
          },
        ],
      },
      {
        // ローダーの処理対象ファイル拡張子
        test: /\.css/i,
        use: [
          // linkタグにcssを展開する機能
          "style-loader",
          {
            // cssをjsにバンドルする
            loader: "css-loader",
            options: {
              // imageのurl解決 しない
              url: false,
              // css modules ON
              modules: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // htmlを作るプラグイン
    new HtmlWebPackPlugin({
      template: "src/index.html",
    }),
  ],
};