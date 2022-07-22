import http from "k6/http";
import { sleep, check } from "k6";
import aws4 from "../utils/aws4.js";

export const options = {
  vus: 1,
  duration: "5s",
};

const AWS_CREDS = {
  accessKeyId: "",
  secretAccessKey: "",
};

export default function () {
  const messageBody = JSON.stringify({
    name: "Nichollas",
    cpf: "082710133335",
  });

  const signedUrl = aws4.sign(
    {
      service: "sqs",
      region: "us-east-2",
      path: `/083537024163/new-people?Action=SendMessage&MessageBody=${messageBody}&Version=2012-11-05`,
    },
    AWS_CREDS
  );

  const res = http.get(`https://${signedUrl.hostname}${signedUrl.path}`, {
    headers: signedUrl.headers,
  });

  check(res, { "status was 200": (r) => r.status == 200 });

  sleep(1);
}
