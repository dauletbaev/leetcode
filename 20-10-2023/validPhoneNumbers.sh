#!/bin/bash

# https://leetcode.com/problems/valid-phone-numbers/description/

echo "193. Valid Phone Numbers [shell script]"
echo ""

grep -Eo '^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$' file.txt
