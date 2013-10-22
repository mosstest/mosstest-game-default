var dirt = moss.registerNode("default:dirt", "Dirt", new Packages.net.mosstest.scripting.DefaultNodeParams(), "default/dirt.png", false, 0);
moss.registerNodeAlias("mg:dirt", "default:dirt");

var grass = moss.registerNode("default:grass", "Grass",  new Packages.net.mosstest.scripting.DefaultNodeParams(), "default/grass.png", false, 0); 
grass.dropItem = dirt.dropItem;
