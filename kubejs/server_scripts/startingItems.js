// priority: 98

//giving the player an Akashic tome on their first login
events.listen('player.logged_in', function (event) {
    if (!event.hasGameStage('starting_items')) {
    event.addGameStage('starting_items')
    event.player.give(Item.of('akashictome:tome', AKASHIC_TOME_NBT));
  }  
})