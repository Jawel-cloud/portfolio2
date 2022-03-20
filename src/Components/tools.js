const Tools = () => {
    const tools = [
        {nameClass:'tool-react', name:'React', version:'16.6.3' },
        {nameClass:'tool-webpack', name:'Webpack', version:'4.19.1' },
        {nameClass:'tool-express', name:'Express', version:'4.16.4' },
        {nameClass:'tool-styled', name:'Styl.Comp.', version:'4.16.4'},
        {nameClass:'tool-redux', name:'Redux', version:'4.01' },
        {nameClass:'tool-flexbox', name:'Flexbox', version:'4.01' },
        {nameClass:'tool-program1', name:'Program', version:'5.2.1' },
        {nameClass:'tool-program2', name:'Program', version:'5.2.2' },
    ];
    const myTools = tools.map(tool=>{
        return(
            <div className={tool.nameClass}>
                    <p>{tool.name}</p>
                    <p>{tool.version}</p>
            </div>
        )
    })
    return (
        <div>
            <div id="tolWr" class="tools-wrapper">
            <h2>&#47;&#47; Tools</h2>
            <p class="description">My essentials</p>
            <div class="tools">
                {myTools}
            </div>
        </div>
        </div>
    );}
export default Tools;