# cloud-function-echo-line-bot
Echo LINE bot on Google Cloud Function 

## Usage

create `.env` file

```
CHANNEL_ACCESS_TOKEN="XXXXX"
CHANNEL_SECRET="YYYYY"
```

deploy using gcloud command

```
$ gcloud beta functions deploy echo-bot --stage-bucket hoge-bucket --trigger-http --entry-point handler
```
