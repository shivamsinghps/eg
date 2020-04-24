const express = require('express')
const Booking = require('./src/models/booking')
const bodyParser = require('body-parser')
const dist = require('./src/eg')
const db = require('./src/database/connection'),
	sequelize = db.sequelize,
	Sequelize = db.Sequelize;

const app = express()

app.get('/',async (req,res)=>
{
  const userslist = []
  const userslist2 = []
  const users = await Booking.findAll();
  users.map(user=>{
    const userdata ={
      booking_id:user.booking_id,
      name:user.booking_status,
      loc:user.location
    }
    userslist.push(userdata)
})
var lat = parseFloat(req.query.lat);
var lng = parseFloat(req.query.lng);
const location ={latitude:lat,
                longitude:lng}
userslist.map(user=>{
  let loc2 ={latitude:user.loc.coordinates[0],
             longitude:user.loc.coordinates[1]}
  userslist2.push(`${dist(location,loc2)} is dist between [${loc2.latitude},${loc2.longitude}] and [${location.latitude},${location.longitude}]`)
})
res.send(userslist2)
}
)

app.get('/ntaxis',(req,res)=>{
var lat = parseFloat(req.query.lat);
var lng = parseFloat(req.query.lng);
var attributes = Object.keys(Booking.rawAttributes);
var location = sequelize.literal(`ST_GeomFromText('POINT(${lng} ${lat})')`);
var distance = sequelize.fn('ST_Distance_Sphere', sequelize.literal('location'), location);
attributes.push(distance,'distance');

// res.send(attributes)
Booking.findAll({
      attributes: attributes,
      order: [['distance', 'DESC']],
      where: sequelize.where(distance)
    })
    .then(function(instance){
      return res.json(200, instance);
    })

})



app.listen(9001, () => {
  console.log('Server Listening');
});
