import Button from "./Button";
import { GoBell , GoCloudDownload, GoDatabase } from 'react-icons/go';

function App() {

  return (
    <div>
       <div>
        <Button success rounded outline >
          <GoBell />
          Click Me!!</Button> {/* text btw custom component is taken as value and added to the key named '{children}' by default as per JSX rule so we can use this prop children and can use it in parent component*/}
       </div>
       <div>
        <Button danger outline>
          <GoCloudDownload/>
          Buy Now!</Button> {/* here as we know that these props are boolean so either T/F so when ever we mention the any prop in component means it is 'true' i.e, {primary:true}  */}
       </div>
       <div>
        <Button warning outline>
          <GoDatabase />
          See Deal</Button> {/*so in JSX we simply need to pass the prop as it is but not with T/F value, if the prop is false then it will be considered as 'undefined' but not as 0*/}
       </div>
       <div>
        <Button secondary outline>Hide ads!</Button>
       </div>
       <div>
        <Button danger outline>Something</Button>
       </div>
    </div>
  );
}

export default App;
