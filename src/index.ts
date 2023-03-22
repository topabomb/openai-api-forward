import restana from 'restana';
import cors from 'cors';
import fast_proxy from 'fast-proxy-lite';
import pump from 'pump';
const proxy = fast_proxy({
  base: 'https://api.openai.com/',
});
const service = restana();
service.use(cors());
const port = 3000;
// eslint-disable-next-line @typescript-eslint/require-await
service.all('/v1/*', async (req, res) => {
  proxy.proxy(req, res, req.url!, {
    onResponse: (f_req, f_res, f_stream) => {
      pump(f_stream, f_res, (e) => {});
    },
  });
});
console.log(`listening on ${port}`);
void service.start(port);
