# # Ex: TOKEN=tokengoeshere sh curl-scripts/movies/index.sh

TOKEN="e7743b1050bbdc3c36756aba9ebc74c0"

API="http://localhost:4741"

URL_PATH="/yogas"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
    --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}"
echo



# curl "https://library-express-api.herokuapp.com/movies" \
#   --include \
#   --request GET \
#   --header "Content-Type: application/json" \
#   --header "Authorization: Bearer ${TOKEN}" \

# echo[](../../lib/get-form-fields.js)