## OpenAI Forward Service [中文文档](README_CN.MD)

can be achieved with just over 20 lines of code：

- Forward any request to the API endpoint of OpenAI, with the forwarding path being https://api.openai.com/.
- This service is deployed on a web server on the Internet, which forwards requests on a specified port to OpenAI. Theoretically, this forwarding mechanism can help to connect to the OpenAI API.
- This service only performs data forwarding and does not involve any processing of private data.
- It can be compiled into a binary executable file that does not require any environment dependencies.

## Installation

> Node.js environment needs to be installed locally.

```
npm install
```

## Run

```shell
npm run start
```

## Compile to executable file (win64)

```
npm run pkg:win
```

## Compile to executable file (linux64)

```
npm run pkg:linux
```
