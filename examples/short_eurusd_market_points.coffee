OneBroker = require '../src/client'
client    = OneBroker( require "../_key" )

callback = ( error, response ) ->

  if error
    console.log "got error"
    console.log error
    return

  console.log response

params =
  symbol      : 'EURUSD'
  margin      : 0.01
  direction   : 'short'
  leverage    : 1
  order_type  : 'market'
  stop_loss   : '-100'
  take_profit : '+100'

client.order.create( params, callback )
