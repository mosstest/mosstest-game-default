
var dirt = new Packages.net.mosstest.scripting.MapNode("default:dirt", "Dirt", "default/dirt.png", 0);
moss.registerNode(dirt);
moss.registerNodeAlias("mg:dirt", "default:dirt");
moss.registerNodeAlias("mg:stone", "default:dirt");
// moss.registerNodeAlias("mg:air", "default:dirt");
moss.registerNodeAlias("mg:sand", "default:dirt");
var grass = new Packages.net.mosstest.scripting.MapNode("default:grass", "Dirt", "default/grass.png", 0);
grass.dropItem = dirt.dropItem;
moss.registerNodeAlias("mg:grass", "default:grass");