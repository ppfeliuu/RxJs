import { ajax } from "rxjs/ajax";

const url = "https://httpbin.org/delay/1";

/* ajax
  .put(
    url,
    {
      id: 1,
      nombre: "Pedro",
    },
    { "mi-token": "abc123" }
  )
  .subscribe(console.log); */

ajax({
  url,
  method: "POST",
  headers: {
    "mi-token": "abc123",
  },
  body: {
    id: 1,
    nombre: "Pedro",
  },
}).subscribe(console.log);
