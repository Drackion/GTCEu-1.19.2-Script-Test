// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
	event.remove({id:"prettypipes:item_terminal"})
	event.shaped('1x prettypipes:crafting_terminal', ['PRP', 'CTC', 'PRP'], {P: 'gtceu:plate_double.steel', R: 'kubejs:robot.arm.primitive', C: 'kubejs:conveyor.primitive', T: 'minecraft:crafting_table'}).id('prettypipes:crafting_terminal')
	let inter = 'gtceu:circuit_board.basic'
	event.recipes.createSequencedAssembly(
		[
			Item.of('gtceu:circuit.electronic').withChance(100)
		], 'gtceu:circuit_board.basic', [
			event.recipes.createDeploying(inter, [inter, 'gtceu:plate.steel']),
			event.recipes.createPressing(inter, inter),
			event.recipes.createFilling(inter, [inter, Fluid.of('gtceu:tin', 144)]),
			event.recipes.createDeploying(inter, [inter, 'gtceu:cable_single.red_alloy']),
			event.recipes.createDeploying(inter, [inter, 'gtceu:circuit.vacuum_tube']),
			event.recipes.createDeploying(inter, [inter, 'gtceu:component.resistor'])
		]).transitionalItem(inter).loops(2)

	function gtceuCoils(ouput, input, gtfluid, foil, tran){
		event.recipes.createSequencedAssembly(
			[
				Item.of(`gtceu:wire_coil_${ouput}`).withChance(100)
			], input,
			[
				event.recipes.createFilling(tran, [tran, Fluid.of(gtfluid, 8)]),
				event.recipes.createDeploying(tran, [tran, foil]),
				event.recipes.createPressing(tran, tran)
			]
		).transitionalItem(tran).loops(8)
	}

	gtceuCoils('cupronickel', 'gtceu:wire_hex.cupronickel', 'gtceu:tin_alloy', 'gtceu:foil.bronze', 'gtceu:wire_hex.cupronickel')
	gtceuCoils('kanthal', 'gtceu:wire_hex.kanthal', 'gtceu:copper', 'gtceu:foil.aluminium', 'gtceu:wire_hex.kanthal')

	event.recipes.createsifterSifting(
		[
			Item.of('gtceu:wire_single.copper').withChance(0.5).toJson(),
			Item.of('gtceu:wire_single.cupronickel').withChance(0.5).toJson(),
			Item.of('gtceu:foil.bronze').withChance(0.5).toJson()
		],
		[
			Item.of('gtceu:wire_coil_cupronickel'), 'createsifter:brass_mesh'
		]
	).processingTime(20)


	//alloy smelter
	event.custom(
		{
			type: "gtceu:gt_recipe_serializer",
			duration: 120,
			inputs: {
				item: [
					{
						chance: 1.0,
						content: {
							type: "gtceu:sized",
							count: 1,
							ingredient: {
								item: "gtceu:wire_single.copper"
							} 
						}
					},
					{
						chance: 1.0,
						content: {
							type: "gtceu:sized",
							count: 1,
							ingredient: {
								item: "gtceu:wire_single.nickel" 
							}
						}
					}
				]
			},
			outputs: {
				item: [
					{
						chance: 1.0,
						content: {
							type: "gtceu:sized",
							count: 2,
							ingredient: {
								item: "gtceu:wire_single.cupronickel"
							}
						}
					}
				]
			},
			recipe_type: "gtceu:alloy_smelter",
			tickInputs: {
				eu: [
					{
						chance: 1.0,
						content: 16
					}
				]
			}
		}
	)

	//assembler
	event.custom(
		{
			type: "gtceu:gt_recipe_serializer",
			duration: 100,
			inputs: {
				fluid: [
					{
						chance: 1.0,
						content: {
							amount: 100,
							fluid: "gtceu:glass"
						}
					}
				],
				item: [
					{
						chance: 1.0,
						content: {
							type: "gtceu:sized",
							count: 4,
							ingredient: {
								item: "kubejs:wire.fine_fluix"
							}
						}
					},
					{
						chance: 1.0,
						content: {
							type: "gtceu:sized",
							count: 4,
							ingredient: {
								item: "gtceu:wire_fine.borosilicate_glass"
							}
						}
					}
				]
			},
			outputs: {
				item: [
					{
						chance: 1.0,
						content: {
							type: "gtceu:sized",
							count: 2,
							ingredient: {
								item: "ae2:fluix_glass_cable"
							}
						}
					}
				]
			},
			recipe_type: "gtceu:assembler",
			tickInputs: {
				eu: [
					{
						chance: 1.0,
						content: 8
					}
				]
			}
		}
	)

	event.custom(
		{
			type: "gtceu:gt_recipe_serializer",
			duration: 100,
			inputs: {
				fluid: [
					{
						chance: 1.0,
						content: {
							amount: 144,
							fluid: "gtceu:soldering_alloy"
						}
					}
				],
				item: [
					{
						chance: 1.0,
						content: {
							type: "gtceu:sized",
							count: 4,
							ingredient: {
								item: "gtceu:plate_double.vanadium_steel"
							}
						}
					},
					{
						chance: 1.0,
						content: {
							type: "gtceu:sized",
							count: 1,
							ingredient: {
								item: "ae2:fluix_block"
							}
						}
					}
				]
			},
			outputs: {
				item: [
					{
						chance: 1.0,
						content: {
							type: "gtceu:sized",
							count: 2,
							ingredient: {
								item: "ae2:not_so_mysterious_cube"
							}
						}
					}
				]
			},
			recipe_type: "gtceu:assembler",
			tickInputs: {
				eu: [
					{
						chance: 1.0,
						content: 48
					}
				]
			}
		}
	)

	//circuit assembler
	function AE2Proccesors(fluid, printed_1, printed_2, circuit, processor){
		event.custom(
			{
				type: "gtceu:gt_recipe_serializer",
				duration: 100,
				inputs: {
					fluid: [
						{
							chance: 1.0,
							content: {
								amount: 144,
								fluid: fluid
							}
						}
					],
					item: [
						{
							chance: 1.0,
							content: {
								type: "gtceu:sized",
								count: 1,
								ingredient: {
									item: printed_1
								}
							}
						},
						{
							chance: 1.0,
							content: {
								type: "gtceu:sized",
								count: 1,
								ingredient: {
									item: printed_2
								}
							}
						},
						{
							chance: 1.0,
							content: {
								type: "gtceu:sized",
								count: 1,
								tag: circuit
							}
						}
					]
				},
				outputs: {
					item: [
						{
							chance: 1.0,
							content: {
								type: "gtceu:sized",
								count: 4,
								ingredient: {
									item: processor
								}
							}
						}
					]
				},
				recipe_type: "gtceu:circuit_assembler",
				tickInputs: {
					eu: [
						{
							chance: 1.0,
							content: 40
						}
					]
				}
			}
		)
	}
	AE2Proccesors("gtceu:red_alloy", "ae2:printed_logic_processor", "ae2:printed_silicon", "forge:circuit/lv", "ae2:logic_processor")
	AE2Proccesors("gtceu:red_alloy", "ae2:printed_calculation_processor", "ae2:printed_silicon", "forge:circuit/lv", "ae2:calculation_processor")
	AE2Proccesors("gtceu:red_alloy", "ae2:printed_engineering_processor", "ae2:printed_silicon", "forge:circuit/lv", "ae2:engineering_processor")

	//wiremill
	event.custom(
		{
			type: "gtceu:gt_recipe_serializer",
			duration: 120,
			inputs: {
				item: [
					{
						chance: 1.0,
						content: {
							type: "gtceu:sized",
							count: 1,
							ingredient: {
								item: "ae2:fluix_crystal"
							} 
						}
					}
				]
			},
			outputs: {
				item: [
					{
						chance: 1.0,
						content: {
							type: "gtceu:sized",
							count: 8,
							ingredient: {
								item: "kubejs:wire.fine_fluix"
							}
						}
					}
				]
			},
			recipe_type: "gtceu:wiremill",
			tickInputs: {
				eu: [
					{
						chance: 1.0,
						content: 16
					}
				]
			}
		}
	)

	//EBF
	function EBF(Temp, Dur, InItCo1, InIt1, InItCo2, InIt2, InItCo3, InIt3, InFlAm, InFl, OuItCo, OuIt, EU) {
		event.custom(
			{
				type: "gtceu:gt_recipe_serializer",
				data: {
					ebf_temp: Temp,
				},
				duration: Dur,
				inputs: {
					item: [
						{
							chance: 1.0,
							content: {
								type: "gtceu:sized",
								count: InItCo1,
								ingredient: {
									item: InIt1
								}
							}
						},
						{
							chance: 1.0,
							content: {
								type: "gtceu:sized",
								count: InItCo2,
								ingredient: {
									item: InIt2
								}
							}
						},
						{
							chance: 1.0,
							content: {
								type: "gtceu:sized",
								count: InItCo3,
								ingredient: {
									item: InIt3
								}
							}
						}
					],
					fluid: [
						{
							chance: 1.0,
							content: {
								amount: InFlAm,
								fluid: InFl
							}
						}
					]
				},
				outputs: {
					item: [
						{
							chance: 1.0,
							content: {
								type: "gtceu:sized",
								count: OuItCo,
								ingredient: {
									item: OuIt
								}
							}
						}
					]
				},
				recipe_type: "gtceu:electric_blast_furnace",
				tickInputs: {
					eu: [
						{
							chance: 1.0,
							content: EU
						}
					]
				}
			}
		)
	}

	EBF(420, 420, 1, "minecraft:quartz", 1, "minecraft:redstone", 1, "ae2:charged_certus_quartz_crystal", 1000, "minecraft:water", 2, "ae2:fluix_crystal", 69)

	event.custom(
		{
			type: "gtceu:gt_recipe_serializer",
			data: {
				ebf_temp: 1200,
			},
			duration: 640,
			inputs: {
				item: [
					{
						chance: 1.0,
						content: {
							type: "gtceu:sized",
							count: 16,
							ingredient: {
								item: "ae2:charged_certus_quartz_crystal"
							}
						}
					},
					{
						chance: 1.0,
						content: {
							type: "gtceu:sized",
							count: 1,
							ingredient: {
								item: "ae2:not_so_mysterious_cube"
							}
						}
					}
				],
				fluid: [
					{
						chance: 1.0,
						content: {
							amount: 1000,
							fluid: "kubejs:Energized_Ooze"
						}
					}
				]
			},
			outputs: {
				item: [
					{
						chance: 1.0,
						content: {
							type: "gtceu:sized",
							count: 1,
							ingredient: {
								item: "ae2:mysterious_cube"
							}
						}
					}
				]
			},
			recipe_type: "gtceu:electric_blast_furnace",
			tickInputs: {
				eu: [
					{
						chance: 1.0,
						content: 120
					}
				]
			}
		}
	)

	//Chemical Reactor
	event.custom(
		{
			type: "gtceu:gt_recipe_serializer",
			duration: 640,
			inputs: {
				item: [
					{
						chance: 1.0,
						content: {
							type: "gtceu:sized",
							count: 16,
							ingredient: {
								item: "gtceu:dust.phosphorus"
							}
						}
					}
				],
				fluid: [
					{
						chance: 1.0,
						content: {
							amount: 1000,
							fluid: "kubejs:Mysterious_Ooze"
						}
					},
					{
						chance: 1.0,
						content: {
							amount: 2304,
							fluid: "gtceu:glowstone"
						}
					}
				]
			},
			outputs: {
				fluid: [
					{
						chance: 1.0,
						content: {
							amount: 1000,
							fluid: "kubejs:Energized_Ooze"
						}
					}
				]
			},
			recipe_type: "gtceu:chemical_reactor",
			tickInputs: {
				eu: [
					{
						chance: 1.0,
						content: 24
					}
				]
			}
		}
	)

	//Fluid heater
	event.custom(
		{
			type: "gtceu:gt_recipe_serializer",
			duration: 4,
			inputs: {
				fluid: [
					{
						chance: 1.0,
						content: {
							amount: 6,
							fluid: "gtceu:distilled_water"
						}
					}
				],
				item: [
					{
						chance: 0.0,
						content: {
							type: "gtceu:sized",
							count: 1,
							ingredient: {
								type: "forge:nbt",
								count: 1,
								item: "gtceu:circuit.integrated",
								nbt: "{Configuration:2}"
							}
						}
					}
				]
			},
			outputs: {
				fluid: [
					{
						chance: 1.0,
						content: {
							amount: 960,
							fluid: "gtceu:steam"
						}
					}
				]
			},
			recipe_type: "gtceu:fluid_heater",
			tickInputs: {
				eu: [
					{
						chance: 1.0,
						content: 16
					}
				]
			}
		}
	)

	//Extractor

	event.custom(
		{
			type: "gtceu:gt_recipe_serializer",
			duration: 160,
			inputs: {
				item: [
					{
						chance: 1.0,
						content: {
							type: "gtceu:sized",
							count: 1,
							ingredient: {
								item: "ae2:not_so_mysterious_cube"
							}
						}
					}
				]
			},
			outputs: {
				fluid: [
					{
						chance: 1.0,
						content: {
							amount: 1000,
							fluid: "kubejs:Mysterious_Ooze"
						}
					}
				]
			},
			recipe_type: "gtceu:extractor",
			tickInputs: {
				eu: [
					{
						chance: 1.0,
						content: 40
					}
				]
			}
		}
	)

	//Centrifuge

	event.custom(
		{
			type: "gtceu:gt_recipe_serializer",
			duration: 80,
			inputs: {
				item: [
					{
						chance: 1.0,
						content: {
							type: "gtceu:sized",
							count: 1,
							ingredient: {
								item: "ae2:mysterious_cube"
							}
						}
					}
				]
			},
			outputs: {
				item: [
					{
						chance: 1.0,
						content: {
							type: "gtceu:sized",
							count: 1,
							ingredient: {
								item: "ae2:silicon_press"
							}
						}
					},
					{
						chance: 1.0,
						content: {
							type: "gtceu:sized",
							count: 1,
							ingredient: {
								item: "ae2:calculation_processor_press"
							}
						}
					},
					{
						chance: 1.0,
						content: {
							type: "gtceu:sized",
							count: 1,
							ingredient: {
								item: "ae2:engineering_processor_press"
							}
						}
					},
					{
						chance: 1.0,
						content: {
							type: "gtceu:sized",
							count: 1,
							ingredient: {
								item: "ae2:logic_processor_press"
							}
						}
					}
				]
			},
			recipe_type: "gtceu:centrifuge",
			tickInputs: {
				eu: [
					{
						chance: 1.0,
						content: 48
					}
				]
			}
		}
	)

	//Forming Press
	function AE2Press(input, ae2press, output) {
		event.custom(
			{
				type: "gtceu:gt_recipe_serializer",
				duration: 120,
				inputs: {
					item: [
						{
							chance: 1.0,
							content: {
								type: "gtceu:sized",
								count: 1,
								ingredient: {
									item: input
								} 
							}
						},
						{
							chance: 0.0,
							content: {
								type: "gtceu:sized",
								count: 1,
								ingredient: {
									item: ae2press
								}
							}
						}
					]
				},
				outputs: {
					item: [
						{
							chance: 1.0,
							content: {
								type: "gtceu:sized",
								count: 1,
								ingredient: {
									item: output
								}
							}
						}
					]
				},
				recipe_type: "gtceu:forming_press",
				tickInputs: {
					eu: [
						{
							chance: 1.0,
							content: 16
						}
					]
				}
			}
		)
	}
	
	AE2Press("minecraft:gold_ingot", "ae2:logic_processor_press", "ae2:printed_logic_processor")
	AE2Press("minecraft:diamond", "ae2:engineering_processor_press", "ae2:printed_engineering_processor")
	AE2Press("ae2:silicon", "ae2:silicon_press", "ae2:printed_silicon")
	AE2Press("ae2:certus_quartz_crystal", "ae2:calculation_processor_press", "ae2:printed_calculation_processor")


})

ServerEvents.tags('item', event => {
	event.get('createsifter:meshes').add('kubejs:mesh_bronze')
})

GTCEuServerEvents.recipe(event => {
	event.builder("IndustrialHive_recipe_type", "IndustrialHive_TEST") //("RECIPE Type", "RECIPE ID")
		.itemInputs("minecraft:stone")
		.inputFluids("minecraft:water 1000")
		.itemOutputs("3x minecraft:dirt")
		.duration(80)
		.EUt(24)
	.save(event.provider);

	
	event.builder("greenhouse_recipe_type", "Oak-1")
		.chance(0)
		.itemInputs("minecraft:oak_sapling")
		.circuitMeta(1)
		.chance(1)
		.inputFluids("minecraft:water 1000")
		.itemOutputs("2x minecraft:oak_sapling", "64x minecraft:oak_log")
		.duration(640)
		.EUt(30)
	.save(event.provider);

	event.builder("ImprovedCokeOven_recipe_type", "Logs-to-Charcoal/Wood-Tar")
		.itemInputs("#minecraft:logs")
		.itemOutputs("minecraft:charcoal")
		.outputFluids("gtceu:wood_tar 250")
		.duration(640)
		.EUt(6)
	.save(event.provider);

	//alternator LV
	event.builder("alternator_recipe_type","LV_1AMP")
		.circuitMeta(0)
		.inputStress(256)
		.rpm(32)
		.duration(1)
		.outputEU(32)
	.save(event.provider);

	event.builder("alternator_recipe_type","LV_2AMP")
		.circuitMeta(1)
		.inputStress(512)
		.rpm(64)
		.duration(1)
		.outputEU(64)
	.save(event.provider);

	event.builder("alternator_recipe_type","LV_4AMP")
		.circuitMeta(2)
		.inputStress(1024)
		.rpm(128)
		.duration(1)
		.outputEU(128)
	.save(event.provider);

	event.builder("alternator_recipe_type","LV_8AMP")
		.circuitMeta(3)
		.inputStress(2048)
		.rpm(256)
		.duration(1)
		.outputEU(256)
	.save(event.provider);

	//alternator MV
	event.builder("alternator_recipe_type","MV_1AMP")
		.circuitMeta(4)
		.inputStress(1024)
		.rpm(32)
		.duration(1)
		.outputEU(128)
	.save(event.provider);

	event.builder("alternator_recipe_type","MV_2AMP")
		.circuitMeta(5)
		.inputStress(2048)
		.rpm(64)
		.duration(1)
		.outputEU(256)
	.save(event.provider);

	event.builder("alternator_recipe_type","MV_4AMP")
		.circuitMeta(6)
		.inputStress(4096)
		.rpm(128)
		.duration(1)
		.outputEU(512)
	.save(event.provider);

	event.builder("alternator_recipe_type","MV_8AMP")
		.circuitMeta(7)
		.inputStress(8192)
		.rpm(256)
		.duration(1)
		.outputEU(1024)
	.save(event.provider);

	//alternator HV
	event.builder("alternator_recipe_type","HV_1AMP")
		.circuitMeta(8)
		.inputStress(4096)
		.rpm(32)
		.duration(1)
		.outputEU(512)
	.save(event.provider);

	event.builder("alternator_recipe_type","HV_2AMP")
		.circuitMeta(9)
		.inputStress(8192)
		.rpm(64)
		.duration(1)
		.outputEU(1024)
	.save(event.provider);

	event.builder("alternator_recipe_type","HV_4AMP")
		.circuitMeta(10)
		.inputStress(16384)
		.rpm(128)
		.duration(1)
		.outputEU(2048)
	.save(event.provider);

	event.builder("alternator_recipe_type","HV_8AMP")
		.circuitMeta(11)
		.inputStress(32768)
		.rpm(256)
		.duration(1)
		.outputEU(4096)
	.save(event.provider);

	//alternator EV
	event.builder("alternator_recipe_type","EV_1AMP")
		.circuitMeta(12)
		.inputStress(16384)
		.rpm(32)
		.duration(1)
		.outputEU(2048)
	.save(event.provider);

	event.builder("alternator_recipe_type","EV_2AMP")
		.circuitMeta(13)
		.inputStress(32768)
		.rpm(64)
		.duration(1)
		.outputEU(4096)
	.save(event.provider);

	event.builder("alternator_recipe_type","EV_4AMP")
		.circuitMeta(14)
		.inputStress(65536)
		.rpm(128)
		.duration(1)
		.outputEU(8192)
	.save(event.provider);

	event.builder("alternator_recipe_type","EV_8AMP")
		.circuitMeta(15)
		.inputStress(131072)
		.rpm(256)
		.duration(1)
		.outputEU(16384)
	.save(event.provider);
	
	//.notConsumable("minecraft:oak_sapling")	
	//GreenHouse("minecraft:oak_sapling", 1, "minecraft:air", "2x minecraft:oak_sapling", "64x minecraft:oak_log", "minecraft:air")
})