import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const texto = document.createElement("div");
texto.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur ante et nisi efficitur, sed venenatis nunc volutpat. Duis pellentesque elementum lacinia. Sed eget mauris accumsan, elementum libero ut, dictum dolor. Vestibulum condimentum sem sed consequat aliquam. Aenean orci nunc, laoreet sit amet vulputate in, egestas sit amet diam. Aenean vel risus dictum, maximus elit non, pellentesque mauris. Mauris quis neque eu odio finibus consectetur. Sed ut pharetra odio. Sed rutrum dignissim sem, ut cursus eros accumsan sed. Nullam tincidunt nulla fermentum, cursus tellus a, euismod est. Nunc porta leo quis condimentum congue. Cras ultricies odio eget odio volutpat, sed bibendum justo consectetur. Nam eget enim massa.
<br><br>
Donec vitae volutpat est. Praesent id sodales eros, vel vehicula arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut vel tempor lectus. Praesent auctor tempus vehicula. Morbi convallis pharetra velit, nec commodo lectus dignissim sed. Duis accumsan sollicitudin sem, eget luctus ligula ultricies nec. Sed eu elit a ante tincidunt tincidunt. Sed ac dictum ante. Morbi tempor tincidunt justo, vitae placerat enim blandit commodo. Vestibulum at augue dignissim, tincidunt magna a, luctus urna. Aliquam ac arcu ac erat posuere egestas at in enim. Phasellus rhoncus tempor ex. Cras semper et leo vel eleifend.
<br><br>
Fusce egestas finibus mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris tempor quam at ex eleifend sollicitudin. Donec pulvinar tincidunt augue eget ultrices. Pellentesque viverra odio est, nec rutrum dui auctor quis. Proin hendrerit sem id ex auctor pellentesque. Phasellus vitae hendrerit diam. Phasellus quis tincidunt nulla, ac auctor turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed lobortis odio placerat sollicitudin pharetra. Fusce ornare sem justo, et commodo felis mollis vitae. Sed congue tincidunt ipsum non accumsan. Sed nec ex orci.
<br><br>
Nam eros enim, finibus id felis ac, viverra blandit augue. Ut dapibus, augue at lacinia suscipit, justo nibh rutrum erat, nec placerat leo felis quis urna. Nunc vitae mauris in diam pellentesque tincidunt. Phasellus et mi purus. Mauris quis convallis augue, vel porta leo. Integer dignissim facilisis sollicitudin. Ut hendrerit et nisl in dapibus. Proin pellentesque diam urna, at tristique est mollis quis. Proin porttitor turpis condimentum tortor dapibus molestie. Praesent vitae arcu vel tortor efficitur cursus. Morbi auctor fermentum elit eu faucibus.
<br><br>
Nam volutpat feugiat purus fermentum sodales. Aenean mauris leo, posuere vel massa a, convallis cursus arcu. Maecenas mollis interdum dignissim. Fusce eget nibh iaculis, accumsan magna in, finibus tellus. Morbi tristique lectus non nibh fermentum placerat. Vestibulum tempus lacus massa, a congue nisi porttitor sit amet. Aenean sed sagittis ipsum. Suspendisse feugiat eget purus at finibus. Donec lobortis finibus neque non scelerisque. Curabitur consequat justo in efficitur commodo.`;

const body = document.querySelector("body");
body.append(texto);

const progressBar = document.createElement("div");
progressBar.setAttribute("class", "progress-bar");

body.append(progressBar);

//funcion calcula scroll height
const calcularPorcentajeScroll = (event) => {
  const {
    scrollTop,
    scrollHeight,
    clientHeight,
  } = event.target.documentElement;

  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

//Streams
const scroll$ = fromEvent(document, "scroll");
// scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
  //map((event) => calcularPorcentajeScroll(event))
  map(calcularPorcentajeScroll),
  tap(console.log)
);

progress$.subscribe((porcentaje) => {
  progressBar.style.width = `${porcentaje}%`;
});
