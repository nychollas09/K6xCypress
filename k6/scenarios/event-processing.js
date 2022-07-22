import http from "k6/http";
import { check, sleep } from "k6";

const BASE_URL =
  "https://3s3780ve08.execute-api.us-east-2.amazonaws.com/default/api-producer";

export default function () {
  const res = http.post(
    BASE_URL,
    JSON.stringify({ name: "Nichollas", cpf: "082710133335" })
  );
  check(res, { "status was 200": (r) => r.status == 200 });
  sleep(1);
}
