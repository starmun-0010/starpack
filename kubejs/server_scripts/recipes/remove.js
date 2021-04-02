//priority: 97
onEvent('recipes', event => {

   event.remove({output: 'toolbelt:belt'});
   event.remove({output: 'botanypots:hopper_botany_pot'});
});