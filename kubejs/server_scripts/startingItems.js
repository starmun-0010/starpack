// priority: 98

//giving the player an Akashic tome on their first login
events.listen('player.logged_in', function (event) {
  event.server.schedule(10, event.server, function (callback) {
    if (!event.hasGameStage('starting_items')) {
      event.player.getInventory().clear();
      event.addGameStage('starting_items')
      event.player.give(Item.of('akashictome:tome', AKASHIC_TOME_NBT));
      event.player.give('ftbquests:book');
    }  
  })
 
})