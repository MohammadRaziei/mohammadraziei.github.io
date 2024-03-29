#!/bin/bash

# Input file containing paths and URLs
input_file="urls.conf"
## looks like below:
## urls.txt
# 1x.png https://cdn.soft98.ir/Google%20Chrome.png
# 2x.jpg https://cdn.soft98.ir/BurnAware.jpg
##########


# Check if the input file exists
if [ ! -f "$input_file" ]; then
    echo "Input file not found: $input_file"
    exit 1
fi

# Read the input file line by line
while IFS=' ' read -r path url
do
    # Trim CR and LF characters from path and url variables
    path=$(echo "$path" | tr -d '\r\n')
    url=$(echo "$url" | tr -d '\r\n')

    # Skip empty lines or lines that start with #
    if [ -z "$path" ] || [[ "$path" == \#* ]]; then
        continue
    fi

    # Ignore the existed path
    if [ -e "$path" ]; then
        continue
    fi

    # Create the directory if it doesn't exist
    mkdir -p "$(dirname "$path")"

    # Download the file to the specified path
    echo -e "=====================\nDownloading into '$path'"
    wget -O  "$path" "$url" -T 5

done < "$input_file"