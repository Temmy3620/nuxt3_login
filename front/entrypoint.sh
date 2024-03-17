#!/bin/sh
 
rm -rf package-lock.json
 
# パッケージのインストール
npm i
 
# npm run dev を実行
npm run dev