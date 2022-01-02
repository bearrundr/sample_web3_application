import { Navbar, Welcome, Footer, Services, Transactions } from './components';

// const App = () => {

//   return (
//     <div className="App">
//       <h1 class="text-3xl font-bold underline">
//         Hello world!
//       </h1>
//     </div>
//   )
// }

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App;
