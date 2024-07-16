# Ccreator Solana Helper API
Welcome to the Ccreator Solana Helper API! This public API is designed to provide various helper for working with Solana blockchain data, with a focus on ease of maintenance and scalability. Initially, we are offering Base58 encoding and decoding functionalities. In the future, we plan to expand this API with additional features and tools to assist developers and users working with Solana.

[Web: Coin Creator ccreator.io](https://www.ccreator.io)

[Telegram: CoinCreator Solana Token Genrator](https://t.me/ccreatorio)


#### Endpoints Base58
- Base58 Encode (POST): https://solana-helper.vercel.app/base58/encode
- Base58 Encode (GET): https://solana-helper.vercel.app/base58/encode?data=your_data
- Base58 Decode (POST): https://solana-helper.vercel.app/base58/decode
- Base58 Decode (GET): https://solana-helper.vercel.app/base58/decode?data=your_encoded_data

# Current Features

#### Base58 Encoding
We provide endpoints to encode data using the Base58 encoding scheme, which is commonly used in blockchain applications.
#### Base58 Decoding
We provide endpoints to decode data using the Base58 encoding scheme, which is commonly used in blockchain applications.

# Ads - Make your airdrop on Solana with ccreator.io
[Web: Coin Creator ccreator.io](https://www.ccreator.io)
![alt text](https://pbs.twimg.com/profile_banners/1780656918370893825/1720434410/1500x500)


# Endpoints
# POST /base58/encode
Encodes a given string into Base58.
Request Body:
```json
{
  "data": "string_to_encode"
}
```
Response:
```json
{
  "encoded": "base58_encoded_string"
}
```
# GET /base58/encode
Encodes a given string into Base58.
Query Parameters:
data - The string to encode.
Response:
```json
{
  "encoded": "base58_encoded_string"
}
```

# POST /base58/decode
Decodes a Base58 encoded string back to its original form.
Request Body:
```json
{
  "data": "base58_encoded_string"
}
```

Response:
```json
{
  "decoded": "original_string"
}
```

# GET /base58/decode

Decodes a Base58 encoded string back to its original form.

Query Parameters:
data - The Base58 encoded string to decode.
Response:
```json
{
  "decoded": "original_string"
}
```

# Contributing
We welcome contributions from the community! If you have any suggestions, bug reports, or want to contribute code, please open an issue or submit a pull request on our GitHub repository.

# License
This project is licensed under the MIT License - see the LICENSE file for details.

# Contact
For any questions or support, please contact our team at r@tkns.dev

# Example
curl -X POST http://solana-helper.vercel.app/base58/encode -H "Content-Type: application/json" -d '{"data": "ccreator.io"}'
](https://t.me/ccreator_sol)
