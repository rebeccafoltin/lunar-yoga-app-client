# # Ex: TOKEN=tokengoeshere ID=idgoeshere TITLE=titlegoeshere DIRECTOR=joeshmoe sh curl-scripts/movies/update.sh

TOKEN="e7743b1050bbdc3c36756aba9ebc74c0"

API="http://localhost:4741"

URL_PATH="/yogas"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "yogaName": "'"${yogaName}"'",
      "yogaStyle": "'"${yogaStyle}"'",
      "yogaEmotion": "'"${yogaEmotion}"'"
    }
  }'
echo

# curl "https://library-express-api.herokuapp.com/movies/${ID}" \
#   --include \
#   --request PATCH \
#   --header "Content-Type: application/json" \
#   --header "Authorization: Bearer ${TOKEN}" \
#   --data '{
#     "movie": {
#       "title": "'"${TITLE}"'",
#       "director": "'"${DIRECTOR}"'"
#     }
#   }'

#   echo