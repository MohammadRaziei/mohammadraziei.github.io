#!/bin/bash

# Input file containing paths and URLs
input_file="urls.txt"
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
    # Skip empty lines or lines that start with #
    if [ -z "$path" ] || [[ "$path" == \#* ]]; then
        continue
    fi

    # Create the directory if it doesn't exist
    mkdir -p "$(dirname "$path")"

    # Download the file to the specified path
    wget -O "$path" "$url"

done < "$input_file"