# # Ex: ID=idgoeshere TOKEN=tokengoeshere sh curl-scripts/movies/destroy.sh

#!/bin/bash

# TOKEN=""
# NAME=""
# STYLE=""
# EMOTION=""
# DATE=""


API="http://localhost:4741/"
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