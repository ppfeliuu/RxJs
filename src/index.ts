import { throwError } from "rxjs";

const url = "https://api.github.com/users?per_page=5";

const manejaErrores = (response: Response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response;
};

const fetchPromesa = fetch(url);

fetchPromesa
  .then(manejaErrores)
  .then((res) => res.json())
  .then((data) => console.log("data", data))
  .catch((err) => console.warn(err));
