//priority: 96
onEvent('recipes', event => {

  //Akashic Tome
  
  event.shaped(Item.of('akashictome:tome', AKASHIC_TOME_NBT), [
    'T  ',
    '   ',
    '   '
  ], {
    T: 'akashictome:tome'
    
  });

  //seed pouch leather recipe
  event.shaped('quark:seed_pouch', [
    ' S ',
    'LBL',
    ' L '
  ], {
    S: '#forge:string',
    L: 'minecraft:leather',
    B: '#quark:seed_pouch_holdable'
  });

   //Byg chests recipes
   event.shaped('quark:oak_chest', [
    'PPP',
    'P P',
    'PPP'
  ], {
    P: '#byg:planks'
  });
});