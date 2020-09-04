Hooks.once('init', () => {
	if(typeof Babele !== 'undefined') {
		Babele.get().register({
			module: 'dnd5e-babele-es',
			lang: 'es',
			dir: 'compendium'
		});
	}
}); 
