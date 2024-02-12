const heading = React.createElement(
    "h1",  //tag name
     {id :"heading"}, //attributes
      "hello world from react" //content
      );

      console.log(heading)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)