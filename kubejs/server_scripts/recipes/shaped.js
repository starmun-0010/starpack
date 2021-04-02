//priority: 97
onEvent('recipes', event => {

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
  event.shaped(Item.of('toolbelt:belt', { Size: 4 }), [
    'SLS',
    'L L',
    'LIL'
  ], {
    S: '#forge:string',
    L: 'minecraft:leather',
    I: 'minecraft:iron_ingot'
  });

  event.shaped(Item.of('toolbelt:belt', { Size: 6 }), [
    'TP ',
    '   ',
    '   '
  ], {
    T: Item.of('toolbelt:belt', { Size: 3 }),
    P: Item.of('toolbelt:pouch')
  });
  event.shaped(Item.of('toolbelt:belt', { Size: 9 }), [
    'TP ',
    '   ',
    '   '
  ], {
    T: Item.of('toolbelt:belt', { Size: 6 }),
    P: Item.of('toolbelt:pouch')
  });


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
});