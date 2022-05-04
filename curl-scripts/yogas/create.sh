# # # Ex: =tokengoeshere TITLE=titlegoeshere DIRECTOR=joeshmoe sh curl-scripts/movies/create.sh

TOKEN="e7743b1050bbdc3c36756aba9ebc74c0"

NAME="rebecca"
STYLE="restorative"
EMOTION="neutral"
DATE="5/1/22"

API="http://localhost:4741"
URL_PATH="/yogas"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    yoga:{
    "yogaName": "'"${NAME}"'",
      "yogaStyle": "'"${STYLE}"'",
      "yogaEmotion": "'"${EMOTION}"'"
    }
  }'
  
echo
# curl "https://library-express-api.herokuapp.com/movies" \
#   --include \
#   --request POST \
#   --header "Content-Type: application/json" \
#   --header "Authorization: Bearer ${TOKEN}" \
#   --data '{
#     "movie": {
#       "title": "'"${TITLE}"'",
#       "director": "'"${DIRECTOR}"'"
#     }
#   }'

# echo