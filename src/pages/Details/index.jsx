import { Container, Links } from "./styles"
import { Header } from "../../Components/Header"
import { Button } from "../../Components/Button"
import { Section } from "../../Components/Section"

export function Details(){
  return (
    <Container>
      <Header />
      <Section title="Links úteis">
        <Links>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
        </Links>
      </Section>

      <Section title="Marcadores">
        
      </Section>
      <Button title="Voltar"/>
    </Container>
  )
}