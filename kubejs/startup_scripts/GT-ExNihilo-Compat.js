if (Platform.isLoaded('exnihilosequentia')) {
    StartupEvents.registry('item', event => {
        //Stone
            let ChunkStone = 'kubejs:item/ore/stone.chunk_base'
            let GemStone = 'kubejs:item/ore/stone.gem_base'
        //Sand
            let ChunkSand = 'kubejs:item/ore/sand.chunk_base'
            let GemSand = 'kubejs:item/ore/sand.gem_base'
        //Nether
            let ChunkNether = 'kubejs:item/ore/nether.chunk_base'
            let GemNether = 'kubejs:item/ore/nether.gem_base'
        //End
            let ChunkEnd = 'kubejs:item/ore/end.chunk_base'
            let GemEnd = 'kubejs:item/ore/end.gem_base'
        //Overlay
            let OverlayChunk = 'kubejs:item/ore/chunk_overlay'
            let OverlayGem = 'kubejs:item/ore/gem_overlay'
        //Colours
            let ColorAlmandine = 0xED0000
            let ColorAluminium = 0x69A4C4
            let ColorAlunite = 0xB89335
            let ColorAmethyst = 0x7B5DAF
            let ColorApatite = 0xBABAED
            let ColorAsbestos = 0xBCBCBC
            let ColorBandedIron = 0x845252
            let ColorBarite = 0xBCC0C0
            let ColorBasalticMineral = 0x212921
            let ColorBastnasite = 0x683917
            let ColorBauxite = 0xAC5600
            let ColorBentonite = 0x9C8985
            let ColorBeryllium = 0x5BA45B
            let ColorBornite = 0x65441D
            let ColorCalcite = 0xCDBCB4
            let ColorCassiterite = 0xBFBFBF
            let ColorCertusQuartz = 0x797999
            let ColorChalcocite = 0x313131
            let ColorChalcopyrite = 0x836221
            let ColorChromite = 0x1E110D
            let ColorCinnabar = 0x8C0000
            let ColorCoal = 0x414141
            let ColorCobalt = 0x313199
            let ColorCobaltite = 0x4545D8
            let ColorCooperite = 0xDEDEAE
            let ColorCopper = 0x8F3800
            let ColorDiamond = 0xBAEDED
            let ColorDiatomite = 0x86869C
            let ColorElectrotine = 0x37A6B8
            let ColorEmerald = 0x4AED4A
            let ColorFullersEarth = 0x848463
            let ColorGalena = 0x573457
            let ColorGarnet = 0x9F4F00
            let ColorGarnetRed = 0x602626
            let ColorGarnetYellow = 0x838334
            let ColorGarnetSand = 0xBCBCBC
            let ColorGarnierite = 0x2DB640
            let ColorGlauconite = 0x678F30
            let ColorGold = 0xD1BC41
            let ColorGraniticMineral = 0x1E2D2D
            let ColorGraphite = 0x676767
            let ColorGrossular = 0xBA5D00
            let ColorGypsum = 0xBCBCCD
            let ColorIlmenite = 0x3C2F2B
            let ColorIron = 0xB4B4B4
            let ColorKyanite = 0x5858C8
            let ColorLapis = 0x3838B0
            let ColorLazurite = 0x4957C0
            let ColorLead = 0x4F384F
            let ColorLepidolite = 0xB02567
            let ColorLimoniteBrown = 0xAE5700
            let ColorLimoniteYellow = 0x818100
            let ColorLithium = 0xA1AABB
            let ColorMagnesite = 0xACAC88
            let ColorMagnetite = 0x191919
            let ColorMalachite = 0x678F30
            let ColorMica = 0xA2A2AA
            let ColorMolybdenite = 0x191919
            let ColorMolybdenum = 0x65657C
            let ColorMonazite = 0x314531
            let ColorNaquadah = 0x2B2B2B
            let ColorNeodymium = 0x383838
            let ColorNetherQuartz = 0x807584
            let ColorNickel = 0xA4A4CD
            let ColorOilsands = 0x080808
            let ColorOlivine = 0x8CED8C
            let ColorOpal = 0x00007A
            let ColorPalladium = 0x4B4B4B
            let ColorPentlandite = 0x7C7104
            let ColorPitchblende = 0xC1CB00
            let ColorPlatinum = 0xE8E8B6
            let ColorPlutonium = 0xDD2E2E
            let ColorPollucite = 0x857575
            let ColorPowellite = 0xDEDE00
            let ColorPyrite = 0x735C1F
            let ColorPyrochlore = 0x270F00
            let ColorPyrolusite = 0x7B7B8B
            let ColorPyrope = 0x4E2141
            let ColorQuartzite = 0xA3B3A3
            let ColorRealgar = 0x921F21
            let ColorRedstone = 0x500000
            let ColorRuby = 0x5B2424
            let ColorSalt = 0xCCCCCC
            let ColorSaltRock = 0xBF9F9F
            let ColorSaltpeter = 0xB7B7B7
            let ColorSapphire = 0x5D5DBA
            let ColorSapphireGreen = 0x5DBA79
            let ColorScheelite = 0xAE7A11
            let ColorSilver = 0xA7A7C2
            let ColorSoapstone = 0x4E774E
            let ColorSodalite = 0x1010CC
            let ColorSpessartine = 0x7A3030
            let ColorSphalerite = 0xD1D1D1
            let ColorSpodumene = 0xB19E9E
            let ColorStibnite = 0x3B3B3B
            let ColorSulfur = 0xA4A400
            let ColorTalc = 0x428442
            let ColorTantalite = 0x7E4623
            let ColorTetrahedrite = 0xBA1E00
            let ColorThorium = 0x001900
            let ColorTin = 0xC8C8C8
            let ColorTopaz = 0x7A3D00
            let ColorTopazBlue = 0x3B4869
            let ColorTricalciumPhosphate = 0xDCDC00
            let ColorTrona = 0x7E7E58
            let ColorTungstate = 0x2E2A1D
            let ColorUraninite = 0x191919
            let ColorVanadiumMagnetite = 0x1E1E34
            let ColorWulfenite = 0xC46200
            let ColorZeolite = 0xC4BCBC

        //Stone
            function stone(id, name, base, overlay, color){
                event.create(`chunk.${id}_stone`).displayName(`${name} Stone Chunk`).textureJson({layer0: base, layer1: overlay}).color(1, color)
            }
                //Gravel
                    //string
                        stone('coal', 'Coal', ChunkStone, OverlayChunk, ColorCoal)
                        stone('trona', 'Trona', ChunkStone, OverlayChunk, ColorTrona)
                        stone('salt', 'Salt', GemStone, OverlayGem, ColorSalt)
                        stone('rock_salt', 'Rock Salt', GemStone, OverlayGem, ColorSaltRock)
                        stone('lepidolite', 'Lepidolite', ChunkStone, OverlayChunk, ColorLepidolite)
                        stone('spodumene', 'Spodumene', ChunkStone, OverlayChunk, ColorSpodumene)
                        stone('tin', 'Tin', ChunkStone, OverlayChunk, ColorTin)
                        stone('cassiterite', 'Cassiterite', ChunkStone, OverlayChunk, ColorCassiterite)
                        stone('basaltic_mineral', 'Basaltic Mineral', GemStone, OverlayGem, ColorBasalticMineral)
                        stone('granitic_mineral', 'Granitic Mineral', GemStone, OverlayGem, ColorGraniticMineral)
                        stone('fullers_earth', 'Fullers Earth', ChunkStone, OverlayChunk, ColorFullersEarth)
                        stone('gypsum', 'Gypsum', ChunkStone, OverlayChunk, ColorGypsum)
                    //Bronze
                        stone('galena', 'Galena', ChunkStone, OverlayChunk, ColorGalena)
                        stone('lead', 'Lead', ChunkStone, OverlayChunk, ColorLead)
                        stone('silver', 'Silver', ChunkStone, OverlayChunk, ColorSilver)
                        stone('zeolite', 'Zeolite', ChunkStone, OverlayChunk, ColorZeolite)
                        stone('glauconite_sand', 'Glauconite Sand', GemStone, OverlayGem, ColorGlauconite)
                        stone('oilsands', 'Oilsands', ChunkStone, OverlayChunk, ColorOilsands)
                        stone('garnet_sand', 'Garnet Sand', GemStone, OverlayGem, ColorGarnetSand)
                        stone('asbestos', 'Asbestos', ChunkStone, OverlayChunk, ColorAsbestos)
                        stone('diatomite', 'Diatomite', ChunkStone, OverlayChunk, ColorDiatomite)
                    //Steel
                        stone('platinum', 'Platinum', ChunkStone, OverlayChunk, ColorPlatinum)
                        stone('palladium', 'Palladium', ChunkStone, OverlayChunk, ColorPalladium)
                //Andesite
                    //Bronze
                        stone('redstone', 'Redstone', ChunkStone, OverlayChunk, ColorRedstone)
                        stone('ruby', 'Ruby', GemStone, OverlayGem, ColorRuby)
                        stone('cinnabar', 'Cinnabar', GemStone, OverlayGem, ColorCinnabar)
                        stone('chromite', 'Chromite', ChunkStone, OverlayChunk, ColorChromite)
                        stone('almandine', 'Almandine', GemStone, OverlayGem, ColorAlmandine)
                        stone('pyrope', 'Pyrope', GemStone, OverlayGem, ColorPyrope)
                        stone('sapphire', 'Sapphire', GemStone, OverlayGem, ColorSapphire)
                        stone('green_sapphire', 'Green Sapphire', GemStone, OverlayGem, ColorSapphireGreen)
                        stone('topaz', 'Topaz', GemStone, OverlayGem, ColorTopaz)
                        stone('blue_topaz', 'Blue Topaz', GemStone, OverlayGem, ColorTopazBlue)
                    //Steel
                        stone('chalcopyrite', 'Chalcopyrite', ChunkStone, OverlayChunk, ColorChalcopyrite)
                        stone('iron', 'Iron', ChunkStone, OverlayChunk, ColorIron)
                        stone('pyrite', 'Pyrite', ChunkStone, OverlayChunk, ColorPyrite)
                        stone('copper', 'Copper', ChunkStone, OverlayChunk, ColorCopper)
                        stone('yellow_limonite', 'Yellow Limonite', ChunkStone, OverlayChunk, ColorLimoniteYellow)
                        stone('malachite', 'Malachite', ChunkStone, OverlayChunk, ColorMalachite)
                        stone('bastnasite', 'Bastnasite', ChunkStone, OverlayChunk, ColorBastnasite)
                        stone('monazite', 'Monazite', GemStone, OverlayGem, ColorMonazite)
                        stone('neodymium', 'Neodymium', ChunkStone, OverlayChunk, ColorNeodymium)
                        stone('garnierite', 'Garnierite', ChunkStone, OverlayChunk, ColorGarnierite)
                        stone('nickel', 'Nickel', ChunkStone, OverlayChunk, ColorNickel)
                        stone('cobaltite', 'Cobaltite', ChunkStone, OverlayChunk, ColorCobaltite)
                        stone('pentlandite', 'Pentlandite', ChunkStone, OverlayChunk, ColorPentlandite)
                        stone('bentonite', 'Bentonite', GemStone, OverlayGem, ColorBentonite)
                        stone('magnesite', 'Magnesite', GemStone, OverlayGem, ColorMagnesite)
                        stone('olivine', 'Olivine', GemStone, OverlayGem, ColorOlivine)
                        stone('pitchblende', 'Pitchblende', ChunkStone, OverlayChunk, ColorPitchblende)
                        stone('uraninite', 'Uraninite', ChunkStone, OverlayChunk, ColorUraninite)
                        stone('graphite', 'Graphite', ChunkStone, OverlayChunk, ColorGraphite)
                        stone('diamond', 'Diamond', GemStone, OverlayGem, ColorDiamond)
                        //Coal Stone Line - 136
                    //Aluminium
                        stone('beryllium', 'Beryllium', ChunkStone, OverlayChunk, ColorBeryllium)
                        stone('emerald', 'Emerald', GemStone, OverlayGem, ColorEmerald)
                        stone('thorium', 'Thorium', ChunkStone, OverlayChunk, ColorThorium)
                        stone('soapstone', 'Stonestone', ChunkStone, OverlayChunk, ColorSoapstone)
                        stone('talc', 'Talc', ChunkStone, OverlayChunk, ColorTalc)
                        stone('scheelite', 'Scheelite', ChunkStone, OverlayChunk, ColorScheelite)
                        stone('tungstate', 'Tungstate', ChunkStone, OverlayChunk, ColorTungstate)
                        stone('lithium', 'Lithium', ChunkStone, OverlayChunk, ColorLithium)
                //Granite
                    //String
                    //Bronze
                    //Steel
                    //Aluminium
                //Diorite
        //Sandy
            function sand(id, name, base, overlay, color){
                event.create(`chunk.${id}_sand`).displayName(`${name} Sandy Chunk`).textureJson({layer0: base, layer1: overlay}).color(1, color)
            }
            //Sand
                //Bronze
                    sand('copper', 'Copper', ChunkSand, OverlayChunk, ColorCopper)
                    sand('redstone', 'Redstone', ChunkSand, OverlayChunk, ColorRedstone)
                    sand('cinnabar', 'Cinnabar', GemSand, OverlayGem, ColorCinnabar)
                    sand('chromite', 'Chromite', ChunkSand, OverlayChunk, ColorChromite)
                    sand('pyrope', 'Pyrope', GemSand, OverlayGem, ColorPyrope)
                    sand('sapphire', 'Sapphire', GemSand, OverlayGem, ColorSapphire)
                    sand('green_sapphire', 'Green Sapphire', GemSand, OverlayGem, ColorSapphireGreen)
                //Steel
                    sand('chalcopyrite', 'Chalcopyrite', ChunkSand, OverlayChunk, ColorChalcopyrite)
                    sand('iron', 'Iron', ChunkSand, OverlayChunk, ColorIron)
                    sand('pyrite', 'Pyrite', ChunkSand, OverlayChunk, ColorPyrite)
                    sand('yellow_limonite', 'Yellow Limonite', ChunkSand, OverlayChunk, ColorLimoniteYellow)
                    sand('malachite', 'Malachite', ChunkSand, OverlayChunk, ColorMalachite)
                    sand('garnierite', 'Garnierite', ChunkSand, OverlayChunk, ColorGarnierite)
                    sand('nickel', 'Nickel', ChunkSand, OverlayChunk, ColorNickel)
                    sand('cobaltite', 'Cobaltite', ChunkSand, OverlayChunk, ColorCobaltite)
                    sand('pentlandite', 'Pentlandite', ChunkSand, OverlayChunk, ColorPentlandite)
                    sand('bentonite', 'Bentonite', GemSand, OverlayGem, ColorBentonite)
                    sand('magnesite', 'Magnesite', GemSand, OverlayGem, ColorMagnesite)
                    sand('olivine', 'Olivine', GemSand, OverlayGem, ColorOlivine)
                //Aluminium
                    sand('beryllium', 'Beryllium', ChunkSand, OverlayChunk, ColorBeryllium)
                    sand('emerald', 'Emerald', GemSand, OverlayGem, ColorEmerald)
                    sand('thorium', 'Thorium', ChunkSand, OverlayChunk, ColorThorium)
                    sand('grossular', 'Grossular', GemSand, OverlayGem, ColorGrossular)
                    sand('spessartine', 'Spessartine', GemSand, OverlayGem, ColorSpessartine)
                    sand('pyrolusite', 'Pyrolusite', ChunkSand, OverlayChunk, ColorPyrolusite)
                    sand('tantalite', 'Tantalite', ChunkSand, OverlayChunk, ColorTantalite)
        //Nether
            function nether(id, name, base, overlay, color){
                event.create(`chunk.${id}_nether`).displayName(`${name} Nether Chunk`).textureJson({layer0: base, layer1: overlay}).color(1, color)
            }
            //Netherrack
                //String
                //Bronze
                //Steel
                //Aluminium
        //End
            function end(id, name, base, overlay, color){
                event.create(`chunk.${id}_end`).displayName(`${name} End Chunk`).textureJson({layer0: base, layer1: overlay}).color(1, color)
            }
            //Endstone
                //String
                //Bronze
                //Steel
                //Aluminium
})
if (Platform.isLoaded('gtceu')) {
    GTCEuStartupEvents.recipeType(event => {
        event.create("electric_sieve", "drack-electric")
		.setEUIO("IN")
		.setMaxIOSize(2, 63, 0, 0)
		.setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
		.setProgressBar(GuiTextures.PROGRESS_BAR_SIFT, FillDirection.UP_TO_DOWN)
	.setSound(GTSoundEntries.MACERATOR);
    })
    GTCEuStartupEvents.machine(event => {
        event.simpleMachines("electric_sieve", "electric_sieve", tier => 3200, GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV);
    })
}}
