import Header from "../components/Header/Header";
import { StyledLink } from "../components/Link/Link.styles";

export default function Home() {
  return (
    <div style={{textAlign: "center"}}>
      <Header title='Budget.' text='Use our online calculator to create expense budgets. Fill in the form by selecting the options you want, save your budget and organize them.'/>
      <StyledLink to={'budget'}> Try it out</StyledLink>
    </div>
  )
}
