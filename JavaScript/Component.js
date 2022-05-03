class Component{
    constructor(id, opts = {name, data: []}) {
        this.container = document.getElementById(id);
        this.options = opts;
        this.container.innerHTML = this.render(opts.data);
    }
    registerPlugins(...plugins) { 
        plugins.forEach( plugin => {
            const pluginContainer = document.createElement( 'div');
            pluginContainer.className = `${name}__plugin`;
            pluginContainer.innerHTML = plugin.render(this.options.data);
            this.container.appendchild(pluginContainer);

            plugin.action(this);
        });
    }
    render(data) {
        /* abstract */
        return ''
    }
}
    