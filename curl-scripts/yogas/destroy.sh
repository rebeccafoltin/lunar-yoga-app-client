# # Ex: ID=idgoeshere TOKEN=tokengoeshere sh curl-scripts/movies/destroy.sh

#!/bin/bash

TOKEN="e7743b1050bbdc3c36756aba9ebc74c0"

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