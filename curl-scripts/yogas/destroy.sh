# # Ex: ID=idgoeshere TOKEN=tokengoeshere sh curl-scripts/movies/destroy.sh

#!/bin/bash

TOKEN="4d15a4b3f0a7bf87238ba866bde1e5be"
ID="62706e1c4a4662016cf3946a"

API="http://localhost:4741"
URL_PATH="/yogas"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}"
  --data '{
    "yogaName": "'"${yogaName}"'",
      "yogaStyle": "'"${yogaStyle}"'",
      "yogaEmotion": "'"${yogaEmotion}"'"
    }
  }'

echo


# curl "https://library-express-api.herokuapp.com/movies/${ID}" \
#   --include \
#   --request DELETE \
#   --header "Authorization: Bearer ${TOKEN}" \

# echo