// priority: 96

onEvent('recipes', event => {
  event.replaceInput({}, 'minecraft:cobblestone', '#forge:cobblestone');
  event.replaceInput({}, 'minecraft:stone', '#forge:stone');
})