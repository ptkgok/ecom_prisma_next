export interface IMercadoPagoClient {
  url: string;
  headers?: any;
  body?: any;
  method?: string;
  mode?: "cors" | "no-cors";
}

export function MercadoPagoClient({
  url,
  headers,
  body,
  method,
  mode,
}: IMercadoPagoClient) {
  return fetch("https://api.mercadopago.com/" + url, {
    method: method || "GET",
    headers: {
      Authorization: `Bearer TEST-6748496974135752-090706-37b7227f892c67e19223ae9cab5ccaba-386575236`,
    },
    body: JSON.stringify(body),
    mode: mode,
  })
    .then((response) => {
      console.log(response);
      response.json();
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
}
