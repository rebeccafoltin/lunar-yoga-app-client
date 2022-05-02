# Ex: TOKEN=tokengoeshere ID=idgoeshere sh curl-scripts/movies/show.sh

curl "https://library-express-api.herokuapp.com/movies/${ID}" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \

echo