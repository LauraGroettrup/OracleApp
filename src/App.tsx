import {
  contentView,
  NavigationView,
  Page,
  TextView,
  Button,
  StackLayout,
  Composite,
  TextInput,
  ImageView,
} from "tabris";
import { OracleController } from "./OracleController";

export class App {
  private oracle = new OracleController();

  public start() {
    contentView.append(
      <$>
        <NavigationView stretch>
          <Page
            title="Oracle Chooser"
            autoDispose={false}
            layout={new StackLayout({ spacing: 10, alignment: "centerX" })}
          >
            <TextView
              right={0}
              left={0}
              top={50}
              alignment="centerX"
              text="Willkommen Sterblicher. Wähle, welches Orakel du heute in Anspruch nehmen möchtest:"
            />
            <Button
              text="Jein Orakel"
              top={50}
              onTap={() => this.loadYNPage()}
            />
            <Button text="Essens Orakel" onSelect={() => this.loadFoodPage()} />
          </Page>
        </NavigationView>
      </$>
    );
  }

  private loadYNPage() {
    const navigationView = $(NavigationView).only();
    let question = "";
    navigationView.append(
      <Page
        id="YNOracle"
        title="Jein Orakel"
        autoDispose={false}
        layout={new StackLayout({ spacing: 10, alignment: "centerX" })}
      >
        <TextView
          right={0}
          left={0}
          top={50}
          alignment="centerX"
          text="Stelle deine Frage und erhalte vielleicht die einzig wahre Antwort."
        />
        <TextInput
          left={16}
          right={16}
          message="Gebe hier deine Frage ein."
          onInput={(event) => (question = event.text)}
          onAccept={(event) =>
            this.showResult(event.target.parent(), event.text)
          }
        />
        <Button
          text="Befrage das Orakel"
          top={50}
          onTap={(event) => this.showResult(event.target.parent(), question)}
        />
        <TextView right={0} left={0} top={50} alignment="centerX" text="" />
      </Page>
    );
  }

  private loadFoodPage() {
    const navigationView = $(NavigationView).only();
    navigationView.append(
      <Page
        id="FoodOracle"
        title="Essens Orakel"
        autoDispose={false}
        layout={new StackLayout({ spacing: 10, alignment: "centerX" })}
      >
        <TextView
          right={0}
          left={0}
          top={50}
          alignment="centerX"
          text="Ich hatte heute Nacht eine Vision von deinem Mittagessen, soll ich sie mit dir teilen?"
        />
        <Button
          text="Ja bitte!"
          top={50}
          onTap={(event) => this.showResult(event.target.parent())}
        />
        <ImageView
          scaleMode="fit"
          right={0}
          left={0}
          top={20}
          bottom={20}
        ></ImageView>
      </Page>
    );
  }

  private showResult(view: Composite, question?: string) {
    const oracleType = view.id;
    switch (oracleType) {
      case "YNOracle": {
        let resultView: TextView = view.find(TextView).last();
        resultView.text = `Die Antwort auf deine Frage "${question}" ist: ${this.oracle.giveYNAnswer()}`;
        break;
      }
      case "FoodOracle": {
        let resultView: ImageView = view.find(ImageView).last();
        resultView.image = this.oracle.giveFoodAnswer();
        break;
      }
    }
  }
}
