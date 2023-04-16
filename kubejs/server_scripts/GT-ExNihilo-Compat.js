GTCEuServerEvents.recipe(event => {
    function MACERATOR(Ore, Crushed, Byproduct, Dust, ID){
        event.builder("macerator", `macerate_${ID}_ore_chunk_to_crushed_ore`)
        .itemInputs(Ore)
        .itemOutputs(Crushed, Dust)
        .chancedOutput(Byproduct, 1400, 850)
        .duration(400)
        .EUt(12)
        .save(event.provider);
    }
    MACERATOR('kubejs:chunk.banded_iron_stone', '2x gtceu:crushed.banded_iron', 'gtceu:dust.magnetite', 'gtceu:dust.stone', 'banded_iron')

    function FORGE_HAMMER(Ore, Crushed, ID){
        event.builder("forge_hammer", `hammer_${ID}_ore_chunk_to_crushed_ore`)
        .itemInputs(Ore)
        .itemOutputs(Crushed)
        .duration(10)
        .EUt(16)
        .save(event.provider);
    }
    FORGE_HAMMER('kubejs:chunk.banded_iron_stone', '2x gtceu:crushed.banded_iron', 'banded_iron')
})

ServerEvents.tags('item', event => {
	event.add('forge:ores/banded_iron/stone', ['kubejs:chunk.banded_iron_stone'])
})