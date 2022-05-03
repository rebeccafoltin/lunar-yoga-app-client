# # Ex: TOKEN=tokengoeshere sh curl-scripts/movies/index.sh

TOKEN="57caee8b3bfe0a385ed9c71e89d5ee9e"

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