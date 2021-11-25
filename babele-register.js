var types = {
	"aberration (shapechanger)":"Aberración (cambiaformas)",
	"aberration":"Aberración",
	"beast":"Bestia",
	"celestial (titan)":"Celestial (titán)",
	"celestial":"Celestial",
	"construct":"Autómata",
	"dragon":"Dragón",
	"elemental":"Elemental",
	"fey":"Feérico",
	"fiend (demon)":"Infernal (demonio)",
	"fiend (demon, orc)":"Infernal (demonio, orco)",
	"fiend (demon, shapechanger)":"Infernal (demonio, cambiaformas)",
	"fiend (devil)":"Infernal (diablo)",
	"fiend (devil, shapechanger)":"Infernal (diablo, cambiaformas)",
	"fiend (gnoll)":"Infernal (gnoll)",
	"fiend (shapechanger)":"Infernal (cambiaformas)",
	"fiend (yugoloth)":"Infernal (yugoloth)",
	"fiend":"Infernal",
	"giant (cloud giant)":"Gigante (Gigante de las nubes)",
	"giant (fire giant)":"Gigante (Gigante de fuego)",
	"giant (frost giant)":"Gigante (Gigante de hielo)",
	"giant (hill giant)":"Gigante (Gigante de las colinas)",
	"giant (stone giant)":"Gigante (Gigante de piedra)",
	"giant (storm giant)":"Gigante (Gigante de las tormentas)",
	"giant":"Gigante",
	"humanoid (aarakocra)":"Humanoide (aarakocra)",
	"humanoid (any race)":"Humanoide (cualquier raza)",
	"humanoid (bullywug)":"Humanoide (bullywug)",
	"humanoid (dwarf)":"Humanoide (enano)",
	"humanoid (elf)":"Humanoide (elfo)",
	"humanoid (firenewt)":"Humanoide (tritón de fuego)",
	"humanoid (gith)":"Humanoide (gith)",
	"humanoid (gnoll)":"Humanoide (gnoll)",
	"humanoid (gnome)":"Humanoide (gnomo)",
	"humanoid (goblinoid)":"Humanoide (trasgo)",
	"humanoid (grimlock)":"Humanoide (grimlock)",
	"humanoid (grung)":"Humanoide (grung)",
	"humanoid (human)":"Humanoide (humano)",
	"humanoid (human, shapechanger)":"Humanoide (humano, cambiaformas)",
	"humanoid (kenku)":"Humanoide (kenku)",
	"humanoid (kobold)":"Humanoide (kobold)",
	"humanoid (kuo-toa)":"Humanoide (kuo-toa)",
	"humanoid (lizardfolk)":"Humanoide (hombre lagarto)",
	"humanoid (merfolk)":"Humanoide (sirénido)",
	"humanoid (orc)":"Humanoide (orco)",
	"humanoid (quaggoth)":"Humanoide (quaggoth)",
	"humanoid (sahuagin)":"Humanoide (sahuagin)",
	"humanoid (shapechanger)":"Humanoide (cambiaformas)",
	"humanoid (thri-kreen)":"Humanoide (thri-kreen)",
	"humanoid (troglodyte)":"Humanoide (troglodita)",
	"humanoid (xvart)":"Humanoide (xvart)",
	"humanoid (yuan-ti)":"Humanoide (yuan-ti)",
	"humanoid":"Humanoide",
	"monstrosity (shapechanger)":"Monstruosidad (cambiaformas)",
	"monstrosity (shapechanger, yuan-ti)":"Monstruosidad (cambiaformas, yuan-ti)",
	"monstrosity (titan)":"Monstruosidad (titán)",
	"monstrosity":"Monstruosidad",
	"ooze":"Cieno",
	"plant":"Vegetal",
	"swarm of Tiny beasts":"Enjambre de bestias diminutas",
	"undead (shapechanger)":"Muerto viviente (cambiaformas)",
	"undead":"Muerto viviente"
};

var alignments = {
	"chaotic evil": "Caótico Malvado",
	"chaotic neutral":"Caótico Neutral",
	"chaotic good":"Caótico Bueno",
	"neutral evil":"Neutral Malvado",
	"true neutral":"Neutral",
	"neutral":"Neutral",
	"neutral good":"Neutral Bueno",
	"lawful evil":"Legal Malvado",
	"lawful neutral":"Legal Neutral",
	"lawful good":"Legal Bueno",
	"chaotic good evil":"Caótico Bueno/Malvado",
	"lawful chaotic evil":"Legal/Caótico Malvado",
	"unaligned":"Sin alineamiento",
	"any non-lawful": "Cualquier alineamiento no legal",
	"any": "Cualquier alineamiento",
};

var languages = {
	"giant eagle": "águila gigante",
	"worg":"huargo",
	"winter wolf":"lobo invernal",
	"sahuagin":"sahuagin",
	"giant owl, understands but cannot speak all but giant owl":"búho gigante, entiende común, elfo y silvano, pero no puede hablarlos",
	"giant elk but can't speak them":"alce gigante, entiende común, elfo y silvano, pero no puede hablarlos",
	"understands Infernal but can't speak it":"entiende infernal, pero no puede hablar",
	"understands draconic but can't speak":"entiende dracónico, pero no puede hablar",
	"understands common but doesn't speak it":"entiende común, pero no puede hablar",
	"understands abyssal but can't speak":"entiende abisal, pero no puede hablar",
	"understands all languages it knew in life but can't speak":"entiende los idiomas que conoció en vida, pero no puede hablar",
	"understands commands given in any language but can't speak":"entiende las órdenes recibidas en cualquier idioma, pero no puede hablar",
	"(can't speak in rat form)":"(no puede hablar en forma de rata)",
	"(can't speak in boar form)":"(no puede hablar en forma de jabalí)",
	"(can't speak in bear form)":"(no puede hablar en forma de oso)",
	"(can't speak in tiger form)":"(no puede hablar en forma de tigre)",
	"any one language (usually common)":"uno cualquiera (normalmente común)",
	"any two languages":"dos cualesquiera",
	"any four languages":"tres cualesquiera",
	"5 other languages":"otros cinco idiomas",
	"any, usually common":"cualquiera (normalmente común)",
	"one language known by its creator":"un idioma conocido por su creador",
	"the languages it knew in life":"los idiomas que conoció en vida",
	"those it knew in life":"aquellos que conoció en vida",
	"all it knew in life":"todos los idiomas que conoció en vida",
	"any it knew in life":"cualquiera de los idiomas que conoció en vida",
	"all, telepathy 120 ft.":"todo, telepatía 120 pies",
	"telepathy 60 ft.":"telepatía 60 pies",
	"telepathy 60ft. (works only with creatures that understand abyssal)":"telepatía 60 pies (solo funciona con criaturas que entiendan abisal)",
	"telepathy 120 ft.":"telepatía 120 pies",
	"but can't speak":"pero no puede hablar",
	"but can't speak it":"pero no puede hablarlo",
	"choice":"de tu elección",
	"understands the languages of its creator but can't speak":"entiende los idioma conocidos por su creador pero no puede hablar",
	"understands common and giant but can't speak":"entiende común y gigante pero no puede hablar",
	"cannot speak": "no puede hablar"
};

var races = {
	"Dragonborn": "Dracónido",
	"Dwarf": "Enano",
	"Hill Dwarf": "Enano de las colinas",
	"Elf": "Elfo",
	"High Elf": "Alto elfo",
	"Gnome": "Gnomo de las rocas",
	"Rock Gnome": "Gnomo",
	"Half Elf": "Semielfo",
	"Half-elf": "Semielfo",
	"Halfling": "Mediano",
	"Lightfoot Halfling": "Mediano piesligeros",
	"Half Orc": "Semiorco",
	"HUMAN": "HUMANO",
	"Human": "Humano",
	"Variant Human": "Humano variante",
	"Tiefling": "Tiefling"
};

var rarity = {
	"Common": "Común",
	"Uncommon": "Poco común",
	"Rare": "Raro",
	"Very rare": "Muy raro",
	"Legendary": "Legendario"
};

function parseSenses(sensesText) {
	const senses = sensesText.split('. ');
	let parsed = '';
	senses.forEach(sense => { parsed = parseSense(sense) + ' ' + parsed; });
	return parsed;
}

function parseSense(sense) {
	var regexp = /([0-9]+)/gi;
	sense = sense.replace(/ft/gi, 'pie');
	sense = sense.replace(/feet/gi, 'pies');
	sense = sense.replace(/Darkvision/gi, "Visión en la oscuridad");
	sense = sense.replace(/Darvision/gi, "Visión en la oscuridad"); //bug ^^
	sense = sense.replace(/Blindsight/gi, "Vista ciega");
	sense = sense.replace(/Truesight/gi, "Vista verdadera");
	sense = sense.replace(/tremorsense/gi, "Sentir vibraciones");
	sense = sense.replace(/Blind Beyond/gi, "Ciego más allá");
	sense = sense.replace(/this radius/gi, "de este radio");
	sense = sense.replace("(blind beyond this radius)", "(Ciego más allá de este radio)");
	return sense;
}

function parseDamage(damage) {
	damage = damage.replace(/bludgeoning/gi, 'contundente');
	damage = damage.replace(/piercing/gi, 'perforante');
	damage = damage.replace(/and/gi, 'y');
	damage = damage.replace(/slashing/gi, 'cortante');
	damage = damage.replace(/from/gi, 'desde');
	damage = damage.replace(/nonmagical attacks/gi, 'ataque no mágico');
	damage = damage.replace(/that aren't silvered/gi, 'que no son de plata');
	damage = damage.replace(/not made with silvered weapons/gi, 'no hechos con armas de plata');
	return damage;
}


Hooks.once('init', () => {

	if(typeof Babele !== 'undefined') {

		Babele.get().register({
			module: 'dnd5e-babele-spanish',
			lang: 'es',
			dir: 'es/compendium'
		});


		CONFIG.DND5E.classFeatures = {
			"bárbaro": CONFIG.DND5E.classFeatures["barbarian"],
			"bardo": CONFIG.DND5E.classFeatures["bard"],
			"clérigo": CONFIG.DND5E.classFeatures["cleric"],
			"druida": CONFIG.DND5E.classFeatures["druid"],
			"guerrero": CONFIG.DND5E.classFeatures["fighter"],
			"monje": CONFIG.DND5E.classFeatures["monk"],
			"paladín": CONFIG.DND5E.classFeatures["paladin"],
			"explorador": CONFIG.DND5E.classFeatures["ranger"],
			"pícaro": CONFIG.DND5E.classFeatures["rogue"],
			"hechicero": CONFIG.DND5E.classFeatures["sorcerer"],
			"brujo": CONFIG.DND5E.classFeatures["warlock"],
			"mago": CONFIG.DND5E.classFeatures["wizard"]
		};
	}
});
