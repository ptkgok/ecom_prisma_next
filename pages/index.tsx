import { MercadoPagoClient } from "@utils/mercado_pago_client";
import axios from "axios";
import type { NextPage } from "next";
import { useEffect } from "react";

const Home: NextPage = () => {
  const customer: CustumersMP.RootObject = {
    email: "jhon@doe.com",
    first_name: "Jhon",
    last_name: "Doe",
    phone: {
      area_code: 55,
      number: 991234567,
    },
    identification: {
      type: "CPF",
      number: 12345678900,
    },
    default_address: "Home",
    address: {
      id: "123123",
      zip_code: "01234567",
      street_name: "Rua Exemplo",
      street_number: 123,
    },
    date_registered: new Date("2021-10-20T11:37:30.000-04:00"),
    description: "Description del user",
    default_card: "None",
    cards: [],
    addresses: [],
    live_mode: false,
  };

  useEffect(() => {
    (async () => {
      try {
        const data = axios.get(
          "https://api.mercadopago.com/v1/identification_types",
          {
            headers: {
              Authorization:
                "Bearer TEST-6748496974135752-090706-37b7227f892c67e19223ae9cab5ccaba-386575236",
            },
          }
        );
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <div>
      <div>aaa</div>
      <button>Adicionar</button>
    </div>
  );
};

export default Home;
