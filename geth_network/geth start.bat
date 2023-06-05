@echo off
start geth --datadir ./ --networkid 15 --http --http.api "web3,eth,personal,admin,net,miner" --http.corsdomain "*" --allow-insecure-unlock --signer \\.\pipe\clef.ipc
start geth attach \\.\pipe\geth.ipc
