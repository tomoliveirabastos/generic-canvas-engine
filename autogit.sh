dt=$(date)
npm run format
git add . && git commit -m "commit via script $dt" && git push