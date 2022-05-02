# # Ex: TOKEN=tokengoeshere sh curl-scripts/movies/index.sh

TOKEN=""
NAME=""
STYLE=""
EMOTION=""
DATE=""

API="http://localhost:4741"
URL_PATH="/yogas"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
    --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}"
  --data '{
    "yogaName": "'"${yogaName}"'",
      "yogaStyle": "'"${yogaStyle}"'",
      "yogaEmotion": "'"${yogaEmotion}"'"
    }
  }'
echo



# curl "https://library-express-api.herokuapp.com/movies" \
#   --include \
#   --request GET \
#   --header "Content-Type: application/json" \
#   --header "Authorization: Bearer ${TOKEN}" \

# echo