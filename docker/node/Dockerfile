# 使用するベースイメージを指定
FROM node:20.10.0-slim
ENV TZ Asia/Tokyo

WORKDIR /node

RUN apt-get update \
    && apt-get install -y

# プロジェクトの依存関係をインストール
COPY front/package*.json ./
RUN npm install

# プロジェクトファイルをコピー
COPY front/. .

# ポート番号を公開
#EXPOSE 3000
ENV HOST 0.0.0.0

# 開発モードでアプリケーションを起動
CMD ["npm", "run", "dev"]

