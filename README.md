# UniSax社内管理ツール

## 環境構築
### インストール
- [Git](https://git-scm.com/book/ja/v2/%E4%BD%BF%E3%81%84%E5%A7%8B%E3%82%81%E3%82%8B-Git%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB)
- [VSCode](https://code.visualstudio.com/download)
    - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
    - [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)
    - [HashiCorp Terraform](https://marketplace.visualstudio.com/items?itemName=HashiCorp.terraform)
    - [Japanese Language Pack for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-ja)
    - [Local History](https://marketplace.visualstudio.com/items?itemName=xyz.local-history)
    - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Volta](https://docs.volta.sh/guide/getting-started)

### AWSアカウント情報
```
$ cat << EOS >> ~/.aws/credentials
[seminars-terraform]
aws_access_key_id = #AWSのアクセスキー
aws_secret_access_key = #AWSのシークレットアクセスキー
EOS
```

### Terraform
```
$ cd #Githubからダウンロードしたディレクトリ
$ cd terraform
# !!! ソースコード内の全ての「YOURNAME」を自分の名前に置換してください !!!
$ terraform init
$ terraform apply -auto-approve # 1回目はエラー終了するので、もう一度実行してください
```

### ローカル環境
```
$ cd #Githubからダウンロードしたディレクトリ
$ cat << EOS >> web/.env
REACT_APP_GRAPHQL_API_URL=#AWS consoleから取得したAPI URL
REACT_APP_GRAPHQL_API_KEY=#AWS consoleから取得したAPI key
VITE_GRAPHQL_API_URL=#AWS consoleから取得したAPI URL
VITE_GRAPHQL_API_KEY=#AWS consoleから取得したAPI key
EOS
$ volta install npm@9.4.2
$ volta pin npm@9.4.2
$ volta install node@18.14.0
$ volta pin node@18.14.0
$ volta install yarn@1.22.19
$ volta pin yarn@1.22.19
$ npm install
$ cd web
$ yarn install
$ yarn dev # コマンドラインに表示されたURLでローカルの画面が表示されることを確認
```
