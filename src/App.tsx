import "./App.css";
import LanguageSelect from "./components/UI/LanguageSelect/LanguageSelect";
import SignInBtn from "./components/UI/SignIn/SignIn";

function App() {
  return (
    <div>
      <h2>NETFLIX SANS</h2>
      <LanguageSelect id="nav_lang_select" classes="" />
      <SignInBtn classes="" type="button"/>
    </div>
  );
}

export default App;
