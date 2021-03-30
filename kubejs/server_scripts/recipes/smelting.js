//priority: 96
onEvent('recipes', event => {

  // Create a function and use that to make things shorter. You can combine multiple actions
  const multiSmelt = (output, input) => {
    event.smelting(output, input).xp(1.0)
    event.blasting(output, input).xp(1.0)
  }
  
  multiSmelt('immersiveengineering:ingot_nickel', 'pedestals:dustnickel')
  multiSmelt('immersiveengineering:ingot_aluminum', 'pedestals:dustaluminum')

})