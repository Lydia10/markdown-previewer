marked.setOptions({
    breaks: true
})

const renderer = new marked.Renderer();

function App(){
    const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Here's some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------- | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!

`;

       
const [text, setText] = React.useState(placeholder);
  return (
      <div className="text-center p-4" >
          <h1 className="p-4">Markdown Previewer</h1>
          <h3 className="mt-3">Editor</h3>
          <textarea id="text" onChange={(e)=>setText(e.target.value)} name="text" value={text} rows="5"></textarea>
          <h3 className="mt-3">Output</h3>
          <Preview markdown = {text} />
      </div>
  );
}

function Preview(props){
    return (
      <div id="preview" dangerouslySetInnerHTML={{ __html: marked(props.markdown, {renderer: renderer})}}></div>
    );   
}

ReactDOM.render(<App/>, document.getElementById("root"));