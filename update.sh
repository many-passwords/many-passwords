README="README.md"
PASSWORDS="passwords.csv"

echo "Sorting and remove duplicates of passwords..."
cp ${PASSWORDS} ${PASSWORDS}2
cat ${PASSWORDS}2 | (sed -u 1q; sort -u) > $PASSWORDS
rm ${PASSWORDS}2

echo "Counting passwords..."
WORD_COUNT=$(($(cat $PASSWORDS | wc -l) - 1))

echo "Updating README.md"
sed -i -E "s/(Number of collected default passwords: \`\`).*(\`\`\. )/\1$(echo $WORD_COUNT)\2/" README.md

echo "Setting Empty Username and Passwords Fields to <blank>"
awk -F "," -v OFS=',' '$5 == "" { $5 = "<blank>" } $6 == "" { $6 = "<blank>" }1' passwords.csv > tmp.csv && mv -f tmp.csv passwords.csv

echo "done."
