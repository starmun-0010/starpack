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


  //tool belt recipees
  event.shaped(Item.of('toolbelt:belt', 1, { Size: 3 }), [
    'SLS',
    'L L',
    'LIL'
  ], {
    S: '#forge:string',
    L: 'minecraft:leather',
    I: 'minecraft:iron_ingot'
  }).id('starpack:toolbelt_size_three');

  event.shaped(Item.of('toolbelt:belt', 1, { Size: 6 }), [
    'TP ',
    '   ',
    '   '
  ], {
    T: Item.of('toolbelt:belt', 1, { Size: 3 }),
    P: Item.of('toolbelt:pouch')
  }).id('starpack:toolbelt_size_six');

  event.shaped(Item.of('toolbelt:belt', 1, { Size: 9 }), [
    'TP ',
    '   ',
    '   '
  ], {
    T: Item.of('toolbelt:belt', 1, { Size: 6 }),
    P: Item.of('toolbelt:pouch')
  }).id('starpack:toolbelt_size_nine');


  //botany pot recipes
  event.shaped('botanypots:hopper_botany_pot', [
    'PH ',
    '   ',
    '   '
  ], {
    P: 'botanypots:botany_pot',
    H: 'pneumaticcraft:omnidirectional_hopper'
  });

  event.shaped('botanypots:hopper_botany_pot', [
    'TPT',
    '   ',
    '   '
  ], {
    T: 'botania:manasteel_nugget',
    P: 'botanypots:botany_pot'
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