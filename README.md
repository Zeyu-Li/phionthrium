# Phionthrium

[![banner](banner.png)](https://phionthrium.vercel.app/)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Phionthrium allows you to fund your favorite open source projects through a series of unimplemented Ethereum smart contracts. As a creator, after signing up you can redeem your funds monthly as curious consumers pledge their hard-earned Ethereum, the Robux of the future.

## Screenshots

![screen1](screen1.png)

![screen3](screen3.png)

![screen4](screen4.png)

![screen2](screen2.png)



## Smart Contract/Blockchain

Using [Solana](https://docs.solana.com/) 

Smart contract: https://github.com/KolbyML/Phionthrium/blob/main/contracts/Phionthrium.sol



Dev environment (Hardhat 3, Node 22.10+):

```shell
yarn install
yarn hardhat accounts
yarn hardhat compile
yarn hardhat clean
yarn hardhat test
yarn hardhat node
yarn hardhat run scripts/deploy.js
yarn hardhat help
```

## 

## Backend

Python Flask

using venv `phionthrium\Scripts\activate`, then `pip install -r requirements.txt` (Python 3.10+)

Deleting entries requires the `MASTER_KEY` environment variable; the endpoint refuses every delete when it is unset.

### Dependencies

- Flask
- Flask-CORS

## Front end

A React frontend

[Figma link](https://www.figma.com/file/AvHAIEKiN7gMtnP1KvzkJO/Crypto-Bros?node-id=0%3A1)

### Dependencies

- React

## Team 👨‍👨‍👦‍👦

- [Ben Wang](https://github.com/Xiaoyu-Ben-Wang)
- [Andrew Li](https://github.com/Zeyu-Li)
- [Dan Seliayeu](https://github.com/seliayeu)
- [Kolby ML](https://github.com/KolbyML)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
