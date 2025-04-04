
import { Summary } from "./components/Summary";
import { HomeContainer } from "./styles";
import { Issues } from "./components/Issues";
import { IssuesAside } from "./styles";
import { SearchBar } from "./styles";

export function Home() {

  return (
    <HomeContainer>
      <Summary />
      <SearchBar>
        <input type="text" />
      </SearchBar>
      <IssuesAside>
        <Issues />
      </IssuesAside>
      
    </HomeContainer>
  );
}
