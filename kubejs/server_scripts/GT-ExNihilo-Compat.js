if (Platform.isLoaded('gtceu')) {
    ServerEvents.recipes(event => {
        function MACERATOR(Ore, Crushed, Byproduct, Dust, ID){
            event.recipes.gtceu.gt_recipe_serializer("macerator", `gtceu:macerator/macerate_${ID}_ore_chunk_to_crushed_ore`)
            .itemInputs(Ore)
            .itemOutputs(Crushed, Dust)
            .chancedOutput(Byproduct, 1400, 850)
            .duration(400)
            .EUt(2)  
        }
        //Gravel
            //String
                MACERATOR('kubejs:chunk.gypsum_stone', '2x gtceu:crushed.gypsum', 'gtceu:dust.sulfur', 'gtceu:dust.stone', 'stone_gypsum')
                MACERATOR('kubejs:chunk.spodumene_stone', '2x gtceu:crushed.spodumene', 'gtceu:dust.aluminium', 'gtceu:dust.stone', 'stone_spodumene')
                MACERATOR('kubejs:chunk.cassiterite_stone', '4x gtceu:crushed.cassiterite', 'gtceu:dust.tin', 'gtceu:dust.stone', 'stone_cassiterite')
                MACERATOR('kubejs:chunk.coal_stone', '4x gtceu:crushed.coal', 'minecraft:coal', 'gtceu:dust.stone', 'stone_coal')
                MACERATOR('kubejs:chunk.trona_stone', '4x gtceu:crushed.trona', 'gtceu:dust.sodium', 'gtceu:dust.stone', 'stone_trona')
                MACERATOR('kubejs:chunk.fullers_earth_stone', '4x gtceu:crushed.fullers_earth', 'gtceu:dust.aluminium', 'gtceu:dust.stone', 'stone_fullers_earth')
                MACERATOR('kubejs:chunk.basaltic_mineral_stone', '2x gtceu:crushed.basaltic_mineral_sand', 'gtceu:dust.basalt', 'gtceu:dust.stone', 'stone_basaltic_mineral_sand')
                MACERATOR('kubejs:chunk.salt_stone', '4x gtceu:crushed.salt', 'gtceu:gem.rock_salt', 'gtceu:dust.stone', 'stone_salt')
                MACERATOR('kubejs:chunk.granitic_mineral_stone', '2x gtceu:crushed.granitic_mineral_sand', 'gtceu:dust.deepslate', 'gtceu:dust.stone', 'stone_granitic_mineral_sand')
                MACERATOR('kubejs:chunk.tin_stone', '2x gtceu:crushed.tin', 'gtceu:dust.iron', 'gtceu:dust.stone', 'stone_tin')
                MACERATOR('kubejs:chunk.rock_salt_stone', '4x gtceu:crushed.rock_salt', 'gtceu:gem.salt', 'gtceu:dust.stone', 'stone_rock_salt')
                MACERATOR('kubejs:chunk.lepidolite_stone', '4x gtceu:crushed.lepidolite', 'gtceu:dust.lithium', 'gtceu:dust.stone', 'stone_lepidolite')
            //Bronze
                MACERATOR('kubejs:chunk.galena_stone', '2x gtceu:crushed.galena', 'gtceu:dust.sulfur', 'gtceu:dust.stone', 'stone_galena')
                MACERATOR('kubejs:chunk.lead_stone', '2x gtceu:crushed.lead', 'gtceu:dust.silver', 'gtceu:dust.stone', 'stone_lead')
                MACERATOR('kubejs:chunk.silver_stone', '2x gtceu:crushed.silver', 'gtceu:dust.lead', 'gtceu:dust.stone', 'stone_silver')
                MACERATOR('kubejs:chunk.zeolite_stone', '6x gtceu:crushed.zeolite', 'gtceu:dust.calcium', 'gtceu:dust.stone', 'stone_zeolite')
                MACERATOR('kubejs:chunk.glauconite_sand_stone', '6x gtceu:crushed.glauconite_sand', 'gtceu:dust.sodium', 'gtceu:dust.stone', 'stone_glauconite_sand')
                MACERATOR('kubejs:chunk.oilsands_stone', '2x gtceu:crushed.oilsands', 'gtceu:dust.oilsands', 'gtceu:dust.stone', 'stone_oilsands')
                MACERATOR('kubejs:chunk.garnet_sand_stone', '2x gtceu:crushed.garnet_sand', 'gtceu:gem.red_garnet', 'gtceu:dust.stone', 'stone_garnet_sand')
                MACERATOR('kubejs:chunk.asbestos_stone', '6x gtceu:crushed.asbestos', 'gtceu:dust.diatomite', 'gtceu:dust.stone', 'stone_asbestos')
                MACERATOR('kubejs:chunk.diatomite_stone', '2x gtceu:crushed.diatomite', 'gtceu:dust.hematite', 'gtceu:dust.stone', 'stone_diatomite')
            //Steel
                MACERATOR('kubejs:chunk.platinum_stone', '2x gtceu:crushed.platinum', 'gtceu:dust.nickel', 'gtceu:dust.stone', 'stone_platinum')
                MACERATOR('kubejs:chunk.palladium_stone', '2x gtceu:crushed.palladium', 'gtceu:dust.palladium', 'gtceu:dust.stone', 'stone_palladium')
        //Sand
            //Bronze
                MACERATOR('kubejs:chunk.copper_sand', '2x gtceu:crushed.copper', 'gtceu:dust.cobalt', 'gtceu:dust.stone', 'sand_copper')
                MACERATOR('kubejs:chunk.redstone_sand', '10x gtceu:crushed.redstone', 'gtceu:gem.cinnabar', 'gtceu:dust.stone', 'sand_redstone')
                MACERATOR('kubejs:chunk.cinnabar_sand', '2x gtceu:crushed.cinnabar', 'minecraft:redstone', 'gtceu:dust.stone', 'sand_cinnabar')
                MACERATOR('kubejs:chunk.chromite_sand', '2x gtceu:crushed.chromite', 'gtceu:dust.iron', 'gtceu:dust.stone', 'sand_chromite')
                MACERATOR('kubejs:chunk.pyrope_sand', '6x gtceu:crushed.pyrope', 'gtceu:gem.red_garnet', 'gtceu:dust.stone', 'sand_pyrope')
                MACERATOR('kubejs:chunk.sapphire_sand', '2x gtceu:crushed.sapphire', 'gtceu:dust.aluminium', 'gtceu:dust.stone', 'sand_sapphire')
                MACERATOR('kubejs:chunk.green_sapphire_sand', '2x gtceu:crushed.green_sapphire', 'gtceu:dust.aluminium', 'gtceu:dust.stone', 'sand_green_sapphire')
            //Steel
                MACERATOR('kubejs:chunk.chalcopyrite_sand', '2x gtceu:crushed.chalcopyrite', 'gtceu:dust.pyrite', 'gtceu:dust.stone', 'sand_chalcopyrite')
                MACERATOR('kubejs:chunk.iron_sand', '2x gtceu:crushed.iron', 'gtceu:dust.nickel', 'gtceu:dust.stone', 'sand_iron')
                MACERATOR('kubejs:chunk.pyrite_sand', '2x gtceu:crushed.pyrite', 'gtceu:dust.sulfur', 'gtceu:dust.stone', 'sand_pyrite')
                MACERATOR('kubejs:chunk.yellow_limonite_sand', '2x gtceu:crushed.yellow_limonite', 'gtceu:dust.nickel', 'gtceu:dust.stone', 'sand_yellow_limonite')
                MACERATOR('kubejs:chunk.malachite_sand', '2x gtceu:crushed.malachite', 'gtceu:dust.goethite', 'gtceu:dust.stone', 'sand_malachite')
                MACERATOR('kubejs:chunk.garnierite_sand', '2x gtceu:crushed.garnierite', 'gtceu:dust.iron', 'gtceu:dust.stone', 'sand_garnierite')
                MACERATOR('kubejs:chunk.nickel_sand', '2x gtceu:crushed.nickel', 'gtceu:dust.cobalt', 'gtceu:dust.stone', 'sand_nickel')
                MACERATOR('kubejs:chunk.cobaltite_sand', '2x gtceu:crushed.cobaltite', 'gtceu:dust.sulfur', 'gtceu:dust.stone', 'sand_cobaltite')
                MACERATOR('kubejs:chunk.pentlandite_sand', '2x gtceu:crushed.pentlandite', 'gtceu:dust.iron', 'gtceu:dust.stone', 'sand_pentlandite')
                MACERATOR('kubejs:chunk.bentonite_sand', '6x gtceu:crushed.bentonite', 'gtceu:dust.aluminium', 'gtceu:dust.stone', 'sand_bentonite')
                MACERATOR('kubejs:chunk.magnesite_sand', '2x gtceu:crushed.magnesite', 'gtceu:dust.magnesium', 'gtceu:dust.stone', 'sand_magnesite')
                MACERATOR('kubejs:chunk.olivine_sand', '4x gtceu:crushed.olivine', 'gtceu:gem.pyrope', 'gtceu:dust.stone', 'sand_olivine')
            //Aluminium
                MACERATOR('kubejs:chunk.beryllium_sand', '2x gtceu:crushed.beryllium', 'minecraft:emerald', 'gtceu:dust.stone', 'sand_beryllium')
                MACERATOR('kubejs:chunk.emerald_sand', '4x gtceu:crushed.emerald', 'gtceu:dust.beryllium', 'gtceu:dust.stone', 'sand_emerald')
                MACERATOR('kubejs:chunk.thorium_sand', '2x gtceu:crushed.thorium', 'gtceu:dust.uraninite', 'gtceu:dust.stone', 'sand_thorium')
                MACERATOR('kubejs:chunk.grossular_sand', '6x gtceu:crushed.grossular', 'gtceu:gem.yellow_garnet', 'gtceu:dust.stone', 'sand_grossular')
                MACERATOR('kubejs:chunk.spessartine_sand', '6x gtceu:crushed.spessartine', 'gtceu:gem.red_garnet', 'gtceu:dust.stone', 'sand_spessartine')
                MACERATOR('kubejs:chunk.pyrolusite_sand', '2x gtceu:crushed.pyrolusite', 'gtceu:dust.manganese', 'gtceu:dust.stone', 'sand_pyrolusite')
                MACERATOR('kubejs:chunk.tantalite_sand', '2x gtceu:crushed.tantalite', 'gtceu:dust.manganese', 'gtceu:dust.stone', 'sand_tantalite')
        //Andesite
            //Bronze
                MACERATOR('kubejs:chunk.redstone_stone', '10x gtceu:crushed.redstone', 'gtceu:gem.cinnabar', 'gtceu:dust.stone', 'stone_redstone')
                MACERATOR('kubejs:chunk.ruby_stone', '2x gtceu:crushed.ruby', 'gtceu:dust.chromium', 'gtceu:dust.stone', 'stone_ruby')
                MACERATOR('kubejs:chunk.cinnabar_stone', '2x gtceu:crushed.cinnabar', 'minecraft:redstone', 'gtceu:dust.stone', 'stone_cinnabar')
                MACERATOR('kubejs:chunk.chromite_stone', '2x gtceu:crushed.chromite', 'gtceu:dust.iron', 'gtceu:dust.stone', 'stone_chromite')
                MACERATOR('kubejs:chunk.almandine_stone', '6x gtceu:crushed.almandine', 'gtceu:gem.red_garnet', 'gtceu:dust.stone', 'stone_almandine')
                MACERATOR('kubejs:chunk.pyrope_stone', '6x gtceu:crushed.pyrope', 'gtceu:gem.red_garnet', 'gtceu:dust.stone', 'stone_pyrope')
                MACERATOR('kubejs:chunk.sapphire_stone', '2x gtceu:crushed.sapphire', 'gtceu:dust.aluminium', 'gtceu:dust.stone', 'stone_sapphire')
                MACERATOR('kubejs:chunk.green_sapphire_stone', '2x gtceu:crushed.green_sapphire', 'gtceu:dust.aluminium', 'gtceu:dust.stone', 'stone_green_sapphire')
                MACERATOR('kubejs:chunk.topaz_stone', '2x gtceu:crushed.topaz', 'gtceu:gem.blue_topaz', 'gtceu:dust.stone', 'stone_topaz')
                MACERATOR('kubejs:chunk.blue_topaz_stone', '4x gtceu:crushed.blue_topaz', 'gtceu:gem.topaz', 'gtceu:dust.stone', 'stone_blue_topaz')
            //Steel
                MACERATOR('kubejs:chunk.chalcopyrite_stone', '2x gtceu:crushed.chalcopyrite', 'gtceu:dust.pyrite', 'gtceu:dust.stone', 'stone_chalcopyrite')
                MACERATOR('kubejs:chunk.iron_stone', '2x gtceu:crushed.iron', 'gtceu:dust.nickel', 'gtceu:dust.stone', 'stone_iron')
                MACERATOR('kubejs:chunk.pyrite_stone', '2x gtceu:crushed.pyrite', 'gtceu:dust.sulfur', 'gtceu:dust.stone', 'stone_pyrite')
                MACERATOR('kubejs:chunk.copper_stone', '2x gtceu:crushed.copper', 'gtceu:dust.cobalt', 'gtceu:dust.stone', 'stone_copper')
                MACERATOR('kubejs:chunk.yellow_limonite_stone', '2x gtceu:crushed.yellow_limonite', 'gtceu:dust.nickel', 'gtceu:dust.stone', 'stone_yellow_limonite')
                MACERATOR('kubejs:chunk.malachite_stone', '2x gtceu:crushed.malachite', 'gtceu:dust.goethite', 'gtceu:dust.stone', 'stone_malachite')
                MACERATOR('kubejs:chunk.bastnasite_stone', '4x gtceu:crushed.bastnasite', 'gtceu:dust.neodymium', 'gtceu:dust.stone', 'stone_bastnasite')
                MACERATOR('kubejs:chunk.monazite_stone', '8x gtceu:crushed.monazite', 'gtceu:dust.thorium', 'gtceu:dust.stone', 'stone_monazite')
                MACERATOR('kubejs:chunk.neodymium_stone', '2x gtceu:crushed.neodymium', 'gtceu:dust.rare_earth', 'gtceu:dust.stone', 'stone_neodymium')
                MACERATOR('kubejs:chunk.garnierite_stone', '2x gtceu:crushed.garnierite', 'gtceu:dust.iron', 'gtceu:dust.stone', 'stone_garnierite')
                MACERATOR('kubejs:chunk.nickel_stone', '2x gtceu:crushed.nickel', 'gtceu:dust.cobalt', 'gtceu:dust.stone', 'stone_nickel')
                MACERATOR('kubejs:chunk.cobaltite_stone', '2x gtceu:crushed.cobaltite', 'gtceu:dust.sulfur', 'gtceu:dust.stone', 'stone_cobaltite')
                MACERATOR('kubejs:chunk.pentlandite_stone', '2x gtceu:crushed.pentlandite', 'gtceu:dust.iron', 'gtceu:dust.stone', 'stone_pentlandite')
                MACERATOR('kubejs:chunk.bentonite_stone', '6x gtceu:crushed.bentonite', 'gtceu:dust.aluminium', 'gtceu:dust.stone', 'stone_bentonite')
                MACERATOR('kubejs:chunk.magnesite_stone', '2x gtceu:crushed.magnesite', 'gtceu:dust.magnesium', 'gtceu:dust.stone', 'stone_magnesite')
                MACERATOR('kubejs:chunk.olivine_stone', '4x gtceu:crushed.olivine', 'gtceu:gem.pyrope', 'gtceu:dust.stone', 'stone_olivine')
                MACERATOR('kubejs:chunk.pitchblende_stone', '2x gtceu:crushed.pitchblende', 'gtceu:dust.thorium', 'gtceu:dust.stone', 'stone_pitchblende')
                MACERATOR('kubejs:chunk.uraninite_stone', '2x gtceu:crushed.uraninite', 'gtceu:dust.uraninite', 'gtceu:dust.stone', 'stone_uraninite')
                MACERATOR('kubejs:chunk.graphite_stone', '2x gtceu:crushed.graphite', 'gtceu:dust.carbon', 'gtceu:dust.stone', 'stone_graphite')
                MACERATOR('kubejs:chunk.diamond_stone', '2x gtceu:crushed.diamond', 'gtceu:dust.graphite', 'gtceu:dust.stone', 'stone_diamond')
                //Coal is in Line - 16
            //Aluminium
                MACERATOR('kubejs:chunk.beryllium_stone', '2x gtceu:crushed.beryllium', 'minecraft:emerald', 'gtceu:dust.stone', 'stone_beryllium')
                MACERATOR('kubejs:chunk.emerald_stone', '4x gtceu:crushed.emerald', 'gtceu:dust.beryllium', 'gtceu:dust.stone', 'stone_emerald')
                MACERATOR('kubejs:chunk.thorium_stone', '2x gtceu:crushed.thorium', 'gtceu:dust.uraninite', 'gtceu:dust.stone', 'stone_thorium')
                MACERATOR('kubejs:chunk.soapstone_stone', '6x gtceu:crushed.soapstone', 'gtceu:dust.silicon_dioxide', 'gtceu:dust.stone', 'stone_soapstone')
                MACERATOR('kubejs:chunk.talc_stone', '4x gtceu:crushed.talc', 'gtceu:dust.clay', 'gtceu:dust.stone', 'stone_talc')
                MACERATOR('kubejs:chunk.scheelite_stone', '2x gtceu:crushed.scheelite', 'gtceu:dust.manganese', 'gtceu:dust.stone', 'stone_scheelite')
                MACERATOR('kubejs:chunk.tungstate_stone', '2x gtceu:crushed.tungstate', 'gtceu:dust.manganese', 'gtceu:dust.stone', 'stone_tungstate')
                MACERATOR('kubejs:chunk.lithium_stone', '2x gtceu:crushed.lithium', 'gtceu:dust.lithium', 'gtceu:dust.stone', 'stone_lithium')
        //Granite
            //String
                MACERATOR('kubejs:chunk.apatite_stone', '8x gtceu:crushed.apatite', 'gtceu:dust.tricalcium_phosphate', 'gtceu:dust.stone', 'stone_apatite')
                MACERATOR('kubejs:chunk.tricalcium_phosphate_stone', '6x gtceu:crushed.tricalcium_phosphate', 'gtceu:gem.apatite', 'gtceu:dust.stone', 'stone_tricalcium_phosphate')
                MACERATOR('kubejs:chunk.bauxite_stone', '2x gtceu:crushed.bauxite', 'gtceu:gem.grossular', 'gtceu:dust.stone', 'stone_bauxite')
                MACERATOR('kubejs:chunk.aluminium_stone', '2x gtceu:crushed.aluminium', 'gtceu:dust.bauxite', 'gtceu:dust.stone', 'stone_aluminium')
                MACERATOR('kubejs:chunk.ilmenite_stone', '2x gtceu:crushed.ilmenite', 'gtceu:dust.iron', 'gtceu:dust.stone', 'stone_ilmenite')
                MACERATOR('kubejs:chunk.magnetite_stone', '2x gtceu:crushed.magnetite', 'gtceu:dust.iron', 'gtceu:dust.stone', 'stone_magnetite')
                //Iron
                MACERATOR('kubejs:chunk.vanadium_magnetite_stone', '2x gtceu:crushed.vanadium_magnetite', 'gtceu:dust.magnetite', 'gtceu:dust.stone', 'stone_vanadium_magnetite')
                MACERATOR('kubejs:chunk.gold_stone', '2x gtceu:crushed.gold', 'gtceu:dust.copper', 'gtceu:dust.stone', 'stone_gold')
                MACERATOR('kubejs:chunk.quartzite_stone', '4x gtceu:crushed.quartzite', 'gtceu:gem.certus_quartz', 'gtceu:dust.stone', 'stone_quartzite')
                MACERATOR('kubejs:chunk.barite_stone', '2x gtceu:crushed.barite', 'gtceu:dust.barite', 'gtceu:dust.stone', 'stone_barite')
                MACERATOR('kubejs:chunk.certus_quartz_stone', '4x gtceu:crushed.certus_quartz', 'minecraft:quartz', 'gtceu:dust.stone', 'stone_certus_quartz')
                MACERATOR('kubejs:chunk.tetrahedrite_stone', '2x gtceu:crushed.tetrahedrite', 'gtceu:dust.antimony', 'gtceu:dust.stone', 'stone_tetrahedrite')
                //Copper
                MACERATOR('kubejs:chunk.stibnite_stone', '2x gtceu:crushed.stibnite', 'gtceu:dust.antimony_trioxide', 'gtceu:dust.stone', 'stone_stibnite')
            //Bronze
                //Redstone
                //Ruby
                //Cinnabar
                //Chromite
                MACERATOR('kubejs:chunk.bornite_stone', '2x gtceu:crushed.bornite', 'gtceu:dust.pyrite', 'gtceu:dust.stone', 'stone_bornite')
                MACERATOR('kubejs:chunk.chalcocite_stone', '2x gtceu:crushed.chalcocite', 'gtceu:dust.sulfur', 'gtceu:dust.stone', 'stone_chalcocite')
                MACERATOR('kubejs:chunk.lazurite_stone', '12x gtceu:crushed.lazurite', 'gtceu:gem.sodalite', 'gtceu:dust.stone', 'stone_lazurite')
                MACERATOR('kubejs:chunk.sodalite_stone', '12x gtceu:crushed.sodalite', 'gtceu:gem.lazurite', 'gtceu:dust.stone', 'stone_sodalite')
                MACERATOR('kubejs:chunk.lapis_stone', '12x gtceu:crushed.lapis', 'gtceu:gem.lazurite', 'gtceu:dust.stone', 'stone_lapis')
                MACERATOR('kubejs:chunk.calcite_stone', '2x gtceu:crushed.calcite', 'gtceu:dust.calcium', 'gtceu:dust.stone', 'stone_calcite')
                //Topaz
                //Blue Topaz
            //Steel
                //Chalcopyrite
                //Pyrite
                //Yellow Limonite
                //Bastnasite
                //Monazite
                //Neodymium
                //Garnierite
                //Cobaltite
                //Pentlandite
                //Pitchblende
                //Uraninite
                MACERATOR('kubejs:chunk.kyanite_stone', '2x gtceu:crushed.kyanite', 'gtceu:dust.talc', 'gtceu:dust.stone', 'stone_kyanite')
                MACERATOR('kubejs:chunk.mica_stone', '4x gtceu:crushed.mica', 'gtceu:dust.potassium', 'gtceu:dust.stone', 'stone_mica')
                //Cassiterite
                MACERATOR('kubejs:chunk.pollucite_stone', '2x gtceu:crushed.pollucite', 'gtceu:dust.caesium', 'gtceu:dust.stone', 'stone_pollucite')
            //Aluminium
                //Graphite
                //Diamond
                //Coal
                MACERATOR('kubejs:chunk.wulfenite_stone', '2x gtceu:crushed.wulfenite', 'gtceu:dust.iron', 'gtceu:dust.stone', 'stone_wulfenite')
                MACERATOR('kubejs:chunk.molybdenite_stone', '2x gtceu:crushed.molybdenite', 'gtceu:dust.molybdenum', 'gtceu:dust.stone', 'stone_molybdenite')
                MACERATOR('kubejs:chunk.powellite_stone', '2x gtceu:crushed.powellite', 'gtceu:dust.iron', 'gtceu:dust.stone', 'stone_powellite')
                //Soapstone
                //Talc
                //Scheelite
                //Tungstate
                //Lithium
        //Diorite
            //String
                //Bauxite
                //Aluminium
                //Ilmenite
                //Chalcopyrite
                //Cassiterite
                MACERATOR('kubejs:chunk.alunite', '6x gtceu:crushed.alunite', 'gtceu:dust.alunite', 'gtceu:dust.stone', 'stone_alunite')
                //Quartzite
                //Barite
                //Certus Quartz
                //Tin
            //Bronze
                //Bornite
                //Chalcocite
                //Copper
                //Galena
                //Lead
                //Silver
                //Lazurite
                //Sodalite
                //Lapis
                //Calcite
            //Steel
                //Yellow Limonite
                //Malachite
                //Pitchblende
                //Uraninite
                //Kyanite
                //Mica
                //Cassiterite
                //Pollucite
            //Aluminium
                //Graphite
                //Diamond
                //Coal
                //Soapstone
                //Talc
                //Pentlandite
        //Netherrack
            //Bronze
                MACERATOR('kubejs:chunk.chalcopyrite_nether', '4x gtceu:crushed.chalcopyrite', 'gtceu:dust.pyrite', 'gtceu:dust.netherrack', 'nether_chalcopyrite')
                MACERATOR('kubejs:chunk.iron_nether', '4x gtceu:crushed.iron', 'gtceu:dust.nickel', 'gtceu:dust.netherrack', 'nether_iron')
                MACERATOR('kubejs:chunk.pyrite_nether', '4x gtceu:crushed.pyrite', 'gtceu:dust.sulfur', 'gtceu:dust.netherrack', 'nether_pyrite')
                MACERATOR('kubejs:chunk.copper_nether', '4x gtceu:crushed.copper', 'gtceu:dust.cobalt', 'gtceu:dust.netherrack', 'nether_copper')
                MACERATOR('kubejs:chunk.yellow_limonite_nether', '4x gtceu:crushed.yellow_limonite', 'gtceu:dust.nickel', 'gtceu:dust.netherrack', 'nether_yellow_limonite')
                MACERATOR('kubejs:chunk.malachite_nether', '4x gtceu:crushed.malachite', 'gtceu:dust.goethite', 'gtceu:dust.netherrack', 'nether_malachite')
                MACERATOR('kubejs:chunk.magnetite_nether', '4x gtceu:crushed.magnetite', 'gtceu:dust.iron', 'gtceu:dust.netherrack', 'nether_magnetite')
                MACERATOR('kubejs:chunk.vanadium_magnetite_nether', '4x gtceu:crushed.vanadium_magnetite', 'gtceu:dust.magnetite', 'gtceu:dust.netherrack', 'nether_vanadium_magnetite')
                MACERATOR('kubejs:chunk.gold_nether', '4x gtceu:crushed.gold', 'gtceu:dust.copper', 'gtceu:dust.netherrack', 'nether_gold')
                MACERATOR('kubejs:chunk.nether_quartz_nether', '8x gtceu:crushed.nether_quartz', 'gtceu:gem.quartzite', 'gtceu:dust.netherrack', 'nether_nether_quartz')
                MACERATOR('kubejs:chunk.sulfur_nether', '4x gtceu:crushed.sulfur', 'gtceu:dust.sulfur', 'gtceu:dust.netherrack', 'nether_sulfur')
                MACERATOR('kubejs:chunk.sphalerite_nether', '4x gtceu:crushed.sphalerite', 'gtceu:gem.yellow_garnet', 'gtceu:dust.netherrack', 'nether_sphalerite')
                MACERATOR('kubejs:chunk.tetrahedrite_nether', '4x gtceu:crushed.tetrahedrite', 'gtceu:dust.antimony', 'gtceu:dust.netherrack', 'nether_tetrahedrite')
                MACERATOR('kubejs:chunk.stibnite_nether', '4x gtceu:crushed.stibnite', 'gtceu:dust.antimony_trioxide', 'gtceu:dust.netherrack', 'nether_stibnite')
            //Aluminium
                MACERATOR('kubejs:chunk.garnierite_nether', '4x gtceu:crushed.garnierite', 'gtceu:dust.iron', 'gtceu:dust.netherrack', 'nether_garnierite')
                MACERATOR('kubejs:chunk.nickel_nether', '4x gtceu:crushed.nickel', 'gtceu:dust.cobalt', 'gtceu:dust.netherrack', 'nether_nickel')
                MACERATOR('kubejs:chunk.cobaltite_nether', '4x gtceu:crushed.cobaltite', 'gtceu:dust.sulfur', 'gtceu:dust.netherrack', 'nether_cobaltite')
                MACERATOR('kubejs:chunk.pentlandite_nether', '4x gtceu:crushed.pentlandite', 'gtceu:dust.iron', 'gtceu:dust.netherrack', 'nether_pentlandite')
                MACERATOR('kubejs:chunk.redstone_nether', '20x gtceu:crushed.redstone', 'gtceu:gem.cinnabar', 'gtceu:dust.netherrack', 'nether_redstone')
                MACERATOR('kubejs:chunk.ruby_nether', '4x gtceu:crushed.ruby', 'gtceu:dust.chromium', 'gtceu:dust.netherrack', 'nether_ruby')
                MACERATOR('kubejs:chunk.cinnabar_nether', '4x gtceu:crushed.cinnabar', 'minecraft:redstone', 'gtceu:dust.netherrack', 'nether_cinnabar')
                MACERATOR('kubejs:chunk.chromite_nether', '4x gtceu:crushed.chromite', 'gtceu:dust.iron', 'gtceu:dust.netherrack', 'nether_chromite')
                MACERATOR('kubejs:chunk.electrotine_nether', '20x gtceu:crushed.electrotine', 'minecraft:redstone', 'gtceu:dust.netherrack', 'nether_electrotine')
                MACERATOR('kubejs:chunk.topaz_nether', '4x gtceu:crushed.topaz', 'gtceu:gem.blue_topaz', 'gtceu:dust.netherrack', 'nether_topaz')
                MACERATOR('kubejs:chunk.blue_topaz_nether', '8x gtceu:crushed.blue_topaz', 'gtceu:gem.topaz', 'gtceu:dust.netherrack', 'nether_blue_topaz')
        //Endstone
            //Bronze
                MACERATOR('kubejs:chunk.beryllium_end', '4x gtceu:crushed.beryllium', 'minecraft:emerald', 'gtceu:dust.endstone', 'endstone_beryllium')
                MACERATOR('kubejs:chunk.emerald_end', '8x gtceu:crushed.emerald', 'gtceu:dust.beryllium', 'gtceu:dust.endstone', 'endstone_emerald')
                MACERATOR('kubejs:chunk.thorium_end', '4x gtceu:crushed.thorium', 'gtceu:dust.uraninite', 'gtceu:dust.endstone', 'endstone_thorium')
            //Steel
                MACERATOR('kubejs:chunk.grossular_end', '12x gtceu:crushed.grossular', 'gtceu:gem.yellow_garnet', 'gtceu:dust.endstone', 'endstone_grossular')
                MACERATOR('kubejs:chunk.spessartine_end', '12x gtceu:crushed.spessartine', 'gtceu:gem.red_garnet', 'gtceu:dust.endstone', 'endstone_spessartine')
                MACERATOR('kubejs:chunk.pyrolusite_end', '4x gtceu:crushed.pyrolusite', 'gtceu:dust.manganese', 'gtceu:dust.endstone', 'endstone_pyrolusite')
                MACERATOR('kubejs:chunk.tantalite_end', '4x gtceu:crushed.tantalite', 'gtceu:dust.manganese', 'gtceu:dust.endstone', 'endstone_tantalite')
                MACERATOR('kubejs:chunk.wulfenite_end', '4x gtceu:crushed.wulfenite', 'gtceu:dust.iron', 'gtceu:dust.endstone', 'endstone_wulfenite')
                MACERATOR('kubejs:chunk.molybdenite_end', '4x gtceu:crushed.molybdenite', 'gtceu:dust.molybdenum', 'gtceu:dust.endstone', 'endstone_molybdenite')
                MACERATOR('kubejs:chunk.powellite_end', '4x gtceu:crushed.powellite', 'gtceu:dust.iron', 'gtceu:dust.endstone', 'endstone_powellite')
                MACERATOR('kubejs:chunk.garnierite_end', '4x gtceu:crushed.garnierite', 'gtceu:dust.iron', 'gtceu:dust.endstone', 'endstone_garnierite')
                MACERATOR('kubejs:chunk.nickel_end', '4x gtceu:crushed.nickel', 'gtceu:dust.cobalt', 'gtceu:dust.endstone', 'endstone_nickel')
                MACERATOR('kubejs:chunk.cobaltite_end', '4x gtceu:crushed.cobaltite', 'gtceu:dust.sulfur', 'gtceu:dust.endstone', 'endstone_cobaltite')
                MACERATOR('kubejs:chunk.pentlandite_end', '4x gtceu:crushed.pentlandite', 'gtceu:dust.iron', 'gtceu:dust.endstone', 'endstone_pentlandite')
                MACERATOR('kubejs:chunk.bentonite_end', '12x gtceu:crushed.bentonite', 'gtceu:dust.aluminium', 'gtceu:dust.endstone', 'endstone_bentonite')
                MACERATOR('kubejs:chunk.magnesite_end', '4x gtceu:crushed.magnesite', 'gtceu:dust.magnesium', 'gtceu:dust.endstone', 'endstone_magnesite')
                MACERATOR('kubejs:chunk.olivine_end', '8x gtceu:crushed.olivine', 'gtceu:gem.pyrope', 'gtceu:dust.endstone', 'endstone_olivine')
                MACERATOR('kubejs:chunk.chromite_end', '4x gtceu:crushed.chromite', 'gtceu:dust.iron', 'gtceu:dust.endstone', 'endstone_chromite')
                MACERATOR('kubejs:chunk.sheldonite_end', '4x gtceu:crushed.cooperite', 'gtceu:dust.nickel', 'gtceu:dust.endstone', 'endstone_sheldonite')
                MACERATOR('kubejs:chunk.palladium_end', '4x gtceu:crushed.palladium', 'gtceu:dust.palladium', 'gtceu:dust.endstone', 'endstone_palladium')
                MACERATOR('kubejs:chunk.scheelite_end', '4x gtceu:crushed.scheelite', 'gtceu:dust.manganese', 'gtceu:dust.endstone', 'endstone_scheelite')
                MACERATOR('kubejs:chunk.tungstate_end', '4x gtceu:crushed.tungstate', 'gtceu:dust.manganese', 'gtceu:dust.endstone', 'endstone_tungstate')
                MACERATOR('kubejs:chunk.lithium_end', '4x gtceu:crushed.lithium', 'gtceu:dust.lithium', 'gtceu:dust.endstone', 'endstone_lithium')
            //Aluminium
                MACERATOR('kubejs:chunk.naquadah_end', '4x gtceu:crushed.naquadah', 'gtceu:dust.sulfur', 'gtceu:dust.endstone', 'endstone_naquadah')
                MACERATOR('kubejs:chunk.lazurite_end', '24x gtceu:crushed.lazurite', 'gtceu:gem.sodalite', 'gtceu:dust.endstone', 'endstone_lazurite')
                MACERATOR('kubejs:chunk.sodalite_end', '24x gtceu:crushed.sodalite', 'gtceu:gem.lazurite', 'gtceu:dust.endstone', 'endstone_sodalite')
                MACERATOR('kubejs:chunk.lapis_end', '24x gtceu:crushed.lapis', 'gtceu:gem.lazurite', 'gtceu:dust.endstone', 'endstone_lapis')
                MACERATOR('kubejs:chunk.calcite_end', '4x gtceu:crushed.calcite', 'gtceu:dust.calcium', 'gtceu:dust.endstone', 'endstone_calcite')

        function FORGE_HAMMER(Ore, Crushed, ID){
            event.recipes.gtceu.gt_recipe_serializer("forge_hammer", `gtceu:forge_hammer/hammer_${ID}_ore_chunk_to_crushed_ore`)
            .itemInputs(Ore)
            .itemOutputs(Crushed)
            .duration(10)
            .EUt(16)   
        }
        //Gravel
            //String
                FORGE_HAMMER('kubejs:chunk.gypsum_stone', '1x gtceu:crushed.gypsum', 'stone_gypsum')
                FORGE_HAMMER('kubejs:chunk.spodumene_stone', '1x gtceu:crushed.spodumene', 'stone_spodumene')
                FORGE_HAMMER('kubejs:chunk.cassiterite_stone', '2x gtceu:crushed.cassiterite', 'stone_cassiterite')
                FORGE_HAMMER('kubejs:chunk.coal_stone', '2x gtceu:crushed.coal', 'stone_coal')
                FORGE_HAMMER('kubejs:chunk.trona_stone', '2x gtceu:crushed.trona', 'stone_trona')
                FORGE_HAMMER('kubejs:chunk.fullers_earth_stone', '2x gtceu:crushed.fullers_earth', 'stone_fullers_earth')
                FORGE_HAMMER('kubejs:chunk.basaltic_mineral_stone', '1x gtceu:crushed.basaltic_mineral_sand', 'stone_basaltic_mineral_sand')
                FORGE_HAMMER('kubejs:chunk.salt_stone', '2x gtceu:crushed.salt', 'stone_salt')
                FORGE_HAMMER('kubejs:chunk.granitic_mineral_stone', '1x gtceu:crushed.granitic_mineral_sand', 'stone_granitic_mineral_sand')
                FORGE_HAMMER('kubejs:chunk.tin_stone', '1x gtceu:crushed.tin', 'stone_tin')
                FORGE_HAMMER('kubejs:chunk.rock_salt_stone', '2x gtceu:crushed.rock_salt', 'stone_rock_salt')
                FORGE_HAMMER('kubejs:chunk.lepidolite_stone', '2x gtceu:crushed.lepidolite', 'stone_lepidolite')
            //Bronze
                FORGE_HAMMER('kubejs:chunk.galena_stone', '1x gtceu:crushed.galena', 'stone_galena')
                FORGE_HAMMER('kubejs:chunk.lead_stone', '1x gtceu:crushed.lead', 'stone_lead')
                FORGE_HAMMER('kubejs:chunk.silver_stone', '1x gtceu:crushed.silver', 'stone_silver')
                FORGE_HAMMER('kubejs:chunk.zeolite_stone', '3x gtceu:crushed.zeolite', 'stone_zeolite')
                FORGE_HAMMER('kubejs:chunk.glauconite_sand_stone', '3x gtceu:crushed.glauconite_sand', 'stone_glauconite_sand')
                FORGE_HAMMER('kubejs:chunk.oilsands_stone', '1x gtceu:crushed.oilsands', 'stone_oilsands')
                FORGE_HAMMER('kubejs:chunk.garnet_sand_stone', '1x gtceu:crushed.garnet_sand', 'stone_garnet_sand')
                FORGE_HAMMER('kubejs:chunk.asbestos_stone', '3x gtceu:crushed.asbestos', 'stone_asbestos')
                FORGE_HAMMER('kubejs:chunk.diatomite_stone', '1x gtceu:crushed.diatomite', 'stone_diatomite')
            //Steel
                FORGE_HAMMER('kubejs:chunk.platinum_stone', '1x gtceu:crushed.platinum', 'stone_platinum')
                FORGE_HAMMER('kubejs:chunk.palladium_stone', '1x gtceu:crushed.palladium', 'stone_palladium')
        //Sand
            //Bronze
                FORGE_HAMMER('kubejs:chunk.copper_sand', 'gtceu:crushed.copper', 'sand_copper')
                FORGE_HAMMER('kubejs:chunk.redstone_sand', '5x gtceu:crushed.redstone', 'sand_redstone')
                FORGE_HAMMER('kubejs:chunk.cinnabar_sand', 'gtceu:gem.cinnabar', 'sand_cinnabar')
                FORGE_HAMMER('kubejs:chunk.chromite_sand', 'gtceu:crushed.chromite', 'sand_chromite')
                FORGE_HAMMER('kubejs:chunk.pyrope_sand', '3x gtceu:gem.pyrope', 'sand_pyrope')
                FORGE_HAMMER('kubejs:chunk.sapphire_sand', 'gtceu:gem.sapphire', 'sand_sapphire')
                FORGE_HAMMER('kubejs:chunk.green_sapphire_sand', 'gtceu:gem.green_sapphire', 'sand_green_sapphire')
            //Steel
                FORGE_HAMMER('kubejs:chunk.chalcopyrite_sand', 'gtceu:crushed.chalcopyrite', 'sand_chalcopyrite')
                FORGE_HAMMER('kubejs:chunk.iron_sand', 'gtceu:crushed.iron', 'sand_iron')
                FORGE_HAMMER('kubejs:chunk.pyrite_sand', 'gtceu:crushed.pyrite', 'sand_pyrite')
                FORGE_HAMMER('kubejs:chunk.yellow_limonite_sand', 'gtceu:crushed.yellow_limonite', 'sand_yellow_limonite')
                FORGE_HAMMER('kubejs:chunk.malachite_sand', 'gtceu:crushed.malachite', 'sand_malachite')
                FORGE_HAMMER('kubejs:chunk.garnierite_sand', 'gtceu:crushed.garnierite', 'sand_garnierite')
                FORGE_HAMMER('kubejs:chunk.nickel_sand', 'gtceu:crushed.nickel', 'sand_nickel')
                FORGE_HAMMER('kubejs:chunk.cobaltite_sand', 'gtceu:crushed.cobaltite', 'sand_cobaltite')
                FORGE_HAMMER('kubejs:chunk.pentlandite_sand', 'gtceu:crushed.pentlandite', 'sand_pentlandite')
                FORGE_HAMMER('kubejs:chunk.bentonite_sand', 'gtceu:crushed.bentonite', 'sand_bentonite')
                FORGE_HAMMER('kubejs:chunk.magnesite_sand', 'gtceu:crushed.magnesite', 'sand_magnesite')
                FORGE_HAMMER('kubejs:chunk.olivine_sand', '2x gtceu:gem.olivine', 'sand_olivine')
            //Aluminium
                FORGE_HAMMER('kubejs:chunk.beryllium_sand', 'gtceu:crushed.beryllium', 'sand_beryllium')
                FORGE_HAMMER('kubejs:chunk.emerald_sand', '2x gtceu:crushed.emerald', 'sand_emerald')
                FORGE_HAMMER('kubejs:chunk.thorium_sand', 'gtceu:crushed.thorium', 'sand_thorium')
                FORGE_HAMMER('kubejs:chunk.grossular_sand', '3x gtceu:gem.grossular', 'sand_grossular')
                FORGE_HAMMER('kubejs:chunk.spessartine_sand', '3x gtceu:gem.spessartine', 'sand_spessartine')
                FORGE_HAMMER('kubejs:chunk.pyrolusite_sand', 'gtceu:crushed.pyrolusite', 'sand_pyrolusite')
                FORGE_HAMMER('kubejs:chunk.tantalite_sand', 'gtceu:crushed.tantalite', 'sand_tantalite')
        //Andesite
            //Bronze
                FORGE_HAMMER('kubejs:chunk.redstone_stone', '5x gtceu:crushed.redstone', 'stone_redstone')
                FORGE_HAMMER('kubejs:chunk.ruby_stone', 'gtceu:gem.ruby', 'stone_ruby')
                FORGE_HAMMER('kubejs:chunk.cinnabar_stone', 'gtceu:gem.cinnabar', 'stone_cinnabar')
                FORGE_HAMMER('kubejs:chunk.chromite_stone', 'gtceu:crushed.chromite', 'stone_chromite')
                FORGE_HAMMER('kubejs:chunk.almandine_stone', '3x gtceu:gem.almandine', 'stone_almandine')
                FORGE_HAMMER('kubejs:chunk.pyrope_stone', '3x gtceu:gem.pyrope', 'stone_pyrope')
                FORGE_HAMMER('kubejs:chunk.sapphire_stone', 'gtceu:gem.sapphire', 'stone_sapphire')
                FORGE_HAMMER('kubejs:chunk.green_sapphire_stone', 'gtceu:gem.green_sapphire', 'stone_green_sapphire')
                FORGE_HAMMER('kubejs:chunk.topaz_stone', 'gtceu:gem.topaz', 'stone_topaz')
                FORGE_HAMMER('kubejs:chunk.blue_topaz_stone', '2x gtceu:gem.blue_topaz', 'stone_blue_topaz')
            //Steel
                FORGE_HAMMER('kubejs:chunk.chalcopyrite_stone', 'gtceu:crushed.chalcopyrite', 'stone_chalcopyrite')
                FORGE_HAMMER('kubejs:chunk.iron_stone', 'gtceu:crushed.iron', 'stone_iron')
                FORGE_HAMMER('kubejs:chunk.pyrite_stone', 'gtceu:crushed.pyrite', 'stone_pyrite')
                FORGE_HAMMER('kubejs:chunk.yellow_limonite_stone', 'gtceu:crushed.yellow_limonite', 'stone_yellow_limonite')
                FORGE_HAMMER('kubejs:chunk.malachite_stone', 'gtceu:crushed.malachite', 'stone_malachite')
                FORGE_HAMMER('kubejs:chunk.bastnasite_stone', '2x gtceu:crushed.bastnasite', 'stone_bastnasite')
                FORGE_HAMMER('kubejs:chunk.monazite_stone', '4x gtceu:gem.monazite', 'stone_monazite')
                FORGE_HAMMER('kubejs:chunk.neodymium_stone', 'gtceu:crushed.neodymium', 'stone_neodymium')
                FORGE_HAMMER('kubejs:chunk.garnierite_stone', 'gtceu:crushed.garnierite', 'stone_garnierite')
                FORGE_HAMMER('kubejs:chunk.nickel_stone', 'gtceu:crushed.nickel', 'stone_nickel')
                FORGE_HAMMER('kubejs:chunk.cobaltite_stone', 'gtceu:crushed.cobaltite', 'stone_cobaltite')
                FORGE_HAMMER('kubejs:chunk.pentlandite_stone', 'gtceu:crushed.pentlandite', 'stone_pentlandite')
                FORGE_HAMMER('kubejs:chunk.bentonite_stone', 'gtceu:crushed.bentonite', 'stone_bentonite')
                FORGE_HAMMER('kubejs:chunk.magnesite_stone', 'gtceu:crushed.magnesite', 'stone_magnesite')
                FORGE_HAMMER('kubejs:chunk.olivine_stone', '2x gtceu:gem.olivine', 'stone_olivine')
                FORGE_HAMMER('kubejs:chunk.pitchblende_stone', 'gtceu:crushed.pitchblende', 'stone_pitchblende')
                FORGE_HAMMER('kubejs:chunk.uraninite_stone', 'gtceu:crushed.uraninite', 'stone_uraninite')
                FORGE_HAMMER('kubejs:chunk.graphite_stone', 'gtceu:crushed.graphite', 'stone_graphite')
                FORGE_HAMMER('kubejs:chunk.diamond_stone', 'gtceu:crushed.diamond', 'stone_diamond')
                //coal on line - 117
            //Aluminium
                FORGE_HAMMER('kubejs:chunk.beryllium_stone', 'gtceu:crushed.beryllium', 'stone_beryllium')
                FORGE_HAMMER('kubejs:chunk.emerald_stone', '2x gtceu:crushed.emerald', 'stone_emerald')
                FORGE_HAMMER('kubejs:chunk.thorium_stone', 'gtceu:crushed.thorium', 'stone_thorium')
                FORGE_HAMMER('kubejs:chunk.soapstone_stone', '3x gtceu:crushed.soapstone', 'stone_soapstone')
                FORGE_HAMMER('kubejs:chunk.talc_stone', '2x gtceu:crushed.talc ', 'stone_talc')
                FORGE_HAMMER('kubejs:chunk.scheelite_stone', 'gtceu:crushed.scheelite', 'stone_scheelite')
                FORGE_HAMMER('kubejs:chunk.tungstate_stone', 'gtceu:crushed.tungstate', 'stone_tungstate')
                FORGE_HAMMER('kubejs:chunk.lithium_stone', 'gtceu:crushed.lithium', 'stone_lithium')
        //Granite
            //String
                FORGE_HAMMER('kubejs:chunk.apatite_stone', '4x gtceu:gem.apatite', 'stone_apatite')
                FORGE_HAMMER('kubejs:chunk.tricalcium_phosphate_stone', '3x gtceu:crushed.tricalcium_phosphate', 'stone_tricalcium_phosphate')
                FORGE_HAMMER('kubejs:chunk.bauxite_stone', 'gtceu:crushed.bauxite', 'stone_bauxite')
                FORGE_HAMMER('kubejs:chunk.aluminium_stone', 'gtceu:crushed.aluminium', 'stone_aluminium')
                FORGE_HAMMER('kubejs:chunk.ilmenite_stone', 'gtceu:crushed.ilmenite', 'stone_ilmenite')
                FORGE_HAMMER('kubejs:chunk.magnetite_stone', 'gtceu:crushed.magnetite', 'stone_magnetite')
                //Iron
                FORGE_HAMMER('kubejs:chunk.vanadium_magnetite_stone', 'gtceu:crushed.vanadium_magnetite', 'stone_vanadium_magnetite')
                FORGE_HAMMER('kubejs:chunk.gold_stone', 'gtceu:crushed.gold', 'stone_gold')
                FORGE_HAMMER('kubejs:chunk.quartzite_stone', '2x gtceu:gem.quartzite', 'stone_quartzite')
                FORGE_HAMMER('kubejs:chunk.barite_stone', 'gtceu:crushed.barite', 'stone_barite')
                FORGE_HAMMER('kubejs:chunk.certus_quartz_stone', '2x gtceu:gem.certus_quartz', 'stone_certus_quartz')
                FORGE_HAMMER('kubejs:chunk.tetrahedrite_stone', 'gtceu:crushed.tetrahedrite', 'stone_tetrahedrite')
                //Copper
                FORGE_HAMMER('kubejs:chunk.stibnite_stone', 'gtceu:crushed.stibnite', 'stone_stibnite')
            //Bronze
                //Redstone
                //Ruby
                //Cinnabar
                //Chromite
                FORGE_HAMMER('kubejs:chunk.bornite_stone', 'gtceu:crushed.bornite', 'stone_bornite')
                FORGE_HAMMER('kubejs:chunk.chalcocite_stone', 'gtceu:crushed.chalcocite', 'stone_chalcocite')
                FORGE_HAMMER('kubejs:chunk.lazurite_stone', '6x gtceu:gem.lazurite', 'stone_lazurite')
                FORGE_HAMMER('kubejs:chunk.sodalite_stone', '6x gtceu:gem.sodalite', 'stone_sodalite')
                FORGE_HAMMER('kubejs:chunk.lapis_stone', '6x gtceu:crushed.lapis', 'stone_lapis')
                FORGE_HAMMER('kubejs:chunk.calcite_stone', 'gtceu:crushed.calcite', 'stone_calcite')
                //Topaz
                //Blue Topaz
            //Steel
                //Chalcopyrite
                //Pyrite
                //Yellow Limonite
                //Bastnasite
                //Monazite
                //Neodymium
                //Garnierite
                //Cobaltite
                //Pentlandite
                //Pitchblende
                //Uraninite
                FORGE_HAMMER('kubejs:chunk.kyanite_stone', 'gtceu:crushed.kyanite', 'stone_kyanite')
                FORGE_HAMMER('kubejs:chunk.mica_stone', '2x gtceu:crushed.mica', 'stone_mica')
                //Cassiterite
                FORGE_HAMMER('kubejs:chunk.pollucite_stone', 'gtceu:crushed.pollucite', 'stone_pollucite')
            //Aluminium
                //Graphite
                //Diamond
                //Coal
                FORGE_HAMMER('kubejs:chunk.wulfenite_stone', 'gtceu:crushed.wulfenite', 'stone_wulfenite')
                FORGE_HAMMER('kubejs:chunk.molybdenite_stone', 'gtceu:crushed.molybdenite', 'stone_molybdenite')
                FORGE_HAMMER('kubejs:chunk.powellite_stone', 'gtceu:crushed.powellite', 'stone_powellite')
                //Soapstone
                //Talc
                //Scheelite
                //Tungstate
                //Lithium
        //Diorite
            //String
                //Bauxite
                //Aluminium
                //Ilmenite
                //Chalcopyrite
                //Cassiterite
                FORGE_HAMMER('kubejs:chunk.alunite_stone', '3x gtceu:crushed.alunite', 'stone_alunite')
                //Quartzite
                //Barite
                //Certus Quartz
                //Tin
            //Bronze
                //Bornite
                //Chalcocite
                //Copper
                //Galena
                //Lead
                //Silver
                //Lazurite
                //Sodalite
                //Lapis
                //Calcite
            //Steel
                //Yellow Limonite
                //Malachite
                //Pitchblende
                //Uraninite
                //Kyanite
                //Mica
                //Cassiterite
                //Pollucite
            //Aluminium
                //Graphite
                //Diamond
                //Coal
                //Soapstone
                //Talc
                //Pentlandite
        //Netherrack
            //Bronze
                FORGE_HAMMER('kubejs:chunk.chalcopyrite_nether', '2x gtceu:crushed.chalcopyrite', 'nether_chalcopyrite')
                FORGE_HAMMER('kubejs:chunk.iron_nether', '2x gtceu:crushed.iron', 'nether_iron')
                FORGE_HAMMER('kubejs:chunk.pyrite_nether', '2x gtceu:crushed.pyrite', 'nether_pyrite')
                FORGE_HAMMER('kubejs:chunk.copper_nether', '2x gtceu:crushed.copper', 'nether_copper')
                FORGE_HAMMER('kubejs:chunk.yellow_limonite_nether', '2x gtceu:crushed.yellow_limonite', 'nether_yellow_limonite')
                FORGE_HAMMER('kubejs:chunk.malachite_nether', '2x gtceu:crushed.malachite', 'nether_malachite')
                FORGE_HAMMER('kubejs:chunk.magnetite_nether', '2x gtceu:crushed.magnetite', 'nether_magnetite')
                FORGE_HAMMER('kubejs:chunk.vanadium_magnetite_nether', '2x gtceu:crushed.vanadium_magnetite', 'nether_vanadium_magnetite')
                FORGE_HAMMER('kubejs:chunk.gold_nether', '2x gtceu:crushed.gold', 'nether_gold')
                FORGE_HAMMER('kubejs:chunk.nether_quartz_nether', '4x gtceu:crushed.nether_quartz', 'nether_nether_quartz')
                FORGE_HAMMER('kubejs:chunk.sulfur_nether', '2x gtceu:crushed.sulfur', 'nether_sulfur')
                FORGE_HAMMER('kubejs:chunk.sphalerite_nether', '2x gtceu:crushed.sphalerite', 'nether_sphalerite')
                FORGE_HAMMER('kubejs:chunk.tetrahedrite_nether', '2x gtceu:crushed.tetrahedrite', 'nether_tetrahedrite')
                FORGE_HAMMER('kubejs:chunk.stibnite_nether', '2x gtceu:crushed.stibnite', 'nether_stibnite')
            //Aluminium
                FORGE_HAMMER('kubejs:chunk.garnierite_nether', '2x gtceu:crushed.garnierite', 'nether_garnierite')
                FORGE_HAMMER('kubejs:chunk.nickel_nether', '2x gtceu:crushed.nickel', 'nether_nickel')
                FORGE_HAMMER('kubejs:chunk.cobaltite_nether', '2x gtceu:crushed.cobaltite', 'nether_cobaltite')
                FORGE_HAMMER('kubejs:chunk.pentlandite_nether', '2x gtceu:crushed.pentlandite', 'nether_pentlandite')
                FORGE_HAMMER('kubejs:chunk.redstone_nether', '10x gtceu:crushed.redstone', 'nether_redstone')
                FORGE_HAMMER('kubejs:chunk.ruby_nether', '2x gtceu:gem.ruby', 'nether_ruby')
                FORGE_HAMMER('kubejs:chunk.cinnabar_nether', '2x gtceu:gem.cinnabar', 'nether_cinnabar')
                FORGE_HAMMER('kubejs:chunk.chromite_nether', '2x gtceu:crushed.chromite', 'nether_chromite')
                FORGE_HAMMER('kubejs:chunk.electrotine_nether', '10x gtceu:crushed.electrotine', 'nether_electrotine')
                FORGE_HAMMER('kubejs:chunk.topaz_nether', '2x gtceu:gem.topaz', 'nether_topaz')
                FORGE_HAMMER('kubejs:chunk.blue_topaz_nether', '2x gtceu:gem.blue_topaz', 'nether_blue_topaz')
        //Endstone
            //Bronze
                FORGE_HAMMER('kubejs:chunk.emerald_end', '2x gtceu:crushed.emerald', 'end_emerald')
                FORGE_HAMMER('kubejs:chunk.emerald_end', '4x gtceu:crushed.emerald', 'end_emerald')
                FORGE_HAMMER('kubejs:chunk.thorium_end', '2x gtceu:crushed.thorium', 'end_thorium')
            //Steel
                FORGE_HAMMER('kubejs:chunk.grossular_end', '6x gtceu:gem.grossular', 'end_grossular')
                FORGE_HAMMER('kubejs:chunk.spessartine_end', '6x gtceu:gem.spessartine', 'end_spessartine')
                FORGE_HAMMER('kubejs:chunk.pyrolusite_end', '2x gtceu:crushed.pyrolusite', 'end_pyrolusite')
                FORGE_HAMMER('kubejs:chunk.tantalite_end', '2x gtceu:crushed.tantalite', 'end_tantalite')
                FORGE_HAMMER('kubejs:chunk.wulfenite_end', '2x gtceu:crushed.wulfenite', 'end_wulfenite')
                FORGE_HAMMER('kubejs:chunk.molybdenite_end', '2x gtceu:crushed.molybdenite', 'end_molybdenite')
                FORGE_HAMMER('kubejs:chunk.powellite_end', '2x gtceu:crushed.powellite', 'end_powellite')
                FORGE_HAMMER('kubejs:chunk.garnierite_end', '2x gtceu:crushed.garnierite', 'end_garnierite')
                FORGE_HAMMER('kubejs:chunk.nickel_end', '2x gtceu:crushed.nickel', 'end_nickel')
                FORGE_HAMMER('kubejs:chunk.cobaltite_end', '2x gtceu:crushed.cobaltite', 'end_cobaltite')
                FORGE_HAMMER('kubejs:chunk.pentlandite_end', '2x gtceu:crushed.pentlandite', 'end_pentlandite')
                FORGE_HAMMER('kubejs:chunk.bentonite_end', '6x gtceu:crushed.bentonite', 'end_bentonite')
                FORGE_HAMMER('kubejs:chunk.magnesite_end', '2x gtceu:crushed.magnesite', 'end_magnesite')
                FORGE_HAMMER('kubejs:chunk.olivine_end', '4x gtceu:gem.olivine', 'end_olivine')
                FORGE_HAMMER('kubejs:chunk.chromite_end', '2x gtceu:crushed.chromite', 'end_chromite')
                FORGE_HAMMER('kubejs:chunk.sheldonite_end', '2x gtceu:crushed.cooperite', 'end_sheldonite')
                FORGE_HAMMER('kubejs:chunk.palladium_end', '2x gtceu:crushed.palladium', 'end_palladium')
                FORGE_HAMMER('kubejs:chunk.scheelite_end', '2x gtceu:crushed.scheelite', 'end_scheelite')
                FORGE_HAMMER('kubejs:chunk.tungstate_end', '2x gtceu:crushed.tungstate', 'end_tungstate')
                FORGE_HAMMER('kubejs:chunk.lithium_end', '2x gtceu:crushed.lithium', 'end_lithium')
            //Aluminium
                FORGE_HAMMER('kubejs:chunk.naquadah_end', '2x gtceu:crushed.naquadah', 'end_naquadah')
                FORGE_HAMMER('kubejs:chunk.lazurite_end', '12x gtceu:gem.lazurite', 'end_lazurite')
                FORGE_HAMMER('kubejs:chunk.sodalite_end', '12x gtceu:gem.sodalite', 'end_sodalite')
                FORGE_HAMMER('kubejs:chunk.lapis_end', '12x minecraft:lapis_lazuli', 'end_lapis')
                FORGE_HAMMER('kubejs:chunk.calcite_end', '2x gtceu:crushed.calcite', 'end_calcite')

    //-----------------------------------------------------------------------------------------//
    
        //Electric Sifing
            //Gravel
                //String
                    event.recipes.gtceu.gt_recipe_serializer("electric_sieve", "gtceu:electric_sieve/gravel_sifting_type_string")
                        .chance(0)
                        .itemInputs('exnihilosequentia:string_mesh')
                        .chance(1)
                        .itemInputs('minecraft:gravel')
                        .chancedOutput('kubejs:chunk.coal_stone', 1920, 250)
                        .chancedOutput('kubejs:chunk.coal_stone', 950, 250)
                        .chancedOutput('kubejs:chunk.trona_stone', 507, 250)
                        .chancedOutput('kubejs:chunk.salt_stone', 925, 250)
                        .chancedOutput('kubejs:chunk.rock_salt_stone', 833, 250)
                        .chancedOutput('kubejs:chunk.lepidolite_stone', 357, 250)
                        .chancedOutput('kubejs:chunk.spodumene_stone', 238, 250)
                        .chancedOutput('kubejs:chunk.tin_stone', 2422, 250)
                        .chancedOutput('kubejs:chunk.cassiterite_stone', 808, 250)
                        .chancedOutput('kubejs:chunk.basaltic_mineral_stone', 546, 250)
                        .chancedOutput('kubejs:chunk.granitic_mineral_stone', 546, 250)
                        .chancedOutput('kubejs:chunk.fullers_earth_stone', 364, 250)
                        .chancedOutput('kubejs:chunk.gypsum_stone', 364, 250)
                        .duration(100)
                        .EUt(24)
                    
                //bronze
                     event.recipes.gtceu.gt_recipe_serializer("electric_sieve", "gtceu:electric_sieve/gravel_sifting_type_bronze")
                        .chance(0)
                        .itemInputs('exnihilosequentia:flint_mesh')
                        .chance(1)
                        .itemInputs('minecraft:gravel')
                        .chancedOutput('kubejs:chunk.coal_stone', 1920, 250)
                        .chancedOutput('kubejs:chunk.coal_stone', 950, 250)
                        .chancedOutput('kubejs:chunk.trona_stone', 507, 250)
                        .chancedOutput('kubejs:chunk.salt_stone', 925, 250)
                        .chancedOutput('kubejs:chunk.rock_salt_stone', 833, 250)
                        .chancedOutput('kubejs:chunk.lepidolite_stone', 357, 250)
                        .chancedOutput('kubejs:chunk.spodumene_stone', 238, 250)
                        .chancedOutput('kubejs:chunk.tin_stone', 2422, 250)
                        .chancedOutput('kubejs:chunk.cassiterite_stone', 808, 250)
                        .chancedOutput('kubejs:chunk.basaltic_mineral_stone', 546, 250)
                        .chancedOutput('kubejs:chunk.granitic_mineral_stone', 546, 250)
                        .chancedOutput('kubejs:chunk.fullers_earth_stone', 364, 250)
                        .chancedOutput('kubejs:chunk.gypsum_stone', 364, 250)
                        .chancedOutput('kubejs:chunk.galena_stone', 1040, 250)
                        .chancedOutput('kubejs:chunk.lead_stone', 520, 250)
                        .chancedOutput('kubejs:chunk.silver_stone', 520, 250)
                        .chancedOutput('kubejs:chunk.zeolite_stone', 507, 250)
                        .chancedOutput('kubejs:chunk.glauconite_sand_stone', 338, 250)
                        .chancedOutput('kubejs:chunk.oilsands_stone', 2250, 250)
                        .chancedOutput('kubejs:chunk.garnet_sand_stone', 432, 250)
                        .chancedOutput('kubejs:chunk.asbestos_stone', 432, 250)
                        .chancedOutput('kubejs:chunk.diatomite_stone', 144, 250)
                        .duration(100)
                        .EUt(24)
                    
                //Gravel-End
                    function gravelChance(id, mesh, boost) {
                        event.recipes.gtceu.gt_recipe_serializer("electric_sieve", `gtceu:electric_sieve/gravel_sifting_type_${id}`)
                            .chance(0)
                            .itemInputs(`exnihilosequentia:${mesh}_mesh`)
                            .chance(1)
                            .itemInputs('minecraft:gravel')
                            .chancedOutput('kubejs:chunk.coal_stone', 1920, boost)
                            .chancedOutput('kubejs:chunk.coal_stone', 950, boost)
                            .chancedOutput('kubejs:chunk.trona_stone', 507, boost)
                            .chancedOutput('kubejs:chunk.salt_stone', 925, boost)
                            .chancedOutput('kubejs:chunk.rock_salt_stone', 833, boost)
                            .chancedOutput('kubejs:chunk.lepidolite_stone', 357, boost)
                            .chancedOutput('kubejs:chunk.spodumene_stone', 238, boost)
                            .chancedOutput('kubejs:chunk.tin_stone', 2422, boost)
                            .chancedOutput('kubejs:chunk.cassiterite_stone', 808, boost)
                            .chancedOutput('kubejs:chunk.basaltic_mineral_stone', 546, boost)
                            .chancedOutput('kubejs:chunk.granitic_mineral_stone', 546, boost)
                            .chancedOutput('kubejs:chunk.fullers_earth_stone', 364, boost)
                            .chancedOutput('kubejs:chunk.gypsum_stone', 364, boost)
                            .chancedOutput('kubejs:chunk.galena_stone', 1040, boost)
                            .chancedOutput('kubejs:chunk.lead_stone', 520, boost)
                            .chancedOutput('kubejs:chunk.silver_stone', 520, boost)
                            .chancedOutput('kubejs:chunk.zeolite_stone', 507, boost)
                            .chancedOutput('kubejs:chunk.glauconite_sand_stone', 338, boost)
                            .chancedOutput('kubejs:chunk.oilsands_stone', 2250, boost)
                            .chancedOutput('kubejs:chunk.garnet_sand_stone', 432, boost)
                            .chancedOutput('kubejs:chunk.asbestos_stone', 432, boost)
                            .chancedOutput('kubejs:chunk.diatomite_stone', 144, boost)
                            .chancedOutput('kubejs:chunk.platinum_stone', 760, boost)
                            .chancedOutput('kubejs:chunk.palladium_stone', 591, boost)
                            .duration(100)
                            .EUt(24)     
                    }
                        //Steel
                            gravelChance('steel', 'iron', 250)
                        //Aluminium
                            gravelChance('aluminium', 'diamond', 350)
                        //Stainless
                            gravelChance('stainless', 'emerald', 450)
                        //Titanium
                            gravelChance('titanium', 'netherite', 500)                
            //Sand
                //Bronze
                    event.recipes.gtceu.gt_recipe_serializer('electric_sieve', 'gtceu:electric_sieve/sand_sifting_type_bronze')
                        .chance(0)
                        .itemInputs('exnihilosequentia:flint_mesh')
                        .chance(1)
                        .itemInputs('minecraft:sand')
                        .chancedOutput('kubejs:chunk.copper_sand', 5000, 250)
                        .chancedOutput('kubejs:chunk.redstone_sand', 5000, 250)
                        .chancedOutput('kubejs:chunk.cinnabar_sand', 5000, 250)
                        .chancedOutput('kubejs:chunk.chromite_sand', 5000, 250)
                        .chancedOutput('kubejs:chunk.pyrope_sand', 5000, 250)
                        .chancedOutput('kubejs:chunk.sapphire_sand', 5000, 250)
                        .chancedOutput('kubejs:chunk.green_sapphire_sand', 5000, 250)
                        .duration(100)
                        .EUt(24)
                    
                //Steel
                    event.recipes.gtceu.gt_recipe_serializer('electric_sieve', 'gtceu:electric_sieve/sand_sifting_type_steel')
                        .chance(0)
                        .itemInputs('exnihilosequentia:iron_mesh')
                        .chance(1)
                        .itemInputs('minecraft:sand')
                        .chancedOutput('kubejs:chunk.copper_sand', 5000, 250)
                        .chancedOutput('kubejs:chunk.redstone_sand', 5000, 250)
                        .chancedOutput('kubejs:chunk.cinnabar_sand', 5000, 250)
                        .chancedOutput('kubejs:chunk.chromite_sand', 5000, 250)
                        .chancedOutput('kubejs:chunk.pyrope_sand', 5000, 250)
                        .chancedOutput('kubejs:chunk.sapphire_sand', 5000, 250)
                        .chancedOutput('kubejs:chunk.green_sapphire_sand', 5000, 250)
                        .chancedOutput('kubejs:chunk.chalcopyrite_sand', 5000, 250)
                        .chancedOutput('kubejs:chunk.iron_sand', 5000, 250)
                        .chancedOutput('kubejs:chunk.pyrite_sand', 5000, 250)
                        .chancedOutput('kubejs:chunk.yellow_limonite_sand', 5000, 250)
                        .chancedOutput('kubejs:chunk.malachite_sand', 5000, 250)
                        .chancedOutput('kubejs:chunk.garnierite_sand', 5000, 250)
                        .chancedOutput('kubejs:chunk.nickel_sand', 5000, 250)
                        .chancedOutput('kubejs:chunk.cobaltite_sand', 5000, 250)
                        .chancedOutput('kubejs:chunk.pentlandite_sand', 5000, 250)
                        .chancedOutput('kubejs:chunk.bentonite_sand', 5000, 250)
                        .chancedOutput('kubejs:chunk.magnesite_sand', 5000, 250)
                        .chancedOutput('kubejs:chunk.olivine_sand', 5000, 250)
                        .duration(100)
                        .EUt(24)
                    
                //Sand-End
                    function sandChance(id, mesh, boost) {
                        event.recipes.gtceu.gt_recipe_serializer('electric_sieve', `gtceu:electric_sieve/sand_sifting_type_${id}`)
                            .chance(0)
                            .itemInputs(`exnihilosequentia:${mesh}_mesh`)
                            .chance(1)
                            .itemInputs('minecraft:sand')
                            .chancedOutput('kubejs:chunk.copper_sand', 5000, boost)
                            .chancedOutput('kubejs:chunk.redstone_sand', 5000, boost)
                            .chancedOutput('kubejs:chunk.cinnabar_sand', 5000, boost)
                            .chancedOutput('kubejs:chunk.chromite_sand', 5000, boost)
                            .chancedOutput('kubejs:chunk.pyrope_sand', 5000, boost)
                            .chancedOutput('kubejs:chunk.sapphire_sand', 5000, boost)
                            .chancedOutput('kubejs:chunk.green_sapphire_sand', 5000, boost)
                            .chancedOutput('kubejs:chunk.chalcopyrite_sand', 5000, boost)
                            .chancedOutput('kubejs:chunk.iron_sand', 5000, boost)
                            .chancedOutput('kubejs:chunk.pyrite_sand', 5000, boost)
                            .chancedOutput('kubejs:chunk.yellow_limonite_sand', 5000, boost)
                            .chancedOutput('kubejs:chunk.malachite_sand', 5000, boost)
                            .chancedOutput('kubejs:chunk.garnierite_sand', 5000, boost)
                            .chancedOutput('kubejs:chunk.nickel_sand', 5000, boost)
                            .chancedOutput('kubejs:chunk.cobaltite_sand', 5000, boost)
                            .chancedOutput('kubejs:chunk.pentlandite_sand', 5000, boost)
                            .chancedOutput('kubejs:chunk.bentonite_sand', 5000, boost)
                            .chancedOutput('kubejs:chunk.magnesite_sand', 5000, boost)
                            .chancedOutput('kubejs:chunk.olivine_sand', 5000, boost)
                            .chancedOutput('kubejs:chunk.beryllium_sand', 5000, boost)
                            .chancedOutput('kubejs:chunk.emerald_sand', 5000, boost)
                            .chancedOutput('kubejs:chunk.thorium_sand', 5000, boost)
                            .chancedOutput('kubejs:chunk.grossular_sand', 5000, boost)
                            .chancedOutput('kubejs:chunk.spessartine_sand', 5000, boost)
                            .chancedOutput('kubejs:chunk.pyrolusite_sand', 5000, boost)
                            .chancedOutput('kubejs:chunk.tantalite_sand', 5000, boost)
                            .duration(100)
                            .EUt(24)
                        
                    }
                        //Aluminium
                            sandChance('aluminium', 'diamond', 350)
                        //Stainless
                            sandChance('stainless', 'emerald', 450)
                        //Titanium
                            sandChance('titanium', 'netherite', 500)
            //Andesite
                //Bronze
                    event.recipes.gtceu.gt_recipe_serializer('electric_sieve', 'gtceu:electric_sieve/andesite_sifting_type_bronze')
                        .chance(0)
                        .itemInputs('exnihilosequentia:flint_mesh')
                        .chance(1)
                        .itemInputs('exnihilosequentia:crushed_andesite')
                        .chancedOutput('kubejs:chunk.redstone_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.ruby_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.cinnabar_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.chromite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.almandine_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.pyrope_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.sapphire_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.green_sapphire_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.topaz_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.blue_topaz_stone', 5000, 250)
                        .duration(100)
                        .EUt(24)
                          
                //Steel
                    event.recipes.gtceu.gt_recipe_serializer('electric_sieve', 'gtceu:electric_sieve/andesite_sifting_type_steel')
                        .chance(0)
                        .itemInputs('exnihilosequentia:iron_mesh')
                        .chance(1)
                        .itemInputs('exnihilosequentia:crushed_andesite')
                        .chancedOutput('kubejs:chunk.redstone_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.ruby_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.cinnabar_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.chromite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.almandine_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.pyrope_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.sapphire_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.green_sapphire_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.topaz_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.blue_topaz_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.chalcopyrite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.iron_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.pyrite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.copper_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.yellow_limonite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.malachite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.bastnasite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.monazite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.neodymium_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.garnierite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.nickel_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.cobaltite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.pentlandite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.bentonite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.magnesite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.olivine_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.pitchblende_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.uraninite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.graphite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.diamond_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.coal_stone', 5000, 250)
                        .duration(100)
                        .EUt(24)
                     
                //Andesite-End
                    function andesiteChance(id, mesh, boost) {
                        event.recipes.gtceu.gt_recipe_serializer('electric_sieve', `gtceu:electric_sieve/andesite_sifting_type_${id}`)
                            .chance(0)
                            .itemInputs(`exnihilosequentia:${mesh}_mesh`)
                            .chance(1)
                            .itemInputs('exnihilosequentia:crushed_andesite')
                            .chancedOutput('kubejs:chunk.redstone_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.ruby_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.cinnabar_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.chromite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.almandine_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.pyrope_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.sapphire_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.green_sapphire_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.topaz_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.blue_topaz_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.chalcopyrite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.iron_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.pyrite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.copper_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.yellow_limonite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.malachite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.bastnasite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.monazite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.neodymium_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.garnierite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.nickel_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.cobaltite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.pentlandite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.bentonite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.magnesite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.olivine_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.pitchblende_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.uraninite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.graphite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.diamond_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.coal_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.beryllium_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.emerald_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.thorium_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.soapstone_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.talc_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.scheelite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.tungstate_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.lithium_stone', 5000, boost)
                            .duration(100)
                            .EUt(24)
                        
                    }
                            //Aluminium
                                andesiteChance('aluminium', 'diamond', 350)
                            //Stainless
                                andesiteChance('stainless', 'emerald', 450)
                            //Titanium
                                andesiteChance('titanium', 'netherite', 500)
            //Granite
                //String
                    event.recipes.gtceu.gt_recipe_serializer('electric_sieve', 'gtceu:electric_sieve/granite_sifting_type_string')
                        .chance(0)
                        .itemInputs('exnihilosequentia:string_mesh')
                        .chance(1)
                        .itemInputs('exnihilosequentia:crushed_granite')
                        .chancedOutput('kubejs:chunk.apatite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.tricalcium_phosphate_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.bauxite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.aluminium_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.ilmenite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.magnetite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.iron_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.vanadium_magnetite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.gold_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.quartzite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.barite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.certus_quartz_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.tetrahedrite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.copper_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.stibnite_stone', 5000, 250)
                        .duration(100)
                        .EUt(24);
                //Bronze
                    event.recipes.gtceu.gt_recipe_serializer('electric_sieve', 'gtceu:electric_sieve/granite_sifting_type_bronze')
                        .chance(0)
                        .itemInputs('exnihilosequentia:flint_mesh')
                        .chance(1)
                        .itemInputs('exnihilosequentia:crushed_granite')
                        .chancedOutput('kubejs:chunk.apatite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.tricalcium_phosphate_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.bauxite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.aluminium_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.ilmenite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.magnetite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.iron_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.vanadium_magnetite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.gold_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.quartzite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.barite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.certus_quartz_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.tetrahedrite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.copper_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.stibnite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.redstone_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.ruby_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.cinnabar_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.chromite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.bornite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.chalcocite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.lazurite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.sodalite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.lapis_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.calcite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.topaz_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.blue_topaz_stone', 5000, 250)
                        .duration(100)
                        .EUt(24);
                //Steel
                    event.recipes.gtceu.gt_recipe_serializer('electric_sieve', 'gtceu:electric_sieve/granite_sifting_type_steel')
                        .chance(0)
                        .itemInputs('exnihilosequentia:iron_mesh')
                        .chance(1)
                        .itemInputs('exnihilosequentia:crushed_granite')
                        .chancedOutput('kubejs:chunk.apatite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.tricalcium_phosphate_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.bauxite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.aluminium_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.ilmenite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.magnetite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.iron_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.vanadium_magnetite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.gold_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.quartzite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.barite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.certus_quartz_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.tetrahedrite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.copper_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.stibnite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.redstone_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.ruby_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.cinnabar_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.chromite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.bornite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.chalcocite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.lazurite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.sodalite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.lapis_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.calcite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.topaz_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.blue_topaz_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.chalcopyrite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.pyrite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.yellow_limonite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.bastnasite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.monazite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.neodymium_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.garnierite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.nickel_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.cobaltite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.pentlandite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.pitchblende_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.uraninite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.kyanite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.mica_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.cassiterite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.pollucite_stone', 5000, 250)
                        .duration(100)
                        .EUt(24);
                //Granite-End
                    function graniteChance(id, mesh, boost) {
                        event.recipes.gtceu.gt_recipe_serializer('electric_sieve', `gtceu:electric_sieve/granite_sifting_type_${id}`)
                            .chance(0)
                            .itemInputs(`exnihilosequentia:${mesh}_mesh`)
                            .chance(1)
                            .itemInputs('exnihilosequentia:crushed_granite')
                            .chancedOutput('kubejs:chunk.apatite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.tricalcium_phosphate_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.bauxite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.aluminium_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.ilmenite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.magnetite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.iron_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.vanadium_magnetite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.gold_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.quartzite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.barite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.certus_quartz_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.tetrahedrite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.copper_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.stibnite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.redstone_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.ruby_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.cinnabar_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.chromite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.bornite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.chalcocite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.lazurite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.sodalite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.lapis_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.calcite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.topaz_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.blue_topaz_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.chalcopyrite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.pyrite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.yellow_limonite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.bastnasite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.monazite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.neodymium_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.garnierite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.nickel_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.cobaltite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.pentlandite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.pitchblende_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.uraninite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.kyanite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.mica_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.cassiterite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.pollucite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.graphite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.diamond_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.coal_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.wulfenite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.molybdenite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.powellite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.soapstone_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.talc_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.scheelite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.tungstate_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.lithium_stone', 5000, boost)
                            .duration(100)
                            .EUt(24);
                    }
                            //Aluminium
                                graniteChance('aluminium', 'diamond', 350)
                            //Stainless
                                graniteChance('stainless', 'emerald', 450)
                            //Titanium
                                graniteChance('titanium', 'netherrite', 500)
            //Diorite
                //String
                    event.recipes.gtceu.gt_recipe_serializer('electric_sieve', 'gtceu:electric_sieve/diorite_sifting_type_string')
                        .chance(0)
                        .itemInputs('exnihilosequentia:string_mesh')
                        .chance(1)
                        .itemInputs('exnihilosequentia:crushed_diorite')
                        .chancedOutput('kubejs:chunk.bauxite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.aluminium_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.ilmenite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.chalcopyrite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.cassiterite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.cassiterite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.alunite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.quartzite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.barite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.certus_quartz_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.tin_stone', 5000, 250)
                        .duration(100)
                        .EUt(24);
                //Bronze
                    event.recipes.gtceu.gt_recipe_serializer('electric_sieve', 'gtceu:electric_sieve/diorite_sifting_type_bronze')
                        .chance(0)
                        .itemInputs('exnihilosequentia:flint_mesh')
                        .chance(1)
                        .itemInputs('exnihilosequentia:crushed_diorite')
                        .chancedOutput('kubejs:chunk.bauxite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.aluminium_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.ilmenite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.chalcopyrite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.cassiterite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.cassiterite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.alunite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.quartzite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.barite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.certus_quartz_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.tin_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.bornite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.chalcocite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.copper_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.galena_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.lead_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.silver_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.lazurite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.sodalite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.lapis_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.calcite_stone', 5000, 250)
                        .duration(100)
                        .EUt(24);
                //Steel
                    event.recipes.gtceu.gt_recipe_serializer('electric_sieve', 'gtceu:electric_sieve/diorite_sifting_type_steel')
                        .chance(0)
                        .itemInputs('exnihilosequentia:iron_mesh')
                        .chance(1)
                        .itemInputs('exnihilosequentia:crushed_diorite')
                        .chancedOutput('kubejs:chunk.bauxite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.aluminium_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.ilmenite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.chalcopyrite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.cassiterite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.cassiterite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.alunite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.quartzite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.barite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.certus_quartz_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.tin_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.bornite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.chalcocite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.copper_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.galena_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.lead_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.silver_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.lazurite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.sodalite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.lapis_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.calcite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.yellow_limonite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.malachite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.pitchblende_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.uraninite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.kyanite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.mica_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.cassiterite_stone', 5000, 250)
                        .chancedOutput('kubejs:chunk.pollucite_stone', 5000, 250)
                        .duration(100)
                        .EUt(24);
                //Diorite-End
                    function dioriteChance(id, mesh, boost) {
                        event.recipes.gtceu.gt_recipe_serializer('electric_sieve', `gtceu:electric_sieve/diorite_sifting_type_${id}`)
                            .chance(0)
                            .itemInputs(`exnihilosequentia:${mesh}_mesh`)
                            .chance(1)
                            .itemInputs('exnihilosequentia:crushed_diorite')
                            .chancedOutput('kubejs:chunk.bauxite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.aluminium_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.ilmenite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.chalcopyrite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.cassiterite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.cassiterite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.alunite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.quartzite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.barite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.certus_quartz_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.tin_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.bornite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.chalcocite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.copper_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.galena_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.lead_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.silver_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.lazurite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.sodalite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.lapis_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.calcite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.yellow_limonite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.malachite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.pitchblende_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.uraninite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.kyanite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.mica_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.cassiterite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.pollucite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.graphite_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.diamond_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.coal_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.soapstone_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.talc_stone', 5000, boost)
                            .chancedOutput('kubejs:chunk.pentlandite_stone', 5000, boost)
                            .duration(100)
                            .EUt(24);

                    }
                            //Aluminium
                                dioriteChance('aluminium', 'diamond', 350)
                            //Stainless
                                dioriteChance('stainless', 'emerald', 450)
                            //Titanium
                                dioriteChance('titanium', 'netherrite', 500)
            //Netherrack
                //Bronze
                    event.recipes.gtceu.gt_recipe_serializer('electric_sieve', 'gtceu:electric_sieve/netherrack_sifting_type_bronze')
                        .chance(0)
                        .itemInputs('exnihilosequentia:flint_mesh')
                        .chance(1)
                        .itemInputs('exnihilosequentia:crushed_netherrack')
                        .chancedOutput('kubejs:chunk.chalcopyrite_nether', 5000, 250)
                        .chancedOutput('kubejs:chunk.iron_nether', 5000, 250)
                        .chancedOutput('kubejs:chunk.iron_nether', 5000, 250)
                        .chancedOutput('kubejs:chunk.pyrite_nether', 5000, 250)
                        .chancedOutput('kubejs:chunk.pyrite_nether', 5000, 250)
                        .chancedOutput('kubejs:chunk.copper_nether', 5000, 250)
                        .chancedOutput('kubejs:chunk.copper_nether', 5000, 250)
                        .chancedOutput('kubejs:chunk.yellow_limonite_nether', 5000, 250)
                        .chancedOutput('kubejs:chunk.malachite_nether', 5000, 250)
                        .chancedOutput('kubejs:chunk.magnetite_nether', 5000, 250)
                        .chancedOutput('kubejs:chunk.vanadium_magnetite_nether', 5000, 250)
                        .chancedOutput('kubejs:chunk.gold_nether', 5000, 250)
                        .chancedOutput('kubejs:chunk.nether_quartz_nether', 5000, 250)
                        .chancedOutput('kubejs:chunk.sulfur_nether', 5000, 250)
                        .chancedOutput('kubejs:chunk.sphalerite_nether', 5000, 250)
                        .chancedOutput('kubejs:chunk.tetrahedrite_nether', 5000, 250)
                        .chancedOutput('kubejs:chunk.stibnite_nether', 5000, 250)
                        .duration(100)
                        .EUt(24);
                //Netherrack-End
                    function netherChance(id, mesh, boost) {
                        event.recipes.gtceu.gt_recipe_serializer('electric_sieve', `gtceu:electric_sieve/netherrack_sifting_type_${id}`)
                            .chance(0)
                            .itemInputs(`exnihilosequentia:${mesh}_mesh`)
                            .chance(1)
                            .itemInputs('exnihilosequentia:crushed_netherrack')
                            .chancedOutput('kubejs:chunk.chalcopyrite_nether', 5000, boost)
                            .chancedOutput('kubejs:chunk.iron_nether', 5000, boost)
                            .chancedOutput('kubejs:chunk.iron_nether', 5000, boost)
                            .chancedOutput('kubejs:chunk.pyrite_nether', 5000, boost)
                            .chancedOutput('kubejs:chunk.pyrite_nether', 5000, boost)
                            .chancedOutput('kubejs:chunk.copper_nether', 5000, boost)
                            .chancedOutput('kubejs:chunk.copper_nether', 5000, boost)
                            .chancedOutput('kubejs:chunk.yellow_limonite_nether', 5000, boost)
                            .chancedOutput('kubejs:chunk.malachite_nether', 5000, boost)
                            .chancedOutput('kubejs:chunk.magnetite_nether', 5000, boost)
                            .chancedOutput('kubejs:chunk.vanadium_magnetite_nether', 5000, boost)
                            .chancedOutput('kubejs:chunk.gold_nether', 5000, boost)
                            .chancedOutput('kubejs:chunk.nether_quartz_nether', 5000, boost)
                            .chancedOutput('kubejs:chunk.sulfur_nether', 5000, boost)
                            .chancedOutput('kubejs:chunk.sphalerite_nether', 5000, boost)
                            .chancedOutput('kubejs:chunk.tetrahedrite_nether', 5000, boost)
                            .chancedOutput('kubejs:chunk.stibnite_nether', 5000, boost)
                            .chancedOutput('kubejs:chunk.garnierite_nether', 5000, boost)
                            .chancedOutput('kubejs:chunk.nickel_nether', 5000, boost)
                            .chancedOutput('kubejs:chunk.cobaltite_nether', 5000, boost)
                            .chancedOutput('kubejs:chunk.pentlandite_nether', 5000, boost)
                            .chancedOutput('kubejs:chunk.redstone_nether', 5000, boost)
                            .chancedOutput('kubejs:chunk.ruby_nether', 5000, boost)
                            .chancedOutput('kubejs:chunk.cinnabar_nether', 5000, boost)
                            .chancedOutput('kubejs:chunk.chromite_nether', 5000, boost)
                            .chancedOutput('kubejs:chunk.electrotine_nether', 5000, boost)
                            .chancedOutput('kubejs:chunk.topaz_nether', 5000, boost)
                            .chancedOutput('kubejs:chunk.blue_topaz_nether', 5000, boost)
                            .duration(100)
                            .EUt(24);

                    }
                            //Aluminium
                                netherChance('aluminium', 'diamond', 350)
                            //Stainless
                                netherChance('stainless', 'emerald', 450)
                            //Titanium
                                netherChance('titanium', 'netherrite', 500)
            //Endstone
                //Bronze
                    event.recipes.gtceu.gt_recipe_serializer('electric_sieve', 'gtceu:electric_sieve/endstone_sifting_type_bronze')
                        .chance(0)
                        .itemInputs('exnihilosequentia:flint_mesh')
                        .chance(1)
                        .itemInputs('exnihilosequentia:crushed_end_stone')
                        .chancedOutput('kubejs:chunk.beryllium_end', 5000, 250)
                        .chancedOutput('kubejs:chunk.emerald_end', 5000, 250)
                        .chancedOutput('kubejs:chunk.thorium_end', 5000, 250)
                        .duration(100)
                        .EUt(24);
                //Steel
                    event.recipes.gtceu.gt_recipe_serializer('electric_sieve', 'gtceu:electric_sieve/endstone_sifting_type_steel')
                        .chance(0)
                        .itemInputs('exnihilosequentia:iron_mesh')
                        .chance(1)
                        .itemInputs('exnihilosequentia:crushed_end_stone')
                        .chancedOutput('kubejs:chunk.beryllium_end', 5000, 250)
                        .chancedOutput('kubejs:chunk.emerald_end', 5000, 250)
                        .chancedOutput('kubejs:chunk.thorium_end', 5000, 250)
                        .chancedOutput('kubejs:chunk.grossular_end', 5000, 250)
                        .chancedOutput('kubejs:chunk.spessartine_end', 5000, 250)
                        .chancedOutput('kubejs:chunk.pyrolusite_end', 5000, 250)
                        .chancedOutput('kubejs:chunk.tantalite_end', 5000, 250)
                        .chancedOutput('kubejs:chunk.wulfenite_end', 5000, 250)
                        .chancedOutput('kubejs:chunk.molybdenite_end', 5000, 250)
                        .chancedOutput('kubejs:chunk.powellite_end', 5000, 250)
                        .chancedOutput('kubejs:chunk.garnierite_end', 5000, 250)
                        .chancedOutput('kubejs:chunk.nickel_end', 5000, 250)
                        .chancedOutput('kubejs:chunk.cobaltite_end', 5000, 250)
                        .chancedOutput('kubejs:chunk.pentlandite_end', 5000, 250)
                        .chancedOutput('kubejs:chunk.bentonite_end', 5000, 250)
                        .chancedOutput('kubejs:chunk.magnesite_end', 5000, 250)
                        .chancedOutput('kubejs:chunk.olivine_end', 5000, 250)
                        .chancedOutput('kubejs:chunk.chromite_end', 5000, 250)
                        .chancedOutput('kubejs:chunk.sheldonite_end', 5000, 250)
                        .chancedOutput('kubejs:chunk.palladium_end', 5000, 250)
                        .chancedOutput('kubejs:chunk.scheelite_end', 5000, 250)
                        .chancedOutput('kubejs:chunk.tungstate_end', 5000, 250)
                        .chancedOutput('kubejs:chunk.lithium_end', 5000, 250)
                        .duration(100)
                        .EUt(24);
                //Endstone-End
                    function endChance(id, mesh, boost) {
                        event.recipes.gtceu.gt_recipe_serializer('electric_sieve', `gtceu:electric_sieve/endstone_sifting_type_${id}`)
                            .chance(0)
                            .itemInputs(`exnihilosequentia:${mesh}_mesh`)
                            .chance(1)
                            .itemInputs('exnihilosequentia:crushed_end_stone')
                            .chancedOutput('kubejs:chunk.beryllium_end', 5000, boost)
                            .chancedOutput('kubejs:chunk.emerald_end', 5000, boost)
                            .chancedOutput('kubejs:chunk.thorium_end', 5000, boost)
                            .chancedOutput('kubejs:chunk.grossular_end', 5000, boost)
                            .chancedOutput('kubejs:chunk.spessartine_end', 5000, boost)
                            .chancedOutput('kubejs:chunk.pyrolusite_end', 5000, boost)
                            .chancedOutput('kubejs:chunk.tantalite_end', 5000, boost)
                            .chancedOutput('kubejs:chunk.wulfenite_end', 5000, boost)
                            .chancedOutput('kubejs:chunk.molybdenite_end', 5000, boost)
                            .chancedOutput('kubejs:chunk.powellite_end', 5000, boost)
                            .chancedOutput('kubejs:chunk.garnierite_end', 5000, boost)
                            .chancedOutput('kubejs:chunk.nickel_end', 5000, boost)
                            .chancedOutput('kubejs:chunk.cobaltite_end', 5000, boost)
                            .chancedOutput('kubejs:chunk.pentlandite_end', 5000, boost)
                            .chancedOutput('kubejs:chunk.bentonite_end', 5000, boost)
                            .chancedOutput('kubejs:chunk.magnesite_end', 5000, boost)
                            .chancedOutput('kubejs:chunk.olivine_end', 5000, boost)
                            .chancedOutput('kubejs:chunk.chromite_end', 5000, boost)
                            .chancedOutput('kubejs:chunk.sheldonite_end', 5000, boost)
                            .chancedOutput('kubejs:chunk.palladium_end', 5000, boost)
                            .chancedOutput('kubejs:chunk.scheelite_end', 5000, boost)
                            .chancedOutput('kubejs:chunk.tungstate_end', 5000, boost)
                            .chancedOutput('kubejs:chunk.lithium_end', 5000, boost)
                            .chancedOutput('kubejs:chunk.naquadah_end', 5000, boost)
                            .chancedOutput('kubejs:chunk.lazurite_end', 5000, boost)
                            .chancedOutput('kubejs:chunk.sodalite_end', 5000, boost)
                            .chancedOutput('kubejs:chunk.lapis_end', 5000, boost)
                            .chancedOutput('kubejs:chunk.calcite_end', 5000, boost)
                            .duration(100)
                            .EUt(24);

                    }
                            //Aluminium
                                endChance('aluminium', 'diamond', 350)
                            //Stainless
                                endChance('stainless', 'emerald', 450)
                            //Titanium
                                endChance('titanium', 'netherrite', 500)
    })

}
ServerEvents.recipes(event => {
    //Smelting/Blasting
    let multiSmelt = (output, input, includeBlasting) => {
        event.smelting(output, input).xp(0.7)
        
        if (includeBlasting) {
          event.blasting(output, input).xp(0.7)
        }
      }
        //Gravel
            //String
                multiSmelt('gtceu:dust.gypsum','kubejs:chunk.gypsum_stone',true)
                multiSmelt('gtceu:dust.spodumene','kubejs:chunk.spodumene_stone',true)
                multiSmelt('2x gtceu:ingot.tin','kubejs:chunk.cassiterite_stone',true)
                multiSmelt('2x minecraft:coal','kubejs:chunk.coal_stone',true)
                multiSmelt('2x gtceu:dust.trona','kubejs:chunk.trona_stone',true)
                multiSmelt('2x gtceu:dust.fullers_earth','kubejs:chunk.fullers_earth_stone',true)
                multiSmelt('minecraft:iron_ingot','kubejs:chunk.basaltic_mineral_stone',true)
                multiSmelt('2x gtceu:gem.salt','kubejs:chunk.salt_stone',true)
                multiSmelt('minecraft:iron_ingot','kubejs:chunk.granitic_mineral_stone',true)
                multiSmelt('gtceu:ingot.tin','kubejs:chunk.tin_stone',true)
                multiSmelt('2x gtceu:gem.rock_salt','kubejs:chunk.rock_salt_stone',true)
                multiSmelt('2x gtceu:dust.lepidolite','kubejs:chunk.lepidolite_stone',true)
            //Bronze
                multiSmelt('gtceu:ingot.lead','kubejs:chunk.galena_stone',true)
                multiSmelt('gtceu:ingot.lead','kubejs:chunk.lead_stone',true)
                multiSmelt('gtceu:ingot.silver','kubejs:chunk.silver_stone',true)
                multiSmelt('3x gtceu:dust.zeolite','kubejs:chunk.zeolite_stone',true)
                multiSmelt('3x gtceu:dust.glauconite_sand','kubejs:chunk.glauconite_sand_stone',true)
                multiSmelt('gtceu:dust.oilsands','kubejs:chunk.oilsands_stone',true)
                multiSmelt('gtceu:dust.garnet_sand','kubejs:chunk.garnet_sand_stone',true)
                multiSmelt('3x gtceu:dust.asbestos','kubejs:chunk.asbestos_stone',true)
                multiSmelt('3x gtceu:dust.diatomite','kubejs:chunk.diatomite_stone',true)
            //Steel
                multiSmelt('gtceu:ingot.platinum','kubejs:chunk.platinum_stone',true)
        //Sand
            //Bronze
                multiSmelt('minecraft:copper_ingot', 'kubejs:chunk.copper_sand', true)
                multiSmelt('5x minecraft:redstone', 'kubejs:chunk.redstone_sand', true)
                multiSmelt('gtceu:gem.cinnabar', 'kubejs:chunk.cinnabar_sand', true)
                multiSmelt('gtceu:dust.chromite', 'kubejs:chunk.chromite_sand', true)
                multiSmelt('3x gtceu:gem.pyrope', 'kubejs:chunk.pyrope_sand', true)
                multiSmelt('gtceu:gem.sapphire', 'kubejs:chunk.sapphire_sand', true)
                multiSmelt('gtceu:gem.green_sapphire', 'kubejs:chunk.green_sapphire_sand', true)
            //Steel
                multiSmelt('minecraft:copper_ingot', 'kubejs:chunk.chalcopyrite_sand', true)
                multiSmelt('minecraft:iron_ingot', 'kubejs:chunk.iron_sand', true)
                multiSmelt('minecraft:iron_ingot', 'kubejs:chunk.pyrite_sand', true)
                multiSmelt('minecraft:iron_ingot', 'kubejs:chunk.yellow_limonite_sand', true)
                multiSmelt('minecraft:copper_ingot', 'kubejs:chunk.malachite_sand', true)
                multiSmelt('gtceu:ingot.nickel', 'kubejs:chunk.garnierite_sand', true)
                multiSmelt('gtceu:ingot.nickel', 'kubejs:chunk.nickel_sand', true)
                multiSmelt('gtceu:ingot.cobalt', 'kubejs:chunk.cobaltite_sand', true)
                multiSmelt('gtceu:ingot.nickel', 'kubejs:chunk.pentlandite_sand', true)
                multiSmelt('3x gtceu:dust.bentonite', 'kubejs:chunk.bentonite_sand', true)
                multiSmelt('gtceu:dust.magnesium', 'kubejs:chunk.magnesite_sand', true)
                multiSmelt('2x gtceu:gem.olivine', 'kubejs:chunk.olivine_sand', true)
            //Aluminium
                multiSmelt('gtceu:ingot.beryllium', 'kubejs:chunk.beryllium_sand', true)
                multiSmelt('minecraft:emerald', 'kubejs:chunk.emerald_sand', true)
                multiSmelt('gtceu:ingot.thorium', 'kubejs:chunk.thorium_sand', true)
                multiSmelt('3x gtceu:gem.grossular', 'kubejs:chunk.grossular_sand', true)
                multiSmelt('3x gtceu:gem.spessartine', 'kubejs:chunk.spessartine_sand', true)
                multiSmelt('gtceu:ingot.manganese', 'kubejs:chunk.pyrolusite_sand', true)
                multiSmelt('gtceu:dust.tantalite', 'kubejs:chunk.tantalite_sand', true)
        //Andesite
            //Bronze
                multiSmelt('5x minecraft:redstone', 'kubejs:chunk.redstone_stone', true)
                multiSmelt('gtceu:gem.ruby', 'kubejs:chunk.ruby_stone', true)
                multiSmelt('gtceu:gem.cinnabar', 'kubejs:chunk.cinnabar_stone', true)
                multiSmelt('gtceu:dust.chromite', 'kubejs:chunk.chromite_stone', true)
                multiSmelt('3x gtceu:gem.almandine', 'kubejs:chunk.almandine_stone', true)
                multiSmelt('3x gtceu:gem.pyrope', 'kubejs:chunk.pyrope_stone', true)
                multiSmelt('gtceu:gem.sapphire', 'kubejs:chunk.sapphire_stone', true)
                multiSmelt('gtceu:gem.green_sapphire', 'kubejs:chunk.green_sapphire_stone', true)
                multiSmelt('gtceu:gem.topaz', 'kubejs:chunk.topaz_stone', true)
                multiSmelt('gtceu:gem.blue_topaz', 'kubejs:chunk.blue_topaz_stone', true)
            //Steel
                multiSmelt('minecraft:copper_ingot', 'kubejs:chunk.chalcopyrite_stone', true)
                multiSmelt('minecraft:iron_ingot', 'kubejs:chunk.iron_stone', true)
                multiSmelt('minecraft:iron_ingot', 'kubejs:chunk.pyrite_stone', true)
                multiSmelt('minecraft:iron_ingot', 'kubejs:chunk.yellow_limonite_stone', true)
                multiSmelt('minecraft:copper_ingot', 'kubejs:chunk.malachite_stone', true)
                multiSmelt('2x gtceu:dust.bastnasite', 'kubejs:chunk.bastnasite_stone', true)
                multiSmelt('4x gtceu:gem.monazite', 'kubejs:chunk.monazite_stone', true)
                //No Smelting For Neodymium
                multiSmelt('gtceu:ingot.nickel', 'kubejs:chunk.garnierite_stone', true)
                multiSmelt('gtceu:ingot.nickel', 'kubejs:chunk.nickel_stone', true)
                multiSmelt('gtceu:ingot.cobalt', 'kubejs:chunk.cobaltite_stone', true)
                multiSmelt('gtceu:ingot.nickel', 'kubejs:chunk.pentlandite_stone', true)
                multiSmelt('3x gtceu:dust.bentonite', 'kubejs:chunk.bentonite_stone', true)
                multiSmelt('gtceu:dust.magnesium', 'kubejs:chunk.magnesite_stone', true)
                multiSmelt('2x gtceu:gem.olivine', 'kubejs:chunk.olivine_stone', true)
                multiSmelt('gtceu:dust.pitchblende', 'kubejs:chunk.pitchblende_stone', true)
                multiSmelt('gtceu:dust.uraninite', 'kubejs:chunk.uraninite_stone', true)
                multiSmelt('gtceu:dust.graphite', 'kubejs:chunk.graphite_stone', true)
                multiSmelt('minecraft:diamond', 'kubejs:chunk.diamond_stone', true)
                //Coal on line - 562
            //Aluminium
                multiSmelt('gtceu:ingot.beryllium', 'kubejs:chunk.beryllium_stone', true)
                multiSmelt('minecraft:emerald', 'kubejs:chunk.emerald_stone', true)
                multiSmelt('gtceu:ingot.thorium', 'kubejs:chunk.thorium_stone', true)
                multiSmelt('3x gtceu:dust.soapstone', 'kubejs:chunk.soapstone_stone', true)
                multiSmelt('2x gtceu:dust.talc', 'kubejs:chunk.talc_stone', true)
                multiSmelt('gtceu:dust.scheelite', 'kubejs:chunk.scheelite_stone', true)
                multiSmelt('gtceu:dust.tungstate', 'kubejs:chunk.tungstate_stone', true)
                multiSmelt('gtceu:dust.lithium', 'kubejs:chunk.lithium_stone', true)
        //Granite
            //String
                multiSmelt('4x gtceu:gem.apatite', 'kubejs:chunk.apatite_stone', true)
                multiSmelt('3x gtceu:dust.tricalcium_phosphate', 'kubejs:chunk.tricalcium_phosphate_stone', true)
                multiSmelt('gtceu:dust.bauxite', 'kubejs:chunk.bauxite_stone', true)
                //Aluminium
                multiSmelt('gtceu:dust.ilmenite', 'kubejs:chunk.ilmenite_stone', true)
                multiSmelt('minecraft:iron_ingot', 'kubejs:chunk.magnetite_stone', true)
                //Iron
                multiSmelt('gtceu:dust.vanadium_magnetite', 'kubejs:chunk.vanadium_magnetite_stone', true)
                multiSmelt('minecraft:gold_ingot', 'kubejs:chunk.gold_stone', true)
                multiSmelt('2x gtceu:gem.quartzite', 'kubejs:chunk.quartzite_stone', true)
                multiSmelt('gtceu:dust.barite', 'kubejs:chunk.barite_stone', true)
                multiSmelt('2x gtceu:gem.certus_quartz', 'kubejs:chunk.certus_quartz_stone', true)
                multiSmelt('minecraft:copper_ingot', 'kubejs:chunk.tetrahedrite_stone', true)
                //Copper
                multiSmelt('gtceu:ingot.antimony', 'kubejs:chunk.stibnite_stone', true)
            //Bronze
                //Redstone
                //Ruby
                //Cinnabar
                //Chromite
                multiSmelt('minecraft:copper_ingot', 'kubejs:chunk.bornite_stone', true)
                multiSmelt('minecraft:copper_ingot', 'kubejs:chunk.chalcocite_stone', true)
                multiSmelt('6x gtceu:gem.lazurite', 'kubejs:chunk.lazurite_stone', true)
                multiSmelt('6x gtceu:gem.sodalite', 'kubejs:chunk.sodalite_stone', true)
                multiSmelt('6x minecraft:lapis_lazuli', 'kubejs:chunk.lapis_stone', true)
                multiSmelt('gtceu:dust.calcite', 'kubejs:chunk.calcite_stone', true)
                //Topaz
                //Blue Topaz
            //Steel
                //Chalcopyrite
                //Pyrite
                //Yellow Limonite
                //Bastnasite
                //Monazite
                //Neodymium
                //Garnierite
                //Cobaltite
                //Pentlandite
                //Pitchblende
                //Uraninite
                multiSmelt('gtceu:dust.kyanite', 'kubejs:chunk.kyanite_stone', true)
                multiSmelt('2x gtceu:dust.mica', 'kubejs:chunk.mica_stone', true)
                //Cassiterite
                multiSmelt('gtceu:dust.pollucite', 'kubejs:chunk.pollucite_stone', true)
            //Aluminium
                //Graphite
                //Diamond
                //Coal
                multiSmelt('gtceu:dust.wulfenite', 'kubejs:chunk.wulfenite_stone', true)
                multiSmelt('gtceu:ingot.molybdenum', 'kubejs:chunk.molybdenite_stone', true)
                multiSmelt('gtceu:dust.powellite', 'kubejs:chunk.powellite_stone', true)
                //Soapstone
                //Talc
                //Scheelite
                //Tungstate
                //Lithium
        //Diorite
            //String
                //Bauxite
                //Aluminium
                //Ilmenite
                //Chalcopyrite
                //Cassiterite
                multiSmelt('3x gtceu:dust.alunite', 'kubejs:chunk.alunite_stone', true)
                //Quartzite
                //Barite
                //Certus Quartz
                //Tin
            //Bronze
                //Bornite
                //Chalcocite
                //Copper
                //Galena
                //Lead
                //Silver
                //Lazurite
                //Sodalite
                //Lapis
                //Calcite
            //Steel
                //Yellow Limonite
                //Malachite
                //Pitchblende
                //Uraninite
                //Kyanite
                //Mica
                //Cassiterite
                //Pollucite
            //Aluminium
                //Graphite
                //Diamond
                //Coal
                //Soapstone
                //Talc
                //Pentlandite
        //Netherrack
            //Bronze
                multiSmelt('2x minecraft:copper_ingot', 'kubejs:chunk.chalcopyrite_nether', true)
                multiSmelt('2x minecraft:iron_ingot', 'kubejs:chunk.iron_nether', true)
                multiSmelt('2x minecraft:iron_ingot', 'kubejs:chunk.pyrite_nether', true)
                multiSmelt('2x minecraft:copper_ingot', 'kubejs:chunk.copper_nether', true)
                multiSmelt('2x minecraft:iron_ingot', 'kubejs:chunk.yellow_limonite_nether', true)
                multiSmelt('2x minecraft:copper_ingot', 'kubejs:chunk.malachite_nether', true)
                multiSmelt('2x minecraft:iron_ingot', 'kubejs:chunk.magnetite_nether', true)
                multiSmelt('2x gtceu:dust.vanadium_magnetite', 'kubejs:chunk.vanadium_magnetite_nether', true)
                multiSmelt('2x minecraft:gold_ingot', 'kubejs:chunk.gold_nether', true)
                multiSmelt('4x minecraft:quartz', 'kubejs:chunk.nether_quartz_nether', true)
                multiSmelt('2x gtceu:dust.sulfur', 'kubejs:chunk.sulfur_nether', true)
                multiSmelt('2x gtceu:ingot.zinc', 'kubejs:chunk.sphalerite_nether', true)
                multiSmelt('2x minecraft:copper_ingot', 'kubejs:chunk.tetrahedrite_nether', true)
                multiSmelt('2x gtceu:ingot.antimony', 'kubejs:chunk.stibnite_nether', true)
            //Aluminium
                multiSmelt('2x gtceu:ingot.nickel', 'kubejs:chunk.garnierite_nether', true)
                multiSmelt('2x gtceu:ingot.nickel', 'kubejs:chunk.nickel_nether', true)
                multiSmelt('2x gtceu:ingot.cobalt', 'kubejs:chunk.cobaltite_nether', true)
                multiSmelt('2x gtceu:ingot.nickel', 'kubejs:chunk.pentlandite_nether', true)
                multiSmelt('10x minecraft:redstone', 'kubejs:chunk.redstone_nether', true)
                multiSmelt('2x gtceu:gem.ruby', 'kubejs:chunk.ruby_nether', true)
                multiSmelt('2x gtceu:gem.cinnabar', 'kubejs:chunk.cinnabar_nether', true)
                multiSmelt('2x gtceu:dust.chromite', 'kubejs:chunk.chromite_nether', true)
                multiSmelt('10x gtceu:dust.electrotine', 'kubejs:chunk.electrotine_nether', true)
                multiSmelt('2x gtceu:gem.topaz', 'kubejs:chunk.topaz_nether', true)
                multiSmelt('4x gtceu:gem.blue_topaz', 'kubejs:chunk.blue_topaz_nether', true)
        //Endstone
            //Bronze
                multiSmelt('2x gtceu:ingot.beryllium', 'kubejs:chunk.beryllium_end', true)
                multiSmelt('4x minecraft:emerald', 'kubejs:chunk.emerald_end', true)
                multiSmelt('2x gtceu:ingot.thorium', 'kubejs:chunk.thorium_end', true)
            //Steel
                multiSmelt('6x gtceu:gem.grossular', 'kubejs:chunk.grossular_end', true)
                multiSmelt('6x gtceu:gem.spessartine', 'kubejs:chunk.spessartine_end', true)
                multiSmelt('2x gtceu:ingot.manganese', 'kubejs:chunk.pyrolusite_end', true)
                multiSmelt('2x gtceu:dust.tantalite', 'kubejs:chunk.tantalite_end', true)
                multiSmelt('2x gtceu:dust.wulfenite', 'kubejs:chunk.wulfenite_end', true)
                multiSmelt('2x gtceu:ingot.molybdenum', 'kubejs:chunk.molybdenite_end', true)
                multiSmelt('2x gtceu:dust.powellite', 'kubejs:chunk.powellite_end', true)
                multiSmelt('2x gtceu:ingot.nickel', 'kubejs:chunk.garnierite_end', true)
                multiSmelt('2x gtceu:ingot.nickel', 'kubejs:chunk.nickel_end', true)
                multiSmelt('2x gtceu:ingot.cobalt', 'kubejs:chunk.cobaltite_end', true)
                multiSmelt('2x gtceu:ingot.nickel', 'kubejs:chunk.pentlandite_end', true)
                multiSmelt('6x gtceu:dust.bentonite', 'kubejs:chunk.bentonite_end', true)
                multiSmelt('2x gtceu:dust.magnesium', 'kubejs:chunk.magnesite_end', true)
                multiSmelt('4x gtceu:gem.olivine', 'kubejs:chunk.olivine_end', true)
                multiSmelt('2x gtceu:dust.chromite', 'kubejs:chunk.chromite_end', true)
                multiSmelt('2x gtceu:dust.cooperite', 'kubejs:chunk.sheldonite_end', true)
                //Palladium
                multiSmelt('2x gtceu:dust.scheelite', 'kubejs:chunk.scheelite_end', true)
                multiSmelt('2x gtceu:dust.tungstate', 'kubejs:chunk.tungstate_end', true)
                multiSmelt('2x gtceu:dust.lithium', 'kubejs:chunk.lithium_end', true)
            //Aluminium
                //Naquadah
                multiSmelt('12x gtceu:gem.lazurite', 'kubejs:chunk.lazurite_end', true)
                multiSmelt('12x gtceu:gem.sodalite', 'kubejs:chunk.sodalite_end', true)
                multiSmelt('12x minecraft:lapis_lazuli', 'kubejs:chunk.lapis_end', true)
                multiSmelt('2x gtceu:dust.calcite', 'kubejs:chunk.calcite_end', true)
//-----------------------------------------------------------------------------------------------------//
    event.recipes.exnihilosequentia.fluid_item('minecraft:glowstone_dust', 'minecraft:end_stone', 'gtceu:helium').id('exnihilosequentia:fluid_item/ens_end_stone')

    function stringMesh(inputItem, outputItem, defaultChance, bonusChance1, bonusChance2, bonusChance3, bonusChance4, bonusChance5){
        event.recipes.exnihilosequentia.sieve(inputItem, outputItem)
        .addRoll(defaultChance, 'string')
        .addRoll(bonusChance1, 'flint')
        .addRoll(bonusChance2, 'iron')
        .addRoll(bonusChance3, 'diamond')
        .addRoll(bonusChance4, 'emerald')
        .addRoll(bonusChance5, 'netherite')
    }
    //gravel
        stringMesh('minecraft:gravel', 'kubejs:chunk.coal_stone', 0.192, 0.025, 0.05, 0.075, 0.1, 0.125)
        stringMesh('minecraft:gravel', 'kubejs:chunk.coal_stone', 0.095, 0.025, 0.05, 0.075, 0.1, 0.125)
        stringMesh('minecraft:gravel', 'kubejs:chunk.trona_stone', 0.0507, 0.025, 0.05, 0.075, 0.1, 0.125)
        stringMesh('minecraft:gravel', 'kubejs:chunk.salt_stone', 0.0925, 0.025, 0.05, 0.075, 0.1, 0.125)
        stringMesh('minecraft:gravel', 'kubejs:chunk.rock_salt_stone', 0.0833, 0.025, 0.05, 0.075, 0.1, 0.125)
        stringMesh('minecraft:gravel', 'kubejs:chunk.lepidolite_stone', 0.0357, 0.025, 0.05, 0.075, 0.1, 0.125)
        stringMesh('minecraft:gravel', 'kubejs:chunk.spodumene_stone', 0.0238, 0.025, 0.05, 0.075, 0.1, 0.125)
        stringMesh('minecraft:gravel', 'kubejs:chunk.tin_stone', 0.2422, 0.025, 0.05, 0.075, 0.1, 0.125)
        stringMesh('minecraft:gravel', 'kubejs:chunk.cassiterite_stone', 0.0808, 0.025, 0.05, 0.075, 0.1, 0.125)
        stringMesh('minecraft:gravel', 'kubejs:chunk.basaltic_mineral_stone', 0.0546, 0.025, 0.05, 0.075, 0.1, 0.125)
        stringMesh('minecraft:gravel', 'kubejs:chunk.granitic_mineral_stone', 0.0546, 0.025, 0.05, 0.075, 0.1, 0.125)
        stringMesh('minecraft:gravel', 'kubejs:chunk.fullers_earth_stone', 0.0364, 0.025, 0.05, 0.075, 0.1, 0.125)
        stringMesh('minecraft:gravel', 'kubejs:chunk.gypsum_stone', 0.0364, 0.025, 0.05, 0.075, 0.1, 0.125)
    //Granite
        stringMesh('exnihilosequentia:crushed_granite', 'kubejs:chunk.apatite_stone', 0.5, 0.025, 0.05, 0.075, 0.1, 0.125)
        stringMesh('exnihilosequentia:crushed_granite', 'kubejs:chunk.tricalcium_phosphate_stone', 0.5, 0.025, 0.05, 0.075, 0.1, 0.125)
        stringMesh('exnihilosequentia:crushed_granite', 'kubejs:chunk.bauxite_stone', 0.5, 0.025, 0.05, 0.075, 0.1, 0.125)
        stringMesh('exnihilosequentia:crushed_granite', 'kubejs:chunk.aluminium_stone', 0.5, 0.025, 0.05, 0.075, 0.1, 0.125)
        stringMesh('exnihilosequentia:crushed_granite', 'kubejs:chunk.ilmenite_stone', 0.5, 0.025, 0.05, 0.075, 0.1, 0.125)
        stringMesh('exnihilosequentia:crushed_granite', 'kubejs:chunk.magnetite_stone', 0.5, 0.025, 0.05, 0.075, 0.1, 0.125)
        stringMesh('exnihilosequentia:crushed_granite', 'kubejs:chunk.iron_stone', 0.5, 0.025, 0.05, 0.075, 0.1, 0.125)
        stringMesh('exnihilosequentia:crushed_granite', 'kubejs:chunk.vanadium_magnetite_stone', 0.5, 0.025, 0.05, 0.075, 0.1, 0.125)
        stringMesh('exnihilosequentia:crushed_granite', 'kubejs:chunk.gold_stone', 0.5, 0.025, 0.05, 0.075, 0.1, 0.125)
        stringMesh('exnihilosequentia:crushed_granite', 'kubejs:chunk.quartzite_stone', 0.5, 0.025, 0.05, 0.075, 0.1, 0.125)
        stringMesh('exnihilosequentia:crushed_granite', 'kubejs:chunk.barite_stone', 0.5, 0.025, 0.05, 0.075, 0.1, 0.125)
        stringMesh('exnihilosequentia:crushed_granite', 'kubejs:chunk.certus_quartz_stone', 0.5, 0.025, 0.05, 0.075, 0.1, 0.125)
        stringMesh('exnihilosequentia:crushed_granite', 'kubejs:chunk.tetrahedrite_stone', 0.5, 0.025, 0.05, 0.075, 0.1, 0.125)
        stringMesh('exnihilosequentia:crushed_granite', 'kubejs:chunk.copper_stone', 0.5, 0.025, 0.05, 0.075, 0.1, 0.125)
        stringMesh('exnihilosequentia:crushed_granite', 'kubejs:chunk.stibnite_stone', 0.5, 0.025, 0.05, 0.075, 0.1, 0.125)
    //Diorite
        stringMesh('exnihilosequentia:crushed_diorite', 'kubejs:chunk.bauxite_stone', 0.5, 0.025, 0.05, 0.075, 0.1, 0.125)
        stringMesh('exnihilosequentia:crushed_diorite', 'kubejs:chunk.aluminium_stone', 0.5, 0.025, 0.05, 0.075, 0.1, 0.125)
        stringMesh('exnihilosequentia:crushed_diorite', 'kubejs:chunk.ilmenite_stone', 0.5, 0.025, 0.05, 0.075, 0.1, 0.125)
        stringMesh('exnihilosequentia:crushed_diorite', 'kubejs:chunk.chalcopyrite_stone', 0.5, 0.025, 0.05, 0.075, 0.1, 0.125)
        stringMesh('exnihilosequentia:crushed_diorite', 'kubejs:chunk.cassiterite_stone', 0.5, 0.025, 0.05, 0.075, 0.1, 0.125)
        stringMesh('exnihilosequentia:crushed_diorite', 'kubejs:chunk.cassiterite_stone', 0.5, 0.025, 0.05, 0.075, 0.1, 0.125)
        stringMesh('exnihilosequentia:crushed_diorite', 'kubejs:chunk.alunite_stone', 0.5, 0.025, 0.05, 0.075, 0.1, 0.125)
        stringMesh('exnihilosequentia:crushed_diorite', 'kubejs:chunk.quartzite_stone', 0.5, 0.025, 0.05, 0.075, 0.1, 0.125)
        stringMesh('exnihilosequentia:crushed_diorite', 'kubejs:chunk.barite_stone', 0.5, 0.025, 0.05, 0.075, 0.1, 0.125)
        stringMesh('exnihilosequentia:crushed_diorite', 'kubejs:chunk.certus_quartz_stone', 0.5, 0.025, 0.05, 0.075, 0.1, 0.125)
        stringMesh('exnihilosequentia:crushed_diorite', 'kubejs:chunk.tin_stone', 0.5, 0.025, 0.05, 0.075, 0.1, 0.125)

    function bronzeMesh(inputItem, outputItem, defaultChance, bonusChance1, bonusChance2, bonusChance3, bonusChance4){
        event.recipes.exnihilosequentia.sieve(inputItem, outputItem)
        .addRoll(defaultChance, 'flint')
        .addRoll(bonusChance1, 'iron')
        .addRoll(bonusChance2, 'diamond')
        .addRoll(bonusChance3, 'emerald')
        .addRoll(bonusChance4, 'netherite')
    }
    //gravel
        bronzeMesh('minecraft:gravel', 'kubejs:chunk.galena_stone', 0.104, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('minecraft:gravel', 'kubejs:chunk.lead_stone', 0.052, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('minecraft:gravel', 'kubejs:chunk.silver_stone', 0.052, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('minecraft:gravel', 'kubejs:chunk.zeolite_stone', 0.0507, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('minecraft:gravel', 'kubejs:chunk.glauconite_sand_stone', 0.0338, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('minecraft:gravel', 'kubejs:chunk.oilsands_stone', 0.225, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('minecraft:gravel', 'kubejs:chunk.garnet_sand_stone', 0.0432, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('minecraft:gravel', 'kubejs:chunk.asbestos_stone', 0.0432, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('minecraft:gravel', 'kubejs:chunk.diatomite_stone', 0.0144, 0.025, 0.05, 0.075, 0.1)
    //Sand
        bronzeMesh('minecraft:sand', 'kubejs:chunk.copper_sand', 0.5, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('minecraft:sand', 'kubejs:chunk.redstone_sand', 0.5, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('minecraft:sand', 'kubejs:chunk.cinnabar_sand', 0.5, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('minecraft:sand', 'kubejs:chunk.chromite_sand', 0.5, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('minecraft:sand', 'kubejs:chunk.pyrope_sand', 0.5, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('minecraft:sand', 'kubejs:chunk.sapphire_sand', 0.5, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('minecraft:sand', 'kubejs:chunk.green_sapphire_sand', 0.5, 0.025, 0.05, 0.075, 0.1)
    //Andesite
        bronzeMesh('exnihilosequentia:crushed_andesite', 'kubejs:chunk.redstone_stone', 0.5, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('exnihilosequentia:crushed_andesite', 'kubejs:chunk.ruby_stone', 0.5, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('exnihilosequentia:crushed_andesite', 'kubejs:chunk.cinnabar_stone', 0.5, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('exnihilosequentia:crushed_andesite', 'kubejs:chunk.chromite_stone', 0.5, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('exnihilosequentia:crushed_andesite', 'kubejs:chunk.almandine_stone', 0.5, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('exnihilosequentia:crushed_andesite', 'kubejs:chunk.pyrope_stone', 0.5, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('exnihilosequentia:crushed_andesite', 'kubejs:chunk.sapphire_stone', 0.5, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('exnihilosequentia:crushed_andesite', 'kubejs:chunk.green_sapphire_stone', 0.5, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('exnihilosequentia:crushed_andesite', 'kubejs:chunk.topaz_stone', 0.5, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('exnihilosequentia:crushed_andesite', 'kubejs:chunk.blue_topaz_stone', 0.5, 0.025, 0.05, 0.075, 0.1)
      //Granite
        bronzeMesh('exnihilosequentia:crushed_granite', 'kubejs:chunk.redstone_stone', 0.5, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('exnihilosequentia:crushed_granite', 'kubejs:chunk.ruby_stone', 0.5, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('exnihilosequentia:crushed_granite', 'kubejs:chunk.cinnabar_stone', 0.5, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('exnihilosequentia:crushed_granite', 'kubejs:chunk.chromite_stone', 0.5, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('exnihilosequentia:crushed_granite', 'kubejs:chunk.bornite_stone', 0.5, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('exnihilosequentia:crushed_granite', 'kubejs:chunk.chalcocite_stone', 0.5, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('exnihilosequentia:crushed_granite', 'kubejs:chunk.lazurite_stone', 0.5, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('exnihilosequentia:crushed_granite', 'kubejs:chunk.sodalite_stone', 0.5, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('exnihilosequentia:crushed_granite', 'kubejs:chunk.lapis_stone', 0.5, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('exnihilosequentia:crushed_granite', 'kubejs:chunk.calcite_stone', 0.5, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('exnihilosequentia:crushed_granite', 'kubejs:chunk.topaz_stone', 0.5, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('exnihilosequentia:crushed_granite', 'kubejs:chunk.blue_topaz_stone', 0.5, 0.025, 0.05, 0.075, 0.1)
    //Diorite
        bronzeMesh('exnihilosequentia:crushed_diorite', 'kubejs:chunk.bornite_stone', 0.5, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('exnihilosequentia:crushed_diorite', 'kubejs:chunk.chalcocite_stone', 0.5, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('exnihilosequentia:crushed_diorite', 'kubejs:chunk.copper_stone', 0.5, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('exnihilosequentia:crushed_diorite', 'kubejs:chunk.galena_stone', 0.5, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('exnihilosequentia:crushed_diorite', 'kubejs:chunk.lead_stone', 0.5, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('exnihilosequentia:crushed_diorite', 'kubejs:chunk.silver_stone', 0.5, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('exnihilosequentia:crushed_diorite', 'kubejs:chunk.lazurite_stone', 0.5, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('exnihilosequentia:crushed_diorite', 'kubejs:chunk.sodalite_stone', 0.5, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('exnihilosequentia:crushed_diorite', 'kubejs:chunk.lapis_stone', 0.5, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('exnihilosequentia:crushed_diorite', 'kubejs:chunk.calcite_stone', 0.5, 0.025, 0.05, 0.075, 0.1)
    //Netherrack
        bronzeMesh('exnihilosequentia:crushed_netherrack', 'kubejs:chunk.chalcopyrite_nether', 0.5, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('exnihilosequentia:crushed_netherrack', 'kubejs:chunk.iron_nether', 0.5, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('exnihilosequentia:crushed_netherrack', 'kubejs:chunk.iron_nether', 0.5, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('exnihilosequentia:crushed_netherrack', 'kubejs:chunk.pyrite_nether', 0.5, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('exnihilosequentia:crushed_netherrack', 'kubejs:chunk.pyrite_nether', 0.5, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('exnihilosequentia:crushed_netherrack', 'kubejs:chunk.copper_nether', 0.5, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('exnihilosequentia:crushed_netherrack', 'kubejs:chunk.copper_nether', 0.5, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('exnihilosequentia:crushed_netherrack', 'kubejs:chunk.yellow_limonite_nether', 0.5, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('exnihilosequentia:crushed_netherrack', 'kubejs:chunk.malachite_nether', 0.5, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('exnihilosequentia:crushed_netherrack', 'kubejs:chunk.magnetite_nether', 0.5, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('exnihilosequentia:crushed_netherrack', 'kubejs:chunk.vanadium_magnetite_nether', 0.5, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('exnihilosequentia:crushed_netherrack', 'kubejs:chunk.gold_nether', 0.5, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('exnihilosequentia:crushed_netherrack', 'kubejs:chunk.nether_quartz_nether', 0.5, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('exnihilosequentia:crushed_netherrack', 'kubejs:chunk.sulfur_nether', 0.5, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('exnihilosequentia:crushed_netherrack', 'kubejs:chunk.sphalerite_nether', 0.5, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('exnihilosequentia:crushed_netherrack', 'kubejs:chunk.tetrahedrite_nether', 0.5, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('exnihilosequentia:crushed_netherrack', 'kubejs:chunk.stibnite_nether', 0.5, 0.025, 0.05, 0.075, 0.1)
    //Endstone
        bronzeMesh('exnihilosequentia:crushed_end_stone', 'kubejs:chunk.beryllium_end', 0.5, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('exnihilosequentia:crushed_end_stone', 'kubejs:chunk.emerald_end', 0.5, 0.025, 0.05, 0.075, 0.1)
        bronzeMesh('exnihilosequentia:crushed_end_stone', 'kubejs:chunk.thorium_end', 0.5, 0.025, 0.05, 0.075, 0.1)

    function steelMesh(inputItem, outputItem, defaultChance, bonusChance1, bonusChance2, bonusChance3){
        event.recipes.exnihilosequentia.sieve(inputItem, outputItem)
        .addRoll(defaultChance, 'iron')
        .addRoll(bonusChance1, 'diamond')
        .addRoll(bonusChance2, 'emerald')
        .addRoll(bonusChance3, 'netherite')
    }
    //gravel
        steelMesh('minecraft:gravel', 'kubejs:chunk.platinum_stone', 0.076, 0.025, 0.05, 0.075)
        steelMesh('minecraft:gravel', 'kubejs:chunk.palladium_stone', 0.0591, 0.025, 0.05, 0.075)
    //sand
        steelMesh('minecraft:sand', 'kubejs:chunk.chalcopyrite_sand', 0.5, 0.025, 0.05, 0.075)
        steelMesh('minecraft:sand', 'kubejs:chunk.iron_sand', 0.5, 0.025, 0.05, 0.075)
        steelMesh('minecraft:sand', 'kubejs:chunk.pyrite_sand', 0.5, 0.025, 0.05, 0.075)
        steelMesh('minecraft:sand', 'kubejs:chunk.yellow_limonite_sand', 0.5, 0.025, 0.05, 0.075)
        steelMesh('minecraft:sand', 'kubejs:chunk.malachite_sand', 0.5, 0.025, 0.05, 0.075)
        steelMesh('minecraft:sand', 'kubejs:chunk.garnierite_sand', 0.5, 0.025, 0.05, 0.075)
        steelMesh('minecraft:sand', 'kubejs:chunk.nickel_sand', 0.5, 0.025, 0.05, 0.075)
        steelMesh('minecraft:sand', 'kubejs:chunk.cobaltite_sand', 0.5, 0.025, 0.05, 0.075)
        steelMesh('minecraft:sand', 'kubejs:chunk.pentlandite_sand', 0.5, 0.025, 0.05, 0.075)
        steelMesh('minecraft:sand', 'kubejs:chunk.bentonite_sand', 0.5, 0.025, 0.05, 0.075)
        steelMesh('minecraft:sand', 'kubejs:chunk.magnesite_sand', 0.5, 0.025, 0.05, 0.075)
        steelMesh('minecraft:sand', 'kubejs:chunk.olivine_sand', 0.5, 0.025, 0.05, 0.075)
    //Andesite
        steelMesh('exnihilosequentia:crushed_andesite', 'kubejs:chunk.chalcopyrite_stone', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_andesite', 'kubejs:chunk.iron_stone', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_andesite', 'kubejs:chunk.pyrite_stone', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_andesite', 'kubejs:chunk.copper_stone', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_andesite', 'kubejs:chunk.yellow_limonite_stone', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_andesite', 'kubejs:chunk.malachite_stone', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_andesite', 'kubejs:chunk.bastnasite_stone', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_andesite', 'kubejs:chunk.monazite_stone', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_andesite', 'kubejs:chunk.neodymium_stone', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_andesite', 'kubejs:chunk.garnierite_stone', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_andesite', 'kubejs:chunk.nickel_stone', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_andesite', 'kubejs:chunk.cobaltite_stone', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_andesite', 'kubejs:chunk.pentlandite_stone', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_andesite', 'kubejs:chunk.bentonite_stone', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_andesite', 'kubejs:chunk.magnesite_stone', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_andesite', 'kubejs:chunk.olivine_stone', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_andesite', 'kubejs:chunk.pitchblende_stone', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_andesite', 'kubejs:chunk.uraninite_stone', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_andesite', 'kubejs:chunk.graphite_stone', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_andesite', 'kubejs:chunk.diamond_stone', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_andesite', 'kubejs:chunk.coal_stone', 0.5, 0.025, 0.05, 0.075)
    //Granite
        steelMesh('exnihilosequentia:crushed_granite', 'kubejs:chunk.chalcopyrite_stone', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_granite', 'kubejs:chunk.pyrite_stone', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_granite', 'kubejs:chunk.yellow_limonite_stone', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_granite', 'kubejs:chunk.bastnasite_stone', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_granite', 'kubejs:chunk.monazite_stone', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_granite', 'kubejs:chunk.neodymium_stone', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_granite', 'kubejs:chunk.garnierite_stone', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_granite', 'kubejs:chunk.nickel_stone', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_granite', 'kubejs:chunk.cobaltite_stone', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_granite', 'kubejs:chunk.pentlandite_stone', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_granite', 'kubejs:chunk.pitchblende_stone', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_granite', 'kubejs:chunk.uraninite_stone', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_granite', 'kubejs:chunk.kyanite_stone', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_granite', 'kubejs:chunk.mica_stone', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_granite', 'kubejs:chunk.cassiterite_stone', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_granite', 'kubejs:chunk.pollucite_stone', 0.5, 0.025, 0.05, 0.075)
    //Diorite
        steelMesh('exnihilosequentia:crushed_diorite', 'kubejs:chunk.yellow_limonite_stone', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_diorite', 'kubejs:chunk.malachite_stone', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_diorite', 'kubejs:chunk.pitchblende_stone', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_diorite', 'kubejs:chunk.uraninite_stone', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_diorite', 'kubejs:chunk.kyanite_stone', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_diorite', 'kubejs:chunk.mica_stone', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_diorite', 'kubejs:chunk.cassiterite_stone', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_diorite', 'kubejs:chunk.pollucite_stone', 0.5, 0.025, 0.05, 0.075)
    //Endstone
        steelMesh('exnihilosequentia:crushed_end_stone', 'kubejs:chunk.grossular_end', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_end_stone', 'kubejs:chunk.spessartine_end', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_end_stone', 'kubejs:chunk.pyrolusite_end', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_end_stone', 'kubejs:chunk.tantalite_end', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_end_stone', 'kubejs:chunk.wulfenite_end', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_end_stone', 'kubejs:chunk.molybdenite_end', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_end_stone', 'kubejs:chunk.powellite_end', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_end_stone', 'kubejs:chunk.garnierite_end', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_end_stone', 'kubejs:chunk.nickel_end', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_end_stone', 'kubejs:chunk.cobaltite_end', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_end_stone', 'kubejs:chunk.pentlandite_end', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_end_stone', 'kubejs:chunk.bentonite_end', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_end_stone', 'kubejs:chunk.magnesite_end', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_end_stone', 'kubejs:chunk.olivine_end', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_end_stone', 'kubejs:chunk.chromite_end', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_end_stone', 'kubejs:chunk.sheldonite_end', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_end_stone', 'kubejs:chunk.palladium_end', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_end_stone', 'kubejs:chunk.scheelite_end', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_end_stone', 'kubejs:chunk.tungstate_end', 0.5, 0.025, 0.05, 0.075)
        steelMesh('exnihilosequentia:crushed_end_stone', 'kubejs:chunk.lithium_end', 0.5, 0.025, 0.05, 0.075)
        

    function aluminiumMesh(inputItem, outputItem, defaultChance, bonusChance1, bonusChance2){
        event.recipes.exnihilosequentia.sieve(inputItem, outputItem)
        .addRoll(defaultChance, 'diamond')
        .addRoll(bonusChance1, 'emerald')
        .addRoll(bonusChance2, 'netherite')
    }
    //Sand
        aluminiumMesh('minecraft:sand', 'kubejs:chunk.beryllium_sand', 0.5, 0.025, 0.05)
        aluminiumMesh('minecraft:sand', 'kubejs:chunk.emerald_sand', 0.5, 0.025, 0.05)
        aluminiumMesh('minecraft:sand', 'kubejs:chunk.thorium_sand', 0.5, 0.025, 0.05)
        aluminiumMesh('minecraft:sand', 'kubejs:chunk.grossular_sand', 0.5, 0.025, 0.05)
        aluminiumMesh('minecraft:sand', 'kubejs:chunk.spessartine_sand', 0.5, 0.025, 0.05)
        aluminiumMesh('minecraft:sand', 'kubejs:chunk.pyrolusite_sand', 0.5, 0.025, 0.05)
        aluminiumMesh('minecraft:sand', 'kubejs:chunk.tantalite_sand', 0.5, 0.025, 0.05)
    //Andesite
        aluminiumMesh('exnihilosequentia:crushed_andesite', 'kubejs:chunk.beryllium_stone', 0.5, 0.025, 0.05)
        aluminiumMesh('exnihilosequentia:crushed_andesite', 'kubejs:chunk.emerald_stone', 0.5, 0.025, 0.05)
        aluminiumMesh('exnihilosequentia:crushed_andesite', 'kubejs:chunk.thorium_stone', 0.5, 0.025, 0.05)
        aluminiumMesh('exnihilosequentia:crushed_andesite', 'kubejs:chunk.soapstone_stone', 0.5, 0.025, 0.05)
        aluminiumMesh('exnihilosequentia:crushed_andesite', 'kubejs:chunk.talc_stone', 0.5, 0.025, 0.05)
        aluminiumMesh('exnihilosequentia:crushed_andesite', 'kubejs:chunk.scheelite_stone', 0.5, 0.025, 0.05)
        aluminiumMesh('exnihilosequentia:crushed_andesite', 'kubejs:chunk.tungstate_stone', 0.5, 0.025, 0.05)
        aluminiumMesh('exnihilosequentia:crushed_andesite', 'kubejs:chunk.lithium_stone', 0.5, 0.025, 0.05)
    //Granite
        aluminiumMesh('exnihilosequentia:crushed_granite', 'kubejs:chunk.graphite_stone', 0.5, 0.025, 0.05)
        aluminiumMesh('exnihilosequentia:crushed_granite', 'kubejs:chunk.diamond_stone', 0.5, 0.025, 0.05)
        aluminiumMesh('exnihilosequentia:crushed_granite', 'kubejs:chunk.coal_stone', 0.5, 0.025, 0.05)
        aluminiumMesh('exnihilosequentia:crushed_granite', 'kubejs:chunk.wulfenite_stone', 0.5, 0.025, 0.05)
        aluminiumMesh('exnihilosequentia:crushed_granite', 'kubejs:chunk.molybdenite_stone', 0.5, 0.025, 0.05)
        aluminiumMesh('exnihilosequentia:crushed_granite', 'kubejs:chunk.powellite_stone', 0.5, 0.025, 0.05)
        aluminiumMesh('exnihilosequentia:crushed_granite', 'kubejs:chunk.soapstone_stone', 0.5, 0.025, 0.05)
        aluminiumMesh('exnihilosequentia:crushed_granite', 'kubejs:chunk.talc_stone', 0.5, 0.025, 0.05)
        aluminiumMesh('exnihilosequentia:crushed_granite', 'kubejs:chunk.scheelite_stone', 0.5, 0.025, 0.05)
        aluminiumMesh('exnihilosequentia:crushed_granite', 'kubejs:chunk.tungstate_stone', 0.5, 0.025, 0.05)
        aluminiumMesh('exnihilosequentia:crushed_granite', 'kubejs:chunk.lithium_stone', 0.5, 0.025, 0.05)
    //Diorite
        aluminiumMesh('exnihilosequentia:crushed_diorite', 'kubejs:chunk.graphite_stone', 0.5, 0.025, 0.05)
        aluminiumMesh('exnihilosequentia:crushed_diorite', 'kubejs:chunk.diamond_stone', 0.5, 0.025, 0.05)
        aluminiumMesh('exnihilosequentia:crushed_diorite', 'kubejs:chunk.coal_stone', 0.5, 0.025, 0.05)
        aluminiumMesh('exnihilosequentia:crushed_diorite', 'kubejs:chunk.soapstone_stone', 0.5, 0.025, 0.05)
        aluminiumMesh('exnihilosequentia:crushed_diorite', 'kubejs:chunk.talc_stone', 0.5, 0.025, 0.05)
        aluminiumMesh('exnihilosequentia:crushed_diorite', 'kubejs:chunk.pentlandite_stone', 0.5, 0.025, 0.05)
    //Netherrack
        aluminiumMesh('exnihilosequentia:crushed_netherrack', 'kubejs:chunk.garnierite_nether', 0.5, 0.025, 0.05)
        aluminiumMesh('exnihilosequentia:crushed_netherrack', 'kubejs:chunk.nickel_nether', 0.5, 0.025, 0.05)
        aluminiumMesh('exnihilosequentia:crushed_netherrack', 'kubejs:chunk.cobaltite_nether', 0.5, 0.025, 0.05)
        aluminiumMesh('exnihilosequentia:crushed_netherrack', 'kubejs:chunk.pentlandite_nether', 0.5, 0.025, 0.05)
        aluminiumMesh('exnihilosequentia:crushed_netherrack', 'kubejs:chunk.redstone_nether', 0.5, 0.025, 0.05)
        aluminiumMesh('exnihilosequentia:crushed_netherrack', 'kubejs:chunk.ruby_nether', 0.5, 0.025, 0.05)
        aluminiumMesh('exnihilosequentia:crushed_netherrack', 'kubejs:chunk.cinnabar_nether', 0.5, 0.025, 0.05)
        aluminiumMesh('exnihilosequentia:crushed_netherrack', 'kubejs:chunk.chromite_nether', 0.5, 0.025, 0.05)
        aluminiumMesh('exnihilosequentia:crushed_netherrack', 'kubejs:chunk.electrotine_nether', 0.5, 0.025, 0.05)
        aluminiumMesh('exnihilosequentia:crushed_netherrack', 'kubejs:chunk.topaz_nether', 0.5, 0.025, 0.05)
        aluminiumMesh('exnihilosequentia:crushed_netherrack', 'kubejs:chunk.blue_topaz_nether', 0.5, 0.025, 0.05)
    //Endstone
        aluminiumMesh('exnihilosequentia:crushed_end_stone', 'kubejs:chunk.naquadah_end', 0.5, 0.025, 0.05)
        aluminiumMesh('exnihilosequentia:crushed_end_stone', 'kubejs:chunk.lazurite_end', 0.5, 0.025, 0.05)
        aluminiumMesh('exnihilosequentia:crushed_end_stone', 'kubejs:chunk.sodalite_end', 0.5, 0.025, 0.05)
        aluminiumMesh('exnihilosequentia:crushed_end_stone', 'kubejs:chunk.lapis_end', 0.5, 0.025, 0.05)
        aluminiumMesh('exnihilosequentia:crushed_end_stone', 'kubejs:chunk.calcite_end', 0.5, 0.025, 0.05)

//----------------------------------------------------------------------//
    //Meshes
        event.shaped('1x exnihilosequentia:flint_mesh', ['RSR', 'SRS', 'RSR'], {S: 'minecraft:string', R: 'gtceu:rod.bronze'}).id('exnihilosequentia:ens_flint_mesh')
	    event.shaped('1x exnihilosequentia:iron_mesh', ['RSR', 'SRS', 'RSR'], {S: 'minecraft:string', R: 'gtceu:rod.steel'}).id('exnihilosequentia:ens_iron_mesh')
	    event.shaped('1x exnihilosequentia:diamond_mesh', ['RSR', 'SRS', 'RSR'], {S: 'minecraft:string', R: 'gtceu:rod.aluminium'}).id('exnihilosequentia:ens_diamond_mesh')
	    event.shaped('1x exnihilosequentia:emerald_mesh', ['RSR', 'SRS', 'RSR'], {S: 'minecraft:string', R: 'gtceu:rod.stainless_steel'}).id('exnihilosequentia:ens_emerald_mesh')
	    event.shaped('1x exnihilosequentia:netherite_mesh', ['RSR', 'SRS', 'RSR'], {S: 'minecraft:string', R: 'gtceu:rod.titanium'}).id('exnihilosequentia:ens_netherite_mesh')

    //remove
    //gravel
        event.remove({id:'exnihilosequentia:sieve/ens_copper_pieces_gravel'})
	    event.remove({id:'exnihilosequentia:sieve/ens_lead_pieces_gravel'})
	    event.remove({id:'exnihilosequentia:sieve/ens_silver_pieces_gravel'})
	    event.remove({id:'exnihilosequentia:sieve/ens_nickel_pieces_gravel'})
	    event.remove({id:'exnihilosequentia:sieve/ens_iron_pieces_gravel'})
	    event.remove({id:'exnihilosequentia:sieve/ens_tin_pieces_gravel'})
	    event.remove({id:'exnihilosequentia:sieve/ens_gold_pieces_gravel'})
	    event.remove({id:'exnihilosequentia:sieve/ens_aluminum_pieces_gravel'})
	    event.remove({id:'exnihilosequentia:sieve/ens_zinc_pieces_gravel'})
	    event.remove({id:'exnihilosequentia:sieve/ens_uranium_pieces_gravel'})
	    event.remove({id:'exnihilosequentia:sieve/ens_platinum_pieces_gravel'})
        event.remove({id:'exnihilosequentia:sieve/ens_diamond'})
	    event.remove({id:'exnihilosequentia:sieve/ens_emerald'})
	    event.remove({id:'exnihilosequentia:sieve/ens_lapis_lazuli'})
	    event.remove({id:'exnihilosequentia:sieve/ens_coal'})
        event.remove({id:'exnihilosequentia:sieve/ens_flint'})
    //sand
        event.remove({id:'exnihilosequentia:sieve/ens_cocoa_beans'})
	    event.remove({id:'exnihilosequentia:sieve/ens_prismarine_shard'})
	    event.remove({id:'exnihilosequentia:sieve/ens_prismarine_crystals'})
	    event.remove({id:'exnihilosequentia:sieve/ens_iron_pieces_sand'})
    //netherrack
        event.remove({id:'exnihilosequentia:sieve/ens_gold_pieces_crushed_netherrack'})
	    event.remove({id:'exnihilosequentia:sieve/ens_warped_nylium_spore'})
	    event.remove({id:'exnihilosequentia:sieve/ens_crimson_nylium_spore'})
	    event.remove({id:'exnihilosequentia:sieve/ens_pebble_netherrack'})
    //endstone
	    event.remove({id:'exnihilosequentia:sieve/ens_pebble_end_stone'})
	    event.remove({id:'exnihilosequentia:sieve/ens_ender_pearl'})
	    event.remove({id:'exnihilosequentia:sieve/ens_netherite_scrap'})
})
