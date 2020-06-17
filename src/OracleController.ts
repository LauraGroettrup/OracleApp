export class OracleController {
  public giveYNAnswer(): string {
    if (Math.random() > 0.5) {
      return "JA!";
    } else {
      return "NEIN!";
    }
	
	return Math.random()>0.5 ? "Yes" : "No"
  }
  
  public giveFoodAnswer(): string {
    let foodArray = [
      "https://images.eatsmarter.de/sites/default/files/styles/450x338/public/kartoffel-gemuese-auflauf-338647.jpg",
      "https://www.seriouseats.com/images/2015/07/20150728-homemade-whopper-food-lab-35.jpg",
      "https://biancazapatka.com/wp-content/uploads/2019/03/coconut-curry-sweet-potato-chickpea-creamy-vegan-recipe-easy-quick-healthy-glutenfree-broccoli-kichererbsen-suesskartoffel-rezept-720x1008.jpg",
      "https://images-gmi-pmc.edge-generalmills.com/3c81dd0d-0334-46ce-8e4d-bd23a3ad1f81.jpg",
      "https://media.timeout.com/images/101629097/image.jpg",
    ];
    const foodNumber = Math.floor(Math.random() * foodArray.length);
    return foodArray[foodNumber];
  }
}
