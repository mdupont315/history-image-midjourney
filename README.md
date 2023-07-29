# midjourney-ui

Midjourney UI is an open source txt2img UI for AI draw

## Deploy

#### Docker

```bash
docker run --env-file .env -p 3000:3000 Senguly/history-image-midjourney
```
or
```bash
docker run -e SALAI_TOKEN=xxxxxxxx  -e SERVER_ID=xxxxxxxx -e CHANNEL_ID=xxxxxxxx -p 3000:3000 Senguly/history-image-midjourney
```

## Runnning locally

1. clone the repo

```bash
git clone https://github.com/Senguly/history-image-midjourney.git
cd history-image-midjourney
```

2. install dependencies

```bash
npm install
```

or

```bash
yarn
```

3. set the environment variables  
 [How to get your Discord SALAI_TOKEN](https://www.androidauthority.com/get-discord-token-3149920/)  
 [How to HUGGINGFACE_TOKEN](https://huggingface.co/docs/hub/security-tokens)  
 
```bash
export SALAI_TOKEN=xxxxxxxx
export SERVER_ID=xxxxxxxx
export CHANNEL_ID=xxxxxxxx
export HUGGINGFACE_TOKEN=xxx

```

4. run the development server

```bash
npm run dev
```

or

```bash
yarn dev
```

5. open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Route map

- [x] imagine
- [x] upsclae & variation
- [ ] prompt help
- [ ] chatgpt prompt generation
- [ ] history of generated images
