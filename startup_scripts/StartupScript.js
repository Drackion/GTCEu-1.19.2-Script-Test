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
	//.setIOSize('minItemInput', 'maxItemInput', 'minItemOutput', 'maxItemOutput', 'minFluidInput', 'maxFluidInput', 'minFluidOutput','maxFluidOutput')
	event.create("greenhouse_recipe_type").setIOSize(1, 3, 1, 4, 1, 2, 0, 0)
		.setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
		.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
	.setSound(GTSoundEntries.COOLING)

	event.create("IndustrialHive_recipe_type").setIOSize(1, 3, 1, 4, 0, 2, 0, 2)
		.setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
		.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
	.setSound(GTSoundEntries.COOLING)
	
	event.create("PrimitiveAssembler_recipe_type").setIOSize(1, 9, 1, 1, 0, 1, 0, 0)
		.setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
		.setProgressBar(GuiTextures.PROGRESS_BAR_CIRCUIT, FillDirection.LEFT_TO_RIGHT)
	.setSound(GTSoundEntries.ASSEMBLER)

	event.create("ImprovedCokeOven_recipe_type").setIOSize(1, 1, 1, 1, 0, 0, 1, 1)
		.setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
		.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
	.setSound(GTSoundEntries.FIRE)
	
	event.create("energizer_recipe_type").setIOSize(1, 3, 1, 3, 0, 1, 0, 1)
		.setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
		.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
	.setSound(GTSoundEntries.ARC)
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
})
