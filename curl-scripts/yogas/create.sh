# # # Ex: TOKEN=tokengoeshere TITLE=titlegoeshere DIRECTOR=joeshmoe sh curl-scripts/movies/create.sh

TOKEN="1b226c86d26a6544f0fb7af289e777ab"
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