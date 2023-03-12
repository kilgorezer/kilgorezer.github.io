#race
  changemodel humanoid
  cmd tp 14 145 128 0 0
  msg %4Hold W to race.
  delay 500
  cpemsg announce %13
  delay 1000
  cpemsg announce %22
  delay 1000
  cpemsg announce %31
  delay 1000
  cpemsg announce %4Go!
  terminate
#lapupdate
  cpemsg announce %eYou did a lap!
  terminate
