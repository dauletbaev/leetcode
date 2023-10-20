#!/bin/bash

separator="----------------------------------------"

for dir in */; do
    if [[ ! "$dir" =~ ^[0-9] ]]; then
        continue
    fi

    cd "$dir" || exit
    echo "Running $dir"
    echo "$separator"
    
    # run all .ts files using ts-node
    for file in *.ts; do
        npx ts-node "$file"
        echo "$separator"
    done

    for file in *.sh; do
        bash "$file"
        echo "$separator"
    done

    # exit the directory
    cd ..
done
