// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

StartupEvents.registry('item', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
	event.create('wire.fine_fluix').displayName('Fine Fluix Wire')
	event.create('conveyor.primitive').displayName('Primitive Conveyor')
	event.create('motor.primitive').displayName('Primitive Motor')
	event.create('robot.arm.primitive').displayName('Primitive Robot Arm')
	event.create('mesh_bronze','createsifter:mesh').displayName('Bronze Mesh').parentModel("createsifter:block/meshes/custom_mesh").texture("1", "kubejs:item/mesh_bronze")
	event.create('catalyst.copper_bee').displayName('Copper Bee Catalyst')
	event.create('comb.copper_group').displayName('Copper Group Comb').texture('kubejs:item/comb.base').color(0, 0xFF6900)
})
//.color(0, 0x191919).color(0, 0x845252)
GTCEuStartupEvents.element(event => {
    console.info("add a new element")
    event.create(27, 177, -1, null, "test_element", "Test", false);
})

GTCEuStartupEvents.material(event => {
    console.info("create a new material")
    event.create("mana_steel")
        .ingot(1)
        .element(GTElements.get("test_element"))
        .color(0x2176ff).iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME)
    .buildAndRegister();

	event.create("fluix")
		.gem(1)
        .element(GTElements.get("test_element"))
        .color(0x7a14f7).iconSet(GTMaterialIconSet.CERTUS)
        .flags(GTMaterialFlags.GENERATE_FINE_WIRE)
    .buildAndRegister();
})

StartupEvents.registry('fluid', event => {
	event.create('mysterious_ooze')
		.thickTexture(0x500bbf)
		.displayName('Mysterious Ooze')
		.noBlock()
	event.create('energized_ooze')
		.thickTexture(0x6819e6)
		.displayName('Energized Ooze')
		.noBlock()
	event.create('liquid_pollen')
		.thinTexture(0xf5e213)
		.displayName('Liquid Pollen')
		.noBlock()
})


console.info('RECIPE TYPE MAN')
GTCEuStartupEvents.recipeType(event => {
	//.setMaxIOSize('maxItemInput', 'maxItemOutput', 'maxFluidInput', 'maxFluidOutput')
	event.create("greenhouse_recipe_type", "multiblock")
		.setEUIO("IN")
		.setMaxIOSize(3, 4, 2, 0)
		.setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
		.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
	.setSound(GTSoundEntries.COOLING);

	event.create("IndustrialHive_recipe_type", "multiblock")
		.setEUIO("IN")
		.setMaxIOSize(3, 4, 2, 2)
		.setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
		.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
	.setSound(GTSoundEntries.COOLING);

	event.create("PrimitiveAssembler_recipe_type", "steam")
		.setMaxIOSize(9, 1, 0, 0)
		.setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
		.setProgressBar(GuiTextures.PROGRESS_BAR_CIRCUIT, FillDirection.LEFT_TO_RIGHT)
	.setSound(GTSoundEntries.ASSEMBLER);

	event.create("ImprovedCokeOven_recipe_type", "multiblock")
		.setEUIO("IN")
		.setMaxIOSize(1, 1, 0, 1)
		.setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
		.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
	.setSound(GTSoundEntries.FIRE);

	event.create("energizer_recipe_type", "electric")
		.setEUIO("IN")
		.setMaxIOSize(3, 3, 1, 1)
		.setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
		.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
	.setSound(GTSoundEntries.ARC);

	event.create("alternator_recipe_type", "kinetic-multi")
		.setEUIO("OUT")
		.setMaxIOSize(1, 0, 0, 0)
		.setSlotOverlay(false, false, GuiTextures.CIRCUIT_OVERLAY)
		.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
		.setSound(GTSoundEntries.ARC)
	.setMaxConditions(2);

	event.create("fusion_mk0", "kinetic-multi")
		.setEUIO("IN")
		.setMaxIOSize(0, 0, 2, 1)
		.setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
		.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
	.setSound(GTSoundEntries.CENTRIFUGE);

	event.create("fusion_reactor", "multiblock")
		.setEUIO("OUT")
		.setMaxIOSize(0, 0, 3, 1)
		.setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
		.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
	.setSound(GTSoundEntries.ARC);

	event.create("electric_sieve", "electric")
		.setEUIO("IN")
		.setMaxIOSize(2, 18, 0, 0)
		.setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
		.setProgressBar(GuiTextures.PROGRESS_BAR_SIFT, FillDirection.LEFT_TO_RIGHT)
	.setSound(GTSoundEntries.MACERATOR);
})

GTCEuStartupEvents.machine(event => {
	console.info('Green HOUSE MAN')
	event.simpleMultiblock("greenhouse_multiblock")
		.rotationState(RotationState.NON_Y_AXIS)
		.recipeType("greenhouse_recipe_type")
		.appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
		.pattern(definition => FactoryBlockPattern.start()
			.aisle("CCC", "CGC", "CGC", "CLC", "CCC")
			.aisle("CMC", "GSG", "G#G", "LIL", "COC")
			.aisle("CKC", "CGC", "CGC", "CLC", "CCC")
			.where('K', Predicates.controller(Predicates.blocks(definition.get())))
			.where('M', Predicates.blocks("minecraft:moss_block"))
			.where('G', Predicates.blocks("ae2:quartz_glass"))
			.where('S', Predicates.blocks("minecraft:oak_sapling"))
			.where('I', Predicates.blocks("minecraft:glowstone"))
			.where('L', Predicates.blocks(GTBlocks.CASING_GRATE.get()))
			.where('C', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get()).setMinGlobalLimited(1)
				.or(Predicates.autoAbilities(definition.getRecipeType())))
			.where('O', Predicates.abilities(PartAbility.MUFFLER).setExactLimit(1))
			.where('#', Predicates.air())
			.build())
		.workableCasingRenderer("gtceu:block/casings/solid/machine_casing_solid_steel",
			"gtceu:block/multiblock/implosion_compressor", false)
	.register();

	event.simpleMultiblock("Industrial Hive")
		.rotationState(RotationState.NON_Y_AXIS)
		.recipeType("IndustrialHive_recipe_type")
		.appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
		.pattern(definition => FactoryBlockPattern.start()
			.aisle("CCCCC", "CGGGC", "CGGGC", "CLLLC", "CCCCC")
			.aisle("CMMMC", "GF#FG", "G###G", "LIIIL", "CCCCC")
			.aisle("CMMMC", "G#H#G", "G###G", "LIIIL", "CCOCC")
			.aisle("CMMMC", "GF#FG", "G###G", "LIIIL", "CCCCC")
			.aisle("CCKCC", "CGGGC", "CGGGC", "CLLLC", "CCCCC")
			.where('K', Predicates.controller(Predicates.blocks(definition.get())))
			.where('M', Predicates.blocks("minecraft:moss_block"))
			.where('G', Predicates.blocks("ae2:quartz_glass"))
			.where('H', Predicates.blocks("minecraft:beehive"))
			.where('F', Predicates.blocks("minecraft:poppy"))
			.where('I', Predicates.blocks("minecraft:glowstone"))
			.where('L', Predicates.blocks(GTBlocks.CASING_GRATE.get()))
			.where('C', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get()).setMinGlobalLimited(1)
				.or(Predicates.autoAbilities(definition.getRecipeType())))
			.where('O', Predicates.abilities(PartAbility.MUFFLER).setExactLimit(1))
			.where('#', Predicates.air())
			.build())
		.workableCasingRenderer("gtceu:block/casings/solid/machine_casing_solid_steel",
			"gtceu:block/multiblock/implosion_compressor", false)
	.register();

	event.simpleSteamMachines("primitive_assembler", "PrimitiveAssembler_recipe_type");

	event.simpleMachines("electric_sieve", "electric_sieve", tier => 3200, GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV);

	event.simpleMachines("energizer", "energizer_recipe_type", tier => 3200, GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV);

	event.simpleMultiblock("Improved Coke Oven")
		.rotationState(RotationState.NON_Y_AXIS)
		.recipeType("ImprovedCokeOven_recipe_type")
		.appearanceBlock(GTBlocks.CASING_BRONZE_BRICKS)
		.pattern(definition => FactoryBlockPattern.start()
			.aisle("BBB", "CCC", "BBB")
			.aisle("BBB", "C#C", "BBB")
			.aisle("BKB", "CCC", "BBB")
			.where('K', Predicates.controller(Predicates.blocks(definition.get())))
			.where('C', Predicates.blocks(GTBlocks.COIL_CUPRONICKEL.get()))
			.where('#', Predicates.air())
			.where('B', Predicates.blocks(GTBlocks.CASING_BRONZE_BRICKS.get()).setMinGlobalLimited(1)
				.or(Predicates.autoAbilities(definition.getRecipeType())))
			.build())
		.workableCasingRenderer("gtceu:block/casings/solid/machine_bronze_plated_bricks",
			"gtceu:block/multiblock/coke_oven", false)
	.register();

	event.simpleMultiblock("Alternator")
		.rotationState(RotationState.NON_Y_AXIS)
		.recipeType("alternator_recipe_type")
		.appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
		.pattern(definition => FactoryBlockPattern.start()
		.aisle("CWC", "CWC", "#W#")
		.aisle("CWC", "K#E", "CWC")
		.aisle("CWI", "CWA", "#W#")
		.where('A', Predicates.controller(Predicates.blocks(definition.get())))
		.where('W', Predicates.blocks(GTBlocks.COIL_CUPRONICKEL.get()))
		.where("C", Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get()))
		.where('#', Predicates.air())
		.where('I', Predicates.abilities(PartAbility.IMPORT_ITEMS).setExactLimit(1))
		.where('K', Predicates.abilities(PartAbility.INPUT_KINETIC).setExactLimit(1))
		.where('E', Predicates.abilities(PartAbility.OUTPUT_ENERGY).setExactLimit(1))
		.build())
		.workableCasingRenderer("gtceu:block/casings/solid/machine_casing_solid_steel",
		"gtceu:block/multiblock/implosion_compressor", false)
	.register();

	event.simpleMultiblock("fusion_mk0")
		.rotationState(RotationState.ALL)
		.recipeType("fusion_mk0")
		.appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
		.pattern(definition => FactoryBlockPattern.start()
		.aisle("######W#W######","#####CWCWC#####","######W#W######")
		.aisle("#####CWCWC#####","####CPGGGPC####","#####CWCWC#####")
		.aisle("####C#W#W#C####","###CPCWKWCPC###","####C#W#W#C####")
		.aisle("###C#######C###","##CPC#####CPC##","###C#######C###")
		.aisle("##C#########C##","#CPC#######CPC#","##C#########C##")
		.aisle("#C###########C#","CPC#########CPC","#C###########C#")
		.aisle("WWW#########WWW","WGW#########WGW","WWW#########WWW")
		.aisle("#C###########C#","CGK#########KGC","#C###########C#")
		.aisle("WWW#########WWW","WGW#########WGW","WWW#########WWW")
		.aisle("#C###########C#","CPC#########CPC","#C###########C#")
		.aisle("##C#########C##","#CPC#######CPC#","##C#########C##")
		.aisle("###C#######C###","##CPC#####CPC##","###C#######C###")
		.aisle("####C#W#W#C####","###CPCWKWCPC###","####C#W#W#C####")
		.aisle("#####CWCWC#####","####CPGGGPC####","#####CWCWC#####")
		.aisle("######W#W######","#####CWFWC#####","######W#W######")
		.where('F', Predicates.controller(Predicates.blocks(definition.get())))
		.where('W', Predicates.blocks(GTBlocks.COIL_CUPRONICKEL.get()))
		.where("P", Predicates.blocks(GTBlocks.CASING_STEEL_PIPE.get()))
		.where("G", Predicates.blocks(GTBlocks.CASING_STEEL_GEARBOX.get()))
		.where('C', Predicates.blocks(GTBlocks.CASING_STEEL_SOLID.get()).setMinGlobalLimited(85)
				.or(Predicates.autoAbilities(definition.getRecipeType())))
		.where('K', Predicates.abilities(PartAbility.INPUT_KINETIC).setExactLimit(4))
		.where('#', Predicates.any())
		.build())
		.workableCasingRenderer("gtceu:block/casings/solid/machine_casing_solid_steel",
		"gtceu:block/multiblock/implosion_compressor", false)
	.register();

	event.simpleMultiblock("fusion_reactor")
		.rotationState(RotationState.ALL)
		.recipeType("fusion_reactor")
		.appearanceBlock(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST)
		.pattern(definition => FactoryBlockPattern.start()																  /*               */
		.aisle("###############","###############","###############","###############","###############","######W#W######","#####CWCWC#####","######W#W######","###############","###############","###############","###############","###############")
		.aisle("###############","###############","###############","###############","######GCG######","#####CWCWC#####","###CCPPPPPCC###","#####CWCWC#####","######GCG######","###############","###############","###############","###############")
		.aisle("###############","###############","######GCG######","#####GGCGG#####","####GG###GG####","###CC#WCW#CC###","##CPPCWPWCPPC##","###CC#WCW#CC###","####GG###GG####","#####GGCGG#####","######GCG######","###############","###############")
		.aisle("###############","######GCG######","####GG###GG####","###GG#####GG###","###G#######G###","##C#########C##","#CPCC#####CCPC#","##C#########C##","###G#######G###","###GG#####GG###","####GG###GG####","######GCG######","###############")
		.aisle("###############","#####GGCGG#####","###GG#####GG###","###G#######G###","##G#########G##","##C#########C##","#CPC#######CPC#","##C#########C##","##G#########G##","###G#######G###","###GG#####GG###","#####GGCGG#####","###############")
		.aisle("######CCC######","####GG#C#GG####","###G#######G###","##G#########G##","##G#########G##","#C###########C#","CPC#########CPC","#C###########C#","##G#########G##","##G#########G##","###G#######G###","####GG#C#GG####","######CCC######")
		.aisle("#####CCCCC#####","###GG#CCC#GG###","##G####C####G##","##G#########G##","#G###########G#","WWW###FFF###WWW","WPW###FGF###WPW","WWW###FFF###WWW","#G###########G#","##G#########G##","##G####C####G##","###GG#CCC#GG###","#####CCCCC#####")
		.aisle("#####CCCCC#####","###CCCCPCCCC###","##C###CPC###C##","##C#########C##","#C###########C#","#CC###FGF###CC#","CPP###GIG###PPC","#CC###FGF###CC#","#C###########C#","##C#########C##","##C###CPC###C##","###CCCCPCCCC###","#####CCCCC#####")
		.aisle("#####CCCCC#####","###GG#CCC#GG###","##G####C####G##","##G#########G##","#G###########G#","WWW###FFF###WWW","WPW###FGF###WPW","WWW###FFF###WWW","#G###########G#","##G#########G##","##G####C####G##","###GG#CCC#GG###","#####CCCCC#####")
		.aisle("######CCC######","####GG#C#GG####","###G#######G###","##G#########G##","##G#########G##","#C###########C#","CPC#########CPC","#C###########C#","##G#########G##","##G#########G##","###G#######G###","####GG#C#GG####","######CCC######")
		.aisle("###############","#####GGCGG#####","###GG#####GG###","###G#######G###","##G#########G##","##C#########C##","#CPC#######CPC#","##C#########C##","##G#########G##","###G#######G###","###GG#####GG###","#####GGCGG#####","###############")
		.aisle("###############","######GCG######","####GG###GG####","###GG#####GG###","###G#######G###","##C#########C##","#CPCC#####CCPC#","##C#########C##","###G#######G###","###GG#####GG###","####GG###GG####","######GCG######","###############")
		.aisle("###############","###############","######GCG######","#####GGCGG#####","####GG###GG####","###CC#WCW#CC###","##CPPCWPWCPPC##","###CC#WCW#CC###","####GG###GG####","#####GGCGG#####","######GCG######","###############","###############")
		.aisle("###############","###############","###############","###############","######GCG######","#####CWCWC#####","###CCPPPPPCC###","#####CWCWC#####","######GCG######","###############","###############","###############","###############")
		.aisle("###############","###############","###############","###############","###############","######W#W######","#####CWMWC#####","######W#W######","###############","###############","###############","###############","###############")
		.where('M', Predicates.controller(Predicates.blocks(definition.get())))
		.where('W', Predicates.blocks(GTBlocks.COIL_KANTHAL.get()))
		.where("P", Predicates.blocks(GTBlocks.CASING_TUNGSTENSTEEL_PIPE.get()))
		.where('G', Predicates.blocks("ae2:quartz_vibrant_glass"))
		.where('F', Predicates.blocks("gtceu:frame_block_tungsten_steel"))
		.where('I', Predicates.blocks("minecraft:glowstone"))
		.where('C', Predicates.blocks(GTBlocks.CASING_TUNGSTENSTEEL_ROBUST.get()).setMinGlobalLimited(45)
				.or(Predicates.autoAbilities(definition.getRecipeType())))
		.where('#', Predicates.any())
		.build())
		.workableCasingRenderer("gtceu:block/casings/solid/machine_casing_robust_tungstensteel",
		"gtceu:block/multiblock/implosion_compressor", false)
	.register();
})