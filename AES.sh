:<<'COMMENT'

=== SCRIPT TO DECODE AES USING BASE64

COMMENT

#!/bin/bash
# Decode the key and IV from base64 and convert to hexadecimal
Key=$(echo -n "rMq6l4y9Z6LgZqaegMNu1Q==" | base64 -d -i | xxd -p)
IV=$(echo -n "bRcwPDxbYycCKV73GCoTKQ==" | base64 -d -i | xxd -p)

# Decrypt the ciphertext and store it in variabble we call it plaintext
plaintext=$(echo -n "cKrsgwM8W/Xem0+Do9FD6g==" | base64 -d -i | openssl enc -d -aes-128-cbc -K $Key -iv $IV)

# Prints the result on a new line by putting the \n
echo -e "Decrypted Text:\n$plaintext"